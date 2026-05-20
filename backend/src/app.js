import express from 'express';
import cors from 'cors';

const app = express();

// --- Middleware ---
app.use(cors({
    origin: '*', // Production mein Vite frontend URL aayega
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Base Route (Health Check) ---
app.get('/', (req, res) => {
    res.status(200).json({ 
        success: true, 
        message: "ArcadeAI Core Engine is running smoothly! 🚀" 
    });
});

export default app;