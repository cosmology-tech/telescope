import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { DenomTrace, Params } from "../../../../ibc/applications/transfer/v1/transfer";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequest {
    /** hash (in hex format) of the denomination trace information. */
    hash: string;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponse {
    /** denom_trace returns the requested denomination trace information. */
    denomTrace: DenomTrace;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponse {
    /** denom_traces returns all denominations trace information. */
    denomTraces: DenomTrace[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export declare const QueryDenomTraceRequest: {
    encode(message: QueryDenomTraceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTraceRequest;
    fromJSON(object: any): QueryDenomTraceRequest;
    toJSON(message: QueryDenomTraceRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryDenomTraceRequest;
};
export declare const QueryDenomTraceResponse: {
    encode(message: QueryDenomTraceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTraceResponse;
    fromJSON(object: any): QueryDenomTraceResponse;
    toJSON(message: QueryDenomTraceResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryDenomTraceResponse;
};
export declare const QueryDenomTracesRequest: {
    encode(message: QueryDenomTracesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTracesRequest;
    fromJSON(object: any): QueryDenomTracesRequest;
    toJSON(message: QueryDenomTracesRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryDenomTracesRequest;
};
export declare const QueryDenomTracesResponse: {
    encode(message: QueryDenomTracesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomTracesResponse;
    fromJSON(object: any): QueryDenomTracesResponse;
    toJSON(message: QueryDenomTracesResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryDenomTracesResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends unknown>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryParamsResponse;
};
/** Query provides defines the gRPC querier service. */
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
