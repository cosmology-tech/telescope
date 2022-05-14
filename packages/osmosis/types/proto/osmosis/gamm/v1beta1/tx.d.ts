import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
/**
 * ===================== MsgJoinPool
 * This is really MsgJoinPoolNoSwap
 */
export interface MsgJoinPool {
    sender: string;
    poolId: Long;
    shareOutAmount: string;
    tokenInMaxs: Coin[];
}
export interface MsgJoinPoolResponse {
}
/** ===================== MsgExitPool */
export interface MsgExitPool {
    sender: string;
    poolId: Long;
    shareInAmount: string;
    tokenOutMins: Coin[];
}
export interface MsgExitPoolResponse {
}
/** ===================== MsgSwapExactAmountIn */
export interface SwapAmountInRoute {
    poolId: Long;
    tokenOutDenom: string;
}
export interface MsgSwapExactAmountIn {
    sender: string;
    routes: SwapAmountInRoute[];
    tokenIn: Coin;
    tokenOutMinAmount: string;
}
export interface MsgSwapExactAmountInResponse {
    tokenOutAmount: string;
}
/** ===================== MsgSwapExactAmountOut */
export interface SwapAmountOutRoute {
    poolId: Long;
    tokenInDenom: string;
}
export interface MsgSwapExactAmountOut {
    sender: string;
    routes: SwapAmountOutRoute[];
    tokenInMaxAmount: string;
    tokenOut: Coin;
}
export interface MsgSwapExactAmountOutResponse {
    tokenInAmount: string;
}
/**
 * ===================== MsgJoinSwapExternAmountIn
 * TODO: Rename to MsgJoinSwapExactAmountIn
 */
export interface MsgJoinSwapExternAmountIn {
    sender: string;
    poolId: Long;
    tokenIn: Coin;
    /**
     * reserved 3;
     * reserved "token_in";
     */
    shareOutMinAmount: string;
}
export interface MsgJoinSwapExternAmountInResponse {
    shareOutAmount: string;
}
/** ===================== MsgJoinSwapShareAmountOut */
export interface MsgJoinSwapShareAmountOut {
    sender: string;
    poolId: Long;
    tokenInDenom: string;
    shareOutAmount: string;
    tokenInMaxAmount: string;
}
export interface MsgJoinSwapShareAmountOutResponse {
    tokenInAmount: string;
}
/** ===================== MsgExitSwapShareAmountIn */
export interface MsgExitSwapShareAmountIn {
    sender: string;
    poolId: Long;
    tokenOutDenom: string;
    shareInAmount: string;
    tokenOutMinAmount: string;
}
export interface MsgExitSwapShareAmountInResponse {
    tokenOutAmount: string;
}
/** ===================== MsgExitSwapExternAmountOut */
export interface MsgExitSwapExternAmountOut {
    sender: string;
    poolId: Long;
    tokenOut: Coin;
    shareInMaxAmount: string;
}
export interface MsgExitSwapExternAmountOutResponse {
    shareInAmount: string;
}
export declare const MsgJoinPool: {
    encode(message: MsgJoinPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPool;
    fromJSON(object: any): MsgJoinPool;
    toJSON(message: MsgJoinPool): unknown;
    fromPartial<I extends {
        sender?: string;
        poolId?: any;
        shareOutAmount?: string;
        tokenInMaxs?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        sender?: string;
        poolId?: any;
        shareOutAmount?: string;
        tokenInMaxs?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["tokenInMaxs"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["tokenInMaxs"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgJoinPool>, never>>(object: I): MsgJoinPool;
};
export declare const MsgJoinPoolResponse: {
    encode(_: MsgJoinPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinPoolResponse;
    fromJSON(_: any): MsgJoinPoolResponse;
    toJSON(_: MsgJoinPoolResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgJoinPoolResponse;
};
export declare const MsgExitPool: {
    encode(message: MsgExitPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPool;
    fromJSON(object: any): MsgExitPool;
    toJSON(message: MsgExitPool): unknown;
    fromPartial<I extends {
        sender?: string;
        poolId?: any;
        shareInAmount?: string;
        tokenOutMins?: {
            denom?: string;
            amount?: string;
        }[];
    } & {
        sender?: string;
        poolId?: any;
        shareInAmount?: string;
        tokenOutMins?: {
            denom?: string;
            amount?: string;
        }[] & ({
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["tokenOutMins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["tokenOutMins"], keyof {
            denom?: string;
            amount?: string;
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof MsgExitPool>, never>>(object: I): MsgExitPool;
};
export declare const MsgExitPoolResponse: {
    encode(_: MsgExitPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitPoolResponse;
    fromJSON(_: any): MsgExitPoolResponse;
    toJSON(_: MsgExitPoolResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgExitPoolResponse;
};
export declare const SwapAmountInRoute: {
    encode(message: SwapAmountInRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountInRoute;
    fromJSON(object: any): SwapAmountInRoute;
    toJSON(message: SwapAmountInRoute): unknown;
    fromPartial<I extends {
        poolId?: any;
        tokenOutDenom?: string;
    } & {
        poolId?: any;
        tokenOutDenom?: string;
    } & Record<Exclude<keyof I, keyof SwapAmountInRoute>, never>>(object: I): SwapAmountInRoute;
};
export declare const MsgSwapExactAmountIn: {
    encode(message: MsgSwapExactAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountIn;
    fromJSON(object: any): MsgSwapExactAmountIn;
    toJSON(message: MsgSwapExactAmountIn): unknown;
    fromPartial<I extends {
        sender?: string;
        routes?: {
            poolId?: any;
            tokenOutDenom?: string;
        }[];
        tokenIn?: {
            denom?: string;
            amount?: string;
        };
        tokenOutMinAmount?: string;
    } & {
        sender?: string;
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
        tokenIn?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["tokenIn"], keyof Coin>, never>;
        tokenOutMinAmount?: string;
    } & Record<Exclude<keyof I, keyof MsgSwapExactAmountIn>, never>>(object: I): MsgSwapExactAmountIn;
};
export declare const MsgSwapExactAmountInResponse: {
    encode(message: MsgSwapExactAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountInResponse;
    fromJSON(object: any): MsgSwapExactAmountInResponse;
    toJSON(message: MsgSwapExactAmountInResponse): unknown;
    fromPartial<I extends {
        tokenOutAmount?: string;
    } & {
        tokenOutAmount?: string;
    } & Record<Exclude<keyof I, "tokenOutAmount">, never>>(object: I): MsgSwapExactAmountInResponse;
};
export declare const SwapAmountOutRoute: {
    encode(message: SwapAmountOutRoute, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SwapAmountOutRoute;
    fromJSON(object: any): SwapAmountOutRoute;
    toJSON(message: SwapAmountOutRoute): unknown;
    fromPartial<I extends {
        poolId?: any;
        tokenInDenom?: string;
    } & {
        poolId?: any;
        tokenInDenom?: string;
    } & Record<Exclude<keyof I, keyof SwapAmountOutRoute>, never>>(object: I): SwapAmountOutRoute;
};
export declare const MsgSwapExactAmountOut: {
    encode(message: MsgSwapExactAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOut;
    fromJSON(object: any): MsgSwapExactAmountOut;
    toJSON(message: MsgSwapExactAmountOut): unknown;
    fromPartial<I extends {
        sender?: string;
        routes?: {
            poolId?: any;
            tokenInDenom?: string;
        }[];
        tokenInMaxAmount?: string;
        tokenOut?: {
            denom?: string;
            amount?: string;
        };
    } & {
        sender?: string;
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
        tokenInMaxAmount?: string;
        tokenOut?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["tokenOut"], keyof Coin>, never>;
    } & Record<Exclude<keyof I, keyof MsgSwapExactAmountOut>, never>>(object: I): MsgSwapExactAmountOut;
};
export declare const MsgSwapExactAmountOutResponse: {
    encode(message: MsgSwapExactAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapExactAmountOutResponse;
    fromJSON(object: any): MsgSwapExactAmountOutResponse;
    toJSON(message: MsgSwapExactAmountOutResponse): unknown;
    fromPartial<I extends {
        tokenInAmount?: string;
    } & {
        tokenInAmount?: string;
    } & Record<Exclude<keyof I, "tokenInAmount">, never>>(object: I): MsgSwapExactAmountOutResponse;
};
export declare const MsgJoinSwapExternAmountIn: {
    encode(message: MsgJoinSwapExternAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountIn;
    fromJSON(object: any): MsgJoinSwapExternAmountIn;
    toJSON(message: MsgJoinSwapExternAmountIn): unknown;
    fromPartial<I extends {
        sender?: string;
        poolId?: any;
        tokenIn?: {
            denom?: string;
            amount?: string;
        };
        shareOutMinAmount?: string;
    } & {
        sender?: string;
        poolId?: any;
        tokenIn?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["tokenIn"], keyof Coin>, never>;
        shareOutMinAmount?: string;
    } & Record<Exclude<keyof I, keyof MsgJoinSwapExternAmountIn>, never>>(object: I): MsgJoinSwapExternAmountIn;
};
export declare const MsgJoinSwapExternAmountInResponse: {
    encode(message: MsgJoinSwapExternAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapExternAmountInResponse;
    fromJSON(object: any): MsgJoinSwapExternAmountInResponse;
    toJSON(message: MsgJoinSwapExternAmountInResponse): unknown;
    fromPartial<I extends {
        shareOutAmount?: string;
    } & {
        shareOutAmount?: string;
    } & Record<Exclude<keyof I, "shareOutAmount">, never>>(object: I): MsgJoinSwapExternAmountInResponse;
};
export declare const MsgJoinSwapShareAmountOut: {
    encode(message: MsgJoinSwapShareAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOut;
    fromJSON(object: any): MsgJoinSwapShareAmountOut;
    toJSON(message: MsgJoinSwapShareAmountOut): unknown;
    fromPartial<I extends {
        sender?: string;
        poolId?: any;
        tokenInDenom?: string;
        shareOutAmount?: string;
        tokenInMaxAmount?: string;
    } & {
        sender?: string;
        poolId?: any;
        tokenInDenom?: string;
        shareOutAmount?: string;
        tokenInMaxAmount?: string;
    } & Record<Exclude<keyof I, keyof MsgJoinSwapShareAmountOut>, never>>(object: I): MsgJoinSwapShareAmountOut;
};
export declare const MsgJoinSwapShareAmountOutResponse: {
    encode(message: MsgJoinSwapShareAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinSwapShareAmountOutResponse;
    fromJSON(object: any): MsgJoinSwapShareAmountOutResponse;
    toJSON(message: MsgJoinSwapShareAmountOutResponse): unknown;
    fromPartial<I extends {
        tokenInAmount?: string;
    } & {
        tokenInAmount?: string;
    } & Record<Exclude<keyof I, "tokenInAmount">, never>>(object: I): MsgJoinSwapShareAmountOutResponse;
};
export declare const MsgExitSwapShareAmountIn: {
    encode(message: MsgExitSwapShareAmountIn, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapShareAmountIn;
    fromJSON(object: any): MsgExitSwapShareAmountIn;
    toJSON(message: MsgExitSwapShareAmountIn): unknown;
    fromPartial<I extends {
        sender?: string;
        poolId?: any;
        tokenOutDenom?: string;
        shareInAmount?: string;
        tokenOutMinAmount?: string;
    } & {
        sender?: string;
        poolId?: any;
        tokenOutDenom?: string;
        shareInAmount?: string;
        tokenOutMinAmount?: string;
    } & Record<Exclude<keyof I, keyof MsgExitSwapShareAmountIn>, never>>(object: I): MsgExitSwapShareAmountIn;
};
export declare const MsgExitSwapShareAmountInResponse: {
    encode(message: MsgExitSwapShareAmountInResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapShareAmountInResponse;
    fromJSON(object: any): MsgExitSwapShareAmountInResponse;
    toJSON(message: MsgExitSwapShareAmountInResponse): unknown;
    fromPartial<I extends {
        tokenOutAmount?: string;
    } & {
        tokenOutAmount?: string;
    } & Record<Exclude<keyof I, "tokenOutAmount">, never>>(object: I): MsgExitSwapShareAmountInResponse;
};
export declare const MsgExitSwapExternAmountOut: {
    encode(message: MsgExitSwapExternAmountOut, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOut;
    fromJSON(object: any): MsgExitSwapExternAmountOut;
    toJSON(message: MsgExitSwapExternAmountOut): unknown;
    fromPartial<I extends {
        sender?: string;
        poolId?: any;
        tokenOut?: {
            denom?: string;
            amount?: string;
        };
        shareInMaxAmount?: string;
    } & {
        sender?: string;
        poolId?: any;
        tokenOut?: {
            denom?: string;
            amount?: string;
        } & {
            denom?: string;
            amount?: string;
        } & Record<Exclude<keyof I["tokenOut"], keyof Coin>, never>;
        shareInMaxAmount?: string;
    } & Record<Exclude<keyof I, keyof MsgExitSwapExternAmountOut>, never>>(object: I): MsgExitSwapExternAmountOut;
};
export declare const MsgExitSwapExternAmountOutResponse: {
    encode(message: MsgExitSwapExternAmountOutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgExitSwapExternAmountOutResponse;
    fromJSON(object: any): MsgExitSwapExternAmountOutResponse;
    toJSON(message: MsgExitSwapExternAmountOutResponse): unknown;
    fromPartial<I extends {
        shareInAmount?: string;
    } & {
        shareInAmount?: string;
    } & Record<Exclude<keyof I, "shareInAmount">, never>>(object: I): MsgExitSwapExternAmountOutResponse;
};
