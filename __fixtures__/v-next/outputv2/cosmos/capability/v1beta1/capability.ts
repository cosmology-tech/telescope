import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.capability.v1beta1";
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface Capability {
  index: bigint;
}
export interface CapabilityProtoMsg {
  typeUrl: "/cosmos.capability.v1beta1.Capability";
  value: Uint8Array;
}
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface CapabilityAmino {
  index: string;
}
export interface CapabilityAminoMsg {
  type: "cosmos-sdk/Capability";
  value: CapabilityAmino;
}
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface CapabilitySDKType {
  index: bigint;
}
/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface Owner {
  module: string;
  name: string;
}
export interface OwnerProtoMsg {
  typeUrl: "/cosmos.capability.v1beta1.Owner";
  value: Uint8Array;
}
/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface OwnerAmino {
  module: string;
  name: string;
}
export interface OwnerAminoMsg {
  type: "cosmos-sdk/Owner";
  value: OwnerAmino;
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
export interface CapabilityOwnersProtoMsg {
  typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners";
  value: Uint8Array;
}
/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwnersAmino {
  owners: OwnerAmino[];
}
export interface CapabilityOwnersAminoMsg {
  type: "cosmos-sdk/CapabilityOwners";
  value: CapabilityOwnersAmino;
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
    index: BigInt(0)
  };
}
export const Capability = {
  typeUrl: "/cosmos.capability.v1beta1.Capability",
  aminoType: "cosmos-sdk/Capability",
  encode(message: Capability, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.index !== BigInt(0)) {
      writer.uint32(8).uint64(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Capability {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapability();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Capability {
    const obj = createBaseCapability();
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    return obj;
  },
  toJSON(message: Capability): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<Capability>): Capability {
    const message = createBaseCapability();
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
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
      index: BigInt(object.index)
    };
  },
  toAmino(message: Capability, useInterfaces: boolean = true): CapabilityAmino {
    const obj: any = {};
    obj.index = message.index ? message.index.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: CapabilityAminoMsg): Capability {
    return Capability.fromAmino(object.value);
  },
  toAminoMsg(message: Capability, useInterfaces: boolean = true): CapabilityAminoMsg {
    return {
      type: "cosmos-sdk/Capability",
      value: Capability.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: CapabilityProtoMsg, useInterfaces: boolean = true): Capability {
    return Capability.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Capability): Uint8Array {
    return Capability.encode(message).finish();
  },
  toProtoMsg(message: Capability): CapabilityProtoMsg {
    return {
      typeUrl: "/cosmos.capability.v1beta1.Capability",
      value: Capability.encode(message).finish()
    };
  }
};
function createBaseOwner(): Owner {
  return {
    module: "",
    name: ""
  };
}
export const Owner = {
  typeUrl: "/cosmos.capability.v1beta1.Owner",
  aminoType: "cosmos-sdk/Owner",
  encode(message: Owner, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.module !== "") {
      writer.uint32(10).string(message.module);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Owner {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const obj = createBaseOwner();
    if (isSet(object.module)) obj.module = String(object.module);
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
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
  toAmino(message: Owner, useInterfaces: boolean = true): OwnerAmino {
    const obj: any = {};
    obj.module = message.module;
    obj.name = message.name;
    return obj;
  },
  fromAminoMsg(object: OwnerAminoMsg): Owner {
    return Owner.fromAmino(object.value);
  },
  toAminoMsg(message: Owner, useInterfaces: boolean = true): OwnerAminoMsg {
    return {
      type: "cosmos-sdk/Owner",
      value: Owner.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: OwnerProtoMsg, useInterfaces: boolean = true): Owner {
    return Owner.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Owner): Uint8Array {
    return Owner.encode(message).finish();
  },
  toProtoMsg(message: Owner): OwnerProtoMsg {
    return {
      typeUrl: "/cosmos.capability.v1beta1.Owner",
      value: Owner.encode(message).finish()
    };
  }
};
function createBaseCapabilityOwners(): CapabilityOwners {
  return {
    owners: []
  };
}
export const CapabilityOwners = {
  typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
  aminoType: "cosmos-sdk/CapabilityOwners",
  encode(message: CapabilityOwners, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.owners) {
      Owner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): CapabilityOwners {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCapabilityOwners();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owners.push(Owner.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CapabilityOwners {
    const obj = createBaseCapabilityOwners();
    if (Array.isArray(object?.owners)) obj.owners = object.owners.map((e: any) => Owner.fromJSON(e));
    return obj;
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
  toAmino(message: CapabilityOwners, useInterfaces: boolean = true): CapabilityOwnersAmino {
    const obj: any = {};
    if (message.owners) {
      obj.owners = message.owners.map(e => e ? Owner.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.owners = [];
    }
    return obj;
  },
  fromAminoMsg(object: CapabilityOwnersAminoMsg): CapabilityOwners {
    return CapabilityOwners.fromAmino(object.value);
  },
  toAminoMsg(message: CapabilityOwners, useInterfaces: boolean = true): CapabilityOwnersAminoMsg {
    return {
      type: "cosmos-sdk/CapabilityOwners",
      value: CapabilityOwners.toAmino(message, useInterfaces)
    };
  },
  fromProtoMsg(message: CapabilityOwnersProtoMsg, useInterfaces: boolean = true): CapabilityOwners {
    return CapabilityOwners.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: CapabilityOwners): Uint8Array {
    return CapabilityOwners.encode(message).finish();
  },
  toProtoMsg(message: CapabilityOwners): CapabilityOwnersProtoMsg {
    return {
      typeUrl: "/cosmos.capability.v1beta1.CapabilityOwners",
      value: CapabilityOwners.encode(message).finish()
    };
  }
};