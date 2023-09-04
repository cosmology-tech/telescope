//@ts-nocheck
/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "akash.base.v1beta1";
/** Attribute represents key value pair */
export interface Attribute {
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
/** PlacementRequirements */
export interface PlacementRequirements {
  /** SignedBy list of keys that tenants expect to have signatures from */
  signedBy: SignedBy;
  /** Attribute list of attributes tenant expects from the provider */
  attributes: Attribute[];
}
function createBaseAttribute(): Attribute {
  return {
    key: "",
    value: ""
  };
}
export const Attribute = {
  encode(message: Attribute, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): Attribute {
    const obj = createBaseAttribute();
    if (isSet(object.key)) obj.key = String(object.key);
    if (isSet(object.value)) obj.value = String(object.value);
    return obj;
  },
  toJSON(message: Attribute): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: DeepPartial<Attribute>): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseSignedBy(): SignedBy {
  return {
    allOf: [],
    anyOf: []
  };
}
export const SignedBy = {
  encode(message: SignedBy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allOf) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.anyOf) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SignedBy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): SignedBy {
    const obj = createBaseSignedBy();
    if (Array.isArray(object?.allOf)) object.allOf.map((e: any) => String(e));
    if (Array.isArray(object?.anyOf)) object.anyOf.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: SignedBy): unknown {
    const obj: any = {};
    if (message.allOf) {
      obj.allOf = message.allOf.map(e => e);
    } else {
      obj.allOf = [];
    }
    if (message.anyOf) {
      obj.anyOf = message.anyOf.map(e => e);
    } else {
      obj.anyOf = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<SignedBy>): SignedBy {
    const message = createBaseSignedBy();
    message.allOf = object.allOf?.map(e => e) || [];
    message.anyOf = object.anyOf?.map(e => e) || [];
    return message;
  }
};
function createBasePlacementRequirements(): PlacementRequirements {
  return {
    signedBy: SignedBy.fromPartial({}),
    attributes: []
  };
}
export const PlacementRequirements = {
  encode(message: PlacementRequirements, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signedBy !== undefined) {
      SignedBy.encode(message.signedBy, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PlacementRequirements {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): PlacementRequirements {
    const obj = createBasePlacementRequirements();
    if (isSet(object.signedBy)) obj.signedBy = SignedBy.fromJSON(object.signedBy);
    if (Array.isArray(object?.attributes)) object.attributes.map((e: any) => Attribute.fromJSON(e));
    return obj;
  },
  toJSON(message: PlacementRequirements): unknown {
    const obj: any = {};
    message.signedBy !== undefined && (obj.signedBy = message.signedBy ? SignedBy.toJSON(message.signedBy) : undefined);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<PlacementRequirements>): PlacementRequirements {
    const message = createBasePlacementRequirements();
    if (object.signedBy !== undefined && object.signedBy !== null) {
      message.signedBy = SignedBy.fromPartial(object.signedBy);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  }
};