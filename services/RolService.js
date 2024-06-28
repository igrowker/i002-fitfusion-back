import RolRepository from '../Repositories/RolRepository.js';
import GetRol from '../DTOs/Rol/GetRol.js';
import GetRolesFailedException from '../exceptions/Rol/GetRolesFailedException.js';
import RoleStatus from '../enums/RoleStatus.js';

class RolService {
  constructor() {}

  async GetAllRolesAsync() {
    try {
        const roles = await RolRepository.GetEverythingAsync();
        return roles.length === RoleStatus.NOT_FOUND
            ? (() => { throw new GetRolesFailedException(); })()
            : roles.map(role => new GetRol(role));
    } catch (error) {
        throw error; 
    }
  }
}

export default RolService;

