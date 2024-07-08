import PaymentsService from "../services/PaymentsService.js";
import HttpStatusCode from "../enums/HttpStatusCode.js";

export const createPayment = async (req, res) => {
    try {
        const { ClassId, UserId, Amount, Status } = req.body;

        // Validación de entrada
        if (!ClassId || !UserId || !Amount || !Status) {
            console.log('Invalid input data:', req.body);
            return res.status(HttpStatusCode.BAD_REQUEST).json({ message: 'All fields are required' });
        }
        console.log('Valid input data:', { ClassId, UserId, Amount, Status });

        const payment = await PaymentsService.createPayment({ ClassId, UserId, Amount, Status });
        console.log('Payment created:', payment);
        return res.status(HttpStatusCode.CREATED).json(payment);
    } catch (error) {
        console.error('Error creating payment:', error);
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Failed to create payment' });
    }
};