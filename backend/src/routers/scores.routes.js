import { Router } from 'express';
import { submitScores } from '../controller/scores.controller.js';

const scoreRouter = Router()

scoreRouter.post("/",submitScores)

export default scoreRouter