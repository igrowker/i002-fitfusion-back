import NutritionContent from '../../models/NutritionContent.js';

describe('NutritionContent model', () => {
  describe('NutritionContent attributes', () => {
    it('should create a new NutritionContent instance', () => {
      const mockData = {
        Title: 'Nutrition Basics',
        Description: 'Introduction to nutrition fundamentals.',
        AccessDate: new Date(),
      };

      const nutritionContentInstance = new NutritionContent(mockData);

      expect(nutritionContentInstance.Title).toEqual(mockData.Title);
      expect(nutritionContentInstance.Description).toEqual(mockData.Description);
      expect(nutritionContentInstance.AccessDate).toBeDefined();

    });
  });
});
