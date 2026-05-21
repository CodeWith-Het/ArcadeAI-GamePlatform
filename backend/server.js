import app from "./src/app.js";
import connectDB from "./src/config/database.js";

connectDB()

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`\n=========================================`);
  console.log(`🎮 ArcadeAI Server is LIVE on Port: ${PORT}`);
  console.log(`=========================================\n`);
});
