import { buildUseQuery } from "../../../react-query";
import { QueryPeriodRequest, QueryPeriodResponse, QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse, QuerySkippedEpochsRequest, QuerySkippedEpochsResponse, QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryInflationRateRequest, QueryInflationRateResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { createGetPeriod, createGetEpochMintProvision, createGetSkippedEpochs, createGetCirculatingSupply, createGetInflationRate, createGetParams } from "./query.rpc.func.ts";
export const useGetPeriod = buildUseQuery<QueryPeriodRequest, QueryPeriodResponse>({
  builderQueryFn: createGetPeriod,
  queryKeyPrefix: "PeriodQuery"
});
export const useGetEpochMintProvision = buildUseQuery<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>({
  builderQueryFn: createGetEpochMintProvision,
  queryKeyPrefix: "EpochMintProvisionQuery"
});
export const useGetSkippedEpochs = buildUseQuery<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>({
  builderQueryFn: createGetSkippedEpochs,
  queryKeyPrefix: "SkippedEpochsQuery"
});
export const useGetCirculatingSupply = buildUseQuery<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>({
  builderQueryFn: createGetCirculatingSupply,
  queryKeyPrefix: "CirculatingSupplyQuery"
});
export const useGetInflationRate = buildUseQuery<QueryInflationRateRequest, QueryInflationRateResponse>({
  builderQueryFn: createGetInflationRate,
  queryKeyPrefix: "InflationRateQuery"
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});