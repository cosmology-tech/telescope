import * as fm from "../../../grpc-gateway";
import { MsgVerifyInvariant, MsgVerifyInvariantSDKType, MsgVerifyInvariantResponse, MsgVerifyInvariantResponseSDKType } from "./tx";
export class Msg {
  //VerifyInvariant defines a method to verify a particular invariance.
  static VerifyInvariant(request: MsgVerifyInvariant, initRequest?: fm.InitReq): Promise<MsgVerifyInvariantResponse> {
    return fm.fetchReq(`/cosmos.crisis.v1beta1/VerifyInvariant`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}