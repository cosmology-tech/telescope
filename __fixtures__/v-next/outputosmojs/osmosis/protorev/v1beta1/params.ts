import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.protorev.v1beta1";
/** Params defines the parameters for the module. */
export interface Params {
  /** Boolean whether the protorev module is enabled. */
  enabled: boolean;
  /** The admin account (settings manager) of the protorev module. */
  admin: string;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
  enabled: boolean;
  admin: string;
}
function createBaseParams(): Params {
  return {
    enabled: false,
    admin: ""
  };
}
export const Params = {
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enabled === true) {
      writer.uint32(8).bool(message.enabled);
    }
    if (message.admin !== "") {
      writer.uint32(18).string(message.admin);
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
          message.enabled = reader.bool();
          break;
        case 2:
          message.admin = reader.string();
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
    if (isSet(object.enabled)) obj.enabled = Boolean(object.enabled);
    if (isSet(object.admin)) obj.admin = String(object.admin);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.admin !== undefined && (obj.admin = message.admin);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enabled = object.enabled ?? false;
    message.admin = object.admin ?? "";
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      enabled: object?.enabled,
      admin: object?.admin
    };
  },
  fromSDKJSON(object: any): ParamsSDKType {
    return {
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      admin: isSet(object.admin) ? String(object.admin) : ""
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.enabled = message.enabled;
    obj.admin = message.admin;
    return obj;
  }
};