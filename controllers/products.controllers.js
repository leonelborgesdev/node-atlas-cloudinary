import Product from "../models/products.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const product = new Product({
      name,
      description,
      price,
    });
    await product.save();
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product does not exists" });
    }
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productUpdated = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (condition) {
    }
    return res.json(productUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
