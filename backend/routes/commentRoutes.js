import express from "express";
import {} from "../controllers/postControllers";
import {
  createComment,
  deleteComment,
  updateComment,
} from "../controllers/commentControllers";
import { authGuard } from "../middleware/authMiddleware";
const router = express.Router();

router.post("/", authGuard, createComment);
router
  .route("/:commentId")
  .put(authGuard, updateComment)
  .delete(authGuard, deleteComment);

export default router;
