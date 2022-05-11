import * as _m0 from "protobuf/minimal";
import { Exact, DeepPartial } from "@osmonauts/helpers";
export interface FieldMask {
  paths: string[];
}

function createBaseFieldMask(): FieldMask {
  return {
    paths: []
  };
}

export const FieldMask = {
  encode(message: FieldMask, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.paths) {
      writer.uint32(10).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FieldMask {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldMask();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paths.push(reader.string());

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): FieldMask {
    return {
      paths: Array.isArray(object?.paths) ? object.paths.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: FieldMask): unknown {
    const obj: any = {};

    if (message.paths) {
      obj.paths = message.paths.map(e => e);
    } else {
      obj.paths = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FieldMask>, I>>(object: I): FieldMask {
    const message = createBaseFieldMask();
    message.paths = object.paths?.map(e => e) || [];
    return message;
  }

};