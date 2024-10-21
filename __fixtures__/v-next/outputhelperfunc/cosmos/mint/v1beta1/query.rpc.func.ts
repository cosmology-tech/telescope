import { Params, ParamsSDKType } from "./mint";
import { SigningClientResolver } from "../../../helpers";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationRequestSDKType, QueryInflationResponse, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsRequestSDKType, QueryAnnualProvisionsResponse, QueryAnnualProvisionsResponseSDKType } from "./query";
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
export const createGetInflation = (getRpcInstance: SigningClientResolver) => buildQuery<QueryInflationRequest, QueryInflationResponse>({
  encoder: QueryInflationRequest.encode,
  decoder: QueryInflationResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Inflation",
  getRpcInstance: getRpcInstance
});
export const useGetInflation = buildUseQuery<QueryInflationRequest, QueryInflationResponse>({
  builderQueryFn: createGetInflation,
  queryKeyPrefix: "InflationQuery"
});
export const createGetAnnualProvisions = (getRpcInstance: SigningClientResolver) => buildQuery<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>({
  encoder: QueryAnnualProvisionsRequest.encode,
  decoder: QueryAnnualProvisionsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AnnualProvisions",
  getRpcInstance: getRpcInstance
});
export const useGetAnnualProvisions = buildUseQuery<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>({
  builderQueryFn: createGetAnnualProvisions,
  queryKeyPrefix: "AnnualProvisionsQuery"
});