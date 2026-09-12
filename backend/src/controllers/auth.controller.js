import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await userModel.findOne({
      $or: [{ email }, { username }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = await userModel.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: newUser._id, username: newUser.username },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("error from register user ", error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success:true,
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error from login user ", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getme = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;

    if (!userId) {
      return res.status(401).json({
        success:false,
        message:"Not Authenicated",
      });
    }

    const user = await userModel.findById(userId).select("-password");
    
    if (!user) {
      return res.status(404).json({
        success:false,
        message:"User not found",
      });
    }
    
    res.status(200).json({
      success:true,
      message: "user successfully fetch",
      user,
    });
  } catch (error) {
    console.error("Error from getMe user", error)
    return res.status(500).json({
      message: "Internal server error"
    });
  }
} 

export const logoutUser = (req,res) => {
  try {
    req.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite:true
    })

    res.status(200).json({
      success:true,
      message:"User logout"
    })
  } catch (error) {
    console.error("Error from User Logout ", error)
    return res.status(500).json({
      success:false,
      message:"Internal server error"
    })
  }
}