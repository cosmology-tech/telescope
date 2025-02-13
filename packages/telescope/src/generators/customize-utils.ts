import { TelescopeBuilder } from '../builder';
import { UTILS } from '../utils';

export const plugin = (builder: TelescopeBuilder) => {
  if(builder.options.useInterchainJs) {
    UTILS.encodePubkey = '@interchainjs/pubkey';
    UTILS.decodePubkey = '@interchainjs/pubkey';

    UTILS.fromBase64 = '@interchainjs/encoding';
    UTILS.fromBech32 = '@interchainjs/encoding';
    UTILS.fromHex = '@interchainjs/encoding';
    UTILS.fromUtf8 = '@interchainjs/encoding';
    UTILS.toBase64 = '@interchainjs/encoding';
    UTILS.toUtf8 = '@interchainjs/encoding';
  }

  if (
    builder.options.prototypes.typingsFormat.customTypes.useEnhancedDecimal ===
    true
  ) {
    UTILS.Decimal = '__decimals__';
  } else {
    UTILS.Decimal = '@cosmjs/math';
  }

  if (
    builder.options.prototypes.typingsFormat.customTypes.base64Lib ===
    '@endo/base64'
  ) {
    UTILS.base64FromBytes = {
      type: 'import',
      path: '@endo/base64',
      name: 'decodeBase64',
      importAs: 'base64FromBytes',
    };
    UTILS.bytesFromBase64 = {
      type: 'import',
      path: '@endo/base64',
      name: 'encodeBase64',
      importAs: 'bytesFromBase64',
    };
  } else {
    UTILS.base64FromBytes = '__helpers__';
    UTILS.bytesFromBase64 = '__helpers__';
  }
};
