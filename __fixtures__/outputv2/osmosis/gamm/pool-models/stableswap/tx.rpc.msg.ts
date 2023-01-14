import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { fetchReq } from "../../../../grpc-gateway";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolSDKType, MsgCreateStableswapPoolResponse, MsgCreateStableswapPoolResponseSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsSDKType, MsgStableSwapAdjustScalingFactorsResponse, MsgStableSwapAdjustScalingFactorsResponseSDKType } from "./tx";
export class Msg {
  static CreateStableswapPool(): Promise<MsgCreateStableswapPoolResponse> {}

  static StableSwapAdjustScalingFactors(): Promise<MsgStableSwapAdjustScalingFactorsResponse> {}

}