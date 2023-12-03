import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolSDKType, MsgCreateStableswapPoolResponse, MsgCreateStableswapPoolResponseSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsSDKType, MsgStableSwapAdjustScalingFactorsResponse, MsgStableSwapAdjustScalingFactorsResponseSDKType } from "./tx";
export interface Msg {
  createStableswapPool(request: BroadcastTxReq<MsgCreateStableswapPool>): Promise<BroadcastTxRes<MsgCreateStableswapPoolResponse>>;
  stableSwapAdjustScalingFactors(request: BroadcastTxReq<MsgStableSwapAdjustScalingFactors>): Promise<BroadcastTxRes<MsgStableSwapAdjustScalingFactorsResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateStableswapPool */
  createStableswapPool = async (request: BroadcastTxReq<MsgCreateStableswapPool>): Promise<BroadcastTxRes<MsgCreateStableswapPoolResponse>> => {
    const data = [{
      typeUrl: MsgCreateStableswapPool.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateStableswapPoolResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
  /* StableSwapAdjustScalingFactors */
  stableSwapAdjustScalingFactors = async (request: BroadcastTxReq<MsgStableSwapAdjustScalingFactors>): Promise<BroadcastTxRes<MsgStableSwapAdjustScalingFactorsResponse>> => {
    const data = [{
      typeUrl: MsgStableSwapAdjustScalingFactors.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgStableSwapAdjustScalingFactorsResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};