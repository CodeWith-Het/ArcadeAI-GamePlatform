import mongoose from 'mongoose';

const scoreboardSchemaModel = new mongoose.Schema(
  {
    playerName: {
      type: String,
      required: true,
    },
    gameType: {
      type: String,
      required: true,
    },
    finalScore: {
      type: Number,
      required: true,
    },
    accuracy: {
      type: Number,
      required: true,
    },
    playedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const ScoreboardModel = mongoose.model('Scoreboard', scoreboardSchemaModel);

export default ScoreboardModel;
