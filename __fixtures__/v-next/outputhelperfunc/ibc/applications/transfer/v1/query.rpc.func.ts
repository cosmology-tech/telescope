import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { DenomTrace, DenomTraceSDKType, Params, ParamsSDKType } from "./transfer";
import { RpcResolver, buildQuery } from "../../../../helper-func-types";
import { buildUseQuery } from "../../../../react-query";
import { QueryDenomTraceRequest, QueryDenomTraceRequestSDKType, QueryDenomTraceResponse, QueryDenomTraceResponseSDKType, QueryDenomTracesRequest, QueryDenomTracesRequestSDKType, QueryDenomTracesResponse, QueryDenomTracesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export const createGetDenomTrace = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomTraceRequest, QueryDenomTraceResponse>({
  encode: QueryDenomTraceRequest.encode,
  decode: QueryDenomTraceResponse.decode,
  service: "ibc.applications.transfer.v1.DenomTrace",
  method: "DenomTrace",
  getRpcInstance: getRpcInstance
});
export const useGetDenomTrace = buildUseQuery<QueryDenomTraceRequest, QueryDenomTraceResponse>({
  builderQueryFn: createGetDenomTrace,
  queryKeyPrefix: "DenomTraceQuery"
});
export const createGetDenomTraces = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomTracesRequest, QueryDenomTracesResponse>({
  encode: QueryDenomTracesRequest.encode,
  decode: QueryDenomTracesResponse.decode,
  service: "ibc.applications.transfer.v1.DenomTraces",
  method: "DenomTraces",
  getRpcInstance: getRpcInstance
});
export const useGetDenomTraces = buildUseQuery<QueryDenomTracesRequest, QueryDenomTracesResponse>({
  builderQueryFn: createGetDenomTraces,
  queryKeyPrefix: "DenomTracesQuery"
});
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "ibc.applications.transfer.v1.Params",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});