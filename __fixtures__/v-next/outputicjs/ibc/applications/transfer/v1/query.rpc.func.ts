import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export const createGetDenomTrace = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomTraceRequest, QueryDenomTraceResponse>({
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
export const createGetDenomTraces = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomTracesRequest, QueryDenomTracesResponse>({
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