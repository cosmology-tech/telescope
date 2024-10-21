import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryPeriodRequest, QueryPeriodResponse, QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse, QuerySkippedEpochsRequest, QuerySkippedEpochsResponse, QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse, QueryInflationRateRequest, QueryInflationRateResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export const createGetPeriod = (getRpcInstance: RpcResolver) => buildQuery<QueryPeriodRequest, QueryPeriodResponse>({
  encoder: QueryPeriodRequest.encode,
  decoder: QueryPeriodResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Period",
  getRpcInstance: getRpcInstance
});
export const useGetPeriod = buildUseQuery<QueryPeriodRequest, QueryPeriodResponse>({
  builderQueryFn: createGetPeriod,
  queryKeyPrefix: "PeriodQuery"
});
export const createGetEpochMintProvision = (getRpcInstance: RpcResolver) => buildQuery<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>({
  encoder: QueryEpochMintProvisionRequest.encode,
  decoder: QueryEpochMintProvisionResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "EpochMintProvision",
  getRpcInstance: getRpcInstance
});
export const useGetEpochMintProvision = buildUseQuery<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>({
  builderQueryFn: createGetEpochMintProvision,
  queryKeyPrefix: "EpochMintProvisionQuery"
});
export const createGetSkippedEpochs = (getRpcInstance: RpcResolver) => buildQuery<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>({
  encoder: QuerySkippedEpochsRequest.encode,
  decoder: QuerySkippedEpochsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SkippedEpochs",
  getRpcInstance: getRpcInstance
});
export const useGetSkippedEpochs = buildUseQuery<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>({
  builderQueryFn: createGetSkippedEpochs,
  queryKeyPrefix: "SkippedEpochsQuery"
});
export const createGetCirculatingSupply = (getRpcInstance: RpcResolver) => buildQuery<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>({
  encoder: QueryCirculatingSupplyRequest.encode,
  decoder: QueryCirculatingSupplyResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "CirculatingSupply",
  getRpcInstance: getRpcInstance
});
export const useGetCirculatingSupply = buildUseQuery<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>({
  builderQueryFn: createGetCirculatingSupply,
  queryKeyPrefix: "CirculatingSupplyQuery"
});
export const createGetInflationRate = (getRpcInstance: RpcResolver) => buildQuery<QueryInflationRateRequest, QueryInflationRateResponse>({
  encoder: QueryInflationRateRequest.encode,
  decoder: QueryInflationRateResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "InflationRate",
  getRpcInstance: getRpcInstance
});
export const useGetInflationRate = buildUseQuery<QueryInflationRateRequest, QueryInflationRateResponse>({
  builderQueryFn: createGetInflationRate,
  queryKeyPrefix: "InflationRateQuery"
});
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encoder: QueryParamsRequest.encode,
  decoder: QueryParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});