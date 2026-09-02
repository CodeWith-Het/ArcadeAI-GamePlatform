import mongoose from 'mongoose';

const userSchemaModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { 
    timestamps: true 
  }
);

const userModel = mongoose.model('User', userSchemaModel);

export default userModel;