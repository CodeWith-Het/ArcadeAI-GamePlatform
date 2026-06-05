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

        let thumbnailPromise = Promise.resolve("");
        if (thumbnailFile) {
          thumbnailPromise = uploadOnImageKit(
            thumbnailFile.buffer,
            thumbnailFile.originalname,
          );
        }

        let videoPromise = Promise.resolve("");
        if (videoFile) {
          videoPromise = uploadOnImageKit(
            videoFile.buffer,
            videoFile.originalname,
          );
        }

        const [thumbnailUrl, gameplayVideoUrl] = await Promise.all([
          thumbnailPromise,
          videoPromise,
        ]);
    
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

export const getAllGame = async (req,res,next) => {
    try {
        const games = await gameModel.find({ isActive: true }).sort({ createAt: -1 })

        const totalgames = games.length
        
        if (!games && totalgames===0) {
            return res.status(404).json({
                success: false,
                message: "Game not found, please create it",
                error:"Not Found"
            })
        }

        res.status(200).json({
            success:true,
            message: "Game data fetched successfully",
            totalgames: games.totalgames,
            games:games
        })

    }
    catch (error) {
        next(error)
    }
}

export const getSlug = async (req,res,next) => {
    try {
        const { slug } = req.params
    
    if (!slug) {
        return res.status(400).json({
          success: false,
          message: "Game slug is required in URL!",
          error:"Invalid Input"
        });
    }

    const game = await gameModel.findOne({
        slug: slug,
        isActive: true
    })

    if (!game) {
        return res.status(404).json({
          success: false,
          message: "Game not found or currently inactive",
          error:"not found"
        });
    }

    res.status(200).json({
        success:true,
        message: "Game successfully fetch",
        game:game
    })
    }
    catch (error) {
        next(error)
    }
}

export const deleteGame = async (req, res, next) => {
    try {
        const { id } = req.params
    
    if (!id) {
        return res.status(401).json({
            success:false,
            message: "invalid id for delete game",
            error:"Invalid Id"
        })
    }

    const game = await gameModel.findByIdAndDelete(id);

    if (!game) {
        return res.status(404).json({
            success: false,
            message: "Game not found in Database",
            error:"Not Found"
        })
    }

    res.status(200).json({
        success:true,
        message:"Game successfully delete"
    })
    }
    catch (error) {
        next(error)
    }
}