import express from 'express';
import { validateLogin, validateRegister } from '../middleware/validate.js';
import { loginUser, registerUser } from '../controllers/auth.controller.js';

const authRouter = express.Router()

authRouter.post("/register", validateRegister, registerUser)
authRouter.post("/login", validateLogin, loginUser)

export default authRouter