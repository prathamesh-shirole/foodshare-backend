import Beggar from "../models/Beggar.js";

// ➕ Add beggar report
export const addBeggar = async (req, res) => {
  try {
    const { numberOfBeggars, description, location } = req.body;

    if (!location?.latitude || !location?.longitude) {
      return res.status(400).json({ message: "Location is required" });
    }

    const beggar = new Beggar({
      numberOfBeggars,
      description,
      location,
      reportedBy: req.user?._id || null,
    });

    await beggar.save();
    res.status(201).json({ message: "Beggar location added", beggar });
  } catch (err) {
    res.status(500).json({ message: "Error adding beggar location", error: err.message });
  }
};

// 📌 Get all beggars
export const getBeggars = async (req, res) => {
  try {
    const beggars = await Beggar.find().populate("reportedBy", "name email");
    res.json(beggars);
  } catch (err) {
    res.status(500).json({ message: "Error fetching beggars", error: err.message });
  }
};

// 📌 Get single beggar by ID
export const getBeggarById = async (req, res) => {
  try {
    const beggar = await Beggar.findById(req.params.id).populate("reportedBy", "name email");
    if (!beggar) return res.status(404).json({ message: "Beggar not found" });
    res.json(beggar);
  } catch (err) {
    res.status(500).json({ message: "Error fetching beggar", error: err.message });
  }
};

// 📝 Update beggar report
export const updateBeggar = async (req, res) => {
  try {
    const beggar = await Beggar.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!beggar) return res.status(404).json({ message: "Beggar not found" });
    res.json({ message: "Beggar updated", beggar });
  } catch (err) {
    res.status(500).json({ message: "Error updating beggar", error: err.message });
  }
};

// ❌ Delete beggar
export const deleteBeggar = async (req, res) => {
  try {
    const beggar = await Beggar.findByIdAndDelete(req.params.id);
    if (!beggar) return res.status(404).json({ message: "Beggar not found" });
    res.json({ message: "Beggar deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting beggar", error: err.message });
  }
};
