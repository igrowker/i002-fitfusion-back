class InternalServerErrorException extends Error {
    constructor(message = 'Error interno del servidor.') {
      super(message);
      this.name = this.constructor.name;
    }
  }
  
export default InternalServerErrorException;