import { Plan, PlanSDKType, ModuleVersion, ModuleVersionSDKType } from "./upgrade";
import { SigningClientResolver } from "../../../helper-func-types";
import { QueryCurrentPlanRequest, QueryCurrentPlanRequestSDKType, QueryCurrentPlanResponse, QueryCurrentPlanResponseSDKType, QueryAppliedPlanRequest, QueryAppliedPlanRequestSDKType, QueryAppliedPlanResponse, QueryAppliedPlanResponseSDKType, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateRequestSDKType, QueryUpgradedConsensusStateResponse, QueryUpgradedConsensusStateResponseSDKType, QueryModuleVersionsRequest, QueryModuleVersionsRequestSDKType, QueryModuleVersionsResponse, QueryModuleVersionsResponseSDKType, QueryAuthorityRequest, QueryAuthorityRequestSDKType, QueryAuthorityResponse, QueryAuthorityResponseSDKType } from "./query";
export const createGetCurrentPlan = (getRpcInstance: SigningClientResolver) => buildQuery<QueryCurrentPlanRequest, QueryCurrentPlanResponse>({
  encoder: QueryCurrentPlanRequest.encode,
  decoder: QueryCurrentPlanResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "CurrentPlan",
  getRpcInstance: getRpcInstance
});
export const useGetCurrentPlan = buildUseQuery<QueryCurrentPlanRequest, QueryCurrentPlanResponse>({
  builderQueryFn: createGetCurrentPlan,
  queryKeyPrefix: "CurrentPlanQuery"
});
export const createGetAppliedPlan = (getRpcInstance: SigningClientResolver) => buildQuery<QueryAppliedPlanRequest, QueryAppliedPlanResponse>({
  encoder: QueryAppliedPlanRequest.encode,
  decoder: QueryAppliedPlanResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AppliedPlan",
  getRpcInstance: getRpcInstance
});
export const useGetAppliedPlan = buildUseQuery<QueryAppliedPlanRequest, QueryAppliedPlanResponse>({
  builderQueryFn: createGetAppliedPlan,
  queryKeyPrefix: "AppliedPlanQuery"
});
export const createGetUpgradedConsensusState = (getRpcInstance: SigningClientResolver) => buildQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  encoder: QueryUpgradedConsensusStateRequest.encode,
  decoder: QueryUpgradedConsensusStateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "UpgradedConsensusState",
  getRpcInstance: getRpcInstance
});
export const useGetUpgradedConsensusState = buildUseQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: createGetUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});
export const createGetModuleVersions = (getRpcInstance: SigningClientResolver) => buildQuery<QueryModuleVersionsRequest, QueryModuleVersionsResponse>({
  encoder: QueryModuleVersionsRequest.encode,
  decoder: QueryModuleVersionsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ModuleVersions",
  getRpcInstance: getRpcInstance
});
export const useGetModuleVersions = buildUseQuery<QueryModuleVersionsRequest, QueryModuleVersionsResponse>({
  builderQueryFn: createGetModuleVersions,
  queryKeyPrefix: "ModuleVersionsQuery"
});
export const createGetAuthority = (getRpcInstance: SigningClientResolver) => buildQuery<QueryAuthorityRequest, QueryAuthorityResponse>({
  encoder: QueryAuthorityRequest.encode,
  decoder: QueryAuthorityResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Authority",
  getRpcInstance: getRpcInstance
});
export const useGetAuthority = buildUseQuery<QueryAuthorityRequest, QueryAuthorityResponse>({
  builderQueryFn: createGetAuthority,
  queryKeyPrefix: "AuthorityQuery"
});