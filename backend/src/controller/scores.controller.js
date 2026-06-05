import scoreModel from '../models/scores.model.js';
import gameModel from './../models/game.model.js';

export const submitScores = async (req,res,next) => {
    try {
        const { userId, gameId, score, playDuration } = req.body
    
    if (!userId || !gameId || score === undefined) {
        return res.status(400).json({
            success:false,
            message: "Not Found? userid,gameid or score is required",
            error:"Not Found"
        })
        }
        
        let existingScore = await scoreModel.findOne({
          user: userId,
          game: gameId,
        });

        if (existingScore) {

            // check score of your current score
            if (score > existingScore.score) {
                existingScore.score = score
                
                existingScore.playDuration = playDuration || existingScore.playDuration
                
                const newScore = await existingScore.save(); //this update new score and save high dcore

                return res.status(200).json({
                    success:true,
                    submitScores:newScore
                })
            } else {

              // score is less or equal to your current score
              return res.status(200).json({
                success: true,
                message: `your high score is ${existingScore.score} and your curret score is ${score}`,
                submitScores: existingScore,
              });
            }
        } else {
            const newScore = await scoreModel.create({
              user: userId,
              game: gameId,
              score: score,
              playDuration: playDuration,
            });

            res.status(201).json({
              success: true,
              message: `Score submitted successfully! 🎮 your new score is ${newScore.score}`,
              submitScores: newScore,
            });
        }
    }
    catch (error) {
        next(error)
    }
}

export const getGlobalLeaderboard = async(req,res,next) => {
    try {
        const leaderboard = await scoreModel
          .find()
          .sort({ score: -1 })
          .limit(10)
          .populate("user", "username")
          .populate("game", "title slug thumbnailUrl");

        res.status(200).json({
            success: true,
            message: "Global Top 10 Leaderboard! 🏆",
            leaderboard
        });
    }
    catch (error) {
        next(error)
    }
}

export const getLeaderboard =async (req,res,next) => {
    try {
        const { slug } = req.params
    
    const game = await gameModel.findOne({ slug, isActive: true })
    
    if (!game) {
        return res.status(404).json({
            success:false,
            message:"Game not found, please find actual game",
            error:"Game Not Found"
        })
    }

    const leaderboard = await scoreModel.find({ game: game._id })
        .sort({ score: -1 })
        .limit(10)
        .populate("user", "username")
    
    res.status(200).json({
        success: true,
        message: `${game.title} ka Top 10 Leaderboard! 🥇`,
        leaderboard
    });
    }
    catch (error) {
        next(error)
    }
}

export const getMyScore = async (req, res, next) => {
    try {
        
        const userId  = req.user._id;
    
    const allGames = await gameModel.find({ isActive: true })
    const allScores = await scoreModel.find({ user: userId })
    
    const myScoreBoard = allGames.map((game) => {
      const playedGame = allScores.find(
        (scoreDoc) => scoreDoc.game.toString() === game._id.toString(),
      );

      return {
        gameId: game._id,
        title: game.title,
        slug: game.slug,
        thumbnailUrl: game.thumbnailUrl,
        score: playedGame ? playedGame.score : 0,
        playDuration: playedGame ? playedGame.playDuration : 0,
      };
    });

    res.status(200).json({
      success: true,
      message: "Tumhara complete scoreboard ready hai! 🎯",
      user:userId,
      totalGames: allGames.length,
      gamesPlayed: allScores.length,
      myScores: myScoreBoard,
    });
    }
    catch (error) {
        next(error)
    }
}