import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import morgen from "morgan"

import authRouter from "./routes/auth.router.js"

const app = express()

app.use(morgen("dev"))

app.use(cors({
    origin: "http://localhost:5173",
    credentials:true
}))

app.use(express.json())

app.use(cookieParser())

app.use("/api/auth",authRouter)

export default app