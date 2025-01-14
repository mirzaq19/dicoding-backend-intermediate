import Joi from 'joi';
import { validate } from '../../utils/validation.js';

const addAlbumSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().integer().min(1900).max(2025).required(),
});

const editAlbumSchema = Joi.object({
  name: Joi.string().required(),
  year: Joi.number().integer().min(1900).max(2025).required(),
});

const AlbumValidator = {
  validateAddAlbumPayload: (payload) => validate(addAlbumSchema, payload),
  validateEditAlbumPayload: (payload) => validate(editAlbumSchema, payload),
};

export default AlbumValidator;
