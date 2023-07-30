import Sale from "../models/sale.model.js";

export const createSale = async (req, res) => {
  try {
    const { total, discount, idClient } = req.body;
    const sale = new Sale({
      total,
      discount,
      idClient,
    });
    await sale.save();
    return res.json(sale);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
