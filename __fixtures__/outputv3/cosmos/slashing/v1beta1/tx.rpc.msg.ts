import * as fm from "../../../grpc-gateway";
import { MsgUnjail, MsgUnjailSDKType, MsgUnjailResponse, MsgUnjailResponseSDKType } from "./tx";
export class Msg {
  static Unjail(request: MsgUnjail, initRequest?: fm.InitReq): Promise<MsgUnjailResponse> {
    return fm.fetchReq(`/cosmos.slashing.v1beta1/Unjail`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}