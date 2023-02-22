import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryStore, MobxResponse } from "../../../mobx";
import { makeObservable, override } from "mobx";
import { QueryIncentivesRequest, QueryIncentivesRequestSDKType, QueryIncentivesResponse, QueryIncentivesResponseSDKType, QueryIncentiveRequest, QueryIncentiveRequestSDKType, QueryIncentiveResponse, QueryIncentiveResponseSDKType, QueryGasMetersRequest, QueryGasMetersRequestSDKType, QueryGasMetersResponse, QueryGasMetersResponseSDKType, QueryGasMeterRequest, QueryGasMeterRequestSDKType, QueryGasMeterResponse, QueryGasMeterResponseSDKType, QueryAllocationMetersRequest, QueryAllocationMetersRequestSDKType, QueryAllocationMetersResponse, QueryAllocationMetersResponseSDKType, QueryAllocationMeterRequest, QueryAllocationMeterRequestSDKType, QueryAllocationMeterResponse, QueryAllocationMeterResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Incentives retrieves registered incentives */
  incentives(request?: QueryIncentivesRequest): Promise<QueryIncentivesResponse>;

  /** Incentive retrieves a registered incentive */
  incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse>;

  /** GasMeters retrieves active gas meters for a given contract */
  gasMeters(request: QueryGasMetersRequest): Promise<QueryGasMetersResponse>;

  /** GasMeter Retrieves a active gas meter */
  gasMeter(request: QueryGasMeterRequest): Promise<QueryGasMeterResponse>;

  /**
   * AllocationMeters retrieves active allocation meters for a given
   * denomination
   */
  allocationMeters(request?: QueryAllocationMetersRequest): Promise<QueryAllocationMetersResponse>;

  /** AllocationMeter Retrieves a active gas meter */
  allocationMeter(request: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponse>;

  /** Params retrieves the incentives module params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.incentives = this.incentives.bind(this);
    this.incentive = this.incentive.bind(this);
    this.gasMeters = this.gasMeters.bind(this);
    this.gasMeter = this.gasMeter.bind(this);
    this.allocationMeters = this.allocationMeters.bind(this);
    this.allocationMeter = this.allocationMeter.bind(this);
    this.params = this.params.bind(this);
  }

  incentives(request: QueryIncentivesRequest = {
    pagination: undefined
  }): Promise<QueryIncentivesResponse> {
    const data = QueryIncentivesRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "Incentives", data);
    return promise.then(data => QueryIncentivesResponse.decode(new _m0.Reader(data)));
  }

  incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse> {
    const data = QueryIncentiveRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "Incentive", data);
    return promise.then(data => QueryIncentiveResponse.decode(new _m0.Reader(data)));
  }

  gasMeters(request: QueryGasMetersRequest): Promise<QueryGasMetersResponse> {
    const data = QueryGasMetersRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "GasMeters", data);
    return promise.then(data => QueryGasMetersResponse.decode(new _m0.Reader(data)));
  }

  gasMeter(request: QueryGasMeterRequest): Promise<QueryGasMeterResponse> {
    const data = QueryGasMeterRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "GasMeter", data);
    return promise.then(data => QueryGasMeterResponse.decode(new _m0.Reader(data)));
  }

  allocationMeters(request: QueryAllocationMetersRequest = {
    pagination: undefined
  }): Promise<QueryAllocationMetersResponse> {
    const data = QueryAllocationMetersRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "AllocationMeters", data);
    return promise.then(data => QueryAllocationMetersResponse.decode(new _m0.Reader(data)));
  }

  allocationMeter(request: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponse> {
    const data = QueryAllocationMeterRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "AllocationMeter", data);
    return promise.then(data => QueryAllocationMeterResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    incentives(request?: QueryIncentivesRequest): Promise<QueryIncentivesResponse> {
      return queryService.incentives(request);
    },

    incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse> {
      return queryService.incentive(request);
    },

    gasMeters(request: QueryGasMetersRequest): Promise<QueryGasMetersResponse> {
      return queryService.gasMeters(request);
    },

    gasMeter(request: QueryGasMeterRequest): Promise<QueryGasMeterResponse> {
      return queryService.gasMeter(request);
    },

    allocationMeters(request?: QueryAllocationMetersRequest): Promise<QueryAllocationMetersResponse> {
      return queryService.allocationMeters(request);
    },

    allocationMeter(request: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponse> {
      return queryService.allocationMeter(request);
    },

    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    }

  };
};
export interface UseIncentivesQuery<TData> extends ReactQueryParams<QueryIncentivesResponse, TData> {
  request?: QueryIncentivesRequest;
}
export interface UseIncentiveQuery<TData> extends ReactQueryParams<QueryIncentiveResponse, TData> {
  request: QueryIncentiveRequest;
}
export interface UseGasMetersQuery<TData> extends ReactQueryParams<QueryGasMetersResponse, TData> {
  request: QueryGasMetersRequest;
}
export interface UseGasMeterQuery<TData> extends ReactQueryParams<QueryGasMeterResponse, TData> {
  request: QueryGasMeterRequest;
}
export interface UseAllocationMetersQuery<TData> extends ReactQueryParams<QueryAllocationMetersResponse, TData> {
  request?: QueryAllocationMetersRequest;
}
export interface UseAllocationMeterQuery<TData> extends ReactQueryParams<QueryAllocationMeterResponse, TData> {
  request: QueryAllocationMeterRequest;
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

  const useIncentives = <TData = QueryIncentivesResponse,>({
    request,
    options
  }: UseIncentivesQuery<TData>) => {
    return useQuery<QueryIncentivesResponse, Error, TData>(["incentivesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.incentives(request);
    }, options);
  };

  const useIncentive = <TData = QueryIncentiveResponse,>({
    request,
    options
  }: UseIncentiveQuery<TData>) => {
    return useQuery<QueryIncentiveResponse, Error, TData>(["incentiveQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.incentive(request);
    }, options);
  };

  const useGasMeters = <TData = QueryGasMetersResponse,>({
    request,
    options
  }: UseGasMetersQuery<TData>) => {
    return useQuery<QueryGasMetersResponse, Error, TData>(["gasMetersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.gasMeters(request);
    }, options);
  };

  const useGasMeter = <TData = QueryGasMeterResponse,>({
    request,
    options
  }: UseGasMeterQuery<TData>) => {
    return useQuery<QueryGasMeterResponse, Error, TData>(["gasMeterQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.gasMeter(request);
    }, options);
  };

  const useAllocationMeters = <TData = QueryAllocationMetersResponse,>({
    request,
    options
  }: UseAllocationMetersQuery<TData>) => {
    return useQuery<QueryAllocationMetersResponse, Error, TData>(["allocationMetersQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allocationMeters(request);
    }, options);
  };

  const useAllocationMeter = <TData = QueryAllocationMeterResponse,>({
    request,
    options
  }: UseAllocationMeterQuery<TData>) => {
    return useQuery<QueryAllocationMeterResponse, Error, TData>(["allocationMeterQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.allocationMeter(request);
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
    /** Incentives retrieves registered incentives */
    useIncentives,

    /** Incentive retrieves a registered incentive */
    useIncentive,

    /** GasMeters retrieves active gas meters for a given contract */
    useGasMeters,

    /** GasMeter Retrieves a active gas meter */
    useGasMeter,

    /**
     * AllocationMeters retrieves active allocation meters for a given
     * denomination
     */
    useAllocationMeters,

    /** AllocationMeter Retrieves a active gas meter */
    useAllocationMeter,

    /** Params retrieves the incentives module params */
    useParams
  };
};
export const createRpcQueryStores = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  class QueryIncentivesStore extends QueryStore<QueryIncentivesRequest, QueryIncentivesResponse> {
    constructor() {
      super(queryService?.incentives);
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

    incentives(request?: QueryIncentivesRequest): MobxResponse<QueryIncentivesResponse> {
      return this.getData(request);
    }

  }

  class QueryIncentiveStore extends QueryStore<QueryIncentiveRequest, QueryIncentiveResponse> {
    constructor() {
      super(queryService?.incentive);
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

    incentive(request: QueryIncentiveRequest): MobxResponse<QueryIncentiveResponse> {
      return this.getData(request);
    }

  }

  class QueryGasMetersStore extends QueryStore<QueryGasMetersRequest, QueryGasMetersResponse> {
    constructor() {
      super(queryService?.gasMeters);
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

    gasMeters(request: QueryGasMetersRequest): MobxResponse<QueryGasMetersResponse> {
      return this.getData(request);
    }

  }

  class QueryGasMeterStore extends QueryStore<QueryGasMeterRequest, QueryGasMeterResponse> {
    constructor() {
      super(queryService?.gasMeter);
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

    gasMeter(request: QueryGasMeterRequest): MobxResponse<QueryGasMeterResponse> {
      return this.getData(request);
    }

  }

  class QueryAllocationMetersStore extends QueryStore<QueryAllocationMetersRequest, QueryAllocationMetersResponse> {
    constructor() {
      super(queryService?.allocationMeters);
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

    allocationMeters(request?: QueryAllocationMetersRequest): MobxResponse<QueryAllocationMetersResponse> {
      return this.getData(request);
    }

  }

  class QueryAllocationMeterStore extends QueryStore<QueryAllocationMeterRequest, QueryAllocationMeterResponse> {
    constructor() {
      super(queryService?.allocationMeter);
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

    allocationMeter(request: QueryAllocationMeterRequest): MobxResponse<QueryAllocationMeterResponse> {
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
    /** Incentives retrieves registered incentives */
    QueryIncentivesStore,

    /** Incentive retrieves a registered incentive */
    QueryIncentiveStore,

    /** GasMeters retrieves active gas meters for a given contract */
    QueryGasMetersStore,

    /** GasMeter Retrieves a active gas meter */
    QueryGasMeterStore,

    /**
     * AllocationMeters retrieves active allocation meters for a given
     * denomination
     */
    QueryAllocationMetersStore,

    /** AllocationMeter Retrieves a active gas meter */
    QueryAllocationMeterStore,

    /** Params retrieves the incentives module params */
    QueryParamsStore
  };
};