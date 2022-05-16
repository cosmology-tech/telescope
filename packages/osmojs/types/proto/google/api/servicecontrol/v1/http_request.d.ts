import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * A common proto for logging HTTP requests. Only contains semantics
 * defined by the HTTP specification. Product-specific logging
 * information MUST be defined in a separate message.
 */
export interface HttpRequest {
    /** The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`. */
    requestMethod: string;
    /**
     * The scheme (http, https), the host name, the path, and the query
     * portion of the URL that was requested.
     * Example: `"http://example.com/some/info?color=red"`.
     */
    requestUrl: string;
    /**
     * The size of the HTTP request message in bytes, including the request
     * headers and the request body.
     */
    requestSize: Long;
    /**
     * The response code indicating the status of the response.
     * Examples: 200, 404.
     */
    status: number;
    /**
     * The size of the HTTP response message sent back to the client, in bytes,
     * including the response headers and the response body.
     */
    responseSize: Long;
    /**
     * The user agent sent by the client. Example:
     * `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET
     * CLR 1.0.3705)"`.
     */
    userAgent: string;
    /**
     * The IP address (IPv4 or IPv6) of the client that issued the HTTP
     * request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`.
     */
    remoteIp: string;
    /**
     * The IP address (IPv4 or IPv6) of the origin server that the request was
     * sent to.
     */
    serverIp: string;
    /**
     * The referer URL of the request, as defined in
     * [HTTP/1.1 Header Field
     * Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
     */
    referer: string;
    /**
     * The request processing latency on the server, from the time the request was
     * received until the response was sent.
     */
    latency: string;
    /** Whether or not a cache lookup was attempted. */
    cacheLookup: boolean;
    /**
     * Whether or not an entity was served from cache
     * (with or without validation).
     */
    cacheHit: boolean;
    /**
     * Whether or not the response was validated with the origin server before
     * being served from cache. This field is only meaningful if `cache_hit` is
     * True.
     */
    cacheValidatedWithOriginServer: boolean;
    /**
     * The number of HTTP response bytes inserted into cache. Set only when a
     * cache fill was attempted.
     */
    cacheFillBytes: Long;
    /** Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */
    protocol: string;
}
export declare const HttpRequest: {
    encode(message: HttpRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HttpRequest;
    fromJSON(object: any): HttpRequest;
    toJSON(message: HttpRequest): unknown;
    fromPartial<I extends {
        requestMethod?: string;
        requestUrl?: string;
        requestSize?: any;
        status?: number;
        responseSize?: any;
        userAgent?: string;
        remoteIp?: string;
        serverIp?: string;
        referer?: string;
        latency?: string;
        cacheLookup?: boolean;
        cacheHit?: boolean;
        cacheValidatedWithOriginServer?: boolean;
        cacheFillBytes?: any;
        protocol?: string;
    } & {
        requestMethod?: string;
        requestUrl?: string;
        requestSize?: any;
        status?: number;
        responseSize?: any;
        userAgent?: string;
        remoteIp?: string;
        serverIp?: string;
        referer?: string;
        latency?: string;
        cacheLookup?: boolean;
        cacheHit?: boolean;
        cacheValidatedWithOriginServer?: boolean;
        cacheFillBytes?: any;
        protocol?: string;
    } & Record<Exclude<keyof I, keyof HttpRequest>, never>>(object: I): HttpRequest;
};
