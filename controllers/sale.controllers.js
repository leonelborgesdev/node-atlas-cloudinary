import Sale from "../models/sale.model.js";

export const getSales = async (req, res) => {
  try {
    const sales = await Sale.find().populate("itemProducts");

    return res.json(sales);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

export const createSale = async (req, res) => {
  try {
    const { total, discount, idClient, itemProducts } = req.body;
    const sale = new Sale({
      total,
      discount,
      idClient,
      itemProducts,
    });
    await sale.save();
    return res.json(sale);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
};
