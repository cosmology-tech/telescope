import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../protobuf/any";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial } from "../../helpers";
export const protobufPackage = "google.rpc";
/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
 * three pieces of data: error code, error message, and error details.
 * 
 * You can find out more about this error model and how to work with it in the
 * [API Design Guide](https://cloud.google.com/apis/design/errors).
 */
export interface Status {
  /** The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code]. */
  code: number;
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
   */
  message: string;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details: Any[];
}
export interface StatusProtoMsg {
  typeUrl: "/google.rpc.Status";
  value: Uint8Array;
}
/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
 * three pieces of data: error code, error message, and error details.
 * 
 * You can find out more about this error model and how to work with it in the
 * [API Design Guide](https://cloud.google.com/apis/design/errors).
 */
export interface StatusAmino {
  /** The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code]. */
  code: number;
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
   */
  message: string;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details: AnyAmino[];
}
/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
 * three pieces of data: error code, error message, and error details.
 * 
 * You can find out more about this error model and how to work with it in the
 * [API Design Guide](https://cloud.google.com/apis/design/errors).
 */
export interface StatusSDKType {
  code: number;
  message: string;
  details: AnySDKType[];
}
function createBaseStatus(): Status {
  return {
    code: 0,
    message: "",
    details: []
  };
}
export const Status = {
  typeUrl: "/google.rpc.Status",
  encode(message: Status, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number, useInterfaces: boolean = true): Status {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.details.push(Any.decode(reader, reader.uint32(), useInterfaces));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Status {
    const obj = createBaseStatus();
    if (isSet(object.code)) obj.code = Number(object.code);
    if (isSet(object.message)) obj.message = String(object.message);
    if (Array.isArray(object?.details)) obj.details = object.details.map((e: any) => Any.fromJSON(e));
    return obj;
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
  fromPartial(object: DeepPartial<Status>): Status {
    const message = createBaseStatus();
    message.code = object.code ?? 0;
    message.message = object.message ?? "";
    message.details = object.details?.map(e => Any.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: StatusSDKType): Status {
    return {
      code: object?.code,
      message: object?.message,
      details: Array.isArray(object?.details) ? object.details.map((e: any) => Any.fromSDK(e)) : []
    };
  },
  toSDK(message: Status): StatusSDKType {
    const obj: any = {};
    obj.code = message.code;
    obj.message = message.message;
    if (message.details) {
      obj.details = message.details.map(e => e ? Any.toSDK(e) : undefined);
    } else {
      obj.details = [];
    }
    return obj;
  },
  fromAmino(object: StatusAmino): Status {
    return {
      code: object.code,
      message: object.message,
      details: Array.isArray(object?.details) ? object.details.map((e: any) => Any.fromAmino(e)) : []
    };
  },
  toAmino(message: Status, useInterfaces: boolean = true): StatusAmino {
    const obj: any = {};
    obj.code = message.code;
    obj.message = message.message;
    if (message.details) {
      obj.details = message.details.map(e => e ? Any.toAmino(e, useInterfaces) : undefined);
    } else {
      obj.details = [];
    }
    return obj;
  },
  fromProtoMsg(message: StatusProtoMsg, useInterfaces: boolean = true): Status {
    return Status.decode(message.value, undefined, useInterfaces);
  },
  toProto(message: Status): Uint8Array {
    return Status.encode(message).finish();
  },
  toProtoMsg(message: Status): StatusProtoMsg {
    return {
      typeUrl: "/google.rpc.Status",
      value: Status.encode(message).finish()
    };
  }
};