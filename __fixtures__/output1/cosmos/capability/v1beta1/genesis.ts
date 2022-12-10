import { CapabilityOwners, CapabilityOwnersSDKType } from "./capability";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.capability.v1beta1";

/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwners {
  /** index is the index of the capability owner. */
  index: Long;

  /** index_owners are the owners at the given index. */
  indexOwners?: CapabilityOwners;
}

/** GenesisOwners defines the capability owners with their corresponding index. */
export interface GenesisOwnersSDKType {
  /** index is the index of the capability owner. */
  index: Long;

  /** index_owners are the owners at the given index. */
  index_owners?: CapabilityOwnersSDKType;
}

/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  /** index is the capability global index. */
  index: Long;

  /**
   * owners represents a map from index to owners of the capability index
   * index key is string to allow amino marshalling.
   */
  owners: GenesisOwners[];
}

/** GenesisState defines the capability module's genesis state. */
export interface GenesisStateSDKType {
  /** index is the capability global index. */
  index: Long;

  /**
   * owners represents a map from index to owners of the capability index
   * index key is string to allow amino marshalling.
   */
  owners: GenesisOwnersSDKType[];
}

function createBaseGenesisOwners(): GenesisOwners {
  return {
    index: Long.UZERO,
    indexOwners: undefined
  };
}

export const GenesisOwners = {
  encode(message: GenesisOwners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }

    if (message.indexOwners !== undefined) {
      CapabilityOwners.encode(message.indexOwners, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisOwners {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisOwners();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = (reader.uint64() as Long);
          break;

        case 2:
          message.indexOwners = CapabilityOwners.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisOwners {
    return {
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
      indexOwners: isSet(object.indexOwners) ? CapabilityOwners.fromJSON(object.indexOwners) : undefined
    };
  },

  toJSON(message: GenesisOwners): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
    message.indexOwners !== undefined && (obj.indexOwners = message.indexOwners ? CapabilityOwners.toJSON(message.indexOwners) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisOwners>): GenesisOwners {
    const message = createBaseGenesisOwners();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.indexOwners = object.indexOwners !== undefined && object.indexOwners !== null ? CapabilityOwners.fromPartial(object.indexOwners) : undefined;
    return message;
  },

  fromSDK(object: GenesisOwnersSDKType): GenesisOwners {
    return {
      index: object?.index,
      indexOwners: object.index_owners ? CapabilityOwners.fromSDK(object.index_owners) : undefined
    };
  },

  toSDK(message: GenesisOwners): GenesisOwnersSDKType {
    const obj: any = {};
    obj.index = message.index;
    message.indexOwners !== undefined && (obj.index_owners = message.indexOwners ? CapabilityOwners.toSDK(message.indexOwners) : undefined);
    return obj;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    index: Long.UZERO,
    owners: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }

    for (const v of message.owners) {
      GenesisOwners.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = (reader.uint64() as Long);
          break;

        case 2:
          message.owners.push(GenesisOwners.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO,
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => GenesisOwners.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());

    if (message.owners) {
      obj.owners = message.owners.map(e => e ? GenesisOwners.toJSON(e) : undefined);
    } else {
      obj.owners = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    message.owners = object.owners?.map(e => GenesisOwners.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      index: object?.index,
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => GenesisOwners.fromSDK(e)) : []
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    obj.index = message.index;

    if (message.owners) {
      obj.owners = message.owners.map(e => e ? GenesisOwners.toSDK(e) : undefined);
    } else {
      obj.owners = [];
    }

    return obj;
  }

};