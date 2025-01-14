import InvariantError from '../exceptions/InvariantError.js';

export const validate = (schema, payload) => {
  const { error } = schema.validate(payload);
  if (error) {
    throw new InvariantError(error.message);
  }
};
