
class LoginResponse {
    constructor(user, token) {
      this.name = user.Name;
      this.email = user.Email;
      this.role = {
        id: user.RolId,
        description: user.Rol ? user.Rol.Description : null
      };
      this.token = token;
    }
  }
  
  export default LoginResponse;
  