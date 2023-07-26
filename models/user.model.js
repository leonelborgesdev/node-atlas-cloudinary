import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
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
    username: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
  },
  {
    tymestamps: true,
  }
);

export default mongoose.model("User", userSchema);
