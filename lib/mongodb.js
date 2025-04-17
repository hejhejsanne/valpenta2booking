// src/lib/mongodb.js
import mongoose from "mongoose";

const connectToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) return;

  const db = await mongoose.connect(process.env.MONGODB_URI);
  console.log("MongoDB connected:", db.connection.name);
};

export { connectToDatabase };
