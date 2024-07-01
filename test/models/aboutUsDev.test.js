import AboutUsDev from '../../models/AboutUsDev.js';

describe('AboutUsDev model', () => {
  describe('AboutUsDev attributes', () => {
    it('should create a new AboutUsDev instance', () => {
      const mockData = {
        FullName: 'John Doe',
        ContactEmail: 'john.doe@example.com',
        ContactPhone: '123-456-7890'
      };

      const aboutUsDevInstance = new AboutUsDev(mockData);

      expect(aboutUsDevInstance.FullName).toEqual(mockData.FullName);
      expect(aboutUsDevInstance.ContactEmail).toEqual(mockData.ContactEmail);
      expect(aboutUsDevInstance.ContactPhone).toEqual(mockData.ContactPhone);

    });
  });
});
