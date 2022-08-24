import { Duration } from "../../../google/protobuf/duration";
import { DistrInfo, Params } from "./incentives";
import { Gauge } from "../../incentives/gauge";
import { LCDClient } from "@osmonauts/lcd";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
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

  /* GaugeIds takes the pool id and returns the matching gauge ids and durations */
  async gaugeIds(params: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.poolId !== "undefined") {
      options.params.pool_id = params.poolId;
    }

    const endpoint = `osmosis/pool-incentives/v1beta1/gauge-ids/${params.poolId}`;
    return await this.request<QueryGaugeIdsResponse>(endpoint, options);
  }

  /* DistrInfo */
  async distrInfo(_params: QueryDistrInfoRequest = {}): Promise<QueryDistrInfoResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/distr_info`;
    return await this.request<QueryDistrInfoResponse>(endpoint);
  }

  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/params`;
    return await this.request<QueryParamsResponse>(endpoint);
  }

  /* LockableDurations */
  async lockableDurations(_params: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/lockable_durations`;
    return await this.request<QueryLockableDurationsResponse>(endpoint);
  }

  /* IncentivizedPools */
  async incentivizedPools(_params: QueryIncentivizedPoolsRequest = {}): Promise<QueryIncentivizedPoolsResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/incentivized_pools`;
    return await this.request<QueryIncentivizedPoolsResponse>(endpoint);
  }

  /* ExternalIncentiveGauges */
  async externalIncentiveGauges(_params: QueryExternalIncentiveGaugesRequest = {}): Promise<QueryExternalIncentiveGaugesResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/external_incentive_gauges`;
    return await this.request<QueryExternalIncentiveGaugesResponse>(endpoint);
  }

}