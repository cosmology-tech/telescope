import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { fetchReq } from "../../../grpc-gateway";
import { MsgConvertCoin, MsgConvertCoinSDKType, MsgConvertCoinResponse, MsgConvertCoinResponseSDKType, MsgConvertERC20, MsgConvertERC20SDKType, MsgConvertERC20Response, MsgConvertERC20ResponseSDKType } from "./tx";
export class Msg {
  static ConvertCoin(request: MsgConvertCoin, initRequest?: fm.initReq): Promise<MsgConvertCoinResponse> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ConvertERC20(request: MsgConvertERC20, initRequest?: fm.initReq): Promise<MsgConvertERC20Response> {
    return fm.fetchReq(`/cosmos.bank.v1beta1.Msg/Send`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}