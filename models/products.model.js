import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: String,
    description: String,
    price: Number,
    image: {
      public_id: String,
      secure_url: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Product", productSchema);
