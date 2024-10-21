import { ParamChange, ParamChangeSDKType } from "./params";
import { SigningClientResolver } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySubspacesRequest, QuerySubspacesRequestSDKType, QuerySubspacesResponse, QuerySubspacesResponseSDKType } from "./query";
export const createGetParams = (getRpcInstance: SigningClientResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encoder: QueryParamsRequest.encode,
  decoder: QueryParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetSubspaces = (getRpcInstance: SigningClientResolver) => buildQuery<QuerySubspacesRequest, QuerySubspacesResponse>({
  encoder: QuerySubspacesRequest.encode,
  decoder: QuerySubspacesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Subspaces",
  getRpcInstance: getRpcInstance
});
export const useGetSubspaces = buildUseQuery<QuerySubspacesRequest, QuerySubspacesResponse>({
  builderQueryFn: createGetSubspaces,
  queryKeyPrefix: "SubspacesQuery"
});