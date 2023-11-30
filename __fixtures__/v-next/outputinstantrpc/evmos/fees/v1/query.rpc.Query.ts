import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DevFeeInfo, DevFeeInfoSDKType } from "./fees";
import { Params, ParamsSDKType } from "./genesis";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosRequestSDKType, QueryDevFeeInfosResponse, QueryDevFeeInfosResponseSDKType, QueryDevFeeInfoRequest, QueryDevFeeInfoRequestSDKType, QueryDevFeeInfoResponse, QueryDevFeeInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerRequestSDKType, QueryDevFeeInfosPerDeployerResponse, QueryDevFeeInfosPerDeployerResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** DevFeeInfos retrieves all registered contracts for fee distribution */
  devFeeInfos(request?: QueryDevFeeInfosRequest): Promise<QueryDevFeeInfosResponse>;
  /** DevFeeInfo retrieves a registered contract for fee distribution */
  devFeeInfo(request: QueryDevFeeInfoRequest): Promise<QueryDevFeeInfoResponse>;
  /** Params retrieves the fees module params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * DevFeeInfosPerDeployer retrieves all contracts that a deployer has
   * registered for fee distribution
   */
  devFeeInfosPerDeployer(request: QueryDevFeeInfosPerDeployerRequest): Promise<QueryDevFeeInfosPerDeployerResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* DevFeeInfos retrieves all registered contracts for fee distribution */
  devFeeInfos = async (request: QueryDevFeeInfosRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryDevFeeInfosResponse> => {
    const data = QueryDevFeeInfosRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "DevFeeInfos", data);
    return promise.then(data => QueryDevFeeInfosResponse.decode(new BinaryReader(data)));
  };
  /* DevFeeInfo retrieves a registered contract for fee distribution */
  devFeeInfo = async (request: QueryDevFeeInfoRequest): Promise<QueryDevFeeInfoResponse> => {
    const data = QueryDevFeeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "DevFeeInfo", data);
    return promise.then(data => QueryDevFeeInfoResponse.decode(new BinaryReader(data)));
  };
  /* Params retrieves the fees module params */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* DevFeeInfosPerDeployer retrieves all contracts that a deployer has
   registered for fee distribution */
  devFeeInfosPerDeployer = async (request: QueryDevFeeInfosPerDeployerRequest): Promise<QueryDevFeeInfosPerDeployerResponse> => {
    const data = QueryDevFeeInfosPerDeployerRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "DevFeeInfosPerDeployer", data);
    return promise.then(data => QueryDevFeeInfosPerDeployerResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: Rpc) => {
  return new QueryClientImpl(rpc);
};