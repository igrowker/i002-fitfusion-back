import { Router } from "express";
import { GetAllPhysiotherapist, getOnePhysiotherapist } from "../controllers/physiotherapist.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.get('/getAllPhysioterapist', authMiddleware, GetAllPhysiotherapist)
router.get('/getPhysioterapist/:id', authMiddleware, getOnePhysiotherapist )

export default router;