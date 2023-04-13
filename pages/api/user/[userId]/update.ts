// pages/api/user/update.ts
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  connectToMongoClient,
  dbName,
  respond,
} from '../../../../utils/mongoUtils';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

type Data = {
  [a: string]: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'POST') {
    return res.status(405).json(respond('Method not allowed'));
  }

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json(respond('Authentication token not provided'));
  }

  try {
    const decodedToken: any = jwt.verify(token, JWT_SECRET);
    const userID = req.body.userID;

    if (decodedToken.userId !== userID) {
      return res.status(401).json(respond('Authentication failed'));
    }

    if (req.body.firstName === '' || req.body.lastName === '') {
      return res.status(401).json(respond('First name/Last name required'));
    }

    const mongoClient = await connectToMongoClient();
    const db = mongoClient.db(dbName);
    const usersCollection = db.collection('users');

    await usersCollection.updateOne(
      { _id: new ObjectId(userID) },
      { $set: { ...req.body } },
    );

    res.status(200).json(respond('Update done'));
  } catch (error) {
    const err = error as Error;

    if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
      return res.status(401).json(respond('Invalid or expired token'));
    }

    console.error('Error connecting to MongoDB:', err);
    return res.status(500).json(respond('Internal server error'));
  }
}
