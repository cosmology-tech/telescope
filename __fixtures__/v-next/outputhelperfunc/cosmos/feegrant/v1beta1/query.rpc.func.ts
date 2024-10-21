import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Grant, GrantSDKType } from "./feegrant";
import { SigningClientResolver } from "../../../helpers";
import { QueryAllowanceRequest, QueryAllowanceRequestSDKType, QueryAllowanceResponse, QueryAllowanceResponseSDKType, QueryAllowancesRequest, QueryAllowancesRequestSDKType, QueryAllowancesResponse, QueryAllowancesResponseSDKType, QueryAllowancesByGranterRequest, QueryAllowancesByGranterRequestSDKType, QueryAllowancesByGranterResponse, QueryAllowancesByGranterResponseSDKType } from "./query";
export const createGetAllowance = (getRpcInstance: SigningClientResolver) => buildQuery<QueryAllowanceRequest, QueryAllowanceResponse>({
  encoder: QueryAllowanceRequest.encode,
  decoder: QueryAllowanceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Allowance",
  getRpcInstance: getRpcInstance
});
export const useGetAllowance = buildUseQuery<QueryAllowanceRequest, QueryAllowanceResponse>({
  builderQueryFn: createGetAllowance,
  queryKeyPrefix: "AllowanceQuery"
});
export const createGetAllowances = (getRpcInstance: SigningClientResolver) => buildQuery<QueryAllowancesRequest, QueryAllowancesResponse>({
  encoder: QueryAllowancesRequest.encode,
  decoder: QueryAllowancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Allowances",
  getRpcInstance: getRpcInstance
});
export const useGetAllowances = buildUseQuery<QueryAllowancesRequest, QueryAllowancesResponse>({
  builderQueryFn: createGetAllowances,
  queryKeyPrefix: "AllowancesQuery"
});
export const createGetAllowancesByGranter = (getRpcInstance: SigningClientResolver) => buildQuery<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>({
  encoder: QueryAllowancesByGranterRequest.encode,
  decoder: QueryAllowancesByGranterResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllowancesByGranter",
  getRpcInstance: getRpcInstance
});
export const useGetAllowancesByGranter = buildUseQuery<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>({
  builderQueryFn: createGetAllowancesByGranter,
  queryKeyPrefix: "AllowancesByGranterQuery"
});