import { Schema, model } from "mongoose";

const saleSchena = new Schema(
  {
    total: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    idClient: {
      ref: "Client",
      type: Schema.Types.ObjectId,
    },
    itemProducts: [
      {
        ref: "ItemProduct",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Sale", saleSchena);
