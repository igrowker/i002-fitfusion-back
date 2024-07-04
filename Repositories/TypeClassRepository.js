import GenericRepository from './GenericRepository.js';
import TypeClass from '../models/TypeClass.js';

class TypeClassRepository extends GenericRepository {
    constructor() {
        super(TypeClass);
    }

}

export default new TypeClassRepository();