import { body } from 'express-validator';

export const updateUserValidator = [
    body('Name').isString().withMessage('Name must be a string'),
    body('Email').isEmail().withMessage('Email must be valid'),
    body('Age').isInt({ min: 0 }).withMessage('Age must be a positive integer'),
    // body('PhysicalCondition').isString().withMessage('PhysicalCondition must be a string'),
    body('Residence').optional().isString().withMessage('Residence must be a string'),
    // body('ActivityLevel').optional().isString().withMessage('ActivityLevel must be a string'),
    body('Weight').optional().isFloat({ min: 0 }).withMessage('Weight must be a positive number'),
    body('Height').optional().isFloat({ min: 0 }).withMessage('Height must be a positive number'),
    // body('Goals').optional().isString().withMessage('Goals must be a string'),
    // body('Preferences').optional().isString().withMessage('Preferences must be a string'),
];

export default updateUserValidator;