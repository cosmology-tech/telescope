import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, ModuleDistributedCoinsRequest, ModuleDistributedCoinsResponse, GaugeByIDRequest, GaugeByIDResponse, GaugesRequest, GaugesResponse, ActiveGaugesRequest, ActiveGaugesResponse, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomResponse, UpcomingGaugesRequest, UpcomingGaugesResponse, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomResponse, RewardsEstRequest, RewardsEstResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.moduleToDistributeCoins = this.moduleToDistributeCoins.bind(this);
    this.moduleDistributedCoins = this.moduleDistributedCoins.bind(this);
    this.gaugeByID = this.gaugeByID.bind(this);
    this.gauges = this.gauges.bind(this);
    this.activeGauges = this.activeGauges.bind(this);
    this.activeGaugesPerDenom = this.activeGaugesPerDenom.bind(this);
    this.upcomingGauges = this.upcomingGauges.bind(this);
    this.upcomingGaugesPerDenom = this.upcomingGaugesPerDenom.bind(this);
    this.rewardsEst = this.rewardsEst.bind(this);
    this.lockableDurations = this.lockableDurations.bind(this);
  }
  /* ModuleToDistributeCoins returns coins that are going to be distributed */


  async moduleToDistributeCoins(_params: ModuleToDistributeCoinsRequest = {}): Promise<ModuleToDistributeCoinsResponse> {
    const endpoint = `osmosis/incentives/v1beta1/module_to_distribute_coins`;
    return await this.req.get<ModuleToDistributeCoinsResponse>(endpoint);
  }
  /* ModuleDistributedCoins returns coins that are distributed by the module so
   far */


  async moduleDistributedCoins(_params: ModuleDistributedCoinsRequest = {}): Promise<ModuleDistributedCoinsResponse> {
    const endpoint = `osmosis/incentives/v1beta1/module_distributed_coins`;
    return await this.req.get<ModuleDistributedCoinsResponse>(endpoint);
  }
  /* GaugeByID returns gauges by their respective ID */


  async gaugeByID(params: GaugeByIDRequest): Promise<GaugeByIDResponse> {
    const endpoint = `osmosis/incentives/v1beta1/gauge_by_id/${params.id}`;
    return await this.req.get<GaugeByIDResponse>(endpoint);
  }
  /* Gauges returns both upcoming and active gauges */


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
    return await this.req.get<GaugesResponse>(endpoint, options);
  }
  /* ActiveGauges returns active gauges */


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
    return await this.req.get<ActiveGaugesResponse>(endpoint, options);
  }
  /* ActiveGaugesPerDenom returns active gauges by denom */


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
    return await this.req.get<ActiveGaugesPerDenomResponse>(endpoint, options);
  }
  /* Returns scheduled gauges that have not yet occured */


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
    return await this.req.get<UpcomingGaugesResponse>(endpoint, options);
  }
  /* UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
   by denom */


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
    return await this.req.get<UpcomingGaugesPerDenomResponse>(endpoint, options);
  }
  /* RewardsEst returns an estimate of the rewards from now until a specified
   time in the future The querier either provides an address or a set of locks
   for which they want to find the associated rewards */


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
    return await this.req.get<RewardsEstResponse>(endpoint, options);
  }
  /* LockableDurations returns lockable durations that are valid to distribute
   incentives for */


  async lockableDurations(_params: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponse> {
    const endpoint = `osmosis/incentives/v1beta1/lockable_durations`;
    return await this.req.get<QueryLockableDurationsResponse>(endpoint);
  }

}