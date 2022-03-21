import { Address } from '@celo/base/lib/address'

interface NFT {
  name: string
  contractAddress: Address
}

export const nfts: NFT[] = [
  {
    name: 'Womxn of Celo',
    contractAddress: '0x50826faa5b20250250e09067e8ddb1afa2bdf910',
  },
]
