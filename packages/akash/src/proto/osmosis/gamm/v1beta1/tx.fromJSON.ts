import { AminoMsg } from "@cosmjs/amino";
import { AminoHeight, omitDefault } from "../../../amino.helpers";
import { MsgJoinPool, MsgExitPool, SwapAmountInRoute, MsgSwapExactAmountIn, MsgSwapExactAmountInResponse, SwapAmountOutRoute, MsgSwapExactAmountOut, MsgSwapExactAmountOutResponse, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInResponse, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutResponse, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInResponse, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutResponse, MsgJoinPoolResponse, MsgExitPoolResponse, Msg, Rpc } from "./tx";

/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export const fromJSON = {
  joinPool(value: any) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinPool",
      value: MsgJoinPool.fromJSON(value)
    };
  },

  exitPool(value: any) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitPool",
      value: MsgExitPool.fromJSON(value)
    };
  },

  swapExactAmountIn(value: any) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
      value: MsgSwapExactAmountIn.fromJSON(value)
    };
  },

  swapExactAmountOut(value: any) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut",
      value: MsgSwapExactAmountOut.fromJSON(value)
    };
  },

  joinSwapExternAmountIn(value: any) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn",
      value: MsgJoinSwapExternAmountIn.fromJSON(value)
    };
  },

  joinSwapShareAmountOut(value: any) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut",
      value: MsgJoinSwapShareAmountOut.fromJSON(value)
    };
  },

  exitSwapExternAmountOut(value: any) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut",
      value: MsgExitSwapExternAmountOut.fromJSON(value)
    };
  },

  exitSwapShareAmountIn(value: any) {
    return {
      typeUrl: "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn",
      value: MsgExitSwapShareAmountIn.fromJSON(value)
    };
  }

};