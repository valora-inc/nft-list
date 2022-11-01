# Adding new ERC-721 contracts

Valora runs an indexing process that attempts to discover each new
ERC-721 contract deployed to mainnet and alfajores once a threshold of
distinct wallet addresses hold assets on that contract.

You can submit a pull request, however, to explicitly request that
Valora recognizes and indexes your project's ERC-721 contract. You
might consider doing this in order to:

1. ensure Valora handles your project's NFTs when there are few
   distinct holders; or
2. ensure Valora "recognizes" the specific contract address associated
   with your project's NFTs (Valora might communicate recognized NFTs
   to users sometime in the future).

Visit [nft-list](https://github.com/valora-inc/nft-list) to submit a
pull request.
