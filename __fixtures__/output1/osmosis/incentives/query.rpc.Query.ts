import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../react-query";
import { useQuery } from "@tanstack/react-query";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsRequestSDKType, ModuleToDistributeCoinsResponse, ModuleToDistributeCoinsResponseSDKType, GaugeByIDRequest, GaugeByIDRequestSDKType, GaugeByIDResponse, GaugeByIDResponseSDKType, GaugesRequest, GaugesRequestSDKType, GaugesResponse, GaugesResponseSDKType, ActiveGaugesRequest, ActiveGaugesRequestSDKType, ActiveGaugesResponse, ActiveGaugesResponseSDKType, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomRequestSDKType, ActiveGaugesPerDenomResponse, ActiveGaugesPerDenomResponseSDKType, UpcomingGaugesRequest, UpcomingGaugesRequestSDKType, UpcomingGaugesResponse, UpcomingGaugesResponseSDKType, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomRequestSDKType, UpcomingGaugesPerDenomResponse, UpcomingGaugesPerDenomResponseSDKType, RewardsEstRequest, RewardsEstRequestSDKType, RewardsEstResponse, RewardsEstResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** ModuleToDistributeCoins returns coins that are going to be distributed */
  moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
  /** GaugeByID returns gauges by their respective ID */
  gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse>;
  /** Gauges returns both upcoming and active gauges */
  gauges(request?: GaugesRequest): Promise<GaugesResponse>;
  /** ActiveGauges returns active gauges */
  activeGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponse>;
  /** ActiveGaugesPerDenom returns active gauges by denom */
  activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse>;
  /** Returns scheduled gauges that have not yet occured */
  upcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse>;
  /**
   * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
   * by denom
   */
  upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse>;
  /**
   * RewardsEst returns an estimate of the rewards from now until a specified
   * time in the future The querier either provides an address or a set of locks
   * for which they want to find the associated rewards
   */
  rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse>;
  /**
   * LockableDurations returns lockable durations that are valid to distribute
   * incentives for
   */
  lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleToDistributeCoins = this.moduleToDistributeCoins.bind(this);
    this.gaugeByID = this.gaugeByID.bind(this);
    this.gauges = this.gauges.bind(this);
    this.activeGauges = this.activeGauges.bind(this);
    this.activeGaugesPerDenom = this.activeGaugesPerDenom.bind(this);
    this.upcomingGauges = this.upcomingGauges.bind(this);
    this.upcomingGaugesPerDenom = this.upcomingGaugesPerDenom.bind(this);
    this.rewardsEst = this.rewardsEst.bind(this);
    this.lockableDurations = this.lockableDurations.bind(this);
  }
  moduleToDistributeCoins(request: ModuleToDistributeCoinsRequest = {}): Promise<ModuleToDistributeCoinsResponse> {
    const data = ModuleToDistributeCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "ModuleToDistributeCoins", data);
    return promise.then(data => ModuleToDistributeCoinsResponse.decode(new _m0.Reader(data)));
  }
  gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse> {
    const data = GaugeByIDRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "GaugeByID", data);
    return promise.then(data => GaugeByIDResponse.decode(new _m0.Reader(data)));
  }
  gauges(request: GaugesRequest = {
    pagination: undefined
  }): Promise<GaugesResponse> {
    const data = GaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "Gauges", data);
    return promise.then(data => GaugesResponse.decode(new _m0.Reader(data)));
  }
  activeGauges(request: ActiveGaugesRequest = {
    pagination: undefined
  }): Promise<ActiveGaugesResponse> {
    const data = ActiveGaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "ActiveGauges", data);
    return promise.then(data => ActiveGaugesResponse.decode(new _m0.Reader(data)));
  }
  activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse> {
    const data = ActiveGaugesPerDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "ActiveGaugesPerDenom", data);
    return promise.then(data => ActiveGaugesPerDenomResponse.decode(new _m0.Reader(data)));
  }
  upcomingGauges(request: UpcomingGaugesRequest = {
    pagination: undefined
  }): Promise<UpcomingGaugesResponse> {
    const data = UpcomingGaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "UpcomingGauges", data);
    return promise.then(data => UpcomingGaugesResponse.decode(new _m0.Reader(data)));
  }
  upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse> {
    const data = UpcomingGaugesPerDenomRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "UpcomingGaugesPerDenom", data);
    return promise.then(data => UpcomingGaugesPerDenomResponse.decode(new _m0.Reader(data)));
  }
  rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse> {
    const data = RewardsEstRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "RewardsEst", data);
    return promise.then(data => RewardsEstResponse.decode(new _m0.Reader(data)));
  }
  lockableDurations(request: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponse> {
    const data = QueryLockableDurationsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Query", "LockableDurations", data);
    return promise.then(data => QueryLockableDurationsResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse> {
      return queryService.moduleToDistributeCoins(request);
    },
    gaugeByID(request: GaugeByIDRequest): Promise<GaugeByIDResponse> {
      return queryService.gaugeByID(request);
    },
    gauges(request?: GaugesRequest): Promise<GaugesResponse> {
      return queryService.gauges(request);
    },
    activeGauges(request?: ActiveGaugesRequest): Promise<ActiveGaugesResponse> {
      return queryService.activeGauges(request);
    },
    activeGaugesPerDenom(request: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse> {
      return queryService.activeGaugesPerDenom(request);
    },
    upcomingGauges(request?: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse> {
      return queryService.upcomingGauges(request);
    },
    upcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse> {
      return queryService.upcomingGaugesPerDenom(request);
    },
    rewardsEst(request: RewardsEstRequest): Promise<RewardsEstResponse> {
      return queryService.rewardsEst(request);
    },
    lockableDurations(request?: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse> {
      return queryService.lockableDurations(request);
    }
  };
};
export interface UseModuleToDistributeCoinsQuery<TData> extends ReactQueryParams<ModuleToDistributeCoinsResponse, TData> {
  request?: ModuleToDistributeCoinsRequest;
}
export interface UseGaugeByIDQuery<TData> extends ReactQueryParams<GaugeByIDResponse, TData> {
  request: GaugeByIDRequest;
}
export interface UseGaugesQuery<TData> extends ReactQueryParams<GaugesResponse, TData> {
  request?: GaugesRequest;
}
export interface UseActiveGaugesQuery<TData> extends ReactQueryParams<ActiveGaugesResponse, TData> {
  request?: ActiveGaugesRequest;
}
export interface UseActiveGaugesPerDenomQuery<TData> extends ReactQueryParams<ActiveGaugesPerDenomResponse, TData> {
  request: ActiveGaugesPerDenomRequest;
}
export interface UseUpcomingGaugesQuery<TData> extends ReactQueryParams<UpcomingGaugesResponse, TData> {
  request?: UpcomingGaugesRequest;
}
export interface UseUpcomingGaugesPerDenomQuery<TData> extends ReactQueryParams<UpcomingGaugesPerDenomResponse, TData> {
  request: UpcomingGaugesPerDenomRequest;
}
export interface UseRewardsEstQuery<TData> extends ReactQueryParams<RewardsEstResponse, TData> {
  request: RewardsEstRequest;
}
export interface UseLockableDurationsQuery<TData> extends ReactQueryParams<QueryLockableDurationsResponse, TData> {
  request?: QueryLockableDurationsRequest;
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
  const useModuleToDistributeCoins = <TData = ModuleToDistributeCoinsResponse,>({
    request,
    options
  }: UseModuleToDistributeCoinsQuery<TData>) => {
    return useQuery<ModuleToDistributeCoinsResponse, Error, TData>(["moduleToDistributeCoinsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.moduleToDistributeCoins(request);
    }, options);
  };
  const useGaugeByID = <TData = GaugeByIDResponse,>({
    request,
    options
  }: UseGaugeByIDQuery<TData>) => {
    return useQuery<GaugeByIDResponse, Error, TData>(["gaugeByIDQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.gaugeByID(request);
    }, options);
  };
  const useGauges = <TData = GaugesResponse,>({
    request,
    options
  }: UseGaugesQuery<TData>) => {
    return useQuery<GaugesResponse, Error, TData>(["gaugesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.gauges(request);
    }, options);
  };
  const useActiveGauges = <TData = ActiveGaugesResponse,>({
    request,
    options
  }: UseActiveGaugesQuery<TData>) => {
    return useQuery<ActiveGaugesResponse, Error, TData>(["activeGaugesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.activeGauges(request);
    }, options);
  };
  const useActiveGaugesPerDenom = <TData = ActiveGaugesPerDenomResponse,>({
    request,
    options
  }: UseActiveGaugesPerDenomQuery<TData>) => {
    return useQuery<ActiveGaugesPerDenomResponse, Error, TData>(["activeGaugesPerDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.activeGaugesPerDenom(request);
    }, options);
  };
  const useUpcomingGauges = <TData = UpcomingGaugesResponse,>({
    request,
    options
  }: UseUpcomingGaugesQuery<TData>) => {
    return useQuery<UpcomingGaugesResponse, Error, TData>(["upcomingGaugesQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.upcomingGauges(request);
    }, options);
  };
  const useUpcomingGaugesPerDenom = <TData = UpcomingGaugesPerDenomResponse,>({
    request,
    options
  }: UseUpcomingGaugesPerDenomQuery<TData>) => {
    return useQuery<UpcomingGaugesPerDenomResponse, Error, TData>(["upcomingGaugesPerDenomQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.upcomingGaugesPerDenom(request);
    }, options);
  };
  const useRewardsEst = <TData = RewardsEstResponse,>({
    request,
    options
  }: UseRewardsEstQuery<TData>) => {
    return useQuery<RewardsEstResponse, Error, TData>(["rewardsEstQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.rewardsEst(request);
    }, options);
  };
  const useLockableDurations = <TData = QueryLockableDurationsResponse,>({
    request,
    options
  }: UseLockableDurationsQuery<TData>) => {
    return useQuery<QueryLockableDurationsResponse, Error, TData>(["lockableDurationsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.lockableDurations(request);
    }, options);
  };
  return {
    /** ModuleToDistributeCoins returns coins that are going to be distributed */useModuleToDistributeCoins,
    /** GaugeByID returns gauges by their respective ID */useGaugeByID,
    /** Gauges returns both upcoming and active gauges */useGauges,
    /** ActiveGauges returns active gauges */useActiveGauges,
    /** ActiveGaugesPerDenom returns active gauges by denom */useActiveGaugesPerDenom,
    /** Returns scheduled gauges that have not yet occured */useUpcomingGauges,
    /**
     * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
     * by denom
     */
    useUpcomingGaugesPerDenom,
    /**
     * RewardsEst returns an estimate of the rewards from now until a specified
     * time in the future The querier either provides an address or a set of locks
     * for which they want to find the associated rewards
     */
    useRewardsEst,
    /**
     * LockableDurations returns lockable durations that are valid to distribute
     * incentives for
     */
    useLockableDurations
  };
};