import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryAuthorityRequest, QueryAuthorityResponse } from "./query";
export const createGetCurrentPlan = (clientResolver?: RpcResolver) => buildQuery<QueryCurrentPlanRequest, QueryCurrentPlanResponse>({
  encode: QueryCurrentPlanRequest.encode,
  decode: QueryCurrentPlanResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "CurrentPlan",
  clientResolver
});
export const useGetCurrentPlan = buildUseQuery<QueryCurrentPlanRequest, QueryCurrentPlanResponse>({
  builderQueryFn: createGetCurrentPlan,
  queryKeyPrefix: "CurrentPlanQuery"
});
export const createGetAppliedPlan = (clientResolver?: RpcResolver) => buildQuery<QueryAppliedPlanRequest, QueryAppliedPlanResponse>({
  encode: QueryAppliedPlanRequest.encode,
  decode: QueryAppliedPlanResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "AppliedPlan",
  clientResolver
});
export const useGetAppliedPlan = buildUseQuery<QueryAppliedPlanRequest, QueryAppliedPlanResponse>({
  builderQueryFn: createGetAppliedPlan,
  queryKeyPrefix: "AppliedPlanQuery"
});
export const createGetUpgradedConsensusState = (clientResolver?: RpcResolver) => buildQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  encode: QueryUpgradedConsensusStateRequest.encode,
  decode: QueryUpgradedConsensusStateResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "UpgradedConsensusState",
  clientResolver
});
export const useGetUpgradedConsensusState = buildUseQuery<QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse>({
  builderQueryFn: createGetUpgradedConsensusState,
  queryKeyPrefix: "UpgradedConsensusStateQuery"
});
export const createGetModuleVersions = (clientResolver?: RpcResolver) => buildQuery<QueryModuleVersionsRequest, QueryModuleVersionsResponse>({
  encode: QueryModuleVersionsRequest.encode,
  decode: QueryModuleVersionsResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "ModuleVersions",
  clientResolver
});
export const useGetModuleVersions = buildUseQuery<QueryModuleVersionsRequest, QueryModuleVersionsResponse>({
  builderQueryFn: createGetModuleVersions,
  queryKeyPrefix: "ModuleVersionsQuery"
});
export const createGetAuthority = (clientResolver?: RpcResolver) => buildQuery<QueryAuthorityRequest, QueryAuthorityResponse>({
  encode: QueryAuthorityRequest.encode,
  decode: QueryAuthorityResponse.decode,
  service: "cosmos.upgrade.v1beta1.Query",
  method: "Authority",
  clientResolver
});
export const useGetAuthority = buildUseQuery<QueryAuthorityRequest, QueryAuthorityResponse>({
  builderQueryFn: createGetAuthority,
  queryKeyPrefix: "AuthorityQuery"
});