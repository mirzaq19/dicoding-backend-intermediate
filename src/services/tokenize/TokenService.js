import JWT from '@hapi/jwt';
import InvariantError from '../../exceptions/InvariantError.js';

const TokenService = {
  generateAccessToken: (payload) =>
    JWT.token.generate(payload, process.env.ACCESS_TOKEN_KEY),
  generateRefreshToken: (payload) =>
    JWT.token.generate(payload, process.env.REFRESH_TOKEN_KEY),
  verifyRefreshToken: (refreshToken) => {
    try {
      const artifacts = JWT.token.decode(refreshToken);
      JWT.token.verify(artifacts, process.env.REFRESH_TOKEN_KEY);
      return artifacts.decoded.payload;
    } catch {
      throw new InvariantError('Refresh token tidak valid');
    }
  },
};

export default TokenService;
