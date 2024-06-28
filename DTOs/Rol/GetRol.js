class GetRol {
  constructor(rol) {
    this.RolId = rol.RolId;
    this.Description = rol.Description;
    this.IsActive = rol.IsActive ? 1 : 0;
  }
}

export default GetRol;

