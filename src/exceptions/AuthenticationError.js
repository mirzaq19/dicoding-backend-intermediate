import ClientError from './ClientError.js';

export default class AuthenticationError extends ClientError {
  constructor(message) {
    super(message);
    this.name = 'AuthenticationError';
    this.statusCode = 401;
  }
}
