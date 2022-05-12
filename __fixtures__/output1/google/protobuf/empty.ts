import * as _m0 from "protobufjs/minimal";
import { Exact, DeepPartial } from "@osmonauts/helpers";
export interface Empty {}

function createBaseEmpty(): Empty {
  return {};
}

export const Empty = {
  encode(message: Empty, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEmpty();

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

  fromJSON(object: any): Empty {
    return {};
  },

  toJSON(message: Empty): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Empty>, I>>(object: I): Empty {
    const message = createBaseEmpty();
    return message;
  }

};