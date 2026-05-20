import 'dotenv/config'; // ES module way to load dotenv
import http from 'http';
import { Server } from 'socket.io';
import app from './src/app.js';       // .js extension is required in ES modules

// 2. Create HTTP Server using Express App
const server = http.createServer(app);

// 3. Initialize Socket.io (For Real-time Leaderboard & Notifications)
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
});

// Socket Connection Logic
io.on('connection', (socket) => {
    console.log(`🔌 New Player Connected (Socket ID: ${socket.id})`);

    socket.on('disconnect', () => {
        console.log(`❌ Player Disconnected (Socket ID: ${socket.id})`);
    });
});

// Make 'io' accessible in our controllers
app.set('io', io);

// 4. Start the Engine
server.listen(3000, () => {
    console.log(`\n=========================================`);
    console.log(`🎮 ArcadeAI Server is LIVE on Port: 3000`);
    console.log(`=========================================\n`);
});
