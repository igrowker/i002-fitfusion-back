import User from '../models/User.js';
import Teacher from '../models/Teacher.js';
import bcrypt from 'bcrypt';

class UserRepository {
    async findById(userId) {

        const user = await User.findByPk(userId, {
            attributes: { exclude: ['Password'] },
        });
        if (user.RolId === 1) {
            const teacher =  await Teacher.findOne({
                where: { UserId: userId },
                include: {
                    model : User,
                    attributes: { exclude: ['Password'] },
                }, 
            })

            const adaptedTeacherInfo = { 
                UserId: teacher.User.UserId,
                Name: teacher.User.Name,
                Email: teacher.User.Email,
                RolId: teacher.User.RolId,
                Age: teacher.User.Age,
                Residence: teacher.User.Residence,
                PhysicalCondition: teacher.User.PhysicalCondition,
                ActivityLevel: teacher.User.ActivityLevel,
                Weight: teacher.User.Weight,
                Height: teacher.User.Height,
                Goals: teacher.User.Goals,
                Preferences: teacher.User.Preferences,
                IsActive: teacher.User.IsActive,
                Image: teacher.User.Image,
                Calories: teacher.User.Calories,
                Teacher : {
                    TeacherId : teacher.TeacherId ,
                    UserId : teacher.UserId ,
                    Bio : teacher.Bio ,
                    ProfessionalTitle : teacher.ProfessionalTitle ,
                    YearsExperience : teacher.YearsExperience ,
                    ClassType : teacher.ClassType ,
                    IsActive : teacher.IsActive ,
                }
            }

            return adaptedTeacherInfo
        } else {
            return user;
        }

    }

    async updateUser(userId, updatedData) {
        const user = await User.findByPk(userId);

        const isPasswordValid = await bcrypt.compare(updatedData.Password, user.Password);
        
        if(!isPasswordValid){
            throw new Error('La contraseña no es valida')
        }

        let hashedPassword 
        const saltRounds = 10;
        const regex = new RegExp('^(?=.*[0-9])(?=.*[a-z]).{8,}$')

        if(regex.test(updatedData.NewPassword)){
            hashedPassword = await bcrypt.hash(updatedData.NewPassword, saltRounds);
        } else {
            hashedPassword = await bcrypt.hash(updatedData.Password, saltRounds);
        }

        updatedData.Password = hashedPassword.trim()

        if (user && user.RolId === 2) {
            await user.update(updatedData);
            return user;

        } else if (user && user.RolId === 1) {
            await user.update(updatedData);
            if(updatedData.teacherInfo.TeacherId){
                const {TeacherId} = updatedData.teacherInfo
                const teacher = await Teacher.findByPk(TeacherId)
    
                await teacher.update(updatedData.teacherInfo)
                return {user, teacher}
            }
            
            return {user}
        }
    }

    async deleteUser(userId) {
        const user = await User.findByPk(userId);
        if(!user) {
            throw new Error('User not found');
        }

        // Actualizar IsActive a false
        user.IsActive = false;
        await user.save();
        return user;
    }
}

export default new UserRepository();
