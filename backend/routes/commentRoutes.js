import express from "express";
import {} from "../controllers/postControllers";
import {
  createComment,
  updateComment,
} from "../controllers/commentControllers";
import { authGuard } from "../middleware/authMiddleware";
const router = express.Router();

router.post("/", authGuard, createComment);
router.put("/:commentId", authGuard, updateComment);

export default router;
