import { Struct } from "../../protobuf/struct";
import { Timestamp } from "../../protobuf/timestamp";
import { Duration } from "../../protobuf/duration";
import { Any } from "../../protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, Long, isObject, toTimestamp, fromTimestamp, fromJsonTimestamp, toDuration, fromDuration } from "@osmonauts/helpers";
export interface AttributeContext {
  origin: AttributeContext_Peer;
  source: AttributeContext_Peer;
  destination: AttributeContext_Peer;
  request: AttributeContext_Request;
  response: AttributeContext_Response;
  resource: AttributeContext_Resource;
  api: AttributeContext_Api;
  extensions: Any[];
}

function createBaseAttributeContext(): AttributeContext {
  return {
    origin: undefined,
    source: undefined,
    destination: undefined,
    request: undefined,
    response: undefined,
    resource: undefined,
    api: undefined,
    extensions: []
  };
}

export const AttributeContext = {
  encode(message: AttributeContext, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.origin !== undefined) {
      AttributeContext_Peer.encode(message.origin, writer.uint32(58).fork()).ldelim();
    }

    if (message.source !== undefined) {
      AttributeContext_Peer.encode(message.source, writer.uint32(10).fork()).ldelim();
    }

    if (message.destination !== undefined) {
      AttributeContext_Peer.encode(message.destination, writer.uint32(18).fork()).ldelim();
    }

    if (message.request !== undefined) {
      AttributeContext_Request.encode(message.request, writer.uint32(26).fork()).ldelim();
    }

    if (message.response !== undefined) {
      AttributeContext_Response.encode(message.response, writer.uint32(34).fork()).ldelim();
    }

    if (message.resource !== undefined) {
      AttributeContext_Resource.encode(message.resource, writer.uint32(42).fork()).ldelim();
    }

    if (message.api !== undefined) {
      AttributeContext_Api.encode(message.api, writer.uint32(50).fork()).ldelim();
    }

    for (const v of message.extensions) {
      Any.encode(v!, writer.uint32(66).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 7:
          message.origin = AttributeContext_Peer.decode(reader, reader.uint32());
          break;

        case 1:
          message.source = AttributeContext_Peer.decode(reader, reader.uint32());
          break;

        case 2:
          message.destination = AttributeContext_Peer.decode(reader, reader.uint32());
          break;

        case 3:
          message.request = AttributeContext_Request.decode(reader, reader.uint32());
          break;

        case 4:
          message.response = AttributeContext_Response.decode(reader, reader.uint32());
          break;

        case 5:
          message.resource = AttributeContext_Resource.decode(reader, reader.uint32());
          break;

        case 6:
          message.api = AttributeContext_Api.decode(reader, reader.uint32());
          break;

        case 8:
          message.extensions.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AttributeContext {
    return {
      origin: isSet(object.origin) ? AttributeContext_Peer.fromJSON(object.origin) : undefined,
      source: isSet(object.source) ? AttributeContext_Peer.fromJSON(object.source) : undefined,
      destination: isSet(object.destination) ? AttributeContext_Peer.fromJSON(object.destination) : undefined,
      request: isSet(object.request) ? AttributeContext_Request.fromJSON(object.request) : undefined,
      response: isSet(object.response) ? AttributeContext_Response.fromJSON(object.response) : undefined,
      resource: isSet(object.resource) ? AttributeContext_Resource.fromJSON(object.resource) : undefined,
      api: isSet(object.api) ? AttributeContext_Api.fromJSON(object.api) : undefined,
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: AttributeContext): unknown {
    const obj: any = {};
    message.origin !== undefined && (obj.origin = message.origin ? AttributeContext_Peer.toJSON(message.origin) : undefined);
    message.source !== undefined && (obj.source = message.source ? AttributeContext_Peer.toJSON(message.source) : undefined);
    message.destination !== undefined && (obj.destination = message.destination ? AttributeContext_Peer.toJSON(message.destination) : undefined);
    message.request !== undefined && (obj.request = message.request ? AttributeContext_Request.toJSON(message.request) : undefined);
    message.response !== undefined && (obj.response = message.response ? AttributeContext_Response.toJSON(message.response) : undefined);
    message.resource !== undefined && (obj.resource = message.resource ? AttributeContext_Resource.toJSON(message.resource) : undefined);
    message.api !== undefined && (obj.api = message.api ? AttributeContext_Api.toJSON(message.api) : undefined);

    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.extensions = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttributeContext>, I>>(object: I): AttributeContext {
    const message = createBaseAttributeContext();
    message.origin = object.origin !== undefined && object.origin !== null ? AttributeContext_Peer.fromPartial(object.origin) : undefined;
    message.source = object.source !== undefined && object.source !== null ? AttributeContext_Peer.fromPartial(object.source) : undefined;
    message.destination = object.destination !== undefined && object.destination !== null ? AttributeContext_Peer.fromPartial(object.destination) : undefined;
    message.request = object.request !== undefined && object.request !== null ? AttributeContext_Request.fromPartial(object.request) : undefined;
    message.response = object.response !== undefined && object.response !== null ? AttributeContext_Response.fromPartial(object.response) : undefined;
    message.resource = object.resource !== undefined && object.resource !== null ? AttributeContext_Resource.fromPartial(object.resource) : undefined;
    message.api = object.api !== undefined && object.api !== null ? AttributeContext_Api.fromPartial(object.api) : undefined;
    message.extensions = object.extensions?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};
export interface Peer_LabelsEntry {
  key: string;
  value: string;
}

function createBasePeer_LabelsEntry(): Peer_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}

export const Peer_LabelsEntry = {
  encode(message: Peer_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Peer_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeer_LabelsEntry();

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

  fromJSON(object: any): Peer_LabelsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: Peer_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Peer_LabelsEntry>, I>>(object: I): Peer_LabelsEntry {
    const message = createBasePeer_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};
export interface Peer {
  ip: string;
  port: Long;
  labels: {
    [key: string]: string;
  };
  principal: string;
  regionCode: string;
}

function createBasePeer(): Peer {
  return {
    ip: "",
    port: Long.ZERO,
    labels: {},
    principal: "",
    regionCode: ""
  };
}

export const Peer = {
  encode(message: Peer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ip !== "") {
      writer.uint32(10).string(message.ip);
    }

    if (!message.port.isZero()) {
      writer.uint32(16).int64(message.port);
    }

    Object.entries(message.labels).forEach(([key, value]) => {
      Peer_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(50).fork()).ldelim();
    });

    if (message.principal !== "") {
      writer.uint32(58).string(message.principal);
    }

    if (message.regionCode !== "") {
      writer.uint32(66).string(message.regionCode);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Peer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeer();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.ip = reader.string();
          break;

        case 2:
          message.port = (reader.int64() as Long);
          break;

        case 6:
          const entry6 = Peer_LabelsEntry.decode(reader, reader.uint32());

          if (entry6.value !== undefined) {
            message.labels[entry6.key] = entry6.value;
          }

          break;

        case 7:
          message.principal = reader.string();
          break;

        case 8:
          message.regionCode = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Peer {
    return {
      ip: isSet(object.ip) ? String(object.ip) : "",
      port: isSet(object.port) ? Long.fromString(object.port) : Long.ZERO,
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      principal: isSet(object.principal) ? String(object.principal) : "",
      regionCode: isSet(object.regionCode) ? String(object.regionCode) : ""
    };
  },

  toJSON(message: Peer): unknown {
    const obj: any = {};
    message.ip !== undefined && (obj.ip = message.ip);
    message.port !== undefined && (obj.port = (message.port || Long.ZERO).toString());
    obj.labels = {};

    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }

    message.principal !== undefined && (obj.principal = message.principal);
    message.regionCode !== undefined && (obj.regionCode = message.regionCode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Peer>, I>>(object: I): Peer {
    const message = createBasePeer();
    message.ip = object.ip ?? "";
    message.port = object.port !== undefined && object.port !== null ? Long.fromValue(object.port) : Long.ZERO;
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.principal = object.principal ?? "";
    message.regionCode = object.regionCode ?? "";
    return message;
  }

};
export interface AttributeContext_Api {
  service: string;
  operation: string;
  protocol: string;
  version: string;
}

function createBaseAttributeContext_Api(): AttributeContext_Api {
  return {
    service: "",
    operation: "",
    protocol: "",
    version: ""
  };
}

export const AttributeContext_Api = {
  encode(message: AttributeContext_Api, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }

    if (message.operation !== "") {
      writer.uint32(18).string(message.operation);
    }

    if (message.protocol !== "") {
      writer.uint32(26).string(message.protocol);
    }

    if (message.version !== "") {
      writer.uint32(34).string(message.version);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Api {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Api();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;

        case 2:
          message.operation = reader.string();
          break;

        case 3:
          message.protocol = reader.string();
          break;

        case 4:
          message.version = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AttributeContext_Api {
    return {
      service: isSet(object.service) ? String(object.service) : "",
      operation: isSet(object.operation) ? String(object.operation) : "",
      protocol: isSet(object.protocol) ? String(object.protocol) : "",
      version: isSet(object.version) ? String(object.version) : ""
    };
  },

  toJSON(message: AttributeContext_Api): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service);
    message.operation !== undefined && (obj.operation = message.operation);
    message.protocol !== undefined && (obj.protocol = message.protocol);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttributeContext_Api>, I>>(object: I): AttributeContext_Api {
    const message = createBaseAttributeContext_Api();
    message.service = object.service ?? "";
    message.operation = object.operation ?? "";
    message.protocol = object.protocol ?? "";
    message.version = object.version ?? "";
    return message;
  }

};
export interface AttributeContext_Auth {
  principal: string;
  audiences: string[];
  presenter: string;
  claims: Struct;
  accessLevels: string[];
}

function createBaseAttributeContext_Auth(): AttributeContext_Auth {
  return {
    principal: "",
    audiences: [],
    presenter: "",
    claims: undefined,
    accessLevels: []
  };
}

export const AttributeContext_Auth = {
  encode(message: AttributeContext_Auth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.principal !== "") {
      writer.uint32(10).string(message.principal);
    }

    for (const v of message.audiences) {
      writer.uint32(18).string(v!);
    }

    if (message.presenter !== "") {
      writer.uint32(26).string(message.presenter);
    }

    if (message.claims !== undefined) {
      Struct.encode(message.claims, writer.uint32(34).fork()).ldelim();
    }

    for (const v of message.accessLevels) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AttributeContext_Auth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttributeContext_Auth();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.principal = reader.string();
          break;

        case 2:
          message.audiences.push(reader.string());

        case 3:
          message.presenter = reader.string();
          break;

        case 4:
          message.claims = Struct.decode(reader, reader.uint32());
          break;

        case 5:
          message.accessLevels.push(reader.string());

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AttributeContext_Auth {
    return {
      principal: isSet(object.principal) ? String(object.principal) : "",
      audiences: Array.isArray(object?.audiences) ? object.audiences.map((e: any) => String(e)) : [],
      presenter: isSet(object.presenter) ? String(object.presenter) : "",
      claims: isSet(object.claims) ? Struct.fromJSON(object.claims) : undefined,
      accessLevels: Array.isArray(object?.accessLevels) ? object.accessLevels.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: AttributeContext_Auth): unknown {
    const obj: any = {};
    message.principal !== undefined && (obj.principal = message.principal);

    if (message.audiences) {
      obj.audiences = message.audiences.map(e => e);
    } else {
      obj.audiences = [];
    }

    message.presenter !== undefined && (obj.presenter = message.presenter);
    message.claims !== undefined && (obj.claims = message.claims ? Struct.toJSON(message.claims) : undefined);

    if (message.accessLevels) {
      obj.accessLevels = message.accessLevels.map(e => e);
    } else {
      obj.accessLevels = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AttributeContext_Auth>, I>>(object: I): AttributeContext_Auth {
    const message = createBaseAttributeContext_Auth();
    message.principal = object.principal ?? "";
    message.audiences = object.audiences?.map(e => e) || [];
    message.presenter = object.presenter ?? "";
    message.claims = object.claims !== undefined && object.claims !== null ? Struct.fromPartial(object.claims) : undefined;
    message.accessLevels = object.accessLevels?.map(e => e) || [];
    return message;
  }

};
export interface Request_HeadersEntry {
  key: string;
  value: string;
}

function createBaseRequest_HeadersEntry(): Request_HeadersEntry {
  return {
    key: "",
    value: ""
  };
}

export const Request_HeadersEntry = {
  encode(message: Request_HeadersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request_HeadersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest_HeadersEntry();

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

  fromJSON(object: any): Request_HeadersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: Request_HeadersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request_HeadersEntry>, I>>(object: I): Request_HeadersEntry {
    const message = createBaseRequest_HeadersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};
export interface Request {
  id: string;
  method: string;
  headers: {
    [key: string]: string;
  };
  path: string;
  host: string;
  scheme: string;
  query: string;
  time: Date;
  size: Long;
  protocol: string;
  reason: string;
  auth: AttributeContext_Auth;
}

function createBaseRequest(): Request {
  return {
    id: "",
    method: "",
    headers: {},
    path: "",
    host: "",
    scheme: "",
    query: "",
    time: undefined,
    size: Long.ZERO,
    protocol: "",
    reason: "",
    auth: undefined
  };
}

export const Request = {
  encode(message: Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }

    if (message.method !== "") {
      writer.uint32(18).string(message.method);
    }

    Object.entries(message.headers).forEach(([key, value]) => {
      Request_HeadersEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });

    if (message.path !== "") {
      writer.uint32(34).string(message.path);
    }

    if (message.host !== "") {
      writer.uint32(42).string(message.host);
    }

    if (message.scheme !== "") {
      writer.uint32(50).string(message.scheme);
    }

    if (message.query !== "") {
      writer.uint32(58).string(message.query);
    }

    if (message.time !== undefined) Timestamp.encode(toTimestamp(message.time), writer.uint32(74).fork()).ldelim();

    if (!message.size.isZero()) {
      writer.uint32(80).int64(message.size);
    }

    if (message.protocol !== "") {
      writer.uint32(90).string(message.protocol);
    }

    if (message.reason !== "") {
      writer.uint32(98).string(message.reason);
    }

    if (message.auth !== undefined) {
      AttributeContext_Auth.encode(message.auth, writer.uint32(106).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;

        case 2:
          message.method = reader.string();
          break;

        case 3:
          const entry3 = Request_HeadersEntry.decode(reader, reader.uint32());

          if (entry3.value !== undefined) {
            message.headers[entry3.key] = entry3.value;
          }

          break;

        case 4:
          message.path = reader.string();
          break;

        case 5:
          message.host = reader.string();
          break;

        case 6:
          message.scheme = reader.string();
          break;

        case 7:
          message.query = reader.string();
          break;

        case 9:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 10:
          message.size = (reader.int64() as Long);
          break;

        case 11:
          message.protocol = reader.string();
          break;

        case 12:
          message.reason = reader.string();
          break;

        case 13:
          message.auth = AttributeContext_Auth.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Request {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      method: isSet(object.method) ? String(object.method) : "",
      headers: isObject(object.headers) ? Object.entries(object.headers).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      path: isSet(object.path) ? String(object.path) : "",
      host: isSet(object.host) ? String(object.host) : "",
      scheme: isSet(object.scheme) ? String(object.scheme) : "",
      query: isSet(object.query) ? String(object.query) : "",
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      size: isSet(object.size) ? Long.fromString(object.size) : Long.ZERO,
      protocol: isSet(object.protocol) ? String(object.protocol) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
      auth: isSet(object.auth) ? AttributeContext_Auth.fromJSON(object.auth) : undefined
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.method !== undefined && (obj.method = message.method);
    obj.headers = {};

    if (message.headers) {
      Object.entries(message.headers).forEach(([k, v]) => {
        obj.headers[k] = v;
      });
    }

    message.path !== undefined && (obj.path = message.path);
    message.host !== undefined && (obj.host = message.host);
    message.scheme !== undefined && (obj.scheme = message.scheme);
    message.query !== undefined && (obj.query = message.query);
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.size !== undefined && (obj.size = (message.size || Long.ZERO).toString());
    message.protocol !== undefined && (obj.protocol = message.protocol);
    message.reason !== undefined && (obj.reason = message.reason);
    message.auth !== undefined && (obj.auth = message.auth ? AttributeContext_Auth.toJSON(message.auth) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.id = object.id ?? "";
    message.method = object.method ?? "";
    message.headers = Object.entries(object.headers ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.path = object.path ?? "";
    message.host = object.host ?? "";
    message.scheme = object.scheme ?? "";
    message.query = object.query ?? "";
    message.time = object.time ?? undefined;
    message.size = object.size !== undefined && object.size !== null ? Long.fromValue(object.size) : Long.ZERO;
    message.protocol = object.protocol ?? "";
    message.reason = object.reason ?? "";
    message.auth = object.auth !== undefined && object.auth !== null ? AttributeContext_Auth.fromPartial(object.auth) : undefined;
    return message;
  }

};
export interface Response_HeadersEntry {
  key: string;
  value: string;
}

function createBaseResponse_HeadersEntry(): Response_HeadersEntry {
  return {
    key: "",
    value: ""
  };
}

export const Response_HeadersEntry = {
  encode(message: Response_HeadersEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response_HeadersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse_HeadersEntry();

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

  fromJSON(object: any): Response_HeadersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: Response_HeadersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response_HeadersEntry>, I>>(object: I): Response_HeadersEntry {
    const message = createBaseResponse_HeadersEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};
export interface Response {
  code: Long;
  size: Long;
  headers: {
    [key: string]: string;
  };
  time: Date;
  backendLatency: string;
}

function createBaseResponse(): Response {
  return {
    code: Long.ZERO,
    size: Long.ZERO,
    headers: {},
    time: undefined,
    backendLatency: undefined
  };
}

export const Response = {
  encode(message: Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.code.isZero()) {
      writer.uint32(8).int64(message.code);
    }

    if (!message.size.isZero()) {
      writer.uint32(16).int64(message.size);
    }

    Object.entries(message.headers).forEach(([key, value]) => {
      Response_HeadersEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.time !== undefined) Timestamp.encode(toTimestamp(message.time), writer.uint32(34).fork()).ldelim();
    if (message.backendLatency !== undefined) Duration.encode(toDuration(message.backendLatency), writer.uint32(42).fork()).ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = (reader.int64() as Long);
          break;

        case 2:
          message.size = (reader.int64() as Long);
          break;

        case 3:
          const entry3 = Response_HeadersEntry.decode(reader, reader.uint32());

          if (entry3.value !== undefined) {
            message.headers[entry3.key] = entry3.value;
          }

          break;

        case 4:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 5:
          message.backendLatency = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Response {
    return {
      code: isSet(object.code) ? Long.fromString(object.code) : Long.ZERO,
      size: isSet(object.size) ? Long.fromString(object.size) : Long.ZERO,
      headers: isObject(object.headers) ? Object.entries(object.headers).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      backendLatency: isSet(object.backendLatency) ? String(object.backendLatency) : undefined
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = (message.code || Long.ZERO).toString());
    message.size !== undefined && (obj.size = (message.size || Long.ZERO).toString());
    obj.headers = {};

    if (message.headers) {
      Object.entries(message.headers).forEach(([k, v]) => {
        obj.headers[k] = v;
      });
    }

    message.time !== undefined && (obj.time = message.time.toISOString());
    message.backendLatency !== undefined && (obj.backendLatency = message.backendLatency);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.code = object.code !== undefined && object.code !== null ? Long.fromValue(object.code) : Long.ZERO;
    message.size = object.size !== undefined && object.size !== null ? Long.fromValue(object.size) : Long.ZERO;
    message.headers = Object.entries(object.headers ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.time = object.time ?? undefined;
    message.backendLatency = object.backendLatency ?? undefined;
    return message;
  }

};
export interface Resource_LabelsEntry {
  key: string;
  value: string;
}

function createBaseResource_LabelsEntry(): Resource_LabelsEntry {
  return {
    key: "",
    value: ""
  };
}

export const Resource_LabelsEntry = {
  encode(message: Resource_LabelsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource_LabelsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource_LabelsEntry();

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

  fromJSON(object: any): Resource_LabelsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: Resource_LabelsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Resource_LabelsEntry>, I>>(object: I): Resource_LabelsEntry {
    const message = createBaseResource_LabelsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};
export interface Resource_AnnotationsEntry {
  key: string;
  value: string;
}

function createBaseResource_AnnotationsEntry(): Resource_AnnotationsEntry {
  return {
    key: "",
    value: ""
  };
}

export const Resource_AnnotationsEntry = {
  encode(message: Resource_AnnotationsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource_AnnotationsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource_AnnotationsEntry();

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

  fromJSON(object: any): Resource_AnnotationsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: Resource_AnnotationsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Resource_AnnotationsEntry>, I>>(object: I): Resource_AnnotationsEntry {
    const message = createBaseResource_AnnotationsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};
export interface Resource {
  service: string;
  name: string;
  type: string;
  labels: {
    [key: string]: string;
  };
  uid: string;
  annotations: {
    [key: string]: string;
  };
  displayName: string;
  createTime: Date;
  updateTime: Date;
  deleteTime: Date;
  etag: string;
  location: string;
}

function createBaseResource(): Resource {
  return {
    service: "",
    name: "",
    type: "",
    labels: {},
    uid: "",
    annotations: {},
    displayName: "",
    createTime: undefined,
    updateTime: undefined,
    deleteTime: undefined,
    etag: "",
    location: ""
  };
}

export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }

    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }

    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }

    Object.entries(message.labels).forEach(([key, value]) => {
      Resource_LabelsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(34).fork()).ldelim();
    });

    if (message.uid !== "") {
      writer.uint32(42).string(message.uid);
    }

    Object.entries(message.annotations).forEach(([key, value]) => {
      Resource_AnnotationsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(50).fork()).ldelim();
    });

    if (message.displayName !== "") {
      writer.uint32(58).string(message.displayName);
    }

    if (message.createTime !== undefined) Timestamp.encode(toTimestamp(message.createTime), writer.uint32(66).fork()).ldelim();
    if (message.updateTime !== undefined) Timestamp.encode(toTimestamp(message.updateTime), writer.uint32(74).fork()).ldelim();
    if (message.deleteTime !== undefined) Timestamp.encode(toTimestamp(message.deleteTime), writer.uint32(82).fork()).ldelim();

    if (message.etag !== "") {
      writer.uint32(90).string(message.etag);
    }

    if (message.location !== "") {
      writer.uint32(98).string(message.location);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.service = reader.string();
          break;

        case 2:
          message.name = reader.string();
          break;

        case 3:
          message.type = reader.string();
          break;

        case 4:
          const entry4 = Resource_LabelsEntry.decode(reader, reader.uint32());

          if (entry4.value !== undefined) {
            message.labels[entry4.key] = entry4.value;
          }

          break;

        case 5:
          message.uid = reader.string();
          break;

        case 6:
          const entry6 = Resource_AnnotationsEntry.decode(reader, reader.uint32());

          if (entry6.value !== undefined) {
            message.annotations[entry6.key] = entry6.value;
          }

          break;

        case 7:
          message.displayName = reader.string();
          break;

        case 8:
          message.createTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 9:
          message.updateTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 10:
          message.deleteTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 11:
          message.etag = reader.string();
          break;

        case 12:
          message.location = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Resource {
    return {
      service: isSet(object.service) ? String(object.service) : "",
      name: isSet(object.name) ? String(object.name) : "",
      type: isSet(object.type) ? String(object.type) : "",
      labels: isObject(object.labels) ? Object.entries(object.labels).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      uid: isSet(object.uid) ? String(object.uid) : "",
      annotations: isObject(object.annotations) ? Object.entries(object.annotations).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      createTime: isSet(object.createTime) ? fromJsonTimestamp(object.createTime) : undefined,
      updateTime: isSet(object.updateTime) ? fromJsonTimestamp(object.updateTime) : undefined,
      deleteTime: isSet(object.deleteTime) ? fromJsonTimestamp(object.deleteTime) : undefined,
      etag: isSet(object.etag) ? String(object.etag) : "",
      location: isSet(object.location) ? String(object.location) : ""
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.service !== undefined && (obj.service = message.service);
    message.name !== undefined && (obj.name = message.name);
    message.type !== undefined && (obj.type = message.type);
    obj.labels = {};

    if (message.labels) {
      Object.entries(message.labels).forEach(([k, v]) => {
        obj.labels[k] = v;
      });
    }

    message.uid !== undefined && (obj.uid = message.uid);
    obj.annotations = {};

    if (message.annotations) {
      Object.entries(message.annotations).forEach(([k, v]) => {
        obj.annotations[k] = v;
      });
    }

    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.createTime !== undefined && (obj.createTime = message.createTime.toISOString());
    message.updateTime !== undefined && (obj.updateTime = message.updateTime.toISOString());
    message.deleteTime !== undefined && (obj.deleteTime = message.deleteTime.toISOString());
    message.etag !== undefined && (obj.etag = message.etag);
    message.location !== undefined && (obj.location = message.location);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Resource>, I>>(object: I): Resource {
    const message = createBaseResource();
    message.service = object.service ?? "";
    message.name = object.name ?? "";
    message.type = object.type ?? "";
    message.labels = Object.entries(object.labels ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.uid = object.uid ?? "";
    message.annotations = Object.entries(object.annotations ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }

      return acc;
    }, {});
    message.displayName = object.displayName ?? "";
    message.createTime = object.createTime ?? undefined;
    message.updateTime = object.updateTime ?? undefined;
    message.deleteTime = object.deleteTime ?? undefined;
    message.etag = object.etag ?? "";
    message.location = object.location ?? "";
    return message;
  }

};