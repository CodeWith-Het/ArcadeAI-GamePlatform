import express from "express";
import cookieParser from "cookie-parser"
import authRouter from './routers/auth.routes.js';

//last here
import notFound from "./middleware/notfound.middleware.js"
import errorHandler from "./middleware/errors.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRouter)

// last here
app.use(notFound)
app.use(errorHandler)

export default app;