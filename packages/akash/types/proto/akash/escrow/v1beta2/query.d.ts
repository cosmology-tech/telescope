import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, FractionalPayment } from "../../../akash/escrow/v1beta2/types";
/** QueryAccountRequest is request type for the Query/Account RPC method */
export interface QueryAccountsRequest {
    scope: string;
    xid: string;
    owner: string;
    state: string;
    pagination: PageRequest;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryAccountsResponse {
    accounts: Account[];
    pagination: PageResponse;
}
/** QueryPaymentRequest is request type for the Query/Payment RPC method */
export interface QueryPaymentsRequest {
    scope: string;
    xid: string;
    id: string;
    owner: string;
    state: string;
    pagination: PageRequest;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryPaymentsResponse {
    payments: FractionalPayment[];
    pagination: PageResponse;
}
export declare const QueryAccountsRequest: {
    encode(message: QueryAccountsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsRequest;
    fromJSON(object: any): QueryAccountsRequest;
    toJSON(message: QueryAccountsRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryAccountsRequest;
};
export declare const QueryAccountsResponse: {
    encode(message: QueryAccountsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountsResponse;
    fromJSON(object: any): QueryAccountsResponse;
    toJSON(message: QueryAccountsResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryAccountsResponse;
};
export declare const QueryPaymentsRequest: {
    encode(message: QueryPaymentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentsRequest;
    fromJSON(object: any): QueryPaymentsRequest;
    toJSON(message: QueryPaymentsRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryPaymentsRequest;
};
export declare const QueryPaymentsResponse: {
    encode(message: QueryPaymentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPaymentsResponse;
    fromJSON(object: any): QueryPaymentsResponse;
    toJSON(message: QueryPaymentsResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryPaymentsResponse;
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
