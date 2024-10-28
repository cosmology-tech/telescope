import { TelescopeBuilder } from '../builder';
import { UTILS } from '../utils';

export const plugin = (builder: TelescopeBuilder) => {
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

  if (builder.options.useInterchainJs === true) {
    UTILS.AminoMsg = {
      type: 'import',
      path: '@interchainjs/ReadOnlyAminoMsg',
      name: 'ReadOnlyAminoMsg',
      importAs: 'AminoMsg',
    };
  }
};
