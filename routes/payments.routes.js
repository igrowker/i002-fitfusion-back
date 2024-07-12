import { Router } from "express";
import { createPayment, getPaymentsUser } from "../controllers/payments.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

// router.post('/', authMiddleware, createPayment);
router.post('/',  createPayment);
router.get('/:id', authMiddleware, getPaymentsUser);

export default router;