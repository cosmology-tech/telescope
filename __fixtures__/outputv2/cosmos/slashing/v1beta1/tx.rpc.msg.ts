import { fetchReq } from "../../../grpc-gateway";
import { MsgUnjail, MsgUnjailSDKType, MsgUnjailResponse, MsgUnjailResponseSDKType } from "./tx";
export class Msg {
  static Unjail(request: MsgUnjail, initRequest?: fm.initReq): Promise<MsgUnjailResponse> {
    return fm.fetchReq(`/Unjail/Unjail`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}