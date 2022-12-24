//@ts-nocheck
import { PoolParams, PoolParamsAmino, PoolParamsAminoType, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolAmino, MsgCreateStableswapPoolAminoType, MsgCreateStableswapPoolSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsAmino, MsgStableSwapAdjustScalingFactorsAminoType, MsgStableSwapAdjustScalingFactorsSDKType } from "./tx";
export const AminoConverter = {
  "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
    aminoType: "osmosis/gamm/create-stableswap-pool",
    toAmino: MsgCreateStableswapPool.toAmino,
    fromAmino: MsgCreateStableswapPool.fromAmino
  },
  "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
    aminoType: "osmosis/gamm/stable-swap-adjust-scaling-factors",
    toAmino: MsgStableSwapAdjustScalingFactors.toAmino,
    fromAmino: MsgStableSwapAdjustScalingFactors.fromAmino
  }
};