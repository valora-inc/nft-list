import { getAddress } from '@ethersproject/address'
import Joi from 'joi'

function contractAddressValidation(value: any) {
  // getAddress throws Error if value isn't a valid address.
  getAddress(value)

  if (value.toLowerCase() !== value) {
    throw new Error(
      `${value} is not a lowercase address (expected ${value.toLowerCase()})`,
    )
  }

  return value
}

export const schema = Joi.array().items(
  Joi.object({
    name: Joi.string().required(),
    contractAddress: Joi.string().custom(
      contractAddressValidation,
      'Contract address validation',
    ).required(),
  }),
)
