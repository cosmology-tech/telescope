import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.params.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetSubspaces = (clientResolver?: RpcResolver) => buildQuery<QuerySubspacesRequest, QuerySubspacesResponse>({
  encode: QuerySubspacesRequest.encode,
  decode: QuerySubspacesResponse.decode,
  service: "cosmos.params.v1beta1.Query",
  method: "Subspaces",
  clientResolver
});
export const useGetSubspaces = buildUseQuery<QuerySubspacesRequest, QuerySubspacesResponse>({
  builderQueryFn: createGetSubspaces,
  queryKeyPrefix: "SubspacesQuery"
});