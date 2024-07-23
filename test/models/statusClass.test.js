import StatusClass from '../../models/StatusClass.js';

describe('StatusClass model', () => {
  describe('StatusClass attributes', () => {
    it('should create a new StatusClass instance', () => {
      const mockData = {
        Description: 'Disponible',
        IsActive: true
      };

      const statusClassInstance = new StatusClass(mockData);

      expect(statusClassInstance.Description).toEqual(mockData.Description);
      expect(statusClassInstance.IsActive).toEqual(mockData.IsActive);

    });
  });
});
