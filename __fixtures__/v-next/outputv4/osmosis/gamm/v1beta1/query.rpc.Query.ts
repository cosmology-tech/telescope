import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore, MobxResponse } from "../../../mobx";
import { makeObservable, override } from "mobx";
import { QueryPoolsRequest, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsRequestSDKType, QueryNumPoolsResponse, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponse, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, QueryPoolsWithFilterRequestSDKType, QueryPoolsWithFilterResponse, QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryPoolTypeRequest, QueryPoolTypeRequestSDKType, QueryPoolTypeResponse, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesRequestSDKType, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolNoSwapSharesResponseSDKType, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesRequestSDKType, QueryCalcJoinPoolSharesResponse, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesRequestSDKType, QueryCalcExitPoolCoinsFromSharesResponse, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsRequestSDKType, QueryPoolParamsResponse, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponse, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesRequestSDKType, QueryTotalSharesResponse, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInRequestSDKType, QuerySwapExactAmountInResponse, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutRequestSDKType, QuerySwapExactAmountOutResponse, QuerySwapExactAmountOutResponseSDKType } from "./query";
export interface Query {
  pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse>;
  numPools(request?: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse>;
  totalLiquidity(request?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse>;
  /**
   * PoolsWithFilter allows you to query specific pools with requested
   * parameters
   */
  poolsWithFilter(request: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponse>;
  /** Per Pool gRPC Endpoints */
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
  /**
   * PoolType returns the type of the pool.
   * Returns "Balancer" as a string literal when the pool is a balancer pool.
   * Errors if the pool is failed to be type caseted.
   */
  poolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse>;
  /**
   * Simulates joining pool without a swap. Returns the amount of shares you'd
   * get and tokens needed to provide
   */
  calcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest): Promise<QueryCalcJoinPoolNoSwapSharesResponse>;
  calcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponse>;
  calcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponse>;
  poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse>;
  totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse>;
  totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse>;
  /**
   * SpotPrice defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   */
  spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse>;
  /** Estimate the swap. */
  estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse>;
  estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.pools = this.pools.bind(this);
    this.numPools = this.numPools.bind(this);
    this.totalLiquidity = this.totalLiquidity.bind(this);
    this.poolsWithFilter = this.poolsWithFilter.bind(this);
    this.pool = this.pool.bind(this);
    this.poolType = this.poolType.bind(this);
    this.calcJoinPoolNoSwapShares = this.calcJoinPoolNoSwapShares.bind(this);
    this.calcJoinPoolShares = this.calcJoinPoolShares.bind(this);
    this.calcExitPoolCoinsFromShares = this.calcExitPoolCoinsFromShares.bind(this);
    this.poolParams = this.poolParams.bind(this);
    this.totalPoolLiquidity = this.totalPoolLiquidity.bind(this);
    this.totalShares = this.totalShares.bind(this);
    this.spotPrice = this.spotPrice.bind(this);
    this.estimateSwapExactAmountIn = this.estimateSwapExactAmountIn.bind(this);
    this.estimateSwapExactAmountOut = this.estimateSwapExactAmountOut.bind(this);
  }
  pools(request: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "Pools", data);
    return promise.then(data => QueryPoolsResponse.decode(new _m0.Reader(data)));
  }
  numPools(request: QueryNumPoolsRequest = {}): Promise<QueryNumPoolsResponse> {
    const data = QueryNumPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "NumPools", data);
    return promise.then(data => QueryNumPoolsResponse.decode(new _m0.Reader(data)));
  }
  totalLiquidity(request: QueryTotalLiquidityRequest = {}): Promise<QueryTotalLiquidityResponse> {
    const data = QueryTotalLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalLiquidity", data);
    return promise.then(data => QueryTotalLiquidityResponse.decode(new _m0.Reader(data)));
  }
  poolsWithFilter(request: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponse> {
    const data = QueryPoolsWithFilterRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolsWithFilter", data);
    return promise.then(data => QueryPoolsWithFilterResponse.decode(new _m0.Reader(data)));
  }
  pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "Pool", data);
    return promise.then(data => QueryPoolResponse.decode(new _m0.Reader(data)));
  }
  poolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse> {
    const data = QueryPoolTypeRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolType", data);
    return promise.then(data => QueryPoolTypeResponse.decode(new _m0.Reader(data)));
  }
  calcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest): Promise<QueryCalcJoinPoolNoSwapSharesResponse> {
    const data = QueryCalcJoinPoolNoSwapSharesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CalcJoinPoolNoSwapShares", data);
    return promise.then(data => QueryCalcJoinPoolNoSwapSharesResponse.decode(new _m0.Reader(data)));
  }
  calcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponse> {
    const data = QueryCalcJoinPoolSharesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CalcJoinPoolShares", data);
    return promise.then(data => QueryCalcJoinPoolSharesResponse.decode(new _m0.Reader(data)));
  }
  calcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponse> {
    const data = QueryCalcExitPoolCoinsFromSharesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "CalcExitPoolCoinsFromShares", data);
    return promise.then(data => QueryCalcExitPoolCoinsFromSharesResponse.decode(new _m0.Reader(data)));
  }
  poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse> {
    const data = QueryPoolParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "PoolParams", data);
    return promise.then(data => QueryPoolParamsResponse.decode(new _m0.Reader(data)));
  }
  totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse> {
    const data = QueryTotalPoolLiquidityRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalPoolLiquidity", data);
    return promise.then(data => QueryTotalPoolLiquidityResponse.decode(new _m0.Reader(data)));
  }
  totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse> {
    const data = QueryTotalSharesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "TotalShares", data);
    return promise.then(data => QueryTotalSharesResponse.decode(new _m0.Reader(data)));
  }
  spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
    const data = QuerySpotPriceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "SpotPrice", data);
    return promise.then(data => QuerySpotPriceResponse.decode(new _m0.Reader(data)));
  }
  estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse> {
    const data = QuerySwapExactAmountInRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "EstimateSwapExactAmountIn", data);
    return promise.then(data => QuerySwapExactAmountInResponse.decode(new _m0.Reader(data)));
  }
  estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse> {
    const data = QuerySwapExactAmountOutRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.gamm.v1beta1.Query", "EstimateSwapExactAmountOut", data);
    return promise.then(data => QuerySwapExactAmountOutResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    pools(request?: QueryPoolsRequest): Promise<QueryPoolsResponse> {
      return queryService.pools(request);
    },
    numPools(request?: QueryNumPoolsRequest): Promise<QueryNumPoolsResponse> {
      return queryService.numPools(request);
    },
    totalLiquidity(request?: QueryTotalLiquidityRequest): Promise<QueryTotalLiquidityResponse> {
      return queryService.totalLiquidity(request);
    },
    poolsWithFilter(request: QueryPoolsWithFilterRequest): Promise<QueryPoolsWithFilterResponse> {
      return queryService.poolsWithFilter(request);
    },
    pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
      return queryService.pool(request);
    },
    poolType(request: QueryPoolTypeRequest): Promise<QueryPoolTypeResponse> {
      return queryService.poolType(request);
    },
    calcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest): Promise<QueryCalcJoinPoolNoSwapSharesResponse> {
      return queryService.calcJoinPoolNoSwapShares(request);
    },
    calcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest): Promise<QueryCalcJoinPoolSharesResponse> {
      return queryService.calcJoinPoolShares(request);
    },
    calcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest): Promise<QueryCalcExitPoolCoinsFromSharesResponse> {
      return queryService.calcExitPoolCoinsFromShares(request);
    },
    poolParams(request: QueryPoolParamsRequest): Promise<QueryPoolParamsResponse> {
      return queryService.poolParams(request);
    },
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): Promise<QueryTotalPoolLiquidityResponse> {
      return queryService.totalPoolLiquidity(request);
    },
    totalShares(request: QueryTotalSharesRequest): Promise<QueryTotalSharesResponse> {
      return queryService.totalShares(request);
    },
    spotPrice(request: QuerySpotPriceRequest): Promise<QuerySpotPriceResponse> {
      return queryService.spotPrice(request);
    },
    estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): Promise<QuerySwapExactAmountInResponse> {
      return queryService.estimateSwapExactAmountIn(request);
    },
    estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): Promise<QuerySwapExactAmountOutResponse> {
      return queryService.estimateSwapExactAmountOut(request);
    }
  };
};
export interface UsePoolsQuery<TData> extends ReactQueryParams<QueryPoolsResponse, TData> {
  request?: QueryPoolsRequest;
}
export interface UseNumPoolsQuery<TData> extends ReactQueryParams<QueryNumPoolsResponse, TData> {
  request?: QueryNumPoolsRequest;
}
export interface UseTotalLiquidityQuery<TData> extends ReactQueryParams<QueryTotalLiquidityResponse, TData> {
  request?: QueryTotalLiquidityRequest;
}
export interface UsePoolsWithFilterQuery<TData> extends ReactQueryParams<QueryPoolsWithFilterResponse, TData> {
  request: QueryPoolsWithFilterRequest;
}
export interface UsePoolQuery<TData> extends ReactQueryParams<QueryPoolResponse, TData> {
  request: QueryPoolRequest;
}
export interface UsePoolTypeQuery<TData> extends ReactQueryParams<QueryPoolTypeResponse, TData> {
  request: QueryPoolTypeRequest;
}
export interface UseCalcJoinPoolNoSwapSharesQuery<TData> extends ReactQueryParams<QueryCalcJoinPoolNoSwapSharesResponse, TData> {
  request: QueryCalcJoinPoolNoSwapSharesRequest;
}
export interface UseCalcJoinPoolSharesQuery<TData> extends ReactQueryParams<QueryCalcJoinPoolSharesResponse, TData> {
  request: QueryCalcJoinPoolSharesRequest;
}
export interface UseCalcExitPoolCoinsFromSharesQuery<TData> extends ReactQueryParams<QueryCalcExitPoolCoinsFromSharesResponse, TData> {
  request: QueryCalcExitPoolCoinsFromSharesRequest;
}
export interface UsePoolParamsQuery<TData> extends ReactQueryParams<QueryPoolParamsResponse, TData> {
  request: QueryPoolParamsRequest;
}
export interface UseTotalPoolLiquidityQuery<TData> extends ReactQueryParams<QueryTotalPoolLiquidityResponse, TData> {
  request: QueryTotalPoolLiquidityRequest;
}
export interface UseTotalSharesQuery<TData> extends ReactQueryParams<QueryTotalSharesResponse, TData> {
  request: QueryTotalSharesRequest;
}
export interface UseSpotPriceQuery<TData> extends ReactQueryParams<QuerySpotPriceResponse, TData> {
  request: QuerySpotPriceRequest;
}
export interface UseEstimateSwapExactAmountInQuery<TData> extends ReactQueryParams<QuerySwapExactAmountInResponse, TData> {
  request: QuerySwapExactAmountInRequest;
}
export interface UseEstimateSwapExactAmountOutQuery<TData> extends ReactQueryParams<QuerySwapExactAmountOutResponse, TData> {
  request: QuerySwapExactAmountOutRequest;
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
  const usePools = <TData = QueryPoolsResponse,>({
    request,
    options
  }: UsePoolsQuery<TData>) => {
    return useQuery<QueryPoolsResponse, Error, TData>(["poolsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pools(request);
    }, options);
  };
  const useNumPools = <TData = QueryNumPoolsResponse,>({
    request,
    options
  }: UseNumPoolsQuery<TData>) => {
    return useQuery<QueryNumPoolsResponse, Error, TData>(["numPoolsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.numPools(request);
    }, options);
  };
  const useTotalLiquidity = <TData = QueryTotalLiquidityResponse,>({
    request,
    options
  }: UseTotalLiquidityQuery<TData>) => {
    return useQuery<QueryTotalLiquidityResponse, Error, TData>(["totalLiquidityQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalLiquidity(request);
    }, options);
  };
  const usePoolsWithFilter = <TData = QueryPoolsWithFilterResponse,>({
    request,
    options
  }: UsePoolsWithFilterQuery<TData>) => {
    return useQuery<QueryPoolsWithFilterResponse, Error, TData>(["poolsWithFilterQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolsWithFilter(request);
    }, options);
  };
  const usePool = <TData = QueryPoolResponse,>({
    request,
    options
  }: UsePoolQuery<TData>) => {
    return useQuery<QueryPoolResponse, Error, TData>(["poolQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.pool(request);
    }, options);
  };
  const usePoolType = <TData = QueryPoolTypeResponse,>({
    request,
    options
  }: UsePoolTypeQuery<TData>) => {
    return useQuery<QueryPoolTypeResponse, Error, TData>(["poolTypeQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolType(request);
    }, options);
  };
  const useCalcJoinPoolNoSwapShares = <TData = QueryCalcJoinPoolNoSwapSharesResponse,>({
    request,
    options
  }: UseCalcJoinPoolNoSwapSharesQuery<TData>) => {
    return useQuery<QueryCalcJoinPoolNoSwapSharesResponse, Error, TData>(["calcJoinPoolNoSwapSharesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.calcJoinPoolNoSwapShares(request);
    }, options);
  };
  const useCalcJoinPoolShares = <TData = QueryCalcJoinPoolSharesResponse,>({
    request,
    options
  }: UseCalcJoinPoolSharesQuery<TData>) => {
    return useQuery<QueryCalcJoinPoolSharesResponse, Error, TData>(["calcJoinPoolSharesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.calcJoinPoolShares(request);
    }, options);
  };
  const useCalcExitPoolCoinsFromShares = <TData = QueryCalcExitPoolCoinsFromSharesResponse,>({
    request,
    options
  }: UseCalcExitPoolCoinsFromSharesQuery<TData>) => {
    return useQuery<QueryCalcExitPoolCoinsFromSharesResponse, Error, TData>(["calcExitPoolCoinsFromSharesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.calcExitPoolCoinsFromShares(request);
    }, options);
  };
  const usePoolParams = <TData = QueryPoolParamsResponse,>({
    request,
    options
  }: UsePoolParamsQuery<TData>) => {
    return useQuery<QueryPoolParamsResponse, Error, TData>(["poolParamsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.poolParams(request);
    }, options);
  };
  const useTotalPoolLiquidity = <TData = QueryTotalPoolLiquidityResponse,>({
    request,
    options
  }: UseTotalPoolLiquidityQuery<TData>) => {
    return useQuery<QueryTotalPoolLiquidityResponse, Error, TData>(["totalPoolLiquidityQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalPoolLiquidity(request);
    }, options);
  };
  const useTotalShares = <TData = QueryTotalSharesResponse,>({
    request,
    options
  }: UseTotalSharesQuery<TData>) => {
    return useQuery<QueryTotalSharesResponse, Error, TData>(["totalSharesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalShares(request);
    }, options);
  };
  const useSpotPrice = <TData = QuerySpotPriceResponse,>({
    request,
    options
  }: UseSpotPriceQuery<TData>) => {
    return useQuery<QuerySpotPriceResponse, Error, TData>(["spotPriceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.spotPrice(request);
    }, options);
  };
  const useEstimateSwapExactAmountIn = <TData = QuerySwapExactAmountInResponse,>({
    request,
    options
  }: UseEstimateSwapExactAmountInQuery<TData>) => {
    return useQuery<QuerySwapExactAmountInResponse, Error, TData>(["estimateSwapExactAmountInQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSwapExactAmountIn(request);
    }, options);
  };
  const useEstimateSwapExactAmountOut = <TData = QuerySwapExactAmountOutResponse,>({
    request,
    options
  }: UseEstimateSwapExactAmountOutQuery<TData>) => {
    return useQuery<QuerySwapExactAmountOutResponse, Error, TData>(["estimateSwapExactAmountOutQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.estimateSwapExactAmountOut(request);
    }, options);
  };
  return {
    usePools,
    useNumPools,
    useTotalLiquidity,
    /**
     * PoolsWithFilter allows you to query specific pools with requested
     * parameters
     */
    usePoolsWithFilter,
    /** Per Pool gRPC Endpoints */usePool,
    /**
     * PoolType returns the type of the pool.
     * Returns "Balancer" as a string literal when the pool is a balancer pool.
     * Errors if the pool is failed to be type caseted.
     */
    usePoolType,
    /**
     * Simulates joining pool without a swap. Returns the amount of shares you'd
     * get and tokens needed to provide
     */
    useCalcJoinPoolNoSwapShares,
    useCalcJoinPoolShares,
    useCalcExitPoolCoinsFromShares,
    usePoolParams,
    useTotalPoolLiquidity,
    useTotalShares,
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    useSpotPrice,
    /** Estimate the swap. */useEstimateSwapExactAmountIn,
    useEstimateSwapExactAmountOut
  };
};
export const createRpcQueryStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);
  class QueryPoolsStore extends QueryStore<QueryPoolsRequest, QueryPoolsResponse> {
    constructor() {
      super(queryService?.pools);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }
    pools(request?: QueryPoolsRequest): MobxResponse<QueryPoolsResponse> {
      return this.getData(request);
    }
  }
  class QueryNumPoolsStore extends QueryStore<QueryNumPoolsRequest, QueryNumPoolsResponse> {
    constructor() {
      super(queryService?.numPools);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }
    numPools(request?: QueryNumPoolsRequest): MobxResponse<QueryNumPoolsResponse> {
      return this.getData(request);
    }
  }
  class QueryTotalLiquidityStore extends QueryStore<QueryTotalLiquidityRequest, QueryTotalLiquidityResponse> {
    constructor() {
      super(queryService?.totalLiquidity);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }
    totalLiquidity(request?: QueryTotalLiquidityRequest): MobxResponse<QueryTotalLiquidityResponse> {
      return this.getData(request);
    }
  }
  class QueryPoolsWithFilterStore extends QueryStore<QueryPoolsWithFilterRequest, QueryPoolsWithFilterResponse> {
    constructor() {
      super(queryService?.poolsWithFilter);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }
    poolsWithFilter(request: QueryPoolsWithFilterRequest): MobxResponse<QueryPoolsWithFilterResponse> {
      return this.getData(request);
    }
  }
  class QueryPoolStore extends QueryStore<QueryPoolRequest, QueryPoolResponse> {
    constructor() {
      super(queryService?.pool);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }
    pool(request: QueryPoolRequest): MobxResponse<QueryPoolResponse> {
      return this.getData(request);
    }
  }
  class QueryPoolTypeStore extends QueryStore<QueryPoolTypeRequest, QueryPoolTypeResponse> {
    constructor() {
      super(queryService?.poolType);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }
    poolType(request: QueryPoolTypeRequest): MobxResponse<QueryPoolTypeResponse> {
      return this.getData(request);
    }
  }
  class QueryCalcJoinPoolNoSwapSharesStore extends QueryStore<QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesResponse> {
    constructor() {
      super(queryService?.calcJoinPoolNoSwapShares);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }
    calcJoinPoolNoSwapShares(request: QueryCalcJoinPoolNoSwapSharesRequest): MobxResponse<QueryCalcJoinPoolNoSwapSharesResponse> {
      return this.getData(request);
    }
  }
  class QueryCalcJoinPoolSharesStore extends QueryStore<QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesResponse> {
    constructor() {
      super(queryService?.calcJoinPoolShares);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }
    calcJoinPoolShares(request: QueryCalcJoinPoolSharesRequest): MobxResponse<QueryCalcJoinPoolSharesResponse> {
      return this.getData(request);
    }
  }
  class QueryCalcExitPoolCoinsFromSharesStore extends QueryStore<QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesResponse> {
    constructor() {
      super(queryService?.calcExitPoolCoinsFromShares);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }
    calcExitPoolCoinsFromShares(request: QueryCalcExitPoolCoinsFromSharesRequest): MobxResponse<QueryCalcExitPoolCoinsFromSharesResponse> {
      return this.getData(request);
    }
  }
  class QueryPoolParamsStore extends QueryStore<QueryPoolParamsRequest, QueryPoolParamsResponse> {
    constructor() {
      super(queryService?.poolParams);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }
    poolParams(request: QueryPoolParamsRequest): MobxResponse<QueryPoolParamsResponse> {
      return this.getData(request);
    }
  }
  class QueryTotalPoolLiquidityStore extends QueryStore<QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityResponse> {
    constructor() {
      super(queryService?.totalPoolLiquidity);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }
    totalPoolLiquidity(request: QueryTotalPoolLiquidityRequest): MobxResponse<QueryTotalPoolLiquidityResponse> {
      return this.getData(request);
    }
  }
  class QueryTotalSharesStore extends QueryStore<QueryTotalSharesRequest, QueryTotalSharesResponse> {
    constructor() {
      super(queryService?.totalShares);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }
    totalShares(request: QueryTotalSharesRequest): MobxResponse<QueryTotalSharesResponse> {
      return this.getData(request);
    }
  }
  class QuerySpotPriceStore extends QueryStore<QuerySpotPriceRequest, QuerySpotPriceResponse> {
    constructor() {
      super(queryService?.spotPrice);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }
    spotPrice(request: QuerySpotPriceRequest): MobxResponse<QuerySpotPriceResponse> {
      return this.getData(request);
    }
  }
  class QueryEstimateSwapExactAmountInStore extends QueryStore<QuerySwapExactAmountInRequest, QuerySwapExactAmountInResponse> {
    constructor() {
      super(queryService?.estimateSwapExactAmountIn);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }
    estimateSwapExactAmountIn(request: QuerySwapExactAmountInRequest): MobxResponse<QuerySwapExactAmountInResponse> {
      return this.getData(request);
    }
  }
  class QueryEstimateSwapExactAmountOutStore extends QueryStore<QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutResponse> {
    constructor() {
      super(queryService?.estimateSwapExactAmountOut);
      makeObservable(this, {
        state: override,
        request: override,
        response: override,
        isLoading: override,
        isSuccess: override,
        refetch: override,
        getData: override
      });
    }
    estimateSwapExactAmountOut(request: QuerySwapExactAmountOutRequest): MobxResponse<QuerySwapExactAmountOutResponse> {
      return this.getData(request);
    }
  }
  return {
    QueryPoolsStore,
    QueryNumPoolsStore,
    QueryTotalLiquidityStore,
    /**
     * PoolsWithFilter allows you to query specific pools with requested
     * parameters
     */
    QueryPoolsWithFilterStore,
    /** Per Pool gRPC Endpoints */QueryPoolStore,
    /**
     * PoolType returns the type of the pool.
     * Returns "Balancer" as a string literal when the pool is a balancer pool.
     * Errors if the pool is failed to be type caseted.
     */
    QueryPoolTypeStore,
    /**
     * Simulates joining pool without a swap. Returns the amount of shares you'd
     * get and tokens needed to provide
     */
    QueryCalcJoinPoolNoSwapSharesStore,
    QueryCalcJoinPoolSharesStore,
    QueryCalcExitPoolCoinsFromSharesStore,
    QueryPoolParamsStore,
    QueryTotalPoolLiquidityStore,
    QueryTotalSharesStore,
    /**
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    QuerySpotPriceStore,
    /** Estimate the swap. */QueryEstimateSwapExactAmountInStore,
    QueryEstimateSwapExactAmountOutStore
  };
};