import RolRepository from '../Repositories/RolRepository.js';
import GetRol from '../DTOs/Rol/GetRol.js';
import GetRolesFailedException from '../exceptions/Rol/GetRolesFailedException.js';
import DataNoFound from '../enums/DataNoFound.js';

class RolService {
  constructor() {}

  async GetAllRolesAsync() {
    try {
        const roles = await RolRepository.GetEverythingAsync();
        return roles.length === DataNoFound.NOT_FOUND
            ? (() => { throw new GetRolesFailedException(); })()
            : roles.map(role => new GetRol(role));
    } catch (error) {
        throw error; 
    }
  }
}

export default RolService;

