import {Router} from "express"
import { getUser, userLogin, userLogout, userRegister, verifyEmail } from "../controller/auth.controller.js";
import { loginValidation, registerValidation } from "../validation/auth.validation.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const authRouter = Router()

authRouter.post("/register", registerValidation, userRegister);
authRouter.get("/verify-email", verifyEmail);
authRouter.post("/login", loginValidation, userLogin)
authRouter.get("/getuser", authMiddleware, getUser);
authRouter.get("/logout",userLogout)

export default authRouter