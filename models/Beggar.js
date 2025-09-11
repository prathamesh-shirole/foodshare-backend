import mongoose from "mongoose";

const beggarSchema = new mongoose.Schema(
  {
    numberOfBeggars: { type: Number, required: true },
    description: { type: String },
    location: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
    },
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.model("Beggar", beggarSchema);
