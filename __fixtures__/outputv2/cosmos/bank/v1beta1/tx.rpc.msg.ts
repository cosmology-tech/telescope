import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
import { fetchReq } from "../../../grpc-gateway";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType, MsgMultiSend, MsgMultiSendSDKType, MsgMultiSendResponse, MsgMultiSendResponseSDKType } from "./tx";
export class Msg {
  static Send(request: MsgSend, initRequest?: fm.initReq): Promise<MsgSendResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static MultiSend(request: MsgMultiSend, initRequest?: fm.initReq): Promise<MsgMultiSendResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/MultiSend`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}