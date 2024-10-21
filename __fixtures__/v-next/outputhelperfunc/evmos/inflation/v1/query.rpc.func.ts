import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { SigningClientResolver } from "../../../helpers";
import { QueryPeriodRequest, QueryPeriodRequestSDKType, QueryPeriodResponse, QueryPeriodResponseSDKType, QueryEpochMintProvisionRequest, QueryEpochMintProvisionRequestSDKType, QueryEpochMintProvisionResponse, QueryEpochMintProvisionResponseSDKType, QuerySkippedEpochsRequest, QuerySkippedEpochsRequestSDKType, QuerySkippedEpochsResponse, QuerySkippedEpochsResponseSDKType, QueryCirculatingSupplyRequest, QueryCirculatingSupplyRequestSDKType, QueryCirculatingSupplyResponse, QueryCirculatingSupplyResponseSDKType, QueryInflationRateRequest, QueryInflationRateRequestSDKType, QueryInflationRateResponse, QueryInflationRateResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export const createGetPeriod = (getRpcInstance: SigningClientResolver) => buildQuery<QueryPeriodRequest, QueryPeriodResponse>({
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
export const createGetEpochMintProvision = (getRpcInstance: SigningClientResolver) => buildQuery<QueryEpochMintProvisionRequest, QueryEpochMintProvisionResponse>({
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
export const createGetSkippedEpochs = (getRpcInstance: SigningClientResolver) => buildQuery<QuerySkippedEpochsRequest, QuerySkippedEpochsResponse>({
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
export const createGetCirculatingSupply = (getRpcInstance: SigningClientResolver) => buildQuery<QueryCirculatingSupplyRequest, QueryCirculatingSupplyResponse>({
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
export const createGetInflationRate = (getRpcInstance: SigningClientResolver) => buildQuery<QueryInflationRateRequest, QueryInflationRateResponse>({
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
export const createGetParams = (getRpcInstance: SigningClientResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
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