import Sale from "../models/sale.model";

export const createSale = async (res, req) => {
  try {
    const { total, discount, idClient } = req.body;
    const sale = new Sale({ total, discount, idClient });
    console.log(sale);
    await sale.save();
    return res.json(sale);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
