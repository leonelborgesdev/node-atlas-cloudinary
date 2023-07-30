import { Schema, model } from "mongoose";

const itemProductShema = new Schema(
  {
    amount: Number,
    price: Number,
    idProduct: {
      ref: "Product",
      type: Schema.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("ItemProduct", itemProductShema);
