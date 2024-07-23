class UserNotFoundException extends Error {
    constructor(message = 'Usuario no encontrado.') {
      super(message);
      this.name = this.constructor.name;
    }
}
  
export default UserNotFoundException;