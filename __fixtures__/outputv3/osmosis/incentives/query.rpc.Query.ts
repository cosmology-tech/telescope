import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as fm from "../../grpc-gateway";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsRequestSDKType, ModuleToDistributeCoinsResponse, ModuleToDistributeCoinsResponseSDKType, GaugeByIDRequest, GaugeByIDRequestSDKType, GaugeByIDResponse, GaugeByIDResponseSDKType, GaugesRequest, GaugesRequestSDKType, GaugesResponse, GaugesResponseSDKType, ActiveGaugesRequest, ActiveGaugesRequestSDKType, ActiveGaugesResponse, ActiveGaugesResponseSDKType, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomRequestSDKType, ActiveGaugesPerDenomResponse, ActiveGaugesPerDenomResponseSDKType, UpcomingGaugesRequest, UpcomingGaugesRequestSDKType, UpcomingGaugesResponse, UpcomingGaugesResponseSDKType, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomRequestSDKType, UpcomingGaugesPerDenomResponse, UpcomingGaugesPerDenomResponseSDKType, RewardsEstRequest, RewardsEstRequestSDKType, RewardsEstResponse, RewardsEstResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType } from "./query";
export class Query {
  //ModuleToDistributeCoins returns coins that are going to be distributed
  static ModuleToDistributeCoins(request: ModuleToDistributeCoinsRequest, initRequest?: fm.InitReq): Promise<ModuleToDistributeCoinsResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/module_to_distribute_coins?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  //GaugeByID returns gauges by their respective ID
  static GaugeByID(request: GaugeByIDRequest, initRequest?: fm.InitReq): Promise<GaugeByIDResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/gauge_by_id/${request["id"]}?${fm.renderURLSearchParams({ ...request
    }, ["id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  //Gauges returns both upcoming and active gauges
  static Gauges(request: GaugesRequest, initRequest?: fm.InitReq): Promise<GaugesResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/gauges?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  //ActiveGauges returns active gauges
  static ActiveGauges(request: ActiveGaugesRequest, initRequest?: fm.InitReq): Promise<ActiveGaugesResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/active_gauges?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  //ActiveGaugesPerDenom returns active gauges by denom
  static ActiveGaugesPerDenom(request: ActiveGaugesPerDenomRequest, initRequest?: fm.InitReq): Promise<ActiveGaugesPerDenomResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/active_gauges_per_denom?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  //Returns scheduled gauges that have not yet occured
  static UpcomingGauges(request: UpcomingGaugesRequest, initRequest?: fm.InitReq): Promise<UpcomingGaugesResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/upcoming_gauges?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  //UpcomingGaugesPerDenom returns scheduled gauges that have not yet occured
 by denom
  static UpcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest, initRequest?: fm.InitReq): Promise<UpcomingGaugesPerDenomResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/upcoming_gauges_per_denom?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  //RewardsEst returns an estimate of the rewards from now until a specified
 time in the future The querier either provides an address or a set of locks
 for which they want to find the associated rewards
  static RewardsEst(request: RewardsEstRequest, initRequest?: fm.InitReq): Promise<RewardsEstResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/rewards_est/${request["owner"]}?${fm.renderURLSearchParams({ ...request
    }, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  //LockableDurations returns lockable durations that are valid to distribute
 incentives for
  static LockableDurations(request: QueryLockableDurationsRequest, initRequest?: fm.InitReq): Promise<QueryLockableDurationsResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/lockable_durations?${fm.renderURLSearchParams({ ...request
    }, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}