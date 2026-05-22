import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchemaModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      trim: true,
      minlength: [3, "Username must be at least 3 characters"],
      maxlength: [20, "Username must be at most 20 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },

    avatar: {
      type: String,
      default: "",
    },

    // if user admin is not 
    isAdmin: {
      type: Boolean,
      default: false,
    },

    // Email Verification
    isVerified: {
      type: Boolean,
      default: false,
    },

    // Notification Engine ke liye
    lastPlayed: {
      type: Date,
      default: null,
    },

    preferredGame: {
      type: String,
      enum: ["flappy-bird", "pacman", "temple-run"],
      default: null,
    },

    pushToken: {
      type: String,
      default: null,
    },

    pushNotificationsEnabled: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// Password hash karo save se pehle
userSchemaModel.pre("save", async function () {
  if (!this.isModified("password")) return 
  this.password = await bcrypt.hash(this.password, 12);
});

// Password compare karo login ke waqt
userSchemaModel.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const userModel = mongoose.model("user", userSchemaModel);

export default userModel;
