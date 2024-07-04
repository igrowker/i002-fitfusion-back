import PaymentRepository from "../Repositories/PaymentRepository.js";
import HttpStatusCode from "../enums/HttpStatusCode.js";

class PaymentService {
    async createPayment(paymentData) {
        try {
            return await PaymentRepository.create(paymentData);
        } catch (error) {
            console.error('Error in createPayment:', error);
            throw new Error('Failed to create payment'); 
        }
    }
}

export default new PaymentService();
