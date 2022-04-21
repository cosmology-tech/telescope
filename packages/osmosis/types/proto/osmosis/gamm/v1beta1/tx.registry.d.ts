import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapShareAmountIn, MsgExitSwapExternAmountOut } from "./tx";
import * as _m0 from "protobufjs/minimal";
import { Registry } from "@cosmjs/proto-signing";
export declare const registry: {
    "/osmosis.gamm.v1beta1.MsgJoinPool": {
        encode(message: MsgJoinPool, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgJoinPool;
        fromJSON(object: any): MsgJoinPool;
        toJSON(message: MsgJoinPool): unknown;
        fromPartial<I extends unknown>(object: I): MsgJoinPool;
    };
    "/osmosis.gamm.v1beta1.MsgExitPool": {
        encode(message: MsgExitPool, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgExitPool;
        fromJSON(object: any): MsgExitPool;
        toJSON(message: MsgExitPool): unknown;
        fromPartial<I_1 extends unknown>(object: I_1): MsgExitPool;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
        encode(message: MsgSwapExactAmountIn, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgSwapExactAmountIn;
        fromJSON(object: any): MsgSwapExactAmountIn;
        toJSON(message: MsgSwapExactAmountIn): unknown;
        fromPartial<I_2 extends unknown>(object: I_2): MsgSwapExactAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
        encode(message: MsgSwapExactAmountOut, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgSwapExactAmountOut;
        fromJSON(object: any): MsgSwapExactAmountOut;
        toJSON(message: MsgSwapExactAmountOut): unknown;
        fromPartial<I_3 extends unknown>(object: I_3): MsgSwapExactAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
        encode(message: MsgJoinSwapExternAmountIn, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgJoinSwapExternAmountIn;
        fromJSON(object: any): MsgJoinSwapExternAmountIn;
        toJSON(message: MsgJoinSwapExternAmountIn): unknown;
        fromPartial<I_4 extends unknown>(object: I_4): MsgJoinSwapExternAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
        encode(message: MsgJoinSwapShareAmountOut, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgJoinSwapShareAmountOut;
        fromJSON(object: any): MsgJoinSwapShareAmountOut;
        toJSON(message: MsgJoinSwapShareAmountOut): unknown;
        fromPartial<I_5 extends unknown>(object: I_5): MsgJoinSwapShareAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
        encode(message: MsgExitSwapExternAmountOut, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgExitSwapExternAmountOut;
        fromJSON(object: any): MsgExitSwapExternAmountOut;
        toJSON(message: MsgExitSwapExternAmountOut): unknown;
        fromPartial<I_6 extends unknown>(object: I_6): MsgExitSwapExternAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
        encode(message: MsgExitSwapShareAmountIn, writer?: _m0.Writer): _m0.Writer;
        decode(input: Uint8Array | _m0.Reader, length?: number): MsgExitSwapShareAmountIn;
        fromJSON(object: any): MsgExitSwapShareAmountIn;
        toJSON(message: MsgExitSwapShareAmountIn): unknown;
        fromPartial<I_7 extends unknown>(object: I_7): MsgExitSwapShareAmountIn;
    };
};
export declare const load: (protoRegistry: Registry) => void;
