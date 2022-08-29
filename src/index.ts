import { Address } from '@celo/base/lib/address'

interface NFTContract {
  contractAddress: Address
  name: string
}

export enum Network {
  Alfajores = 'alfajores',
  Mainnet = 'mainnet',
}

export const nftContracts: Record<Network, NFTContract[]> = {
  [Network.Alfajores]: [],
  [Network.Mainnet]: [
    {
      name: 'Womxn of Celo',
      contractAddress: '0x50826faa5b20250250e09067e8ddb1afa2bdf910',
    },
    {
      name: 'CeloApesKingdom',
      contractAddress: '0x1eCD77075F7504bA849d47DCe4cdC9695f1FE942',
    },
    {
      name: 'The Butterfly Effect',
      contractAddress: '0x84a143262f4680cc164405179ea303853a4667f5',
    },
    {
      name: 'Hive Mind',
      contractAddress: '0xB842a3081789328437987a94949cD524d4c6Ec99',
    },
    {
      name: 'CeloPunks',
      contractAddress: '0x9f46B8290A6D41B28dA037aDE0C3eBe24a5D1160'
    },
    {
      name: 'Celostrials',
      contractAddress: '0xAc80c3c8b122DB4DcC3C351ca93aC7E0927C605d',
    },
  ],
}
