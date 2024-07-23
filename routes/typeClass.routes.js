import { Router } from "express";
import { GetAllTypeClassAsync } from '../controllers/typeClass.controller.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = Router();

router.get('/getAllTypeClass', authMiddleware, GetAllTypeClassAsync);

export default router;