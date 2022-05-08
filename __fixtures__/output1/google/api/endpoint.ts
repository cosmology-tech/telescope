import { _m0 } from "protobuf/minimal";
import { isSet } from "@osmonauts/helpers";
export interface Endpoint {
  name: string;
  aliases: string[];
  target: string;
  allowCors: boolean;
}

function createBaseEndpoint(): Endpoint {
  return {
    name: "",
    aliases: [],
    target: "",
    allowCors: false
  };
}

export const Endpoint = {
  encode(message: Endpoint, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    for (const v of message.aliases) {
      writer.uint32(18).string(v!);
    }

    if (message.target !== "") {
      writer.uint32(810).string(message.target);
    }

    if (message.allowCors === true) {
      writer.uint32(40).bool(message.allowCors);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): Endpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.aliases.push(reader.string());

        case 101:
          message.target = reader.string();
          break;

        case 5:
          message.allowCors = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Endpoint {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      aliases: Array.isArray(object?.aliases) ? object.aliases.map((e: any) => String(e)) : [],
      target: isSet(object.target) ? String(object.target) : "",
      allowCors: isSet(object.allowCors) ? Boolean(object.allowCors) : false
    };
  },

  toJSON(message: Endpoint): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);

    if (message.aliases) {
      obj.aliases = message.aliases.map(e => e);
    } else {
      obj.aliases = [];
    }

    message.target !== undefined && (obj.target = message.target);
    message.allowCors !== undefined && (obj.allowCors = message.allowCors);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Endpoint>, I>>(object: I): Endpoint {
    const message = createBaseEndpoint();
    message.name = object.name ?? "";
    message.aliases = object.aliases?.map(e => e) || [];
    message.target = object.target ?? "";
    message.allowCors = object.allowCors ?? false;
    return message;
  }

};