import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { fetchReq } from "../../../grpc-gateway";
import { MsgJoinPool, MsgJoinPoolSDKType, MsgJoinPoolResponse, MsgJoinPoolResponseSDKType, MsgExitPool, MsgExitPoolSDKType, MsgExitPoolResponse, MsgExitPoolResponseSDKType, MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountInResponse, MsgSwapExactAmountInResponseSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType, MsgSwapExactAmountOutResponse, MsgSwapExactAmountOutResponseSDKType, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInSDKType, MsgJoinSwapExternAmountInResponse, MsgJoinSwapExternAmountInResponseSDKType, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutSDKType, MsgJoinSwapShareAmountOutResponse, MsgJoinSwapShareAmountOutResponseSDKType, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutSDKType, MsgExitSwapExternAmountOutResponse, MsgExitSwapExternAmountOutResponseSDKType, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInSDKType, MsgExitSwapShareAmountInResponse, MsgExitSwapShareAmountInResponseSDKType } from "./tx";
export class Msg {
  static JoinPool(request: MsgJoinPool, initRequest?: fm.initReq): Promise<MsgJoinPoolResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1.Msg/JoinPool`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ExitPool(request: MsgExitPool, initRequest?: fm.initReq): Promise<MsgExitPoolResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1.Msg/ExitPool`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static SwapExactAmountIn(request: MsgSwapExactAmountIn, initRequest?: fm.initReq): Promise<MsgSwapExactAmountInResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1.Msg/SwapExactAmountIn`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static SwapExactAmountOut(request: MsgSwapExactAmountOut, initRequest?: fm.initReq): Promise<MsgSwapExactAmountOutResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1.Msg/SwapExactAmountOut`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static JoinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn, initRequest?: fm.initReq): Promise<MsgJoinSwapExternAmountInResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1.Msg/JoinSwapExternAmountIn`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static JoinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut, initRequest?: fm.initReq): Promise<MsgJoinSwapShareAmountOutResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1.Msg/JoinSwapShareAmountOut`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ExitSwapExternAmountOut(request: MsgExitSwapExternAmountOut, initRequest?: fm.initReq): Promise<MsgExitSwapExternAmountOutResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1.Msg/ExitSwapExternAmountOut`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

  static ExitSwapShareAmountIn(request: MsgExitSwapShareAmountIn, initRequest?: fm.initReq): Promise<MsgExitSwapShareAmountInResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1.Msg/ExitSwapShareAmountIn`, { ...initReq,
      method: "POST",
      body: JSON.stringify(req, fm.replacer)
    });
  }

}