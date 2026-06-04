import cookieParser from "cookie-parser"
import express from "express";

// routers
import authRouter from './routers/auth.routes.js';
import gameRouter from "./routers/game.routes.js";

//Middleware
import notFound from "./middleware/notfound.middleware.js"
import errorHandler from "./middleware/errors.middleware.js";

const app = express();

app.use(express.json())
app.use(cookieParser())

// Routers Aoi
app.use("/api/auth", authRouter)
app.use("/api/game",gameRouter)

// use Middlware
app.use(notFound)
app.use(errorHandler)

export default app;