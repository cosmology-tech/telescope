import { buildUseQuery } from "../../../react-query";
import { QueryBalanceRequest, QueryBalanceResponse, QueryOwnerRequest, QueryOwnerResponse, QuerySupplyRequest, QuerySupplyResponse, QueryNFTsRequest, QueryNFTsResponse, QueryNFTRequest, QueryNFTResponse, QueryClassRequest, QueryClassResponse, QueryClassesRequest, QueryClassesResponse } from "./query";
import { createGetBalance, createGetOwner, createGetSupply, createGetNFTs, createGetNFT, createGetClass, createGetClasses } from "./query.rpc.func.ts";
export const useGetBalance = buildUseQuery<QueryBalanceRequest, QueryBalanceResponse>({
  builderQueryFn: createGetBalance,
  queryKeyPrefix: "BalanceQuery"
});
export const useGetOwner = buildUseQuery<QueryOwnerRequest, QueryOwnerResponse>({
  builderQueryFn: createGetOwner,
  queryKeyPrefix: "OwnerQuery"
});
export const useGetSupply = buildUseQuery<QuerySupplyRequest, QuerySupplyResponse>({
  builderQueryFn: createGetSupply,
  queryKeyPrefix: "SupplyQuery"
});
export const useGetNFTs = buildUseQuery<QueryNFTsRequest, QueryNFTsResponse>({
  builderQueryFn: createGetNFTs,
  queryKeyPrefix: "NFTsQuery"
});
export const useGetNFT = buildUseQuery<QueryNFTRequest, QueryNFTResponse>({
  builderQueryFn: createGetNFT,
  queryKeyPrefix: "NFTQuery"
});
export const useGetClass = buildUseQuery<QueryClassRequest, QueryClassResponse>({
  builderQueryFn: createGetClass,
  queryKeyPrefix: "ClassQuery"
});
export const useGetClasses = buildUseQuery<QueryClassesRequest, QueryClassesResponse>({
  builderQueryFn: createGetClasses,
  queryKeyPrefix: "ClassesQuery"
});