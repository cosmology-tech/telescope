import * as _m0 from "protobuf/minimal";
import { Long, isSet, Exact, DeepPartial, KeysOfUnion, Builtin } from "@osmonauts/helpers";
export interface Timestamp {
  seconds: Long;
  nanos: number;
}

function createBaseTimestamp(): Timestamp {
  return {
    seconds: Long.UZERO,
    nanos: 0
  };
}

export const Timestamp = {
  encode(message: Timestamp, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.seconds.isZero()) {
      writer.uint32(8).int64(message.seconds);
    }

    if (message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Timestamp {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestamp();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.seconds = (reader.int64() as Long);
          break;

        case 2:
          message.nanos = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Timestamp {
    return {
      seconds: isSet(object.seconds) ? Long.fromString(object.seconds) : Long.ZERO,
      nanos: isSet(object.nanos) ? Number(object.nanos) : 0
    };
  },

  toJSON(message: Timestamp): unknown {
    const obj: any = {};
    message.seconds !== undefined && (obj.seconds = (message.seconds || Long.ZERO).toString());
    message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Timestamp>, I>>(object: I): Timestamp {
    const message = createBaseTimestamp();
    message.seconds = object.seconds !== undefined && object.seconds !== null ? Long.fromValue(object.seconds) : Long.ZERO;
    message.nanos = object.nanos ?? 0;
    return message;
  }

};