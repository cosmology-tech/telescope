import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { fetchReq } from "../../../grpc-gateway";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressSDKType, MsgSetWithdrawAddressResponse, MsgSetWithdrawAddressResponseSDKType, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardSDKType, MsgWithdrawDelegatorRewardResponse, MsgWithdrawDelegatorRewardResponseSDKType, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionSDKType, MsgWithdrawValidatorCommissionResponse, MsgWithdrawValidatorCommissionResponseSDKType, MsgFundCommunityPool, MsgFundCommunityPoolSDKType, MsgFundCommunityPoolResponse, MsgFundCommunityPoolResponseSDKType } from "./tx";
export class Msg {
  static SetWithdrawAddress(request: MsgSetWithdrawAddress, initRequest?: fm.initReq): Promise<MsgSetWithdrawAddressResponse> {
    return fm.fetchReq(`/SetWithdrawAddress/SetWithdrawAddress`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward, initRequest?: fm.initReq): Promise<MsgWithdrawDelegatorRewardResponse> {
    return fm.fetchReq(`/WithdrawDelegatorReward/WithdrawDelegatorReward`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission, initRequest?: fm.initReq): Promise<MsgWithdrawValidatorCommissionResponse> {
    return fm.fetchReq(`/WithdrawValidatorCommission/WithdrawValidatorCommission`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static FundCommunityPool(request: MsgFundCommunityPool, initRequest?: fm.initReq): Promise<MsgFundCommunityPoolResponse> {
    return fm.fetchReq(`/FundCommunityPool/FundCommunityPool`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}