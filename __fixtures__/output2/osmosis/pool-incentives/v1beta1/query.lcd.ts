import { LCDClient } from "@osmonauts/lcd";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.gaugeIds = this.gaugeIds.bind(this);
    this.distrInfo = this.distrInfo.bind(this);
    this.params = this.params.bind(this);
    this.lockableDurations = this.lockableDurations.bind(this);
    this.incentivizedPools = this.incentivizedPools.bind(this);
    this.externalIncentiveGauges = this.externalIncentiveGauges.bind(this);
  }
  /* GaugeIds takes the pool id and returns the matching gauge ids and durations */


  async gaugeIds(params: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/gauge-ids/${params.poolId}`;
    return await this.req.get<QueryGaugeIdsResponse>(endpoint);
  }
  /* DistrInfo returns the pool's matching gauge ids and weights. */


  async distrInfo(_params: QueryDistrInfoRequest = {}): Promise<QueryDistrInfoResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/distr_info`;
    return await this.req.get<QueryDistrInfoResponse>(endpoint);
  }
  /* Params returns pool incentives params. */


  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/params`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  }
  /* LockableDurations returns lock durations for pools. */


  async lockableDurations(_params: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/lockable_durations`;
    return await this.req.get<QueryLockableDurationsResponse>(endpoint);
  }
  /* IncentivizedPools returns currently incentivized pools */


  async incentivizedPools(_params: QueryIncentivizedPoolsRequest = {}): Promise<QueryIncentivizedPoolsResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/incentivized_pools`;
    return await this.req.get<QueryIncentivizedPoolsResponse>(endpoint);
  }
  /* ExternalIncentiveGauges returns external incentive gauges. */


  async externalIncentiveGauges(_params: QueryExternalIncentiveGaugesRequest = {}): Promise<QueryExternalIncentiveGaugesResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/external_incentive_gauges`;
    return await this.req.get<QueryExternalIncentiveGaugesResponse>(endpoint);
  }

}