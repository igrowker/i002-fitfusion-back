
class LoginResponse {
  constructor(user, token) {
    this.userId = user.UserId
    this.name = user.Name;
    this.email = user.Email;
    this.rolId = user.RolId ?? null;
    this.rolDescription = user.Rol ? user.Rol.Description : null;
    this.token = token;
  }
}
  
export default LoginResponse;
  