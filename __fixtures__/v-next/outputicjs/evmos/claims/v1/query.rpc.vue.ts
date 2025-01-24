import { buildUseVueQuery } from "../../../vue-query";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse, QueryParamsRequest, QueryParamsResponse, QueryClaimsRecordsRequest, QueryClaimsRecordsResponse, QueryClaimsRecordRequest, QueryClaimsRecordResponse } from "./query";
import { createGetTotalUnclaimed, createGetParams, createGetClaimsRecords, createGetClaimsRecord } from "./query.rpc.func.ts";
export const useGetTotalUnclaimed = buildUseVueQuery<QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse>({
  builderQueryFn: createGetTotalUnclaimed,
  queryKeyPrefix: "TotalUnclaimedQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetClaimsRecords = buildUseVueQuery<QueryClaimsRecordsRequest, QueryClaimsRecordsResponse>({
  builderQueryFn: createGetClaimsRecords,
  queryKeyPrefix: "ClaimsRecordsQuery"
});
export const useGetClaimsRecord = buildUseVueQuery<QueryClaimsRecordRequest, QueryClaimsRecordResponse>({
  builderQueryFn: createGetClaimsRecord,
  queryKeyPrefix: "ClaimsRecordQuery"
});