import userModel from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../service/mail.service.js";
import redis from "../config/redis.js";

export const userRegister = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const isAlreadyExist = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isAlreadyExist) {
      return res.status(400).json({
        success: false,
        message: "User already exists with same username or email!",
      });
    }

    const user = await userModel.create({
      username,
      email,
      password,
    });

    // verification token for email verfied
    const emailVerificationToken = jwt.sign(
      { email:user.email },
      process.env.JWT_SECRET,
      { expiresIn: "24h" },
    );

    // Verification URL
    const verificationUrl = `http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}`;

    // send email
    try {
      await sendEmail({
        to: user.email,
        subject: "Verify your ArcadeAI account 🎮",
        html: `<div style="font-family: Arial, sans-serif; background: #0a0a0f; color: #ffffff; padding: 32px; border-radius: 8px;">
  
  <h1 style="color: #00b4d8; text-align: center;">
    🎮 ARCADEAI
  </h1>

  <h2 style="text-align: center;">
    Welcome, ${user.username}!
  </h2>

  <p style="color: #aaaaaa; text-align: center;">
    Click below to verify your account and start playing!
  </p>

  <div style="text-align: center; margin: 32px 0;">

    <a 
      href="http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}"
      style="
        background: #00b4d8;
        color: white;
        padding: 14px 32px;
        border-radius: 4px;
        text-decoration: none;
        font-weight: bold;
        letter-spacing: 2px;
        display: inline-block;
      "
    >
      VERIFY EMAIL
    </a>

  </div>

  <p style="color: #888888; text-align: center; font-size: 14px;">
    Or copy this link:
  </p>

  <p style="text-align: center; word-break: break-all;">
    <a 
      href="http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}"
      style="color: #00b4d8;"
    >
      http://localhost:3000/api/auth/verify-email?token=${emailVerificationToken}
    </a>
  </p>

  <p style="color: #555555; text-align: center; font-size: 12px;">
    Link 24 hours mein expire hoga!
  </p>

  <p style="color: #555555; text-align: center; font-size: 12px;">
    © 2026 ArcadeAI. Built with MERN & TensorFlow.js
  </p>

</div>`
      });
    } catch (err) {
      console.error("Background Welcome Mail Failed:", err.message);
    }

    res.status(201).json({
      success: true,
      message: "User successfully registered! Please check your email.",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const verifyEmail =async (req,res,next) => {
  try {
    const emailVerificationToken = req.query.token

  if (!emailVerificationToken) {
    return res.status(400).json({
      success: false,
      message:
        "Verification token missing! Please use the full link provided in your email.",
    });
  }

  let decode=null
  try {
    decode = jwt.verify(emailVerificationToken,process.env.JWT_SECRET)
  }
  catch (error) {
   console.error("Decode unsuccessfully:", error.message);

   return res.status(400).json({
     success: false,
     message:
       "Invalid or expired token! Please request a new verification link.",
   });
  }
  
    const user =await userModel.findOne({
      email:decode.email
    })

  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User not found! Please verify with the correct account.",
    });
  }
  
  // user verified is is true response
  if (user.isVerified) {
    return res.status(200).json({
      success: true,
      message: "Email is already verified! You can proceed to login.",
    });
  }

  user.isVerified = true
  
  await user.save()

    const html = `
    <div style="text-align: center; margin-top: 50px; font-family: sans-serif; background-color: #f9fafb; padding: 40px;">
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); display: inline-block;">
            <h1 style="color: #10B981; font-size: 40px; margin: 0;">✅</h1>
            <h2 style="color: #374151;">Email Verified Successfully!</h2>
            <p style="color: #6B7280;">Welcome aboard, <strong>${user.username}</strong>! Aapka account activate ho gaya hai.</p>
            <p style="color: #9CA3AF; font-size: 14px; margin-top: 20px;">Ab aap is tab ko close karke app mein login kar sakte hain.</p>
            
            <a href="http://localhost:5173/login" style="background-color: #4F46E5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 20px; font-weight: bold;">
              Go to Login
            </a>
          </div>
      </div>
    `;
  
  res.send(html)
  }
  catch (error) {
    next(error)
}
}

export const userLogin =async (req,res,next) => {
  try {
    const { loginId, password } = req.body

    if (!loginId || !password) {
      return res.status(400).json({
        message: "Please provide both email or username and password",
        error:"username or emaail and password is wrong"
      })
    }
  
 const user = await userModel
   .findOne({
     $or: [{ username: loginId }, { email: loginId }],
   })
   .select("+password");

  if (!user) {
    return res.status(400).json({
      success:false,
      message: "User Not Found",
      error:"User not Exist"
    })
  }

  if (!user.isVerified) {
    return res.status(401).json({
      success: false,
      message: "User not verified. Please check your email inbox",
      error: "Use not verified",
    });
  }

  const isPasswordMatch = await user.comparePassword(password)

  if (!isPasswordMatch) {
    return res.status(401).json({
      success:false,
      message: "please enter the vaild password",
      error:"invaild passwod"
    })
  }

  const token = jwt.sign({
    _id:user._id
  }, process.env.JWT_SECRET, { expiresIn: "7d" })
  
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENVIRONMENT == "development",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  
  res.status(200).json({
    success:true,
    message: "User seccussfully Login",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    }
  })
  }

  // catch is here
  catch (error) {
    next(error)
  }
}

export const getUser = async (req, res, next) => {
  try { 
 
    const user = await userModel.findById(req.user._id);

    if (!user) {
      return res.status(401).json({
        success:false,
        message: "User not Found",
        error:"User not found"
      })
    }

    res.status(201).json({
      message: "User Successfully Fetched",
      user: {
        id: user._id,
        username: user.username,
        email:user.email
      }
    })

  } catch (error) {
    next(error);
  }
}

export const userLogout = async (req, res, next) => {
  try {
     
    const token = req.cookies.token
    
    if (token) {
      await redis.set(
        `blacklist:${token}`,
        "true",
        "EX",
        3 * 24 * 60 * 60, // 3 days in seconds
      );
    }

     res.clearCookie("token", {
       httpOnly: true,
       secure: process.env.NODE_ENVIRONMENT === "development",
       sameSite: "strict",
     });

     res.status(200).json({
       success: true,
       message: "Logout successful!",
     });
   } catch (error) {
     next(error);
   }
}