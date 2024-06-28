import express from "express";
import dotenv from "dotenv"

import rolsRouetes from './routes/rols.routes.js'

dotenv.config()

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(rolsRouetes);

export default app;
