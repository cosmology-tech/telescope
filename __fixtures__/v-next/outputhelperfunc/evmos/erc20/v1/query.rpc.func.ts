import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairSDKType } from "./erc20";
import { Params, ParamsSDKType } from "./genesis";
import { SigningClientResolver } from "../../../helper-func-types";
import { QueryTokenPairsRequest, QueryTokenPairsRequestSDKType, QueryTokenPairsResponse, QueryTokenPairsResponseSDKType, QueryTokenPairRequest, QueryTokenPairRequestSDKType, QueryTokenPairResponse, QueryTokenPairResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export const createGetTokenPairs = (getRpcInstance: SigningClientResolver) => buildQuery<QueryTokenPairsRequest, QueryTokenPairsResponse>({
  encoder: QueryTokenPairsRequest.encode,
  decoder: QueryTokenPairsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TokenPairs",
  getRpcInstance: getRpcInstance
});
export const useGetTokenPairs = buildUseQuery<QueryTokenPairsRequest, QueryTokenPairsResponse>({
  builderQueryFn: createGetTokenPairs,
  queryKeyPrefix: "TokenPairsQuery"
});
export const createGetTokenPair = (getRpcInstance: SigningClientResolver) => buildQuery<QueryTokenPairRequest, QueryTokenPairResponse>({
  encoder: QueryTokenPairRequest.encode,
  decoder: QueryTokenPairResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "TokenPair",
  getRpcInstance: getRpcInstance
});
export const useGetTokenPair = buildUseQuery<QueryTokenPairRequest, QueryTokenPairResponse>({
  builderQueryFn: createGetTokenPair,
  queryKeyPrefix: "TokenPairQuery"
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