import GenericRepository from './GenericRepository.js';
import Class from '../models/Class.js';

class ClassRepository extends GenericRepository {
    constructor() {
        super(Class);
    }

    async findOneByTitleAndDescription(title, description) {
        return await this.model.findOne({ where: { Title: title, Description: description } });
    }
}

export default new ClassRepository();
