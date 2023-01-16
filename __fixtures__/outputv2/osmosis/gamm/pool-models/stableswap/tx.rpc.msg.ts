import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { fetchReq } from "../../../../grpc-gateway";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolSDKType, MsgCreateStableswapPoolResponse, MsgCreateStableswapPoolResponseSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsSDKType, MsgStableSwapAdjustScalingFactorsResponse, MsgStableSwapAdjustScalingFactorsResponseSDKType } from "./tx";
export class Msg {
  static CreateStableswapPool(request: MsgCreateStableswapPool, initRequest?: fm.initReq): Promise<MsgCreateStableswapPoolResponse> {
    return fm.fetchReq(`/CreateStableswapPool/CreateStableswapPool`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static StableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors, initRequest?: fm.initReq): Promise<MsgStableSwapAdjustScalingFactorsResponse> {
    return fm.fetchReq(`/StableSwapAdjustScalingFactors/StableSwapAdjustScalingFactors`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}