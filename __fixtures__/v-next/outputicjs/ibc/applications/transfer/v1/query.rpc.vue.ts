import { buildUseVueQuery } from "../../../../vue-query";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { createGetDenomTrace, createGetDenomTraces, createGetParams } from "./query.rpc.func.ts";
export const useGetDenomTrace = buildUseVueQuery<QueryDenomTraceRequest, QueryDenomTraceResponse>({
  builderQueryFn: createGetDenomTrace,
  queryKeyPrefix: "DenomTraceQuery"
});
export const useGetDenomTraces = buildUseVueQuery<QueryDenomTracesRequest, QueryDenomTracesResponse>({
  builderQueryFn: createGetDenomTraces,
  queryKeyPrefix: "DenomTracesQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});