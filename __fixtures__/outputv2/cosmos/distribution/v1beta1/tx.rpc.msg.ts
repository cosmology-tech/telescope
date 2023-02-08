import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as fm from "../../../grpc-gateway";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressSDKType, MsgSetWithdrawAddressResponse, MsgSetWithdrawAddressResponseSDKType, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardSDKType, MsgWithdrawDelegatorRewardResponse, MsgWithdrawDelegatorRewardResponseSDKType, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionSDKType, MsgWithdrawValidatorCommissionResponse, MsgWithdrawValidatorCommissionResponseSDKType, MsgFundCommunityPool, MsgFundCommunityPoolSDKType, MsgFundCommunityPoolResponse, MsgFundCommunityPoolResponseSDKType } from "./tx";
export class Msg {
  static SetWithdrawAddress(request: MsgSetWithdrawAddress, initRequest?: fm.InitReq): Promise<MsgSetWithdrawAddressResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1/SetWithdrawAddress`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward, initRequest?: fm.InitReq): Promise<MsgWithdrawDelegatorRewardResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1/WithdrawDelegatorReward`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission, initRequest?: fm.InitReq): Promise<MsgWithdrawValidatorCommissionResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1/WithdrawValidatorCommission`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static FundCommunityPool(request: MsgFundCommunityPool, initRequest?: fm.InitReq): Promise<MsgFundCommunityPoolResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1/FundCommunityPool`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}