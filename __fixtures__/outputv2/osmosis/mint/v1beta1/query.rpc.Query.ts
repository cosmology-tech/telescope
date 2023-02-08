import { Params, ParamsSDKType } from "./mint";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryEpochProvisionsRequest, QueryEpochProvisionsRequestSDKType, QueryEpochProvisionsResponse, QueryEpochProvisionsResponseSDKType } from "./query";

/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of minting parameters. */
  Params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;

  /** EpochProvisions returns the current minting epoch provisions value. */
  EpochProvisions(request?: DeepPartial<QueryEpochProvisionsRequest>, metadata?: grpc.Metadata): Promise<QueryEpochProvisionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.epochProvisions = this.epochProvisions.bind(this);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  epochProvisions(request: DeepPartial<QueryEpochProvisionsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryEpochProvisionsResponse> {
    return this.rpc.unary(QueryEpochProvisionsDesc, QueryEpochProvisionsRequest.fromPartial(request), metadata);
  }

}