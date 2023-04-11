import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryPeriodRequest, QueryPeriodRequestSDKType, QueryPeriodResponse, QueryPeriodResponseSDKType, QueryEpochMintProvisionRequest, QueryEpochMintProvisionRequestSDKType, QueryEpochMintProvisionResponse, QueryEpochMintProvisionResponseSDKType, QuerySkippedEpochsRequest, QuerySkippedEpochsRequestSDKType, QuerySkippedEpochsResponse, QuerySkippedEpochsResponseSDKType, QueryCirculatingSupplyRequest, QueryCirculatingSupplyRequestSDKType, QueryCirculatingSupplyResponse, QueryCirculatingSupplyResponseSDKType, QueryInflationRateRequest, QueryInflationRateRequestSDKType, QueryInflationRateResponse, QueryInflationRateResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
/** Query provides defines the gRPC querier service. */
export interface Query {
  /** Period retrieves current period. */
  period(request?: QueryPeriodRequest): Promise<QueryPeriodResponse>;
  /** EpochMintProvision retrieves current minting epoch provision value. */
  epochMintProvision(request?: QueryEpochMintProvisionRequest): Promise<QueryEpochMintProvisionResponse>;
  /** SkippedEpochs retrieves the total number of skipped epochs. */
  skippedEpochs(request?: QuerySkippedEpochsRequest): Promise<QuerySkippedEpochsResponse>;
  /**
   * CirculatingSupply retrieves the total number of tokens that are in
   * circulation (i.e. excluding unvested tokens).
   */
  circulatingSupply(request?: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponse>;
  /** InflationRate retrieves the inflation rate of the current period. */
  inflationRate(request?: QueryInflationRateRequest): Promise<QueryInflationRateResponse>;
  /** Params retrieves the total set of minting parameters. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.period = this.period.bind(this);
    this.epochMintProvision = this.epochMintProvision.bind(this);
    this.skippedEpochs = this.skippedEpochs.bind(this);
    this.circulatingSupply = this.circulatingSupply.bind(this);
    this.inflationRate = this.inflationRate.bind(this);
    this.params = this.params.bind(this);
  }
  period(request: QueryPeriodRequest = {}): Promise<QueryPeriodResponse> {
    const data = QueryPeriodRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "Period", data);
    return promise.then(data => QueryPeriodResponse.decode(new _m0.Reader(data)));
  }
  epochMintProvision(request: QueryEpochMintProvisionRequest = {}): Promise<QueryEpochMintProvisionResponse> {
    const data = QueryEpochMintProvisionRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "EpochMintProvision", data);
    return promise.then(data => QueryEpochMintProvisionResponse.decode(new _m0.Reader(data)));
  }
  skippedEpochs(request: QuerySkippedEpochsRequest = {}): Promise<QuerySkippedEpochsResponse> {
    const data = QuerySkippedEpochsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "SkippedEpochs", data);
    return promise.then(data => QuerySkippedEpochsResponse.decode(new _m0.Reader(data)));
  }
  circulatingSupply(request: QueryCirculatingSupplyRequest = {}): Promise<QueryCirculatingSupplyResponse> {
    const data = QueryCirculatingSupplyRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "CirculatingSupply", data);
    return promise.then(data => QueryCirculatingSupplyResponse.decode(new _m0.Reader(data)));
  }
  inflationRate(request: QueryInflationRateRequest = {}): Promise<QueryInflationRateResponse> {
    const data = QueryInflationRateRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "InflationRate", data);
    return promise.then(data => QueryInflationRateResponse.decode(new _m0.Reader(data)));
  }
  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.inflation.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    period(request?: QueryPeriodRequest): Promise<QueryPeriodResponse> {
      return queryService.period(request);
    },
    epochMintProvision(request?: QueryEpochMintProvisionRequest): Promise<QueryEpochMintProvisionResponse> {
      return queryService.epochMintProvision(request);
    },
    skippedEpochs(request?: QuerySkippedEpochsRequest): Promise<QuerySkippedEpochsResponse> {
      return queryService.skippedEpochs(request);
    },
    circulatingSupply(request?: QueryCirculatingSupplyRequest): Promise<QueryCirculatingSupplyResponse> {
      return queryService.circulatingSupply(request);
    },
    inflationRate(request?: QueryInflationRateRequest): Promise<QueryInflationRateResponse> {
      return queryService.inflationRate(request);
    },
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }
  };
};
export interface UsePeriodQuery<TData> extends ReactQueryParams<QueryPeriodResponse, TData> {
  request?: QueryPeriodRequest;
}
export interface UseEpochMintProvisionQuery<TData> extends ReactQueryParams<QueryEpochMintProvisionResponse, TData> {
  request?: QueryEpochMintProvisionRequest;
}
export interface UseSkippedEpochsQuery<TData> extends ReactQueryParams<QuerySkippedEpochsResponse, TData> {
  request?: QuerySkippedEpochsRequest;
}
export interface UseCirculatingSupplyQuery<TData> extends ReactQueryParams<QueryCirculatingSupplyResponse, TData> {
  request?: QueryCirculatingSupplyRequest;
}
export interface UseInflationRateQuery<TData> extends ReactQueryParams<QueryInflationRateResponse, TData> {
  request?: QueryInflationRateRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
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
  const usePeriod = <TData = QueryPeriodResponse,>({
    request,
    options
  }: UsePeriodQuery<TData>) => {
    return useQuery<QueryPeriodResponse, Error, TData>(["periodQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.period(request);
    }, options);
  };
  const useEpochMintProvision = <TData = QueryEpochMintProvisionResponse,>({
    request,
    options
  }: UseEpochMintProvisionQuery<TData>) => {
    return useQuery<QueryEpochMintProvisionResponse, Error, TData>(["epochMintProvisionQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.epochMintProvision(request);
    }, options);
  };
  const useSkippedEpochs = <TData = QuerySkippedEpochsResponse,>({
    request,
    options
  }: UseSkippedEpochsQuery<TData>) => {
    return useQuery<QuerySkippedEpochsResponse, Error, TData>(["skippedEpochsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.skippedEpochs(request);
    }, options);
  };
  const useCirculatingSupply = <TData = QueryCirculatingSupplyResponse,>({
    request,
    options
  }: UseCirculatingSupplyQuery<TData>) => {
    return useQuery<QueryCirculatingSupplyResponse, Error, TData>(["circulatingSupplyQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.circulatingSupply(request);
    }, options);
  };
  const useInflationRate = <TData = QueryInflationRateResponse,>({
    request,
    options
  }: UseInflationRateQuery<TData>) => {
    return useQuery<QueryInflationRateResponse, Error, TData>(["inflationRateQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.inflationRate(request);
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
  return {
    /** Period retrieves current period. */usePeriod,
    /** EpochMintProvision retrieves current minting epoch provision value. */useEpochMintProvision,
    /** SkippedEpochs retrieves the total number of skipped epochs. */useSkippedEpochs,
    /**
     * CirculatingSupply retrieves the total number of tokens that are in
     * circulation (i.e. excluding unvested tokens).
     */
    useCirculatingSupply,
    /** InflationRate retrieves the inflation rate of the current period. */useInflationRate,
    /** Params retrieves the total set of minting parameters. */useParams
  };
};