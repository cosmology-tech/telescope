import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryPeriodRequest, QueryPeriodResponse, QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse, QuerySkippedEpochsRequest, QuerySkippedEpochsResponse, QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryInflationRateRequest, QueryInflationRateResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export const createGetPeriod = (getRpcInstance: RpcResolver) => buildQuery<QueryPeriodRequest, QueryPeriodResponse>({
  encode: QueryPeriodRequest.encode,
  decode: QueryPeriodResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "Period",
  getRpcInstance: getRpcInstance
});
export const useGetPeriod = buildUseQuery<QueryPeriodRequest, QueryPeriodResponse>({
  builderQueryFn: createGetPeriod,
  queryKeyPrefix: "PeriodQuery"
});
export const createGetEpochMintProvision = (getRpcInstance: RpcResolver) => buildQuery<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>({
  encode: QueryEpochMintProvisionRequest.encode,
  decode: QueryEpochMintProvisionResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "EpochMintProvision",
  getRpcInstance: getRpcInstance
});
export const useGetEpochMintProvision = buildUseQuery<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>({
  builderQueryFn: createGetEpochMintProvision,
  queryKeyPrefix: "EpochMintProvisionQuery"
});
export const createGetSkippedEpochs = (getRpcInstance: RpcResolver) => buildQuery<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>({
  encode: QuerySkippedEpochsRequest.encode,
  decode: QuerySkippedEpochsResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "SkippedEpochs",
  getRpcInstance: getRpcInstance
});
export const useGetSkippedEpochs = buildUseQuery<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>({
  builderQueryFn: createGetSkippedEpochs,
  queryKeyPrefix: "SkippedEpochsQuery"
});
export const createGetCirculatingSupply = (getRpcInstance: RpcResolver) => buildQuery<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>({
  encode: QueryCirculatingSupplyRequest.encode,
  decode: QueryCirculatingSupplyResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "CirculatingSupply",
  getRpcInstance: getRpcInstance
});
export const useGetCirculatingSupply = buildUseQuery<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>({
  builderQueryFn: createGetCirculatingSupply,
  queryKeyPrefix: "CirculatingSupplyQuery"
});
export const createGetInflationRate = (getRpcInstance: RpcResolver) => buildQuery<QueryInflationRateRequest, QueryInflationRateResponse>({
  encode: QueryInflationRateRequest.encode,
  decode: QueryInflationRateResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "InflationRate",
  getRpcInstance: getRpcInstance
});
export const useGetInflationRate = buildUseQuery<QueryInflationRateRequest, QueryInflationRateResponse>({
  builderQueryFn: createGetInflationRate,
  queryKeyPrefix: "InflationRateQuery"
});
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.inflation.v1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});