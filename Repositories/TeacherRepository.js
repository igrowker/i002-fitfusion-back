import GenericRepository from './GenericRepository.js';
import Teacher from '../models/Teacher.js';

class TeacherRepository extends GenericRepository {
    constructor() {
        super(Teacher);
    }

}

const teacherRepository = new TeacherRepository();

export default teacherRepository;