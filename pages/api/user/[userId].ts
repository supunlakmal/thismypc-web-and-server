import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import {
  connectToMongoClient,
  dbName,
  respond,
} from "../../../utils/mongoUtils";

interface CustomNextApiRequest extends NextApiRequest {
  query: {
    userId: string;
  };
}

export default async function handler(
  req: CustomNextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { userId },
  } = req;

  if (!userId) {
    return res.status(400).json(respond("User ID is required"));
  }

  try {
    const client = await connectToMongoClient();
    const db = client.db(dbName);
    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ _id: new ObjectId(userId) });

    if (!user) {
      return res.status(404).json(respond("User not found"));
    }

    // Remove sensitive information before sending it to the client
    delete user.password;

    return res.status(200).json(user);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return res.status(500).json(respond("Internal server error"));
  }
}
