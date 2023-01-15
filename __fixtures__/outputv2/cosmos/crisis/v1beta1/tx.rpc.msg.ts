import { fetchReq } from "../../../grpc-gateway";
import { MsgVerifyInvariant, MsgVerifyInvariantSDKType, MsgVerifyInvariantResponse, MsgVerifyInvariantResponseSDKType } from "./tx";
export class Msg {
  static VerifyInvariant(request: MsgVerifyInvariant, initRequest?: fm.initReq): Promise<MsgVerifyInvariantResponse> {
    return fm.fetchReq(`/cosmos.crisis.v1beta1.Msg/VerifyInvariant`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}