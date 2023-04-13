import jwt from 'jsonwebtoken';
import md5 from 'md5';
import { ObjectId } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import {
  connectToMongoClient,
  dbName,
  respond,
} from '../../../../../utils/mongoUtils';

type Data = {
  [a: string]: any;
};

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

async function validateInputs(req: NextApiRequest): Promise<string | null> {
  const { password, newPassword, confirmNewPassword } = req.body;

  if (!password || !newPassword || !confirmNewPassword) {
    return 'Password/New Password/Confirm Password required';
  }

  if (newPassword !== confirmNewPassword) {
    return 'New Password and Confirm Password not equal';
  }

  return null;
}

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

    const newPassword = md5(req.body.newPassword);
    const password = md5(req.body.password);

    const validationResult = await validateInputs(req);
    if (validationResult) {
      return res.status(400).json(respond(validationResult));
    }

    const mongoClient = await connectToMongoClient();
    const db = mongoClient.db(dbName);
    const usersCollection = db.collection('users');
    const user = await usersCollection.findOne({ _id: new ObjectId(userID) });

    if (!user) {
      return res.status(401).json(respond('Invalid User'));
    }

    if (user.password !== password) {
      return res.status(401).json(respond('Invalid User'));
    }

    await usersCollection.updateOne(
      { _id: new ObjectId(userID) },
      { $set: { password: newPassword } },
    );

    res.status(200).json(respond('Update Done'));
  } catch (error) {
    const err = error as Error;
    if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
      return res.status(401).json(respond('Invalid or expired token'));
    }

    console.error('Error:', err);
    return res.status(500).json(respond('Internal server error'));
  }
}
