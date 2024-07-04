import StatusClassRepository from '../Repositories/StatusClassRepository.js';
import GetStatusClass from '../DTOs/StatusClass/GetStatusClass.js';
import GetStatusClassFailedException from '../exceptions/StatusClass/GetStatusClassFailedException.js';
import DataNoFound from '../enums/DataNoFound.js';

class StatusClassService {
  constructor() {}

  async GetAllStatusClassAsync() {
    try {
        const statusClass = await StatusClassRepository.GetEverythingAsync();
        return statusClass.length === DataNoFound.NOT_FOUND
            ? (() => { throw new GetStatusClassFailedException(); })()
            : statusClass.map(StatusClass => new GetStatusClass(StatusClass));
    } catch (error) {
        throw error; 
    }
  }
}

export default StatusClassService;

