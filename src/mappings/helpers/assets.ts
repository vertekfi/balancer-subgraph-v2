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
export const TUSD_ADDRESS = Address.fromString('0xB6De25C9F18a10B51243CD92Fa4348727a99083f');
export const FRAX_ADDRESS = Address.fromString('0x78613d6778DC5CCaA124041a7387c2bDc6089032');

export const assets: Assets = {
  stableAssets: [
    Address.fromString('0x7faA8158FaA037CC7516eF1f6864af44d75654AE'), // BUSD
    Address.fromString('0x5277c419719d5E71394371c6189171c83e37fd7c'), // USDC
    Address.fromString('0x732Af42A96256668feB49526e7C7BB6611086867'), // DAI
    Address.fromString('0x1ab40126513036458e00Cc827FFd9e7D0436219d'), // USDT
    Address.fromString('0xB6De25C9F18a10B51243CD92Fa4348727a99083f'), // TUSD
    Address.fromString('0x78613d6778DC5CCaA124041a7387c2bDc6089032'), // FRAX
  ],
  pricingAssets: [
    Address.fromString('0xe4E96Cf369D4d604Bedc4d7962F94D53E4B5e3C6'), // WETH
    Address.fromString('0x61a9FD4272521D5aC10C746200fe87A85ff42fe2'), // WBTC
    Address.fromString('0xa5694789C0BaED77d16ca36edC45C9366DBFe0A9'), // BAL
    Address.fromString('0x11422d24858d9a7396A1533AB49F594699bc8ba0'), // B-80BAL-20WETH
  ],
  fxAssets: [
  ],
  fxAggregators: [
  ],
};
