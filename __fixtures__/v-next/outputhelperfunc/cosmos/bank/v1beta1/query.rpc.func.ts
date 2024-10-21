import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import { SigningClientResolver } from "../../../helper-func-types";
import { QueryBalanceRequest, QueryBalanceRequestSDKType, QueryBalanceResponse, QueryBalanceResponseSDKType, QueryAllBalancesRequest, QueryAllBalancesRequestSDKType, QueryAllBalancesResponse, QueryAllBalancesResponseSDKType, QuerySpendableBalancesRequest, QuerySpendableBalancesRequestSDKType, QuerySpendableBalancesResponse, QuerySpendableBalancesResponseSDKType, QueryTotalSupplyRequest, QueryTotalSupplyRequestSDKType, QueryTotalSupplyResponse, QueryTotalSupplyResponseSDKType, QuerySupplyOfRequest, QuerySupplyOfRequestSDKType, QuerySupplyOfResponse, QuerySupplyOfResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDenomMetadataRequest, QueryDenomMetadataRequestSDKType, QueryDenomMetadataResponse, QueryDenomMetadataResponseSDKType, QueryDenomsMetadataRequest, QueryDenomsMetadataRequestSDKType, QueryDenomsMetadataResponse, QueryDenomsMetadataResponseSDKType, QueryDenomOwnersRequest, QueryDenomOwnersRequestSDKType, QueryDenomOwnersResponse, QueryDenomOwnersResponseSDKType } from "./query";
export const createGetBalance = (getRpcInstance: SigningClientResolver) => buildQuery<QueryBalanceRequest, QueryBalanceResponse>({
  encoder: QueryBalanceRequest.encode,
  decoder: QueryBalanceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Balance",
  getRpcInstance: getRpcInstance
});
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: createGetBalance,
  queryKeyPrefix: "BalanceQuery"
});
export const createGetAllBalances = (getRpcInstance: SigningClientResolver) => buildQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  encoder: QueryAllBalancesRequest.encode,
  decoder: QueryAllBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllBalances",
  getRpcInstance: getRpcInstance
});
export const useGetAllBalances = buildUseQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  builderQueryFn: createGetAllBalances,
  queryKeyPrefix: "AllBalancesQuery"
});
export const createGetSpendableBalances = (getRpcInstance: SigningClientResolver) => buildQuery<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>({
  encoder: QuerySpendableBalancesRequest.encode,
  decoder: QuerySpendableBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SpendableBalances",
  getRpcInstance: getRpcInstance
});
export const useGetSpendableBalances = buildUseQuery<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>({
  builderQueryFn: createGetSpendableBalances,
  queryKeyPrefix: "SpendableBalancesQuery"
});
export const createGetTotalSupply = (getRpcInstance: SigningClientResolver) => buildQuery<QueryTotalSupplyRequest, QueryTotalSupplyResponse>({
  encoder: QueryTotalSupplyRequest.encode,
  decoder: QueryTotalSupplyResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TotalSupply",
  getRpcInstance: getRpcInstance
});
export const useGetTotalSupply = buildUseQuery<QueryTotalSupplyRequest, QueryTotalSupplyResponse>({
  builderQueryFn: createGetTotalSupply,
  queryKeyPrefix: "TotalSupplyQuery"
});
export const createGetSupplyOf = (getRpcInstance: SigningClientResolver) => buildQuery<QuerySupplyOfRequest, QuerySupplyOfResponse>({
  encoder: QuerySupplyOfRequest.encode,
  decoder: QuerySupplyOfResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SupplyOf",
  getRpcInstance: getRpcInstance
});
export const useGetSupplyOf = buildUseQuery<QuerySupplyOfRequest, QuerySupplyOfResponse>({
  builderQueryFn: createGetSupplyOf,
  queryKeyPrefix: "SupplyOfQuery"
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
export const createGetDenomMetadata = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDenomMetadataRequest, QueryDenomMetadataResponse>({
  encoder: QueryDenomMetadataRequest.encode,
  decoder: QueryDenomMetadataResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomMetadata",
  getRpcInstance: getRpcInstance
});
export const useGetDenomMetadata = buildUseQuery<QueryDenomMetadataRequest, QueryDenomMetadataResponse>({
  builderQueryFn: createGetDenomMetadata,
  queryKeyPrefix: "DenomMetadataQuery"
});
export const createGetDenomsMetadata = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>({
  encoder: QueryDenomsMetadataRequest.encode,
  decoder: QueryDenomsMetadataResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomsMetadata",
  getRpcInstance: getRpcInstance
});
export const useGetDenomsMetadata = buildUseQuery<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>({
  builderQueryFn: createGetDenomsMetadata,
  queryKeyPrefix: "DenomsMetadataQuery"
});
export const createGetDenomOwners = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDenomOwnersRequest, QueryDenomOwnersResponse>({
  encoder: QueryDenomOwnersRequest.encode,
  decoder: QueryDenomOwnersResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DenomOwners",
  getRpcInstance: getRpcInstance
});
export const useGetDenomOwners = buildUseQuery<QueryDenomOwnersRequest, QueryDenomOwnersResponse>({
  builderQueryFn: createGetDenomOwners,
  queryKeyPrefix: "DenomOwnersQuery"
});