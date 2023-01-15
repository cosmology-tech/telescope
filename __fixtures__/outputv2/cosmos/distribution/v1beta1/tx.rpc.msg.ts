import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { fetchReq } from "../../../grpc-gateway";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressSDKType, MsgSetWithdrawAddressResponse, MsgSetWithdrawAddressResponseSDKType, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardSDKType, MsgWithdrawDelegatorRewardResponse, MsgWithdrawDelegatorRewardResponseSDKType, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionSDKType, MsgWithdrawValidatorCommissionResponse, MsgWithdrawValidatorCommissionResponseSDKType, MsgFundCommunityPool, MsgFundCommunityPoolSDKType, MsgFundCommunityPoolResponse, MsgFundCommunityPoolResponseSDKType } from "./tx";
export class Msg {
  static SetWithdrawAddress(request: MsgSetWithdrawAddress, initRequest?: fm.initReq): Promise<MsgSetWithdrawAddressResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1.Msg/SetWithdrawAddress`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward, initRequest?: fm.initReq): Promise<MsgWithdrawDelegatorRewardResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission, initRequest?: fm.initReq): Promise<MsgWithdrawValidatorCommissionResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static FundCommunityPool(request: MsgFundCommunityPool, initRequest?: fm.initReq): Promise<MsgFundCommunityPoolResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1.Msg/FundCommunityPool`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}