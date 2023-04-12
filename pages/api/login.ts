import jwt from "jsonwebtoken";
import md5 from "md5";
import type { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { applyCors } from "../../middlewares/cors";
import { connectToMongoClient, dbName, respond } from "../../utils/mongoUtils";

type Data = {
  name: string;
};

// JWT secret key (should be moved to .env file in a real-world application)
const JWT_SECRET = process.env.JWT_SECRET as string;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await applyCors(req, res);
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json(respond("Email and password are required"));
  }

  if (!validator.isEmail(email)) {
    return res.status(401).json(respond("Invalid Email"));
  }

  const encryptedPassword = md5(password);

  try {
    const mongoClient = await connectToMongoClient();
    const db = mongoClient.db(dbName);
    const usersCollection = db.collection("users");

    // Find the user with the provided email and password
    const user = await usersCollection.findOne({
      email,
      password: encryptedPassword,
    });

    if (!user) {
      return res.status(401).json(respond("Invalid email or password"));
    }

    // Create and sign the JWT token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        userType: user.userType,
      },
      JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    return res.status(200).json({ name: "Login successful", token: token });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return res.status(500).json(respond("Internal server error"));
  }
}
