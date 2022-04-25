import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Grant } from "../../../cosmos/feegrant/v1beta1/feegrant";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
/** Since: cosmos-sdk 0.43 */
/** QueryAllowanceRequest is the request type for the Query/Allowance RPC method. */
export interface QueryAllowanceRequest {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
/** QueryAllowanceResponse is the response type for the Query/Allowance RPC method. */
export interface QueryAllowanceResponse {
    /** allowance is a allowance granted for grantee by granter. */
    allowance: Grant;
}
/** QueryAllowancesRequest is the request type for the Query/Allowances RPC method. */
export interface QueryAllowancesRequest {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination: PageRequest;
}
/** QueryAllowancesResponse is the response type for the Query/Allowances RPC method. */
export interface QueryAllowancesResponse {
    /** allowances are allowance's granted for grantee by granter. */
    allowances: Grant[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse;
}
/** QueryAllowancesByGranterRequest is the request type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterRequest {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination: PageRequest;
}
/** QueryAllowancesByGranterResponse is the response type for the Query/AllowancesByGranter RPC method. */
export interface QueryAllowancesByGranterResponse {
    /** allowances that have been issued by the granter. */
    allowances: Grant[];
    /** pagination defines an pagination for the response. */
    pagination: PageResponse;
}
export declare const QueryAllowanceRequest: {
    encode(message: QueryAllowanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowanceRequest;
    fromJSON(object: any): QueryAllowanceRequest;
    toJSON(message: QueryAllowanceRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryAllowanceRequest;
};
export declare const QueryAllowanceResponse: {
    encode(message: QueryAllowanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowanceResponse;
    fromJSON(object: any): QueryAllowanceResponse;
    toJSON(message: QueryAllowanceResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryAllowanceResponse;
};
export declare const QueryAllowancesRequest: {
    encode(message: QueryAllowancesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesRequest;
    fromJSON(object: any): QueryAllowancesRequest;
    toJSON(message: QueryAllowancesRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryAllowancesRequest;
};
export declare const QueryAllowancesResponse: {
    encode(message: QueryAllowancesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesResponse;
    fromJSON(object: any): QueryAllowancesResponse;
    toJSON(message: QueryAllowancesResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryAllowancesResponse;
};
export declare const QueryAllowancesByGranterRequest: {
    encode(message: QueryAllowancesByGranterRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesByGranterRequest;
    fromJSON(object: any): QueryAllowancesByGranterRequest;
    toJSON(message: QueryAllowancesByGranterRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryAllowancesByGranterRequest;
};
export declare const QueryAllowancesByGranterResponse: {
    encode(message: QueryAllowancesByGranterResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowancesByGranterResponse;
    fromJSON(object: any): QueryAllowancesByGranterResponse;
    toJSON(message: QueryAllowancesByGranterResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryAllowancesByGranterResponse;
};
/** Query defines the gRPC querier service. */
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
