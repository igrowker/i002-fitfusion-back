class ExistingUserException extends Error {
    constructor(message = 'El correo electrónico ya está registrado.') {
      super(message);
      this.name = this.constructor.name;
    }
}
  
export default ExistingUserException;