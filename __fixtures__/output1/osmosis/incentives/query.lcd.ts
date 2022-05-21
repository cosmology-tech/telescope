import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Gauge } from "./gauge";
import { Duration } from "../../google/protobuf/duration";
import { LCDClient } from "@osmonauts/lcd";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, ModuleDistributedCoinsRequest, ModuleDistributedCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
  }) {
    super({
      restEndpoint
    });
  }

  /* returns coins that is going to be distributed */
  async moduleToDistributeCoins(params: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse> {
    const endpoint = `osmosis/incentives/v1beta1/module_to_distribute_coins/`;
    return await this.request(endpoint);
  }

  /* returns coins that are distributed by module so far */
  async moduleDistributedCoins(params: ModuleDistributedCoinsRequest): Promise<ModuleDistributedCoinsResponse> {
    const endpoint = `osmosis/incentives/v1beta1/module_distributed_coins/`;
    return await this.request(endpoint);
  }

  /* returns Gauge by id */
  async gaugeByID(params: GaugeByIDRequest): Promise<GaugeByIDResponse> {
    const endpoint = `osmosis/incentives/v1beta1/gauge_by_id/${params.id}`;
    return await this.request(endpoint);
  }

  /* returns gauges both upcoming and active */
  async gauges(params: GaugesRequest): Promise<GaugesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `osmosis/incentives/v1beta1/gauges/`;
    return await this.request(endpoint, options);
  }

  /* returns active gauges */
  async activeGauges(params: ActiveGaugesRequest): Promise<ActiveGaugesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `osmosis/incentives/v1beta1/active_gauges/`;
    return await this.request(endpoint, options);
  }

  /* ActiveGaugesPerDenom */
  async activeGaugesPerDenom(params: ActiveGaugesPerDenomRequest): Promise<ActiveGaugesPerDenomResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.denom !== "undefined") {
      options.params.denom = params.denom;
    }

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `osmosis/incentives/v1beta1/active_gauges_per_denom/`;
    return await this.request(endpoint, options);
  }

  /* returns scheduled gauges */
  async upcomingGauges(params: UpcomingGaugesRequest): Promise<UpcomingGaugesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      options.params.pagination = params.pagination;
    }

    const endpoint = `osmosis/incentives/v1beta1/upcoming_gauges/`;
    return await this.request(endpoint, options);
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
    return await this.request(endpoint, options);
  }

  /* returns lockable durations that are valid to give incentives */
  async lockableDurations(params: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse> {
    const endpoint = `osmosis/incentives/v1beta1/lockable_durations/`;
    return await this.request(endpoint);
  }

}