import UserService from '../../services/UserService.js';
import UserRepository from '../../Repositories/UserRepository.js';
import HttpStatusCode from '../../enums/HttpStatusCode.js';

describe('UserService', () => {
    describe('getUserProfile', () => {
        it('should return user profile when user exists', async () => {
            // Mock UserRepository.findById to return a mock user
            const mockUserId = 'user123';
            const mockUser = { _id: mockUserId, name: 'John Doe', email: 'john.doe@example.com' };
            jest.spyOn(UserRepository, 'findById').mockResolvedValue(mockUser);

            // Call getUserProfile
            const result = await UserService.getUserProfile(mockUserId);

            // Assertions
            expect(result).toEqual(mockUser);

            // Restore mock
            UserRepository.findById.mockRestore();
        });

        it('should throw 404 error when user does not exist', async () => {
            // Mock UserRepository.findById to return null (user not found)
            const mockUserId = 'nonexistentuser';
            jest.spyOn(UserRepository, 'findById').mockResolvedValue(null);

            // Call getUserProfile and expect it to throw an error
            await expect(UserService.getUserProfile(mockUserId)).rejects.toEqual({
                status: HttpStatusCode.NOT_FOUND,
                message: 'User not found'
            });

            // Restore mock
            UserRepository.findById.mockRestore();
        });
    });

    describe('updateUserProfile', () => {
        it('should update user profile when user exists', async () => {
            // Mock UserRepository.updateUser to return the updated user
            const mockUserId = 'user123';
            const updatedData = { name: 'Updated Name' };
            const updatedUser = { _id: mockUserId, name: 'Updated Name', email: 'john.doe@example.com' };
            jest.spyOn(UserRepository, 'updateUser').mockResolvedValue(updatedUser);

            // Call updateUserProfile
            const result = await UserService.updateUserProfile(mockUserId, updatedData);

            // Assertions
            expect(result).toEqual(updatedUser);

            // Restore mock
            UserRepository.updateUser.mockRestore();
        });

        it('should throw 404 error when user does not exist', async () => {
            // Mock UserRepository.updateUser to return null (user not found)
            const mockUserId = 'nonexistentuser';
            const updatedData = { name: 'Updated Name' };
            jest.spyOn(UserRepository, 'updateUser').mockResolvedValue(null);

            // Call updateUserProfile and expect it to throw an error
            await expect(UserService.updateUserProfile(mockUserId, updatedData)).rejects.toEqual({
                status: HttpStatusCode.NOT_FOUND,
                message: 'User not found'
            });

            // Restore mock
            UserRepository.updateUser.mockRestore();
        });
    });
});