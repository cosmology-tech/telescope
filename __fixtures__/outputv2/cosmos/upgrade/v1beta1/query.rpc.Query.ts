import { Plan, PlanSDKType, ModuleVersion, ModuleVersionSDKType } from "./upgrade";
import * as fm from "../../../grpc-gateway";
import { QueryCurrentPlanRequest, QueryCurrentPlanRequestSDKType, QueryCurrentPlanResponse, QueryCurrentPlanResponseSDKType, QueryAppliedPlanRequest, QueryAppliedPlanRequestSDKType, QueryAppliedPlanResponse, QueryAppliedPlanResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType, QueryModuleVersionsRequest, QueryModuleVersionsRequestSDKType, QueryModuleVersionsResponse, QueryModuleVersionsResponseSDKType, QueryAuthorityRequest, QueryAuthorityRequestSDKType, QueryAuthorityResponse, QueryAuthorityResponseSDKType } from "./query";
export class Query {
  static CurrentPlan(request: QueryCurrentPlanRequest, initRequest?: fm.InitReq): Promise<QueryCurrentPlanResponse> {
    return fm.fetchReq(`/cosmos/upgrade/v1beta1/current_plan?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static AppliedPlan(request: QueryAppliedPlanRequest, initRequest?: fm.InitReq): Promise<QueryAppliedPlanResponse> {
    return fm.fetchReq(`/cosmos/upgrade/v1beta1/applied_plan/${request["name"]}?${fm.renderURLSearchParams(request, ["name"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest, initRequest?: fm.InitReq): Promise<QueryUpgradedConsensusStateResponse> {
    return fm.fetchReq(`/cosmos/upgrade/v1beta1/upgraded_consensus_state/${request["last_height"]}?${fm.renderURLSearchParams(request, ["last_height"])}`, { ...initRequest,
      method: "GET"
    });
  }

  static ModuleVersions(request: QueryModuleVersionsRequest, initRequest?: fm.InitReq): Promise<QueryModuleVersionsResponse> {
    return fm.fetchReq(`/cosmos/upgrade/v1beta1/module_versions?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

  static Authority(request: QueryAuthorityRequest, initRequest?: fm.InitReq): Promise<QueryAuthorityResponse> {
    return fm.fetchReq(`/cosmos/upgrade/v1beta1/authority?${fm.renderURLSearchParams(request, [])}`, { ...initRequest,
      method: "GET"
    });
  }

}