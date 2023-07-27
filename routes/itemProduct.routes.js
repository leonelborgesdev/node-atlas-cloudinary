import { Router } from "express";
import { createItemProduct } from "../controllers/itemProduct.controllers.js";

const router = Router();

router.use("itemProdut", createItemProduct);
