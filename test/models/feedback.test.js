import Feedback from '../../models/Feedback.js'; 

describe('Feedback model', () => {
  describe('Feedback attributes', () => {
    it('should create a new Feedback instance', () => {
      const mockData = {
        ClassId: 1,
        UserId: 1,
        Comment: 'Great class!',
        Rating: 5
      };

      const feedbackInstance = new Feedback(mockData);

      expect(feedbackInstance.ClassId).toEqual(mockData.ClassId);
      expect(feedbackInstance.UserId).toEqual(mockData.UserId);
      expect(feedbackInstance.Comment).toEqual(mockData.Comment);
      expect(feedbackInstance.Rating).toEqual(mockData.Rating);

    });
  });
});
