//@ts-nocheck
import { TokenPairArbRoutes, TokenPairArbRoutesSDKType, PoolWeights, PoolWeightsSDKType, BaseDenom, BaseDenomSDKType, Route, RouteSDKType, Trade, TradeSDKType } from "./protorev";
import { AminoMsg } from "@cosmjs/amino";
import { omitDefault } from "../../../helpers";
import { MsgSetHotRoutes, MsgSetHotRoutesSDKType, MsgSetDeveloperAccount, MsgSetDeveloperAccountSDKType, MsgSetMaxPoolPointsPerTx, MsgSetMaxPoolPointsPerTxSDKType, MsgSetMaxPoolPointsPerBlock, MsgSetMaxPoolPointsPerBlockSDKType, MsgSetPoolWeights, MsgSetPoolWeightsSDKType, MsgSetBaseDenoms, MsgSetBaseDenomsSDKType } from "./tx";
export interface MsgSetHotRoutesAminoType extends AminoMsg {
  type: "osmosis/MsgSetHotRoutes";
  value: {
    admin: string;
    hot_routes: {
      arb_routes: {
        trades: {
          pool: string;
          token_in: string;
          token_out: string;
        }[];
        step_size: string;
      }[];
      token_in: string;
      token_out: string;
    }[];
  };
}
export interface MsgSetDeveloperAccountAminoType extends AminoMsg {
  type: "osmosis/MsgSetDeveloperAccount";
  value: {
    admin: string;
    developer_account: string;
  };
}
export interface MsgSetMaxPoolPointsPerTxAminoType extends AminoMsg {
  type: "osmosis/protorev/set-max-pool-points-per-tx";
  value: {
    admin: string;
    max_pool_points_per_tx: string;
  };
}
export interface MsgSetMaxPoolPointsPerBlockAminoType extends AminoMsg {
  type: "osmosis/protorev/set-max-pool-points-per-block";
  value: {
    admin: string;
    max_pool_points_per_block: string;
  };
}
export interface MsgSetPoolWeightsAminoType extends AminoMsg {
  type: "osmosis/protorev/set-pool-weights";
  value: {
    admin: string;
    pool_weights: {
      stable_weight: string;
      balancer_weight: string;
      concentrated_weight: string;
    };
  };
}
export interface MsgSetBaseDenomsAminoType extends AminoMsg {
  type: "osmosis/protorev/set-base-denoms";
  value: {
    admin: string;
    base_denoms: {
      denom: string;
      step_size: string;
    }[];
  };
}
export const AminoConverter = {
  "/osmosis.protorev.v1beta1.MsgSetHotRoutes": {
    aminoType: "osmosis/MsgSetHotRoutes",
    toAmino: ({
      admin,
      hotRoutes
    }: MsgSetHotRoutes): MsgSetHotRoutesAminoType["value"] => {
      return {
        admin: omitDefault(admin),
        hot_routes: hotRoutes.map(el0 => ({
          arb_routes: el0.arbRoutes.map(el1 => ({
            trades: el1.trades.map(el2 => ({
              pool: el2.pool.toString(),
              token_in: omitDefault(el2.tokenIn),
              token_out: omitDefault(el2.tokenOut)
            })),
            step_size: omitDefault(el1.stepSize)
          })),
          token_in: omitDefault(el0.tokenIn),
          token_out: omitDefault(el0.tokenOut)
        }))
      };
    },
    fromAmino: ({
      admin,
      hot_routes
    }: MsgSetHotRoutesAminoType["value"]): MsgSetHotRoutes => {
      return {
        admin,
        hotRoutes: hot_routes.map(el0 => ({
          arbRoutes: el0.arb_routes.map(el1 => ({
            trades: el1.trades.map(el2 => ({
              pool: BigInt(el2.pool),
              tokenIn: el2.token_in,
              tokenOut: el2.token_out
            })),
            stepSize: el1.step_size
          })),
          tokenIn: el0.token_in,
          tokenOut: el0.token_out
        }))
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetDeveloperAccount": {
    aminoType: "osmosis/MsgSetDeveloperAccount",
    toAmino: ({
      admin,
      developerAccount
    }: MsgSetDeveloperAccount): MsgSetDeveloperAccountAminoType["value"] => {
      return {
        admin: omitDefault(admin),
        developer_account: omitDefault(developerAccount)
      };
    },
    fromAmino: ({
      admin,
      developer_account
    }: MsgSetDeveloperAccountAminoType["value"]): MsgSetDeveloperAccount => {
      return {
        admin,
        developerAccount: developer_account
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerTx": {
    aminoType: "osmosis/protorev/set-max-pool-points-per-tx",
    toAmino: ({
      admin,
      maxPoolPointsPerTx
    }: MsgSetMaxPoolPointsPerTx): MsgSetMaxPoolPointsPerTxAminoType["value"] => {
      return {
        admin: omitDefault(admin),
        max_pool_points_per_tx: maxPoolPointsPerTx.toString()
      };
    },
    fromAmino: ({
      admin,
      max_pool_points_per_tx
    }: MsgSetMaxPoolPointsPerTxAminoType["value"]): MsgSetMaxPoolPointsPerTx => {
      return {
        admin,
        maxPoolPointsPerTx: BigInt(max_pool_points_per_tx)
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetMaxPoolPointsPerBlock": {
    aminoType: "osmosis/protorev/set-max-pool-points-per-block",
    toAmino: ({
      admin,
      maxPoolPointsPerBlock
    }: MsgSetMaxPoolPointsPerBlock): MsgSetMaxPoolPointsPerBlockAminoType["value"] => {
      return {
        admin: omitDefault(admin),
        max_pool_points_per_block: maxPoolPointsPerBlock.toString()
      };
    },
    fromAmino: ({
      admin,
      max_pool_points_per_block
    }: MsgSetMaxPoolPointsPerBlockAminoType["value"]): MsgSetMaxPoolPointsPerBlock => {
      return {
        admin,
        maxPoolPointsPerBlock: BigInt(max_pool_points_per_block)
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetPoolWeights": {
    aminoType: "osmosis/protorev/set-pool-weights",
    toAmino: ({
      admin,
      poolWeights
    }: MsgSetPoolWeights): MsgSetPoolWeightsAminoType["value"] => {
      return {
        admin: omitDefault(admin),
        pool_weights: {
          stable_weight: poolWeights.stableWeight.toString(),
          balancer_weight: poolWeights.balancerWeight.toString(),
          concentrated_weight: poolWeights.concentratedWeight.toString()
        }
      };
    },
    fromAmino: ({
      admin,
      pool_weights
    }: MsgSetPoolWeightsAminoType["value"]): MsgSetPoolWeights => {
      return {
        admin,
        poolWeights: {
          stableWeight: BigInt(pool_weights.stable_weight),
          balancerWeight: BigInt(pool_weights.balancer_weight),
          concentratedWeight: BigInt(pool_weights.concentrated_weight)
        }
      };
    }
  },
  "/osmosis.protorev.v1beta1.MsgSetBaseDenoms": {
    aminoType: "osmosis/protorev/set-base-denoms",
    toAmino: ({
      admin,
      baseDenoms
    }: MsgSetBaseDenoms): MsgSetBaseDenomsAminoType["value"] => {
      return {
        admin: omitDefault(admin),
        base_denoms: baseDenoms.map(el0 => ({
          denom: omitDefault(el0.denom),
          step_size: omitDefault(el0.stepSize)
        }))
      };
    },
    fromAmino: ({
      admin,
      base_denoms
    }: MsgSetBaseDenomsAminoType["value"]): MsgSetBaseDenoms => {
      return {
        admin,
        baseDenoms: base_denoms.map(el0 => ({
          denom: el0.denom,
          stepSize: el0.step_size
        }))
      };
    }
  }
};