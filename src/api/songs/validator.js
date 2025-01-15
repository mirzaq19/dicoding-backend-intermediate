import Joi from 'joi';
import { validate } from '../../utils/validation.js';

const addSongSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().integer().min(1900).max(2025).required(),
  genre: Joi.string().required(),
  performer: Joi.string().required(),
  duration: Joi.number().integer().min(0),
  albumId: Joi.string(),
});

const editSongSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().integer().min(1900).max(2025).required(),
  genre: Joi.string().required(),
  performer: Joi.string().required(),
  duration: Joi.number().integer().min(0),
  albumId: Joi.string(),
});

const SongValidator = {
  validateAddSongPayload: (payload) => validate(addSongSchema, payload),
  validateEditSongPayload: (payload) => validate(editSongSchema, payload),
};

export default SongValidator;
