import completedClassRepository from "../Repositories/CompletedClassRepository.js";
import paymentRepository from '../Repositories/PaymentRepository.js';

class CompletedClassService {
    constructor(completedClassRepository){
        this.completedClassRepository = completedClassRepository;
    }
    async markClassAsCompleted(userId, classId) {
        
        console.log("este es el userId", userId, "este es el classId", classId)
        const payment = await paymentRepository.findPaymentForClassAndUser(userId, classId);
        if(!payment) {
            throw new Error('No se encontro un pago completado para esta clase y usuario');
        }
        
        console.log("markaskcomplete", payment)
        const completedClass = await completedClassRepository.findCompletedClass(userId, classId);
        console.log("markaskcomplete2", completedClass)
        if(completedClass) {
            throw new Error('Esta clase ya fue completada por este usuario');
        }

        return await completedClassRepository.markAsCompleted(userId, classId);
    }
}

const completedClassService = new CompletedClassService();
export default completedClassService;