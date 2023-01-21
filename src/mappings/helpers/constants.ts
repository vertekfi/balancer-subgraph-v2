import { BigDecimal, BigInt, Address, dataSource } from '@graphprotocol/graph-ts';

import { assets } from './assets';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ProtocolFeeType {
  export const Swap = 0;
  export const FlashLoan = 1;
  export const Yield = 2;
  export const Aum = 3;
}

export let ZERO = BigInt.fromI32(0);
export let ZERO_BD = BigDecimal.fromString('0');
export let ONE_BD = BigDecimal.fromString('1');
export const SWAP_IN = 0;
export const SWAP_OUT = 1;

export let ZERO_ADDRESS = Address.fromString('0x0000000000000000000000000000000000000000');

export let MIN_POOL_LIQUIDITY = BigDecimal.fromString('2000');
export let MIN_SWAP_VALUE_USD = BigDecimal.fromString('1');

export let FX_AGGREGATOR_ADDRESSES = assets.fxAggregators;
export let FX_TOKEN_ADDRESSES = assets.fxAssets;

export let USD_STABLE_ASSETS = assets.stableAssets;
export let PRICING_ASSETS = assets.stableAssets.concat(assets.pricingAssets);

class AddressByNetwork {
  public mainnet: string;
  public goerli: string;
  public polygon: string;
  public arbitrum: string;
  public gnosis: string;
  public bnb: string;
  public dev: string;
}

let network: string = dataSource.network();

let vaultAddressByNetwork: AddressByNetwork = {
  mainnet: '',
  goerli: '0x1F56FDcB9E3a818E4BB2E6Fe2cb73F7385D3Aeac',
  polygon: '',
  arbitrum: '',
  gnosis: '',
  bnb: '',
  dev: '',
};

function forNetwork(addressByNetwork: AddressByNetwork, network: string): Address {
  if (network == 'mainnet') {
    return Address.fromString(addressByNetwork.mainnet);
  } else if (network == 'goerli') {
    return Address.fromString(addressByNetwork.goerli);
  } else if (network == 'matic') {
    return Address.fromString(addressByNetwork.polygon);
  } else if (network == 'arbitrum-one') {
    return Address.fromString(addressByNetwork.arbitrum);
  } else if (network == 'gnosis') {
    return Address.fromString(addressByNetwork.bnb);
  } else if (network == 'bsc') {
    return Address.fromString(addressByNetwork.bnb);
  } else {
    return Address.fromString(addressByNetwork.dev);
  }
}

export let VAULT_ADDRESS = forNetwork(vaultAddressByNetwork, network);
