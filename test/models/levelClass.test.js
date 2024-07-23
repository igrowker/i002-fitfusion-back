import LevelClass from '../../models/LevelClass.js';

describe('LevelClass model', () => {
  describe('LevelClass attributes', () => {
    it('should create a new LevelClass instance', () => {
      const mockData = {
        Description: 'Beginner',
        IsActive: true
      };

      const levelClassInstance = new LevelClass(mockData);

      expect(levelClassInstance.Description).toEqual(mockData.Description);
      expect(levelClassInstance.IsActive).toEqual(mockData.IsActive);

    });
  });
});
