import HttpStatusCode from '../enums/HttpStatusCode.js';
import StatusClassService from '../services/StatusClassService.js';
import GetStatusClassFailedException from '../exceptions/StatusClass/GetStatusClassFailedException.js';

const stausService = new StatusClassService();

export const GetAllStatusClassAsync = async (req, res) => {
    try {
        const statusClassDTO = await stausService.GetAllStatusClassAsync();
        res.json(statusClassDTO);
    } catch (error) {
        const status = error instanceof GetStatusClassFailedException ? HttpStatusCode.NOT_FOUND : HttpStatusCode.INTERNAL_SERVER_ERROR;
        res.status(status).json({ message: error.message });
    }
};

export default GetAllStatusClassAsync