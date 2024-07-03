import { Router } from 'express';
import * as userController from '../controllers/user.controller.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import validationMiddleware from '../middlewares/validationMiddleware.js';
import { updateUserValidator } from '../validators/userValidator.js';

const router = Router();

router.get('/me', authMiddleware, userController.getUserProfile);
router.put('/me', authMiddleware, updateUserValidator, validationMiddleware, userController.updateUserProfile);

export default router;