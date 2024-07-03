import sinon from 'sinon';
import { getUserProfile, updateUserProfile } from '../../controllers/user.controller.js';
import UserService from '../../services/UserService.js';
import HttpStatusCode from '../../enums/HttpStatusCode.js';

describe('UserController', () => {
    describe('getUserProfile', () => {
        it('should return user profile when user exists', async () => {
            const req = {
                user: { userId: '1' }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            const mockUser = { id: '1', name: 'John Doe' };
            jest.spyOn(UserService, 'getUserProfile').mockResolvedValue(mockUser);

            await getUserProfile(req, res);

            expect(res.status).toHaveBeenCalledWith(HttpStatusCode.OK);
            expect(res.json).toHaveBeenCalledWith(mockUser);
        });

        it('should return 404 when user does not exist', async () => {
            const req = {
                user: { userId: '1' }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            jest.spyOn(UserService, 'getUserProfile').mockResolvedValue(null);

            await getUserProfile(req, res);

            expect(res.status).toHaveBeenCalledWith(HttpStatusCode.NOT_FOUND);
            expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
        });
    });

    describe('updateUserProfile', () => {
        it('should update user profile when user exists', async () => {
            const req = {
                user: { userId: '1' },
                body: { name: 'Updated Name' }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            const mockUpdatedUser = { id: '1', name: 'Updated Name' };
            jest.spyOn(UserService, 'updateUserProfile').mockResolvedValue(mockUpdatedUser);

            await updateUserProfile(req, res);

            expect(res.status).toHaveBeenCalledWith(HttpStatusCode.OK);
            expect(res.json).toHaveBeenCalledWith({ message: 'User updated successfully', user: mockUpdatedUser });
        });

        it('should return 404 when user does not exist', async () => {
            const req = {
                user: { userId: '1' },
                body: { name: 'Updated Name' }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            jest.spyOn(UserService, 'updateUserProfile').mockResolvedValue(null);

            await updateUserProfile(req, res);

            expect(res.status).toHaveBeenCalledWith(HttpStatusCode.NOT_FOUND);
            expect(res.json).toHaveBeenCalledWith({ message: 'User not found' });
        });
    });
});