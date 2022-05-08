import * as _m0 from "protobuf/minimal";
import { isSet } from "@osmonauts/helpers";
export interface Http {
  rules: HttpRule[];
  fullyDecodeReservedExpansion: boolean;
}

function createBaseHttp(): Http {
  return {
    rules: [],
    fullyDecodeReservedExpansion: false
  };
}

export const Http = {
  encode(message: Http, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      HttpRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.fullyDecodeReservedExpansion === true) {
      writer.uint32(16).bool(message.fullyDecodeReservedExpansion);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): Http {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rules.push(HttpRule.decode(reader, reader.uint32()));
          break;

        case 2:
          message.fullyDecodeReservedExpansion = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Http {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => HttpRule.fromJSON(e)) : [],
      fullyDecodeReservedExpansion: isSet(object.fullyDecodeReservedExpansion) ? Boolean(object.fullyDecodeReservedExpansion) : false
    };
  },

  toJSON(message: Http): unknown {
    const obj: any = {};

    if (message.rules) {
      obj.rules = message.rules.map(e => e ? HttpRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }

    message.fullyDecodeReservedExpansion !== undefined && (obj.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Http>, I>>(object: I): Http {
    const message = createBaseHttp();
    message.rules = object.rules?.map(e => HttpRule.fromPartial(e)) || [];
    message.fullyDecodeReservedExpansion = object.fullyDecodeReservedExpansion ?? false;
    return message;
  }

};
export interface HttpRule {
  selector: string;
  get?: string;
  put?: string;
  post?: string;
  delete?: string;
  patch?: string;
  custom?: CustomHttpPattern;
  body: string;
  responseBody: string;
  additionalBindings: HttpRule[];
}

function createBaseHttpRule(): HttpRule {
  return {
    selector: "",
    get: "",
    put: "",
    post: "",
    delete: "",
    patch: "",
    custom: undefined,
    body: "",
    responseBody: "",
    additionalBindings: []
  };
}

export const HttpRule = {
  encode(message: HttpRule, writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }

    if (message.get !== "") {
      writer.uint32(18).string(message.get);
    }

    if (message.put !== "") {
      writer.uint32(26).string(message.put);
    }

    if (message.post !== "") {
      writer.uint32(34).string(message.post);
    }

    if (message.delete !== "") {
      writer.uint32(42).string(message.delete);
    }

    if (message.patch !== "") {
      writer.uint32(50).string(message.patch);
    }

    if (message.custom !== undefined) {
      CustomHttpPattern.encode(message.custom, writer.uint32(66).fork()).ldelim();
    }

    if (message.body !== "") {
      writer.uint32(58).string(message.body);
    }

    if (message.responseBody !== "") {
      writer.uint32(98).string(message.responseBody);
    }

    for (const v of message.additionalBindings) {
      HttpRule.encode(v!, writer.uint32(90).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): HttpRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;

        case 2:
          message.get = reader.string();
          break;

        case 3:
          message.put = reader.string();
          break;

        case 4:
          message.post = reader.string();
          break;

        case 5:
          message.delete = reader.string();
          break;

        case 6:
          message.patch = reader.string();
          break;

        case 8:
          message.custom = CustomHttpPattern.decode(reader, reader.uint32());
          break;

        case 7:
          message.body = reader.string();
          break;

        case 12:
          message.responseBody = reader.string();
          break;

        case 11:
          message.additionalBindings.push(HttpRule.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): HttpRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      get: isSet(object.get) ? String(object.get) : "",
      put: isSet(object.put) ? String(object.put) : "",
      post: isSet(object.post) ? String(object.post) : "",
      delete: isSet(object.delete) ? String(object.delete) : "",
      patch: isSet(object.patch) ? String(object.patch) : "",
      custom: isSet(object.custom) ? CustomHttpPattern.fromJSON(object.custom) : undefined,
      body: isSet(object.body) ? String(object.body) : "",
      responseBody: isSet(object.responseBody) ? String(object.responseBody) : "",
      additionalBindings: Array.isArray(object?.additionalBindings) ? object.additionalBindings.map((e: any) => HttpRule.fromJSON(e)) : []
    };
  },

  toJSON(message: HttpRule): unknown {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    message.get !== undefined && (obj.get = message.get);
    message.put !== undefined && (obj.put = message.put);
    message.post !== undefined && (obj.post = message.post);
    message.delete !== undefined && (obj.delete = message.delete);
    message.patch !== undefined && (obj.patch = message.patch);
    message.custom !== undefined && (obj.custom = message.custom ? CustomHttpPattern.toJSON(message.custom) : undefined);
    message.body !== undefined && (obj.body = message.body);
    message.responseBody !== undefined && (obj.responseBody = message.responseBody);

    if (message.additionalBindings) {
      obj.additionalBindings = message.additionalBindings.map(e => e ? HttpRule.toJSON(e) : undefined);
    } else {
      obj.additionalBindings = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HttpRule>, I>>(object: I): HttpRule {
    const message = createBaseHttpRule();
    message.selector = object.selector ?? "";
    message.get = object.get ?? "";
    message.put = object.put ?? "";
    message.post = object.post ?? "";
    message.delete = object.delete ?? "";
    message.patch = object.patch ?? "";
    message.custom = object.custom !== undefined && object.custom !== null ? CustomHttpPattern.fromPartial(object.custom) : undefined;
    message.body = object.body ?? "";
    message.responseBody = object.responseBody ?? "";
    message.additionalBindings = object.additionalBindings?.map(e => HttpRule.fromPartial(e)) || [];
    return message;
  }

};
export interface CustomHttpPattern {
  kind: string;
  path: string;
}

function createBaseCustomHttpPattern(): CustomHttpPattern {
  return {
    kind: "",
    path: ""
  };
}

export const CustomHttpPattern = {
  encode(message: CustomHttpPattern, writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== "") {
      writer.uint32(10).string(message.kind);
    }

    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): CustomHttpPattern {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomHttpPattern();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.kind = reader.string();
          break;

        case 2:
          message.path = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): CustomHttpPattern {
    return {
      kind: isSet(object.kind) ? String(object.kind) : "",
      path: isSet(object.path) ? String(object.path) : ""
    };
  },

  toJSON(message: CustomHttpPattern): unknown {
    const obj: any = {};
    message.kind !== undefined && (obj.kind = message.kind);
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CustomHttpPattern>, I>>(object: I): CustomHttpPattern {
    const message = createBaseCustomHttpPattern();
    message.kind = object.kind ?? "";
    message.path = object.path ?? "";
    return message;
  }

};