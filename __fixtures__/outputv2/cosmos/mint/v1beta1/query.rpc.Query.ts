import { Params, ParamsSDKType } from "./mint";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationRequestSDKType, QueryInflationResponse, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsRequestSDKType, QueryAnnualProvisionsResponse, QueryAnnualProvisionsResponseSDKType } from "./query";

/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Params returns the total set of minting parameters. */
  params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;

  /** Inflation returns the current minting inflation value. */
  inflation(request?: DeepPartial<QueryInflationRequest>, metadata?: grpc.Metadata): Promise<QueryInflationResponse>;

  /** AnnualProvisions current minting annual provisions value. */
  annualProvisions(request?: DeepPartial<QueryAnnualProvisionsRequest>, metadata?: grpc.Metadata): Promise<QueryAnnualProvisionsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.params = this.params.bind(this);
    this.inflation = this.inflation.bind(this);
    this.annualProvisions = this.annualProvisions.bind(this);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  inflation(request: DeepPartial<QueryInflationRequest> = {}, metadata?: grpc.Metadata): Promise<QueryInflationResponse> {
    return this.rpc.unary(QueryInflationDesc, QueryInflationRequest.fromPartial(request), metadata);
  }

  annualProvisions(request: DeepPartial<QueryAnnualProvisionsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryAnnualProvisionsResponse> {
    return this.rpc.unary(QueryAnnualProvisionsDesc, QueryAnnualProvisionsRequest.fromPartial(request), metadata);
  }

}