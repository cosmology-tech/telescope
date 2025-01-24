import { buildUseVueQuery } from "../../../vue-query";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
import { createGetCurrentPlan, createGetAppliedPlan, createGetUpgradedConsensusState, createGetModuleVersions, createGetAuthority } from "./query.rpc.func.ts";
export const useGetCurrentPlan = buildUseVueQuery<QueryCurrentPlanRequest, QueryCurrentPlanResponse>({
  builderQueryFn: createGetCurrentPlan,
  queryKeyPrefix: "CurrentPlanQuery"
});
export const useGetAppliedPlan = buildUseVueQuery<QueryAppliedPlanRequest, QueryAppliedPlanResponse>({
  builderQueryFn: createGetAppliedPlan,
  queryKeyPrefix: "AppliedPlanQuery"
});
export const useGetUpgradedConsensusState = buildUseVueQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: createGetUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});
export const useGetModuleVersions = buildUseVueQuery<QueryModuleVersionsRequest, QueryModuleVersionsResponse>({
  builderQueryFn: createGetModuleVersions,
  queryKeyPrefix: "ModuleVersionsQuery"
});
export const useGetAuthority = buildUseVueQuery<QueryAuthorityRequest, QueryAuthorityResponse>({
  builderQueryFn: createGetAuthority,
  queryKeyPrefix: "AuthorityQuery"
});