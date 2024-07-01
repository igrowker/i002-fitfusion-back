import Physiotherapist from '../../models/Physiotherapist.js';

describe('Physiotherapist model', () => {
  describe('Physiotherapist attributes', () => {
    it('should create a new Physiotherapist instance', () => {
      const mockData = {
        FullName: 'Dr. John Smith',
        ContactEmail: 'john.smith@example.com',
        ContactPhone: '123-456-7890',
        Location: 'City A',
        Description: 'Experienced physiotherapist specializing in sports injuries.',
      };

      const physiotherapistInstance = new Physiotherapist(mockData);

      expect(physiotherapistInstance.FullName).toEqual(mockData.FullName);
      expect(physiotherapistInstance.ContactEmail).toEqual(mockData.ContactEmail);
      expect(physiotherapistInstance.ContactPhone).toEqual(mockData.ContactPhone);
      expect(physiotherapistInstance.Location).toEqual(mockData.Location);
      expect(physiotherapistInstance.Description).toEqual(mockData.Description);

    });
  });
});
