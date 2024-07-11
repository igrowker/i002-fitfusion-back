import Payment from "../models/Payment.js";
import GenericRepository from "./GenericRepository.js";

class PaymentRepository {
    // constructor() {
    //     super(Payment);
    // }
    async create(paymentData) {
        try {
            return await Payment.create(paymentData);
        } catch (error) {
            console.error('Error in PaymentRepository.create:', error);
            throw error; // Re-lanza el error para que el servicio lo maneje
        }
    }

    async findPaymentForClassAndUser(userId, classId) {
        console.log("este es user:", userId, "esta es clase:", classId)
       
        return await Payment.findOne({
            where: {
                ClassId: classId,
                UserId: userId,
                Status: 'Complete',  // Asumiendo que el estado "Completed" indica que el pago está realizado
            }
        });
    }
}

export default new PaymentRepository();