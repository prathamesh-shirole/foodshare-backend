import Donation from "../models/Donation.js";

// @desc Create donation
export const createDonation = async (req, res) => {
  try {
    const { foodType, quantity, location } = req.body;

    const donation = await Donation.create({
      foodType,
      quantity,
      location,
      donor: req.user
    });

    res.status(201).json(donation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc Get all donations
export const getDonations = async (req, res) => {
  try {
    const donations = await Donation.find().populate("donor", "name email");
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
