import { Duration, DurationSDKType } from "../../../protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial } from "../../../../helpers";
export const protobufPackage = "google.api.servicecontrol.v1";
/**
 * A common proto for logging HTTP requests. Only contains semantics
 * defined by the HTTP specification. Product-specific logging
 * information MUST be defined in a separate message.
 */
export interface HttpRequest {
  /** The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`. */
  requestMethod?: string;
  /**
   * The scheme (http, https), the host name, the path, and the query
   * portion of the URL that was requested.
   * Example: `"http://example.com/some/info?color=red"`.
   */
  requestUrl?: string;
  /**
   * The size of the HTTP request message in bytes, including the request
   * headers and the request body.
   */
  requestSize?: bigint;
  /**
   * The response code indicating the status of the response.
   * Examples: 200, 404.
   */
  status?: number;
  /**
   * The size of the HTTP response message sent back to the client, in bytes,
   * including the response headers and the response body.
   */
  responseSize?: bigint;
  /**
   * The user agent sent by the client. Example:
   * `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET
   * CLR 1.0.3705)"`.
   */
  userAgent?: string;
  /**
   * The IP address (IPv4 or IPv6) of the client that issued the HTTP
   * request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`.
   */
  remoteIp?: string;
  /**
   * The IP address (IPv4 or IPv6) of the origin server that the request was
   * sent to.
   */
  serverIp?: string;
  /**
   * The referer URL of the request, as defined in
   * [HTTP/1.1 Header Field
   * Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
   */
  referer?: string;
  /**
   * The request processing latency on the server, from the time the request was
   * received until the response was sent.
   */
  latency?: Duration;
  /** Whether or not a cache lookup was attempted. */
  cacheLookup?: boolean;
  /**
   * Whether or not an entity was served from cache
   * (with or without validation).
   */
  cacheHit?: boolean;
  /**
   * Whether or not the response was validated with the origin server before
   * being served from cache. This field is only meaningful if `cache_hit` is
   * True.
   */
  cacheValidatedWithOriginServer?: boolean;
  /**
   * The number of HTTP response bytes inserted into cache. Set only when a
   * cache fill was attempted.
   */
  cacheFillBytes?: bigint;
  /** Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */
  protocol?: string;
}
/**
 * A common proto for logging HTTP requests. Only contains semantics
 * defined by the HTTP specification. Product-specific logging
 * information MUST be defined in a separate message.
 */
export interface HttpRequestSDKType {
  request_method?: string;
  request_url?: string;
  request_size?: bigint;
  status?: number;
  response_size?: bigint;
  user_agent?: string;
  remote_ip?: string;
  server_ip?: string;
  referer?: string;
  latency?: DurationSDKType;
  cache_lookup?: boolean;
  cache_hit?: boolean;
  cache_validated_with_origin_server?: boolean;
  cache_fill_bytes?: bigint;
  protocol?: string;
}
function createBaseHttpRequest(): HttpRequest {
  return {
    requestMethod: undefined,
    requestUrl: undefined,
    requestSize: undefined,
    status: undefined,
    responseSize: undefined,
    userAgent: undefined,
    remoteIp: undefined,
    serverIp: undefined,
    referer: undefined,
    latency: undefined,
    cacheLookup: undefined,
    cacheHit: undefined,
    cacheValidatedWithOriginServer: undefined,
    cacheFillBytes: undefined,
    protocol: undefined
  };
}
export const HttpRequest = {
  typeUrl: "/google.api.servicecontrol.v1.HttpRequest",
  encode(message: HttpRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.requestMethod !== undefined) {
      writer.uint32(10).string(message.requestMethod);
    }
    if (message.requestUrl !== undefined) {
      writer.uint32(18).string(message.requestUrl);
    }
    if (message.requestSize !== undefined) {
      writer.uint32(24).int64(message.requestSize);
    }
    if (message.status !== undefined) {
      writer.uint32(32).int32(message.status);
    }
    if (message.responseSize !== undefined) {
      writer.uint32(40).int64(message.responseSize);
    }
    if (message.userAgent !== undefined) {
      writer.uint32(50).string(message.userAgent);
    }
    if (message.remoteIp !== undefined) {
      writer.uint32(58).string(message.remoteIp);
    }
    if (message.serverIp !== undefined) {
      writer.uint32(106).string(message.serverIp);
    }
    if (message.referer !== undefined) {
      writer.uint32(66).string(message.referer);
    }
    if (message.latency !== undefined) {
      Duration.encode(message.latency, writer.uint32(114).fork()).ldelim();
    }
    if (message.cacheLookup !== undefined) {
      writer.uint32(88).bool(message.cacheLookup);
    }
    if (message.cacheHit !== undefined) {
      writer.uint32(72).bool(message.cacheHit);
    }
    if (message.cacheValidatedWithOriginServer !== undefined) {
      writer.uint32(80).bool(message.cacheValidatedWithOriginServer);
    }
    if (message.cacheFillBytes !== undefined) {
      writer.uint32(96).int64(message.cacheFillBytes);
    }
    if (message.protocol !== undefined) {
      writer.uint32(122).string(message.protocol);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HttpRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.requestSize = reader.int64();
          break;
        case 4:
          message.status = reader.int32();
          break;
        case 5:
          message.responseSize = reader.int64();
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
          message.latency = Duration.decode(reader, reader.uint32());
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
          message.cacheFillBytes = reader.int64();
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
    const obj = createBaseHttpRequest();
    if (isSet(object.requestMethod)) obj.requestMethod = String(object.requestMethod);
    if (isSet(object.requestUrl)) obj.requestUrl = String(object.requestUrl);
    if (isSet(object.requestSize)) obj.requestSize = BigInt(object.requestSize.toString());
    if (isSet(object.status)) obj.status = Number(object.status);
    if (isSet(object.responseSize)) obj.responseSize = BigInt(object.responseSize.toString());
    if (isSet(object.userAgent)) obj.userAgent = String(object.userAgent);
    if (isSet(object.remoteIp)) obj.remoteIp = String(object.remoteIp);
    if (isSet(object.serverIp)) obj.serverIp = String(object.serverIp);
    if (isSet(object.referer)) obj.referer = String(object.referer);
    if (isSet(object.latency)) obj.latency = Duration.fromJSON(object.latency);
    if (isSet(object.cacheLookup)) obj.cacheLookup = Boolean(object.cacheLookup);
    if (isSet(object.cacheHit)) obj.cacheHit = Boolean(object.cacheHit);
    if (isSet(object.cacheValidatedWithOriginServer)) obj.cacheValidatedWithOriginServer = Boolean(object.cacheValidatedWithOriginServer);
    if (isSet(object.cacheFillBytes)) obj.cacheFillBytes = BigInt(object.cacheFillBytes.toString());
    if (isSet(object.protocol)) obj.protocol = String(object.protocol);
    return obj;
  },
  toJSON(message: HttpRequest): unknown {
    const obj: any = {};
    message.requestMethod !== undefined && (obj.requestMethod = message.requestMethod);
    message.requestUrl !== undefined && (obj.requestUrl = message.requestUrl);
    if (message.requestSize !== undefined) {
      obj.requestSize = message.requestSize.toString();
    }
    message.status !== undefined && (obj.status = Math.round(message.status));
    if (message.responseSize !== undefined) {
      obj.responseSize = message.responseSize.toString();
    }
    message.userAgent !== undefined && (obj.userAgent = message.userAgent);
    message.remoteIp !== undefined && (obj.remoteIp = message.remoteIp);
    message.serverIp !== undefined && (obj.serverIp = message.serverIp);
    message.referer !== undefined && (obj.referer = message.referer);
    message.latency !== undefined && (obj.latency = message.latency ? Duration.toJSON(message.latency) : undefined);
    message.cacheLookup !== undefined && (obj.cacheLookup = message.cacheLookup);
    message.cacheHit !== undefined && (obj.cacheHit = message.cacheHit);
    message.cacheValidatedWithOriginServer !== undefined && (obj.cacheValidatedWithOriginServer = message.cacheValidatedWithOriginServer);
    if (message.cacheFillBytes !== undefined) {
      obj.cacheFillBytes = message.cacheFillBytes.toString();
    }
    message.protocol !== undefined && (obj.protocol = message.protocol);
    return obj;
  },
  fromPartial(object: DeepPartial<HttpRequest>): HttpRequest {
    const message = createBaseHttpRequest();
    message.requestMethod = object.requestMethod ?? undefined;
    message.requestUrl = object.requestUrl ?? undefined;
    if (object.requestSize !== undefined && object.requestSize !== null) {
      message.requestSize = BigInt(object.requestSize.toString());
    }
    message.status = object.status ?? undefined;
    if (object.responseSize !== undefined && object.responseSize !== null) {
      message.responseSize = BigInt(object.responseSize.toString());
    }
    message.userAgent = object.userAgent ?? undefined;
    message.remoteIp = object.remoteIp ?? undefined;
    message.serverIp = object.serverIp ?? undefined;
    message.referer = object.referer ?? undefined;
    if (object.latency !== undefined && object.latency !== null) {
      message.latency = Duration.fromPartial(object.latency);
    }
    message.cacheLookup = object.cacheLookup ?? undefined;
    message.cacheHit = object.cacheHit ?? undefined;
    message.cacheValidatedWithOriginServer = object.cacheValidatedWithOriginServer ?? undefined;
    if (object.cacheFillBytes !== undefined && object.cacheFillBytes !== null) {
      message.cacheFillBytes = BigInt(object.cacheFillBytes.toString());
    }
    message.protocol = object.protocol ?? undefined;
    return message;
  },
  fromSDK(object: HttpRequestSDKType): HttpRequest {
    return {
      requestMethod: object?.request_method,
      requestUrl: object?.request_url,
      requestSize: object?.request_size,
      status: object?.status,
      responseSize: object?.response_size,
      userAgent: object?.user_agent,
      remoteIp: object?.remote_ip,
      serverIp: object?.server_ip,
      referer: object?.referer,
      latency: object.latency ? Duration.fromSDK(object.latency) : undefined,
      cacheLookup: object?.cache_lookup,
      cacheHit: object?.cache_hit,
      cacheValidatedWithOriginServer: object?.cache_validated_with_origin_server,
      cacheFillBytes: object?.cache_fill_bytes,
      protocol: object?.protocol
    };
  },
  fromSDKJSON(object: any): HttpRequestSDKType {
    return {
      request_method: isSet(object.request_method) ? String(object.request_method) : undefined,
      request_url: isSet(object.request_url) ? String(object.request_url) : undefined,
      request_size: isSet(object.request_size) ? BigInt(object.request_size.toString()) : undefined,
      status: isSet(object.status) ? Number(object.status) : undefined,
      response_size: isSet(object.response_size) ? BigInt(object.response_size.toString()) : undefined,
      user_agent: isSet(object.user_agent) ? String(object.user_agent) : undefined,
      remote_ip: isSet(object.remote_ip) ? String(object.remote_ip) : undefined,
      server_ip: isSet(object.server_ip) ? String(object.server_ip) : undefined,
      referer: isSet(object.referer) ? String(object.referer) : undefined,
      latency: isSet(object.latency) ? Duration.fromSDKJSON(object.latency) : undefined,
      cache_lookup: isSet(object.cache_lookup) ? Boolean(object.cache_lookup) : undefined,
      cache_hit: isSet(object.cache_hit) ? Boolean(object.cache_hit) : undefined,
      cache_validated_with_origin_server: isSet(object.cache_validated_with_origin_server) ? Boolean(object.cache_validated_with_origin_server) : undefined,
      cache_fill_bytes: isSet(object.cache_fill_bytes) ? BigInt(object.cache_fill_bytes.toString()) : undefined,
      protocol: isSet(object.protocol) ? String(object.protocol) : undefined
    };
  },
  toSDK(message: HttpRequest): HttpRequestSDKType {
    const obj: any = {};
    obj.request_method = message.requestMethod;
    obj.request_url = message.requestUrl;
    obj.request_size = message.requestSize;
    obj.status = message.status;
    obj.response_size = message.responseSize;
    obj.user_agent = message.userAgent;
    obj.remote_ip = message.remoteIp;
    obj.server_ip = message.serverIp;
    obj.referer = message.referer;
    message.latency !== undefined && (obj.latency = message.latency ? Duration.toSDK(message.latency) : undefined);
    obj.cache_lookup = message.cacheLookup;
    obj.cache_hit = message.cacheHit;
    obj.cache_validated_with_origin_server = message.cacheValidatedWithOriginServer;
    obj.cache_fill_bytes = message.cacheFillBytes;
    obj.protocol = message.protocol;
    return obj;
  },
  fromAmino(object: HttpRequestAmino): HttpRequest {
    return {
      requestMethod: object?.request_method,
      requestUrl: object?.request_url,
      requestSize: object?.request_size ? BigInt(object.request_size) : undefined,
      status: object?.status,
      responseSize: object?.response_size ? BigInt(object.response_size) : undefined,
      userAgent: object?.user_agent,
      remoteIp: object?.remote_ip,
      serverIp: object?.server_ip,
      referer: object?.referer,
      latency: object?.latency ? Duration.fromAmino(object.latency) : undefined,
      cacheLookup: object?.cache_lookup,
      cacheHit: object?.cache_hit,
      cacheValidatedWithOriginServer: object?.cache_validated_with_origin_server,
      cacheFillBytes: object?.cache_fill_bytes ? BigInt(object.cache_fill_bytes) : undefined,
      protocol: object?.protocol
    };
  },
  toAmino(message: HttpRequest): HttpRequestAmino {
    const obj: any = {};
    obj.request_method = message.requestMethod;
    obj.request_url = message.requestUrl;
    obj.request_size = message.requestSize ? message.requestSize.toString() : undefined;
    obj.status = message.status;
    obj.response_size = message.responseSize ? message.responseSize.toString() : undefined;
    obj.user_agent = message.userAgent;
    obj.remote_ip = message.remoteIp;
    obj.server_ip = message.serverIp;
    obj.referer = message.referer;
    obj.latency = message.latency ? Duration.toAmino(message.latency) : undefined;
    obj.cache_lookup = message.cacheLookup;
    obj.cache_hit = message.cacheHit;
    obj.cache_validated_with_origin_server = message.cacheValidatedWithOriginServer;
    obj.cache_fill_bytes = message.cacheFillBytes ? message.cacheFillBytes.toString() : undefined;
    obj.protocol = message.protocol;
    return obj;
  },
  fromAminoMsg(object: HttpRequestAminoMsg): HttpRequest {
    return HttpRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: HttpRequestProtoMsg): HttpRequest {
    return HttpRequest.decode(message.value);
  },
  toProto(message: HttpRequest): Uint8Array {
    return HttpRequest.encode(message).finish();
  },
  toProtoMsg(message: HttpRequest): HttpRequestProtoMsg {
    return {
      typeUrl: "/google.api.servicecontrol.v1.HttpRequest",
      value: HttpRequest.encode(message).finish()
    };
  }
};