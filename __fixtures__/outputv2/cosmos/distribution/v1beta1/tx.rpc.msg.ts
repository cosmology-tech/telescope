import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { fetchReq } from "../../../grpc-gateway";
import { MsgSetWithdrawAddress, MsgSetWithdrawAddressSDKType, MsgSetWithdrawAddressResponse, MsgSetWithdrawAddressResponseSDKType, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardSDKType, MsgWithdrawDelegatorRewardResponse, MsgWithdrawDelegatorRewardResponseSDKType, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionSDKType, MsgWithdrawValidatorCommissionResponse, MsgWithdrawValidatorCommissionResponseSDKType, MsgFundCommunityPool, MsgFundCommunityPoolSDKType, MsgFundCommunityPoolResponse, MsgFundCommunityPoolResponseSDKType } from "./tx";
export class Msg {
  static SetWithdrawAddress(): Promise<MsgSetWithdrawAddressResponse> {}

  static WithdrawDelegatorReward(): Promise<MsgWithdrawDelegatorRewardResponse> {}

  static WithdrawValidatorCommission(): Promise<MsgWithdrawValidatorCommissionResponse> {}

  static FundCommunityPool(): Promise<MsgFundCommunityPoolResponse> {}

}