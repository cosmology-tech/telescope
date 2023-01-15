import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { fetchReq } from "../../../../grpc-gateway";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolSDKType, MsgCreateStableswapPoolResponse, MsgCreateStableswapPoolResponseSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsSDKType, MsgStableSwapAdjustScalingFactorsResponse, MsgStableSwapAdjustScalingFactorsResponseSDKType } from "./tx";
export class Msg {
  static CreateStableswapPool(request: MsgCreateStableswapPool, initRequest?: fm.initReq): Promise<MsgCreateStableswapPoolResponse> {
    return fm.fetchReq(`/osmosis.gamm.poolmodels.stableswap.v1beta1.Msg/CreateStableswapPool`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static StableSwapAdjustScalingFactors(request: MsgStableSwapAdjustScalingFactors, initRequest?: fm.initReq): Promise<MsgStableSwapAdjustScalingFactorsResponse> {
    return fm.fetchReq(`/osmosis.gamm.poolmodels.stableswap.v1beta1.Msg/StableSwapAdjustScalingFactors`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}