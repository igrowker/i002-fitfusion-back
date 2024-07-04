class ClassAlreadyExistsException extends Error {
    constructor(message = 'El curso ya existe con ese mismo titulo y descripcion.') {
      super(message);
      this.name = this.constructor.name;
    }
}
    
export default ClassAlreadyExistsException;