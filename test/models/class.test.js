import Class from '../../models/Class.js';

describe('Class model', () => {

  describe('Class attributes', () => {
    it('should create a new Class instance', () => {
      const mockData = {
        Title: 'Yoga Class',
        Description: 'A relaxing yoga session',
        TeacherId: 1,
        LevelClassId: 1,
        TypeClassId: 1,
        Calories: 200,
        StatusId: 1,
        Price: 25.99
      };

      const classInstance = new Class(mockData);

      expect(classInstance.Title).toEqual(mockData.Title);
      expect(classInstance.Description).toEqual(mockData.Description);
      expect(classInstance.TeacherId).toEqual(mockData.TeacherId);
      expect(classInstance.LevelClassId).toEqual(mockData.LevelClassId);
      expect(classInstance.TypeClassId).toEqual(mockData.TypeClassId);
      expect(classInstance.Calories).toEqual(mockData.Calories);
      expect(classInstance.StatusId).toEqual(mockData.StatusId);
      expect(classInstance.Price).toEqual(mockData.Price);

    });
  });
});
