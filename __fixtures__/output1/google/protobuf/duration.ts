import * as _m0 from "protobuf/minimal";
import { Long, isSet, Exact, DeepPartial } from "@osmonauts/helpers";
export interface Duration {
  seconds: Long;
  nanos: number;
}

function createBaseDuration(): Duration {
  return {
    seconds: Long.UZERO,
    nanos: 0
  };
}

export const Duration = {
  encode(message: Duration, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.seconds.isZero()) {
      writer.uint32(8).int64(message.seconds);
    }

    if (message.nanos !== 0) {
      writer.uint32(16).int32(message.nanos);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Duration {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDuration();

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

  fromJSON(object: any): Duration {
    return {
      seconds: isSet(object.seconds) ? Long.fromString(object.seconds) : Long.ZERO,
      nanos: isSet(object.nanos) ? Number(object.nanos) : 0
    };
  },

  toJSON(message: Duration): unknown {
    const obj: any = {};
    message.seconds !== undefined && (obj.seconds = (message.seconds || Long.ZERO).toString());
    message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Duration>, I>>(object: I): Duration {
    const message = createBaseDuration();
    message.seconds = object.seconds !== undefined && object.seconds !== null ? Long.fromValue(object.seconds) : Long.ZERO;
    message.nanos = object.nanos ?? 0;
    return message;
  }

};