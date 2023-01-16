import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Period, PeriodSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { fetchReq } from "../../../grpc-gateway";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountSDKType, MsgCreateClawbackVestingAccountResponse, MsgCreateClawbackVestingAccountResponseSDKType, MsgClawback, MsgClawbackSDKType, MsgClawbackResponse, MsgClawbackResponseSDKType } from "./tx";
export class Msg {
  static CreateClawbackVestingAccount(request: MsgCreateClawbackVestingAccount, initRequest?: fm.initReq): Promise<MsgCreateClawbackVestingAccountResponse> {
    return fm.fetchReq(`/CreateClawbackVestingAccount/CreateClawbackVestingAccount`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static Clawback(request: MsgClawback, initRequest?: fm.initReq): Promise<MsgClawbackResponse> {
    return fm.fetchReq(`/Clawback/Clawback`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}