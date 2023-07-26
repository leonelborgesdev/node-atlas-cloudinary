import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  user: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
});
