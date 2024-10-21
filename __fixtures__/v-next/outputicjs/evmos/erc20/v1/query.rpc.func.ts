import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryTokenPairsRequest, QueryTokenPairsResponse, QueryTokenPairRequest, QueryTokenPairResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export const createGetTokenPairs = (getRpcInstance: RpcResolver) => buildQuery<QueryTokenPairsRequest, QueryTokenPairsResponse>({
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
export const createGetTokenPair = (getRpcInstance: RpcResolver) => buildQuery<QueryTokenPairRequest, QueryTokenPairResponse>({
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
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
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