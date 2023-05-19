# Adding new NFT contracts

Valora supports both ERC-721 and ERC-1155 NFT contracts. Valora runs
an indexing process that attempts to discover each new contract
deployed to mainnet and alfajores once they meet a set of internal
conditions (_e.g._, has more than one distinct holder, etc).

You can submit a pull request to explicitly request that Valora
recognizes your project's contract. You might consider doing this in
order to:

1. Ensure Valora "recognizes" the specific contract address associated
   with your project's NFTs (Valora might communicate recognized NFTs
   to users sometime in the future).
1. Ensure Valora always indexes your project's ERC-721 NFT contracts
   (even if they don't need the internal conditions) and shows them to
   Valora users who hold those NFTs. This is only for ERC-721 NFT
   contracts.

Visit [nft-list](https://github.com/valora-inc/nft-list) to submit a
pull request.
