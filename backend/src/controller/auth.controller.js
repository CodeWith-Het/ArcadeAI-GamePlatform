import userModel from "../models/user.model.js"
import jwt from "jsonwebtoken"
import { sendEmail } from "../service/mail.service.js";

export const userRegister =async (req,res,next) => {
    try {
      const { username, email, password } = req.body;

      const isAlreadyExist = await userModel.findOne({
        $or: [{ username }, { email }],
      });

      if (isAlreadyExist) {
        return res.status(400).json({
          message: "User Already Exist same Username or Email",
        });
      }

      const user = await userModel.create({
        username,
        email,
        password,
      });

      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" },
      );

      // 4.send Verification email 
      const verificationUrl = `${process.env.CLIENT_URL}/verify-email/${token}`;

      try {
        await sendEmail({
          to: user.email,
          subject: "Verify your ArcadeAI account 🎮",
          html: `
          <div style="font-family: Arial, sans-serif; background: #0a0a0f; color: #ffffff; padding: 32px; border-radius: 8px;">
            <h1 style="color: #00b4d8; text-align: center;">🎮 ARCADEAI</h1>
            <h2 style="text-align: center;">Welcome, ${user.username}!</h2>
            <p style="color: #aaaaaa; text-align: center;">
              Click below to verify your account and start playing!
            </p>
            <div style="text-align: center; margin: 32px 0;">
              <a href="${verificationUrl}"
                style="
                  background: #00b4d8;
                  color: white;
                  padding: 14px 32px;
                  border-radius: 4px;
                  text-decoration: none;
                  font-weight: bold;
                  letter-spacing: 2px;
                "
              >
                VERIFY EMAIL
              </a>
            </div>
            <p style="color: #555555; text-align: center; font-size: 12px;">
              Link 24 hours mein expire hoga!
            </p>
            <p style="color: #555555; text-align: center; font-size: 12px;">
              © 2026 ArcadeAI. Built with MERN & TensorFlow.js
            </p>
          </div>
        `,
        });
      } catch (err) {
        console.error("Background Welcome Mail Failed:", err.message);
      }

      res.status(201).json({
        message: "User Successfully Register, please check your email",
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
          isVerified: user.isVerified,
          isAdmin: user.isAdmin,
          createdAt: user.createdAt,
        },
      });
    }
    catch (error) {
        next(error)
    }
}