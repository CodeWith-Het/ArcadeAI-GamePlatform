import mongoose from "mongoose";

const gameSchemaModel = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Game title is required"],
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "Game description is required"],
    },
    thumbnailUrl: {
      type: String,
      default: "", // imagekit link
    },
    gameplayVideoUrl: {
      type: String,
      default: "", // Demo video link
    },
    controls: {
      type: String, // Array of strings e.g., ["HAND_TRACKING", "FACE_MESH"]
      enum: ["HAND_TRACKING", "FACE_MESH", "POSE_DETECTION", "VOICE_COMMAND"],
      default: [],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    playedCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

gameSchemaModel.pre("validate", function () {
  if (this.title) {
    this.slug = this.title.toLowerCase().replace(/\s+/g, "-"); // Spaces ko dash '-' bana dega
  }
});

const gameModel = mongoose.model("game", gameSchemaModel)
export default gameModel