import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "../controllers/products.controllers.js";
import fileupload from "express-fileupload";
const router = Router();

router.get("/products", getProducts);

router.post(
  "/products",
  fileupload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  }),
  createProduct
);
router.get("/products/:id", getProductById);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
