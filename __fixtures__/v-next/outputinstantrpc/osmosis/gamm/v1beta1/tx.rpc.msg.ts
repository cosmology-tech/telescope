import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgJoinPool, MsgJoinPoolSDKType, MsgJoinPoolResponse, MsgJoinPoolResponseSDKType, MsgExitPool, MsgExitPoolSDKType, MsgExitPoolResponse, MsgExitPoolResponseSDKType, MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountInResponse, MsgSwapExactAmountInResponseSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType, MsgSwapExactAmountOutResponse, MsgSwapExactAmountOutResponseSDKType, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInSDKType, MsgJoinSwapExternAmountInResponse, MsgJoinSwapExternAmountInResponseSDKType, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutSDKType, MsgJoinSwapShareAmountOutResponse, MsgJoinSwapShareAmountOutResponseSDKType, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutSDKType, MsgExitSwapExternAmountOutResponse, MsgExitSwapExternAmountOutResponseSDKType, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInSDKType, MsgExitSwapShareAmountInResponse, MsgExitSwapShareAmountInResponseSDKType } from "./tx";
export interface Msg {
  joinPool(request: BroadcastTxReq<MsgJoinPool>): Promise<BroadcastTxRes<MsgJoinPoolResponse>>;
  exitPool(request: BroadcastTxReq<MsgExitPool>): Promise<BroadcastTxRes<MsgExitPoolResponse>>;
  swapExactAmountIn(request: BroadcastTxReq<MsgSwapExactAmountIn>): Promise<BroadcastTxRes<MsgSwapExactAmountInResponse>>;
  swapExactAmountOut(request: BroadcastTxReq<MsgSwapExactAmountOut>): Promise<BroadcastTxRes<MsgSwapExactAmountOutResponse>>;
  joinSwapExternAmountIn(request: BroadcastTxReq<MsgJoinSwapExternAmountIn>): Promise<BroadcastTxRes<MsgJoinSwapExternAmountInResponse>>;
  joinSwapShareAmountOut(request: BroadcastTxReq<MsgJoinSwapShareAmountOut>): Promise<BroadcastTxRes<MsgJoinSwapShareAmountOutResponse>>;
  exitSwapExternAmountOut(request: BroadcastTxReq<MsgExitSwapExternAmountOut>): Promise<BroadcastTxRes<MsgExitSwapExternAmountOutResponse>>;
  exitSwapShareAmountIn(request: BroadcastTxReq<MsgExitSwapShareAmountIn>): Promise<BroadcastTxRes<MsgExitSwapShareAmountInResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* JoinPool */
  joinPool = async (request: BroadcastTxReq<MsgJoinPool>): Promise<BroadcastTxRes<MsgJoinPoolResponse>> => {
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
  exitPool = async (request: BroadcastTxReq<MsgExitPool>): Promise<BroadcastTxRes<MsgExitPoolResponse>> => {
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
  swapExactAmountIn = async (request: BroadcastTxReq<MsgSwapExactAmountIn>): Promise<BroadcastTxRes<MsgSwapExactAmountInResponse>> => {
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
  swapExactAmountOut = async (request: BroadcastTxReq<MsgSwapExactAmountOut>): Promise<BroadcastTxRes<MsgSwapExactAmountOutResponse>> => {
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
  joinSwapExternAmountIn = async (request: BroadcastTxReq<MsgJoinSwapExternAmountIn>): Promise<BroadcastTxRes<MsgJoinSwapExternAmountInResponse>> => {
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
  joinSwapShareAmountOut = async (request: BroadcastTxReq<MsgJoinSwapShareAmountOut>): Promise<BroadcastTxRes<MsgJoinSwapShareAmountOutResponse>> => {
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
  exitSwapExternAmountOut = async (request: BroadcastTxReq<MsgExitSwapExternAmountOut>): Promise<BroadcastTxRes<MsgExitSwapExternAmountOutResponse>> => {
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
  exitSwapShareAmountIn = async (request: BroadcastTxReq<MsgExitSwapShareAmountIn>): Promise<BroadcastTxRes<MsgExitSwapShareAmountInResponse>> => {
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
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};