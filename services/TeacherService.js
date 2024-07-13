import teacherRepository from '../Repositories/TeacherRepository.js';
import CreateTeacher from '../DTOs/Teacher/CreateTeacher.js';
import HttpStatusCode from '../enums/HttpStatusCode.js';
import ExistingTeacherException from '../exceptions/Teacher/ExistingTeacherException.js';
import TeacherCreationSuccessException from '../exceptions/Teacher/TeacherCreationSuccessException.js';
import FailedCreateTeacherException from '../exceptions/Teacher/FailedCreateTeacherException.js';
import TeacherNotFoundException from '../exceptions/Teacher/TeacherNotFoundException.js';
import Teacher from '../models/Teacher.js';
import User from '../models/User.js';

class TeacherService {

    constructor(teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    async createTeacher(userId, bio, professionalTitle, yearsExperience, classType) {

        try {
            const existingTeacher = await teacherRepository.VerifyDataExistenceAsync({ UserId: userId });

            if (existingTeacher) {
                return { status: HttpStatusCode.CONFLICT, message: new ExistingTeacherException().message };
            }

            const newTeacherDTO = new CreateTeacher(userId, bio, professionalTitle, yearsExperience, classType);

            const newTeacher = await teacherRepository.CreateAsync(newTeacherDTO);

            return { status: HttpStatusCode.CREATED, message: new TeacherCreationSuccessException().message};
            
        } catch (error) {
            return { status: HttpStatusCode.INTERNAL_SERVER_ERROR, message: new FailedCreateTeacherException().message};
        }

    }

    async getOneTeacher(id) {

        try {
            const teacher = await Teacher.findOne({
                where: { TeacherId: id },
                include:  {
                    model: User,
                    attributes: ['Name' , 'Image'],
                }
            })

            console.log('teacher' , !teacher)
            if (!teacher) {
                throw { status: HttpStatusCode.NOT_FOUND, message: 'Teacher not found' };
            }

            return teacher
            
        } catch (error) {
            return { status: HttpStatusCode.INTERNAL_SERVER_ERROR, message: new TeacherNotFoundException().message};
        }

    }

}

export default new TeacherService(teacherRepository);