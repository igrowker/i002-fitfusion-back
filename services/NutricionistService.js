import nutricionistRepository from "../Repositories/NutricionistRepository.js";
import GetNutricionist from "../DTOs/Nutricionist/GetNutricionist.js";
import GetNutricionistFailedException from "../exceptions/Nutricionist/GetNutricionistFailedExceptions.js";
import DataNoFound from "../enums/DataNoFound.js";
import Nutricionists from "../models/Nutricionists.js";
import NutricionistNotFoundException from "../exceptions/Nutricionist/NutricionistNotFoundException.js";
import HttpStatusCode from "../enums/HttpStatusCode.js";

class NutricionistService {
    contrsuctor(nutricionistRepository) {
        this.nutricionistRepository = nutricionistRepository;
    }

    async GetAllNutricionist() {
        try {
            const nutricionist = await nutricionistRepository.GetEverythingAsync();
            return nutricionist.length === DataNoFound.NOT_FOUND
            ? (() => {throw new GetNutricionistFailedException(); })()
            : nutricionist.map(Nutricionist => new GetNutricionist(Nutricionist));
        } catch (error) {
            throw error;
        }
    }

    async getOneNutricionist(id) {
        try {
            const nutricionist = await Nutricionists.findOne({
                where: { NutricionistsId: id}
            })
            
            return nutricionist;
        } catch (error) {
            return { status: HttpStatusCode.INTERNAL_SERVER_ERROR, message: new NutricionistNotFoundException().message};
        }
    }
} 

export default NutricionistService;