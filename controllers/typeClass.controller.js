import HttpStatusCode from '../enums/HttpStatusCode.js';
import TypeClassService from '../services/TypeClassService.js';
import GetTypeClassFailedException from '../exceptions/TypeClass/GetTypeClassFailedException.js';

const typeClass = new TypeClassService();

export const GetAllTypeClassAsync = async (req, res) => {
    try {
        const typeClassDTO = await typeClass.GetAllTypeClassAsync();
        res.json(typeClassDTO);
    } catch (error) {
        const status = error instanceof GetTypeClassFailedException ? HttpStatusCode.NOT_FOUND : HttpStatusCode.INTERNAL_SERVER_ERROR;
        res.status(status).json({ message: error.message });
    }
};

export default GetAllTypeClassAsync