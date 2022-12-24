//@ts-nocheck
import { PoolParams, PoolParamsAmino, PoolParamsSDKType, PoolAsset, PoolAssetAmino, PoolAssetSDKType } from "../balancerPool";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolAmino, MsgCreateBalancerPoolSDKType } from "./tx";
export const AminoConverter = {
  "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
    aminoType: "osmosis/gamm/poolmodels/balancer/create-balancer-pool",
    toAmino: MsgCreateBalancerPool.toAmino,
    fromAmino: MsgCreateBalancerPool.fromAmino
  }
};