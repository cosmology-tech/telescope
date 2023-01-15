import { fetchReq } from "../../../grpc-gateway";
import { MsgVerifyInvariant, MsgVerifyInvariantSDKType, MsgVerifyInvariantResponse, MsgVerifyInvariantResponseSDKType } from "./tx";
export class Msg {
  static VerifyInvariant(request: MsgVerifyInvariant, initRequest?: fm.initReq): Promise<MsgVerifyInvariantResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}