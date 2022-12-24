import { ResourceValue, ResourceValueAmino, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeAmino, AttributeSDKType } from "./attribute";
import { Endpoint, EndpointAmino, EndpointSDKType } from "./endpoint";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.base.v1beta1";

/** CPU stores resource units and cpu config attributes */
export interface CPU {
  units?: ResourceValue;
  attributes: Attribute[];
}

/** CPU stores resource units and cpu config attributes */
export interface CPUAmino {
  units?: ResourceValueAmino;
  attributes: AttributeAmino[];
}
export interface CPUAminoType {
  type: "/akash.base.v1beta1.CPU";
  value: CPUAmino;
}

/** CPU stores resource units and cpu config attributes */
export interface CPUSDKType {
  units?: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}

/** Memory stores resource quantity and memory attributes */
export interface Memory {
  quantity?: ResourceValue;
  attributes: Attribute[];
}

/** Memory stores resource quantity and memory attributes */
export interface MemoryAmino {
  quantity?: ResourceValueAmino;
  attributes: AttributeAmino[];
}
export interface MemoryAminoType {
  type: "/akash.base.v1beta1.Memory";
  value: MemoryAmino;
}

/** Memory stores resource quantity and memory attributes */
export interface MemorySDKType {
  quantity?: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}

/** Storage stores resource quantity and storage attributes */
export interface Storage {
  quantity?: ResourceValue;
  attributes: Attribute[];
}

/** Storage stores resource quantity and storage attributes */
export interface StorageAmino {
  quantity?: ResourceValueAmino;
  attributes: AttributeAmino[];
}
export interface StorageAminoType {
  type: "/akash.base.v1beta1.Storage";
  value: StorageAmino;
}

/** Storage stores resource quantity and storage attributes */
export interface StorageSDKType {
  quantity?: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}

/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
  cpu?: CPU;
  memory?: Memory;
  storage?: Storage;
  endpoints: Endpoint[];
}

/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsAmino {
  cpu?: CPUAmino;
  memory?: MemoryAmino;
  storage?: StorageAmino;
  endpoints: EndpointAmino[];
}
export interface ResourceUnitsAminoType {
  type: "/akash.base.v1beta1.ResourceUnits";
  value: ResourceUnitsAmino;
}

/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsSDKType {
  cpu?: CPUSDKType;
  memory?: MemorySDKType;
  storage?: StorageSDKType;
  endpoints: EndpointSDKType[];
}

function createBaseCPU(): CPU {
  return {
    units: undefined,
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
    return {
      units: isSet(object.units) ? ResourceValue.fromJSON(object.units) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
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
    message.units = object.units !== undefined && object.units !== null ? ResourceValue.fromPartial(object.units) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: CPUSDKType): CPU {
    return {
      units: object.units ? ResourceValue.fromSDK(object.units) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },

  toSDK(message: CPU): CPUSDKType {
    const obj: any = {};
    message.units !== undefined && (obj.units = message.units ? ResourceValue.toSDK(message.units) : undefined);

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }

    return obj;
  },

  fromAmino(object: CPUAmino): CPU {
    return {
      units: object?.units ? ResourceValue.fromAmino(object.units) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : []
    };
  },

  toAmino(message: CPU): CPUAmino {
    const obj: any = {};
    obj.units = message.units ? ResourceValue.toAmino(message.units) : undefined;

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }

    return obj;
  }

};

function createBaseMemory(): Memory {
  return {
    quantity: undefined,
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
    return {
      quantity: isSet(object.quantity) ? ResourceValue.fromJSON(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
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
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourceValue.fromPartial(object.quantity) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: MemorySDKType): Memory {
    return {
      quantity: object.quantity ? ResourceValue.fromSDK(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },

  toSDK(message: Memory): MemorySDKType {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toSDK(message.quantity) : undefined);

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }

    return obj;
  },

  fromAmino(object: MemoryAmino): Memory {
    return {
      quantity: object?.quantity ? ResourceValue.fromAmino(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : []
    };
  },

  toAmino(message: Memory): MemoryAmino {
    const obj: any = {};
    obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity) : undefined;

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }

    return obj;
  }

};

function createBaseStorage(): Storage {
  return {
    quantity: undefined,
    attributes: []
  };
}

export const Storage = {
  encode(message: Storage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
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

  fromJSON(object: any): Storage {
    return {
      quantity: isSet(object.quantity) ? ResourceValue.fromJSON(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },

  toJSON(message: Storage): unknown {
    const obj: any = {};
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
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourceValue.fromPartial(object.quantity) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: StorageSDKType): Storage {
    return {
      quantity: object.quantity ? ResourceValue.fromSDK(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },

  toSDK(message: Storage): StorageSDKType {
    const obj: any = {};
    message.quantity !== undefined && (obj.quantity = message.quantity ? ResourceValue.toSDK(message.quantity) : undefined);

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }

    return obj;
  },

  fromAmino(object: StorageAmino): Storage {
    return {
      quantity: object?.quantity ? ResourceValue.fromAmino(object.quantity) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : []
    };
  },

  toAmino(message: Storage): StorageAmino {
    const obj: any = {};
    obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity) : undefined;

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }

    return obj;
  }

};

function createBaseResourceUnits(): ResourceUnits {
  return {
    cpu: undefined,
    memory: undefined,
    storage: undefined,
    endpoints: []
  };
}

export const ResourceUnits = {
  encode(message: ResourceUnits, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.cpu !== undefined) {
      CPU.encode(message.cpu, writer.uint32(10).fork()).ldelim();
    }

    if (message.memory !== undefined) {
      Memory.encode(message.memory, writer.uint32(18).fork()).ldelim();
    }

    if (message.storage !== undefined) {
      Storage.encode(message.storage, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceUnits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceUnits();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.cpu = CPU.decode(reader, reader.uint32());
          break;

        case 2:
          message.memory = Memory.decode(reader, reader.uint32());
          break;

        case 3:
          message.storage = Storage.decode(reader, reader.uint32());
          break;

        case 4:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ResourceUnits {
    return {
      cpu: isSet(object.cpu) ? CPU.fromJSON(object.cpu) : undefined,
      memory: isSet(object.memory) ? Memory.fromJSON(object.memory) : undefined,
      storage: isSet(object.storage) ? Storage.fromJSON(object.storage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromJSON(e)) : []
    };
  },

  toJSON(message: ResourceUnits): unknown {
    const obj: any = {};
    message.cpu !== undefined && (obj.cpu = message.cpu ? CPU.toJSON(message.cpu) : undefined);
    message.memory !== undefined && (obj.memory = message.memory ? Memory.toJSON(message.memory) : undefined);
    message.storage !== undefined && (obj.storage = message.storage ? Storage.toJSON(message.storage) : undefined);

    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<ResourceUnits>): ResourceUnits {
    const message = createBaseResourceUnits();
    message.cpu = object.cpu !== undefined && object.cpu !== null ? CPU.fromPartial(object.cpu) : undefined;
    message.memory = object.memory !== undefined && object.memory !== null ? Memory.fromPartial(object.memory) : undefined;
    message.storage = object.storage !== undefined && object.storage !== null ? Storage.fromPartial(object.storage) : undefined;
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: ResourceUnitsSDKType): ResourceUnits {
    return {
      cpu: object.cpu ? CPU.fromSDK(object.cpu) : undefined,
      memory: object.memory ? Memory.fromSDK(object.memory) : undefined,
      storage: object.storage ? Storage.fromSDK(object.storage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromSDK(e)) : []
    };
  },

  toSDK(message: ResourceUnits): ResourceUnitsSDKType {
    const obj: any = {};
    message.cpu !== undefined && (obj.cpu = message.cpu ? CPU.toSDK(message.cpu) : undefined);
    message.memory !== undefined && (obj.memory = message.memory ? Memory.toSDK(message.memory) : undefined);
    message.storage !== undefined && (obj.storage = message.storage ? Storage.toSDK(message.storage) : undefined);

    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toSDK(e) : undefined);
    } else {
      obj.endpoints = [];
    }

    return obj;
  },

  fromAmino(object: ResourceUnitsAmino): ResourceUnits {
    return {
      cpu: object?.cpu ? CPU.fromAmino(object.cpu) : undefined,
      memory: object?.memory ? Memory.fromAmino(object.memory) : undefined,
      storage: object?.storage ? Storage.fromAmino(object.storage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromAmino(e)) : []
    };
  },

  toAmino(message: ResourceUnits): ResourceUnitsAmino {
    const obj: any = {};
    obj.cpu = message.cpu ? CPU.toAmino(message.cpu) : undefined;
    obj.memory = message.memory ? Memory.toAmino(message.memory) : undefined;
    obj.storage = message.storage ? Storage.toAmino(message.storage) : undefined;

    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toAmino(e) : undefined);
    } else {
      obj.endpoints = [];
    }

    return obj;
  }

};