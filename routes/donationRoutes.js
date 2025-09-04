import express from "express";
import { createDonation, getDonations } from "../controllers/donationController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createDonation);
router.get("/", getDonations);

export default router;
