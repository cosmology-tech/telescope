import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, DenomTraceSDKType, Params, ParamsSDKType } from "./transfer";
import { Rpc } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore, MobxResponse } from "../../../../mobx";
import { makeObservable, override } from "mobx";
import { QueryDenomTraceRequest, QueryDenomTraceRequestSDKType, QueryDenomTraceResponse, QueryDenomTraceResponseSDKType, QueryDenomTracesRequest, QueryDenomTracesRequestSDKType, QueryDenomTracesResponse, QueryDenomTracesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";

/** Query provides defines the gRPC querier service. */
export interface Query {
  /** DenomTrace queries a denomination trace information. */
  denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;

  /** DenomTraces queries all denomination traces. */
  denomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;

  /** Params queries all parameters of the ibc-transfer module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.denomTrace = this.denomTrace.bind(this);
    this.denomTraces = this.denomTraces.bind(this);
    this.params = this.params.bind(this);
  }

  denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> {
    const data = QueryDenomTraceRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTrace", data);
    return promise.then(data => QueryDenomTraceResponse.decode(new _m0.Reader(data)));
  }

  denomTraces(request: QueryDenomTracesRequest = {
    pagination: undefined
  }): Promise<QueryDenomTracesResponse> {
    const data = QueryDenomTracesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "DenomTraces", data);
    return promise.then(data => QueryDenomTracesResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.applications.transfer.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    denomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse> {
      return queryService.denomTrace(request);
    },

    denomTraces(request?: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse> {
      return queryService.denomTraces(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }

  };
};
export interface UseDenomTraceQuery<TData> extends ReactQueryParams<QueryDenomTraceResponse, TData> {
  request: QueryDenomTraceRequest;
}
export interface UseDenomTracesQuery<TData> extends ReactQueryParams<QueryDenomTracesResponse, TData> {
  request?: QueryDenomTracesRequest;
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

  const useDenomTrace = <TData = QueryDenomTraceResponse,>({
    request,
    options
  }: UseDenomTraceQuery<TData>) => {
    return useQuery<QueryDenomTraceResponse, Error, TData>(["denomTraceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomTrace(request);
    }, options);
  };

  const useDenomTraces = <TData = QueryDenomTracesResponse,>({
    request,
    options
  }: UseDenomTracesQuery<TData>) => {
    return useQuery<QueryDenomTracesResponse, Error, TData>(["denomTracesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.denomTraces(request);
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
    /** DenomTrace queries a denomination trace information. */
    useDenomTrace,

    /** DenomTraces queries all denomination traces. */
    useDenomTraces,

    /** Params queries all parameters of the ibc-transfer module. */
    useParams
  };
};
export const createRpcQueryStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  class QueryDenomTraceStore extends QueryStore<QueryDenomTraceRequest, QueryDenomTraceResponse> {
    constructor() {
      super(queryService?.denomTrace);
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

    denomTrace(request: QueryDenomTraceRequest): MobxResponse<QueryDenomTraceResponse> {
      return this.getData(request);
    }

  }

  class QueryDenomTracesStore extends QueryStore<QueryDenomTracesRequest, QueryDenomTracesResponse> {
    constructor() {
      super(queryService?.denomTraces);
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

    denomTraces(request?: QueryDenomTracesRequest): MobxResponse<QueryDenomTracesResponse> {
      return this.getData(request);
    }

  }

  class QueryParamsStore extends QueryStore<QueryParamsRequest, QueryParamsResponse> {
    constructor() {
      super(queryService?.params);
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

    params(request?: QueryParamsRequest): MobxResponse<QueryParamsResponse> {
      return this.getData(request);
    }

  }

  return {
    /** DenomTrace queries a denomination trace information. */
    QueryDenomTraceStore,

    /** DenomTraces queries all denomination traces. */
    QueryDenomTracesStore,

    /** Params queries all parameters of the ibc-transfer module. */
    QueryParamsStore
  };
};