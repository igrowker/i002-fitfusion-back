import TypeClass from '../../models/TypeClass.js';

describe('TypeClass model', () => {
  describe('TypeClass attributes', () => {
    it('should create a new TypeClass instance', () => {
      const mockData = {
        Description: 'Yoga',
        IsActive: true
      };

      const typeClassInstance = new TypeClass(mockData);

      expect(typeClassInstance.Description).toEqual(mockData.Description);
      expect(typeClassInstance.IsActive).toEqual(mockData.IsActive);

    });
  });
});
