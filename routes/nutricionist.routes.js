import { Router } from "express";
import { GetAllNutricionist, getOneNutricionist } from "../controllers/nutricionist.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.get('/getAllNutricionist', authMiddleware, GetAllNutricionist);
router.get('/:id', authMiddleware, getOneNutricionist);

export default router;