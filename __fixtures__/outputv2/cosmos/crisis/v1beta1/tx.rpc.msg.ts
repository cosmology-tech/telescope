import { fetchReq } from "../../../grpc-gateway";
import { MsgVerifyInvariant, MsgVerifyInvariantSDKType, MsgVerifyInvariantResponse, MsgVerifyInvariantResponseSDKType } from "./tx";
export class Msg {
  static VerifyInvariant(request: MsgVerifyInvariant, initRequest?: fm.initReq): Promise<MsgVerifyInvariantResponse> {
    return fm.fetchReq(`/VerifyInvariant/VerifyInvariant`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}