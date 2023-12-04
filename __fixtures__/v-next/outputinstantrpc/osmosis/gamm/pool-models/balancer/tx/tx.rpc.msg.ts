import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import { BroadcastTxReq, DeliverTxResponse, TxRpc } from "../../../../../types";
import { BinaryReader } from "../../../../../binary";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolSDKType, MsgCreateBalancerPoolResponse, MsgCreateBalancerPoolResponseSDKType } from "./tx";
export interface Msg {
  createBalancerPool(request: BroadcastTxReq<MsgCreateBalancerPool>): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateBalancerPool */
  createBalancerPool = async (request: BroadcastTxReq<MsgCreateBalancerPool>): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateBalancerPool.typeUrl,
      value: request.message
    }];
    return this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};