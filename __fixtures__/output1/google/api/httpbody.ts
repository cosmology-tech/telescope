import { Any } from "../protobuf/any";
import * as _m0 from "protobuf/minimal";
import { isSet, bytesFromBase64, base64FromBytes, Exact, DeepPartial } from "@osmonauts/helpers";
export interface HttpBody {
  contentType: string;
  data: Uint8Array;
  extensions: Any[];
}

function createBaseHttpBody(): HttpBody {
  return {
    contentType: "",
    data: new Uint8Array(),
    extensions: []
  };
}

export const HttpBody = {
  encode(message: HttpBody, writer = _m0.Writer.create()): _m0.Writer {
    if (message.contentType !== "") {
      writer.uint32(10).string(message.contentType);
    }

    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }

    for (const v of message.extensions) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpBody {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpBody();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.contentType = reader.string();
          break;

        case 2:
          message.data = reader.bytes();
          break;

        case 3:
          message.extensions.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): HttpBody {
    return {
      contentType: isSet(object.contentType) ? String(object.contentType) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      extensions: Array.isArray(object?.extensions) ? object.extensions.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: HttpBody): unknown {
    const obj: any = {};
    message.contentType !== undefined && (obj.contentType = message.contentType);
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));

    if (message.extensions) {
      obj.extensions = message.extensions.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.extensions = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HttpBody>, I>>(object: I): HttpBody {
    const message = createBaseHttpBody();
    message.contentType = object.contentType ?? "";
    message.data = object.data ?? new Uint8Array();
    message.extensions = object.extensions?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};