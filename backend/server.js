import app from "./src/app.js";
import connectToDB from "./src/config/database.js";

connectToDB()

app.listen(3000, () => {
  console.log(`\n=========================================`);
  console.log(`🎮 ArcadeAI Server is LIVE on Port: 3000`);
  console.log(`=========================================\n`);
});
