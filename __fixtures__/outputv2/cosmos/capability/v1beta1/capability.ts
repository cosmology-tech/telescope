import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.capability.v1beta1";

/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface Capability {
  index: Long;
}

/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface CapabilityAmino {
  index: string;
}

/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface CapabilitySDKType {
  index: Long;
}

/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface Owner {
  module: string;
  name: string;
}

/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface OwnerAmino {
  module: string;
  name: string;
}

/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface OwnerSDKType {
  module: string;
  name: string;
}

/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwners {
  owners: Owner[];
}

/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwnersAmino {
  owners: OwnerAmino[];
}

/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwnersSDKType {
  owners: OwnerSDKType[];
}

function createBaseCapability(): Capability {
  return {
    index: Long.UZERO
  };
}

export const Capability = {
  encode(message: Capability, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.index.isZero()) {
      writer.uint32(8).uint64(message.index);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Capability {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapability();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.index = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Capability {
    return {
      index: isSet(object.index) ? Long.fromValue(object.index) : Long.UZERO
    };
  },

  toJSON(message: Capability): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Capability>): Capability {
    const message = createBaseCapability();
    message.index = object.index !== undefined && object.index !== null ? Long.fromValue(object.index) : Long.UZERO;
    return message;
  },

  fromSDK(object: CapabilitySDKType): Capability {
    return {
      index: object?.index
    };
  },

  toSDK(message: Capability): CapabilitySDKType {
    const obj: any = {};
    obj.index = message.index;
    return obj;
  },

  fromAmino(object: CapabilityAmino): Capability {
    return {
      index: Long.fromString(object.index)
    };
  },

  toAmino(message: Capability): CapabilityAmino {
    const obj: any = {};
    obj.index = message.index ? message.index.toString() : undefined;
    return obj;
  }

};

function createBaseOwner(): Owner {
  return {
    module: "",
    name: ""
  };
}

export const Owner = {
  encode(message: Owner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Owner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwner();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.module = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Owner {
    return {
      module: isSet(object.module) ? String(object.module) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },

  toJSON(message: Owner): unknown {
    const obj: any = {};
    message.module !== undefined && (obj.module = message.module);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<Owner>): Owner {
    const message = createBaseOwner();
    message.module = object.module ?? "";
    message.name = object.name ?? "";
    return message;
  },

  fromSDK(object: OwnerSDKType): Owner {
    return {
      module: object?.module,
      name: object?.name
    };
  },

  toSDK(message: Owner): OwnerSDKType {
    const obj: any = {};
    obj.module = message.module;
    obj.name = message.name;
    return obj;
  },

  fromAmino(object: OwnerAmino): Owner {
    return {
      module: object.module,
      name: object.name
    };
  },

  toAmino(message: Owner): OwnerAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.name = message.name;
    return obj;
  }

};

function createBaseCapabilityOwners(): CapabilityOwners {
  return {
    owners: []
  };
}

export const CapabilityOwners = {
  encode(message: CapabilityOwners, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.owners) {
      Owner.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CapabilityOwners {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapabilityOwners();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owners.push(Owner.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CapabilityOwners {
    return {
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => Owner.fromJSON(e)) : []
    };
  },

  toJSON(message: CapabilityOwners): unknown {
    const obj: any = {};

    if (message.owners) {
      obj.owners = message.owners.map(e => e ? Owner.toJSON(e) : undefined);
    } else {
      obj.owners = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<CapabilityOwners>): CapabilityOwners {
    const message = createBaseCapabilityOwners();
    message.owners = object.owners?.map(e => Owner.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: CapabilityOwnersSDKType): CapabilityOwners {
    return {
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => Owner.fromSDK(e)) : []
    };
  },

  toSDK(message: CapabilityOwners): CapabilityOwnersSDKType {
    const obj: any = {};

    if (message.owners) {
      obj.owners = message.owners.map(e => e ? Owner.toSDK(e) : undefined);
    } else {
      obj.owners = [];
    }

    return obj;
  },

  fromAmino(object: CapabilityOwnersAmino): CapabilityOwners {
    return {
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => Owner.fromAmino(e)) : []
    };
  },

  toAmino(message: CapabilityOwners): CapabilityOwnersAmino {
    const obj: any = {};

    if (message.owners) {
      obj.owners = message.owners.map(e => e ? Owner.toAmino(e) : undefined);
    } else {
      obj.owners = [];
    }

    return obj;
  }

};