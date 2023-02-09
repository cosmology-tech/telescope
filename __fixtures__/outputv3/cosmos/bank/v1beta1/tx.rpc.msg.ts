import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Input, InputSDKType, Output, OutputSDKType } from "./bank";
import * as fm from "../../../grpc-gateway";
import { MsgSend, MsgSendSDKType, MsgSendResponse, MsgSendResponseSDKType, MsgMultiSend, MsgMultiSendSDKType, MsgMultiSendResponse, MsgMultiSendResponseSDKType } from "./tx";
export class Msg {
  // Send defines a method for sending coins from one account to another account.
  static Send(request: MsgSend, initRequest?: fm.InitReq): Promise<MsgSendResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1/Send`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  // MultiSend defines a method for sending coins from some accounts to other accounts.
  static MultiSend(request: MsgMultiSend, initRequest?: fm.InitReq): Promise<MsgMultiSendResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1/MultiSend`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}