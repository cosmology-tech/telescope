import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DevFeeInfo, DevFeeInfoSDKType } from "./fees";
import { Params, ParamsSDKType } from "./genesis";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
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
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.devFeeInfos = this.devFeeInfos.bind(this);
    this.devFeeInfo = this.devFeeInfo.bind(this);
    this.params = this.params.bind(this);
    this.devFeeInfosPerDeployer = this.devFeeInfosPerDeployer.bind(this);
  }
  devFeeInfos(request: QueryDevFeeInfosRequest = {
    pagination: undefined
  }): Promise<QueryDevFeeInfosResponse> {
    const data = QueryDevFeeInfosRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "DevFeeInfos", data);
    return promise.then(data => QueryDevFeeInfosResponse.decode(new _m0.Reader(data)));
  }
  devFeeInfo(request: QueryDevFeeInfoRequest): Promise<QueryDevFeeInfoResponse> {
    const data = QueryDevFeeInfoRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "DevFeeInfo", data);
    return promise.then(data => QueryDevFeeInfoResponse.decode(new _m0.Reader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
  devFeeInfosPerDeployer(request: QueryDevFeeInfosPerDeployerRequest): Promise<QueryDevFeeInfosPerDeployerResponse> {
    const data = QueryDevFeeInfosPerDeployerRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.fees.v1.Query", "DevFeeInfosPerDeployer", data);
    return promise.then(data => QueryDevFeeInfosPerDeployerResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    devFeeInfos(request?: QueryDevFeeInfosRequest): Promise<QueryDevFeeInfosResponse> {
      return queryService.devFeeInfos(request);
    },
    devFeeInfo(request: QueryDevFeeInfoRequest): Promise<QueryDevFeeInfoResponse> {
      return queryService.devFeeInfo(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    devFeeInfosPerDeployer(request: QueryDevFeeInfosPerDeployerRequest): Promise<QueryDevFeeInfosPerDeployerResponse> {
      return queryService.devFeeInfosPerDeployer(request);
    }
  };
};
export interface UseDevFeeInfosQuery<TData> extends ReactQueryParams<QueryDevFeeInfosResponse, TData> {
  request?: QueryDevFeeInfosRequest;
}
export interface UseDevFeeInfoQuery<TData> extends ReactQueryParams<QueryDevFeeInfoResponse, TData> {
  request: QueryDevFeeInfoRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseDevFeeInfosPerDeployerQuery<TData> extends ReactQueryParams<QueryDevFeeInfosPerDeployerResponse, TData> {
  request: QueryDevFeeInfosPerDeployerRequest;
}
const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();
const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;
  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }
  const queryService = new QueryClientImpl(rpc);
  _queryClients.set(rpc, queryService);
  return queryService;
};
export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  const useDevFeeInfos = <TData = QueryDevFeeInfosResponse,>({
    request,
    options
  }: UseDevFeeInfosQuery<TData>) => {
    return useQuery<QueryDevFeeInfosResponse, Error, TData>(["devFeeInfosQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.devFeeInfos(request);
    }, options);
  };
  const useDevFeeInfo = <TData = QueryDevFeeInfoResponse,>({
    request,
    options
  }: UseDevFeeInfoQuery<TData>) => {
    return useQuery<QueryDevFeeInfoResponse, Error, TData>(["devFeeInfoQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.devFeeInfo(request);
    }, options);
  };
  const useParams = <TData = QueryParamsResponse,>({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };
  const useDevFeeInfosPerDeployer = <TData = QueryDevFeeInfosPerDeployerResponse,>({
    request,
    options
  }: UseDevFeeInfosPerDeployerQuery<TData>) => {
    return useQuery<QueryDevFeeInfosPerDeployerResponse, Error, TData>(["devFeeInfosPerDeployerQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.devFeeInfosPerDeployer(request);
    }, options);
  };
  return {
    /** DevFeeInfos retrieves all registered contracts for fee distribution */useDevFeeInfos,
    /** DevFeeInfo retrieves a registered contract for fee distribution */useDevFeeInfo,
    /** Params retrieves the fees module params */useParams,
    /**
     * DevFeeInfosPerDeployer retrieves all contracts that a deployer has
     * registered for fee distribution
     */
    useDevFeeInfosPerDeployer
  };
};