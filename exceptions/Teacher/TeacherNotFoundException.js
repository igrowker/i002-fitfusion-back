class TeacherNotFoundException extends Error {
    constructor(message = 'Profesor no encontrado.') {
      super(message);
      this.name = this.constructor.name;
    }
}
  
export default TeacherNotFoundException;