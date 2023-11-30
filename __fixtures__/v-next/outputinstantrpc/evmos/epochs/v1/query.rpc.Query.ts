import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoSDKType } from "./genesis";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryEpochsInfoRequest, QueryEpochsInfoRequestSDKType, QueryEpochsInfoResponse, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochRequestSDKType, QueryCurrentEpochResponse, QueryCurrentEpochResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** EpochInfos provide running epochInfos */
  epochInfos(request?: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponse>;
  /** CurrentEpoch provide current epoch of specified identifier */
  currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* EpochInfos provide running epochInfos */
  epochInfos = async (request: QueryEpochsInfoRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryEpochsInfoResponse> => {
    const data = QueryEpochsInfoRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.epochs.v1.Query", "EpochInfos", data);
    return promise.then(data => QueryEpochsInfoResponse.decode(new BinaryReader(data)));
  };
  /* CurrentEpoch provide current epoch of specified identifier */
  currentEpoch = async (request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> => {
    const data = QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.epochs.v1.Query", "CurrentEpoch", data);
    return promise.then(data => QueryCurrentEpochResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: Rpc) => {
  return new QueryClientImpl(rpc);
};