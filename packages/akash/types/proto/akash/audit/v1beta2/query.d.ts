import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { PageResponse, PageRequest } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider } from "../../../akash/audit/v1beta2/audit";
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
    providers: Provider[];
    pagination: PageResponse;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
    auditor: string;
    owner: string;
}
/** QueryAllProvidersAttributesRequest is request type for the Query/All Providers RPC method */
export interface QueryAllProvidersAttributesRequest {
    pagination: PageRequest;
}
/** QueryProviderAttributesRequest is request type for the Query/Provider RPC method */
export interface QueryProviderAttributesRequest {
    owner: string;
    pagination: PageRequest;
}
/** QueryProviderAuditorRequest is request type for the Query/Providers RPC method */
export interface QueryProviderAuditorRequest {
    auditor: string;
    owner: string;
}
/** QueryAuditorAttributesRequest is request type for the Query/Providers RPC method */
export interface QueryAuditorAttributesRequest {
    auditor: string;
    pagination: PageRequest;
}
export declare const QueryProvidersResponse: {
    encode(message: QueryProvidersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProvidersResponse;
    fromJSON(object: any): QueryProvidersResponse;
    toJSON(message: QueryProvidersResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryProvidersResponse;
};
export declare const QueryProviderRequest: {
    encode(message: QueryProviderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderRequest;
    fromJSON(object: any): QueryProviderRequest;
    toJSON(message: QueryProviderRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryProviderRequest;
};
export declare const QueryAllProvidersAttributesRequest: {
    encode(message: QueryAllProvidersAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllProvidersAttributesRequest;
    fromJSON(object: any): QueryAllProvidersAttributesRequest;
    toJSON(message: QueryAllProvidersAttributesRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryAllProvidersAttributesRequest;
};
export declare const QueryProviderAttributesRequest: {
    encode(message: QueryProviderAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderAttributesRequest;
    fromJSON(object: any): QueryProviderAttributesRequest;
    toJSON(message: QueryProviderAttributesRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryProviderAttributesRequest;
};
export declare const QueryProviderAuditorRequest: {
    encode(message: QueryProviderAuditorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderAuditorRequest;
    fromJSON(object: any): QueryProviderAuditorRequest;
    toJSON(message: QueryProviderAuditorRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryProviderAuditorRequest;
};
export declare const QueryAuditorAttributesRequest: {
    encode(message: QueryAuditorAttributesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuditorAttributesRequest;
    fromJSON(object: any): QueryAuditorAttributesRequest;
    toJSON(message: QueryAuditorAttributesRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryAuditorAttributesRequest;
};
/** Query defines the gRPC querier service */
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
