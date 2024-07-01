import express from "express";
import dotenv from "dotenv"

import rolsRoutes from './routes/rols.routes.js'
import authRoutes from './routes/auth.routes.js'

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/rol', rolsRoutes);
app.use('/api/auth', authRoutes);

export default app;
