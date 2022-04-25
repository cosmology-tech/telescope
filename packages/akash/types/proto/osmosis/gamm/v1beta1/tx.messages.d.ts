import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapShareAmountIn, MsgExitSwapExternAmountOut } from "./tx";
export declare const messages: {
    joinPool(value: MsgJoinPool): {
        typeUrl: string;
        value: MsgJoinPool;
    };
    exitPool(value: MsgExitPool): {
        typeUrl: string;
        value: MsgExitPool;
    };
    swapExactAmountIn(value: MsgSwapExactAmountIn): {
        typeUrl: string;
        value: MsgSwapExactAmountIn;
    };
    swapExactAmountOut(value: MsgSwapExactAmountOut): {
        typeUrl: string;
        value: MsgSwapExactAmountOut;
    };
    joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn): {
        typeUrl: string;
        value: MsgJoinSwapExternAmountIn;
    };
    joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut): {
        typeUrl: string;
        value: MsgJoinSwapShareAmountOut;
    };
    exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut): {
        typeUrl: string;
        value: MsgExitSwapExternAmountOut;
    };
    exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn): {
        typeUrl: string;
        value: MsgExitSwapShareAmountIn;
    };
};
