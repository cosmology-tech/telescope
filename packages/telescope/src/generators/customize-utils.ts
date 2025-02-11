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
    UTILS.AminoTypes = {
      type: 'import',
      path: '@interchainjs/AminoConverter',
      name: 'AminoConverter',
      importAs: 'AminoTypes',
    };
    UTILS.createProtobufRpcClient = {
      type: 'import',
      path: '@interchainjs/createRpcClient',
      name: 'createRpcClient',
      importAs: 'createProtobufRpcClient',
    };
    UTILS.defaultRegistryTypes = {
      type: 'import',
      path: '@interchainjs/GeneratedType',
      name: 'GeneratedType',
      importAs: 'defaultRegistryTypes',
    };
    UTILS.GeneratedType = {
      type: 'import',
      path: '@interchainjs/GeneratedType',
      name: 'GeneratedType',
    };
    UTILS.HttpEndpoint = {
      type: 'import',
      path: '@interchainjs/HttpEndpoint',
      name: 'HttpEndpoint',
    };
    UTILS.OfflineSigner = {
      type: 'import',
      path: '@interchainjs/OfflineSigner',
      name: 'OfflineSigner',
    };
    UTILS.ProtobufRpcClient = {
      type: 'import',
      path: '@interchainjs/Rpc',
      name: 'Rpc',
      importAs: 'ProtobufRpcClient',
    };
    UTILS.Registry = {
      type: 'import',
      path: '@interchainjs/GlobalDecoderRegistry',
      name: 'GlobalDecoderRegistry',
      importAs: 'Registry',
    };
    UTILS.SigningStargateClient = {
      type: 'import',
      path: '@interchainjs/SigningClient',
      name: 'SigningClient',
      importAs: 'SigningStargateClient',
    };
  }
};
