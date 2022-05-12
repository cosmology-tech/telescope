import { Option, Syntax, syntaxFromJSON, syntaxToJSON } from "./type";
import { SourceContext } from "./source_context";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface Api {
  name: string;
  methods: Method[];
  options: Option[];
  version: string;
  sourceContext: SourceContext;
  mixins: Mixin[];
  syntax: Syntax;
}

function createBaseApi(): Api {
  return {
    name: "",
    methods: [],
    options: [],
    version: "",
    sourceContext: undefined,
    mixins: [],
    syntax: undefined
  };
}

export const Api = {
  encode(message: Api, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    for (const v of message.methods) {
      Method.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.options) {
      Option.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (message.version !== "") {
      writer.uint32(34).string(message.version);
    }

    if (message.sourceContext !== undefined) {
      SourceContext.encode(message.sourceContext, writer.uint32(42).fork()).ldelim();
    }

    for (const v of message.mixins) {
      Mixin.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.syntax !== 0) {
      writer.uint32(56).int32(message.syntax);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Api {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseApi();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.methods.push(Method.decode(reader, reader.uint32()));
          break;

        case 3:
          message.options.push(Option.decode(reader, reader.uint32()));
          break;

        case 4:
          message.version = reader.string();
          break;

        case 5:
          message.sourceContext = SourceContext.decode(reader, reader.uint32());
          break;

        case 6:
          message.mixins.push(Mixin.decode(reader, reader.uint32()));
          break;

        case 7:
          message.syntax = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Api {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      methods: Array.isArray(object?.methods) ? object.methods.map((e: any) => Method.fromJSON(e)) : [],
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromJSON(e)) : [],
      version: isSet(object.version) ? String(object.version) : "",
      sourceContext: isSet(object.sourceContext) ? SourceContext.fromJSON(object.sourceContext) : undefined,
      mixins: Array.isArray(object?.mixins) ? object.mixins.map((e: any) => Mixin.fromJSON(e)) : [],
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : 0
    };
  },

  toJSON(message: Api): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);

    if (message.methods) {
      obj.methods = message.methods.map(e => e ? Method.toJSON(e) : undefined);
    } else {
      obj.methods = [];
    }

    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }

    message.version !== undefined && (obj.version = message.version);
    message.sourceContext !== undefined && (obj.sourceContext = message.sourceContext ? SourceContext.toJSON(message.sourceContext) : undefined);

    if (message.mixins) {
      obj.mixins = message.mixins.map(e => e ? Mixin.toJSON(e) : undefined);
    } else {
      obj.mixins = [];
    }

    message.syntax !== undefined && (obj.syntax = syntaxToJSON(message.syntax));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Api>, I>>(object: I): Api {
    const message = createBaseApi();
    message.name = object.name ?? "";
    message.methods = object.methods?.map(e => Method.fromPartial(e)) || [];
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    message.version = object.version ?? "";
    message.sourceContext = object.sourceContext !== undefined && object.sourceContext !== null ? SourceContext.fromPartial(object.sourceContext) : undefined;
    message.mixins = object.mixins?.map(e => Mixin.fromPartial(e)) || [];
    message.syntax = object.syntax ?? undefined;
    return message;
  }

};
export interface Method {
  name: string;
  requestTypeUrl: string;
  requestStreaming: boolean;
  responseTypeUrl: string;
  responseStreaming: boolean;
  options: Option[];
  syntax: Syntax;
}

function createBaseMethod(): Method {
  return {
    name: "",
    requestTypeUrl: "",
    requestStreaming: false,
    responseTypeUrl: "",
    responseStreaming: false,
    options: [],
    syntax: undefined
  };
}

export const Method = {
  encode(message: Method, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.requestTypeUrl !== "") {
      writer.uint32(18).string(message.requestTypeUrl);
    }

    if (message.requestStreaming === true) {
      writer.uint32(24).bool(message.requestStreaming);
    }

    if (message.responseTypeUrl !== "") {
      writer.uint32(34).string(message.responseTypeUrl);
    }

    if (message.responseStreaming === true) {
      writer.uint32(40).bool(message.responseStreaming);
    }

    for (const v of message.options) {
      Option.encode(v!, writer.uint32(50).fork()).ldelim();
    }

    if (message.syntax !== 0) {
      writer.uint32(56).int32(message.syntax);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Method {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMethod();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.requestTypeUrl = reader.string();
          break;

        case 3:
          message.requestStreaming = reader.bool();
          break;

        case 4:
          message.responseTypeUrl = reader.string();
          break;

        case 5:
          message.responseStreaming = reader.bool();
          break;

        case 6:
          message.options.push(Option.decode(reader, reader.uint32()));
          break;

        case 7:
          message.syntax = (reader.int32() as any);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Method {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      requestTypeUrl: isSet(object.requestTypeUrl) ? String(object.requestTypeUrl) : "",
      requestStreaming: isSet(object.requestStreaming) ? Boolean(object.requestStreaming) : false,
      responseTypeUrl: isSet(object.responseTypeUrl) ? String(object.responseTypeUrl) : "",
      responseStreaming: isSet(object.responseStreaming) ? Boolean(object.responseStreaming) : false,
      options: Array.isArray(object?.options) ? object.options.map((e: any) => Option.fromJSON(e)) : [],
      syntax: isSet(object.syntax) ? syntaxFromJSON(object.syntax) : 0
    };
  },

  toJSON(message: Method): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.requestTypeUrl !== undefined && (obj.requestTypeUrl = message.requestTypeUrl);
    message.requestStreaming !== undefined && (obj.requestStreaming = message.requestStreaming);
    message.responseTypeUrl !== undefined && (obj.responseTypeUrl = message.responseTypeUrl);
    message.responseStreaming !== undefined && (obj.responseStreaming = message.responseStreaming);

    if (message.options) {
      obj.options = message.options.map(e => e ? Option.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }

    message.syntax !== undefined && (obj.syntax = syntaxToJSON(message.syntax));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Method>, I>>(object: I): Method {
    const message = createBaseMethod();
    message.name = object.name ?? "";
    message.requestTypeUrl = object.requestTypeUrl ?? "";
    message.requestStreaming = object.requestStreaming ?? false;
    message.responseTypeUrl = object.responseTypeUrl ?? "";
    message.responseStreaming = object.responseStreaming ?? false;
    message.options = object.options?.map(e => Option.fromPartial(e)) || [];
    message.syntax = object.syntax ?? undefined;
    return message;
  }

};
export interface Mixin {
  name: string;
  root: string;
}

function createBaseMixin(): Mixin {
  return {
    name: "",
    root: ""
  };
}

export const Mixin = {
  encode(message: Mixin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.root !== "") {
      writer.uint32(18).string(message.root);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Mixin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMixin();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.root = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Mixin {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      root: isSet(object.root) ? String(object.root) : ""
    };
  },

  toJSON(message: Mixin): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.root !== undefined && (obj.root = message.root);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Mixin>, I>>(object: I): Mixin {
    const message = createBaseMixin();
    message.name = object.name ?? "";
    message.root = object.root ?? "";
    return message;
  }

};