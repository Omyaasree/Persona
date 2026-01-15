import express from "express";
import {
  createComment,
  getPostComments,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/", createComment);
router.get("/post/:postId", getPostComments);

export default router;
