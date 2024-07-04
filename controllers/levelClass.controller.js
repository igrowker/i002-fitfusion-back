import HttpStatusCode from '../enums/HttpStatusCode.js';
import LevelClassService from '../services/LevelClassService.js';
import GetLevelClassFailedException from '../exceptions/LevelClass/GetLevelClassFailedException.js';

const levelService = new LevelClassService();

export const GetAllLevelClassAsync = async (req, res) => {
    try {
        const levelClassDTO = await levelService.GetAlllevelClassAsync();
        res.json(levelClassDTO);
    } catch (error) {
        const status = error instanceof GetLevelClassFailedException ? HttpStatusCode.NOT_FOUND : HttpStatusCode.INTERNAL_SERVER_ERROR;
        res.status(status).json({ message: error.message });
    }
};

export default GetAllLevelClassAsync