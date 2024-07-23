import { Router } from "express";
import { GetAllRolesAsync } from '../controllers/rols.controller.js'

const router = Router();

router.get('/GetAllRol', GetAllRolesAsync);

export default router;
