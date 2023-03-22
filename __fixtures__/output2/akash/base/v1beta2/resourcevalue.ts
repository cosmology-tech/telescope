//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.base.v1beta2";

/** Unit stores cpu, memory and storage metrics */
export interface ResourceValue {
  val: Uint8Array;
}

function createBaseResourceValue(): ResourceValue {
  return {
    val: new Uint8Array()
  };
}

export const ResourceValue = {
  encode(message: ResourceValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.val.length !== 0) {
      writer.uint32(10).bytes(message.val);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.val = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResourceValue {
    return {
      val: isSet(object.val) ? bytesFromBase64(object.val) : new Uint8Array()
    };
  },

  toJSON(message: ResourceValue): unknown {
    const obj: any = {};
    message.val !== undefined && (obj.val = base64FromBytes(message.val !== undefined ? message.val : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<ResourceValue>): ResourceValue {
    const message = createBaseResourceValue();
    message.val = object.val ?? new Uint8Array();
    return message;
  },

  fromSDKJSON(object: any): ResourceValueSDKType {
    return {
      val: isSet(object.val) ? bytesFromBase64(object.val) : new Uint8Array()
    };
  }

};