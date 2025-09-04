import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    foodType: { type: String, required: true },
    quantity: { type: String, required: true },
    location: {
      type: { type: String, default: "Point" },
      coordinates: { type: [Number], required: true } // [longitude, latitude]
    },
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

donationSchema.index({ location: "2dsphere" });

export default mongoose.model("Donation", donationSchema);
