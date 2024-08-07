import Rol from '../../models/Rol.js';

describe('Rol model', () => {
  describe('constructor', () => {
    it('should create a new Rol instance', () => {
      const mockData = {
        RolId: 1,
        Description: 'User',
        IsActive: true
      };

      const rolInstance = new Rol(mockData);

      expect(rolInstance.RolId).toEqual(mockData.RolId);
      expect(rolInstance.Description).toEqual(mockData.Description);
      expect(rolInstance.IsActive).toEqual(mockData.IsActive);
    });
  });
});