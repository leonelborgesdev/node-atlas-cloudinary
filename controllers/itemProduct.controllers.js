import ItemProduct from "../models/itemProduct.model.js";

export const createItemProduct = async (req, res) => {
  try {
    const { amount, price, idProduct } = req.body;
    const itemProd = new ItemProduct({
      amount,
      price,
      idProduct,
    });
    await itemProd.save();
    return res.json(itemProd);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
