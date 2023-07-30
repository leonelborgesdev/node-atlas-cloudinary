import mongoose from "mongoose";

const clientSchema = mongoose.Schema(
  {
    name: String,
    phone: Number,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Client", clientSchema);
