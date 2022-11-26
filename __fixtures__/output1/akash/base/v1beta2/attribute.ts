import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Exact } from "../../../helpers";
export const protobufPackage = "akash.base.v1beta2";

/** Attribute represents key value pair */
export interface Attribute {
  key: string;
  value: string;
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

/**
 * SignedBy represents validation accounts that tenant expects signatures for provider attributes
 * AllOf has precedence i.e. if there is at least one entry AnyOf is ignored regardless to how many
 * entries there
 * this behaviour to be discussed
 */
export interface SignedBySDKType {
  /** all_of all keys in this list must have signed attributes */
  all_of: string[];

  /** any_of at least of of the keys from the list must have signed attributes */
  any_of: string[];
}

/** PlacementRequirements */
export interface PlacementRequirements {
  /** SignedBy list of keys that tenants expect to have signatures from */
  signedBy?: SignedBy;

  /** Attribute list of attributes tenant expects from the provider */
  attributes: Attribute[];
}

/** PlacementRequirements */
export interface PlacementRequirementsSDKType {
  /** SignedBy list of keys that tenants expect to have signatures from */
  signed_by?: SignedBySDKType;

  /** Attribute list of attributes tenant expects from the provider */
  attributes: AttributeSDKType[];
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
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Attribute>, I>>(object: I): Attribute {
    const message = createBaseAttribute();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },

  fromSDK(object: AttributeSDKType): Attribute {
    return {
      key: isSet(object.key) ? object.key : undefined,
      value: isSet(object.value) ? object.value : undefined
    };
  },

  toSDK(message: Attribute): AttributeSDKType {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromAmino(object: AttributeSDKType): Attribute {
    return {
      key: isSet(object.key) ? object.key : undefined,
      value: isSet(object.value) ? object.value : undefined
    };
  },

  toAmino(message: Attribute): AttributeSDKType {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
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
    return {
      allOf: Array.isArray(object?.allOf) ? object.allOf.map((e: any) => String(e)) : [],
      anyOf: Array.isArray(object?.anyOf) ? object.anyOf.map((e: any) => String(e)) : []
    };
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

  fromPartial<I extends Exact<DeepPartial<SignedBy>, I>>(object: I): SignedBy {
    const message = createBaseSignedBy();
    message.allOf = object.allOf?.map(e => e) || [];
    message.anyOf = object.anyOf?.map(e => e) || [];
    return message;
  },

  fromSDK(object: SignedBySDKType): SignedBy {
    return {
      allOf: Array.isArray(object?.all_of) ? object.all_of.map((e: any) => e) : [],
      anyOf: Array.isArray(object?.any_of) ? object.any_of.map((e: any) => e) : []
    };
  },

  toSDK(message: SignedBy): SignedBySDKType {
    const obj: any = {};

    if (message.allOf) {
      obj.all_of = message.allOf.map(e => e);
    } else {
      obj.all_of = [];
    }

    if (message.anyOf) {
      obj.any_of = message.anyOf.map(e => e);
    } else {
      obj.any_of = [];
    }

    return obj;
  },

  fromAmino(object: SignedBySDKType): SignedBy {
    return {
      allOf: Array.isArray(object?.all_of) ? object.all_of.map((e: any) => e) : [],
      anyOf: Array.isArray(object?.any_of) ? object.any_of.map((e: any) => e) : []
    };
  },

  toAmino(message: SignedBy): SignedBySDKType {
    const obj: any = {};

    if (message.allOf) {
      obj.all_of = message.allOf.map(e => e);
    } else {
      obj.all_of = [];
    }

    if (message.anyOf) {
      obj.any_of = message.anyOf.map(e => e);
    } else {
      obj.any_of = [];
    }

    return obj;
  }

};

function createBasePlacementRequirements(): PlacementRequirements {
  return {
    signedBy: undefined,
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
    return {
      signedBy: isSet(object.signedBy) ? SignedBy.fromJSON(object.signedBy) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
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

  fromPartial<I extends Exact<DeepPartial<PlacementRequirements>, I>>(object: I): PlacementRequirements {
    const message = createBasePlacementRequirements();
    message.signedBy = object.signedBy !== undefined && object.signedBy !== null ? SignedBy.fromPartial(object.signedBy) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: PlacementRequirementsSDKType): PlacementRequirements {
    return {
      signedBy: isSet(object.signed_by) ? SignedBy.fromSDK(object.signed_by) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromSDK(e)) : []
    };
  },

  toSDK(message: PlacementRequirements): PlacementRequirementsSDKType {
    const obj: any = {};
    message.signedBy !== undefined && (obj.signed_by = message.signedBy ? SignedBy.toSDK(message.signedBy) : undefined);

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toSDK(e) : undefined);
    } else {
      obj.attributes = [];
    }

    return obj;
  },

  fromAmino(object: PlacementRequirementsSDKType): PlacementRequirements {
    return {
      signedBy: isSet(object.signed_by) ? SignedBy.fromAmino(object.signed_by) : undefined,
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromAmino(e)) : []
    };
  },

  toAmino(message: PlacementRequirements): PlacementRequirementsSDKType {
    const obj: any = {};
    message.signedBy !== undefined && (obj.signed_by = message.signedBy ? SignedBy.toAmino(message.signedBy) : undefined);

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = [];
    }

    return obj;
  }

};