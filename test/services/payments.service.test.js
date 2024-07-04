import PaymentService from '../../services/PaymentsService.js';
import PaymentRepository from '../../Repositories/PaymentRepository.js';

jest.mock('../../Repositories/PaymentRepository.js');

describe('PaymentService', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should create a new payment', async () => {
        const paymentData = { ClassId: 1, UserId: 1, Amount: 100, Status: 'pending' };
        const paymentMock = { Id: 1, ...paymentData };

        PaymentRepository.create.mockResolvedValue(paymentMock);

        const result = await PaymentService.createPayment(paymentData);

        expect(result).toEqual(paymentMock);
        expect(PaymentRepository.create).toHaveBeenCalledWith(paymentData);
    });

    it('should throw an error on repository failure', async () => {
        const paymentData = { ClassId: 1, UserId: 1, Amount: 100, Status: 'pending' };
        const errorMessage = 'Repository error';

        PaymentRepository.create.mockRejectedValue(new Error(errorMessage));

        await expect(PaymentService.createPayment(paymentData)).rejects.toThrow('Failed to create payment');
        expect(PaymentRepository.create).toHaveBeenCalledWith(paymentData);
    });
});