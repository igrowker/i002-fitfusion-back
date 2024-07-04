import TeacherService from '../services/TeacherService.js';
import HttpStatusCode from '../enums/HttpStatusCode.js';

export const createTeacher = async (req, res) => {

    const { userId, bio, professionalTitle, yearsExperience, classType } = req.body;

    try {
        const result = await TeacherService.createTeacher(userId, bio, professionalTitle, yearsExperience, classType);
        return res.status(result.status).json({ message: result.message });
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Failed to create teacher'});
    }

};
