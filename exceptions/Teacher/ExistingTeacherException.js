class ExistingTeacherException extends Error {
    constructor(message = 'El Usuario ya existe y es un Maestro.') {
      super(message);
      this.name = this.constructor.name;
    }
}
    
export default ExistingTeacherException;