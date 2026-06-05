import { Router } from "express";
import {  createGame, deleteGame, getAllGame, getSlug } from "../controller/game.controller.js";
import { upload } from "../middleware/upload.middleware.js";


const gameRouter = Router()

gameRouter.post(
  "/creategame",
  upload.fields([
    { name: "thumbnailFile", maxCount: 1 }, 
    { name: "videoFile", maxCount: 1 },
  ]),
  createGame,
);

gameRouter.get("/allgame", getAllGame)
gameRouter.get("/:slug", getSlug)
gameRouter.get("/deletegame/:id",deleteGame)

export default gameRouter