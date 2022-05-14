import { FeeToken } from "./feetoken";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
export interface QueryFeeTokensRequest {
}
export interface QueryFeeTokensResponse {
    feeTokens: FeeToken[];
}
export interface QueryDenomPoolIdRequest {
    denom: string;
}
export interface QueryDenomPoolIdResponse {
    poolID: Long;
}
export interface QueryBaseDenomRequest {
}
export interface QueryBaseDenomResponse {
    baseDenom: string;
}
export declare const QueryFeeTokensRequest: {
    encode(_: QueryFeeTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensRequest;
    fromJSON(_: any): QueryFeeTokensRequest;
    toJSON(_: QueryFeeTokensRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryFeeTokensRequest;
};
export declare const QueryFeeTokensResponse: {
    encode(message: QueryFeeTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFeeTokensResponse;
    fromJSON(object: any): QueryFeeTokensResponse;
    toJSON(message: QueryFeeTokensResponse): unknown;
    fromPartial<I extends {
        feeTokens?: {
            denom?: string;
            poolID?: any;
        }[];
    } & {
        feeTokens?: {
            denom?: string;
            poolID?: any;
        }[] & ({
            denom?: string;
            poolID?: any;
        } & {
            denom?: string;
            poolID?: any;
        } & Record<Exclude<keyof I["feeTokens"][number], keyof FeeToken>, never>)[] & Record<Exclude<keyof I["feeTokens"], keyof {
            denom?: string;
            poolID?: any;
        }[]>, never>;
    } & Record<Exclude<keyof I, "feeTokens">, never>>(object: I): QueryFeeTokensResponse;
};
export declare const QueryDenomPoolIdRequest: {
    encode(message: QueryDenomPoolIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdRequest;
    fromJSON(object: any): QueryDenomPoolIdRequest;
    toJSON(message: QueryDenomPoolIdRequest): unknown;
    fromPartial<I extends {
        denom?: string;
    } & {
        denom?: string;
    } & Record<Exclude<keyof I, "denom">, never>>(object: I): QueryDenomPoolIdRequest;
};
export declare const QueryDenomPoolIdResponse: {
    encode(message: QueryDenomPoolIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomPoolIdResponse;
    fromJSON(object: any): QueryDenomPoolIdResponse;
    toJSON(message: QueryDenomPoolIdResponse): unknown;
    fromPartial<I extends {
        poolID?: any;
    } & {
        poolID?: any;
    } & Record<Exclude<keyof I, "poolID">, never>>(object: I): QueryDenomPoolIdResponse;
};
export declare const QueryBaseDenomRequest: {
    encode(_: QueryBaseDenomRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomRequest;
    fromJSON(_: any): QueryBaseDenomRequest;
    toJSON(_: QueryBaseDenomRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryBaseDenomRequest;
};
export declare const QueryBaseDenomResponse: {
    encode(message: QueryBaseDenomResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryBaseDenomResponse;
    fromJSON(object: any): QueryBaseDenomResponse;
    toJSON(message: QueryBaseDenomResponse): unknown;
    fromPartial<I extends {
        baseDenom?: string;
    } & {
        baseDenom?: string;
    } & Record<Exclude<keyof I, "baseDenom">, never>>(object: I): QueryBaseDenomResponse;
};
