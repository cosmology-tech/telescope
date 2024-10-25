import { Plan, PlanSDKType, ModuleVersion, ModuleVersionSDKType } from "./upgrade";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryCurrentPlanRequest, QueryCurrentPlanRequestSDKType, QueryCurrentPlanResponse, QueryCurrentPlanResponseSDKType, QueryAppliedPlanRequest, QueryAppliedPlanRequestSDKType, QueryAppliedPlanResponse, QueryAppliedPlanResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType, QueryModuleVersionsRequest, QueryModuleVersionsRequestSDKType, QueryModuleVersionsResponse, QueryModuleVersionsResponseSDKType, QueryAuthorityRequest, QueryAuthorityRequestSDKType, QueryAuthorityResponse, QueryAuthorityResponseSDKType } from "./query";
export const createGetCurrentPlan = (getRpcInstance: RpcResolver) => buildQuery<QueryCurrentPlanRequest, QueryCurrentPlanResponse>({
  encode: QueryCurrentPlanRequest.encode,
  decode: QueryCurrentPlanResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "CurrentPlan",
  getRpcInstance: getRpcInstance
});
export const useGetCurrentPlan = buildUseQuery<QueryCurrentPlanRequest, QueryCurrentPlanResponse>({
  builderQueryFn: createGetCurrentPlan,
  queryKeyPrefix: "CurrentPlanQuery"
});
export const createGetAppliedPlan = (getRpcInstance: RpcResolver) => buildQuery<QueryAppliedPlanRequest, QueryAppliedPlanResponse>({
  encode: QueryAppliedPlanRequest.encode,
  decode: QueryAppliedPlanResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "AppliedPlan",
  getRpcInstance: getRpcInstance
});
export const useGetAppliedPlan = buildUseQuery<QueryAppliedPlanRequest, QueryAppliedPlanResponse>({
  builderQueryFn: createGetAppliedPlan,
  queryKeyPrefix: "AppliedPlanQuery"
});
export const createGetUpgradedConsensusState = (getRpcInstance: RpcResolver) => buildQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  encode: QueryUpgradedConsensusStateRequest.encode,
  decode: QueryUpgradedConsensusStateResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "UpgradedConsensusState",
  getRpcInstance: getRpcInstance
});
export const useGetUpgradedConsensusState = buildUseQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: createGetUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});
export const createGetModuleVersions = (getRpcInstance: RpcResolver) => buildQuery<QueryModuleVersionsRequest, QueryModuleVersionsResponse>({
  encode: QueryModuleVersionsRequest.encode,
  decode: QueryModuleVersionsResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "ModuleVersions",
  getRpcInstance: getRpcInstance
});
export const useGetModuleVersions = buildUseQuery<QueryModuleVersionsRequest, QueryModuleVersionsResponse>({
  builderQueryFn: createGetModuleVersions,
  queryKeyPrefix: "ModuleVersionsQuery"
});
export const createGetAuthority = (getRpcInstance: RpcResolver) => buildQuery<QueryAuthorityRequest, QueryAuthorityResponse>({
  encode: QueryAuthorityRequest.encode,
  decode: QueryAuthorityResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "Authority",
  getRpcInstance: getRpcInstance
});
export const useGetAuthority = buildUseQuery<QueryAuthorityRequest, QueryAuthorityResponse>({
  builderQueryFn: createGetAuthority,
  queryKeyPrefix: "AuthorityQuery"
});