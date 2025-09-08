import express from "express";
import { createBeggar, getBeggars } from "../controllers/beggarController.js";
import { addComment, getComments } from "../controllers/commentController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Beggars
router.post("/", authMiddleware, createBeggar);
router.get("/", getBeggars);

// Comments on beggar spots
router.post("/:id/comments", authMiddleware, addComment);
router.get("/:id/comments", getComments);

export default router;
