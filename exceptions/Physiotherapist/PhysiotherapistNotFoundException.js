class PhysiotherapistNotFoundException extends Error {
    constructor(message = 'Kinesiologo no encontrado.') {
      super(message);
      this.name = this.constructor.name;
    }
}
  
export default PhysiotherapistNotFoundException;