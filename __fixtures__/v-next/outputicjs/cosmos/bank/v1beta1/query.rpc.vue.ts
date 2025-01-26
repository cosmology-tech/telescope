import { buildUseVueQuery } from "../../../vue-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryAllBalancesRequest, QueryAllBalancesResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryParamsRequest, QueryParamsResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryDenomOwnersRequest, QueryDenomOwnersResponse } from "./query";
import { createGetBalance, createGetAllBalances, createGetSpendableBalances, createGetTotalSupply, createGetSupplyOf, createGetParams, createGetDenomMetadata, createGetDenomsMetadata, createGetDenomOwners } from "./query.rpc.func.ts";
export const useGetBalance = buildUseVueQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: createGetBalance,
  queryKeyPrefix: "BalanceQuery"
});
export const useGetAllBalances = buildUseVueQuery<QueryAllBalancesRequest, QueryAllBalancesResponse>({
  builderQueryFn: createGetAllBalances,
  queryKeyPrefix: "AllBalancesQuery"
});
export const useGetSpendableBalances = buildUseVueQuery<QuerySpendableBalancesRequest, QuerySpendableBalancesResponse>({
  builderQueryFn: createGetSpendableBalances,
  queryKeyPrefix: "SpendableBalancesQuery"
});
export const useGetTotalSupply = buildUseVueQuery<QueryTotalSupplyRequest, QueryTotalSupplyResponse>({
  builderQueryFn: createGetTotalSupply,
  queryKeyPrefix: "TotalSupplyQuery"
});
export const useGetSupplyOf = buildUseVueQuery<QuerySupplyOfRequest, QuerySupplyOfResponse>({
  builderQueryFn: createGetSupplyOf,
  queryKeyPrefix: "SupplyOfQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetDenomMetadata = buildUseVueQuery<QueryDenomMetadataRequest, QueryDenomMetadataResponse>({
  builderQueryFn: createGetDenomMetadata,
  queryKeyPrefix: "DenomMetadataQuery"
});
export const useGetDenomsMetadata = buildUseVueQuery<QueryDenomsMetadataRequest, QueryDenomsMetadataResponse>({
  builderQueryFn: createGetDenomsMetadata,
  queryKeyPrefix: "DenomsMetadataQuery"
});
export const useGetDenomOwners = buildUseVueQuery<QueryDenomOwnersRequest, QueryDenomOwnersResponse>({
  builderQueryFn: createGetDenomOwners,
  queryKeyPrefix: "DenomOwnersQuery"
});