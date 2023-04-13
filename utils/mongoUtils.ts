import { MongoClient } from 'mongodb';

// Connection URI and database name
export const uri = process.env.MONGODB_URI as string;
export const dbName = process.env.DB_NAME as string;

// Create a new MongoClient
export const client = new MongoClient(uri);

export let isConnected = false;

export async function connectToMongoClient() {
  if (!isConnected) {
    try {
      await client.connect();
      isConnected = true;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }
  return client;
}

export function respond(name: any) {
  return name;
}
