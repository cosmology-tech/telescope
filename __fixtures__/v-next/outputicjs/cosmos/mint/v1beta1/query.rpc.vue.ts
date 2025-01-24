import { buildUseVueQuery } from "../../../vue-query";
import { QueryParamsRequest, QueryParamsResponse, QueryInflationRequest, QueryInflationResponse, QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse } from "./query";
import { createGetParams, createGetInflation, createGetAnnualProvisions } from "./query.rpc.func.ts";
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetInflation = buildUseVueQuery<QueryInflationRequest, QueryInflationResponse>({
  builderQueryFn: createGetInflation,
  queryKeyPrefix: "InflationQuery"
});
export const useGetAnnualProvisions = buildUseVueQuery<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>({
  builderQueryFn: createGetAnnualProvisions,
  queryKeyPrefix: "AnnualProvisionsQuery"
});