import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimsRecordsRequest, QueryClaimsRecordsResponse, QueryClaimsRecordRequest, QueryClaimsRecordResponse } from "./query";
export const createGetTotalUnclaimed = (getRpcInstance: RpcResolver) => buildQuery<QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse>({
  encoder: QueryTotalUnclaimedRequest.encode,
  decoder: QueryTotalUnclaimedResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TotalUnclaimed",
  getRpcInstance: getRpcInstance
});
export const useGetTotalUnclaimed = buildUseQuery<QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse>({
  builderQueryFn: createGetTotalUnclaimed,
  queryKeyPrefix: "TotalUnclaimedQuery"
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
export const createGetClaimsRecords = (getRpcInstance: RpcResolver) => buildQuery<QueryClaimsRecordsRequest, QueryClaimsRecordsResponse>({
  encoder: QueryClaimsRecordsRequest.encode,
  decoder: QueryClaimsRecordsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ClaimsRecords",
  getRpcInstance: getRpcInstance
});
export const useGetClaimsRecords = buildUseQuery<QueryClaimsRecordsRequest, QueryClaimsRecordsResponse>({
  builderQueryFn: createGetClaimsRecords,
  queryKeyPrefix: "ClaimsRecordsQuery"
});
export const createGetClaimsRecord = (getRpcInstance: RpcResolver) => buildQuery<QueryClaimsRecordRequest, QueryClaimsRecordResponse>({
  encoder: QueryClaimsRecordRequest.encode,
  decoder: QueryClaimsRecordResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ClaimsRecord",
  getRpcInstance: getRpcInstance
});
export const useGetClaimsRecord = buildUseQuery<QueryClaimsRecordRequest, QueryClaimsRecordResponse>({
  builderQueryFn: createGetClaimsRecord,
  queryKeyPrefix: "ClaimsRecordQuery"
});