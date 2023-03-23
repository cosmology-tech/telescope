//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../../../helpers";
export const protobufPackage = "ibc.applications.interchain_accounts.host.v1";

/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface Params {
  /** host_enabled enables or disables the host submodule. */
  hostEnabled: boolean;

  /** allow_messages defines a list of sdk message typeURLs allowed to be executed on a host chain. */
  allowMessages: string[];
}

function createBaseParams(): Params {
  return {
    hostEnabled: false,
    allowMessages: []
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostEnabled === true) {
      writer.uint32(8).bool(message.hostEnabled);
    }

    for (const v of message.allowMessages) {
      writer.uint32(18).string(v!);
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
          message.hostEnabled = reader.bool();
          break;

        case 2:
          message.allowMessages.push(reader.string());
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
      hostEnabled: isSet(object.hostEnabled) ? Boolean(object.hostEnabled) : false,
      allowMessages: Array.isArray(object?.allowMessages) ? object.allowMessages.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.hostEnabled !== undefined && (obj.hostEnabled = message.hostEnabled);

    if (message.allowMessages) {
      obj.allowMessages = message.allowMessages.map(e => e);
    } else {
      obj.allowMessages = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.hostEnabled = object.hostEnabled ?? false;
    message.allowMessages = object.allowMessages?.map(e => e) || [];
    return message;
  }

};