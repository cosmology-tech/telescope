import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimsRecordsRequest, QueryClaimsRecordsResponse, QueryClaimsRecordRequest, QueryClaimsRecordResponse } from "./query";
export const createGetTotalUnclaimed = (clientResolver?: RpcResolver) => buildQuery<QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse>({
  encode: QueryTotalUnclaimedRequest.encode,
  decode: QueryTotalUnclaimedResponse.decode,
  service: "evmos.claims.v1.Query",
  method: "TotalUnclaimed",
  clientResolver
});
export const useGetTotalUnclaimed = buildUseQuery<QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse>({
  builderQueryFn: createGetTotalUnclaimed,
  queryKeyPrefix: "TotalUnclaimedQuery"
});
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.claims.v1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetClaimsRecords = (clientResolver?: RpcResolver) => buildQuery<QueryClaimsRecordsRequest, QueryClaimsRecordsResponse>({
  encode: QueryClaimsRecordsRequest.encode,
  decode: QueryClaimsRecordsResponse.decode,
  service: "evmos.claims.v1.Query",
  method: "ClaimsRecords",
  clientResolver
});
export const useGetClaimsRecords = buildUseQuery<QueryClaimsRecordsRequest, QueryClaimsRecordsResponse>({
  builderQueryFn: createGetClaimsRecords,
  queryKeyPrefix: "ClaimsRecordsQuery"
});
export const createGetClaimsRecord = (clientResolver?: RpcResolver) => buildQuery<QueryClaimsRecordRequest, QueryClaimsRecordResponse>({
  encode: QueryClaimsRecordRequest.encode,
  decode: QueryClaimsRecordResponse.decode,
  service: "evmos.claims.v1.Query",
  method: "ClaimsRecord",
  clientResolver
});
export const useGetClaimsRecord = buildUseQuery<QueryClaimsRecordRequest, QueryClaimsRecordResponse>({
  builderQueryFn: createGetClaimsRecord,
  queryKeyPrefix: "ClaimsRecordQuery"
});