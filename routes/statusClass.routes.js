import { Router } from "express";
import { GetAllStatusClassAsync } from '../controllers/statusClass.controller.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const router = Router();

router.get('/getAllStatusClass', authMiddleware, GetAllStatusClassAsync);

export default router;