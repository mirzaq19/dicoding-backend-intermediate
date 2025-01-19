import Joi from 'joi';
import { validate } from '../../utils/validation.js';

const AddUserSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  fullname: Joi.string().required(),
});

const UserValidator = {
  validateUserPayload: (payload) => validate(AddUserSchema, payload),
};

export default UserValidator;
