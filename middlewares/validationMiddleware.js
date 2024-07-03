import { validationResult } from 'express-validator';
import HttpStatusCode from '../enums/HttpStatusCode.js';

const validationMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({ errors: errors.array() });
    }
    next();
};

export default validationMiddleware;