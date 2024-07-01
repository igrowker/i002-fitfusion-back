import Teacher from '../../models/Teacher.js';

describe('Teacher model', () => {
  describe('Teacher attributes', () => {
    it('should create a new Teacher instance', () => {
      const mockData = {
        UserId: 1,
        Bio: 'Experienced teacher with a passion for education',
        ProfessionalTitle: 'Certified Yoga Instructor',
        YearsExperience: 5,
        ClassType: 'Yoga',
        IsActive: true,
      };

      const teacherInstance = new Teacher(mockData);

      expect(teacherInstance.UserId).toEqual(mockData.UserId);
      expect(teacherInstance.Bio).toEqual(mockData.Bio);
      expect(teacherInstance.ProfessionalTitle).toEqual(mockData.ProfessionalTitle);
      expect(teacherInstance.YearsExperience).toEqual(mockData.YearsExperience);
      expect(teacherInstance.ClassType).toEqual(mockData.ClassType);
      expect(teacherInstance.IsActive).toEqual(mockData.IsActive);

    });
  });
});
