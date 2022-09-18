import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoSDKType, Params, ParamsSDKType } from "./incentives";
import { Gauge, GaugeSDKType } from "../../incentives/gauge";
import { LCDClient } from "@osmonauts/lcd";
import { QueryGaugeIdsRequest, QueryGaugeIdsRequestSDKType, QueryGaugeIdsResponse, QueryGaugeIdsResponseSDKType, QueryDistrInfoRequest, QueryDistrInfoRequestSDKType, QueryDistrInfoResponse, QueryDistrInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsRequestSDKType, QueryIncentivizedPoolsResponse, QueryIncentivizedPoolsResponseSDKType, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesRequestSDKType, QueryExternalIncentiveGaugesResponse, QueryExternalIncentiveGaugesResponseSDKType } from "./query";
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
  async gaugeIds(params: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponseSDKType> {
    const endpoint = `osmosis/pool-incentives/v1beta1/gauge-ids/${params.poolId}`;
    return await this.get<QueryGaugeIdsResponseSDKType>(endpoint);
  }

  /* DistrInfo */
  async distrInfo(_params: QueryDistrInfoRequest = {}): Promise<QueryDistrInfoResponseSDKType> {
    const endpoint = `osmosis/pool-incentives/v1beta1/distr_info`;
    return await this.get<QueryDistrInfoResponseSDKType>(endpoint);
  }

  /* Params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `osmosis/pool-incentives/v1beta1/params`;
    return await this.get<QueryParamsResponseSDKType>(endpoint);
  }

  /* LockableDurations */
  async lockableDurations(_params: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponseSDKType> {
    const endpoint = `osmosis/pool-incentives/v1beta1/lockable_durations`;
    return await this.get<QueryLockableDurationsResponseSDKType>(endpoint);
  }

  /* IncentivizedPools */
  async incentivizedPools(_params: QueryIncentivizedPoolsRequest = {}): Promise<QueryIncentivizedPoolsResponseSDKType> {
    const endpoint = `osmosis/pool-incentives/v1beta1/incentivized_pools`;
    return await this.get<QueryIncentivizedPoolsResponseSDKType>(endpoint);
  }

  /* ExternalIncentiveGauges */
  async externalIncentiveGauges(_params: QueryExternalIncentiveGaugesRequest = {}): Promise<QueryExternalIncentiveGaugesResponseSDKType> {
    const endpoint = `osmosis/pool-incentives/v1beta1/external_incentive_gauges`;
    return await this.get<QueryExternalIncentiveGaugesResponseSDKType>(endpoint);
  }

}