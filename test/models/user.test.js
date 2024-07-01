import User from '../../models/User.js';

describe('User model', () => {
  describe('User attributes', () => {
    it('should create a new User instance', () => {
      const mockData = {
        Name: 'John Doe',
        Email: 'john.doe@example.com',
        Password: 'password123',
        RolId: 1,
        Age: 30,
        Residence: 'City A',
        PhysicalCondition: 'Healthy',
        ActivityLevel: 'Active',
        Weight: 75.5,
        Height: 175.0,
        Goals: 'Get fit',
        Preferences: 'Prefer cardio exercises',
        IsActive: true,
      };

      const userInstance = new User(mockData);

      expect(userInstance.Name).toEqual(mockData.Name);
      expect(userInstance.Email).toEqual(mockData.Email);
      expect(userInstance.Password).toEqual(mockData.Password);
      expect(userInstance.RolId).toEqual(mockData.RolId);
      expect(userInstance.Age).toEqual(mockData.Age);
      expect(userInstance.Residence).toEqual(mockData.Residence);
      expect(userInstance.PhysicalCondition).toEqual(mockData.PhysicalCondition);
      expect(userInstance.ActivityLevel).toEqual(mockData.ActivityLevel);
      expect(userInstance.Weight).toEqual(mockData.Weight);
      expect(userInstance.Height).toEqual(mockData.Height);
      expect(userInstance.Goals).toEqual(mockData.Goals);
      expect(userInstance.Preferences).toEqual(mockData.Preferences);
      expect(userInstance.IsActive).toEqual(mockData.IsActive);

    });
  });
});
