import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  fileuploadcreate,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/products.controllers.js";
const router = Router();

router.get("/products", getProducts);

router.post("/products", fileuploadcreate, createProduct);
router.get("/products/:id", getProductById);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
