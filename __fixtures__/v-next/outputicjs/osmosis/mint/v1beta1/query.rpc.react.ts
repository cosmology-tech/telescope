import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
import { createGetParams, createGetEpochProvisions } from "./query.rpc.func.ts";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetEpochProvisions = buildUseQuery<QueryEpochProvisionsRequest, QueryEpochProvisionsResponse>({
  builderQueryFn: createGetEpochProvisions,
  queryKeyPrefix: "EpochProvisionsQuery"
});