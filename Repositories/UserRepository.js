import User from '../models/User.js';
import Teacher from '../models/Teacher.js';

class UserRepository {
    async findById(userId) {

        const user = await User.findByPk(userId, {
            attributes: { exclude: ['Password'] },
        });
        if (user.RolId === 1) {
            return await Teacher.findOne({
                where: { UserId: userId },
                include: User, // Incluye los datos de User asociados a Teacher
            })
        } else {
            return user;
        }

    }

    async updateUser(userId, updatedData) {
        const user = await User.findByPk(userId);

        if (user && user.RolId === 2) {
            await user.update(updatedData);
            return user;

        } else if (user && user.RolId === 1) {
            const {TeacherId} = updatedData.teacherInfo
            const teacher = await Teacher.findByPk(TeacherId)

            await user.update(updatedData);
            await teacher.update(updatedData.teacherInfo)

            return {user, teacher}
        }
    }
}

export default new UserRepository();
