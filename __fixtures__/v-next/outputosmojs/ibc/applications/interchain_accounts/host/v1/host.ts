import { BinaryReader, BinaryWriter } from "../../../../../binary";
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
/**
 * Params defines the set of on-chain interchain accounts parameters.
 * The following parameters may be used to disable the host submodule.
 */
export interface ParamsSDKType {
  host_enabled: boolean;
  allow_messages: string[];
}
function createBaseParams(): Params {
  return {
    hostEnabled: false,
    allowMessages: []
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hostEnabled === true) {
      writer.uint32(8).bool(message.hostEnabled);
    }
    for (const v of message.allowMessages) {
      writer.uint32(18).string(v!);
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
    const obj = createBaseParams();
    if (isSet(object.hostEnabled)) obj.hostEnabled = Boolean(object.hostEnabled);
    if (Array.isArray(object?.allowMessages)) object.allowMessages.map((e: any) => String(e));
    return obj;
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
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      hostEnabled: object?.host_enabled,
      allowMessages: Array.isArray(object?.allow_messages) ? object.allow_messages.map((e: any) => e) : []
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      host_enabled: isSet(object.host_enabled) ? Boolean(object.host_enabled) : false,
      allow_messages: Array.isArray(object?.allow_messages) ? object.allow_messages.map((e: any) => String(e)) : []
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.host_enabled = message.hostEnabled;
    if (message.allowMessages) {
      obj.allow_messages = message.allowMessages.map(e => e);
    } else {
      obj.allow_messages = [];
    }
    return obj;
  }
};