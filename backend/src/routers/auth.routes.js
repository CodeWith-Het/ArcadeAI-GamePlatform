import {Router} from "express"
import { userRegister } from "../controller/auth.controller.js";
import { registerValidation } from "../validation/auth.validation.js";
const authRouter = Router()

authRouter.post("/register", registerValidation, userRegister);

export default authRouter