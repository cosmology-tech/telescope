import { TokenPair, TokenPairAmino, TokenPairSDKType } from "./erc20";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, DeepPartial } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "evmos.erc20.v1";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** module parameters */
  params: Params;
  /** registered token pairs */
  tokenPairs: TokenPair[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/evmos.erc20.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
  /** module parameters */
  params?: ParamsAmino;
  /** registered token pairs */
  token_pairs?: TokenPairAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/evmos.erc20.v1.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  token_pairs: TokenPairSDKType[];
}
/** Params defines the erc20 module params */
export interface Params {
  /** parameter to enable the conversion of Cosmos coins <--> ERC20 tokens. */
  enableErc20: boolean;
  /**
   * parameter to enable the EVM hook that converts an ERC20 token to a Cosmos
   * Coin by transferring the Tokens through a MsgEthereumTx to the
   * ModuleAddress Ethereum address.
   */
  enableEvmHook: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/evmos.erc20.v1.Params";
  value: Uint8Array;
}
/** Params defines the erc20 module params */
export interface ParamsAmino {
  /** parameter to enable the conversion of Cosmos coins <--> ERC20 tokens. */
  enable_erc20?: boolean;
  /**
   * parameter to enable the EVM hook that converts an ERC20 token to a Cosmos
   * Coin by transferring the Tokens through a MsgEthereumTx to the
   * ModuleAddress Ethereum address.
   */
  enable_evm_hook?: boolean;
}
export interface ParamsAminoMsg {
  type: "/evmos.erc20.v1.Params";
  value: ParamsAmino;
}
/** Params defines the erc20 module params */
export interface ParamsSDKType {
  enable_erc20: boolean;
  enable_evm_hook: boolean;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    tokenPairs: []
  };
}
export const GenesisState = {
  typeUrl: "/evmos.erc20.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.tokenPairs) && (!o.tokenPairs.length || TokenPair.is(o.tokenPairs[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.token_pairs) && (!o.token_pairs.length || TokenPair.isSDK(o.token_pairs[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.token_pairs) && (!o.token_pairs.length || TokenPair.isAmino(o.token_pairs[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.tokenPairs) {
      TokenPair.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.tokenPairs.push(TokenPair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.tokenPairs)) obj.tokenPairs = object.tokenPairs.map((e: any) => TokenPair.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.tokenPairs) {
      obj.tokenPairs = message.tokenPairs.map(e => e ? TokenPair.toJSON(e) : undefined);
    } else {
      obj.tokenPairs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.tokenPairs = object.tokenPairs?.map(e => TokenPair.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      tokenPairs: Array.isArray(object?.token_pairs) ? object.token_pairs.map((e: any) => TokenPair.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined,
      token_pairs: Array.isArray(object?.token_pairs) ? object.token_pairs.map((e: any) => TokenPair.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.tokenPairs) {
      obj.token_pairs = message.tokenPairs.map(e => e ? TokenPair.toSDK(e) : undefined);
    } else {
      obj.token_pairs = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.tokenPairs = object.token_pairs?.map(e => TokenPair.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.tokenPairs) {
      obj.token_pairs = message.tokenPairs.map(e => e ? TokenPair.toAmino(e) : undefined);
    } else {
      obj.token_pairs = message.tokenPairs;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  },
  registerTypeUrl() {
    Params.registerTypeUrl();
    TokenPair.registerTypeUrl();
  }
};
function createBaseParams(): Params {
  return {
    enableErc20: false,
    enableEvmHook: false
  };
}
export const Params = {
  typeUrl: "/evmos.erc20.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.enableErc20 === "boolean" && typeof o.enableEvmHook === "boolean");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.enable_erc20 === "boolean" && typeof o.enable_evm_hook === "boolean");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.enable_erc20 === "boolean" && typeof o.enable_evm_hook === "boolean");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableErc20 !== undefined) {
      writer.uint32(8).bool(message.enableErc20);
    }
    if (message.enableEvmHook !== undefined) {
      writer.uint32(16).bool(message.enableEvmHook);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableErc20 = reader.bool();
          break;
        case 2:
          message.enableEvmHook = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.enableErc20)) obj.enableErc20 = Boolean(object.enableErc20);
    if (isSet(object.enableEvmHook)) obj.enableEvmHook = Boolean(object.enableEvmHook);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.enableErc20 !== undefined && (obj.enableErc20 = message.enableErc20);
    message.enableEvmHook !== undefined && (obj.enableEvmHook = message.enableEvmHook);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enableErc20 = object.enableErc20 ?? false;
    message.enableEvmHook = object.enableEvmHook ?? false;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      enableErc20: object?.enable_erc20,
      enableEvmHook: object?.enable_evm_hook
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      enable_erc20: isSet(object.enable_erc20) ? Boolean(object.enable_erc20) : false,
      enable_evm_hook: isSet(object.enable_evm_hook) ? Boolean(object.enable_evm_hook) : false
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.enable_erc20 = message.enableErc20;
    obj.enable_evm_hook = message.enableEvmHook;
    return obj;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.enable_erc20 !== undefined && object.enable_erc20 !== null) {
      message.enableErc20 = object.enable_erc20;
    }
    if (object.enable_evm_hook !== undefined && object.enable_evm_hook !== null) {
      message.enableEvmHook = object.enable_evm_hook;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.enable_erc20 = message.enableErc20 === false ? undefined : message.enableErc20;
    obj.enable_evm_hook = message.enableEvmHook === false ? undefined : message.enableEvmHook;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/evmos.erc20.v1.Params",
      value: Params.encode(message).finish()
    };
  },
  registerTypeUrl() {}
};