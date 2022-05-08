import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, KeysOfUnion, Builtin } from "@osmonauts/helpers";
export interface LabelDescriptor {
  key: string;
  valueType: ValueType;
  description: string;
}

function createBaseLabelDescriptor(): LabelDescriptor {
  return {
    key: "",
    valueType: undefined,
    description: ""
  };
}

export const LabelDescriptor = {
  encode(message: LabelDescriptor, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.valueType !== 0) {
      writer.uint32(16).int32(message.valueType);
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LabelDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLabelDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.valueType = (reader.int32() as any);
          break;

        case 3:
          message.description = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LabelDescriptor {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      valueType: isSet(object.valueType) ? labelDescriptor_ValueTypeFromJSON(object.valueType) : 0,
      description: isSet(object.description) ? String(object.description) : ""
    };
  },

  toJSON(message: LabelDescriptor): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.valueType !== undefined && (obj.valueType = labelDescriptor_ValueTypeToJSON(message.valueType));
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LabelDescriptor>, I>>(object: I): LabelDescriptor {
    const message = createBaseLabelDescriptor();
    message.key = object.key ?? "";
    message.valueType = object.valueType ?? 0;
    message.description = object.description ?? "";
    return message;
  }

};
export enum LabelDescriptor_ValueType {
  /*A variable-length string. This is the default.*/
  STRING = 0,

  /*Boolean; true or false.*/
  BOOL = 1,

  /*A 64-bit signed integer.*/
  INT64 = 2,
  UNRECOGNIZED = -1,
}