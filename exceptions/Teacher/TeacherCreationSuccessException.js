class TeacherCreationSuccessException extends Error {
    constructor(message = 'El Maestro fue creado correctamente.') {
      super(message);
      this.name = this.constructor.name;
    }
}
    
export default TeacherCreationSuccessException;
    