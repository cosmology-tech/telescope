import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "akash.base.v1beta2";
/** Attribute represents key value pair */
export interface Attribute {
  key: string;
  value: string;
}
export interface AttributeProtoMsg {
  typeUrl: "/akash.base.v1beta2.Attribute";
  value: Uint8Array;
}
/** Attribute represents key value pair */
export interface AttributeSDKType {
  key: string;
  value: string;
}
/**
 * SignedBy represents validation accounts that tenant expects signatures for provider attributes
 * AllOf has precedence i.e. if there is at least one entry AnyOf is ignored regardless to how many
 * entries there
 * this behaviour to be discussed
 */
export interface SignedBy {
  /** all_of all keys in this list must have signed attributes */
  allOf: string[];
  /** any_of at least of of the keys from the list must have signed attributes */
  anyOf: string[];
}
export interface SignedByProtoMsg {
  typeUrl: "/akash.base.v1beta2.SignedBy";
  value: Uint8Array;
}
/**
 * SignedBy represents validation accounts that tenant expects signatures for provider attributes
 * AllOf has precedence i.e. if there is at least one entry AnyOf is ignored regardless to how many
 * entries there
 * this behaviour to be discussed
 */
export interface SignedBySDKType {
  all_of: string[];
  any_of: string[];
}
/** PlacementRequirements */
export interface PlacementRequirements {
  /** SignedBy list of keys that tenants expect to have signatures from */
  signedBy: SignedBy;
  /** Attribute list of attributes tenant expects from the provider */
  attributes: Attribute[];
}
export interface PlacementRequirementsProtoMsg {
  typeUrl: "/akash.base.v1beta2.PlacementRequirements";
  value: Uint8Array;
}
/** PlacementRequirements */
export interface PlacementRequirementsSDKType {
  signed_by: SignedBySDKType;
  attributes: AttributeSDKType[];
}
function createBaseAttribute(): Attribute {
  return {
    key: "",
    value: ""
  };
}
export const Attribute = {
  typeUrl: "/akash.base.v1beta2.Attribute",
  encode(message: Attribute, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttribute();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: AttributeProtoMsg): Attribute {
    return Attribute.decode(message.value);
  },
  toProto(message: Attribute): Uint8Array {
    return Attribute.encode(message).finish();
  },
  toProtoMsg(message: Attribute): AttributeProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta2.Attribute",
      value: Attribute.encode(message).finish()
    };
  }
};
function createBaseSignedBy(): SignedBy {
  return {
    allOf: [],
    anyOf: []
  };
}
export const SignedBy = {
  typeUrl: "/akash.base.v1beta2.SignedBy",
  encode(message: SignedBy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.allOf) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.anyOf) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignedBy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedBy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allOf.push(reader.string());
          break;
        case 2:
          message.anyOf.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: SignedByProtoMsg): SignedBy {
    return SignedBy.decode(message.value);
  },
  toProto(message: SignedBy): Uint8Array {
    return SignedBy.encode(message).finish();
  },
  toProtoMsg(message: SignedBy): SignedByProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta2.SignedBy",
      value: SignedBy.encode(message).finish()
    };
  }
};
function createBasePlacementRequirements(): PlacementRequirements {
  return {
    signedBy: SignedBy.fromPartial({}),
    attributes: []
  };
}
export const PlacementRequirements = {
  typeUrl: "/akash.base.v1beta2.PlacementRequirements",
  encode(message: PlacementRequirements, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signedBy !== undefined) {
      SignedBy.encode(message.signedBy, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PlacementRequirements {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlacementRequirements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedBy = SignedBy.decode(reader, reader.uint32());
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
  fromProtoMsg(message: PlacementRequirementsProtoMsg): PlacementRequirements {
    return PlacementRequirements.decode(message.value);
  },
  toProto(message: PlacementRequirements): Uint8Array {
    return PlacementRequirements.encode(message).finish();
  },
  toProtoMsg(message: PlacementRequirements): PlacementRequirementsProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta2.PlacementRequirements",
      value: PlacementRequirements.encode(message).finish()
    };
  }
};