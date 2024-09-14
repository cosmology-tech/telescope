import { TelescopeBuilder } from '../builder';
import { UTILS } from '../utils';

export const plugin = (builder: TelescopeBuilder) => {
  if (
    builder.options.prototypes.typingsFormat.customTypes.usePatchedDecimal ===
    true
  ) {
    UTILS.Decimal = '__decimals__';
  } else {
    UTILS.Decimal = '@cosmjs/math';
  }

  if (builder.options.prototypes.typingsFormat.customTypes.base64Lib === true) {
    UTILS.base64FromBytes = '@endo/base64';
    UTILS.bytesFromBase64 = '@endo/base64';
  } else {
    UTILS.base64FromBytes = '__helpers__';
    UTILS.bytesFromBase64 = '__helpers__';
  }
};
