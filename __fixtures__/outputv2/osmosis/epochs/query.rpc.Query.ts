import { EpochInfo, EpochInfoSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../helpers";
import { QueryEpochsInfoRequest, QueryEpochsInfoRequestSDKType, QueryEpochsInfoResponse, QueryEpochsInfoResponseSDKType, QueryCurrentEpochRequest, QueryCurrentEpochRequestSDKType, QueryCurrentEpochResponse, QueryCurrentEpochResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** EpochInfos provide running epochInfos */
  EpochInfos(request?: DeepPartial<QueryEpochsInfoRequest>, metadata?: grpc.Metadata): Promise<QueryEpochsInfoResponse>;

  /** CurrentEpoch provide current epoch of specified identifier */
  CurrentEpoch(request: DeepPartial<QueryCurrentEpochRequest>, metadata?: grpc.Metadata): Promise<QueryCurrentEpochResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.epochInfos = this.epochInfos.bind(this);
    this.currentEpoch = this.currentEpoch.bind(this);
  }

  epochInfos(request: DeepPartial<QueryEpochsInfoRequest> = {}, metadata?: grpc.Metadata): Promise<QueryEpochsInfoResponse> {
    return this.rpc.unary(QueryEpochsInfoDesc, QueryEpochsInfoRequest.fromPartial(request), metadata);
  }

  currentEpoch(request: DeepPartial<QueryCurrentEpochRequest>, metadata?: grpc.Metadata): Promise<QueryCurrentEpochResponse> {
    return this.rpc.unary(QueryCurrentEpochDesc, QueryCurrentEpochRequest.fromPartial(request), metadata);
  }

}