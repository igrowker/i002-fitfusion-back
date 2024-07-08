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
        if (user) {
            await user.update(updatedData);
        }
        return user;
    }
}

export default new UserRepository();

// import User from '../models/User.js';
// import Teacher from '../models/Teacher.js';
// import Rol from '../models/Rol.js';

// class UserRepository {
//   async findById(userId, options = {}) {
//     return await User.findByPk(userId, {
//       attributes: { exclude: ['Password'] },
//       include: [
//         {
//           model: Rol,
//           as: 'Rol',
//         },
//         {
//           model: Teacher,
//           as: 'Teacher',
//         },
//       ],
//      ...options,
//     });
//   }
// }

// export default new UserRepository();