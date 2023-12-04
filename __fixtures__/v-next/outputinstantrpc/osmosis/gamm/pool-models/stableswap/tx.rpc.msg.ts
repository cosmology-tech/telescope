import { PoolParams, PoolParamsSDKType } from "./stableswap_pool";
import { Coin, CoinSDKType } from "../../../../cosmos/base/v1beta1/coin";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../../types";
import { BinaryReader } from "../../../../binary";
import { MsgCreateStableswapPool, MsgCreateStableswapPoolSDKType, MsgCreateStableswapPoolResponse, MsgCreateStableswapPoolResponseSDKType, MsgStableSwapAdjustScalingFactors, MsgStableSwapAdjustScalingFactorsSDKType, MsgStableSwapAdjustScalingFactorsResponse, MsgStableSwapAdjustScalingFactorsResponseSDKType } from "./tx";
export interface Msg {
  createStableswapPool(request: BroadcastTxReq<MsgCreateStableswapPool>): Promise<DeliverTxResponse>;
  stableSwapAdjustScalingFactors(request: BroadcastTxReq<MsgStableSwapAdjustScalingFactors>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateStableswapPool */
  createStableswapPool = async (request: BroadcastTxReq<MsgCreateStableswapPool>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateStableswapPool.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
  /* StableSwapAdjustScalingFactors */
  stableSwapAdjustScalingFactors = async (request: BroadcastTxReq<MsgStableSwapAdjustScalingFactors>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgStableSwapAdjustScalingFactors.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};