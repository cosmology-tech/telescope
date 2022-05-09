import * as _m0 from "protobuf/minimal";
import { toDuration, Long, fromDuration, isSet, Exact, DeepPartial } from "@osmonauts/helpers";
import { Duration } from "../../../protobuf/duration";
export interface HttpRequest {
  requestMethod: string;
  requestUrl: string;
  requestSize: Long;
  status: number;
  responseSize: Long;
  userAgent: string;
  remoteIp: string;
  serverIp: string;
  referer: string;
  latency: string;
  cacheLookup: boolean;
  cacheHit: boolean;
  cacheValidatedWithOriginServer: boolean;
  cacheFillBytes: Long;
  protocol: string;
}

function createBaseHttpRequest(): HttpRequest {
  return {
    requestMethod: "",
    requestUrl: "",
    requestSize: Long.UZERO,
    status: 0,
    responseSize: Long.UZERO,
    userAgent: "",
    remoteIp: "",
    serverIp: "",
    referer: "",
    latency: undefined,
    cacheLookup: false,
    cacheHit: false,
    cacheValidatedWithOriginServer: false,
    cacheFillBytes: Long.UZERO,
    protocol: ""
  };
}

export const HttpRequest = {
  encode(message: HttpRequest, writer = _m0.Writer.create()): _m0.Writer {
    if (message.requestMethod !== "") {
      writer.uint32(10).string(message.requestMethod);
    }

    if (message.requestUrl !== "") {
      writer.uint32(18).string(message.requestUrl);
    }

    if (!message.requestSize.isZero()) {
      writer.uint32(24).int64(message.requestSize);
    }

    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }

    if (!message.responseSize.isZero()) {
      writer.uint32(40).int64(message.responseSize);
    }

    if (message.userAgent !== "") {
      writer.uint32(50).string(message.userAgent);
    }

    if (message.remoteIp !== "") {
      writer.uint32(58).string(message.remoteIp);
    }

    if (message.serverIp !== "") {
      writer.uint32(106).string(message.serverIp);
    }

    if (message.referer !== "") {
      writer.uint32(66).string(message.referer);
    }

    if (message.latency !== undefined) Duration.encode(toDuration(message.latency), writer.uint32(114).fork()).ldelim();

    if (message.cacheLookup === true) {
      writer.uint32(88).bool(message.cacheLookup);
    }

    if (message.cacheHit === true) {
      writer.uint32(72).bool(message.cacheHit);
    }

    if (message.cacheValidatedWithOriginServer === true) {
      writer.uint32(80).bool(message.cacheValidatedWithOriginServer);
    }

    if (!message.cacheFillBytes.isZero()) {
      writer.uint32(96).int64(message.cacheFillBytes);
    }

    if (message.protocol !== "") {
      writer.uint32(122).string(message.protocol);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HttpRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHttpRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.requestMethod = reader.string();
          break;

        case 2:
          message.requestUrl = reader.string();
          break;

        case 3:
          message.requestSize = (reader.int64() as Long);
          break;

        case 4:
          message.status = reader.int32();
          break;

        case 5:
          message.responseSize = (reader.int64() as Long);
          break;

        case 6:
          message.userAgent = reader.string();
          break;

        case 7:
          message.remoteIp = reader.string();
          break;

        case 13:
          message.serverIp = reader.string();
          break;

        case 8:
          message.referer = reader.string();
          break;

        case 14:
          message.latency = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        case 11:
          message.cacheLookup = reader.bool();
          break;

        case 9:
          message.cacheHit = reader.bool();
          break;

        case 10:
          message.cacheValidatedWithOriginServer = reader.bool();
          break;

        case 12:
          message.cacheFillBytes = (reader.int64() as Long);
          break;

        case 15:
          message.protocol = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): HttpRequest {
    return {
      requestMethod: isSet(object.requestMethod) ? String(object.requestMethod) : "",
      requestUrl: isSet(object.requestUrl) ? String(object.requestUrl) : "",
      requestSize: isSet(object.requestSize) ? Long.fromString(object.requestSize) : Long.ZERO,
      status: isSet(object.status) ? Number(object.status) : 0,
      responseSize: isSet(object.responseSize) ? Long.fromString(object.responseSize) : Long.ZERO,
      userAgent: isSet(object.userAgent) ? String(object.userAgent) : "",
      remoteIp: isSet(object.remoteIp) ? String(object.remoteIp) : "",
      serverIp: isSet(object.serverIp) ? String(object.serverIp) : "",
      referer: isSet(object.referer) ? String(object.referer) : "",
      latency: isSet(object.latency) ? String(object.latency) : undefined,
      cacheLookup: isSet(object.cacheLookup) ? Boolean(object.cacheLookup) : false,
      cacheHit: isSet(object.cacheHit) ? Boolean(object.cacheHit) : false,
      cacheValidatedWithOriginServer: isSet(object.cacheValidatedWithOriginServer) ? Boolean(object.cacheValidatedWithOriginServer) : false,
      cacheFillBytes: isSet(object.cacheFillBytes) ? Long.fromString(object.cacheFillBytes) : Long.ZERO,
      protocol: isSet(object.protocol) ? String(object.protocol) : ""
    };
  },

  toJSON(message: HttpRequest): unknown {
    const obj: any = {};
    message.requestMethod !== undefined && (obj.requestMethod = message.requestMethod);
    message.requestUrl !== undefined && (obj.requestUrl = message.requestUrl);
    message.requestSize !== undefined && (obj.requestSize = (message.requestSize || Long.ZERO).toString());
    message.status !== undefined && (obj.status = Math.round(message.status));
    message.responseSize !== undefined && (obj.responseSize = (message.responseSize || Long.ZERO).toString());
    message.userAgent !== undefined && (obj.userAgent = message.userAgent);
    message.remoteIp !== undefined && (obj.remoteIp = message.remoteIp);
    message.serverIp !== undefined && (obj.serverIp = message.serverIp);
    message.referer !== undefined && (obj.referer = message.referer);
    message.latency !== undefined && (obj.latency = message.latency);
    message.cacheLookup !== undefined && (obj.cacheLookup = message.cacheLookup);
    message.cacheHit !== undefined && (obj.cacheHit = message.cacheHit);
    message.cacheValidatedWithOriginServer !== undefined && (obj.cacheValidatedWithOriginServer = message.cacheValidatedWithOriginServer);
    message.cacheFillBytes !== undefined && (obj.cacheFillBytes = (message.cacheFillBytes || Long.ZERO).toString());
    message.protocol !== undefined && (obj.protocol = message.protocol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HttpRequest>, I>>(object: I): HttpRequest {
    const message = createBaseHttpRequest();
    message.requestMethod = object.requestMethod ?? "";
    message.requestUrl = object.requestUrl ?? "";
    message.requestSize = object.requestSize !== undefined && object.requestSize !== null ? Long.fromValue(object.requestSize) : Long.ZERO;
    message.status = object.status ?? 0;
    message.responseSize = object.responseSize !== undefined && object.responseSize !== null ? Long.fromValue(object.responseSize) : Long.ZERO;
    message.userAgent = object.userAgent ?? "";
    message.remoteIp = object.remoteIp ?? "";
    message.serverIp = object.serverIp ?? "";
    message.referer = object.referer ?? "";
    message.latency = object.latency ?? undefined;
    message.cacheLookup = object.cacheLookup ?? false;
    message.cacheHit = object.cacheHit ?? false;
    message.cacheValidatedWithOriginServer = object.cacheValidatedWithOriginServer ?? false;
    message.cacheFillBytes = object.cacheFillBytes !== undefined && object.cacheFillBytes !== null ? Long.fromValue(object.cacheFillBytes) : Long.ZERO;
    message.protocol = object.protocol ?? "";
    return message;
  }

};