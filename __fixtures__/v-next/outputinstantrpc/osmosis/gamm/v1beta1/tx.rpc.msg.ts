import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgJoinPool, MsgJoinPoolSDKType, MsgJoinPoolResponse, MsgJoinPoolResponseSDKType, MsgExitPool, MsgExitPoolSDKType, MsgExitPoolResponse, MsgExitPoolResponseSDKType, MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountInResponse, MsgSwapExactAmountInResponseSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType, MsgSwapExactAmountOutResponse, MsgSwapExactAmountOutResponseSDKType, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInSDKType, MsgJoinSwapExternAmountInResponse, MsgJoinSwapExternAmountInResponseSDKType, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutSDKType, MsgJoinSwapShareAmountOutResponse, MsgJoinSwapShareAmountOutResponseSDKType, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutSDKType, MsgExitSwapExternAmountOutResponse, MsgExitSwapExternAmountOutResponseSDKType, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInSDKType, MsgExitSwapShareAmountInResponse, MsgExitSwapShareAmountInResponseSDKType } from "./tx";
export interface Msg {
  joinPool(request: BroadcastTxReq<MsgJoinPool>): Promise<DeliverTxResponse>;
  exitPool(request: BroadcastTxReq<MsgExitPool>): Promise<DeliverTxResponse>;
  swapExactAmountIn(request: BroadcastTxReq<MsgSwapExactAmountIn>): Promise<DeliverTxResponse>;
  swapExactAmountOut(request: BroadcastTxReq<MsgSwapExactAmountOut>): Promise<DeliverTxResponse>;
  joinSwapExternAmountIn(request: BroadcastTxReq<MsgJoinSwapExternAmountIn>): Promise<DeliverTxResponse>;
  joinSwapShareAmountOut(request: BroadcastTxReq<MsgJoinSwapShareAmountOut>): Promise<DeliverTxResponse>;
  exitSwapExternAmountOut(request: BroadcastTxReq<MsgExitSwapExternAmountOut>): Promise<DeliverTxResponse>;
  exitSwapShareAmountIn(request: BroadcastTxReq<MsgExitSwapShareAmountIn>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* JoinPool */
  joinPool = async (request: BroadcastTxReq<MsgJoinPool>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgJoinPool.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ExitPool */
  exitPool = async (request: BroadcastTxReq<MsgExitPool>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExitPool.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* SwapExactAmountIn */
  swapExactAmountIn = async (request: BroadcastTxReq<MsgSwapExactAmountIn>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSwapExactAmountIn.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* SwapExactAmountOut */
  swapExactAmountOut = async (request: BroadcastTxReq<MsgSwapExactAmountOut>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSwapExactAmountOut.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* JoinSwapExternAmountIn */
  joinSwapExternAmountIn = async (request: BroadcastTxReq<MsgJoinSwapExternAmountIn>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgJoinSwapExternAmountIn.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* JoinSwapShareAmountOut */
  joinSwapShareAmountOut = async (request: BroadcastTxReq<MsgJoinSwapShareAmountOut>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgJoinSwapShareAmountOut.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ExitSwapExternAmountOut */
  exitSwapExternAmountOut = async (request: BroadcastTxReq<MsgExitSwapExternAmountOut>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExitSwapExternAmountOut.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ExitSwapShareAmountIn */
  exitSwapShareAmountIn = async (request: BroadcastTxReq<MsgExitSwapShareAmountIn>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExitSwapShareAmountIn.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};