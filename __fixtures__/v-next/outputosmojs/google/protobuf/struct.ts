import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, isObject } from "../../helpers";
export const protobufPackage = "google.protobuf";
/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 * 
 *  The JSON representation for `NullValue` is JSON `null`.
 */
export enum NullValue {
  /** NULL_VALUE - Null value. */
  NULL_VALUE = 0,
  UNRECOGNIZED = -1,
}
export const NullValueSDKType = NullValue;
export function nullValueFromJSON(object: any): NullValue {
  switch (object) {
    case 0:
    case "NULL_VALUE":
      return NullValue.NULL_VALUE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NullValue.UNRECOGNIZED;
  }
}
export function nullValueToJSON(object: NullValue): string {
  switch (object) {
    case NullValue.NULL_VALUE:
      return "NULL_VALUE";
    case NullValue.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export interface Struct_FieldsEntry {
  key: string;
  value: Value;
}
export interface Struct_FieldsEntrySDKType {
  key: string;
  value: ValueSDKType;
}
/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 * 
 * The JSON representation for `Struct` is JSON object.
 */
export interface Struct {
  /** Unordered map of dynamically typed values. */
  fields: {
    [key: string]: Value;
  };
}
/**
 * `Struct` represents a structured data value, consisting of fields
 * which map to dynamically typed values. In some languages, `Struct`
 * might be supported by a native representation. For example, in
 * scripting languages like JS a struct is represented as an
 * object. The details of that representation are described together
 * with the proto support for the language.
 * 
 * The JSON representation for `Struct` is JSON object.
 */
export interface StructSDKType {
  fields: {
    [key: string]: ValueSDKType;
  };
}
/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 * 
 * The JSON representation for `Value` is JSON value.
 */
export interface Value {
  /** Represents a null value. */
  nullValue?: NullValue;
  /** Represents a double value. */
  numberValue?: number;
  /** Represents a string value. */
  stringValue?: string;
  /** Represents a boolean value. */
  boolValue?: boolean;
  /** Represents a structured value. */
  structValue?: Struct;
  /** Represents a repeated `Value`. */
  listValue?: ListValue;
}
/**
 * `Value` represents a dynamically typed value which can be either
 * null, a number, a string, a boolean, a recursive struct value, or a
 * list of values. A producer of value is expected to set one of that
 * variants, absence of any variant indicates an error.
 * 
 * The JSON representation for `Value` is JSON value.
 */
export interface ValueSDKType {
  null_value?: NullValue;
  number_value?: number;
  string_value?: string;
  bool_value?: boolean;
  struct_value?: StructSDKType;
  list_value?: ListValueSDKType;
}
/**
 * `ListValue` is a wrapper around a repeated field of values.
 * 
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
  /** Repeated field of dynamically typed values. */
  values: Value[];
}
/**
 * `ListValue` is a wrapper around a repeated field of values.
 * 
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValueSDKType {
  values: ValueSDKType[];
}
function createBaseStruct_FieldsEntry(): Struct_FieldsEntry {
  return {
    key: "",
    value: Value.fromPartial({})
  };
}
export const Struct_FieldsEntry = {
  encode(message: Struct_FieldsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      Value.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Struct_FieldsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct_FieldsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = Value.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Struct_FieldsEntry {
    const obj = createBaseStruct_FieldsEntry();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = Value.fromJSON(object.value);
    return obj;
  },
  toJSON(message: Struct_FieldsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? Value.toJSON(message.value) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Struct_FieldsEntry>): Struct_FieldsEntry {
    const message = createBaseStruct_FieldsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Value.fromPartial(object.value) : Value.fromPartial({});
    return message;
  },
  fromSDK(object: Struct_FieldsEntrySDKType): Struct_FieldsEntry {
    return {
      key: object?.key,
      value: object.value ? Value.fromSDK(object.value) : undefined
    };
  },
  fromSDKJSON(object: any): Struct_FieldsEntrySDKType {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Value.fromSDKJSON(object.value) : undefined
    };
  },
  toSDK(message: Struct_FieldsEntry): Struct_FieldsEntrySDKType {
    const obj: any = {};
    obj.key = message.key;
    message.value !== undefined && (obj.value = message.value ? Value.toSDK(message.value) : undefined);
    return obj;
  }
};
function createBaseStruct(): Struct {
  return {
    fields: {}
  };
}
export const Struct = {
  encode(message: Struct, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    Object.entries(message.fields).forEach(([key, value]) => {
      Struct_FieldsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(10).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Struct {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStruct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = Struct_FieldsEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.fields[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Struct {
    const obj = createBaseStruct();
    if (isObject(object.fields)) obj.fields = Object.entries(object.fields).reduce<{
      [key: string]: Value;
    }>((acc, [key, value]) => {
      acc[key] = Value.fromJSON(value);
      return acc;
    }, {});
    return obj;
  },
  toJSON(message: Struct): unknown {
    const obj: any = {};
    obj.fields = {};
    if (message.fields) {
      Object.entries(message.fields).forEach(([k, v]) => {
        obj.fields[k] = Value.toJSON(v);
      });
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Struct>): Struct {
    const message = createBaseStruct();
    message.fields = Object.entries(object.fields ?? {}).reduce<{
      [key: string]: Value;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Value.fromPartial(value);
      }
      return acc;
    }, {});
    return message;
  },
  fromSDK(object: StructSDKType): Struct {
    return {
      fields: isObject(object.fields) ? Object.entries(object.fields).reduce<{
        [key: string]: Value;
      }>((acc, [key, value]) => {
        acc[key] = Value.fromSDK(value);
        return acc;
      }, {}) : {}
    };
  },
  fromSDKJSON(object: any): StructSDKType {
    return {
      fields: isObject(object.fields) ? Object.entries(object.fields).reduce<{
        [key: string]: Value;
      }>((acc, [key, value]) => {
        acc[key] = Value.fromSDKJSON(value);
        return acc;
      }, {}) : {}
    };
  },
  toSDK(message: Struct): StructSDKType {
    const obj: any = {};
    obj.fields = {};
    if (message.fields) {
      Object.entries(message.fields).forEach(([k, v]) => {
        obj.fields[k] = Value.toSDK(v);
      });
    }
    return obj;
  }
};
function createBaseValue(): Value {
  return {
    nullValue: undefined,
    numberValue: undefined,
    stringValue: undefined,
    boolValue: undefined,
    structValue: undefined,
    listValue: undefined
  };
}
export const Value = {
  encode(message: Value, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.nullValue !== undefined) {
      writer.uint32(8).int32(message.nullValue);
    }
    if (message.numberValue !== undefined) {
      writer.uint32(17).double(message.numberValue);
    }
    if (message.stringValue !== undefined) {
      writer.uint32(26).string(message.stringValue);
    }
    if (message.boolValue !== undefined) {
      writer.uint32(32).bool(message.boolValue);
    }
    if (message.structValue !== undefined) {
      Struct.encode(message.structValue, writer.uint32(42).fork()).ldelim();
    }
    if (message.listValue !== undefined) {
      ListValue.encode(message.listValue, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Value {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nullValue = (reader.int32() as any);
          break;
        case 2:
          message.numberValue = reader.double();
          break;
        case 3:
          message.stringValue = reader.string();
          break;
        case 4:
          message.boolValue = reader.bool();
          break;
        case 5:
          message.structValue = Struct.decode(reader, reader.uint32());
          break;
        case 6:
          message.listValue = ListValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Value {
    const obj = createBaseValue();
    if (isSet(object.nullValue)) obj.nullValue = nullValueFromJSON(object.nullValue);
    if (isSet(object.numberValue)) obj.numberValue = Number(object.numberValue);
    if (isSet(object.stringValue)) obj.stringValue = String(object.stringValue);
    if (isSet(object.boolValue)) obj.boolValue = Boolean(object.boolValue);
    if (isSet(object.structValue)) obj.structValue = Struct.fromJSON(object.structValue);
    if (isSet(object.listValue)) obj.listValue = ListValue.fromJSON(object.listValue);
    return obj;
  },
  toJSON(message: Value): unknown {
    const obj: any = {};
    message.nullValue !== undefined && (obj.nullValue = nullValueToJSON(message.nullValue));
    message.numberValue !== undefined && (obj.numberValue = message.numberValue);
    message.stringValue !== undefined && (obj.stringValue = message.stringValue);
    message.boolValue !== undefined && (obj.boolValue = message.boolValue);
    message.structValue !== undefined && (obj.structValue = message.structValue ? Struct.toJSON(message.structValue) : undefined);
    message.listValue !== undefined && (obj.listValue = message.listValue ? ListValue.toJSON(message.listValue) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Value>): Value {
    const message = createBaseValue();
    message.nullValue = object.nullValue ?? undefined;
    message.numberValue = object.numberValue ?? undefined;
    message.stringValue = object.stringValue ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    message.structValue = object.structValue !== undefined && object.structValue !== null ? Struct.fromPartial(object.structValue) : Struct.fromPartial({});
    message.listValue = object.listValue !== undefined && object.listValue !== null ? ListValue.fromPartial(object.listValue) : ListValue.fromPartial({});
    return message;
  },
  fromSDK(object: ValueSDKType): Value {
    return {
      nullValue: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
      numberValue: object?.number_value,
      stringValue: object?.string_value,
      boolValue: object?.bool_value,
      structValue: object.struct_value ? Struct.fromSDK(object.struct_value) : undefined,
      listValue: object.list_value ? ListValue.fromSDK(object.list_value) : undefined
    };
  },
  fromSDKJSON(object: any): ValueSDKType {
    return {
      null_value: isSet(object.null_value) ? nullValueFromJSON(object.null_value) : undefined,
      number_value: isSet(object.number_value) ? Number(object.number_value) : undefined,
      string_value: isSet(object.string_value) ? String(object.string_value) : undefined,
      bool_value: isSet(object.bool_value) ? Boolean(object.bool_value) : undefined,
      struct_value: isSet(object.struct_value) ? Struct.fromSDKJSON(object.struct_value) : undefined,
      list_value: isSet(object.list_value) ? ListValue.fromSDKJSON(object.list_value) : undefined
    };
  },
  toSDK(message: Value): ValueSDKType {
    const obj: any = {};
    message.nullValue !== undefined && (obj.null_value = nullValueToJSON(message.nullValue));
    obj.number_value = message.numberValue;
    obj.string_value = message.stringValue;
    obj.bool_value = message.boolValue;
    message.structValue !== undefined && (obj.struct_value = message.structValue ? Struct.toSDK(message.structValue) : undefined);
    message.listValue !== undefined && (obj.list_value = message.listValue ? ListValue.toSDK(message.listValue) : undefined);
    return obj;
  }
};
function createBaseListValue(): ListValue {
  return {
    values: []
  };
}
export const ListValue = {
  encode(message: ListValue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.values) {
      Value.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ListValue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(Value.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ListValue {
    const obj = createBaseListValue();
    if (Array.isArray(object?.values)) object.values.map((e: any) => Value.fromJSON(e));
    return obj;
  },
  toJSON(message: ListValue): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? Value.toJSON(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<ListValue>): ListValue {
    const message = createBaseListValue();
    message.values = object.values?.map(e => Value.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ListValueSDKType): ListValue {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): ListValueSDKType {
    return {
      values: Array.isArray(object?.values) ? object.values.map((e: any) => Value.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: ListValue): ListValueSDKType {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e ? Value.toSDK(e) : undefined);
    } else {
      obj.values = [];
    }
    return obj;
  }
};