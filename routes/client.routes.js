import { Router } from "express";
import {
  createClient,
  getClientById,
} from "../controllers/client.controllers.js";

const router = Router();

router.get("/client/:id", getClientById);
router.post("/client", createClient);

export default router;
