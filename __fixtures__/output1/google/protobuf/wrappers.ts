import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
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
    const obj = createBaseDoubleValue();
    if (isSet(object.value)) obj.value = Number(object.value);
    return obj;
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
  }
};
function createBaseFloatValue(): FloatValue {
  return {
    value: 0
  };
}
export const FloatValue = {
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
    const obj = createBaseFloatValue();
    if (isSet(object.value)) obj.value = Number(object.value);
    return obj;
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
  }
};
function createBaseInt64Value(): Int64Value {
  return {
    value: Long.ZERO
  };
}
export const Int64Value = {
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
    const obj = createBaseInt64Value();
    if (isSet(object.value)) obj.value = Long.fromValue(object.value);
    return obj;
  },
  toJSON(message: Int64Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Int64Value>): Int64Value {
    const message = createBaseInt64Value();
    if (object.value !== undefined && object.value !== null) {
      message.value = Long.fromValue(object.value);
    }
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
  }
};
function createBaseUInt64Value(): UInt64Value {
  return {
    value: Long.UZERO
  };
}
export const UInt64Value = {
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
    const obj = createBaseUInt64Value();
    if (isSet(object.value)) obj.value = Long.fromValue(object.value);
    return obj;
  },
  toJSON(message: UInt64Value): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = (message.value || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<UInt64Value>): UInt64Value {
    const message = createBaseUInt64Value();
    if (object.value !== undefined && object.value !== null) {
      message.value = Long.fromValue(object.value);
    }
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
  }
};
function createBaseInt32Value(): Int32Value {
  return {
    value: 0
  };
}
export const Int32Value = {
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
    const obj = createBaseInt32Value();
    if (isSet(object.value)) obj.value = Number(object.value);
    return obj;
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
  }
};
function createBaseUInt32Value(): UInt32Value {
  return {
    value: 0
  };
}
export const UInt32Value = {
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
    const obj = createBaseUInt32Value();
    if (isSet(object.value)) obj.value = Number(object.value);
    return obj;
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
  }
};
function createBaseBoolValue(): BoolValue {
  return {
    value: false
  };
}
export const BoolValue = {
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
    const obj = createBaseBoolValue();
    if (isSet(object.value)) obj.value = Boolean(object.value);
    return obj;
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
  }
};
function createBaseStringValue(): StringValue {
  return {
    value: ""
  };
}
export const StringValue = {
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
    const obj = createBaseStringValue();
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
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
  }
};
function createBaseBytesValue(): BytesValue {
  return {
    value: new Uint8Array()
  };
}
export const BytesValue = {
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
    const obj = createBaseBytesValue();
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    return obj;
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
  }
};