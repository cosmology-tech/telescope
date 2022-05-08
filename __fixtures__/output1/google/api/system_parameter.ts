import * as _m0 from "protobuf/minimal";
import { Exact, DeepPartial, KeysOfUnion, Builtin, isSet } from "@osmonauts/helpers";
export interface SystemParameters {
  rules: SystemParameterRule[];
}

function createBaseSystemParameters(): SystemParameters {
  return {
    rules: []
  };
}

export const SystemParameters = {
  encode(message: SystemParameters, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.rules) {
      SystemParameterRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemParameters {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemParameters();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.rules.push(SystemParameterRule.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SystemParameters {
    return {
      rules: Array.isArray(object?.rules) ? object.rules.map((e: any) => SystemParameterRule.fromJSON(e)) : []
    };
  },

  toJSON(message: SystemParameters): unknown {
    const obj: any = {};

    if (message.rules) {
      obj.rules = message.rules.map(e => e ? SystemParameterRule.toJSON(e) : undefined);
    } else {
      obj.rules = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SystemParameters>, I>>(object: I): SystemParameters {
    const message = createBaseSystemParameters();
    message.rules = object.rules?.map(e => SystemParameterRule.fromPartial(e)) || [];
    return message;
  }

};
export interface SystemParameterRule {
  selector: string;
  parameters: SystemParameter[];
}

function createBaseSystemParameterRule(): SystemParameterRule {
  return {
    selector: "",
    parameters: []
  };
}

export const SystemParameterRule = {
  encode(message: SystemParameterRule, writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }

    for (const v of message.parameters) {
      SystemParameter.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemParameterRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemParameterRule();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;

        case 2:
          message.parameters.push(SystemParameter.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SystemParameterRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      parameters: Array.isArray(object?.parameters) ? object.parameters.map((e: any) => SystemParameter.fromJSON(e)) : []
    };
  },

  toJSON(message: SystemParameterRule): unknown {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);

    if (message.parameters) {
      obj.parameters = message.parameters.map(e => e ? SystemParameter.toJSON(e) : undefined);
    } else {
      obj.parameters = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SystemParameterRule>, I>>(object: I): SystemParameterRule {
    const message = createBaseSystemParameterRule();
    message.selector = object.selector ?? "";
    message.parameters = object.parameters?.map(e => SystemParameter.fromPartial(e)) || [];
    return message;
  }

};
export interface SystemParameter {
  name: string;
  httpHeader: string;
  urlQueryParameter: string;
}

function createBaseSystemParameter(): SystemParameter {
  return {
    name: "",
    httpHeader: "",
    urlQueryParameter: ""
  };
}

export const SystemParameter = {
  encode(message: SystemParameter, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (message.httpHeader !== "") {
      writer.uint32(18).string(message.httpHeader);
    }

    if (message.urlQueryParameter !== "") {
      writer.uint32(26).string(message.urlQueryParameter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemParameter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemParameter();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.httpHeader = reader.string();
          break;

        case 3:
          message.urlQueryParameter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SystemParameter {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      httpHeader: isSet(object.httpHeader) ? String(object.httpHeader) : "",
      urlQueryParameter: isSet(object.urlQueryParameter) ? String(object.urlQueryParameter) : ""
    };
  },

  toJSON(message: SystemParameter): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.httpHeader !== undefined && (obj.httpHeader = message.httpHeader);
    message.urlQueryParameter !== undefined && (obj.urlQueryParameter = message.urlQueryParameter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SystemParameter>, I>>(object: I): SystemParameter {
    const message = createBaseSystemParameter();
    message.name = object.name ?? "";
    message.httpHeader = object.httpHeader ?? "";
    message.urlQueryParameter = object.urlQueryParameter ?? "";
    return message;
  }

};