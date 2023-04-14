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

  const pcId = req.query.pcId as string;
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json(respond('Authentication token not provided'));
  }

  try {
    const decodedToken: any = jwt.verify(token, JWT_SECRET);
    const userId = decodedToken.userId;

    const mongoClient = await connectToMongoClient();
    const db = mongoClient.db(dbName);
    const pcCollection = db.collection('pc');

    const pc = await pcCollection.findOne({
      _id: new ObjectId(pcId),
    });

    if (!pc) {
      return res.status(201).json(respond('PC not found'));
    } else {
      res.status(200).json(respond(pc));
    }
  } catch (error) {
    const err = error as Error;

    if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
      return res.status(401).json(respond('Invalid or expired token'));
    }

    console.error('Error connecting to MongoDB:', err);
    return res.status(500).json(respond('Internal server error'));
  }
}
