import { ParamChange, ParamChangeSDKType } from "./params";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QuerySubspacesRequest, QuerySubspacesRequestSDKType, QuerySubspacesResponse, QuerySubspacesResponseSDKType } from "./query";
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.params.v1beta1.Params",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetSubspaces = (getRpcInstance: RpcResolver) => buildQuery<QuerySubspacesRequest, QuerySubspacesResponse>({
  encode: QuerySubspacesRequest.encode,
  decode: QuerySubspacesResponse.decode,
  service: "cosmos.params.v1beta1.Subspaces",
  method: "Subspaces",
  getRpcInstance: getRpcInstance
});
export const useGetSubspaces = buildUseQuery<QuerySubspacesRequest, QuerySubspacesResponse>({
  builderQueryFn: createGetSubspaces,
  queryKeyPrefix: "SubspacesQuery"
});