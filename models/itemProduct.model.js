import mongoose from "mongoose";

const itemProductShema = new mongoose.Schema(
  {
    amount: {
      type: Number,
    },
    price: {
      type: Number,
    },
    idproduct: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("ItemProduct", itemProductShema);
