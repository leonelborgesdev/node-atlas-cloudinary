import mongoose from "mongoose";

const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    phone: {
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

export default mongoose.model("Client", clientSchema);
