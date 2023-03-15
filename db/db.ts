import mongoose from "mongoose";
import { config } from "../config";

export const connectToDB = async () => {
  console.log('Connecting to MongoDB...');
  await mongoose.connect("mongodb://127.0.0.1:27017/foody")
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
}