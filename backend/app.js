import express from 'express';
import connectDB from './config/db.js';

import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('MONEY MONEY MONEY');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
