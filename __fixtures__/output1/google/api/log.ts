import * as _m0 from "protobuf/minimal";
import { isSet, Exact, DeepPartial, KeysOfUnion, Builtin } from "@osmonauts/helpers";
import { LabelDescriptor } from "./label";
export interface LogDescriptor {
  name: string;
  labels: LabelDescriptor[];
  description: string;
  displayName: string;
}

function createBaseLogDescriptor(): LogDescriptor {
  return {
    name: "",
    labels: [],
    description: "",
    displayName: ""
  };
}

export const LogDescriptor = {
  encode(message: LogDescriptor, writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    for (const v of message.labels) {
      LabelDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }

    if (message.displayName !== "") {
      writer.uint32(34).string(message.displayName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogDescriptor();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.labels.push(LabelDescriptor.decode(reader, reader.uint32()));
          break;

        case 3:
          message.description = reader.string();
          break;

        case 4:
          message.displayName = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LogDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      labels: Array.isArray(object?.labels) ? object.labels.map((e: any) => LabelDescriptor.fromJSON(e)) : [],
      description: isSet(object.description) ? String(object.description) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : ""
    };
  },

  toJSON(message: LogDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);

    if (message.labels) {
      obj.labels = message.labels.map(e => e ? LabelDescriptor.toJSON(e) : undefined);
    } else {
      obj.labels = [];
    }

    message.description !== undefined && (obj.description = message.description);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogDescriptor>, I>>(object: I): LogDescriptor {
    const message = createBaseLogDescriptor();
    message.name = object.name ?? "";
    message.labels = object.labels?.map(e => LabelDescriptor.fromPartial(e)) || [];
    message.description = object.description ?? "";
    message.displayName = object.displayName ?? "";
    return message;
  }

};