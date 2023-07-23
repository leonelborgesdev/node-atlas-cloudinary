import mongoose from "mongoose";
import { config } from "dotenv";
config();

export async function conectToDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongodb conncected");
  } catch (error) {
    console.log(error);
  }
}
