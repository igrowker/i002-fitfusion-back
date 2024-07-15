import HttpStatusCode from "../enums/HttpStatusCode.js";
import GetNutricionistFailedException from "../exceptions/Nutricionist/GetNutricionistFailedExceptions.js";
import NutricionistService from "../services/NutricionistService.js";

const nutricionist = new NutricionistService;

export const GetAllNutricionist = async (req, res) => {
    try {
        const nutricionistDto = await nutricionist.GetAllNutricionist();
        res.json(nutricionistDto);
    } catch (error) {
        const status = error instanceof GetNutricionistFailedException ? HttpStatusCode.NOT_FOUND : HttpStatusCode.INTERNAL_SERVER_ERROR;
        res.status(status).json({ message: error.message });
    }
};

export const getOneNutricionist = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await nutricionist.getOneNutricionist(Number(id));
        return res.status(HttpStatusCode.OK).json(result);
    } catch (error) {
        return res
        .status(HttpStatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: "Failed to get a nutricionist" });
    }
}

export default {GetAllNutricionist, getOneNutricionist};