import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { ClaimsRecordAddress, ClaimsRecordAddressSDKType, Claim, ClaimSDKType } from "./claims";
import { SigningClientResolver } from "../../../helpers";
import { QueryTotalUnclaimedRequest, QueryTotalUnclaimedRequestSDKType, QueryTotalUnclaimedResponse, QueryTotalUnclaimedResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryClaimsRecordsRequest, QueryClaimsRecordsRequestSDKType, QueryClaimsRecordsResponse, QueryClaimsRecordsResponseSDKType, QueryClaimsRecordRequest, QueryClaimsRecordRequestSDKType, QueryClaimsRecordResponse, QueryClaimsRecordResponseSDKType } from "./query";
export const createGetTotalUnclaimed = (getRpcInstance: SigningClientResolver) => buildQuery<QueryTotalUnclaimedRequest, QueryTotalUnclaimedResponse>({
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
export const createGetClaimsRecords = (getRpcInstance: SigningClientResolver) => buildQuery<QueryClaimsRecordsRequest, QueryClaimsRecordsResponse>({
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
export const createGetClaimsRecord = (getRpcInstance: SigningClientResolver) => buildQuery<QueryClaimsRecordRequest, QueryClaimsRecordResponse>({
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