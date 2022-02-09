const Joi = require('@hapi/joi');

const validationData = (displayName, email, password) => {
  const userSchema = Joi.object({
    displayName: Joi.string().min(8).required().messages({
      'string.min': '"displayName" length must be at least 8 characters long',
    }),
    email: Joi.string().email().required().messages({
      'string.email': '"email" must be a valid email',
      'any.required': '"email" is required',
    }),
    password: Joi.string().min(6).required().messages({
      'string.min': '"password" length must be 6 characters long',
      'any.required': '"password" is required',
    }),

  });
  return userSchema.validate({ displayName, email, password });
};

const validateLogin = (email, password) => {
  const userSchema = Joi.object({
    email: Joi.string().email().empty().required()
.messages({
      'string.empty': '"email" is not allowed to be empty', 
      'any.required': '"email" is required',
    }),
    password: Joi.string().length(6).empty().required()
.messages({
      'any.required': '"password" is required',
      'string.length': '"password" length must be 6 characters long',
      'string.empty': '"password" is not allowed to be empty',
    }),
  });
  console.log(email, 'entrou email');
  return userSchema.validate({ email, password });
};

const validateCategorie = (name) => {
  const categorieSchema = Joi.object({
    name: Joi.string().empty().required().messages({
      'string.empty': '"name" is required',
      'any.required': '"name" is required',
    }),
  });
  return categorieSchema.validate({ name });
};

  module.exports = { validationData, validateLogin, validateCategorie };
