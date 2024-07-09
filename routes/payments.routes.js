import { Router } from "express";
import { createPayment, getPaymentsUser } from "../controllers/payments.controller.js";

const router = Router();

router.post('/', createPayment);
router.get('/:id', getPaymentsUser)

export default router;