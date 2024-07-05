import { Router } from 'express';
import { sendEmail } from '../controllers/services.controller.js';

const router = Router();

router.post('/sendEmail', sendEmail );

export default router;