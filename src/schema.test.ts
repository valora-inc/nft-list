import { schema } from './schema'
import mainnetNftList from './mainnet-nft-list.json'
import alfajoresNftList from './alfajores-nft-list.json'

describe('mainnet-nft-list.json', () => {
  it('complies with schema', () => {
    const validationResult = schema.validate(mainnetNftList)
    expect(validationResult.error).toBe(undefined)
  })
})

describe('alfajores-nft-list.json', () => {
  it('complies with schema', () => {
    const validationResult = schema.validate(alfajoresNftList)
    expect(validationResult.error).toBe(undefined)
  })
})
