import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  OPENAI_API_KEY: Joi.string().required(),
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.number().required(),
});