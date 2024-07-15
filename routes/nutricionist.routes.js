import { Router } from "express";
import { GetAllNutricionist, getOneNutricionist } from "../controllers/nutricionist.controller.js";

const router = Router();

router.get('/getAllNutricionist', GetAllNutricionist);
router.get('/:id', getOneNutricionist);

export default router;