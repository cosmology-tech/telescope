import { buildUseVueQuery } from "../../../vue-query";
import { QueryPeriodRequest, QueryPeriodResponse, QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse, QuerySkippedEpochsRequest, QuerySkippedEpochsResponse, QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryInflationRateRequest, QueryInflationRateResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { createGetPeriod, createGetEpochMintProvision, createGetSkippedEpochs, createGetCirculatingSupply, createGetInflationRate, createGetParams } from "./query.rpc.func.ts";
export const useGetPeriod = buildUseVueQuery<QueryPeriodRequest, QueryPeriodResponse>({
  builderQueryFn: createGetPeriod,
  queryKeyPrefix: "PeriodQuery"
});
export const useGetEpochMintProvision = buildUseVueQuery<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>({
  builderQueryFn: createGetEpochMintProvision,
  queryKeyPrefix: "EpochMintProvisionQuery"
});
export const useGetSkippedEpochs = buildUseVueQuery<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>({
  builderQueryFn: createGetSkippedEpochs,
  queryKeyPrefix: "SkippedEpochsQuery"
});
export const useGetCirculatingSupply = buildUseVueQuery<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>({
  builderQueryFn: createGetCirculatingSupply,
  queryKeyPrefix: "CirculatingSupplyQuery"
});
export const useGetInflationRate = buildUseVueQuery<QueryInflationRateRequest, QueryInflationRateResponse>({
  builderQueryFn: createGetInflationRate,
  queryKeyPrefix: "InflationRateQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});