import { PoolParams } from "./stableswap_pool";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { MsgCreateStableswapPool, MsgStableSwapAdjustScalingFactors } from "./tx";
export interface AminoMsgCreateStableswapPool extends AminoMsg {
  type: "osmosis/gamm/create-stableswap-pool";
  value: {
    sender: string;
    poolParams: {
      swapFee: string;
      exitFee: string;
    };
    initial_pool_liquidity: {
      denom: string;
      amount: string;
    }[];
    future_pool_governor: string;
  };
}
export interface AminoMsgStableSwapAdjustScalingFactors extends AminoMsg {
  type: "osmosis/gamm/stable-swap-adjust-scaling-factors";
  value: {
    sender: string;
    pool_id: string;
    scaling_factors: Long[];
  };
}
export const AminoConverter = {
  "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
    aminoType: "osmosis/gamm/create-stableswap-pool",
    toAmino: ({
      sender,
      poolParams,
      initialPoolLiquidity,
      futurePoolGovernor
    }: MsgCreateStableswapPool): AminoMsgCreateStableswapPool["value"] => {
      return {
        sender,
        poolParams: {
          swapFee: poolParams.swapFee,
          exitFee: poolParams.exitFee
        },
        initial_pool_liquidity: initialPoolLiquidity.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        future_pool_governor: futurePoolGovernor
      };
    },
    fromAmino: ({
      sender,
      poolParams,
      initial_pool_liquidity,
      future_pool_governor
    }: AminoMsgCreateStableswapPool["value"]): MsgCreateStableswapPool => {
      return {
        sender,
        poolParams: {
          swapFee: poolParams.swapFee,
          exitFee: poolParams.exitFee
        },
        initialPoolLiquidity: initial_pool_liquidity.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        futurePoolGovernor: future_pool_governor
      };
    }
  },
  "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
    aminoType: "osmosis/gamm/stable-swap-adjust-scaling-factors",
    toAmino: ({
      sender,
      poolId,
      scalingFactors
    }: MsgStableSwapAdjustScalingFactors): AminoMsgStableSwapAdjustScalingFactors["value"] => {
      return {
        sender,
        pool_id: poolId.toString(),
        scaling_factors: scalingFactors.map(el0 => el0.toString())
      };
    },
    fromAmino: ({
      sender,
      pool_id,
      scaling_factors
    }: AminoMsgStableSwapAdjustScalingFactors["value"]): MsgStableSwapAdjustScalingFactors => {
      return {
        sender,
        poolId: Long.fromString(pool_id),
        scalingFactors: scaling_factors.map(el0 => Long.fromString(el0))
      };
    }
  }
};