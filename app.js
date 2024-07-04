import express from "express";
import dotenv from "dotenv"

import rolsRoutes from './routes/rols.routes.js'
import authRoutes from './routes/auth.routes.js'
import usersRoutes from './routes/user.routes.js'
import teacherRoutes from './routes/teacher.routes.js'
import classesRoutes from './routes/class.routes.js'
import statusClassRoutes from './routes/statusClass.routes.js'
import typeClassRoutes from './routes/typeClass.routes.js'
import levelClassRutes from './routes/levelClas.routes.js'

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/rol', rolsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/teacher', teacherRoutes);
app.use('/api/classes', classesRoutes);
app.use('/api/statusClass', statusClassRoutes);
app.use('/api/typeClass', typeClassRoutes);
app.use('/api/levelClass', levelClassRutes);

export default app;
