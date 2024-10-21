import { CPU, Memory, Storage } from "./resource";
import { Endpoint } from "./endpoint";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
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
function createBaseResourceUnits(): ResourceUnits {
  return {
    cpu: undefined,
    memory: undefined,
    storage: [],
    endpoints: []
  };
}
export const ResourceUnits = {
  typeUrl: "/akash.base.v1beta2.ResourceUnits",
  encode(message: ResourceUnits, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): ResourceUnits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<ResourceUnits>): ResourceUnits {
    const message = createBaseResourceUnits();
    message.cpu = object.cpu !== undefined && object.cpu !== null ? CPU.fromPartial(object.cpu) : undefined;
    message.memory = object.memory !== undefined && object.memory !== null ? Memory.fromPartial(object.memory) : undefined;
    message.storage = object.storage?.map(e => Storage.fromPartial(e)) || [];
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    return message;
  }
};