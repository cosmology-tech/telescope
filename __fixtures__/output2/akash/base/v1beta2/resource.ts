//@ts-nocheck
/* eslint-disable */
import { ResourceValue } from "./resourcevalue";
import { Attribute } from "./attribute";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.base.v1beta2";
/** CPU stores resource units and cpu config attributes */
export interface CPU {
  units: ResourceValue;
  attributes: Attribute[];
}
/** Memory stores resource quantity and memory attributes */
export interface Memory {
  quantity: ResourceValue;
  attributes: Attribute[];
}
/** Storage stores resource quantity and storage attributes */
export interface Storage {
  name: string;
  quantity: ResourceValue;
  attributes: Attribute[];
}
function createBaseCPU(): CPU {
  return {
    units: ResourceValue.fromPartial({}),
    attributes: []
  };
}
export const CPU = {
  encode(message: CPU, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.units !== undefined) {
      ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CPU {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPU();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.units = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CPU {
    const obj = createBaseCPU();
    if (isSet(object.units)) obj.units = ResourceValue.fromJSON(object.units);
    if (Array.isArray(object?.attributes)) object.attributes.map((e: any) => Attribute.fromJSON(e));
    return obj;
  },
  toJSON(message: CPU): unknown {
    const obj: any = {};
    message.units !== undefined && (obj.units = message.units ? ResourceValue.toJSON(message.units) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<CPU>): CPU {
    const message = createBaseCPU();
    if (object.units !== undefined && object.units !== null) {
      message.units = ResourceValue.fromPartial(object.units);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMemory(): Memory {
  return {
    quantity: ResourceValue.fromPartial({}),
    attributes: []
  };
}
export const Memory = {
  encode(message: Memory, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Memory {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Memory {
    const obj = createBaseMemory();
    if (isSet(object.quantity)) obj.quantity = ResourceValue.fromJSON(object.quantity);
    if (Array.isArray(object?.attributes)) object.attributes.map((e: any) => Attribute.fromJSON(e));
    return obj;
  },
  toJSON(message: Memory): unknown {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toJSON(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Memory>): Memory {
    const message = createBaseMemory();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromPartial(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  }
};
function createBaseStorage(): Storage {
  return {
    name: "",
    quantity: ResourceValue.fromPartial({}),
    attributes: []
  };
}
export const Storage = {
  encode(message: Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Storage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.quantity = ResourceValue.decode(reader, reader.uint32());
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Storage {
    const obj = createBaseStorage();
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.quantity)) obj.quantity = ResourceValue.fromJSON(object.quantity);
    if (Array.isArray(object?.attributes)) object.attributes.map((e: any) => Attribute.fromJSON(e));
    return obj;
  },
  toJSON(message: Storage): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toJSON(message.quantity) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Storage>): Storage {
    const message = createBaseStorage();
    message.name = object.name ?? "";
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromPartial(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  }
};