import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    // 1 = connected, 2 = connecting
    return;
  }

  try {
    if (MONGODB_URI) {
      await mongoose.connect(MONGODB_URI)
      console.log('DB connected')
    } else {
      console.log('mongodb key is missing')
    }
  } catch (error) {
    console.error(error);
  }
}