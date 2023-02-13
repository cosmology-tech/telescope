import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
import * as fm from "../../../grpc-gateway";
import { MsgCreateVestingAccount, MsgCreateVestingAccountSDKType, MsgCreateVestingAccountResponse, MsgCreateVestingAccountResponseSDKType, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountSDKType, MsgCreatePermanentLockedAccountResponse, MsgCreatePermanentLockedAccountResponseSDKType, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountSDKType, MsgCreatePeriodicVestingAccountResponse, MsgCreatePeriodicVestingAccountResponseSDKType } from "./tx";
export class Msg {
  /**
   * CreateVestingAccount defines a method that enables creating a vesting
   * account.
   */
  static CreateVestingAccount(request: MsgCreateVestingAccount, initRequest?: fm.InitReq): Promise<MsgCreateVestingAccountResponse> {
    return fm.fetchReq(`/cosmos.vesting.v1beta1/CreateVestingAccount`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /**
   * CreatePermanentLockedAccount defines a method that enables creating a permanent
   * locked account.
   */
  static CreatePermanentLockedAccount(request: MsgCreatePermanentLockedAccount, initRequest?: fm.InitReq): Promise<MsgCreatePermanentLockedAccountResponse> {
    return fm.fetchReq(`/cosmos.vesting.v1beta1/CreatePermanentLockedAccount`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  /**
   * CreatePeriodicVestingAccount defines a method that enables creating a
   * periodic vesting account.
   */
  static CreatePeriodicVestingAccount(request: MsgCreatePeriodicVestingAccount, initRequest?: fm.InitReq): Promise<MsgCreatePeriodicVestingAccountResponse> {
    return fm.fetchReq(`/cosmos.vesting.v1beta1/CreatePeriodicVestingAccount`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}