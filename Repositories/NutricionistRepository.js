import GenericRepository from "./GenericRepository.js";
import Nutricionist from "../models/Nutricionists.js";

class NutricionistRepository extends GenericRepository{
    constructor() {
        super(Nutricionist)
    }
}

const nutricionistRepository = new NutricionistRepository();

export default nutricionistRepository;