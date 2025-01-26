import { buildUseQuery } from "../../../react-query";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimsRecordsRequest, QueryClaimsRecordsResponse, QueryClaimsRecordRequest, QueryClaimsRecordResponse } from "./query";
import { createGetTotalUnclaimed, createGetParams, createGetClaimsRecords, createGetClaimsRecord } from "./query.rpc.func";
export const useGetTotalUnclaimed = buildUseQuery<QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse>({
  builderQueryFn: createGetTotalUnclaimed,
  queryKeyPrefix: "TotalUnclaimedQuery"
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetClaimsRecords = buildUseQuery<QueryClaimsRecordsRequest, QueryClaimsRecordsResponse>({
  builderQueryFn: createGetClaimsRecords,
  queryKeyPrefix: "ClaimsRecordsQuery"
});
export const useGetClaimsRecord = buildUseQuery<QueryClaimsRecordRequest, QueryClaimsRecordResponse>({
  builderQueryFn: createGetClaimsRecord,
  queryKeyPrefix: "ClaimsRecordQuery"
});