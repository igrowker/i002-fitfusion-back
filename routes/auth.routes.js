import { Router } from "express";
import * as auth from '../controllers/auth.controller.js'

import signUpValidator from '../validators/signUpValidator.js';

const router = Router();

router.post('/register', signUpValidator, auth.singUp);
router.post('/login', auth.singIn);

export default router;
