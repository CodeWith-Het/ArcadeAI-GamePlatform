import express from "express";
import cookieParser from "cookie-parser"
import authRouter from './routers/auth.routes.js';
import { notFound, errorHandler } from "./middleware/errors.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter)

// in last
app.use(notFound);
app.use(errorHandler);

export default app;
