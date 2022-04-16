import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapShareAmountIn, MsgExitSwapExternAmountOut } from "./tx";
export declare const encoded: {
    joinPool(value: MsgJoinPool): {
        type_url: string;
        value: Uint8Array;
    };
    exitPool(value: MsgExitPool): {
        type_url: string;
        value: Uint8Array;
    };
    swapExactAmountIn(value: MsgSwapExactAmountIn): {
        type_url: string;
        value: Uint8Array;
    };
    swapExactAmountOut(value: MsgSwapExactAmountOut): {
        type_url: string;
        value: Uint8Array;
    };
    joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn): {
        type_url: string;
        value: Uint8Array;
    };
    joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut): {
        type_url: string;
        value: Uint8Array;
    };
    exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut): {
        type_url: string;
        value: Uint8Array;
    };
    exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn): {
        type_url: string;
        value: Uint8Array;
    };
};
