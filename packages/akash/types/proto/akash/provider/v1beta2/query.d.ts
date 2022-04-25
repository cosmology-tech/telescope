import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Provider } from "../../../akash/provider/v1beta2/provider";
/** QueryProvidersRequest is request type for the Query/Providers RPC method */
export interface QueryProvidersRequest {
    pagination: PageRequest;
}
/** QueryProvidersResponse is response type for the Query/Providers RPC method */
export interface QueryProvidersResponse {
    providers: Provider[];
    pagination: PageResponse;
}
/** QueryProviderRequest is request type for the Query/Provider RPC method */
export interface QueryProviderRequest {
    owner: string;
}
/** QueryProviderResponse is response type for the Query/Provider RPC method */
export interface QueryProviderResponse {
    provider: Provider;
}
export declare const QueryProvidersRequest: {
    encode(message: QueryProvidersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProvidersRequest;
    fromJSON(object: any): QueryProvidersRequest;
    toJSON(message: QueryProvidersRequest): unknown;
    fromPartial<I extends unknown>(object: I): QueryProvidersRequest;
};
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
export declare const QueryProviderResponse: {
    encode(message: QueryProviderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProviderResponse;
    fromJSON(object: any): QueryProviderResponse;
    toJSON(message: QueryProviderResponse): unknown;
    fromPartial<I extends unknown>(object: I): QueryProviderResponse;
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
