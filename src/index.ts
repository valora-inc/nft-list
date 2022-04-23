import { Address } from '@celo/base/lib/address'

interface NFTContract {
  contractAddress: Address
  name?: string
  ignored?: boolean
  verified?: boolean
}

export const nftContracts: NFTContract[] = [
  {
    name: 'Womxn of Celo',
    contractAddress: '0x50826faa5b20250250e09067e8ddb1afa2bdf910',
  },
  {
    contractAddress: '0x8fdb4681e8a750873fb40d5708525eb9a76071fd',
    ignored: true,
  },
  {
    contractAddress: '0xdf204de57532242700d988422996e9ced7aba4cb',
    ignored: true,
  },
]
