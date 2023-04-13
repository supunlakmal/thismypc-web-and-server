import jwt from 'jsonwebtoken';
import md5 from 'md5';
import type { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';
import { applyCors } from '../../middlewares/cors';
import { connectToMongoClient, dbName, respond } from '../../utils/mongoUtils';

type Data = {
  [a: string]: any;
};

// JWT secret key (should be moved to .env file in a real-world application)
const JWT_SECRET = process.env.JWT_SECRET as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  // Apply CORS middleware
  await applyCors(req, res);

  // Extract email and password from the request body
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(401).json(respond('Email and password are required'));
  }

  // Check if the email is valid
  if (!validator.isEmail(email)) {
    return res.status(401).json(respond('Invalid Email'));
  }

  // Encrypt the password
  const encryptedPassword = md5(password);

  try {
    // Connect to the MongoDB client
    const mongoClient = await connectToMongoClient();
    const db = mongoClient.db(dbName);
    const usersCollection = db.collection('users');

    // Find the user with the provided email and encrypted password
    const user = await usersCollection.findOne({
      email,
      password: encryptedPassword,
    });

    // Check if the user is found
    if (!user) {
      return res.status(401).json(respond('Invalid email or password'));
    }

    // Create and sign the JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        userType: user.userType,
      },
      JWT_SECRET,
      {
        expiresIn: '1h',
      },
    );

    // Send a successful login response
    return res
      .status(200)
      .json({ name: 'Login successful', token, userId: user._id });
  } catch (error) {
    // Log the error and send an internal server error response
    console.error('Error connecting to MongoDB:', error);
    return res.status(500).json(respond('Internal server error'));
  }
}
