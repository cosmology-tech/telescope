import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { Height, HeightSDKType } from "../../../core/client/v1/client";
import { fetchReq } from "../../../../grpc-gateway";
import { MsgTransfer, MsgTransferSDKType, MsgTransferResponse, MsgTransferResponseSDKType } from "./tx";
export class Msg {
  static Transfer(request: MsgTransfer, initRequest?: fm.initReq): Promise<MsgTransferResponse> {
    return fm.fetchReq(`/ibc.applications.transfer.v1.Msg/Transfer`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}