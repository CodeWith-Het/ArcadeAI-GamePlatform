import mongoose from "mongoose";

const scoreSchemaModel = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    game: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "game",
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    playDuration: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

// Yeh ek chota sa index hai jo Leaderboard fetch karne ko super fast bana dega
// Kyunki hum hamesha highest score pehle dhoondhenge (Descending order: -1)
scoreSchemaModel.index({ game: 1, score: -1 });

const scoreModel = mongoose.model("Score", scoreSchemaModel);

export default scoreModel;