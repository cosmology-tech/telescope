import { buildUseQuery } from "../../../react-query";
import { QueryTokenPairsRequest, QueryTokenPairsResponse, QueryTokenPairRequest, QueryTokenPairResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { createGetTokenPairs, createGetTokenPair, createGetParams } from "./query.rpc.func.ts";
export const useGetTokenPairs = buildUseQuery<QueryTokenPairsRequest, QueryTokenPairsResponse>({
  builderQueryFn: createGetTokenPairs,
  queryKeyPrefix: "TokenPairsQuery"
});
export const useGetTokenPair = buildUseQuery<QueryTokenPairRequest, QueryTokenPairResponse>({
  builderQueryFn: createGetTokenPair,
  queryKeyPrefix: "TokenPairQuery"
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});