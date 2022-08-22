import { Address } from '@graphprotocol/graph-ts';

class Assets {
  public stableAssets: Address[];
  public pricingAssets: Address[];
}

const assets: Assets = {
  stableAssets: [
    Address.fromString('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48'),
    Address.fromString('0x6B175474E89094C44Da98b954EedeAC495271d0F'),
    Address.fromString('0xdAC17F958D2ee523a2206206994597C13D831ec7'),
  ],
  pricingAssets: [
    Address.fromString('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'),
    Address.fromString('0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0'),
    Address.fromString('0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'),
    Address.fromString('0xba100000625a3754423978a60c9317c58a424e3D'),
    Address.fromString('0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2'),
    Address.fromString('0x6810e776880C02933D47DB1b9fc05908e5386b96'),
    Address.fromString('0x5c6ee304399dbdb9c8ef030ab642b10820db8f56'),
    Address.fromString('0x804CdB9116a10bB78768D3252355a1b18067bF8f'),
    Address.fromString('0x9210F1204b5a24742Eba12f710636D76240dF3d0'),
    Address.fromString('0x2BBf681cC4eb09218BEe85EA2a5d3D13Fa40fC0C'),
  ],
};

export default assets;
