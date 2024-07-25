import { Router } from "express";
import { createPayment, getPaymentsUser, createPaymentStripe } from "../controllers/payments.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = Router();

router.post('/', authMiddleware, createPayment);
// router.post('/', createPayment);
router.post('/stripe', authMiddleware, createPaymentStripe);
router.get('/:id', authMiddleware, getPaymentsUser);

export default router;