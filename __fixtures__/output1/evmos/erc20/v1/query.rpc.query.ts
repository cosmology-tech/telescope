import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairSDKType } from "./erc20";
import { Params, ParamsSDKType } from "./genesis";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryTokenPairsRequest, QueryTokenPairsRequestSDKType, QueryTokenPairsResponse, QueryTokenPairsResponseSDKType, QueryTokenPairRequest, QueryTokenPairRequestSDKType, QueryTokenPairResponse, QueryTokenPairResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** TokenPairs retrieves registered token pairs */
  tokenPairs(request?: QueryTokenPairsRequest): Promise<QueryTokenPairsResponse>;

  /** TokenPair retrieves a registered token pair */
  tokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse>;

  /** Params retrieves the erc20 module params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.tokenPairs = this.tokenPairs.bind(this);
    this.tokenPair = this.tokenPair.bind(this);
    this.params = this.params.bind(this);
  }

  tokenPairs(request: QueryTokenPairsRequest = {
    pagination: undefined
  }): Promise<QueryTokenPairsResponse> {
    const data = QueryTokenPairsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Query", "TokenPairs", data);
    return promise.then(data => QueryTokenPairsResponse.decode(new _m0.Reader(data)));
  }

  tokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse> {
    const data = QueryTokenPairRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Query", "TokenPair", data);
    return promise.then(data => QueryTokenPairResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.erc20.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    tokenPairs(request?: QueryTokenPairsRequest): Promise<QueryTokenPairsResponse> {
      return queryService.tokenPairs(request);
    },

    tokenPair(request: QueryTokenPairRequest): Promise<QueryTokenPairResponse> {
      return queryService.tokenPair(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }

  };
};
export interface UseTokenPairsQuery<TData> extends ReactQueryParams<QueryTokenPairsResponse, TData> {
  request?: QueryTokenPairsRequest;
}
export interface UseTokenPairQuery<TData> extends ReactQueryParams<QueryTokenPairResponse, TData> {
  request: QueryTokenPairRequest;
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

  const useTokenPairs = ({
    request,
    options
  }: UseTokenPairsQuery<TData>) => {
    return useQuery<QueryTokenPairsResponse, Error, TData>(["tokenPairsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tokenPairs(request);
    }, options);
  };

  const useTokenPair = ({
    request,
    options
  }: UseTokenPairQuery<TData>) => {
    return useQuery<QueryTokenPairResponse, Error, TData>(["tokenPairQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.tokenPair(request);
    }, options);
  };

  const useParams = ({
    request,
    options
  }: UseParamsQuery<TData>) => {
    return useQuery<QueryParamsResponse, Error, TData>(["paramsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.params(request);
    }, options);
  };

  return {
    /** TokenPairs retrieves registered token pairs */
    useTokenPairs,

    /** TokenPair retrieves a registered token pair */
    useTokenPair,

    /** Params retrieves the erc20 module params */
    useParams
  };
};