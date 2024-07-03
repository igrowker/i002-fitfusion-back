import { Router } from "express";
import * as classf from '../controllers/class.controller.js'

const router = Router();

router.get("/getAllClasses", classf.getAllClasses);

export default router;
