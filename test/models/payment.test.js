import Payment from '../../models/Payment.js';

describe('Payment model', () => {
  describe('Payment attributes', () => {
    it('should create a new Payment instance', () => {
      const mockData = {
        ClassId: 1,
        UserId: 1,
        Amount: 100.00,
        Status: 'Paid',
      };

      const paymentInstance = new Payment(mockData);

      expect(paymentInstance.ClassId).toEqual(mockData.ClassId);
      expect(paymentInstance.UserId).toEqual(mockData.UserId);
      expect(paymentInstance.Amount).toEqual(mockData.Amount);
      expect(paymentInstance.Status).toEqual(mockData.Status);

    });
  });
});
