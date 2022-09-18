import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { setPaginationParams } from "@osmonauts/helpers";
import { LCDClient } from "@osmonauts/lcd";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsRequestSDKType, ModuleToDistributeCoinsResponse, ModuleToDistributeCoinsResponseSDKType, ModuleDistributedCoinsRequest, ModuleDistributedCoinsRequestSDKType, ModuleDistributedCoinsResponse, ModuleDistributedCoinsResponseSDKType, GaugeByIDRequest, GaugeByIDRequestSDKType, GaugeByIDResponse, GaugeByIDResponseSDKType, GaugesRequest, GaugesRequestSDKType, GaugesResponse, GaugesResponseSDKType, ActiveGaugesRequest, ActiveGaugesRequestSDKType, ActiveGaugesResponse, ActiveGaugesResponseSDKType, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomRequestSDKType, ActiveGaugesPerDenomResponse, ActiveGaugesPerDenomResponseSDKType, UpcomingGaugesRequest, UpcomingGaugesRequestSDKType, UpcomingGaugesResponse, UpcomingGaugesResponseSDKType, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomRequestSDKType, UpcomingGaugesPerDenomResponse, UpcomingGaugesPerDenomResponseSDKType, RewardsEstRequest, RewardsEstRequestSDKType, RewardsEstResponse, RewardsEstResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType } from "./query";
export class LCDQueryClient extends LCDClient {
  constructor({
    restEndpoint
  }: {
    restEndpoint: string;
  }) {
    super({
      restEndpoint
    });
  }

  /* returns coins that is going to be distributed */
  async moduleToDistributeCoins(_params: ModuleToDistributeCoinsRequest = {}): Promise<ModuleToDistributeCoinsResponse> {
    const endpoint = `osmosis/incentives/v1beta1/module_to_distribute_coins`;
    return await this.get<ModuleToDistributeCoinsResponseSDKType>(endpoint);
  }

  /* returns coins that are distributed by module so far */
  async moduleDistributedCoins(_params: ModuleDistributedCoinsRequest = {}): Promise<ModuleDistributedCoinsResponse> {
    const endpoint = `osmosis/incentives/v1beta1/module_distributed_coins`;
    return await this.get<ModuleDistributedCoinsResponseSDKType>(endpoint);
  }

  /* returns Gauge by id */
  async gaugeByID(params: GaugeByIDRequest): Promise<GaugeByIDResponse> {
    const endpoint = `osmosis/incentives/v1beta1/gauge_by_id/${params.id}`;
    return await this.get<GaugeByIDResponseSDKType>(endpoint);
  }

  /* returns gauges both upcoming and active */
  async gauges(params: GaugesRequest = {
    pagination: undefined
  }): Promise<GaugesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `osmosis/incentives/v1beta1/gauges`;
    return await this.get<GaugesResponseSDKType>(endpoint, options);
  }

  /* returns active gauges */
  async activeGauges(params: ActiveGaugesRequest = {
    pagination: undefined
  }): Promise<ActiveGaugesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `osmosis/incentives/v1beta1/active_gauges`;
    return await this.get<ActiveGaugesResponseSDKType>(endpoint, options);
  }

  /* returns active gauges per denom */
  async activeGaugesPerDenom(params: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `osmosis/incentives/v1beta1/active_gauges_per_denom`;
    return await this.get<ActiveGaugesPerDenomResponseSDKType>(endpoint, options);
  }

  /* returns scheduled gauges */
  async upcomingGauges(params: UpcomingGaugesRequest = {
    pagination: undefined
  }): Promise<UpcomingGaugesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `osmosis/incentives/v1beta1/upcoming_gauges`;
    return await this.get<UpcomingGaugesResponseSDKType>(endpoint, options);
  }

  /* returns scheduled gauges per denom */
  async upcomingGaugesPerDenom(params: UpcomingGaugesPerDenomRequest): Promise<UpcomingGaugesPerDenomResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `osmosis/incentives/v1beta1/upcoming_gauges_per_denom`;
    return await this.get<UpcomingGaugesPerDenomResponseSDKType>(endpoint, options);
  }

  /* RewardsEst returns an estimate of the rewards at a future specific time.
  The querier either provides an address or a set of locks
  for which they want to find the associated rewards. */
  async rewardsEst(params: RewardsEstRequest): Promise<RewardsEstResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.lockIds !== "undefined") {
      options.params.lock_ids = params.lockIds;
    }

    if (typeof params?.endEpoch !== "undefined") {
      options.params.end_epoch = params.endEpoch;
    }

    const endpoint = `osmosis/incentives/v1beta1/rewards_est/${params.owner}`;
    return await this.get<RewardsEstResponseSDKType>(endpoint, options);
  }

  /* returns lockable durations that are valid to give incentives */
  async lockableDurations(_params: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponse> {
    const endpoint = `osmosis/incentives/v1beta1/lockable_durations`;
    return await this.get<QueryLockableDurationsResponseSDKType>(endpoint);
  }

}