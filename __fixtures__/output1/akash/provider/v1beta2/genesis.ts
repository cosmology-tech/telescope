import { Provider, ProviderSDKType } from "./provider";
import * as _m0 from "protobufjs/minimal";
import { DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.provider.v1beta2";
/** GenesisState defines the basic genesis state used by provider module */
export interface GenesisState {
  providers: Provider[];
}
/** GenesisState defines the basic genesis state used by provider module */
export interface GenesisStateSDKType {
  providers: ProviderSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    providers: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.providers) {
      Provider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.providers.push(Provider.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toJSON(e) : undefined);
    } else {
      obj.providers = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.providers = object.providers?.map(e => Provider.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      providers: Array.isArray(object?.providers) ? object.providers.map((e: any) => Provider.fromSDK(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.providers) {
      obj.providers = message.providers.map(e => e ? Provider.toSDK(e) : undefined);
    } else {
      obj.providers = [];
    }
    return obj;
  }
};