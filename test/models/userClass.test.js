import UserClass from '../../models/UserClass.js';

describe('UserClass model', () => {
  describe('UserClass attributes', () => {
    it('should create a new UserClass instance', () => {
      const mockData = {
        UserId: 1,
        ClassId: 1 
      };

      const userClassInstance = new UserClass(mockData);
      expect(userClassInstance.UserId).toEqual(mockData.UserId);
      expect(userClassInstance.ClassId).toEqual(mockData.ClassId);

    });
  });
});
