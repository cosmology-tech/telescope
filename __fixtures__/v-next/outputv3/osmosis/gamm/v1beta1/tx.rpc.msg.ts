import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as fm from "../../../grpc-gateway";
import { MsgJoinPool, MsgJoinPoolSDKType, MsgJoinPoolResponse, MsgJoinPoolResponseSDKType, MsgExitPool, MsgExitPoolSDKType, MsgExitPoolResponse, MsgExitPoolResponseSDKType, MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountInResponse, MsgSwapExactAmountInResponseSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType, MsgSwapExactAmountOutResponse, MsgSwapExactAmountOutResponseSDKType, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInSDKType, MsgJoinSwapExternAmountInResponse, MsgJoinSwapExternAmountInResponseSDKType, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutSDKType, MsgJoinSwapShareAmountOutResponse, MsgJoinSwapShareAmountOutResponseSDKType, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutSDKType, MsgExitSwapExternAmountOutResponse, MsgExitSwapExternAmountOutResponseSDKType, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInSDKType, MsgExitSwapShareAmountInResponse, MsgExitSwapShareAmountInResponseSDKType } from "./tx";
export class Msg {
  static JoinPool(request: MsgJoinPool, initRequest?: fm.InitReq): Promise<MsgJoinPoolResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/JoinPool`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static ExitPool(request: MsgExitPool, initRequest?: fm.InitReq): Promise<MsgExitPoolResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/ExitPool`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static SwapExactAmountIn(request: MsgSwapExactAmountIn, initRequest?: fm.InitReq): Promise<MsgSwapExactAmountInResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/SwapExactAmountIn`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static SwapExactAmountOut(request: MsgSwapExactAmountOut, initRequest?: fm.InitReq): Promise<MsgSwapExactAmountOutResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/SwapExactAmountOut`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static JoinSwapExternAmountIn(request: MsgJoinSwapExternAmountIn, initRequest?: fm.InitReq): Promise<MsgJoinSwapExternAmountInResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/JoinSwapExternAmountIn`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static JoinSwapShareAmountOut(request: MsgJoinSwapShareAmountOut, initRequest?: fm.InitReq): Promise<MsgJoinSwapShareAmountOutResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/JoinSwapShareAmountOut`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static ExitSwapExternAmountOut(request: MsgExitSwapExternAmountOut, initRequest?: fm.InitReq): Promise<MsgExitSwapExternAmountOutResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/ExitSwapExternAmountOut`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

  static ExitSwapShareAmountIn(request: MsgExitSwapShareAmountIn, initRequest?: fm.InitReq): Promise<MsgExitSwapShareAmountInResponse> {
    return fm.fetchReq(`/osmosis.gamm.v1beta1/ExitSwapShareAmountIn`, { ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }

}