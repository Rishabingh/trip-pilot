import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let isConnectd = false;

export async function connectDB() {
  if (isConnectd) return;

  try {
    if (MONGODB_URI) {
      await mongoose.connect(MONGODB_URI)
      isConnectd = true;
      console.log('DB connected')
    } else {
      console.log('mongodb key is missing')
    }
  } catch (error) {
    console.error(error);
  }
}