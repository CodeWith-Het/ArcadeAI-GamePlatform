import express from 'express';
import { validateLogin, validateRegister } from '../middleware/validate.js';
import { getme, loginUser, logoutUser, registerUser } from '../controllers/auth.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const authRouter = express.Router()

authRouter.post("/register", validateRegister, registerUser)
authRouter.post("/login", validateLogin, loginUser)
authRouter.get("/getme", authMiddleware, getme)
authRouter.get("/logout",logoutUser)

export default authRouter