import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import * as fm from "../../../grpc-gateway";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountSDKType, MsgCreateClawbackVestingAccountResponse, MsgCreateClawbackVestingAccountResponseSDKType, MsgClawback, MsgClawbackSDKType, MsgClawbackResponse, MsgClawbackResponseSDKType } from "./tx";
export class Msg {
  static CreateClawbackVestingAccount(request: MsgCreateClawbackVestingAccount, initRequest?: fm.InitReq): Promise<MsgCreateClawbackVestingAccountResponse> {
    return fm.fetchReq(`/evmos.vesting.v1/CreateClawbackVestingAccount`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static Clawback(request: MsgClawback, initRequest?: fm.InitReq): Promise<MsgClawbackResponse> {
    return fm.fetchReq(`/evmos.vesting.v1/Clawback`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}