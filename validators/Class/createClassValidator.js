/*import { body } from 'express-validator';

const createClassValidator = [
    body('title')
        .notEmpty().withMessage('El título es requerido')
        .isLength({ min: 3, max: 100 }).withMessage('El título debe tener entre 3 y 100 caracteres'),

    body('description')
        .notEmpty().withMessage('La descripción es requerida')
        .isLength({ max: 500 }).withMessage('La descripción no puede tener más de 500 caracteres'),

    body('teacherId')
        .notEmpty().withMessage('TeacherId es requerido')
        .isInt({ min: 1 }).withMessage('TeacherId debe ser un número entero'),

    body('levelClassId')
        .notEmpty().withMessage('LevelClassId es requerido')
        .isInt({ min: 1 }).withMessage('LevelClassId debe ser un número entero'),

    body('typeClassId')
        .notEmpty().withMessage('TypeClassId es requerido')
        .isInt({ min: 1 }).withMessage('TypeClassId debe ser un número entero'),

    body('calories')
        .notEmpty().withMessage('Calories es requerido')
        .isInt({ min: 1 }).withMessage('Calories debe ser un número entero'),

    body('statusId')
        .notEmpty().withMessage('StatusId es requerido')
        .isInt({ min: 1 }).withMessage('StatusId debe ser un número entero'),

    body('price')
        .notEmpty().withMessage('Price es requerido')
        .isDecimal().withMessage('Price debe ser un número decimal')
];


export default createClassValidator;*/



import { body } from 'express-validator';

const createClassValidator = [
    body('title')
        .notEmpty().withMessage('El título es requerido')
        .isLength({ min: 3, max: 100 }).withMessage('El título debe tener entre 3 y 100 caracteres'),

    body('description')
        .notEmpty().withMessage('La descripción es requerida')
        .isLength({ max: 500 }).withMessage('La descripción no puede tener más de 500 caracteres'),

    body('teacherId')
        .notEmpty().withMessage('TeacherId es requerido')
        .isInt({ min: 1 }).withMessage('TeacherId debe ser un número entero mayor que cero')
        .custom(value => {
            if (parseInt(value) === 0) {
                throw new Error('TeacherId no puede ser cero');
            }
            return true;
        }),

    body('levelClassId')
        .notEmpty().withMessage('LevelClassId es requerido')
        .isInt({ min: 1 }).withMessage('LevelClassId debe ser un número entero mayor que cero')
        .custom(value => {
            if (parseInt(value) === 0) {
                throw new Error('LevelClassId no puede ser cero');
            }
            return true;
        }),

    body('typeClassId')
        .notEmpty().withMessage('TypeClassId es requerido')
        .isInt({ min: 0 }).withMessage('TypeClassId debe ser un número entero mayor que cero')
        .custom(value => {
            if (value !== 1 && value !== 2 && value !== 3 && value !== 4) {
                throw new Error('El TypeClassId debe ser, 1: Aire libre, 2: En casa, 3: En gimnasio, 4: Virtual');
            }
            return true;
        }),

    body('calories')
        .notEmpty().withMessage('Calories es requerido')
        .isInt({ min: 1 }).withMessage('Calories debe ser un número entero mayor que cero'),

    body('statusId')
        .notEmpty().withMessage('StatusId es requerido')
        .isInt({ min: 0 }).withMessage('StatusId debe ser un número entero mayor que cero')
        .custom(value => {
            if (value !== 1 && value !== 2) {
                throw new Error('El StatusId debe ser 1 Disponible o 2 No disponible');
            }
            return true;
        }),

    body('price')
        .notEmpty().withMessage('Price es requerido')
        .isDecimal().withMessage('Price debe ser un número decimal')
];


export default createClassValidator;

