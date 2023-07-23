import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

export async function conectToDb() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Mongodb conncected");
  } catch (error) {
    console.log(error);
  }
}
