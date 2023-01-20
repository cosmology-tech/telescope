import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../cosmos/base/v1beta1/coin";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import * as fm from "../../grpc-gateway";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsRequestSDKType, ModuleToDistributeCoinsResponse, ModuleToDistributeCoinsResponseSDKType, GaugeByIDRequest, GaugeByIDRequestSDKType, GaugeByIDResponse, GaugeByIDResponseSDKType, GaugesRequest, GaugesRequestSDKType, GaugesResponse, GaugesResponseSDKType, ActiveGaugesRequest, ActiveGaugesRequestSDKType, ActiveGaugesResponse, ActiveGaugesResponseSDKType, ActiveGaugesPerDenomRequest, ActiveGaugesPerDenomRequestSDKType, ActiveGaugesPerDenomResponse, ActiveGaugesPerDenomResponseSDKType, UpcomingGaugesRequest, UpcomingGaugesRequestSDKType, UpcomingGaugesResponse, UpcomingGaugesResponseSDKType, UpcomingGaugesPerDenomRequest, UpcomingGaugesPerDenomRequestSDKType, UpcomingGaugesPerDenomResponse, UpcomingGaugesPerDenomResponseSDKType, RewardsEstRequest, RewardsEstRequestSDKType, RewardsEstResponse, RewardsEstResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType } from "./query";
export class Query {
  static ModuleToDistributeCoins(request: ModuleToDistributeCoinsRequest, initRequest?: fm.InitReq): Promise<ModuleToDistributeCoinsResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/module_to_distribute_coins?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static GaugeByID(request: GaugeByIDRequest, initRequest?: fm.InitReq): Promise<GaugeByIDResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/gauge_by_id/${request["id"]}?${fm.renderURLSearchParams(request, ["id"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Gauges(request: GaugesRequest, initRequest?: fm.InitReq): Promise<GaugesResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/gauges?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ActiveGauges(request: ActiveGaugesRequest, initRequest?: fm.InitReq): Promise<ActiveGaugesResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/active_gauges?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ActiveGaugesPerDenom(request: ActiveGaugesPerDenomRequest, initRequest?: fm.InitReq): Promise<ActiveGaugesPerDenomResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/active_gauges_per_denom?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static UpcomingGauges(request: UpcomingGaugesRequest, initRequest?: fm.InitReq): Promise<UpcomingGaugesResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/upcoming_gauges?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static UpcomingGaugesPerDenom(request: UpcomingGaugesPerDenomRequest, initRequest?: fm.InitReq): Promise<UpcomingGaugesPerDenomResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/upcoming_gauges_per_denom?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static RewardsEst(request: RewardsEstRequest, initRequest?: fm.InitReq): Promise<RewardsEstResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/rewards_est/${request["owner"]}?${fm.renderURLSearchParams(request, ["owner"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static LockableDurations(request: QueryLockableDurationsRequest, initRequest?: fm.InitReq): Promise<QueryLockableDurationsResponse> {
    return fm.fetchReq(`/osmosis/incentives/v1beta1/lockable_durations?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}