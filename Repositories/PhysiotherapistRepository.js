import GenericRepository from "./GenericRepository.js";
import Physiotherapist from "../models/Physiotherapist.js";

class PhysiotherapistRepository extends GenericRepository{
    constructor() {
        super(Physiotherapist)
    }
}

const phisiotherapistRepository = new PhysiotherapistRepository();

export default phisiotherapistRepository;