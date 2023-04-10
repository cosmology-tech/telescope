import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SwapAmountInRoute, SwapAmountInRouteSDKType, SwapAmountOutRoute, SwapAmountOutRouteSDKType } from "./tx";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Pool as Pool1 } from "../pool-models/balancer/balancerPool";
import { PoolSDKType as Pool1SDKType } from "../pool-models/balancer/balancerPool";
import { Pool as Pool2 } from "../pool-models/stableswap/stableswap_pool";
import { PoolSDKType as Pool2SDKType } from "../pool-models/stableswap/stableswap_pool";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { ReactQueryParams } from "../../../react-query";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { useQuery } from "@tanstack/react-query";
import { QueryPoolsRequest, QueryPoolsRequestSDKType, QueryPoolsResponse, QueryPoolsResponseSDKType, QueryNumPoolsRequest, QueryNumPoolsRequestSDKType, QueryNumPoolsResponse, QueryNumPoolsResponseSDKType, QueryTotalLiquidityRequest, QueryTotalLiquidityRequestSDKType, QueryTotalLiquidityResponse, QueryTotalLiquidityResponseSDKType, QueryPoolsWithFilterRequest, QueryPoolsWithFilterRequestSDKType, QueryPoolsWithFilterResponse, QueryPoolsWithFilterResponseSDKType, QueryPoolRequest, QueryPoolRequestSDKType, QueryPoolResponse, QueryPoolResponseSDKType, QueryPoolTypeRequest, QueryPoolTypeRequestSDKType, QueryPoolTypeResponse, QueryPoolTypeResponseSDKType, QueryCalcJoinPoolNoSwapSharesRequest, QueryCalcJoinPoolNoSwapSharesRequestSDKType, QueryCalcJoinPoolNoSwapSharesResponse, QueryCalcJoinPoolNoSwapSharesResponseSDKType, QueryCalcJoinPoolSharesRequest, QueryCalcJoinPoolSharesRequestSDKType, QueryCalcJoinPoolSharesResponse, QueryCalcJoinPoolSharesResponseSDKType, QueryCalcExitPoolCoinsFromSharesRequest, QueryCalcExitPoolCoinsFromSharesRequestSDKType, QueryCalcExitPoolCoinsFromSharesResponse, QueryCalcExitPoolCoinsFromSharesResponseSDKType, QueryPoolParamsRequest, QueryPoolParamsRequestSDKType, QueryPoolParamsResponse, QueryPoolParamsResponseSDKType, QueryTotalPoolLiquidityRequest, QueryTotalPoolLiquidityRequestSDKType, QueryTotalPoolLiquidityResponse, QueryTotalPoolLiquidityResponseSDKType, QueryTotalSharesRequest, QueryTotalSharesRequestSDKType, QueryTotalSharesResponse, QueryTotalSharesResponseSDKType, QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType, QuerySwapExactAmountInRequest, QuerySwapExactAmountInRequestSDKType, QuerySwapExactAmountInResponse, QuerySwapExactAmountInResponseSDKType, QuerySwapExactAmountOutRequest, QuerySwapExactAmountOutRequestSDKType, QuerySwapExactAmountOutResponse, QuerySwapExactAmountOutResponseSDKType } from "./query";
export interface Query {
  pools(request?: DeepPartial<QueryPoolsRequest>, metadata?: grpc.Metadata): Promise<QueryPoolsResponse>;
  numPools(request?: DeepPartial<QueryNumPoolsRequest>, metadata?: grpc.Metadata): Promise<QueryNumPoolsResponse>;
  totalLiquidity(request?: DeepPartial<QueryTotalLiquidityRequest>, metadata?: grpc.Metadata): Promise<QueryTotalLiquidityResponse>;

  /**
   * PoolsWithFilter allows you to query specific pools with requested
   * parameters
   */
  poolsWithFilter(request: DeepPartial<QueryPoolsWithFilterRequest>, metadata?: grpc.Metadata): Promise<QueryPoolsWithFilterResponse>;

  /** Per Pool gRPC Endpoints */
  pool(request: DeepPartial<QueryPoolRequest>, metadata?: grpc.Metadata): Promise<QueryPoolResponse>;

  /**
   * PoolType returns the type of the pool.
   * Returns "Balancer" as a string literal when the pool is a balancer pool.
   * Errors if the pool is failed to be type caseted.
   */
  poolType(request: DeepPartial<QueryPoolTypeRequest>, metadata?: grpc.Metadata): Promise<QueryPoolTypeResponse>;

  /**
   * Simulates joining pool without a swap. Returns the amount of shares you'd
   * get and tokens needed to provide
   */
  calcJoinPoolNoSwapShares(request: DeepPartial<QueryCalcJoinPoolNoSwapSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcJoinPoolNoSwapSharesResponse>;
  calcJoinPoolShares(request: DeepPartial<QueryCalcJoinPoolSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcJoinPoolSharesResponse>;
  calcExitPoolCoinsFromShares(request: DeepPartial<QueryCalcExitPoolCoinsFromSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcExitPoolCoinsFromSharesResponse>;
  poolParams(request: DeepPartial<QueryPoolParamsRequest>, metadata?: grpc.Metadata): Promise<QueryPoolParamsResponse>;
  totalPoolLiquidity(request: DeepPartial<QueryTotalPoolLiquidityRequest>, metadata?: grpc.Metadata): Promise<QueryTotalPoolLiquidityResponse>;
  totalShares(request: DeepPartial<QueryTotalSharesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalSharesResponse>;

  /**
   * SpotPrice defines a gRPC query handler that returns the spot price given
   * a base denomination and a quote denomination.
   */
  spotPrice(request: DeepPartial<QuerySpotPriceRequest>, metadata?: grpc.Metadata): Promise<QuerySpotPriceResponse>;

  /** Estimate the swap. */
  estimateSwapExactAmountIn(request: DeepPartial<QuerySwapExactAmountInRequest>, metadata?: grpc.Metadata): Promise<QuerySwapExactAmountInResponse>;
  estimateSwapExactAmountOut(request: DeepPartial<QuerySwapExactAmountOutRequest>, metadata?: grpc.Metadata): Promise<QuerySwapExactAmountOutResponse>;
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

  pools(request: DeepPartial<QueryPoolsRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryPoolsResponse> {
    return this.rpc.unary(QueryPoolsDesc, QueryPoolsRequest.fromPartial(request), metadata);
  }

  numPools(request: DeepPartial<QueryNumPoolsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryNumPoolsResponse> {
    return this.rpc.unary(QueryNumPoolsDesc, QueryNumPoolsRequest.fromPartial(request), metadata);
  }

  totalLiquidity(request: DeepPartial<QueryTotalLiquidityRequest> = {}, metadata?: grpc.Metadata): Promise<QueryTotalLiquidityResponse> {
    return this.rpc.unary(QueryTotalLiquidityDesc, QueryTotalLiquidityRequest.fromPartial(request), metadata);
  }

  poolsWithFilter(request: DeepPartial<QueryPoolsWithFilterRequest>, metadata?: grpc.Metadata): Promise<QueryPoolsWithFilterResponse> {
    return this.rpc.unary(QueryPoolsWithFilterDesc, QueryPoolsWithFilterRequest.fromPartial(request), metadata);
  }

  pool(request: DeepPartial<QueryPoolRequest>, metadata?: grpc.Metadata): Promise<QueryPoolResponse> {
    return this.rpc.unary(QueryPoolDesc, QueryPoolRequest.fromPartial(request), metadata);
  }

  poolType(request: DeepPartial<QueryPoolTypeRequest>, metadata?: grpc.Metadata): Promise<QueryPoolTypeResponse> {
    return this.rpc.unary(QueryPoolTypeDesc, QueryPoolTypeRequest.fromPartial(request), metadata);
  }

  calcJoinPoolNoSwapShares(request: DeepPartial<QueryCalcJoinPoolNoSwapSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcJoinPoolNoSwapSharesResponse> {
    return this.rpc.unary(QueryCalcJoinPoolNoSwapSharesDesc, QueryCalcJoinPoolNoSwapSharesRequest.fromPartial(request), metadata);
  }

  calcJoinPoolShares(request: DeepPartial<QueryCalcJoinPoolSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcJoinPoolSharesResponse> {
    return this.rpc.unary(QueryCalcJoinPoolSharesDesc, QueryCalcJoinPoolSharesRequest.fromPartial(request), metadata);
  }

  calcExitPoolCoinsFromShares(request: DeepPartial<QueryCalcExitPoolCoinsFromSharesRequest>, metadata?: grpc.Metadata): Promise<QueryCalcExitPoolCoinsFromSharesResponse> {
    return this.rpc.unary(QueryCalcExitPoolCoinsFromSharesDesc, QueryCalcExitPoolCoinsFromSharesRequest.fromPartial(request), metadata);
  }

  poolParams(request: DeepPartial<QueryPoolParamsRequest>, metadata?: grpc.Metadata): Promise<QueryPoolParamsResponse> {
    return this.rpc.unary(QueryPoolParamsDesc, QueryPoolParamsRequest.fromPartial(request), metadata);
  }

  totalPoolLiquidity(request: DeepPartial<QueryTotalPoolLiquidityRequest>, metadata?: grpc.Metadata): Promise<QueryTotalPoolLiquidityResponse> {
    return this.rpc.unary(QueryTotalPoolLiquidityDesc, QueryTotalPoolLiquidityRequest.fromPartial(request), metadata);
  }

  totalShares(request: DeepPartial<QueryTotalSharesRequest>, metadata?: grpc.Metadata): Promise<QueryTotalSharesResponse> {
    return this.rpc.unary(QueryTotalSharesDesc, QueryTotalSharesRequest.fromPartial(request), metadata);
  }

  spotPrice(request: DeepPartial<QuerySpotPriceRequest>, metadata?: grpc.Metadata): Promise<QuerySpotPriceResponse> {
    return this.rpc.unary(QuerySpotPriceDesc, QuerySpotPriceRequest.fromPartial(request), metadata);
  }

  estimateSwapExactAmountIn(request: DeepPartial<QuerySwapExactAmountInRequest>, metadata?: grpc.Metadata): Promise<QuerySwapExactAmountInResponse> {
    return this.rpc.unary(QuerySwapExactAmountInDesc, QuerySwapExactAmountInRequest.fromPartial(request), metadata);
  }

  estimateSwapExactAmountOut(request: DeepPartial<QuerySwapExactAmountOutRequest>, metadata?: grpc.Metadata): Promise<QuerySwapExactAmountOutResponse> {
    return this.rpc.unary(QuerySwapExactAmountOutDesc, QuerySwapExactAmountOutRequest.fromPartial(request), metadata);
  }

}
export const QueryDesc = {
  serviceName: "osmosis.gamm.v1beta1.Query"
};
export const QueryPoolsDesc: UnaryMethodDefinitionish = {
  methodName: "Pools",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPoolsRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryPoolsResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryNumPoolsDesc: UnaryMethodDefinitionish = {
  methodName: "NumPools",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryNumPoolsRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryNumPoolsResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryTotalLiquidityDesc: UnaryMethodDefinitionish = {
  methodName: "TotalLiquidity",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalLiquidityRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryTotalLiquidityResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryPoolsWithFilterDesc: UnaryMethodDefinitionish = {
  methodName: "PoolsWithFilter",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPoolsWithFilterRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryPoolsWithFilterResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryPoolDesc: UnaryMethodDefinitionish = {
  methodName: "Pool",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPoolRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryPoolResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryPoolTypeDesc: UnaryMethodDefinitionish = {
  methodName: "PoolType",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPoolTypeRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryPoolTypeResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryCalcJoinPoolNoSwapSharesDesc: UnaryMethodDefinitionish = {
  methodName: "CalcJoinPoolNoSwapShares",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryCalcJoinPoolNoSwapSharesRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryCalcJoinPoolNoSwapSharesResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryCalcJoinPoolSharesDesc: UnaryMethodDefinitionish = {
  methodName: "CalcJoinPoolShares",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryCalcJoinPoolSharesRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryCalcJoinPoolSharesResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryCalcExitPoolCoinsFromSharesDesc: UnaryMethodDefinitionish = {
  methodName: "CalcExitPoolCoinsFromShares",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryCalcExitPoolCoinsFromSharesRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryCalcExitPoolCoinsFromSharesResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryPoolParamsDesc: UnaryMethodDefinitionish = {
  methodName: "PoolParams",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryPoolParamsRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryPoolParamsResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryTotalPoolLiquidityDesc: UnaryMethodDefinitionish = {
  methodName: "TotalPoolLiquidity",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalPoolLiquidityRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryTotalPoolLiquidityResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryTotalSharesDesc: UnaryMethodDefinitionish = {
  methodName: "TotalShares",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTotalSharesRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QueryTotalSharesResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QuerySpotPriceDesc: UnaryMethodDefinitionish = {
  methodName: "SpotPrice",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QuerySpotPriceRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QuerySpotPriceResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryEstimateSwapExactAmountInDesc: UnaryMethodDefinitionish = {
  methodName: "EstimateSwapExactAmountIn",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QuerySwapExactAmountInRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QuerySwapExactAmountInResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export const QueryEstimateSwapExactAmountOutDesc: UnaryMethodDefinitionish = {
  methodName: "EstimateSwapExactAmountOut",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QuerySwapExactAmountOutRequest.encode(this).finish();
    }

  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return { ...QuerySwapExactAmountOutResponse.decode(data),

        toObject() {
          return this;
        }

      };
    }

  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = { ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({ ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = (new Error(response.statusMessage) as any);
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }

}
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

    /** Per Pool gRPC Endpoints */
    usePool,

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

    /** Estimate the swap. */
    useEstimateSwapExactAmountIn,
    useEstimateSwapExactAmountOut
  };
};