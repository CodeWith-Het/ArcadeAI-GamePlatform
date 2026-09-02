import mongoose from 'mongoose';

const gameSchemamodel = new mongoose.Schema(
  {
    activeGameMode: {
      type: String,
      enum: ['DUCK_HUNT'],
      required: true,
    },
    difficultyLevel: {
      type: Number,
      min: 1,
      max: 10,
    },
    customSettings: {
      type: Object,
      default: {},
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const gameModel = mongoose.model('GameConfig', gameSchemamodel);

export default gameModel;
