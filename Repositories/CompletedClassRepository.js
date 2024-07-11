import GenericRepository from './GenericRepository.js';
import CompletedClass from '../models/CompletedClass.js';


class CompletedClassRepository extends GenericRepository {
    constructor() {
        super(CompletedClass);
    }

    async markAsCompleted(userId, classId) {
        return await this.model.create({ UserId: userId, ClassId: classId });
    }

    async findCompletedClass(userId, classId) {
        
        return await this.model.findOne({
            where: {
                UserId: userId,
                ClassId: classId,
            },
        });
    }
}

const completedClassRepository = new CompletedClassRepository();
export default completedClassRepository;