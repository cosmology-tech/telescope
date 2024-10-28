import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
/**
 * Selects and configures the service controller used by the service.  The
 * service controller handles features like abuse, quota, billing, logging,
 * monitoring, etc.
 */
export interface Control {
  /**
   * The service control environment to use. If empty, no control plane
   * feature (like quota and billing) will be enabled.
   */
  environment: string;
}
export interface ControlProtoMsg {
  typeUrl: "/google.api.Control";
  value: Uint8Array;
}
/**
 * Selects and configures the service controller used by the service.  The
 * service controller handles features like abuse, quota, billing, logging,
 * monitoring, etc.
 */
export interface ControlAmino {
  /**
   * The service control environment to use. If empty, no control plane
   * feature (like quota and billing) will be enabled.
   */
  environment: string;
}
export interface ControlAminoMsg {
  type: "/google.api.Control";
  value: ControlAmino;
}
function createBaseControl(): Control {
  return {
    environment: ""
  };
}
export const Control = {
  typeUrl: "/google.api.Control",
  encode(message: Control, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.environment !== "") {
      writer.uint32(10).string(message.environment);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Control {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControl();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.environment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Control>): Control {
    const message = createBaseControl();
    message.environment = object.environment ?? "";
    return message;
  },
  fromAmino(object: ControlAmino): Control {
    const message = createBaseControl();
    if (object.environment !== undefined && object.environment !== null) {
      message.environment = object.environment;
    }
    return message;
  },
  toAmino(message: Control): ControlAmino {
    const obj: any = {};
    obj.environment = message.environment === "" ? undefined : message.environment;
    return obj;
  },
  fromAminoMsg(object: ControlAminoMsg): Control {
    return Control.fromAmino(object.value);
  },
  fromProtoMsg(message: ControlProtoMsg): Control {
    return Control.decode(message.value);
  },
  toProto(message: Control): Uint8Array {
    return Control.encode(message).finish();
  },
  toProtoMsg(message: Control): ControlProtoMsg {
    return {
      typeUrl: "/google.api.Control",
      value: Control.encode(message).finish()
    };
  }
};