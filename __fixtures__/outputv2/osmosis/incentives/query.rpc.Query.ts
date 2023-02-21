import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../helpers";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsRequestSDKType, ModuleToDistributeCoinsResponse, ModuleToDistributeCoinsResponseSDKType, GaugeByIDRequest, GaugeByIDRequestSDKType, GaugeByIDResponse, GaugeByIDResponseSDKType, GaugesRequest, GaugesRequestSDKType, GaugesResponse, GaugesResponseSDKType, ActiveGaugesRequest, ActiveGaugesRequestSDKType, ActiveGaugesResponse, ActiveGaugesResponseSDKType, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomRequestSDKType, ActiveGaugesPerDenomResponse, ActiveGaugesPerDenomResponseSDKType, UpcomingGaugesRequest, UpcomingGaugesRequestSDKType, UpcomingGaugesResponse, UpcomingGaugesResponseSDKType, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomRequestSDKType, UpcomingGaugesPerDenomResponse, UpcomingGaugesPerDenomResponseSDKType, RewardsEstRequest, RewardsEstRequestSDKType, RewardsEstResponse, RewardsEstResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType } from "./query";

/** Query defines the gRPC querier service */
export interface Query {
  /** ModuleToDistributeCoins returns coins that are going to be distributed */
  moduleToDistributeCoins(request?: DeepPartial<ModuleToDistributeCoinsRequest>, metadata?: grpc.Metadata): Promise<ModuleToDistributeCoinsResponse>;

  /** GaugeByID returns gauges by their respective ID */
  gaugeByID(request: DeepPartial<GaugeByIDRequest>, metadata?: grpc.Metadata): Promise<GaugeByIDResponse>;

  /** Gauges returns both upcoming and active gauges */
  gauges(request?: DeepPartial<GaugesRequest>, metadata?: grpc.Metadata): Promise<GaugesResponse>;

  /** ActiveGauges returns active gauges */
  activeGauges(request?: DeepPartial<ActiveGaugesRequest>, metadata?: grpc.Metadata): Promise<ActiveGaugesResponse>;

  /** ActiveGaugesPerDenom returns active gauges by denom */
  activeGaugesPerDenom(request: DeepPartial<ActiveGaugesPerDenomRequest>, metadata?: grpc.Metadata): Promise<ActiveGaugesPerDenomResponse>;

  /** Returns scheduled gauges that have not yet occured */
  upcomingGauges(request?: DeepPartial<UpcomingGaugesRequest>, metadata?: grpc.Metadata): Promise<UpcomingGaugesResponse>;

  /**
   * UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
   * by denom
   */
  upcomingGaugesPerDenom(request: DeepPartial<UpcomingGaugesPerDenomRequest>, metadata?: grpc.Metadata): Promise<UpcomingGaugesPerDenomResponse>;

  /**
   * RewardsEst returns an estimate of the rewards from now until a specified
   * time in the future The querier either provides an address or a set of locks
   * for which they want to find the associated rewards
   */
  rewardsEst(request: DeepPartial<RewardsEstRequest>, metadata?: grpc.Metadata): Promise<RewardsEstResponse>;

  /**
   * LockableDurations returns lockable durations that are valid to distribute
   * incentives for
   */
  lockableDurations(request?: DeepPartial<QueryLockableDurationsRequest>, metadata?: grpc.Metadata): Promise<QueryLockableDurationsResponse>;
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

  moduleToDistributeCoins(request: DeepPartial<ModuleToDistributeCoinsRequest> = {}, metadata?: grpc.Metadata): Promise<ModuleToDistributeCoinsResponse> {
    return this.rpc.unary(ModuleToDistributeCoinsDesc, ModuleToDistributeCoinsRequest.fromPartial(request), metadata);
  }

  gaugeByID(request: DeepPartial<GaugeByIDRequest>, metadata?: grpc.Metadata): Promise<GaugeByIDResponse> {
    return this.rpc.unary(GaugeByIDDesc, GaugeByIDRequest.fromPartial(request), metadata);
  }

  gauges(request: DeepPartial<GaugesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<GaugesResponse> {
    return this.rpc.unary(GaugesDesc, GaugesRequest.fromPartial(request), metadata);
  }

  activeGauges(request: DeepPartial<ActiveGaugesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<ActiveGaugesResponse> {
    return this.rpc.unary(ActiveGaugesDesc, ActiveGaugesRequest.fromPartial(request), metadata);
  }

  activeGaugesPerDenom(request: DeepPartial<ActiveGaugesPerDenomRequest>, metadata?: grpc.Metadata): Promise<ActiveGaugesPerDenomResponse> {
    return this.rpc.unary(ActiveGaugesPerDenomDesc, ActiveGaugesPerDenomRequest.fromPartial(request), metadata);
  }

  upcomingGauges(request: DeepPartial<UpcomingGaugesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<UpcomingGaugesResponse> {
    return this.rpc.unary(UpcomingGaugesDesc, UpcomingGaugesRequest.fromPartial(request), metadata);
  }

  upcomingGaugesPerDenom(request: DeepPartial<UpcomingGaugesPerDenomRequest>, metadata?: grpc.Metadata): Promise<UpcomingGaugesPerDenomResponse> {
    return this.rpc.unary(UpcomingGaugesPerDenomDesc, UpcomingGaugesPerDenomRequest.fromPartial(request), metadata);
  }

  rewardsEst(request: DeepPartial<RewardsEstRequest>, metadata?: grpc.Metadata): Promise<RewardsEstResponse> {
    return this.rpc.unary(RewardsEstDesc, RewardsEstRequest.fromPartial(request), metadata);
  }

  lockableDurations(request: DeepPartial<QueryLockableDurationsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryLockableDurationsResponse> {
    return this.rpc.unary(QueryLockableDurationsDesc, QueryLockableDurationsRequest.fromPartial(request), metadata);
  }

}