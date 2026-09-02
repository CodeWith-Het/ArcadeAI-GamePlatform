import dotenv from "dotenv"
dotenv.config()

import app from "./src/app.js"
import connectToDb from './src/config/database.js';

connectToDb()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})