import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoSDKType, Params, ParamsSDKType } from "./incentives";
import { Gauge, GaugeSDKType } from "../../incentives/gauge";
import * as fm from "../../../grpc-gateway";
import { QueryGaugeIdsRequest, QueryGaugeIdsRequestSDKType, QueryGaugeIdsResponse, QueryGaugeIdsResponseSDKType, QueryDistrInfoRequest, QueryDistrInfoRequestSDKType, QueryDistrInfoResponse, QueryDistrInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsRequestSDKType, QueryIncentivizedPoolsResponse, QueryIncentivizedPoolsResponseSDKType, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesRequestSDKType, QueryExternalIncentiveGaugesResponse, QueryExternalIncentiveGaugesResponseSDKType } from "./query";
export class Query {
  //GaugeIds takes the pool id and returns the matching gauge ids and durations
  static GaugeIds(request: QueryGaugeIdsRequest, initRequest?: fm.InitReq): Promise<QueryGaugeIdsResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/gauge-ids/${request["pool_id"]}?${fm.renderURLSearchParams({ ...request
    }, ["pool_id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  //DistrInfo returns the pool's matching gauge ids and weights.
  static DistrInfo(request: QueryDistrInfoRequest, initRequest?: fm.InitReq): Promise<QueryDistrInfoResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/distr_info?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  //Params returns pool incentives params.
  static Params(request: QueryParamsRequest, initRequest?: fm.InitReq): Promise<QueryParamsResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/params?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  //LockableDurations returns lock durations for pools.
  static LockableDurations(request: QueryLockableDurationsRequest, initRequest?: fm.InitReq): Promise<QueryLockableDurationsResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/lockable_durations?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  //IncentivizedPools returns currently incentivized pools
  static IncentivizedPools(request: QueryIncentivizedPoolsRequest, initRequest?: fm.InitReq): Promise<QueryIncentivizedPoolsResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/incentivized_pools?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  //ExternalIncentiveGauges returns external incentive gauges.
  static ExternalIncentiveGauges(request: QueryExternalIncentiveGaugesRequest, initRequest?: fm.InitReq): Promise<QueryExternalIncentiveGaugesResponse> {
    return fm.fetchReq(`/osmosis/pool-incentives/v1beta1/external_incentive_gauges?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}