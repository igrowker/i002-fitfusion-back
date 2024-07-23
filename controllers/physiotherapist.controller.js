import HttpStatusCode from "../enums/HttpStatusCode.js";
import GetPhysiotherapistFailedException from "../exceptions/Physiotherapist/GetPhysiotherapistFailedException.js";
import PhysiotherapistService from "../services/PhysiotherapistService.js";

const physiotherapist = new PhysiotherapistService();

export const GetAllPhysiotherapist = async (req, res) => {
    try {
        const physiotherapistDto = await physiotherapist.GetAllPhysiotherapist();
        res.json(physiotherapistDto);
    } catch (error) {
        
        const status = error instanceof GetPhysiotherapistFailedException ? HttpStatusCode.NOT_FOUND : HttpStatusCode.INTERNAL_SERVER_ERROR;
        res.status(status).json({ message: error.message });
    }
};

export const getOnePhysiotherapist = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await physiotherapist.getOnePhysiotherapist(Number(id));

        if(result.message = "Kinesiologo no encontrado."){
            return res.status(HttpStatusCode.NOT_FOUND).json(result);
        }
        
        return res.status(HttpStatusCode.OK).json(result);
    } catch (error) {
        return res
      .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
      .json({ message: "Failed to get a physiotherapist" });
    }
}

export default {GetAllPhysiotherapist, getOnePhysiotherapist};