import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapShareAmountIn, MsgExitSwapExternAmountOut } from "./tx";
export declare const fromJSON: {
    joinPool(value: any): {
        typeUrl: string;
        value: MsgJoinPool;
    };
    exitPool(value: any): {
        typeUrl: string;
        value: MsgExitPool;
    };
    swapExactAmountIn(value: any): {
        typeUrl: string;
        value: MsgSwapExactAmountIn;
    };
    swapExactAmountOut(value: any): {
        typeUrl: string;
        value: MsgSwapExactAmountOut;
    };
    joinSwapExternAmountIn(value: any): {
        typeUrl: string;
        value: MsgJoinSwapExternAmountIn;
    };
    joinSwapShareAmountOut(value: any): {
        typeUrl: string;
        value: MsgJoinSwapShareAmountOut;
    };
    exitSwapExternAmountOut(value: any): {
        typeUrl: string;
        value: MsgExitSwapExternAmountOut;
    };
    exitSwapShareAmountIn(value: any): {
        typeUrl: string;
        value: MsgExitSwapShareAmountIn;
    };
};
