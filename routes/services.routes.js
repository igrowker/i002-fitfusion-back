import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { sendEmail } from '../controllers/services.controller.js';

const router = Router();

router.post('/sendEmail', sendEmail );
// router.post('/sendEmail', authMiddleware, sendEmail );

export default router;