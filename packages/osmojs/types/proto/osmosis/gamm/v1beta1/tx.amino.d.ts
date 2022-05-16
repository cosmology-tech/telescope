import { AminoMsg } from "@cosmjs/amino";
import { MsgJoinPool, MsgExitPool, MsgSwapExactAmountIn, MsgSwapExactAmountOut, MsgJoinSwapExternAmountIn, MsgJoinSwapShareAmountOut, MsgExitSwapExternAmountOut, MsgExitSwapShareAmountIn } from "./tx";
export interface AminoMsgJoinPool extends AminoMsg {
    type: "osmosis/gamm/join-pool";
    value: {
        sender: string;
        poolId: string;
        shareOutAmount: string;
        tokenInMaxs: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgExitPool extends AminoMsg {
    type: "osmosis/gamm/exit-pool";
    value: {
        sender: string;
        poolId: string;
        shareInAmount: string;
        tokenOutMins: {
            denom: string;
            amount: string;
        }[];
    };
}
export interface AminoMsgSwapExactAmountIn extends AminoMsg {
    type: "osmosis/gamm/swap-exact-amount-in";
    value: {
        sender: string;
        routes: {
            poolId: string;
            tokenOutDenom: string;
        }[];
        tokenIn: {
            denom: string;
            amount: string;
        };
        tokenOutMinAmount: string;
    };
}
export interface AminoMsgSwapExactAmountOut extends AminoMsg {
    type: "osmosis/gamm/swap-exact-amount-out";
    value: {
        sender: string;
        routes: {
            poolId: string;
            tokenInDenom: string;
        }[];
        tokenInMaxAmount: string;
        tokenOut: {
            denom: string;
            amount: string;
        };
    };
}
export interface AminoMsgJoinSwapExternAmountIn extends AminoMsg {
    type: "osmosis/gamm/join-swap-extern-amount-in";
    value: {
        sender: string;
        poolId: string;
        tokenIn: {
            denom: string;
            amount: string;
        };
        shareOutMinAmount: string;
    };
}
export interface AminoMsgJoinSwapShareAmountOut extends AminoMsg {
    type: "osmosis/gamm/join-swap-share-amount-out";
    value: {
        sender: string;
        poolId: string;
        tokenInDenom: string;
        shareOutAmount: string;
        tokenInMaxAmount: string;
    };
}
export interface AminoMsgExitSwapExternAmountOut extends AminoMsg {
    type: "osmosis/gamm/exit-swap-extern-amount-out";
    value: {
        sender: string;
        poolId: string;
        tokenOut: {
            denom: string;
            amount: string;
        };
        shareInMaxAmount: string;
    };
}
export interface AminoMsgExitSwapShareAmountIn extends AminoMsg {
    type: "osmosis/gamm/exit-swap-share-amount-in";
    value: {
        sender: string;
        poolId: string;
        tokenOutDenom: string;
        shareInAmount: string;
        tokenOutMinAmount: string;
    };
}
export declare const AminoConverter: {
    "/osmosis.gamm.v1beta1.MsgJoinPool": {
        aminoType: string;
        toAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: MsgJoinPool) => AminoMsgJoinPool["value"];
        fromAmino: ({ sender, poolId, shareOutAmount, tokenInMaxs }: AminoMsgJoinPool["value"]) => MsgJoinPool;
    };
    "/osmosis.gamm.v1beta1.MsgExitPool": {
        aminoType: string;
        toAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: MsgExitPool) => AminoMsgExitPool["value"];
        fromAmino: ({ sender, poolId, shareInAmount, tokenOutMins }: AminoMsgExitPool["value"]) => MsgExitPool;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: MsgSwapExactAmountIn) => AminoMsgSwapExactAmountIn["value"];
        fromAmino: ({ sender, routes, tokenIn, tokenOutMinAmount }: AminoMsgSwapExactAmountIn["value"]) => MsgSwapExactAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
        aminoType: string;
        toAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: MsgSwapExactAmountOut) => AminoMsgSwapExactAmountOut["value"];
        fromAmino: ({ sender, routes, tokenInMaxAmount, tokenOut }: AminoMsgSwapExactAmountOut["value"]) => MsgSwapExactAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: MsgJoinSwapExternAmountIn) => AminoMsgJoinSwapExternAmountIn["value"];
        fromAmino: ({ sender, poolId, tokenIn, shareOutMinAmount }: AminoMsgJoinSwapExternAmountIn["value"]) => MsgJoinSwapExternAmountIn;
    };
    "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: MsgJoinSwapShareAmountOut) => AminoMsgJoinSwapShareAmountOut["value"];
        fromAmino: ({ sender, poolId, tokenInDenom, shareOutAmount, tokenInMaxAmount }: AminoMsgJoinSwapShareAmountOut["value"]) => MsgJoinSwapShareAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: MsgExitSwapExternAmountOut) => AminoMsgExitSwapExternAmountOut["value"];
        fromAmino: ({ sender, poolId, tokenOut, shareInMaxAmount }: AminoMsgExitSwapExternAmountOut["value"]) => MsgExitSwapExternAmountOut;
    };
    "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
        aminoType: string;
        toAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: MsgExitSwapShareAmountIn) => AminoMsgExitSwapShareAmountIn["value"];
        fromAmino: ({ sender, poolId, tokenOutDenom, shareInAmount, tokenOutMinAmount }: AminoMsgExitSwapShareAmountIn["value"]) => MsgExitSwapShareAmountIn;
    };
};
