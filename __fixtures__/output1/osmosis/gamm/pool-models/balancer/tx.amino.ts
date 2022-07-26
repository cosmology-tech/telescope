import { PoolParams, PoolAsset, SmoothWeightChangeParams } from "./balancerPool";
import { AminoMsg } from "@cosmjs/amino";
import { Long } from "@osmonauts/helpers";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { Duration } from "../../../../google/protobuf/duration";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { MsgCreateBalancerPool } from "./tx";
export interface AminoMsgCreateBalancerPool extends AminoMsg {
  type: "osmosis/gamm/poolmodels/balancer/create-balancer-pool";
  value: {
    sender: string;
    poolParams: {
      swapFee: string;
      exitFee: string;
      smoothWeightChangeParams: {
        start_time: {
          seconds: string;
          nanos: number;
        };
        duration: {
          seconds: string;
          nanos: number;
        };
        initialPoolWeights: {
          token: {
            denom: string;
            amount: string;
          };
          weight: string;
        }[];
        targetPoolWeights: {
          token: {
            denom: string;
            amount: string;
          };
          weight: string;
        }[];
      };
    };
    poolAssets: {
      token: {
        denom: string;
        amount: string;
      };
      weight: string;
    }[];
    future_pool_governor: string;
  };
}
export const AminoConverter = {
  "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
    aminoType: "osmosis/gamm/poolmodels/balancer/create-balancer-pool",
    toAmino: ({
      sender,
      poolParams,
      poolAssets,
      futurePoolGovernor
    }: MsgCreateBalancerPool): AminoMsgCreateBalancerPool["value"] => {
      return {
        sender,
        poolParams: {
          swapFee: poolParams.swapFee,
          exitFee: poolParams.exitFee,
          smoothWeightChangeParams: {
            start_time: poolParams.smoothWeightChangeParams.startTime,
            duration: (poolParams.smoothWeightChangeParams.duration * 1_000_000_000).toString(),
            initialPoolWeights: poolParams.smoothWeightChangeParams.initialPoolWeights.map(el0 => ({
              token: {
                denom: el0.token.denom,
                amount: Long.fromNumber(el0.token.amount).toString()
              },
              weight: el0.weight
            })),
            targetPoolWeights: poolParams.smoothWeightChangeParams.targetPoolWeights.map(el0 => ({
              token: {
                denom: el0.token.denom,
                amount: Long.fromNumber(el0.token.amount).toString()
              },
              weight: el0.weight
            }))
          }
        },
        poolAssets: poolAssets.map(el0 => ({
          token: {
            denom: el0.token.denom,
            amount: Long.fromNumber(el0.token.amount).toString()
          },
          weight: el0.weight
        })),
        future_pool_governor: futurePoolGovernor
      };
    },
    fromAmino: ({
      sender,
      poolParams,
      poolAssets,
      future_pool_governor
    }: AminoMsgCreateBalancerPool["value"]): MsgCreateBalancerPool => {
      return {
        sender,
        poolParams: {
          swapFee: poolParams.swapFee,
          exitFee: poolParams.exitFee,
          smoothWeightChangeParams: {
            startTime: poolParams.smoothWeightChangeParams.start_time,
            duration: {
              seconds: Long.fromNumber(Math.floor(parseInt(poolParams.smoothWeightChangeParams.duration) / 1_000_000_000)),
              nanos: parseInt(poolParams.smoothWeightChangeParams.duration) % 1_000_000_000
            },
            initialPoolWeights: poolParams.smoothWeightChangeParams.initialPoolWeights.map(el2 => ({
              token: {
                denom: el2.token.denom,
                amount: el2.token.amount
              },
              weight: el2.weight
            })),
            targetPoolWeights: poolParams.smoothWeightChangeParams.targetPoolWeights.map(el2 => ({
              token: {
                denom: el2.token.denom,
                amount: el2.token.amount
              },
              weight: el2.weight
            }))
          }
        },
        poolAssets: poolAssets.map(el0 => ({
          token: {
            denom: el0.token.denom,
            amount: el0.token.amount
          },
          weight: el0.weight
        })),
        futurePoolGovernor: future_pool_governor
      };
    }
  }
};