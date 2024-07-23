class FailedCreateTeacherException extends Error {
    constructor(message = 'No se pudo crear el Maestro.') {
      super(message);
      this.name = this.constructor.name;
    }
}
  
export default FailedCreateTeacherException;