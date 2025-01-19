import Joi from 'joi';
import { validate } from '../../utils/validation.js';

const PostAuthenticationPayloadSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const PutAuthenticationPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const DeleteAuthenticationPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const AuthenticationValidator = {
  validatePostAuthenticationPayload: (payload) =>
    validate(PostAuthenticationPayloadSchema, payload),
  validatePutAuthenticationPayload: (payload) =>
    validate(PutAuthenticationPayloadSchema, payload),
  validateDeleteAuthenticationPayload: (payload) =>
    validate(DeleteAuthenticationPayloadSchema, payload),
};

export default AuthenticationValidator;
