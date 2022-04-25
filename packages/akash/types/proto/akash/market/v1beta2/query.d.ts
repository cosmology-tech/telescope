import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { OrderFilters, OrderID, Order } from "../../../akash/market/v1beta2/order";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { BidFilters, BidID, Bid } from "../../../akash/market/v1beta2/bid";
import { Account, FractionalPayment } from "../../../akash/escrow/v1beta2/types";
import { LeaseFilters, LeaseID, Lease } from "../../../akash/market/v1beta2/lease";
/** QueryOrdersRequest is request type for the Query/Orders RPC method */
export interface QueryOrdersRequest {
    filters: OrderFilters;
    pagination: PageRequest;
}
/** QueryOrdersResponse is response type for the Query/Orders RPC method */
export interface QueryOrdersResponse {
    orders: Order[];
    pagination: PageResponse;
}
/** QueryOrderRequest is request type for the Query/Order RPC method */
export interface QueryOrderRequest {
    id: OrderID;
}
/** QueryOrderResponse is response type for the Query/Order RPC method */
export interface QueryOrderResponse {
    order: Order;
}
/** QueryBidsRequest is request type for the Query/Bids RPC method */
export interface QueryBidsRequest {
    filters: BidFilters;
    pagination: PageRequest;
}
/** QueryBidsResponse is response type for the Query/Bids RPC method */
export interface QueryBidsResponse {
    bids: QueryBidResponse[];
    pagination: PageResponse;
}
/** QueryBidRequest is request type for the Query/Bid RPC method */
export interface QueryBidRequest {
    id: BidID;
}
/** QueryBidResponse is response type for the Query/Bid RPC method */
export interface QueryBidResponse {
    bid: Bid;
    escrowAccount: Account;
}
/** QueryLeasesRequest is request type for the Query/Leases RPC method */
export interface QueryLeasesRequest {
    filters: LeaseFilters;
    pagination: PageRequest;
}
/** QueryLeasesResponse is response type for the Query/Leases RPC method */
export interface QueryLeasesResponse {
    leases: QueryLeaseResponse[];
    pagination: PageResponse;
}
/** QueryLeaseRequest is request type for the Query/Lease RPC method */
export interface QueryLeaseRequest {
    id: LeaseID;
}
/** QueryLeaseResponse is response type for the Query/Lease RPC method */
export interface QueryLeaseResponse {
    lease: Lease;
    escrowPayment: FractionalPayment;
}
export declare const QueryOrdersRequest: {
    encode(message: QueryOrdersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersRequest;
    fromJSON(object: any): QueryOrdersRequest;
    toJSON(message: QueryOrdersRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryOrdersRequest;
};
export declare const QueryOrdersResponse: {
    encode(message: QueryOrdersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrdersResponse;
    fromJSON(object: any): QueryOrdersResponse;
    toJSON(message: QueryOrdersResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryOrdersResponse;
};
export declare const QueryOrderRequest: {
    encode(message: QueryOrderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderRequest;
    fromJSON(object: any): QueryOrderRequest;
    toJSON(message: QueryOrderRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryOrderRequest;
};
export declare const QueryOrderResponse: {
    encode(message: QueryOrderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryOrderResponse;
    fromJSON(object: any): QueryOrderResponse;
    toJSON(message: QueryOrderResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryOrderResponse;
};
export declare const QueryBidsRequest: {
    encode(message: QueryBidsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsRequest;
    fromJSON(object: any): QueryBidsRequest;
    toJSON(message: QueryBidsRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryBidsRequest;
};
export declare const QueryBidsResponse: {
    encode(message: QueryBidsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidsResponse;
    fromJSON(object: any): QueryBidsResponse;
    toJSON(message: QueryBidsResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryBidsResponse;
};
export declare const QueryBidRequest: {
    encode(message: QueryBidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidRequest;
    fromJSON(object: any): QueryBidRequest;
    toJSON(message: QueryBidRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryBidRequest;
};
export declare const QueryBidResponse: {
    encode(message: QueryBidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBidResponse;
    fromJSON(object: any): QueryBidResponse;
    toJSON(message: QueryBidResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryBidResponse;
};
export declare const QueryLeasesRequest: {
    encode(message: QueryLeasesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesRequest;
    fromJSON(object: any): QueryLeasesRequest;
    toJSON(message: QueryLeasesRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryLeasesRequest;
};
export declare const QueryLeasesResponse: {
    encode(message: QueryLeasesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeasesResponse;
    fromJSON(object: any): QueryLeasesResponse;
    toJSON(message: QueryLeasesResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryLeasesResponse;
};
export declare const QueryLeaseRequest: {
    encode(message: QueryLeaseRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeaseRequest;
    fromJSON(object: any): QueryLeaseRequest;
    toJSON(message: QueryLeaseRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryLeaseRequest;
};
export declare const QueryLeaseResponse: {
    encode(message: QueryLeaseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryLeaseResponse;
    fromJSON(object: any): QueryLeaseResponse;
    toJSON(message: QueryLeaseResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryLeaseResponse;
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
