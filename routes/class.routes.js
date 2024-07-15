import { Router } from "express";
import * as classf from '../controllers/class.controller.js'
import authMiddleware from '../middlewares/authMiddleware.js'
import createClassValidator from "../validators/Class/createClassValidator.js";

const router = Router();

router.get('/getAllClasses', authMiddleware, classf.getAllClasses);
router.post('/getClassesByDate', authMiddleware, classf.getClassesByDay);
router.post('/register', authMiddleware, createClassValidator, classf.createClass);
router.get('/:id', authMiddleware, classf.getClassById)
router.put('/:id', authMiddleware, classf.updateClassByID)
router.delete('/:id', authMiddleware, classf.deleteClassByID)
router.patch('/complete', authMiddleware, classf.markClassAsCompleted);
export default router;
