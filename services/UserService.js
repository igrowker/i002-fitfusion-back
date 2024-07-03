import UserRepository from '../Repositories/UserRepository.js';
import HttpStatusCode from '../enums/HttpStatusCode.js';

class UserService {
    async getUserProfile(userId) {
        const user = await UserRepository.findById(userId);
        if (!user) {
            throw { status: HttpStatusCode.NOT_FOUND, message: 'User not found' };
        }
        return user;
    }

    async updateUserProfile(userId, updatedData) {
        const user = await UserRepository.updateUser(userId, updatedData);
        if (!user) {
            throw { status: HttpStatusCode.NOT_FOUND, message: 'User not found' };
        }
        return user;
    }
}

export default new UserService();