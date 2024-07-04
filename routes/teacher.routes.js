import { Router } from "express";
import * as teacher from '../controllers/teacher.controller.js'
import authMiddleware from '../middlewares/authMiddleware.js';

const router = Router();

router.post('/register', authMiddleware, teacher.createTeacher);

export default router;