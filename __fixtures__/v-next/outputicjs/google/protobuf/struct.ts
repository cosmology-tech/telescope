import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
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
  value?: Value;
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
 * `ListValue` is a wrapper around a repeated field of values.
 * 
 * The JSON representation for `ListValue` is JSON array.
 */
export interface ListValue {
  /** Repeated field of dynamically typed values. */
  values: Value[];
}
function createBaseStruct_FieldsEntry(): Struct_FieldsEntry {
  return {
    key: "",
    value: undefined
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
  fromPartial(object: DeepPartial<Struct_FieldsEntry>): Struct_FieldsEntry {
    const message = createBaseStruct_FieldsEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Value.fromPartial(object.value) : undefined;
    return message;
  }
};
function createBaseStruct(): Struct {
  return {
    fields: {}
  };
}
export const Struct = {
  typeUrl: "/google.protobuf.Struct",
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
  typeUrl: "/google.protobuf.Value",
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
  fromPartial(object: DeepPartial<Value>): Value {
    const message = createBaseValue();
    message.nullValue = object.nullValue ?? undefined;
    message.numberValue = object.numberValue ?? undefined;
    message.stringValue = object.stringValue ?? undefined;
    message.boolValue = object.boolValue ?? undefined;
    message.structValue = object.structValue !== undefined && object.structValue !== null ? Struct.fromPartial(object.structValue) : undefined;
    message.listValue = object.listValue !== undefined && object.listValue !== null ? ListValue.fromPartial(object.listValue) : undefined;
    return message;
  }
};
function createBaseListValue(): ListValue {
  return {
    values: []
  };
}
export const ListValue = {
  typeUrl: "/google.protobuf.ListValue",
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
  fromPartial(object: DeepPartial<ListValue>): ListValue {
    const message = createBaseListValue();
    message.values = object.values?.map(e => Value.fromPartial(e)) || [];
    return message;
  }
};