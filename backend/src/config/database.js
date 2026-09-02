import mongoose from "mongoose"

const connectToDb =async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database Successfully connected")
    } catch (error) {
        console.error("Database can't Connect ", error)
        process.exit(1)
    }
}

export default connectToDb