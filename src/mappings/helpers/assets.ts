// This file is automatically generated and contains assets from goerli.
// Generate for other networks by running: yarn generate-assets [network].
// Supported networks are: arbitrum, goerli, mainnet, and polygon.

import { Address } from '@graphprotocol/graph-ts';

class Assets {
  public stableAssets: Address[];
  public pricingAssets: Address[];
  public fxAssets: Address[];
  public fxAggregators: Address[];
}

export const BUSD_ADDRESS = Address.fromString('0x7faA8158FaA037CC7516eF1f6864af44d75654AE');
export const USDC_ADDRESS = Address.fromString('0x5277c419719d5E71394371c6189171c83e37fd7c');
export const DAI_ADDRESS = Address.fromString('0x732Af42A96256668feB49526e7C7BB6611086867');
export const USDT_ADDRESS = Address.fromString('0x1ab40126513036458e00Cc827FFd9e7D0436219d');

export const assets: Assets = {
  stableAssets: [
    Address.fromString('0x7faA8158FaA037CC7516eF1f6864af44d75654AE'), // BUSD
    Address.fromString('0x5277c419719d5E71394371c6189171c83e37fd7c'), // USDC
    Address.fromString('0x732Af42A96256668feB49526e7C7BB6611086867'), // DAI
    Address.fromString('0x1ab40126513036458e00Cc827FFd9e7D0436219d'), // USDT
  ],
  pricingAssets: [
    Address.fromString('0xe4E96Cf369D4d604Bedc4d7962F94D53E4B5e3C6'), // WETH
    Address.fromString('0x61a9FD4272521D5aC10C746200fe87A85ff42fe2'), // WBTC
    Address.fromString('0x0bD5AC1eDcA0380E8709773F502C2960DeCcaF79'), // BAL
    Address.fromString('0x39F84FE24135D3C160b5E1BCa36b0e66b6C11c4E'), // B-80BAL-20WETH
  ],
  fxAssets: [
  ],
  fxAggregators: [
  ],
};
