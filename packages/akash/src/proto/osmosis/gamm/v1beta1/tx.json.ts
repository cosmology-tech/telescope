import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgJoinPool, MsgExitPool, SwapAmountInRoute, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, SwapAmountOutRoute, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInResponse, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutResponse, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInResponse, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutResponse, MsgJoinPoolResponse, MsgExitPoolResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const json = {
  joinPool(value: MsgJoinPool) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
      value
    };
  },

  exitPool(value: MsgExitPool) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
      value
    };
  },

  swapExactAmountIn(value: MsgSwapExactAmountIn) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
      value
    };
  },

  swapExactAmountOut(value: MsgSwapExactAmountOut) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
      value
    };
  },

  joinSwapExternAmountIn(value: MsgJoinSwapExternAmountIn) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
      value
    };
  },

  joinSwapShareAmountOut(value: MsgJoinSwapShareAmountOut) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
      value
    };
  },

  exitSwapExternAmountOut(value: MsgExitSwapExternAmountOut) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
      value
    };
  },

  exitSwapShareAmountIn(value: MsgExitSwapShareAmountIn) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
      value
    };
  }

};