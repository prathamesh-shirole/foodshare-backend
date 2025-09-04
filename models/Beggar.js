import mongoose from "mongoose";

const beggarSchema = new mongoose.Schema(
  {
    numberOfBeggars: {
      type: Number,
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
      },
      address: {
        type: String,
      },
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

beggarSchema.index({ location: "2dsphere" }); // geospatial queries

export default mongoose.model("Beggar", beggarSchema);
