import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as fm from "../../../grpc-gateway";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressSDKType, MsgSetWithdrawAddressResponse, MsgSetWithdrawAddressResponseSDKType, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardSDKType, MsgWithdrawDelegatorRewardResponse, MsgWithdrawDelegatorRewardResponseSDKType, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionSDKType, MsgWithdrawValidatorCommissionResponse, MsgWithdrawValidatorCommissionResponseSDKType, MsgFundCommunityPool, MsgFundCommunityPoolSDKType, MsgFundCommunityPoolResponse, MsgFundCommunityPoolResponseSDKType } from "./tx";
export class Msg {
  //SetWithdrawAddress defines a method to change the withdraw address
 for a delegator (or validator self-delegation).
  static SetWithdrawAddress(request: MsgSetWithdrawAddress, initRequest?: fm.InitReq): Promise<MsgSetWithdrawAddressResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1/SetWithdrawAddress`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //WithdrawDelegatorReward defines a method to withdraw rewards of delegator
 from a single validator.
  static WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward, initRequest?: fm.InitReq): Promise<MsgWithdrawDelegatorRewardResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1/WithdrawDelegatorReward`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //WithdrawValidatorCommission defines a method to withdraw the
 full commission to the validator address.
  static WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission, initRequest?: fm.InitReq): Promise<MsgWithdrawValidatorCommissionResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1/WithdrawValidatorCommission`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  //FundCommunityPool defines a method to allow an account to directly
 fund the community pool.
  static FundCommunityPool(request: MsgFundCommunityPool, initRequest?: fm.InitReq): Promise<MsgFundCommunityPoolResponse> {
    return fm.fetchReq(`/cosmos.distribution.v1beta1/FundCommunityPool`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}