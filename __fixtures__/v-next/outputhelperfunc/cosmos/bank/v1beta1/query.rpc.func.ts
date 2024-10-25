import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesRequestSDKType, QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfRequestSDKType, QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType } from "./query";
export const createGetBalance = (getRpcInstance: RpcResolver) => buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encode: QueryBalanceRequest.encode,
  decode: QueryBalanceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Balance",
  getRpcInstance: getRpcInstance
});
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: createGetBalance,
  queryKeyPrefix: "BalanceQuery"
});
export const createGetAllBalances = (getRpcInstance: RpcResolver) => buildQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  encode: QueryAllBalancesRequest.encode,
  decode: QueryAllBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllBalances",
  getRpcInstance: getRpcInstance
});
export const useGetAllBalances = buildUseQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  builderQueryFn: createGetAllBalances,
  queryKeyPrefix: "AllBalancesQuery"
});
export const createGetSpendableBalances = (getRpcInstance: RpcResolver) => buildQuery<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>({
  encode: QuerySpendableBalancesRequest.encode,
  decode: QuerySpendableBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SpendableBalances",
  getRpcInstance: getRpcInstance
});
export const useGetSpendableBalances = buildUseQuery<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>({
  builderQueryFn: createGetSpendableBalances,
  queryKeyPrefix: "SpendableBalancesQuery"
});
export const createGetTotalSupply = (getRpcInstance: RpcResolver) => buildQuery<QueryTotalSupplyRequest, QueryTotalSupplyResponse>({
  encode: QueryTotalSupplyRequest.encode,
  decode: QueryTotalSupplyResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TotalSupply",
  getRpcInstance: getRpcInstance
});
export const useGetTotalSupply = buildUseQuery<QueryTotalSupplyRequest, QueryTotalSupplyResponse>({
  builderQueryFn: createGetTotalSupply,
  queryKeyPrefix: "TotalSupplyQuery"
});
export const createGetSupplyOf = (getRpcInstance: RpcResolver) => buildQuery<QuerySupplyOfRequest, QuerySupplyOfResponse>({
  encode: QuerySupplyOfRequest.encode,
  decode: QuerySupplyOfResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SupplyOf",
  getRpcInstance: getRpcInstance
});
export const useGetSupplyOf = buildUseQuery<QuerySupplyOfRequest, QuerySupplyOfResponse>({
  builderQueryFn: createGetSupplyOf,
  queryKeyPrefix: "SupplyOfQuery"
});
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetDenomMetadata = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomMetadataRequest, QueryDenomMetadataResponse>({
  encode: QueryDenomMetadataRequest.encode,
  decode: QueryDenomMetadataResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomMetadata",
  getRpcInstance: getRpcInstance
});
export const useGetDenomMetadata = buildUseQuery<QueryDenomMetadataRequest, QueryDenomMetadataResponse>({
  builderQueryFn: createGetDenomMetadata,
  queryKeyPrefix: "DenomMetadataQuery"
});
export const createGetDenomsMetadata = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>({
  encode: QueryDenomsMetadataRequest.encode,
  decode: QueryDenomsMetadataResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomsMetadata",
  getRpcInstance: getRpcInstance
});
export const useGetDenomsMetadata = buildUseQuery<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>({
  builderQueryFn: createGetDenomsMetadata,
  queryKeyPrefix: "DenomsMetadataQuery"
});
export const createGetDenomOwners = (getRpcInstance: RpcResolver) => buildQuery<QueryDenomOwnersRequest, QueryDenomOwnersResponse>({
  encode: QueryDenomOwnersRequest.encode,
  decode: QueryDenomOwnersResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomOwners",
  getRpcInstance: getRpcInstance
});
export const useGetDenomOwners = buildUseQuery<QueryDenomOwnersRequest, QueryDenomOwnersResponse>({
  builderQueryFn: createGetDenomOwners,
  queryKeyPrefix: "DenomOwnersQuery"
});