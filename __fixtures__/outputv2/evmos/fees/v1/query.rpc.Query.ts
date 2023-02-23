import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DevFeeInfo, DevFeeInfoSDKType } from "./fees";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosRequestSDKType, QueryDevFeeInfosResponse, QueryDevFeeInfosResponseSDKType, QueryDevFeeInfoRequest, QueryDevFeeInfoRequestSDKType, QueryDevFeeInfoResponse, QueryDevFeeInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerRequestSDKType, QueryDevFeeInfosPerDeployerResponse, QueryDevFeeInfosPerDeployerResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** DevFeeInfos retrieves all registered contracts for fee distribution */
  DevFeeInfos(request?: DeepPartial<QueryDevFeeInfosRequest>, metadata?: grpc.Metadata): Promise<QueryDevFeeInfosResponse>;

  /** DevFeeInfo retrieves a registered contract for fee distribution */
  DevFeeInfo(request: DeepPartial<QueryDevFeeInfoRequest>, metadata?: grpc.Metadata): Promise<QueryDevFeeInfoResponse>;

  /** Params retrieves the fees module params */
  Params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;

  /**
   * DevFeeInfosPerDeployer retrieves all contracts that a deployer has
   * registered for fee distribution
   */
  DevFeeInfosPerDeployer(request: DeepPartial<QueryDevFeeInfosPerDeployerRequest>, metadata?: grpc.Metadata): Promise<QueryDevFeeInfosPerDeployerResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.devFeeInfos = this.devFeeInfos.bind(this);
    this.devFeeInfo = this.devFeeInfo.bind(this);
    this.params = this.params.bind(this);
    this.devFeeInfosPerDeployer = this.devFeeInfosPerDeployer.bind(this);
  }

  devFeeInfos(request: DeepPartial<QueryDevFeeInfosRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryDevFeeInfosResponse> {
    return this.rpc.unary(QueryDevFeeInfosDesc, QueryDevFeeInfosRequest.fromPartial(request), metadata);
  }

  devFeeInfo(request: DeepPartial<QueryDevFeeInfoRequest>, metadata?: grpc.Metadata): Promise<QueryDevFeeInfoResponse> {
    return this.rpc.unary(QueryDevFeeInfoDesc, QueryDevFeeInfoRequest.fromPartial(request), metadata);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  devFeeInfosPerDeployer(request: DeepPartial<QueryDevFeeInfosPerDeployerRequest>, metadata?: grpc.Metadata): Promise<QueryDevFeeInfosPerDeployerResponse> {
    return this.rpc.unary(QueryDevFeeInfosPerDeployerDesc, QueryDevFeeInfosPerDeployerRequest.fromPartial(request), metadata);
  }

}