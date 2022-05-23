import { Duration } from "../../../google/protobuf/duration";
import { DistrInfo, Params } from "./incentives";
import { Gauge } from "../../incentives/gauge";
import { LCDClient } from "@osmonauts/lcd";
import { QueryGaugeIdsRequest, QueryGaugeIdsResponse, QueryDistrInfoRequest, QueryDistrInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryLockableDurationsRequest, QueryLockableDurationsResponse, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponse, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesResponse } from "./query";
export class QueryClient extends LCDClient {
  constructor({
    restEndpoint
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

    const endpoint = `osmosis/pool-incentives/v1beta1/gauge-ids/${params.pool_id}`;
    return await this.request(endpoint, options);
  }

  /* DistrInfo */
  async distrInfo(params: QueryDistrInfoRequest): Promise<QueryDistrInfoResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/distr_info/`;
    return await this.request(endpoint);
  }

  /* Params */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/params/`;
    return await this.request(endpoint);
  }

  /* LockableDurations */
  async lockableDurations(params: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/lockable_durations/`;
    return await this.request(endpoint);
  }

  /* IncentivizedPools */
  async incentivizedPools(params: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/incentivized_pools/`;
    return await this.request(endpoint);
  }

  /* ExternalIncentiveGauges */
  async externalIncentiveGauges(params: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponse> {
    const endpoint = `osmosis/pool-incentives/v1beta1/external_incentive_gauges/`;
    return await this.request(endpoint);
  }

}