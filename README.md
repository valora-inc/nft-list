# nft-list

A curated list of NFT contracts. Valora attempts to automatically
discover ERC-721 contracts, however, there are cases where a project
should consider adding to this list. See [Adding new ERC-721
contracts](./docs/adding-new-erc721-contracts.md) for more details.

## Developing

Install dependencies:

```
yarn
```

run tests:

```
yarn test
```

## Adding a contract

Add the contract address and metadata about the contract to
[index.ts](./src/index.ts) and create a PR for the Valora team to
review.
