import express from "express";
import {} from "../controllers/postControllers";
import { createComment } from "../controllers/commentControllers";
import { authGuard } from "../middleware/authMiddleware";
const router = express.Router();

router.post("/", authGuard, createComment);

export default router;
