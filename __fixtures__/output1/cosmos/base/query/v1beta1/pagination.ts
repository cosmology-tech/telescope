import * as _m0 from "protobufjs/minimal";
import { Long, isSet, bytesFromBase64, base64FromBytes, Exact, DeepPartial } from "@osmonauts/helpers";
export interface PageRequest {
  key: Uint8Array;
  offset: Long;
  limit: Long;
  countTotal: boolean;
  reverse: boolean;
}

function createBasePageRequest(): PageRequest {
  return {
    key: new Uint8Array(),
    offset: Long.UZERO,
    limit: Long.UZERO,
    countTotal: false,
    reverse: false
  };
}

export const PageRequest = {
  encode(message: PageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    if (!message.offset.isZero()) {
      writer.uint32(16).uint64(message.offset);
    }

    if (!message.limit.isZero()) {
      writer.uint32(24).uint64(message.limit);
    }

    if (message.countTotal === true) {
      writer.uint32(32).bool(message.countTotal);
    }

    if (message.reverse === true) {
      writer.uint32(40).bool(message.reverse);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        case 2:
          message.offset = (reader.uint64() as Long);
          break;

        case 3:
          message.limit = (reader.uint64() as Long);
          break;

        case 4:
          message.countTotal = reader.bool();
          break;

        case 5:
          message.reverse = reader.bool();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PageRequest {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      offset: isSet(object.offset) ? Long.fromString(object.offset) : Long.UZERO,
      limit: isSet(object.limit) ? Long.fromString(object.limit) : Long.UZERO,
      countTotal: isSet(object.countTotal) ? Boolean(object.countTotal) : false,
      reverse: isSet(object.reverse) ? Boolean(object.reverse) : false
    };
  },

  toJSON(message: PageRequest): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    message.offset !== undefined && (obj.offset = (message.offset || Long.UZERO).toString());
    message.limit !== undefined && (obj.limit = (message.limit || Long.UZERO).toString());
    message.countTotal !== undefined && (obj.countTotal = message.countTotal);
    message.reverse !== undefined && (obj.reverse = message.reverse);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PageRequest>, I>>(object: I): PageRequest {
    const message = createBasePageRequest();
    message.key = object.key ?? new Uint8Array();
    message.offset = object.offset !== undefined && object.offset !== null ? Long.fromValue(object.offset) : Long.UZERO;
    message.limit = object.limit !== undefined && object.limit !== null ? Long.fromValue(object.limit) : Long.UZERO;
    message.countTotal = object.countTotal ?? false;
    message.reverse = object.reverse ?? false;
    return message;
  }

};
export interface PageResponse {
  nextKey: Uint8Array;
  total: Long;
}

function createBasePageResponse(): PageResponse {
  return {
    nextKey: new Uint8Array(),
    total: Long.UZERO
  };
}

export const PageResponse = {
  encode(message: PageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextKey.length !== 0) {
      writer.uint32(10).bytes(message.nextKey);
    }

    if (!message.total.isZero()) {
      writer.uint32(16).uint64(message.total);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.nextKey = reader.bytes();
          break;

        case 2:
          message.total = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PageResponse {
    return {
      nextKey: isSet(object.nextKey) ? bytesFromBase64(object.nextKey) : new Uint8Array(),
      total: isSet(object.total) ? Long.fromString(object.total) : Long.UZERO
    };
  },

  toJSON(message: PageResponse): unknown {
    const obj: any = {};
    message.nextKey !== undefined && (obj.nextKey = base64FromBytes(message.nextKey !== undefined ? message.nextKey : new Uint8Array()));
    message.total !== undefined && (obj.total = (message.total || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PageResponse>, I>>(object: I): PageResponse {
    const message = createBasePageResponse();
    message.nextKey = object.nextKey ?? new Uint8Array();
    message.total = object.total !== undefined && object.total !== null ? Long.fromValue(object.total) : Long.UZERO;
    return message;
  }

};