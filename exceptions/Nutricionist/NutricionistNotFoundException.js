class NutricionistNotFoundException extends Error {
    constructor(message = 'Nutricionista no encontrado.') {
      super(message);
      this.name = this.constructor.name;
    }
}
  
export default NutricionistNotFoundException;