import express from "express";
import {
  addBeggar,
  getBeggars,
  getBeggarById,
  updateBeggar,
  deleteBeggar,
} from "../controllers/beggarController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, addBeggar);     // Add report
router.get("/", getBeggars);              // Get all
router.get("/:id", getBeggarById);        // Get one
router.put("/:id", authMiddleware, updateBeggar);// Update
router.delete("/:id", authMiddleware, deleteBeggar);// Delete

export default router;
