import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
export const createGetAllowance = (getRpcInstance: RpcResolver) => buildQuery<QueryAllowanceRequest, QueryAllowanceResponse>({
  encode: QueryAllowanceRequest.encode,
  decode: QueryAllowanceResponse.decode,
  service: "cosmos.feegrant.v1beta1.Query",
  method: "Allowance",
  getRpcInstance: getRpcInstance
});
export const useGetAllowance = buildUseQuery<QueryAllowanceRequest, QueryAllowanceResponse>({
  builderQueryFn: createGetAllowance,
  queryKeyPrefix: "AllowanceQuery"
});
export const createGetAllowances = (getRpcInstance: RpcResolver) => buildQuery<QueryAllowancesRequest, QueryAllowancesResponse>({
  encode: QueryAllowancesRequest.encode,
  decode: QueryAllowancesResponse.decode,
  service: "cosmos.feegrant.v1beta1.Query",
  method: "Allowances",
  getRpcInstance: getRpcInstance
});
export const useGetAllowances = buildUseQuery<QueryAllowancesRequest, QueryAllowancesResponse>({
  builderQueryFn: createGetAllowances,
  queryKeyPrefix: "AllowancesQuery"
});
export const createGetAllowancesByGranter = (getRpcInstance: RpcResolver) => buildQuery<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>({
  encode: QueryAllowancesByGranterRequest.encode,
  decode: QueryAllowancesByGranterResponse.decode,
  service: "cosmos.feegrant.v1beta1.Query",
  method: "AllowancesByGranter",
  getRpcInstance: getRpcInstance
});
export const useGetAllowancesByGranter = buildUseQuery<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>({
  builderQueryFn: createGetAllowancesByGranter,
  queryKeyPrefix: "AllowancesByGranterQuery"
});