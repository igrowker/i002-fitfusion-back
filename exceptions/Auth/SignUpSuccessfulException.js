class SignUpSuccessfulException extends Error {
  constructor(message = 'Usuario registrado correctamente.') {
    super(message);
    this.name = this.constructor.name;
  }
}

export default SignUpSuccessfulException;
