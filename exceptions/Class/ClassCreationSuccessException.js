class ClassCreationSuccessException extends Error {
    constructor(message = 'La Clase fue creada correctamente.') {
      super(message);
      this.name = this.constructor.name;
    }
}
    
export default ClassCreationSuccessException;