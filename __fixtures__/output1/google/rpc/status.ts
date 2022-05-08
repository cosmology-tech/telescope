import * as _m0 from "protobuf/minimal";
import { isSet } from "@osmonauts/helpers";
import { Any } from "../protobuf/any";
export interface Status {
  code: number;
  message: string;
  details: Any[];
}

function createBaseStatus(): Status {
  return {
    code: 0,
    message: "",
    details: []
  };
}

export const Status = {
  encode(message: Status, writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }

    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }

    for (const v of message.details) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): Status {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatus();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;

        case 2:
          message.message = reader.string();
          break;

        case 3:
          message.details.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Status {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
      message: isSet(object.message) ? String(object.message) : "",
      details: Array.isArray(object?.details) ? object.details.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: Status): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    message.message !== undefined && (obj.message = message.message);

    if (message.details) {
      obj.details = message.details.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.details = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Status>, I>>(object: I): Status {
    const message = createBaseStatus();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.details = object.details?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};