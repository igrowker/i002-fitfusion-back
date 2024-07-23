
import GenericRepository from './GenericRepository.js';
import User from '../models/User.js';

class AuthRepository extends GenericRepository {
  constructor() {
    super(User);
  }

}

const authRepository = new AuthRepository();

export default authRepository;



