// Define la clase de excepción personalizada
class GetRolesFailedException extends Error {
    constructor(message = 'No se encuentra data') {
      super(message);
      this.name = this.constructor.name;
    }
}
  
export default GetRolesFailedException;
  