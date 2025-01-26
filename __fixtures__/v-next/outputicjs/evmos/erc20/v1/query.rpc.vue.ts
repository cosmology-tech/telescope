import { buildUseVueQuery } from "../../../vue-query";
import { QueryTokenPairsRequest, QueryTokenPairsResponse, QueryTokenPairRequest, QueryTokenPairResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { createGetTokenPairs, createGetTokenPair, createGetParams } from "./query.rpc.func.ts";
export const useGetTokenPairs = buildUseVueQuery<QueryTokenPairsRequest, QueryTokenPairsResponse>({
  builderQueryFn: createGetTokenPairs,
  queryKeyPrefix: "TokenPairsQuery"
});
export const useGetTokenPair = buildUseVueQuery<QueryTokenPairRequest, QueryTokenPairResponse>({
  builderQueryFn: createGetTokenPair,
  queryKeyPrefix: "TokenPairQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});