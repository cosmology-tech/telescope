import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { ClaimsRecordAddress, ClaimsRecordAddressSDKType, Claim, ClaimSDKType } from "./claims";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore, MobxResponse } from "../../../mobx";
import { makeObservable, override } from "mobx";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedRequestSDKType, QueryTotalUnclaimedResponse, QueryTotalUnclaimedResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimsRecordsRequest, QueryClaimsRecordsRequestSDKType, QueryClaimsRecordsResponse, QueryClaimsRecordsResponseSDKType, QueryClaimsRecordRequest, QueryClaimsRecordRequestSDKType, QueryClaimsRecordResponse, QueryClaimsRecordResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** TotalUnclaimed queries the total unclaimed tokens from the airdrop */
  totalUnclaimed(request?: QueryTotalUnclaimedRequest): Promise<QueryTotalUnclaimedResponse>;

  /** Params returns the claims module parameters */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;

  /** ClaimsRecords returns all claims records */
  claimsRecords(request?: QueryClaimsRecordsRequest): Promise<QueryClaimsRecordsResponse>;

  /** ClaimsRecord returns the claims record for a given address */
  claimsRecord(request: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.totalUnclaimed = this.totalUnclaimed.bind(this);
    this.params = this.params.bind(this);
    this.claimsRecords = this.claimsRecords.bind(this);
    this.claimsRecord = this.claimsRecord.bind(this);
  }

  totalUnclaimed(request: QueryTotalUnclaimedRequest = {}): Promise<QueryTotalUnclaimedResponse> {
    const data = QueryTotalUnclaimedRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "TotalUnclaimed", data);
    return promise.then(data => QueryTotalUnclaimedResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  claimsRecords(request: QueryClaimsRecordsRequest = {
    pagination: undefined
  }): Promise<QueryClaimsRecordsResponse> {
    const data = QueryClaimsRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "ClaimsRecords", data);
    return promise.then(data => QueryClaimsRecordsResponse.decode(new _m0.Reader(data)));
  }

  claimsRecord(request: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponse> {
    const data = QueryClaimsRecordRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.claims.v1.Query", "ClaimsRecord", data);
    return promise.then(data => QueryClaimsRecordResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    totalUnclaimed(request?: QueryTotalUnclaimedRequest): Promise<QueryTotalUnclaimedResponse> {
      return queryService.totalUnclaimed(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },

    claimsRecords(request?: QueryClaimsRecordsRequest): Promise<QueryClaimsRecordsResponse> {
      return queryService.claimsRecords(request);
    },

    claimsRecord(request: QueryClaimsRecordRequest): Promise<QueryClaimsRecordResponse> {
      return queryService.claimsRecord(request);
    }

  };
};
export interface UseTotalUnclaimedQuery<TData> extends ReactQueryParams<QueryTotalUnclaimedResponse, TData> {
  request?: QueryTotalUnclaimedRequest;
}
export interface UseParamsQuery<TData> extends ReactQueryParams<QueryParamsResponse, TData> {
  request?: QueryParamsRequest;
}
export interface UseClaimsRecordsQuery<TData> extends ReactQueryParams<QueryClaimsRecordsResponse, TData> {
  request?: QueryClaimsRecordsRequest;
}
export interface UseClaimsRecordQuery<TData> extends ReactQueryParams<QueryClaimsRecordResponse, TData> {
  request: QueryClaimsRecordRequest;
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

  const useTotalUnclaimed = <TData = QueryTotalUnclaimedResponse,>({
    request,
    options
  }: UseTotalUnclaimedQuery<TData>) => {
    return useQuery<QueryTotalUnclaimedResponse, Error, TData>(["totalUnclaimedQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.totalUnclaimed(request);
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

  const useClaimsRecords = <TData = QueryClaimsRecordsResponse,>({
    request,
    options
  }: UseClaimsRecordsQuery<TData>) => {
    return useQuery<QueryClaimsRecordsResponse, Error, TData>(["claimsRecordsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.claimsRecords(request);
    }, options);
  };

  const useClaimsRecord = <TData = QueryClaimsRecordResponse,>({
    request,
    options
  }: UseClaimsRecordQuery<TData>) => {
    return useQuery<QueryClaimsRecordResponse, Error, TData>(["claimsRecordQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.claimsRecord(request);
    }, options);
  };

  return {
    /** TotalUnclaimed queries the total unclaimed tokens from the airdrop */
    useTotalUnclaimed,

    /** Params returns the claims module parameters */
    useParams,

    /** ClaimsRecords returns all claims records */
    useClaimsRecords,

    /** ClaimsRecord returns the claims record for a given address */
    useClaimsRecord
  };
};
export const createRpcQueryStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  class QueryTotalUnclaimedStore extends QueryStore<QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse> {
    constructor() {
      super(queryService?.totalUnclaimed);
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

    totalUnclaimed(request?: QueryTotalUnclaimedRequest): MobxResponse<QueryTotalUnclaimedResponse> {
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

  class QueryClaimsRecordsStore extends QueryStore<QueryClaimsRecordsRequest, QueryClaimsRecordsResponse> {
    constructor() {
      super(queryService?.claimsRecords);
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

    claimsRecords(request?: QueryClaimsRecordsRequest): MobxResponse<QueryClaimsRecordsResponse> {
      return this.getData(request);
    }

  }

  class QueryClaimsRecordStore extends QueryStore<QueryClaimsRecordRequest, QueryClaimsRecordResponse> {
    constructor() {
      super(queryService?.claimsRecord);
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

    claimsRecord(request: QueryClaimsRecordRequest): MobxResponse<QueryClaimsRecordResponse> {
      return this.getData(request);
    }

  }

  return {
    /** TotalUnclaimed queries the total unclaimed tokens from the airdrop */
    QueryTotalUnclaimedStore,

    /** Params returns the claims module parameters */
    QueryParamsStore,

    /** ClaimsRecords returns all claims records */
    QueryClaimsRecordsStore,

    /** ClaimsRecord returns the claims record for a given address */
    QueryClaimsRecordStore
  };
};