import TypeClassRepository from '../Repositories/TypeClassRepository.js';
import GetTypeClass from '../DTOs/TypeClass/GetTypeClass.js';
import GetTypeClassFailedException from '../exceptions/TypeClass/GetTypeClassFailedException.js';
import DataNoFound from '../enums/DataNoFound.js';

class TypeClassService {
  constructor() {}

  async GetAllTypeClassAsync() {
    try {
        const typeClass = await TypeClassRepository.GetEverythingAsync();
        return typeClass.length === DataNoFound.NOT_FOUND
            ? (() => { throw new GetTypeClassFailedException(); })()
            : typeClass.map(Typeclass => new GetTypeClass(Typeclass));
    } catch (error) {
        throw error; 
    }
  }
}

export default TypeClassService;