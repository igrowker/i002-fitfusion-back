

import GenericRepository from './GenericRepository.js';
import Rol from '../models/Rol.js';

class RolRepository extends GenericRepository {
    constructor() {
        super(Rol);
    }

}

export default new RolRepository();

