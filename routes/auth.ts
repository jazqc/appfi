import { Router } from "express";
import { createUser } from "../controllers/auth";

const router = Router();
router.post("/register", createUser)
router.post("/login", loginUser)

export default router;