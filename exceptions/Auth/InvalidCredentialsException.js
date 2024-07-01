class InvalidCredentialsException extends Error {
    constructor(message = 'Credenciales inválidas.') {
      super(message);
      this.name = this.constructor.name;
    }
  }
  
export default InvalidCredentialsException;