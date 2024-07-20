import PaymentRepository from "../Repositories/PaymentRepository.js";
import HttpStatusCode from "../enums/HttpStatusCode.js";

class PaymentService {
    async createPayment(paymentData) {
        try {
            const { UserId, ClassId, ClassTimeId, ClassDate } = paymentData;

            // Verificar si ya existe un pago para el mismo usuario y clase
            const existingPayment = await PaymentRepository.findPaymentForClassAndUser(UserId, ClassId, ClassTimeId, ClassDate);
            if(existingPayment) {
                throw { status: HttpStatusCode.CONFLICT, message: 'Clase ya reservada por le usuario'};
            }

            return await PaymentRepository.create(paymentData);
        } catch (error) {
            console.error('Error in createPayment:', error);
            throw new Error('Clase ya reservada por le usuario'); 
        }
    }
}

export default new PaymentService();
