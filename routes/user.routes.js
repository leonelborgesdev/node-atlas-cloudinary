import { Router } from "express";
import { createUser, getUserById } from "../controllers/user.controllers.js";

const router = Router();

router.get("/user/:id", getUserById);
router.post("/user", createUser);

export default router;
