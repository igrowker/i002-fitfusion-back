import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import LoginRequest from '../DTOs/Auth/LoginRequest.js';
import Rol from '../models/Rol.js';
import LoginResponse from '../DTOs/Auth/LoginResponse.js';
import AuthRepository from '../Repositories/AuthRepository.js';
import ExistingUserException from '../exceptions/User/ExistingUserException.js';
import SignUpSuccessfulException from '../exceptions/Auth/SignUpSuccessfulException.js';
import UserNotFoundException from '../exceptions/User/UserNotFoundException.js';
import InvalidCredentialsException from '../exceptions/Auth/InvalidCredentialsException.js'
import TeacherRepository from '../Repositories/TeacherRepository.js';

const saltRounds = 10;

class AuthService {

    constructor() {
        this.authRepository = AuthRepository; 
        this.teacherRepository = TeacherRepository;
        
    }
    
    async singUp(name, email, password, rolId) {

        try {

            const existingUser = await this.authRepository.VerifyDataExistenceAsync({ Email: email });

            if (existingUser) {
                return {message: new ExistingUserException().message};
            }
        
            const hashedPassword = await bcrypt.hash(password, saltRounds);
        
            const newUser = new LoginRequest(name, email, hashedPassword, rolId);
            const user = await this.authRepository.CreateAsync(newUser);
            if(rolId === 1) {

                await this.teacherRepository.CreateAsync({UserId: user.UserId});
            }
        
            return { message: new SignUpSuccessfulException().message};

        } catch (error) {
          throw error;
        }

    }
      
    async singIn(email, password) {

        try {

            const user = await User.findOne({ 
                where: { Email: email },
                include: Rol
            });
        
            if (!user) {
                return {message : new UserNotFoundException().message};
            }
        
            const isPasswordValid = await bcrypt.compare(password, user.Password);

            if (!isPasswordValid) {
                return {message : new InvalidCredentialsException().message};
            }
        
            const token = jwt.sign(
                { userId: user.UserId, email: user.Email },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
        
            const response = new LoginResponse(user, token);
        
            return response;
            
        } catch (error) {
            throw error;
        }

    }

}

export default new AuthService();
