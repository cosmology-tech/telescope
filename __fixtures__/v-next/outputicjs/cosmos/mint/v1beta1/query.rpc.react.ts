import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
import { createGetParams, createGetInflation, createGetAnnualProvisions } from "./query.rpc.func.ts";
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetInflation = buildUseQuery<QueryInflationRequest, QueryInflationResponse>({
  builderQueryFn: createGetInflation,
  queryKeyPrefix: "InflationQuery"
});
export const useGetAnnualProvisions = buildUseQuery<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>({
  builderQueryFn: createGetAnnualProvisions,
  queryKeyPrefix: "AnnualProvisionsQuery"
});