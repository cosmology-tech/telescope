import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { EpochInfo, EpochInfoSDKType } from "./genesis";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryEpochsInfoRequest, QueryEpochsInfoRequestSDKType, QueryEpochsInfoResponse, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochRequestSDKType, QueryCurrentEpochResponse, QueryCurrentEpochResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  epochInfos(request: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponseSDKType>;
  /*EpochInfos provide running epochInfos*/

  currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponseSDKType>;
  /*CurrentEpoch provide current epoch of specified identifier*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.epochInfos = this.epochInfos.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
  }

  epochInfos(request: QueryEpochsInfoRequest): Promise<QueryEpochsInfoResponseSDKType> {
    const data = QueryEpochsInfoRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.epochs.v1.Query", "EpochInfos", data);
    return promise.then(data => QueryEpochsInfoResponse.decode(new _m0.Reader(data)));
  }

  currentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponseSDKType> {
    const data = QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.epochs.v1.Query", "CurrentEpoch", data);
    return promise.then(data => QueryCurrentEpochResponse.decode(new _m0.Reader(data)));
  }

}