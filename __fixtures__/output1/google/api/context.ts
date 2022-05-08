import { _m0 } from "protobuf/minimal";
import { isSet } from "@osmonauts/helpers";
export interface Context {
  rules: ContextRule[];
}

function createBaseContext(): Context {
  return {
    rules: []
  };
}

export const Context = {
  encode(message: Context, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      ContextRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): Context {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContext();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rules.push(ContextRule.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Context {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => ContextRule.fromJSON(e)) : []
    };
  },

  toJSON(message: Context): unknown {
    const obj: any = {};

    if (message.rules) {
      obj.rules = message.rules.map(e => e ? ContextRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Context>, I>>(object: I): Context {
    const message = createBaseContext();
    message.rules = object.rules?.map(e => ContextRule.fromPartial(e)) || [];
    return message;
  }

};
export interface ContextRule {
  selector: string;
  requested: string[];
  provided: string[];
  allowedRequestExtensions: string[];
  allowedResponseExtensions: string[];
}

function createBaseContextRule(): ContextRule {
  return {
    selector: "",
    requested: [],
    provided: [],
    allowedRequestExtensions: [],
    allowedResponseExtensions: []
  };
}

export const ContextRule = {
  encode(message: ContextRule, writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }

    for (const v of message.requested) {
      writer.uint32(18).string(v!);
    }

    for (const v of message.provided) {
      writer.uint32(26).string(v!);
    }

    for (const v of message.allowedRequestExtensions) {
      writer.uint32(34).string(v!);
    }

    for (const v of message.allowedResponseExtensions) {
      writer.uint32(42).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): ContextRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContextRule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;

        case 2:
          message.requested.push(reader.string());

        case 3:
          message.provided.push(reader.string());

        case 4:
          message.allowedRequestExtensions.push(reader.string());

        case 5:
          message.allowedResponseExtensions.push(reader.string());

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ContextRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      requested: Array.isArray(object?.requested) ? object.requested.map((e: any) => String(e)) : [],
      provided: Array.isArray(object?.provided) ? object.provided.map((e: any) => String(e)) : [],
      allowedRequestExtensions: Array.isArray(object?.allowedRequestExtensions) ? object.allowedRequestExtensions.map((e: any) => String(e)) : [],
      allowedResponseExtensions: Array.isArray(object?.allowedResponseExtensions) ? object.allowedResponseExtensions.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: ContextRule): unknown {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);

    if (message.requested) {
      obj.requested = message.requested.map(e => e);
    } else {
      obj.requested = [];
    }

    if (message.provided) {
      obj.provided = message.provided.map(e => e);
    } else {
      obj.provided = [];
    }

    if (message.allowedRequestExtensions) {
      obj.allowedRequestExtensions = message.allowedRequestExtensions.map(e => e);
    } else {
      obj.allowedRequestExtensions = [];
    }

    if (message.allowedResponseExtensions) {
      obj.allowedResponseExtensions = message.allowedResponseExtensions.map(e => e);
    } else {
      obj.allowedResponseExtensions = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ContextRule>, I>>(object: I): ContextRule {
    const message = createBaseContextRule();
    message.selector = object.selector ?? "";
    message.requested = object.requested?.map(e => e) || [];
    message.provided = object.provided?.map(e => e) || [];
    message.allowedRequestExtensions = object.allowedRequestExtensions?.map(e => e) || [];
    message.allowedResponseExtensions = object.allowedResponseExtensions?.map(e => e) || [];
    return message;
  }

};