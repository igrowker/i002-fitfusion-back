import Payment from "../models/Payment.js";

class PaymentRepository {
    async create(paymentData) {
        try {
            return await Payment.create(paymentData);
        } catch (error) {
            console.error('Error in PaymentRepository.create:', error);
            throw error; // Re-lanza el error para que el servicio lo maneje
        }
    }
}

export default new PaymentRepository();