import { Address } from '@celo/base/lib/address'

interface NFTContract {
  contractAddress: Address
  name: string
}

export const nftContracts: NFTContract[] = [
  {
    name: 'Womxn of Celo',
    contractAddress: '0x50826faa5b20250250e09067e8ddb1afa2bdf910',
  },
  {
    name: 'CeloApesKingdom',
    contractAddress: '0x1eCD77075F7504bA849d47DCe4cdC9695f1FE942',
  },
]
