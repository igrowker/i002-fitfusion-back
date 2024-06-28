import HttpStatusCode from '../enums/HttpStatusCode.js';
import RolService from '../services/RolService.js';
import GetRolesFailedException from '../exceptions/Rol/GetRolesFailedException.js';

const rolService = new RolService();

export const GetAllRolesAsync = async (req, res) => {
    try {
        const rolesDTO = await rolService.GetAllRolesAsync();
        res.json(rolesDTO);
    } catch (error) {
        const status = error instanceof GetRolesFailedException ? HttpStatusCode.NOT_FOUND : HttpStatusCode.INTERNAL_SERVER_ERROR;
        res.status(status).json({ message: error.message });
    }
};

export default GetAllRolesAsync




