import phisiotherapistRepository from "../Repositories/PhysiotherapistRepository.js";
import GetPhysiotherapist from "../DTOs/Physiotherapist/GetPhysiotherapist.js";
import GetPhysiotherapistFailedException from "../exceptions/Physiotherapist/GetPhysiotherapistFailedException.js";
import DataNoFound from "../enums/DataNoFound.js";
import Physiotherapist from "../models/Physiotherapist.js";
import PhysiotherapistNotFoundException from "../exceptions/Physiotherapist/PhysiotherapistNotFoundException.js";
import HttpStatusCode from "../enums/HttpStatusCode.js";

class PhysiotherapistService {
    constructor(phisiotherapistRepository) {
        this.phisiotherapistRepository = phisiotherapistRepository;
    }

    async GetAllPhysiotherapist() {
        try {
            const physiotherapist = await phisiotherapistRepository.GetEverythingAsync();
            return physiotherapist.length === DataNoFound.NOT_FOUND 
            ? (() => {throw new  GetPhysiotherapistFailedException(); })()
            : physiotherapist.map(Physiotherapist => new GetPhysiotherapist(Physiotherapist));
        } catch (error) {
            throw error;
        }
    }

    async getOnePhysiotherapist(id) {
        try {
            const physiotherapist = await Physiotherapist.findOne ({
                where: { PhysiotherapistId: id}
            })

            return physiotherapist;
        } catch (error) {
            return { status: HttpStatusCode.NOT_FOUND, message: new PhysiotherapistNotFoundException().message};
        }
    }
}

export default PhysiotherapistService;