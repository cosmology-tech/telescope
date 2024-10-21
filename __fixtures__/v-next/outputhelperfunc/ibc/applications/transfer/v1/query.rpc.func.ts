import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, DenomTraceSDKType, Params, ParamsSDKType } from "./transfer";
import { SigningClientResolver } from "../../../../helper-func-types";
import { QueryDenomTraceRequest, QueryDenomTraceRequestSDKType, QueryDenomTraceResponse, QueryDenomTraceResponseSDKType, QueryDenomTracesRequest, QueryDenomTracesRequestSDKType, QueryDenomTracesResponse, QueryDenomTracesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export const createGetDenomTrace = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDenomTraceRequest, QueryDenomTraceResponse>({
  encoder: QueryDenomTraceRequest.encode,
  decoder: QueryDenomTraceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomTrace",
  getRpcInstance: getRpcInstance
});
export const useGetDenomTrace = buildUseQuery<QueryDenomTraceRequest, QueryDenomTraceResponse>({
  builderQueryFn: createGetDenomTrace,
  queryKeyPrefix: "DenomTraceQuery"
});
export const createGetDenomTraces = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDenomTracesRequest, QueryDenomTracesResponse>({
  encoder: QueryDenomTracesRequest.encode,
  decoder: QueryDenomTracesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomTraces",
  getRpcInstance: getRpcInstance
});
export const useGetDenomTraces = buildUseQuery<QueryDenomTracesRequest, QueryDenomTracesResponse>({
  builderQueryFn: createGetDenomTraces,
  queryKeyPrefix: "DenomTracesQuery"
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