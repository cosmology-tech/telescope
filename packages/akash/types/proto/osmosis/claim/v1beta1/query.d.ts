import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../osmosis/claim/v1beta1/params";
import { ClaimRecord, Action } from "../../../osmosis/claim/v1beta1/claim";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryModuleAccountBalanceResponse {
    /** params defines the parameters of the module. */
    moduleAccountBalance: Coin[];
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params: Params;
}
export interface QueryClaimRecordRequest {
    address: string;
}
export interface QueryClaimRecordResponse {
    claimRecord: ClaimRecord;
}
export interface QueryClaimableForActionRequest {
    address: string;
    action: Action;
}
export interface QueryClaimableForActionResponse {
    coins: Coin[];
}
export interface QueryTotalClaimableRequest {
    address: string;
}
export interface QueryTotalClaimableResponse {
    coins: Coin[];
}
export declare const QueryModuleAccountBalanceRequest: {
    encode(_: QueryModuleAccountBalanceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceRequest;
    fromJSON(_: any): QueryModuleAccountBalanceRequest;
    toJSON(_: QueryModuleAccountBalanceRequest): unknown;
    fromPartial<I extends unknown>(_: I): QueryModuleAccountBalanceRequest;
};
export declare const QueryModuleAccountBalanceResponse: {
    encode(message: QueryModuleAccountBalanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleAccountBalanceResponse;
    fromJSON(object: any): QueryModuleAccountBalanceResponse;
    toJSON(message: QueryModuleAccountBalanceResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryModuleAccountBalanceResponse;
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
export declare const QueryClaimRecordRequest: {
    encode(message: QueryClaimRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordRequest;
    fromJSON(object: any): QueryClaimRecordRequest;
    toJSON(message: QueryClaimRecordRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryClaimRecordRequest;
};
export declare const QueryClaimRecordResponse: {
    encode(message: QueryClaimRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimRecordResponse;
    fromJSON(object: any): QueryClaimRecordResponse;
    toJSON(message: QueryClaimRecordResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryClaimRecordResponse;
};
export declare const QueryClaimableForActionRequest: {
    encode(message: QueryClaimableForActionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionRequest;
    fromJSON(object: any): QueryClaimableForActionRequest;
    toJSON(message: QueryClaimableForActionRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryClaimableForActionRequest;
};
export declare const QueryClaimableForActionResponse: {
    encode(message: QueryClaimableForActionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryClaimableForActionResponse;
    fromJSON(object: any): QueryClaimableForActionResponse;
    toJSON(message: QueryClaimableForActionResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryClaimableForActionResponse;
};
export declare const QueryTotalClaimableRequest: {
    encode(message: QueryTotalClaimableRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableRequest;
    fromJSON(object: any): QueryTotalClaimableRequest;
    toJSON(message: QueryTotalClaimableRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryTotalClaimableRequest;
};
export declare const QueryTotalClaimableResponse: {
    encode(message: QueryTotalClaimableResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalClaimableResponse;
    fromJSON(object: any): QueryTotalClaimableResponse;
    toJSON(message: QueryTotalClaimableResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryTotalClaimableResponse;
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
