import { Action, ActionSDKType, ClaimRecord, ClaimRecordSDKType } from "./claim";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./params";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore, MobxResponse } from "../../../mobx";
import { makeObservable, override } from "mobx";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceRequestSDKType, QueryModuleAccountBalanceResponse, QueryModuleAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordRequestSDKType, QueryClaimRecordResponse, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionRequestSDKType, QueryClaimableForActionResponse, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableRequestSDKType, QueryTotalClaimableResponse, QueryTotalClaimableResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse>;
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse>;
  claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse>;
  totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleAccountBalance = this.moduleAccountBalance.bind(this);
    this.params = this.params.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
    this.claimableForAction = this.claimableForAction.bind(this);
    this.totalClaimable = this.totalClaimable.bind(this);
  }

  moduleAccountBalance(request: QueryModuleAccountBalanceRequest = {}): Promise<QueryModuleAccountBalanceResponse> {
    const data = QueryModuleAccountBalanceRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "ModuleAccountBalance", data);
    return promise.then(data => QueryModuleAccountBalanceResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
    const data = QueryClaimRecordRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "ClaimRecord", data);
    return promise.then(data => QueryClaimRecordResponse.decode(new _m0.Reader(data)));
  }

  claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
    const data = QueryClaimableForActionRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "ClaimableForAction", data);
    return promise.then(data => QueryClaimableForActionResponse.decode(new _m0.Reader(data)));
  }

  totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
    const data = QueryTotalClaimableRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.claim.v1beta1.Query", "TotalClaimable", data);
    return promise.then(data => QueryTotalClaimableResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): Promise<QueryModuleAccountBalanceResponse> {
      return queryService.moduleAccountBalance(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    claimRecord(request: QueryClaimRecordRequest): Promise<QueryClaimRecordResponse> {
      return queryService.claimRecord(request);
    },

    claimableForAction(request: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponse> {
      return queryService.claimableForAction(request);
    },

    totalClaimable(request: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponse> {
      return queryService.totalClaimable(request);
    }

  };
};
export interface UseModuleAccountBalanceQuery<TData> extends ReactQueryParams<QueryModuleAccountBalanceResponse, TData> {
  request?: QueryModuleAccountBalanceRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseClaimRecordQuery<TData> extends ReactQueryParams<QueryClaimRecordResponse, TData> {
  request: QueryClaimRecordRequest;
}
export interface UseClaimableForActionQuery<TData> extends ReactQueryParams<QueryClaimableForActionResponse, TData> {
  request: QueryClaimableForActionRequest;
}
export interface UseTotalClaimableQuery<TData> extends ReactQueryParams<QueryTotalClaimableResponse, TData> {
  request: QueryTotalClaimableRequest;
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

  const useModuleAccountBalance = <TData = QueryModuleAccountBalanceResponse,>({
    request,
    options
  }: UseModuleAccountBalanceQuery<TData>) => {
    return useQuery<QueryModuleAccountBalanceResponse, Error, TData>(["moduleAccountBalanceQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleAccountBalance(request);
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

  const useClaimRecord = <TData = QueryClaimRecordResponse,>({
    request,
    options
  }: UseClaimRecordQuery<TData>) => {
    return useQuery<QueryClaimRecordResponse, Error, TData>(["claimRecordQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.claimRecord(request);
    }, options);
  };

  const useClaimableForAction = <TData = QueryClaimableForActionResponse,>({
    request,
    options
  }: UseClaimableForActionQuery<TData>) => {
    return useQuery<QueryClaimableForActionResponse, Error, TData>(["claimableForActionQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.claimableForAction(request);
    }, options);
  };

  const useTotalClaimable = <TData = QueryTotalClaimableResponse,>({
    request,
    options
  }: UseTotalClaimableQuery<TData>) => {
    return useQuery<QueryTotalClaimableResponse, Error, TData>(["totalClaimableQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalClaimable(request);
    }, options);
  };

  return {
    useModuleAccountBalance,
    useParams,
    useClaimRecord,
    useClaimableForAction,
    useTotalClaimable
  };
};
export const createRpcQueryStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  class QueryModuleAccountBalanceStore extends QueryStore<QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponse> {
    constructor() {
      super(queryService?.moduleAccountBalance);
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

    moduleAccountBalance(request?: QueryModuleAccountBalanceRequest): MobxResponse<QueryModuleAccountBalanceResponse> {
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

  class QueryClaimRecordStore extends QueryStore<QueryClaimRecordRequest, QueryClaimRecordResponse> {
    constructor() {
      super(queryService?.claimRecord);
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

    claimRecord(request: QueryClaimRecordRequest): MobxResponse<QueryClaimRecordResponse> {
      return this.getData(request);
    }

  }

  class QueryClaimableForActionStore extends QueryStore<QueryClaimableForActionRequest, QueryClaimableForActionResponse> {
    constructor() {
      super(queryService?.claimableForAction);
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

    claimableForAction(request: QueryClaimableForActionRequest): MobxResponse<QueryClaimableForActionResponse> {
      return this.getData(request);
    }

  }

  class QueryTotalClaimableStore extends QueryStore<QueryTotalClaimableRequest, QueryTotalClaimableResponse> {
    constructor() {
      super(queryService?.totalClaimable);
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

    totalClaimable(request: QueryTotalClaimableRequest): MobxResponse<QueryTotalClaimableResponse> {
      return this.getData(request);
    }

  }

  return {
    QueryModuleAccountBalanceStore,
    QueryParamsStore,
    QueryClaimRecordStore,
    QueryClaimableForActionStore,
    QueryTotalClaimableStore
  };
};