import { fetchReq } from "../../../grpc-gateway";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType } from "./tx";
export class Msg {
  static Send(request: MsgSend, initRequest?: fm.initReq): Promise<MsgSendResponse> {
    return fm.fetchReq(`/cosmos.nft.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}