import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as fm from "../../../grpc-gateway";
import { MsgConvertCoin, MsgConvertCoinSDKType, MsgConvertCoinResponse, MsgConvertCoinResponseSDKType, MsgConvertERC20, MsgConvertERC20SDKType, MsgConvertERC20Response, MsgConvertERC20ResponseSDKType } from "./tx";
export class Msg {
  static ConvertCoin(request: MsgConvertCoin, initRequest?: fm.InitReq): Promise<MsgConvertCoinResponse> {
    return fm.fetchReq(`/evmos.erc20.v1/ConvertCoin`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static ConvertERC20(request: MsgConvertERC20, initRequest?: fm.InitReq): Promise<MsgConvertERC20Response> {
    return fm.fetchReq(`/evmos.erc20.v1/ConvertERC20`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}