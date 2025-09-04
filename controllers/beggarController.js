import Beggar from "../models/beggar.js";

// @desc Report a new beggar spot
// @route POST /api/beggars
// @access Private
export const createBeggar = async (req, res) => {
  try {
    const { numberOfBeggars, coordinates, address } = req.body;

    const newBeggar = await Beggar.create({
      numberOfBeggars,
      location: { type: "Point", coordinates, address },
      createdBy: req.user.id,
    });

    res.status(201).json(newBeggar);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Get all beggar spots
// @route GET /api/beggars
// @access Public
export const getBeggars = async (req, res) => {
  try {
    const beggars = await Beggar.find().populate("createdBy", "username email");
    res.json(beggars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
