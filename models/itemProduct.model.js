import mongoose from "mongoose";

const itemProductShema = new mongoose.Schema(
  {
    amount: {
      type: Number,
    },
    price: {
      type: Number,
    },
    idProduct: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("ItemProduct", itemProductShema);
