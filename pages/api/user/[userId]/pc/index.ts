import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  connectToMongoClient,
  dbName,
  respond,
} from '../../../../../utils/mongoUtils';

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

  const userId = req.query.userId as string;
  const { pcKey, pcName, platform, publicAccessKey, pcOnline, pcSocketID } =
    req.body;

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json(respond('Authentication token not provided'));
  }

  try {
    const decodedToken: any = jwt.verify(token, JWT_SECRET);

    if (decodedToken.userId !== userId) {
      return res.status(401).json(respond('Authentication failed'));
    }

    const mongoClient = await connectToMongoClient();
    const db = mongoClient.db(dbName);
    const pcCollection = db.collection('pc');

    const newPC = {
      pcKey,
      userID: userId,
      pcName,
      platform,
      publicAccessKey,
      pcOnline,
      pcSocketID,
      startDate: new Date(),
      status: 1,
      publicAccessStatus: 0,
      authApp: '',
    };

    const result = await pcCollection.insertOne(newPC);

    if (!result) {
      return res.status(400).json(respond('Failed to create a new PC entry'));
    } else {
      res.status(201).json(respond({ success: true, newPC: result }));
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
