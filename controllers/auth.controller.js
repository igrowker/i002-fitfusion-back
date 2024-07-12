import AuthService from '../services/AuthService.js';
import HttpStatusCode from '../enums/HttpStatusCode.js';
import InternalServerErrorException from '../exceptions/Auth/InternalServerErrorException.js';

import { validationResult } from 'express-validator';

export const singUp = async (req, res) => {

    const { name, email, password, rolId } = req.body;

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(HttpStatusCode.BAD_REQUEST).json({ errors: errors.array() });
        }

        const result = await AuthService.singUp(name, email, password, rolId);

        if(result.message === "El correo electrónico ya está registrado.") {
            return res.status(HttpStatusCode.CONFLICT).json(result)
        }

        return res.status(HttpStatusCode.CREATED).json(result);
        
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: new  InternalServerErrorException().message});
    }

};

export const singIn = async (req, res) => {

    const { email, password } = req.body;

    try {
        const loginResponse = await AuthService.singIn(email, password);
        if(loginResponse.message === "Credenciales inválidas.") {
            return res.status(HttpStatusCode.CONFLICT).json(loginResponse)
        }
        return res.status(HttpStatusCode.OK).json(loginResponse);
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: new  InternalServerErrorException().message});
    }

};
