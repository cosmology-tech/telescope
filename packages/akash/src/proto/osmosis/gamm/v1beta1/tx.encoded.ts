import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgJoinPool, MsgExitPool, SwapAmountInRoute, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, SwapAmountOutRoute, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInResponse, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutResponse, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInResponse, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutResponse, MsgJoinPoolResponse, MsgExitPoolResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const encoded = {
  joinPool(value: MsgJoinPool) {
    return {
      type_url: "/osmosis.gamm.v1beta1.MsgJoinPool",
      value: MsgJoinPool.encode(value).finish()
    };
  },

  exitPool(value: MsgExitPool) {
    return {
      type_url: "/osmosis.gamm.v1beta1.MsgExitPool",
      value: MsgExitPool.encode(value).finish()
    };
  },

  swapExactAmountIn(value: MsgSwapExactAmountIn) {
    return {
      type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
      value: MsgSwapExactAmountIn.encode(value).finish()
    };
  },

  swapExactAmountOut(value: MsgSwapExactAmountOut) {
    return {
      type_url: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
      value: MsgSwapExactAmountOut.encode(value).finish()
    };
  },

  joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn) {
    return {
      type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
      value: MsgJoinSwapExternAmountIn.encode(value).finish()
    };
  },

  joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut) {
    return {
      type_url: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
      value: MsgJoinSwapShareAmountOut.encode(value).finish()
    };
  },

  exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut) {
    return {
      type_url: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
      value: MsgExitSwapExternAmountOut.encode(value).finish()
    };
  },

  exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn) {
    return {
      type_url: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
      value: MsgExitSwapShareAmountIn.encode(value).finish()
    };
  }

};