import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { SwapAmountInRoute, SwapAmountOutRoute } from "./tx";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/** =============================== Pool */
export interface QueryPoolRequest {
    poolId: Long;
}
export interface QueryPoolResponse {
    pool: Any;
}
/** =============================== Pools */
export interface QueryPoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest;
}
export interface QueryPoolsResponse {
    pools: Any[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse;
}
/** =============================== NumPools */
export interface QueryNumPoolsRequest {
}
export interface QueryNumPoolsResponse {
    numPools: Long;
}
/** =============================== PoolParams */
export interface QueryPoolParamsRequest {
    poolId: Long;
}
export interface QueryPoolParamsResponse {
    params: Any;
}
/** =============================== PoolLiquidity */
export interface QueryTotalPoolLiquidityRequest {
    poolId: Long;
}
export interface QueryTotalPoolLiquidityResponse {
    liquidity: Coin[];
}
/** =============================== TotalShares */
export interface QueryTotalSharesRequest {
    poolId: Long;
}
export interface QueryTotalSharesResponse {
    totalShares: Coin;
}
/** =============================== SpotPrice */
export interface QuerySpotPriceRequest {
    poolId: Long;
    tokenInDenom: string;
    tokenOutDenom: string;
}
export interface QuerySpotPriceResponse {
    /** String of the Dec. Ex) 10.203uatom */
    spotPrice: string;
}
/** =============================== EstimateSwapExactAmountIn */
export interface QuerySwapExactAmountInRequest {
    sender: string;
    poolId: Long;
    tokenIn: string;
    routes: SwapAmountInRoute[];
}
export interface QuerySwapExactAmountInResponse {
    tokenOutAmount: string;
}
/** =============================== EstimateSwapExactAmountOut */
export interface QuerySwapExactAmountOutRequest {
    sender: string;
    poolId: Long;
    routes: SwapAmountOutRoute[];
    tokenOut: string;
}
export interface QuerySwapExactAmountOutResponse {
    tokenInAmount: string;
}
export interface QueryTotalLiquidityRequest {
}
export interface QueryTotalLiquidityResponse {
    liquidity: Coin[];
}
export declare const QueryPoolRequest: {
    encode(message: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest;
    fromJSON(object: any): QueryPoolRequest;
    toJSON(message: QueryPoolRequest): unknown;
    fromPartial<I extends {
        poolId?: any;
    } & {
        poolId?: any;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): QueryPoolRequest;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    toJSON(message: QueryPoolResponse): unknown;
    fromPartial<I extends {
        pool?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        pool?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["pool"], keyof Any>, never>;
    } & Record<Exclude<keyof I, "pool">, never>>(object: I): QueryPoolResponse;
};
export declare const QueryPoolsRequest: {
    encode(message: QueryPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest;
    fromJSON(object: any): QueryPoolsRequest;
    toJSON(message: QueryPoolsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        };
    } & {
        pagination?: {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & {
            key?: Uint8Array;
            offset?: any;
            limit?: any;
            countTotal?: boolean;
            reverse?: boolean;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryPoolsRequest;
};
export declare const QueryPoolsResponse: {
    encode(message: QueryPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse;
    fromJSON(object: any): QueryPoolsResponse;
    toJSON(message: QueryPoolsResponse): unknown;
    fromPartial<I extends {
        pools?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[];
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        };
    } & {
        pools?: {
            typeUrl?: string;
            value?: Uint8Array;
        }[] & ({
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["pools"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["pools"], keyof {
            typeUrl?: string;
            value?: Uint8Array;
        }[]>, never>;
        pagination?: {
            nextKey?: Uint8Array;
            total?: any;
        } & {
            nextKey?: Uint8Array;
            total?: any;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>;
    } & Record<Exclude<keyof I, keyof QueryPoolsResponse>, never>>(object: I): QueryPoolsResponse;
};
export declare const QueryNumPoolsRequest: {
    encode(_: QueryNumPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsRequest;
    fromJSON(_: any): QueryNumPoolsRequest;
    toJSON(_: QueryNumPoolsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryNumPoolsRequest;
};
export declare const QueryNumPoolsResponse: {
    encode(message: QueryNumPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryNumPoolsResponse;
    fromJSON(object: any): QueryNumPoolsResponse;
    toJSON(message: QueryNumPoolsResponse): unknown;
    fromPartial<I extends {
        numPools?: any;
    } & {
        numPools?: any;
    } & Record<Exclude<keyof I, "numPools">, never>>(object: I): QueryNumPoolsResponse;
};
export declare const QueryPoolParamsRequest: {
    encode(message: QueryPoolParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsRequest;
    fromJSON(object: any): QueryPoolParamsRequest;
    toJSON(message: QueryPoolParamsRequest): unknown;
    fromPartial<I extends {
        poolId?: any;
    } & {
        poolId?: any;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): QueryPoolParamsRequest;
};
export declare const QueryPoolParamsResponse: {
    encode(message: QueryPoolParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolParamsResponse;
    fromJSON(object: any): QueryPoolParamsResponse;
    toJSON(message: QueryPoolParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            typeUrl?: string;
            value?: Uint8Array;
        };
    } & {
        params?: {
            typeUrl?: string;
            value?: Uint8Array;
        } & {
            typeUrl?: string;
            value?: Uint8Array;
        } & Record<Exclude<keyof I["params"], keyof Any>, never>;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryPoolParamsResponse;
};
export declare const QueryTotalPoolLiquidityRequest: {
    encode(message: QueryTotalPoolLiquidityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPoolLiquidityRequest;
    fromJSON(object: any): QueryTotalPoolLiquidityRequest;
    toJSON(message: QueryTotalPoolLiquidityRequest): unknown;
    fromPartial<I extends {
        poolId?: any;
    } & {
        poolId?: any;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): QueryTotalPoolLiquidityRequest;
};
export declare const QueryTotalPoolLiquidityResponse: {
    encode(message: QueryTotalPoolLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalPoolLiquidityResponse;
    fromJSON(object: any): QueryTotalPoolLiquidityResponse;
    toJSON(message: QueryTotalPoolLiquidityResponse): unknown;
    fromPartial<I extends {
        liquidity?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        liquidity?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["liquidity"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["liquidity"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "liquidity">, never>>(object: I): QueryTotalPoolLiquidityResponse;
};
export declare const QueryTotalSharesRequest: {
    encode(message: QueryTotalSharesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesRequest;
    fromJSON(object: any): QueryTotalSharesRequest;
    toJSON(message: QueryTotalSharesRequest): unknown;
    fromPartial<I extends {
        poolId?: any;
    } & {
        poolId?: any;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): QueryTotalSharesRequest;
};
export declare const QueryTotalSharesResponse: {
    encode(message: QueryTotalSharesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalSharesResponse;
    fromJSON(object: any): QueryTotalSharesResponse;
    toJSON(message: QueryTotalSharesResponse): unknown;
    fromPartial<I extends {
        totalShares?: {
            denom?: string;
            amount?: string;
        };
    } & {
        totalShares?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["totalShares"], keyof Coin>, never>;
    } & Record<Exclude<keyof I, "totalShares">, never>>(object: I): QueryTotalSharesResponse;
};
export declare const QuerySpotPriceRequest: {
    encode(message: QuerySpotPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceRequest;
    fromJSON(object: any): QuerySpotPriceRequest;
    toJSON(message: QuerySpotPriceRequest): unknown;
    fromPartial<I extends {
        poolId?: any;
        tokenInDenom?: string;
        tokenOutDenom?: string;
    } & {
        poolId?: any;
        tokenInDenom?: string;
        tokenOutDenom?: string;
    } & Record<Exclude<keyof I, keyof QuerySpotPriceRequest>, never>>(object: I): QuerySpotPriceRequest;
};
export declare const QuerySpotPriceResponse: {
    encode(message: QuerySpotPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySpotPriceResponse;
    fromJSON(object: any): QuerySpotPriceResponse;
    toJSON(message: QuerySpotPriceResponse): unknown;
    fromPartial<I extends {
        spotPrice?: string;
    } & {
        spotPrice?: string;
    } & Record<Exclude<keyof I, "spotPrice">, never>>(object: I): QuerySpotPriceResponse;
};
export declare const QuerySwapExactAmountInRequest: {
    encode(message: QuerySwapExactAmountInRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountInRequest;
    fromJSON(object: any): QuerySwapExactAmountInRequest;
    toJSON(message: QuerySwapExactAmountInRequest): unknown;
    fromPartial<I extends {
        sender?: string;
        poolId?: any;
        tokenIn?: string;
        routes?: {
            poolId?: any;
            tokenOutDenom?: string;
        }[];
    } & {
        sender?: string;
        poolId?: any;
        tokenIn?: string;
        routes?: {
            poolId?: any;
            tokenOutDenom?: string;
        }[] & ({
            poolId?: any;
            tokenOutDenom?: string;
        } & {
            poolId?: any;
            tokenOutDenom?: string;
        } & Record<Exclude<keyof I["routes"][number], keyof SwapAmountInRoute>, never>)[] & Record<Exclude<keyof I["routes"], keyof {
            poolId?: any;
            tokenOutDenom?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof QuerySwapExactAmountInRequest>, never>>(object: I): QuerySwapExactAmountInRequest;
};
export declare const QuerySwapExactAmountInResponse: {
    encode(message: QuerySwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountInResponse;
    fromJSON(object: any): QuerySwapExactAmountInResponse;
    toJSON(message: QuerySwapExactAmountInResponse): unknown;
    fromPartial<I extends {
        tokenOutAmount?: string;
    } & {
        tokenOutAmount?: string;
    } & Record<Exclude<keyof I, "tokenOutAmount">, never>>(object: I): QuerySwapExactAmountInResponse;
};
export declare const QuerySwapExactAmountOutRequest: {
    encode(message: QuerySwapExactAmountOutRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountOutRequest;
    fromJSON(object: any): QuerySwapExactAmountOutRequest;
    toJSON(message: QuerySwapExactAmountOutRequest): unknown;
    fromPartial<I extends {
        sender?: string;
        poolId?: any;
        routes?: {
            poolId?: any;
            tokenInDenom?: string;
        }[];
        tokenOut?: string;
    } & {
        sender?: string;
        poolId?: any;
        routes?: {
            poolId?: any;
            tokenInDenom?: string;
        }[] & ({
            poolId?: any;
            tokenInDenom?: string;
        } & {
            poolId?: any;
            tokenInDenom?: string;
        } & Record<Exclude<keyof I["routes"][number], keyof SwapAmountOutRoute>, never>)[] & Record<Exclude<keyof I["routes"], keyof {
            poolId?: any;
            tokenInDenom?: string;
        }[]>, never>;
        tokenOut?: string;
    } & Record<Exclude<keyof I, keyof QuerySwapExactAmountOutRequest>, never>>(object: I): QuerySwapExactAmountOutRequest;
};
export declare const QuerySwapExactAmountOutResponse: {
    encode(message: QuerySwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapExactAmountOutResponse;
    fromJSON(object: any): QuerySwapExactAmountOutResponse;
    toJSON(message: QuerySwapExactAmountOutResponse): unknown;
    fromPartial<I extends {
        tokenInAmount?: string;
    } & {
        tokenInAmount?: string;
    } & Record<Exclude<keyof I, "tokenInAmount">, never>>(object: I): QuerySwapExactAmountOutResponse;
};
export declare const QueryTotalLiquidityRequest: {
    encode(_: QueryTotalLiquidityRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityRequest;
    fromJSON(_: any): QueryTotalLiquidityRequest;
    toJSON(_: QueryTotalLiquidityRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryTotalLiquidityRequest;
};
export declare const QueryTotalLiquidityResponse: {
    encode(message: QueryTotalLiquidityResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTotalLiquidityResponse;
    fromJSON(object: any): QueryTotalLiquidityResponse;
    toJSON(message: QueryTotalLiquidityResponse): unknown;
    fromPartial<I extends {
        liquidity?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        liquidity?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["liquidity"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["liquidity"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, "liquidity">, never>>(object: I): QueryTotalLiquidityResponse;
};
