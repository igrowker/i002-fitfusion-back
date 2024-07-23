import { Router } from "express";
import { GetAllLevelClassAsync } from '../controllers/levelClass.controller.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = Router();

router.get('/getAllLevelClass', authMiddleware, GetAllLevelClassAsync);

export default router;