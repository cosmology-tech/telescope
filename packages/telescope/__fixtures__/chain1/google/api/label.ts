/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "google.api";

/** A description of a label. */
export interface LabelDescriptor {
  /** The label key. */
  key: string;
  /** The type of data that can be assigned to the label. */
  valueType: LabelDescriptor_ValueType;
  /** A human-readable description for the label. */
  description: string;
}

/** Value types that can be used as label values. */
export enum LabelDescriptor_ValueType {
  /** STRING - A variable-length string. This is the default. */
  STRING = 0,
  /** BOOL - Boolean; true or false. */
  BOOL = 1,
  /** INT64 - A 64-bit signed integer. */
  INT64 = 2,
  UNRECOGNIZED = -1,
}

export function labelDescriptor_ValueTypeFromJSON(
  object: any
): LabelDescriptor_ValueType {
  switch (object) {
    case 0:
    case "STRING":
      return LabelDescriptor_ValueType.STRING;
    case 1:
    case "BOOL":
      return LabelDescriptor_ValueType.BOOL;
    case 2:
    case "INT64":
      return LabelDescriptor_ValueType.INT64;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LabelDescriptor_ValueType.UNRECOGNIZED;
  }
}

export function labelDescriptor_ValueTypeToJSON(
  object: LabelDescriptor_ValueType
): string {
  switch (object) {
    case LabelDescriptor_ValueType.STRING:
      return "STRING";
    case LabelDescriptor_ValueType.BOOL:
      return "BOOL";
    case LabelDescriptor_ValueType.INT64:
      return "INT64";
    default:
      return "UNKNOWN";
  }
}

function createBaseLabelDescriptor(): LabelDescriptor {
  return { key: "", valueType: 0, description: "" };
}

export const LabelDescriptor = {
  encode(
    message: LabelDescriptor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
          message.valueType = reader.int32() as any;
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
      valueType: isSet(object.valueType)
        ? labelDescriptor_ValueTypeFromJSON(object.valueType)
        : 0,
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: LabelDescriptor): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.valueType !== undefined &&
      (obj.valueType = labelDescriptor_ValueTypeToJSON(message.valueType));
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LabelDescriptor>, I>>(
    object: I
  ): LabelDescriptor {
    const message = createBaseLabelDescriptor();
    message.key = object.key ?? "";
    message.valueType = object.valueType ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
