import { CPU, CPUSDKType, Memory, MemorySDKType, Storage, StorageSDKType } from "./resource";
import { Endpoint, EndpointSDKType } from "./endpoint";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.base.v1beta2";
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnits {
  cpu?: CPU;
  memory?: Memory;
  storage: Storage[];
  endpoints: Endpoint[];
}
/**
 * ResourceUnits describes all available resources types for deployment/node etc
 * if field is nil resource is not present in the given data-structure
 */
export interface ResourceUnitsSDKType {
  cpu?: CPUSDKType;
  memory?: MemorySDKType;
  storage: StorageSDKType[];
  endpoints: EndpointSDKType[];
}
function createBaseResourceUnits(): ResourceUnits {
  return {
    cpu: undefined,
    memory: undefined,
    storage: [],
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
    for (const v of message.storage) {
      Storage.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.storage.push(Storage.decode(reader, reader.uint32()));
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
    const obj = createBaseResourceUnits();
    if (isSet(object.cpu)) obj.cpu = CPU.fromJSON(object.cpu);
    if (isSet(object.memory)) obj.memory = Memory.fromJSON(object.memory);
    if (Array.isArray(object?.storage)) object.storage.map((e: any) => Storage.fromJSON(e));
    if (Array.isArray(object?.endpoints)) object.endpoints.map((e: any) => Endpoint.fromJSON(e));
    return obj;
  },
  toJSON(message: ResourceUnits): unknown {
    const obj: any = {};
    message.cpu !== undefined && (obj.cpu = message.cpu ? CPU.toJSON(message.cpu) : undefined);
    message.memory !== undefined && (obj.memory = message.memory ? Memory.toJSON(message.memory) : undefined);
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? Storage.toJSON(e) : undefined);
    } else {
      obj.storage = [];
    }
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<ResourceUnits>, I>>(object: I): ResourceUnits {
    const message = createBaseResourceUnits();
    if (object.cpu !== undefined && object.cpu !== null) {
      message.cpu = CPU.fromPartial(object.cpu);
    }
    if (object.memory !== undefined && object.memory !== null) {
      message.memory = Memory.fromPartial(object.memory);
    }
    message.storage = object.storage?.map(e => Storage.fromPartial(e)) || [];
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: ResourceUnitsSDKType): ResourceUnits {
    return {
      cpu: object.cpu ? CPU.fromSDK(object.cpu) : undefined,
      memory: object.memory ? Memory.fromSDK(object.memory) : undefined,
      storage: Array.isArray(object?.storage) ? object.storage.map((e: any) => Storage.fromSDK(e)) : [],
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromSDK(e)) : []
    };
  },
  toSDK(message: ResourceUnits): ResourceUnitsSDKType {
    const obj: any = {};
    message.cpu !== undefined && (obj.cpu = message.cpu ? CPU.toSDK(message.cpu) : undefined);
    message.memory !== undefined && (obj.memory = message.memory ? Memory.toSDK(message.memory) : undefined);
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? Storage.toSDK(e) : undefined);
    } else {
      obj.storage = [];
    }
    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toSDK(e) : undefined);
    } else {
      obj.endpoints = [];
    }
    return obj;
  }
};