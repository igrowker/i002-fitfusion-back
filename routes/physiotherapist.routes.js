import { Router } from "express";
import { GetAllPhysiotherapist, getOnePhysiotherapist } from "../controllers/physiotherapist.controller.js";

const router = Router();

router.get('/getAllPhysioterapist', GetAllPhysiotherapist)
router.get('/:id', getOnePhysiotherapist )

export default router;