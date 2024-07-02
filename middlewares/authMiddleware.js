import jwt from 'jsonwebtoken';
import HttpStatusCode from '../enums/HttpStatusCode.js';

const authMiddleware = (req, res, next) => {
    const authHeader = req.header('Authorization');

    if (!authHeader) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({ message: 'Authorization token required' });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({ message: 'Invalid token format' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Añadir la información del usuario al objeto req
        next();
    } catch (error) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({ message: 'Invalid token' });
    }
};

export default authMiddleware;