import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgJoinPool, MsgExitPool, SwapAmountInRoute, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, SwapAmountOutRoute, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInResponse, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutResponse, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInResponse, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutResponse, MsgJoinPoolResponse, MsgExitPoolResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const messages = {
  joinPool(value: MsgJoinPool) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
      value: MsgJoinPool.fromPartial(value)
    };
  },

  exitPool(value: MsgExitPool) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
      value: MsgExitPool.fromPartial(value)
    };
  },

  swapExactAmountIn(value: MsgSwapExactAmountIn) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
      value: MsgSwapExactAmountIn.fromPartial(value)
    };
  },

  swapExactAmountOut(value: MsgSwapExactAmountOut) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
      value: MsgSwapExactAmountOut.fromPartial(value)
    };
  },

  joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
      value: MsgJoinSwapExternAmountIn.fromPartial(value)
    };
  },

  joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
      value: MsgJoinSwapShareAmountOut.fromPartial(value)
    };
  },

  exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
      value: MsgExitSwapExternAmountOut.fromPartial(value)
    };
  },

  exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
      value: MsgExitSwapShareAmountIn.fromPartial(value)
    };
  }

};