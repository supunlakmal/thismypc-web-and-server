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
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password || !firstName || !lastName) {
    return res
      .status(401)
      .json(respond("username/password/first name/last name required"));
  }

  if (!validator.isAlpha(firstName) || !validator.isAlpha(lastName)) {
    return res
      .status(401)
      .json(respond("First Name and Last Name need to be only string"));
  }

  if (!validator.isEmail(email)) {
    return res.status(401).json(respond("Invalid Email"));
  }

  const encryptedPassword = md5(password);

  const userData = {
    email,
    password: encryptedPassword,
    firstName,
    lastName,
  };

  try {
    const mongoClient = await connectToMongoClient();
    const db = mongoClient.db(dbName);
    const usersCollection = db.collection("users");

    // Insert the user data into the "users" collection
    await usersCollection.insertOne(userData);

    return res.status(200).json(respond("User created successfully"));
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return res.status(500).json(respond("Internal server error"));
  }
}
