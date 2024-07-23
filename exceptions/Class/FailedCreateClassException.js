class FailedCreateClassException extends Error {
    constructor(message = 'No se pudo crear el curso.') {
      super(message);
      this.name = this.constructor.name;
    }
}
  
export default FailedCreateClassException;