
import { body } from 'express-validator';

const signUpValidator = [
  body('name')
    .notEmpty().withMessage('El nombre es requerido'),

  body('email')
    .isEmail().withMessage('El correo electrónico no es válido'),

  body('password')
    .notEmpty().withMessage('La contraseña es requerida'),

  body('rolId')
    .isInt({ min: 1 }).withMessage('El rolId debe ser un número entero positivo')
    .custom(value => {
      if (value !== 1 && value !== 2) {
        throw new Error('El rolId debe ser 1 Profesor o 2 Usuario');
      }
      return true;
    }),
];

export default signUpValidator;




