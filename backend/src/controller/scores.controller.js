import scoreModel from '../models/scores.model.js';

export const submitScores = async (req,res,next) => {
    try {
        const { userId, gameId, score, playDuration } = req.body
    
    if (!userId || !gameId || score === undefined) {
        return res.status(401).json({
            success:false,
            message: "Not Found? userid,gameid or score is required",
            error:"Not Found"
        })
    }

    const newScore = await scoreModel.create({
        user: userId,
        game: gameId,
        score: score,
        playDuration:playDuration
    })

    res.status(201).json({
        success: true,
        message: "Score submitted successfully! 🎮",
        submitScores:newScore
    });
    }
    catch (error) {
        next(error)
    }
}