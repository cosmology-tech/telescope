import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Period, PeriodSDKType } from "./vesting";
import { fetchReq } from "../../../grpc-gateway";
import { MsgCreateVestingAccount, MsgCreateVestingAccountSDKType, MsgCreateVestingAccountResponse, MsgCreateVestingAccountResponseSDKType, MsgCreatePermanentLockedAccount, MsgCreatePermanentLockedAccountSDKType, MsgCreatePermanentLockedAccountResponse, MsgCreatePermanentLockedAccountResponseSDKType, MsgCreatePeriodicVestingAccount, MsgCreatePeriodicVestingAccountSDKType, MsgCreatePeriodicVestingAccountResponse, MsgCreatePeriodicVestingAccountResponseSDKType } from "./tx";
export class Msg {
  static CreateVestingAccount(request: MsgCreateVestingAccount, initRequest?: fm.initReq): Promise<MsgCreateVestingAccountResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static CreatePermanentLockedAccount(request: MsgCreatePermanentLockedAccount, initRequest?: fm.initReq): Promise<MsgCreatePermanentLockedAccountResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static CreatePeriodicVestingAccount(request: MsgCreatePeriodicVestingAccount, initRequest?: fm.initReq): Promise<MsgCreatePeriodicVestingAccountResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}