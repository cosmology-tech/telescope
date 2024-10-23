import { Params, ParamsSDKType } from "./mint";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryInflationRequest, QueryInflationRequestSDKType, QueryInflationResponse, QueryInflationResponseSDKType, QueryAnnualProvisionsRequest, QueryAnnualProvisionsRequestSDKType, QueryAnnualProvisionsResponse, QueryAnnualProvisionsResponseSDKType } from "./query";
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.mint.v1beta1.Params",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetInflation = (getRpcInstance: RpcResolver) => buildQuery<QueryInflationRequest, QueryInflationResponse>({
  encode: QueryInflationRequest.encode,
  decode: QueryInflationResponse.decode,
  service: "cosmos.mint.v1beta1.Inflation",
  method: "Inflation",
  getRpcInstance: getRpcInstance
});
export const useGetInflation = buildUseQuery<QueryInflationRequest, QueryInflationResponse>({
  builderQueryFn: createGetInflation,
  queryKeyPrefix: "InflationQuery"
});
export const createGetAnnualProvisions = (getRpcInstance: RpcResolver) => buildQuery<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>({
  encode: QueryAnnualProvisionsRequest.encode,
  decode: QueryAnnualProvisionsResponse.decode,
  service: "cosmos.mint.v1beta1.AnnualProvisions",
  method: "AnnualProvisions",
  getRpcInstance: getRpcInstance
});
export const useGetAnnualProvisions = buildUseQuery<QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse>({
  builderQueryFn: createGetAnnualProvisions,
  queryKeyPrefix: "AnnualProvisionsQuery"
});