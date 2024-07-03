import { Router } from "express";
import * as classf from '../controllers/class.controller.js'

const router = Router();

router.get('/getAllClasses', classf.getAllClasses);
router.get('/:id', classf.getClassById)
router.put('/:id', classf.updateClassByID)

export default router;
