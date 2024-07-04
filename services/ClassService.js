import classRepository from '../Repositories/ClassRepository.js';
import CreateClass from '../DTOs/Class/CreateClass.js';
import HttpStatusCode from '../enums/HttpStatusCode.js';
import ClassCreationSuccessException from '../exceptions/Class/ClassCreationSuccessException.js';
import FailedCreateClassException from '../exceptions/Class/FailedCreateClassException.js';
import ClassAlreadyExistsException from '../exceptions/Class/ClassAlreadyExistsException.js';

class ClassService {
    constructor(classRepository) {
        this.classRepository = classRepository;
    }

    async createClass(title, description, teacherId, levelClassId, typeClassId, calories, statusId, price) {

        try {

            const existingClass = await this.classRepository.findOneByTitleAndDescription(title, description);

            if (existingClass) {
                throw new ClassAlreadyExistsException();
            }

            const newClassDTO = new CreateClass(title, description, teacherId, levelClassId, typeClassId, calories, statusId, price);
            const newClass = await this.classRepository.CreateAsync(newClassDTO);

            return { status: HttpStatusCode.CREATED, message: new ClassCreationSuccessException().message };

        } catch (error) {

            const status = error instanceof ClassAlreadyExistsException ? HttpStatusCode.CONFLICT : HttpStatusCode.INTERNAL_SERVER_ERROR;
            const message = error instanceof ClassAlreadyExistsException ? error.message : new FailedCreateClassException().message;

            return { status, message };
        }

    }

}

export default new ClassService(classRepository);



