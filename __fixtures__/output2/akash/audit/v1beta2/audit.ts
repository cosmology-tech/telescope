//@ts-nocheck
/* eslint-disable */
import { Attribute } from "../../base/v1beta2/attribute";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Rpc } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "akash.audit.v1beta2";
/** Provider stores owner auditor and attributes details */
export interface Provider {
  owner: string;
  auditor: string;
  attributes: Attribute[];
}
/** Attributes */
export interface AuditedAttributes {
  owner: string;
  auditor: string;
  attributes: Attribute[];
}
/** AttributesResponse represents details of deployment along with group details */
export interface AttributesResponse {
  attributes: AuditedAttributes[];
}
/** AttributesFilters defines filters used to filter deployments */
export interface AttributesFilters {
  auditors: string[];
  owners: string[];
}
/** MsgSignProviderAttributes defines an SDK message for signing a provider attributes */
export interface MsgSignProviderAttributes {
  owner: string;
  auditor: string;
  attributes: Attribute[];
}
/** MsgSignProviderAttributesResponse defines the Msg/CreateProvider response type. */
export interface MsgSignProviderAttributesResponse {}
/** MsgDeleteProviderAttributes defined the Msg/DeleteProviderAttributes */
export interface MsgDeleteProviderAttributes {
  owner: string;
  auditor: string;
  keys: string[];
}
/** MsgDeleteProviderAttributesResponse defines the Msg/ProviderAttributes response type. */
export interface MsgDeleteProviderAttributesResponse {}
function createBaseProvider(): Provider {
  return {
    owner: "",
    auditor: "",
    attributes: []
  };
}
export const Provider = {
  encode(message: Provider, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Provider {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
          break;
        case 4:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Provider {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  toJSON(message: Provider): JsonSafe<Provider> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.auditor !== undefined && (obj.auditor = message.auditor);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<Provider>): Provider {
    const message = createBaseProvider();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAuditedAttributes(): AuditedAttributes {
  return {
    owner: "",
    auditor: "",
    attributes: []
  };
}
export const AuditedAttributes = {
  encode(message: AuditedAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AuditedAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuditedAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
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
  fromJSON(object: any): AuditedAttributes {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  toJSON(message: AuditedAttributes): JsonSafe<AuditedAttributes> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.auditor !== undefined && (obj.auditor = message.auditor);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AuditedAttributes>): AuditedAttributes {
    const message = createBaseAuditedAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAttributesResponse(): AttributesResponse {
  return {
    attributes: []
  };
}
export const AttributesResponse = {
  encode(message: AttributesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attributes) {
      AuditedAttributes.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attributes.push(AuditedAttributes.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AttributesResponse {
    return {
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => AuditedAttributes.fromJSON(e)) : []
    };
  },
  toJSON(message: AttributesResponse): JsonSafe<AttributesResponse> {
    const obj: any = {};
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? AuditedAttributes.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AttributesResponse>): AttributesResponse {
    const message = createBaseAttributesResponse();
    message.attributes = object.attributes?.map(e => AuditedAttributes.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAttributesFilters(): AttributesFilters {
  return {
    auditors: [],
    owners: []
  };
}
export const AttributesFilters = {
  encode(message: AttributesFilters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.auditors) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.owners) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AttributesFilters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributesFilters();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auditors.push(reader.string());
          break;
        case 2:
          message.owners.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AttributesFilters {
    return {
      auditors: Array.isArray(object?.auditors) ? object.auditors.map((e: any) => String(e)) : [],
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: AttributesFilters): JsonSafe<AttributesFilters> {
    const obj: any = {};
    if (message.auditors) {
      obj.auditors = message.auditors.map(e => e);
    } else {
      obj.auditors = [];
    }
    if (message.owners) {
      obj.owners = message.owners.map(e => e);
    } else {
      obj.owners = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<AttributesFilters>): AttributesFilters {
    const message = createBaseAttributesFilters();
    message.auditors = object.auditors?.map(e => e) || [];
    message.owners = object.owners?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgSignProviderAttributes(): MsgSignProviderAttributes {
  return {
    owner: "",
    auditor: "",
    attributes: []
  };
}
export const MsgSignProviderAttributes = {
  encode(message: MsgSignProviderAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignProviderAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignProviderAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
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
  fromJSON(object: any): MsgSignProviderAttributes {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => Attribute.fromJSON(e)) : []
    };
  },
  toJSON(message: MsgSignProviderAttributes): JsonSafe<MsgSignProviderAttributes> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.auditor !== undefined && (obj.auditor = message.auditor);
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSignProviderAttributes>): MsgSignProviderAttributes {
    const message = createBaseMsgSignProviderAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgSignProviderAttributesResponse(): MsgSignProviderAttributesResponse {
  return {};
}
export const MsgSignProviderAttributesResponse = {
  encode(_: MsgSignProviderAttributesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignProviderAttributesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignProviderAttributesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSignProviderAttributesResponse {
    return {};
  },
  toJSON(_: MsgSignProviderAttributesResponse): JsonSafe<MsgSignProviderAttributesResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSignProviderAttributesResponse>): MsgSignProviderAttributesResponse {
    const message = createBaseMsgSignProviderAttributesResponse();
    return message;
  }
};
function createBaseMsgDeleteProviderAttributes(): MsgDeleteProviderAttributes {
  return {
    owner: "",
    auditor: "",
    keys: []
  };
}
export const MsgDeleteProviderAttributes = {
  encode(message: MsgDeleteProviderAttributes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.auditor !== "") {
      writer.uint32(18).string(message.auditor);
    }
    for (const v of message.keys) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProviderAttributes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderAttributes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.auditor = reader.string();
          break;
        case 3:
          message.keys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeleteProviderAttributes {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      auditor: isSet(object.auditor) ? String(object.auditor) : "",
      keys: Array.isArray(object?.keys) ? object.keys.map((e: any) => String(e)) : []
    };
  },
  toJSON(message: MsgDeleteProviderAttributes): JsonSafe<MsgDeleteProviderAttributes> {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.auditor !== undefined && (obj.auditor = message.auditor);
    if (message.keys) {
      obj.keys = message.keys.map(e => e);
    } else {
      obj.keys = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDeleteProviderAttributes>): MsgDeleteProviderAttributes {
    const message = createBaseMsgDeleteProviderAttributes();
    message.owner = object.owner ?? "";
    message.auditor = object.auditor ?? "";
    message.keys = object.keys?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgDeleteProviderAttributesResponse(): MsgDeleteProviderAttributesResponse {
  return {};
}
export const MsgDeleteProviderAttributesResponse = {
  encode(_: MsgDeleteProviderAttributesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteProviderAttributesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderAttributesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDeleteProviderAttributesResponse {
    return {};
  },
  toJSON(_: MsgDeleteProviderAttributesResponse): JsonSafe<MsgDeleteProviderAttributesResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDeleteProviderAttributesResponse>): MsgDeleteProviderAttributesResponse {
    const message = createBaseMsgDeleteProviderAttributesResponse();
    return message;
  }
};
/** Msg defines the provider Msg service */
export interface Msg {
  /** SignProviderAttributes defines a method that signs provider attributes */
  SignProviderAttributes(request: MsgSignProviderAttributes): Promise<MsgSignProviderAttributesResponse>;
  /** DeleteProviderAttributes defines a method that deletes provider attributes */
  DeleteProviderAttributes(request: MsgDeleteProviderAttributes): Promise<MsgDeleteProviderAttributesResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SignProviderAttributes = this.SignProviderAttributes.bind(this);
    this.DeleteProviderAttributes = this.DeleteProviderAttributes.bind(this);
  }
  SignProviderAttributes(request: MsgSignProviderAttributes): Promise<MsgSignProviderAttributesResponse> {
    const data = MsgSignProviderAttributes.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Msg", "SignProviderAttributes", data);
    return promise.then(data => MsgSignProviderAttributesResponse.decode(new _m0.Reader(data)));
  }
  DeleteProviderAttributes(request: MsgDeleteProviderAttributes): Promise<MsgDeleteProviderAttributesResponse> {
    const data = MsgDeleteProviderAttributes.encode(request).finish();
    const promise = this.rpc.request("akash.audit.v1beta2.Msg", "DeleteProviderAttributes", data);
    return promise.then(data => MsgDeleteProviderAttributesResponse.decode(new _m0.Reader(data)));
  }
}