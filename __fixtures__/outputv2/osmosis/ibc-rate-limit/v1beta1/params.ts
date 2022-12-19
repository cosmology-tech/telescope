import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.ibcratelimit.v1beta1";

/** Params defines the parameters for the ibc-rate-limit module. */
export interface Params {
  contractAddress: string;
}

/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsAmino {
  contract_address: string;
}

/** Params defines the parameters for the ibc-rate-limit module. */
export interface ParamsSDKType {
  contract_address: string;
}

function createBaseParams(): Params {
  return {
    contractAddress: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      contractAddress: object?.contract_address
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  },

  fromAmino(object: ParamsAmino): Params {
    return {
      contractAddress: object.contract_address
    };
  },

  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    return obj;
  }

};