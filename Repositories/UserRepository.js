import User from '../models/User.js';

class UserRepository {
    async findById(userId) {
        return await User.findByPk(userId, {
            attributes: { exclude: ['Password'] },
        });
    }

    async updateUser(userId, updatedData) {
        const user = await User.findByPk(userId);
        if (user) {
            await user.update(updatedData);
        }
        return user;
    }
}

export default new UserRepository();