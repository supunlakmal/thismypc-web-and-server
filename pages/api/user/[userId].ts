import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  connectToMongoClient,
  dbName,
  respond,
} from '../../../utils/mongoUtils';
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
type Data = {
  [a: string]: any;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'GET') {
    return res.status(405).json(respond('Method not allowed'));
  }

  const userId = (req.query.userId as string) || '';

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json(respond('Authentication token not provided'));
  }

  try {
    // Verify JWT token
    const decodedToken: any = jwt.verify(token, JWT_SECRET);

    if (decodedToken.userId !== userId) {
      return res.status(401).json(respond('Authentication failed'));
    }

    const mongoClient = await connectToMongoClient();
    const db = mongoClient.db(dbName);
    const usersCollection = db.collection('users');

    // Find the user in the database
    const user = await usersCollection.findOne({ _id: new ObjectId(userId) });
    if (!user) {
      return res.status(401).json(respond('User not found'));
    }

    const { _id, firstName, lastName, email } = user;
    const userData = { _id, firstName, lastName, email };

    res.status(200).json(respond(userData));
  } catch (error) {
    const err = error as Error;

    if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
      return res.status(401).json(respond('Invalid or expired token'));
    }

    console.error('Error connecting to MongoDB:', err);
    return res.status(500).json(respond('Internal server error'));
  }
}
