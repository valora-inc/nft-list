import Joi from 'joi'

export const schema = Joi.array().items(
  Joi.object({
    name: Joi.string(),
    contractAddress: Joi.string().length(42),
  }),
)
