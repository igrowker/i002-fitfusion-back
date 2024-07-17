class UserInactiveException extends Error {
    constructor(message = 'Usuario inactivo.') {
      super(message);
      this.name = this.constructor.name;
    }
}
  
export default UserInactiveException;