import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, bytesFromBase64, base64FromBytes } from "../../helpers";
export const protobufPackage = "google.protobuf";

/**
 * Wrapper message for `double`.
 * 
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValue {
  /** The double value. */
  value: number;
}
export interface DoubleValueProtoType {
  typeUrl: "/google.protobuf.DoubleValue";
  value: Uint8Array;
}

/**
 * Wrapper message for `double`.
 * 
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValueAmino {
  /** The double value. */
  value: number;
}
export interface DoubleValueAminoType {
  type: "/google.protobuf.DoubleValue";
  value: DoubleValueAmino;
}

/**
 * Wrapper message for `double`.
 * 
 * The JSON representation for `DoubleValue` is JSON number.
 */
export interface DoubleValueSDKType {
  value: number;
}

/**
 * Wrapper message for `float`.
 * 
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValue {
  /** The float value. */
  value: number;
}
export interface FloatValueProtoType {
  typeUrl: "/google.protobuf.FloatValue";
  value: Uint8Array;
}

/**
 * Wrapper message for `float`.
 * 
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValueAmino {
  /** The float value. */
  value: number;
}
export interface FloatValueAminoType {
  type: "/google.protobuf.FloatValue";
  value: FloatValueAmino;
}

/**
 * Wrapper message for `float`.
 * 
 * The JSON representation for `FloatValue` is JSON number.
 */
export interface FloatValueSDKType {
  value: number;
}

/**
 * Wrapper message for `int64`.
 * 
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64Value {
  /** The int64 value. */
  value: Long;
}
export interface Int64ValueProtoType {
  typeUrl: "/google.protobuf.Int64Value";
  value: Uint8Array;
}

/**
 * Wrapper message for `int64`.
 * 
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64ValueAmino {
  /** The int64 value. */
  value: string;
}
export interface Int64ValueAminoType {
  type: "/google.protobuf.Int64Value";
  value: Int64ValueAmino;
}

/**
 * Wrapper message for `int64`.
 * 
 * The JSON representation for `Int64Value` is JSON string.
 */
export interface Int64ValueSDKType {
  value: Long;
}

/**
 * Wrapper message for `uint64`.
 * 
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64Value {
  /** The uint64 value. */
  value: Long;
}
export interface UInt64ValueProtoType {
  typeUrl: "/google.protobuf.UInt64Value";
  value: Uint8Array;
}

/**
 * Wrapper message for `uint64`.
 * 
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64ValueAmino {
  /** The uint64 value. */
  value: string;
}
export interface UInt64ValueAminoType {
  type: "/google.protobuf.UInt64Value";
  value: UInt64ValueAmino;
}

/**
 * Wrapper message for `uint64`.
 * 
 * The JSON representation for `UInt64Value` is JSON string.
 */
export interface UInt64ValueSDKType {
  value: Long;
}

/**
 * Wrapper message for `int32`.
 * 
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32Value {
  /** The int32 value. */
  value: number;
}
export interface Int32ValueProtoType {
  typeUrl: "/google.protobuf.Int32Value";
  value: Uint8Array;
}

/**
 * Wrapper message for `int32`.
 * 
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32ValueAmino {
  /** The int32 value. */
  value: number;
}
export interface Int32ValueAminoType {
  type: "/google.protobuf.Int32Value";
  value: Int32ValueAmino;
}

/**
 * Wrapper message for `int32`.
 * 
 * The JSON representation for `Int32Value` is JSON number.
 */
export interface Int32ValueSDKType {
  value: number;
}

/**
 * Wrapper message for `uint32`.
 * 
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32Value {
  /** The uint32 value. */
  value: number;
}
export interface UInt32ValueProtoType {
  typeUrl: "/google.protobuf.UInt32Value";
  value: Uint8Array;
}

/**
 * Wrapper message for `uint32`.
 * 
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32ValueAmino {
  /** The uint32 value. */
  value: number;
}
export interface UInt32ValueAminoType {
  type: "/google.protobuf.UInt32Value";
  value: UInt32ValueAmino;
}

/**
 * Wrapper message for `uint32`.
 * 
 * The JSON representation for `UInt32Value` is JSON number.
 */
export interface UInt32ValueSDKType {
  value: number;
}

/**
 * Wrapper message for `bool`.
 * 
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValue {
  /** The bool value. */
  value: boolean;
}
export interface BoolValueProtoType {
  typeUrl: "/google.protobuf.BoolValue";
  value: Uint8Array;
}

/**
 * Wrapper message for `bool`.
 * 
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValueAmino {
  /** The bool value. */
  value: boolean;
}
export interface BoolValueAminoType {
  type: "/google.protobuf.BoolValue";
  value: BoolValueAmino;
}

/**
 * Wrapper message for `bool`.
 * 
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 */
export interface BoolValueSDKType {
  value: boolean;
}

/**
 * Wrapper message for `string`.
 * 
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValue {
  /** The string value. */
  value: string;
}
export interface StringValueProtoType {
  typeUrl: "/google.protobuf.StringValue";
  value: Uint8Array;
}

/**
 * Wrapper message for `string`.
 * 
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValueAmino {
  /** The string value. */
  value: string;
}
export interface StringValueAminoType {
  type: "/google.protobuf.StringValue";
  value: StringValueAmino;
}

/**
 * Wrapper message for `string`.
 * 
 * The JSON representation for `StringValue` is JSON string.
 */
export interface StringValueSDKType {
  value: string;
}

/**
 * Wrapper message for `bytes`.
 * 
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValue {
  /** The bytes value. */
  value: Uint8Array;
}
export interface BytesValueProtoType {
  typeUrl: "/google.protobuf.BytesValue";
  value: Uint8Array;
}

/**
 * Wrapper message for `bytes`.
 * 
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValueAmino {
  /** The bytes value. */
  value: Uint8Array;
}
export interface BytesValueAminoType {
  type: "/google.protobuf.BytesValue";
  value: BytesValueAmino;
}

/**
 * Wrapper message for `bytes`.
 * 
 * The JSON representation for `BytesValue` is JSON string.
 */
export interface BytesValueSDKType {
  value: Uint8Array;
}

function createBaseDoubleValue(): DoubleValue {
  return {
    value: 0
  };
}

export const DoubleValue = {
  typeUrl: "/google.protobuf.DoubleValue",

  encode(message: DoubleValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DoubleValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDoubleValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = reader.double();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DoubleValue {
    return {
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },

  toJSON(message: DoubleValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<DoubleValue>): DoubleValue {
    const message = createBaseDoubleValue();
    message.value = object.value ?? 0;
    return message;
  },

  fromSDK(object: DoubleValueSDKType): DoubleValue {
    return {
      value: object?.value
    };
  },

  toSDK(message: DoubleValue): DoubleValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },

  fromAmino(object: DoubleValueAmino): DoubleValue {
    return {
      value: object.value
    };
  },

  toAmino(message: DoubleValue): DoubleValueAmino {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  }

};

function createBaseFloatValue(): FloatValue {
  return {
    value: 0
  };
}

export const FloatValue = {
  typeUrl: "/google.protobuf.FloatValue",

  encode(message: FloatValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(13).float(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FloatValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFloatValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = reader.float();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FloatValue {
    return {
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },

  toJSON(message: FloatValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<FloatValue>): FloatValue {
    const message = createBaseFloatValue();
    message.value = object.value ?? 0;
    return message;
  },

  fromSDK(object: FloatValueSDKType): FloatValue {
    return {
      value: object?.value
    };
  },

  toSDK(message: FloatValue): FloatValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },

  fromAmino(object: FloatValueAmino): FloatValue {
    return {
      value: object.value
    };
  },

  toAmino(message: FloatValue): FloatValueAmino {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  }

};

function createBaseInt64Value(): Int64Value {
  return {
    value: Long.ZERO
  };
}

export const Int64Value = {
  typeUrl: "/google.protobuf.Int64Value",

  encode(message: Int64Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.value.isZero()) {
      writer.uint32(8).int64(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int64Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt64Value();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Int64Value {
    return {
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.ZERO
    };
  },

  toJSON(message: Int64Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Int64Value>): Int64Value {
    const message = createBaseInt64Value();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.ZERO;
    return message;
  },

  fromSDK(object: Int64ValueSDKType): Int64Value {
    return {
      value: object?.value
    };
  },

  toSDK(message: Int64Value): Int64ValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },

  fromAmino(object: Int64ValueAmino): Int64Value {
    return {
      value: Long.fromString(object.value)
    };
  },

  toAmino(message: Int64Value): Int64ValueAmino {
    const obj: any = {};
    obj.value = message.value ? message.value.toString() : undefined;
    return obj;
  }

};

function createBaseUInt64Value(): UInt64Value {
  return {
    value: Long.UZERO
  };
}

export const UInt64Value = {
  typeUrl: "/google.protobuf.UInt64Value",

  encode(message: UInt64Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.value.isZero()) {
      writer.uint32(8).uint64(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UInt64Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt64Value();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UInt64Value {
    return {
      value: isSet(object.value) ? Long.fromValue(object.value) : Long.UZERO
    };
  },

  toJSON(message: UInt64Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<UInt64Value>): UInt64Value {
    const message = createBaseUInt64Value();
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.UZERO;
    return message;
  },

  fromSDK(object: UInt64ValueSDKType): UInt64Value {
    return {
      value: object?.value
    };
  },

  toSDK(message: UInt64Value): UInt64ValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },

  fromAmino(object: UInt64ValueAmino): UInt64Value {
    return {
      value: Long.fromString(object.value)
    };
  },

  toAmino(message: UInt64Value): UInt64ValueAmino {
    const obj: any = {};
    obj.value = message.value ? message.value.toString() : undefined;
    return obj;
  }

};

function createBaseInt32Value(): Int32Value {
  return {
    value: 0
  };
}

export const Int32Value = {
  typeUrl: "/google.protobuf.Int32Value",

  encode(message: Int32Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Int32Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInt32Value();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Int32Value {
    return {
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },

  toJSON(message: Int32Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial(object: DeepPartial<Int32Value>): Int32Value {
    const message = createBaseInt32Value();
    message.value = object.value ?? 0;
    return message;
  },

  fromSDK(object: Int32ValueSDKType): Int32Value {
    return {
      value: object?.value
    };
  },

  toSDK(message: Int32Value): Int32ValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },

  fromAmino(object: Int32ValueAmino): Int32Value {
    return {
      value: object.value
    };
  },

  toAmino(message: Int32Value): Int32ValueAmino {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  }

};

function createBaseUInt32Value(): UInt32Value {
  return {
    value: 0
  };
}

export const UInt32Value = {
  typeUrl: "/google.protobuf.UInt32Value",

  encode(message: UInt32Value, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(8).uint32(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UInt32Value {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUInt32Value();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): UInt32Value {
    return {
      value: isSet(object.value) ? Number(object.value) : 0
    };
  },

  toJSON(message: UInt32Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = Math.round(message.value));
    return obj;
  },

  fromPartial(object: DeepPartial<UInt32Value>): UInt32Value {
    const message = createBaseUInt32Value();
    message.value = object.value ?? 0;
    return message;
  },

  fromSDK(object: UInt32ValueSDKType): UInt32Value {
    return {
      value: object?.value
    };
  },

  toSDK(message: UInt32Value): UInt32ValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },

  fromAmino(object: UInt32ValueAmino): UInt32Value {
    return {
      value: object.value
    };
  },

  toAmino(message: UInt32Value): UInt32ValueAmino {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  }

};

function createBaseBoolValue(): BoolValue {
  return {
    value: false
  };
}

export const BoolValue = {
  typeUrl: "/google.protobuf.BoolValue",

  encode(message: BoolValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value === true) {
      writer.uint32(8).bool(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BoolValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoolValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BoolValue {
    return {
      value: isSet(object.value) ? Boolean(object.value) : false
    };
  },

  toJSON(message: BoolValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<BoolValue>): BoolValue {
    const message = createBaseBoolValue();
    message.value = object.value ?? false;
    return message;
  },

  fromSDK(object: BoolValueSDKType): BoolValue {
    return {
      value: object?.value
    };
  },

  toSDK(message: BoolValue): BoolValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },

  fromAmino(object: BoolValueAmino): BoolValue {
    return {
      value: object.value
    };
  },

  toAmino(message: BoolValue): BoolValueAmino {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  }

};

function createBaseStringValue(): StringValue {
  return {
    value: ""
  };
}

export const StringValue = {
  typeUrl: "/google.protobuf.StringValue",

  encode(message: StringValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StringValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): StringValue {
    return {
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: StringValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<StringValue>): StringValue {
    const message = createBaseStringValue();
    message.value = object.value ?? "";
    return message;
  },

  fromSDK(object: StringValueSDKType): StringValue {
    return {
      value: object?.value
    };
  },

  toSDK(message: StringValue): StringValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },

  fromAmino(object: StringValueAmino): StringValue {
    return {
      value: object.value
    };
  },

  toAmino(message: StringValue): StringValueAmino {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  }

};

function createBaseBytesValue(): BytesValue {
  return {
    value: new Uint8Array()
  };
}

export const BytesValue = {
  typeUrl: "/google.protobuf.BytesValue",

  encode(message: BytesValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BytesValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBytesValue();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BytesValue {
    return {
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },

  toJSON(message: BytesValue): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },

  fromPartial(object: DeepPartial<BytesValue>): BytesValue {
    const message = createBaseBytesValue();
    message.value = object.value ?? new Uint8Array();
    return message;
  },

  fromSDK(object: BytesValueSDKType): BytesValue {
    return {
      value: object?.value
    };
  },

  toSDK(message: BytesValue): BytesValueSDKType {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },

  fromAmino(object: BytesValueAmino): BytesValue {
    return {
      value: object.value
    };
  },

  toAmino(message: BytesValue): BytesValueAmino {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  }

};