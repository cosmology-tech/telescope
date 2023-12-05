import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { DeliverTxResponse, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgJoinPool, MsgJoinPoolSDKType, MsgJoinPoolResponse, MsgJoinPoolResponseSDKType, MsgExitPool, MsgExitPoolSDKType, MsgExitPoolResponse, MsgExitPoolResponseSDKType, MsgSwapExactAmountIn, MsgSwapExactAmountInSDKType, MsgSwapExactAmountInResponse, MsgSwapExactAmountInResponseSDKType, MsgSwapExactAmountOut, MsgSwapExactAmountOutSDKType, MsgSwapExactAmountOutResponse, MsgSwapExactAmountOutResponseSDKType, MsgJoinSwapExternAmountIn, MsgJoinSwapExternAmountInSDKType, MsgJoinSwapExternAmountInResponse, MsgJoinSwapExternAmountInResponseSDKType, MsgJoinSwapShareAmountOut, MsgJoinSwapShareAmountOutSDKType, MsgJoinSwapShareAmountOutResponse, MsgJoinSwapShareAmountOutResponseSDKType, MsgExitSwapExternAmountOut, MsgExitSwapExternAmountOutSDKType, MsgExitSwapExternAmountOutResponse, MsgExitSwapExternAmountOutResponseSDKType, MsgExitSwapShareAmountIn, MsgExitSwapShareAmountInSDKType, MsgExitSwapShareAmountInResponse, MsgExitSwapShareAmountInResponseSDKType } from "./tx";
export interface Msg {
  joinPool(signerAddress: string, message: MsgJoinPool, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  exitPool(signerAddress: string, message: MsgExitPool, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  swapExactAmountIn(signerAddress: string, message: MsgSwapExactAmountIn, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  swapExactAmountOut(signerAddress: string, message: MsgSwapExactAmountOut, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  joinSwapExternAmountIn(signerAddress: string, message: MsgJoinSwapExternAmountIn, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  joinSwapShareAmountOut(signerAddress: string, message: MsgJoinSwapShareAmountOut, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  exitSwapExternAmountOut(signerAddress: string, message: MsgExitSwapExternAmountOut, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
  exitSwapShareAmountIn(signerAddress: string, message: MsgExitSwapShareAmountIn, fee: number | StdFee | "auto", memo: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* JoinPool */
  joinPool = async (signerAddress: string, message: MsgJoinPool, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgJoinPool.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ExitPool */
  exitPool = async (signerAddress: string, message: MsgExitPool, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExitPool.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* SwapExactAmountIn */
  swapExactAmountIn = async (signerAddress: string, message: MsgSwapExactAmountIn, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSwapExactAmountIn.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* SwapExactAmountOut */
  swapExactAmountOut = async (signerAddress: string, message: MsgSwapExactAmountOut, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSwapExactAmountOut.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* JoinSwapExternAmountIn */
  joinSwapExternAmountIn = async (signerAddress: string, message: MsgJoinSwapExternAmountIn, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgJoinSwapExternAmountIn.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* JoinSwapShareAmountOut */
  joinSwapShareAmountOut = async (signerAddress: string, message: MsgJoinSwapShareAmountOut, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgJoinSwapShareAmountOut.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ExitSwapExternAmountOut */
  exitSwapExternAmountOut = async (signerAddress: string, message: MsgExitSwapExternAmountOut, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgExitSwapExternAmountOut.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* ExitSwapShareAmountIn */
  exitSwapShareAmountIn = async (signerAddress: string, message: MsgExitSwapShareAmountIn, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
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