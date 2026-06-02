import jwt from "jsonwebtoken"

export const authMiddleware =async (req,res,next) => {
    const token = req.cookies?.token

    if (!token) {
        return res.status(401).json({
            success:false,
            message: "Login required! Please login to view profile.",
            error:"Token missing"
        });
    }

    let decode = null

     try {
         decode = jwt.verify(token, process.env.JWT_SECRET);
         req.user = decode
         next()
     } catch (error) {
         console.error("decodeing error is here", error.message);
         
         return res.status(401).json({
           success: false,
           message: "Invalid or expired token! Please login again.",
           error: error.message,
         });
    }
} 