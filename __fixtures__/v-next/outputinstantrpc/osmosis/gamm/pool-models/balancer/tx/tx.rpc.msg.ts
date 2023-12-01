import { PoolParams, PoolParamsSDKType, PoolAsset, PoolAssetSDKType } from "../balancerPool";
import { BroadcastTxReq, BroadcastTxRes, TxRpc } from "../../../../../types";
import { BinaryReader } from "../../../../../binary";
import { MsgCreateBalancerPool, MsgCreateBalancerPoolSDKType, MsgCreateBalancerPoolResponse, MsgCreateBalancerPoolResponseSDKType } from "./tx";
export interface Msg {
  createBalancerPool(request: BroadcastTxReq<MsgCreateBalancerPool>): Promise<BroadcastTxRes<MsgCreateBalancerPoolResponse>>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateBalancerPool */
  createBalancerPool = async (request: BroadcastTxReq<MsgCreateBalancerPool>): Promise<BroadcastTxRes<MsgCreateBalancerPoolResponse>> => {
    const data = [{
      typeUrl: MsgCreateBalancerPool.typeUrl,
      value: request.message
    }];
    const promise = this.rpc.signAndBroadcast!(request.signerAddress, data, request.fee, request.memo);
    return promise.then(data => ({
      txResponse: data,
      response: data && data.msgResponses?.length ? MsgCreateBalancerPoolResponse.decode(data.msgResponses[0].value) : undefined
    }));
  };
}