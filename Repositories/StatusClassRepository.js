import GenericRepository from './GenericRepository.js';
import StatusClass from '../models/StatusClass.js';

class StatusClassRepository extends GenericRepository {
    constructor() {
        super(StatusClass);
    }

}

export default new StatusClassRepository();