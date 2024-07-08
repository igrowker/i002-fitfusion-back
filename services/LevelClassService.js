import LevelClassRepository from '../Repositories/LevelClassRepository.js';
import GetLevelClass from '../DTOs/LevelClass/GetLevelClass.js';
import GetLevelClassFailedException from '../exceptions/LevelClass/GetLevelClassFailedException.js';
import DataNoFound from '../enums/DataNoFound.js';

class LevelClassService {
  constructor() {}

  async GetAlllevelClassAsync() {
    try {
        const levelClass = await LevelClassRepository.GetEverythingAsync();
        return levelClass.length === DataNoFound.NOT_FOUND
            ? (() => { throw new GetLevelClassFailedException(); })()
            : levelClass.map(levelclass => new GetLevelClass(levelclass));
    } catch (error) {
        throw error;
    }
  }
}

export default LevelClassService;