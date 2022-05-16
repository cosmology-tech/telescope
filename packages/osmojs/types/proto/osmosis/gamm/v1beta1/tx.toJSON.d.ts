import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapShareAmountIn, MsgExitSwapExternAmountOut } from "./tx";
export declare const toJSON: {
    joinPool(value: MsgJoinPool): {
        typeUrl: string;
        value: unknown;
    };
    exitPool(value: MsgExitPool): {
        typeUrl: string;
        value: unknown;
    };
    swapExactAmountIn(value: MsgSwapExactAmountIn): {
        typeUrl: string;
        value: unknown;
    };
    swapExactAmountOut(value: MsgSwapExactAmountOut): {
        typeUrl: string;
        value: unknown;
    };
    joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn): {
        typeUrl: string;
        value: unknown;
    };
    joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut): {
        typeUrl: string;
        value: unknown;
    };
    exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut): {
        typeUrl: string;
        value: unknown;
    };
    exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn): {
        typeUrl: string;
        value: unknown;
    };
};
