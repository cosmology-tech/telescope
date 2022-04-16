import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgJoinPool, MsgExitPool, SwapAmountInRoute, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, SwapAmountOutRoute, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInResponse, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutResponse, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInResponse, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutResponse, MsgJoinPoolResponse, MsgExitPoolResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export interface AminoMsgJoinPool extends AminoMsg {
  type: "osmosis/gamm/msg-join-pool";
  value: {
    sender: string;
    pool_id: string;
    share_out_amount: string;
    token_in_maxs: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgExitPool extends AminoMsg {
  type: "osmosis/gamm/msg-exit-pool";
  value: {
    sender: string;
    pool_id: string;
    share_in_amount: string;
    token_out_mins: {
      denom: string;
      amount: string;
    }[];
  };
}
export interface AminoMsgSwapExactAmountIn extends AminoMsg {
  type: "osmosis/gamm/msg-swap-exact-amount-in";
  value: {
    sender: string;
    routes: {
      pool_id: string;
      token_out_denom: string;
    }[];
    token_in: {
      denom: string;
      amount: string;
    };
    token_out_min_amount: string;
  };
}
export interface AminoMsgSwapExactAmountOut extends AminoMsg {
  type: "osmosis/gamm/msg-swap-exact-amount-out";
  value: {
    sender: string;
    routes: {
      pool_id: string;
      token_in_denom: string;
    }[];
    token_in_max_amount: string;
    token_out: {
      denom: string;
      amount: string;
    };
  };
}
export interface AminoMsgJoinSwapExternAmountIn extends AminoMsg {
  type: "osmosis/gamm/msg-join-swap-extern-amount-in";
  value: {
    sender: string;
    pool_id: string;
    token_in: {
      denom: string;
      amount: string;
    };
    share_out_min_amount: string;
  };
}
export interface AminoMsgJoinSwapShareAmountOut extends AminoMsg {
  type: "osmosis/gamm/msg-join-swap-share-amount-out";
  value: {
    sender: string;
    pool_id: string;
    token_in_denom: string;
    share_out_amount: string;
    token_in_max_amount: string;
  };
}
export interface AminoMsgExitSwapExternAmountOut extends AminoMsg {
  type: "osmosis/gamm/msg-exit-swap-extern-amount-out";
  value: {
    sender: string;
    pool_id: string;
    token_out: {
      denom: string;
      amount: string;
    };
    share_in_max_amount: string;
  };
}
export interface AminoMsgExitSwapShareAmountIn extends AminoMsg {
  type: "osmosis/gamm/msg-exit-swap-share-amount-in";
  value: {
    sender: string;
    pool_id: string;
    token_out_denom: string;
    share_in_amount: string;
    token_out_min_amount: string;
  };
}
export const AminoConverter = {
  "/osmosis.gamm.v1beta1.MsgJoinPool": {
    aminoType: "osmosis/gamm/msg-join-pool",
    toAmino: ({
      sender,
      poolId,
      shareOutAmount,
      tokenInMaxs
    }: MsgJoinPool): AminoMsgJoinPool["value"] => {
      return {
        sender,
        pool_id: poolId,
        share_out_amount: shareOutAmount,
        token_in_maxs: tokenInMaxs.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      pool_id,
      share_out_amount,
      token_in_maxs
    }: AminoMsgJoinPool["value"]): MsgJoinPool => {
      return {
        sender,
        poolId: pool_id,
        shareOutAmount: share_out_amount,
        tokenInMaxs: token_in_maxs.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgExitPool": {
    aminoType: "osmosis/gamm/msg-exit-pool",
    toAmino: ({
      sender,
      poolId,
      shareInAmount,
      tokenOutMins
    }: MsgExitPool): AminoMsgExitPool["value"] => {
      return {
        sender,
        pool_id: poolId,
        share_in_amount: shareInAmount,
        token_out_mins: tokenOutMins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      sender,
      pool_id,
      share_in_amount,
      token_out_mins
    }: AminoMsgExitPool["value"]): MsgExitPool => {
      return {
        sender,
        poolId: pool_id,
        shareInAmount: share_in_amount,
        tokenOutMins: token_out_mins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
    aminoType: "osmosis/gamm/msg-swap-exact-amount-in",
    toAmino: ({
      sender,
      routes,
      tokenIn,
      tokenOutMinAmount
    }: MsgSwapExactAmountIn): AminoMsgSwapExactAmountIn["value"] => {
      return {
        sender,
        routes: routes.map(el0 => ({
          pool_id: el0.poolId,
          token_out_denom: el0.tokenOutDenom
        })),
        token_in: {
          denom: tokenIn.denom,
          amount: Long.fromNumber(tokenIn.amount).toString()
        },
        token_out_min_amount: tokenOutMinAmount
      };
    },
    fromAmino: ({
      sender,
      routes,
      token_in,
      token_out_min_amount
    }: AminoMsgSwapExactAmountIn["value"]): MsgSwapExactAmountIn => {
      return {
        sender,
        routes: routes.map(el0 => ({
          poolId: el0.pool_id,
          tokenOutDenom: el0.token_out_denom
        })),
        tokenIn: {
          denom: token_in.denom,
          amount: token_in.amount
        },
        tokenOutMinAmount: token_out_min_amount
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
    aminoType: "osmosis/gamm/msg-swap-exact-amount-out",
    toAmino: ({
      sender,
      routes,
      tokenInMaxAmount,
      tokenOut
    }: MsgSwapExactAmountOut): AminoMsgSwapExactAmountOut["value"] => {
      return {
        sender,
        routes: routes.map(el0 => ({
          pool_id: el0.poolId,
          token_in_denom: el0.tokenInDenom
        })),
        token_in_max_amount: tokenInMaxAmount,
        token_out: {
          denom: tokenOut.denom,
          amount: Long.fromNumber(tokenOut.amount).toString()
        }
      };
    },
    fromAmino: ({
      sender,
      routes,
      token_in_max_amount,
      token_out
    }: AminoMsgSwapExactAmountOut["value"]): MsgSwapExactAmountOut => {
      return {
        sender,
        routes: routes.map(el0 => ({
          poolId: el0.pool_id,
          tokenInDenom: el0.token_in_denom
        })),
        tokenInMaxAmount: token_in_max_amount,
        tokenOut: {
          denom: token_out.denom,
          amount: token_out.amount
        }
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
    aminoType: "osmosis/gamm/msg-join-swap-extern-amount-in",
    toAmino: ({
      sender,
      poolId,
      tokenIn,
      shareOutMinAmount
    }: MsgJoinSwapExternAmountIn): AminoMsgJoinSwapExternAmountIn["value"] => {
      return {
        sender,
        pool_id: poolId,
        token_in: {
          denom: tokenIn.denom,
          amount: Long.fromNumber(tokenIn.amount).toString()
        },
        share_out_min_amount: shareOutMinAmount
      };
    },
    fromAmino: ({
      sender,
      pool_id,
      token_in,
      share_out_min_amount
    }: AminoMsgJoinSwapExternAmountIn["value"]): MsgJoinSwapExternAmountIn => {
      return {
        sender,
        poolId: pool_id,
        tokenIn: {
          denom: token_in.denom,
          amount: token_in.amount
        },
        shareOutMinAmount: share_out_min_amount
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
    aminoType: "osmosis/gamm/msg-join-swap-share-amount-out",
    toAmino: ({
      sender,
      poolId,
      tokenInDenom,
      shareOutAmount,
      tokenInMaxAmount
    }: MsgJoinSwapShareAmountOut): AminoMsgJoinSwapShareAmountOut["value"] => {
      return {
        sender,
        pool_id: poolId,
        token_in_denom: tokenInDenom,
        share_out_amount: shareOutAmount,
        token_in_max_amount: tokenInMaxAmount
      };
    },
    fromAmino: ({
      sender,
      pool_id,
      token_in_denom,
      share_out_amount,
      token_in_max_amount
    }: AminoMsgJoinSwapShareAmountOut["value"]): MsgJoinSwapShareAmountOut => {
      return {
        sender,
        poolId: pool_id,
        tokenInDenom: token_in_denom,
        shareOutAmount: share_out_amount,
        tokenInMaxAmount: token_in_max_amount
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
    aminoType: "osmosis/gamm/msg-exit-swap-extern-amount-out",
    toAmino: ({
      sender,
      poolId,
      tokenOut,
      shareInMaxAmount
    }: MsgExitSwapExternAmountOut): AminoMsgExitSwapExternAmountOut["value"] => {
      return {
        sender,
        pool_id: poolId,
        token_out: {
          denom: tokenOut.denom,
          amount: Long.fromNumber(tokenOut.amount).toString()
        },
        share_in_max_amount: shareInMaxAmount
      };
    },
    fromAmino: ({
      sender,
      pool_id,
      token_out,
      share_in_max_amount
    }: AminoMsgExitSwapExternAmountOut["value"]): MsgExitSwapExternAmountOut => {
      return {
        sender,
        poolId: pool_id,
        tokenOut: {
          denom: token_out.denom,
          amount: token_out.amount
        },
        shareInMaxAmount: share_in_max_amount
      };
    }
  },
  "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
    aminoType: "osmosis/gamm/msg-exit-swap-share-amount-in",
    toAmino: ({
      sender,
      poolId,
      tokenOutDenom,
      shareInAmount,
      tokenOutMinAmount
    }: MsgExitSwapShareAmountIn): AminoMsgExitSwapShareAmountIn["value"] => {
      return {
        sender,
        pool_id: poolId,
        token_out_denom: tokenOutDenom,
        share_in_amount: shareInAmount,
        token_out_min_amount: tokenOutMinAmount
      };
    },
    fromAmino: ({
      sender,
      pool_id,
      token_out_denom,
      share_in_amount,
      token_out_min_amount
    }: AminoMsgExitSwapShareAmountIn["value"]): MsgExitSwapShareAmountIn => {
      return {
        sender,
        poolId: pool_id,
        tokenOutDenom: token_out_denom,
        shareInAmount: share_in_amount,
        tokenOutMinAmount: token_out_min_amount
      };
    }
  }
};