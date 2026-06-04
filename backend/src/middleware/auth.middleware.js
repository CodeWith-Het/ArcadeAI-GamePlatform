    import jwt from "jsonwebtoken"
    import redis from "../config/redis.js"

    export const authMiddleware =async (req,res,next) => {
        try {
            const token = req.cookies.token

        if (!token) {
            return res.status(401).json({
            success: false,
            message: "Login required! Please login to view profile.",
            error: "Token missing",
        });
            }
            
            const isBlackListed = await redis.get(`blacklist:${token}`);
        if (isBlackListed) {
        return res.status(401).json({
            success: false,
            message: "Session expired! Please login again.",
            error: "Token blacklisted",
        });
            }
            
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            
            req.user = decode
            
            next()
        }
        catch (error) {
            next(error)
        }
    }