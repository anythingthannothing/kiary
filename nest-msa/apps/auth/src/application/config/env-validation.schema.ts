import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  PORT: Joi.number().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().required(),
  REFRESH_EXPIRES_IN: Joi.number().required(),
  PG_DB_HOST: Joi.string().required(),
  PG_DB_PORT: Joi.number().required(),
  PG_DB_USERNAME: Joi.string().required(),
  PG_DB_PASSWORD: Joi.string().required(),
  PG_DB_SCHEMA: Joi.string().required(),
});
