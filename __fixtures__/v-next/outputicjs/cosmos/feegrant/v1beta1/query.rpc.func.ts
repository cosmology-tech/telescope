import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesRequest, QueryAllowancesResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse } from "./query";
export const createGetAllowance = (clientResolver?: RpcResolver) => buildQuery<QueryAllowanceRequest, QueryAllowanceResponse>({
  encode: QueryAllowanceRequest.encode,
  decode: QueryAllowanceResponse.decode,
  service: "cosmos.feegrant.v1beta1.Query",
  method: "Allowance",
  clientResolver
});
export const useGetAllowance = buildUseQuery<QueryAllowanceRequest, QueryAllowanceResponse>({
  builderQueryFn: createGetAllowance,
  queryKeyPrefix: "AllowanceQuery"
});
export const createGetAllowances = (clientResolver?: RpcResolver) => buildQuery<QueryAllowancesRequest, QueryAllowancesResponse>({
  encode: QueryAllowancesRequest.encode,
  decode: QueryAllowancesResponse.decode,
  service: "cosmos.feegrant.v1beta1.Query",
  method: "Allowances",
  clientResolver
});
export const useGetAllowances = buildUseQuery<QueryAllowancesRequest, QueryAllowancesResponse>({
  builderQueryFn: createGetAllowances,
  queryKeyPrefix: "AllowancesQuery"
});
export const createGetAllowancesByGranter = (clientResolver?: RpcResolver) => buildQuery<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>({
  encode: QueryAllowancesByGranterRequest.encode,
  decode: QueryAllowancesByGranterResponse.decode,
  service: "cosmos.feegrant.v1beta1.Query",
  method: "AllowancesByGranter",
  clientResolver
});
export const useGetAllowancesByGranter = buildUseQuery<QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse>({
  builderQueryFn: createGetAllowancesByGranter,
  queryKeyPrefix: "AllowancesByGranterQuery"
});