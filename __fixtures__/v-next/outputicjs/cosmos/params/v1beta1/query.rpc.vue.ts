import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
import { createGetParams, createGetSubspaces } from "./query.rpc.func.ts";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetSubspaces = buildUseVueQuery<QuerySubspacesRequest, QuerySubspacesResponse>({
  builderQueryFn: createGetSubspaces,
  queryKeyPrefix: "SubspacesQuery"
});