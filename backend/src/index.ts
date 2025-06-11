import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Client } from 'pg';
import Redis from 'redis';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL setup
const pgClient = new Client({
  connectionString: process.env.DATABASE_URL,
});

// Redis setup
const redisClient = Redis.createClient({
  url: process.env.REDIS_URL
});

// Connect to databases
async function initializeDatabases() {
  try {
    await pgClient.connect();
    await redisClient.connect();
    console.log('Connected to PostgreSQL and Redis');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
}

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Movie Curator API is running' });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  await initializeDatabases();
  console.log(`Server is running on port ${PORT}`);
}); 