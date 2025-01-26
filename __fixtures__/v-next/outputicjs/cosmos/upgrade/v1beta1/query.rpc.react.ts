import { buildUseQuery } from "../../../react-query";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
import { createGetCurrentPlan, createGetAppliedPlan, createGetUpgradedConsensusState, createGetModuleVersions, createGetAuthority } from "./query.rpc.func";
export const useGetCurrentPlan = buildUseQuery<QueryCurrentPlanRequest, QueryCurrentPlanResponse>({
  builderQueryFn: createGetCurrentPlan,
  queryKeyPrefix: "CurrentPlanQuery"
});
export const useGetAppliedPlan = buildUseQuery<QueryAppliedPlanRequest, QueryAppliedPlanResponse>({
  builderQueryFn: createGetAppliedPlan,
  queryKeyPrefix: "AppliedPlanQuery"
});
export const useGetUpgradedConsensusState = buildUseQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: createGetUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});
export const useGetModuleVersions = buildUseQuery<QueryModuleVersionsRequest, QueryModuleVersionsResponse>({
  builderQueryFn: createGetModuleVersions,
  queryKeyPrefix: "ModuleVersionsQuery"
});
export const useGetAuthority = buildUseQuery<QueryAuthorityRequest, QueryAuthorityResponse>({
  builderQueryFn: createGetAuthority,
  queryKeyPrefix: "AuthorityQuery"
});