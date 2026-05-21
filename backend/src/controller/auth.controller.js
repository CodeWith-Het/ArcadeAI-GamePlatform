import userModel from "../models/user.model.js"

export const userRegister =async (req,res,next) => {
    const { username, email, password } = req.body
    
    const isAlreadyExist = await userModel.findOne({
        $or:[{username},{email}]
    })

    if (isAlreadyExist) {
        return res.status(400).json({
            message: "User Already Exist same Username or Email",
        })
    }

    const user = await userModel.create({
            username,
            email,
            password
    })

    res.status(201).json({
      message: "User Successfully Register, please check your email",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        isVerified: user.isVerified,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
      },
    });
}