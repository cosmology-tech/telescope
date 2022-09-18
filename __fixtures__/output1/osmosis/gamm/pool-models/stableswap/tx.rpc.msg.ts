import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolSDKType, MsgCreateStableswapPoolResponse, MsgCreateStableswapPoolResponseSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsSDKType, MsgStableSwapAdjustScalingFactorsResponse, MsgStableSwapAdjustScalingFactorsResponseSDKType } from "./tx";

/** Msg defines the RPC service */
export interface Msg {
  createStableswapPool(request: MsgCreateStableswapPool): Promise<MsgCreateStableswapPoolResponseSDKType>;
  /*null*/

  stableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors): Promise<MsgStableSwapAdjustScalingFactorsResponseSDKType>;
  /*null*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createStableswapPool = this.createStableswapPool.bind(this);
    this.stableSwapAdjustScalingFactors = this.stableSwapAdjustScalingFactors.bind(this);
  }

  createStableswapPool(request: MsgCreateStableswapPool): Promise<MsgCreateStableswapPoolResponseSDKType> {
    const data = MsgCreateStableswapPool.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.poolmodels.stableswap.v1beta1.Msg", "CreateStableswapPool", data);
    return promise.then(data => MsgCreateStableswapPoolResponse.decode(new _m0.Reader(data)));
  }

  stableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors): Promise<MsgStableSwapAdjustScalingFactorsResponseSDKType> {
    const data = MsgStableSwapAdjustScalingFactors.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.poolmodels.stableswap.v1beta1.Msg", "StableSwapAdjustScalingFactors", data);
    return promise.then(data => MsgStableSwapAdjustScalingFactorsResponse.decode(new _m0.Reader(data)));
  }

}