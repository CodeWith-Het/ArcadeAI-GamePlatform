import { Router } from 'express';
import { getGlobalLeaderboard, getLeaderboard, getMyScore, submitScores } from '../controller/scores.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const scoreRouter = Router()

scoreRouter.post("/", submitScores)
scoreRouter.get("/globarleaderboard", getGlobalLeaderboard)
scoreRouter.get("/leaderboard/:slug", getLeaderboard)
scoreRouter.get("/me/:id",authMiddleware,getMyScore)

export default scoreRouter