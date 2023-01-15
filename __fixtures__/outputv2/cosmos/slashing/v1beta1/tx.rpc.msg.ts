import { fetchReq } from "../../../grpc-gateway";
import { MsgUnjail, MsgUnjailSDKType, MsgUnjailResponse, MsgUnjailResponseSDKType } from "./tx";
export class Msg {
  static Unjail(request: MsgUnjail, initRequest?: fm.initReq): Promise<MsgUnjailResponse> {
    return fm.fetchReq(`/cosmos.slashing.v1beta1.Msg/Unjail`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}