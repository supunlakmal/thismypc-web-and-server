import md5 from "md5";
import { MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";

type Data = {
  name: string;
};

// Connection URI and database name
const uri = process.env.MONGODB_URI as string;
const dbName = process.env.DB_NAME as string;

// Create a new MongoClient
const client = new MongoClient(uri);

let isConnected = false;

async function connectToMongoClient() {
  if (!isConnected) {
    try {
      await client.connect();
      isConnected = true;
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }
  return client;
}

function respond(name: string) {
  return {
    name: name,
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
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

    return res.status(200).json(respond("Login successful"));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return res.status(500).json(respond("Internal server error"));
  }
}
