import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BroadcastTxRequest, BroadcastTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgJoinPool, MsgJoinPoolSDKType, MsgJoinPoolResponse, MsgJoinPoolResponseSDKType, MsgExitPool, MsgExitPoolSDKType, MsgExitPoolResponse, MsgExitPoolResponseSDKType, MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountInResponse, MsgSwapExactAmountInResponseSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType, MsgSwapExactAmountOutResponse, MsgSwapExactAmountOutResponseSDKType, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInSDKType, MsgJoinSwapExternAmountInResponse, MsgJoinSwapExternAmountInResponseSDKType, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutSDKType, MsgJoinSwapShareAmountOutResponse, MsgJoinSwapShareAmountOutResponseSDKType, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutSDKType, MsgExitSwapExternAmountOutResponse, MsgExitSwapExternAmountOutResponseSDKType, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInSDKType, MsgExitSwapShareAmountInResponse, MsgExitSwapShareAmountInResponseSDKType } from "./tx";
export interface Msg {
  joinPool(request: BroadcastTxRequest<MsgJoinPool>): Promise<BroadcastTxResponse<MsgJoinPoolResponse>>;
  exitPool(request: BroadcastTxRequest<MsgExitPool>): Promise<BroadcastTxResponse<MsgExitPoolResponse>>;
  swapExactAmountIn(request: BroadcastTxRequest<MsgSwapExactAmountIn>): Promise<BroadcastTxResponse<MsgSwapExactAmountInResponse>>;
  swapExactAmountOut(request: BroadcastTxRequest<MsgSwapExactAmountOut>): Promise<BroadcastTxResponse<MsgSwapExactAmountOutResponse>>;
  joinSwapExternAmountIn(request: BroadcastTxRequest<MsgJoinSwapExternAmountIn>): Promise<BroadcastTxResponse<MsgJoinSwapExternAmountInResponse>>;
  joinSwapShareAmountOut(request: BroadcastTxRequest<MsgJoinSwapShareAmountOut>): Promise<BroadcastTxResponse<MsgJoinSwapShareAmountOutResponse>>;
  exitSwapExternAmountOut(request: BroadcastTxRequest<MsgExitSwapExternAmountOut>): Promise<BroadcastTxResponse<MsgExitSwapExternAmountOutResponse>>;
  exitSwapShareAmountIn(request: BroadcastTxRequest<MsgExitSwapShareAmountIn>): Promise<BroadcastTxResponse<MsgExitSwapShareAmountInResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* JoinPool */
  joinPool = async (request: BroadcastTxRequest<MsgJoinPool>): Promise<BroadcastTxResponse<MsgJoinPoolResponse>> => {
    const data = [{
      typeUrl: MsgJoinPool.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgJoinPoolResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ExitPool */
  exitPool = async (request: BroadcastTxRequest<MsgExitPool>): Promise<BroadcastTxResponse<MsgExitPoolResponse>> => {
    const data = [{
      typeUrl: MsgExitPool.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgExitPoolResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* SwapExactAmountIn */
  swapExactAmountIn = async (request: BroadcastTxRequest<MsgSwapExactAmountIn>): Promise<BroadcastTxResponse<MsgSwapExactAmountInResponse>> => {
    const data = [{
      typeUrl: MsgSwapExactAmountIn.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgSwapExactAmountInResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* SwapExactAmountOut */
  swapExactAmountOut = async (request: BroadcastTxRequest<MsgSwapExactAmountOut>): Promise<BroadcastTxResponse<MsgSwapExactAmountOutResponse>> => {
    const data = [{
      typeUrl: MsgSwapExactAmountOut.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgSwapExactAmountOutResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* JoinSwapExternAmountIn */
  joinSwapExternAmountIn = async (request: BroadcastTxRequest<MsgJoinSwapExternAmountIn>): Promise<BroadcastTxResponse<MsgJoinSwapExternAmountInResponse>> => {
    const data = [{
      typeUrl: MsgJoinSwapExternAmountIn.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgJoinSwapExternAmountInResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* JoinSwapShareAmountOut */
  joinSwapShareAmountOut = async (request: BroadcastTxRequest<MsgJoinSwapShareAmountOut>): Promise<BroadcastTxResponse<MsgJoinSwapShareAmountOutResponse>> => {
    const data = [{
      typeUrl: MsgJoinSwapShareAmountOut.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgJoinSwapShareAmountOutResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ExitSwapExternAmountOut */
  exitSwapExternAmountOut = async (request: BroadcastTxRequest<MsgExitSwapExternAmountOut>): Promise<BroadcastTxResponse<MsgExitSwapExternAmountOutResponse>> => {
    const data = [{
      typeUrl: MsgExitSwapExternAmountOut.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgExitSwapExternAmountOutResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* ExitSwapShareAmountIn */
  exitSwapShareAmountIn = async (request: BroadcastTxRequest<MsgExitSwapShareAmountIn>): Promise<BroadcastTxResponse<MsgExitSwapShareAmountInResponse>> => {
    const data = [{
      typeUrl: MsgExitSwapShareAmountIn.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgExitSwapShareAmountInResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}