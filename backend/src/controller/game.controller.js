import gameModel from "../models/game.model.js"
import {uploadOnImageKit} from "../service/storage.service.js"

export const createGame = async (req, res, next) => {
    try {
        const { title, description, controls } = req.body
        
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and description are required!",
                error: "Missing Fields"
            })
        }

        const existAlreadyGame = await gameModel.findOne({ title })

        if (existAlreadyGame) {
            return res.status(400).json({
                success: false,
                message: "A game titlw already exist",
                error: "Duplicate Title"
            })
        }

        let thumbnailFile = null
        let videoFile = null

        if (req.files && req.files.thumbnailFile && req.files.thumbnailFile.length > 0) {
            thumbnailFile = req.files.thumbnailFile[0]
        }
        if (req.files && req.files.videoFile && req.files.videoFile.length > 0) {
            videoFile = req.files.videoFile[0]
        }

        let thumbnailUrl = "";
        if (thumbnailFile) {
            thumbnailUrl = await uploadOnImageKit(thumbnailFile.buffer, thumbnailFile.originalname);
        }
        
        let gameplayVideoUrl = "";
        if (videoFile) {
            gameplayVideoUrl = await uploadOnImageKit(videoFile.buffer, videoFile.originalname);
        }
    

        const newGame = await gameModel.create({
            title,
            description,
            thumbnailUrl: thumbnailUrl,
            gameplayVideoUrl: gameplayVideoUrl,
            controls: controls || "HAND_TRACKING"
        })

        res.status(201).json({
            success: true,
            message: "Game Created Successfully",
            newgame: newGame
        })
    }
    catch (error){
        next(error)
    }
}