import GenericRepository from './GenericRepository.js';
import LevelClass from '../models/LevelClass.js';

class LevelClassRepository extends GenericRepository {
    constructor() {
        super(LevelClass);
    }

}

export default new LevelClassRepository();