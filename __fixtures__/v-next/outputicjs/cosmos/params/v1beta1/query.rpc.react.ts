import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
import { createGetParams, createGetSubspaces } from "./query.rpc.func";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetSubspaces = buildUseQuery<QuerySubspacesRequest, QuerySubspacesResponse>({
  builderQueryFn: createGetSubspaces,
  queryKeyPrefix: "SubspacesQuery"
});