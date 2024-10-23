import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { TokenPair, TokenPairSDKType } from "./erc20";
import { Params, ParamsSDKType } from "./genesis";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryTokenPairsRequest, QueryTokenPairsRequestSDKType, QueryTokenPairsResponse, QueryTokenPairsResponseSDKType, QueryTokenPairRequest, QueryTokenPairRequestSDKType, QueryTokenPairResponse, QueryTokenPairResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export const createGetTokenPairs = (getRpcInstance: RpcResolver) => buildQuery<QueryTokenPairsRequest, QueryTokenPairsResponse>({
  encode: QueryTokenPairsRequest.encode,
  decode: QueryTokenPairsResponse.decode,
  service: "evmos.erc20.v1.TokenPairs",
  method: "TokenPairs",
  getRpcInstance: getRpcInstance
});
export const useGetTokenPairs = buildUseQuery<QueryTokenPairsRequest, QueryTokenPairsResponse>({
  builderQueryFn: createGetTokenPairs,
  queryKeyPrefix: "TokenPairsQuery"
});
export const createGetTokenPair = (getRpcInstance: RpcResolver) => buildQuery<QueryTokenPairRequest, QueryTokenPairResponse>({
  encode: QueryTokenPairRequest.encode,
  decode: QueryTokenPairResponse.decode,
  service: "evmos.erc20.v1.TokenPair",
  method: "TokenPair",
  getRpcInstance: getRpcInstance
});
export const useGetTokenPair = buildUseQuery<QueryTokenPairRequest, QueryTokenPairResponse>({
  builderQueryFn: createGetTokenPair,
  queryKeyPrefix: "TokenPairQuery"
});
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.erc20.v1.Params",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});