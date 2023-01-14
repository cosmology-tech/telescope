import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { fetchReq } from "../../../grpc-gateway";
import { MsgJoinPool, MsgJoinPoolSDKType, MsgJoinPoolResponse, MsgJoinPoolResponseSDKType, MsgExitPool, MsgExitPoolSDKType, MsgExitPoolResponse, MsgExitPoolResponseSDKType, MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountInResponse, MsgSwapExactAmountInResponseSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType, MsgSwapExactAmountOutResponse, MsgSwapExactAmountOutResponseSDKType, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInSDKType, MsgJoinSwapExternAmountInResponse, MsgJoinSwapExternAmountInResponseSDKType, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutSDKType, MsgJoinSwapShareAmountOutResponse, MsgJoinSwapShareAmountOutResponseSDKType, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutSDKType, MsgExitSwapExternAmountOutResponse, MsgExitSwapExternAmountOutResponseSDKType, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInSDKType, MsgExitSwapShareAmountInResponse, MsgExitSwapShareAmountInResponseSDKType } from "./tx";
export class Msg {
  static JoinPool(): Promise<MsgJoinPoolResponse> {}

  static ExitPool(): Promise<MsgExitPoolResponse> {}

  static SwapExactAmountIn(): Promise<MsgSwapExactAmountInResponse> {}

  static SwapExactAmountOut(): Promise<MsgSwapExactAmountOutResponse> {}

  static JoinSwapExternAmountIn(): Promise<MsgJoinSwapExternAmountInResponse> {}

  static JoinSwapShareAmountOut(): Promise<MsgJoinSwapShareAmountOutResponse> {}

  static ExitSwapExternAmountOut(): Promise<MsgExitSwapExternAmountOutResponse> {}

  static ExitSwapShareAmountIn(): Promise<MsgExitSwapShareAmountInResponse> {}

}