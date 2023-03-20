//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { DeepPartial } from "../../helpers";
export const protobufPackage = "osmosis.lockup";
export interface Params {
  forceUnlockAllowedAddresses: string[];
}

function createBaseParams(): Params {
  return {
    forceUnlockAllowedAddresses: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.forceUnlockAllowedAddresses) {
      writer.uint32(10).string(v!);
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
          message.forceUnlockAllowedAddresses.push(reader.string());
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
      forceUnlockAllowedAddresses: Array.isArray(object?.forceUnlockAllowedAddresses) ? object.forceUnlockAllowedAddresses.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.forceUnlockAllowedAddresses) {
      obj.forceUnlockAllowedAddresses = message.forceUnlockAllowedAddresses.map(e => e);
    } else {
      obj.forceUnlockAllowedAddresses = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.forceUnlockAllowedAddresses = object.forceUnlockAllowedAddresses?.map(e => e) || [];
    return message;
  },

  fromSDKJSON(object: any): ParamsSDKType {
    return {
      force_unlock_allowed_addresses: Array.isArray(object?.force_unlock_allowed_addresses) ? object.force_unlock_allowed_addresses.map((e: any) => String(e)) : []
    };
  }

};