import dotenv from "dotenv"
dotenv.config()

import express from "express"
import authRouter from "./routes/auth.router.js"
import cookieParser from "cookie-parser"
import morgen from "morgan"

const app = express()

app.use(morgen("dev"))

app.use(express.json())

app.use(cookieParser())

app.use("/api/auth",authRouter)

export default app