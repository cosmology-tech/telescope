import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryTokenPairsRequest, QueryTokenPairsResponse, QueryTokenPairRequest, QueryTokenPairResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export const createGetTokenPairs = (clientResolver?: RpcResolver) => buildQuery<QueryTokenPairsRequest, QueryTokenPairsResponse>({
  encode: QueryTokenPairsRequest.encode,
  decode: QueryTokenPairsResponse.decode,
  service: "evmos.erc20.v1.Query",
  method: "TokenPairs",
  clientResolver
});
export const createGetTokenPair = (clientResolver?: RpcResolver) => buildQuery<QueryTokenPairRequest, QueryTokenPairResponse>({
  encode: QueryTokenPairRequest.encode,
  decode: QueryTokenPairResponse.decode,
  service: "evmos.erc20.v1.Query",
  method: "TokenPair",
  clientResolver
});
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.erc20.v1.Query",
  method: "Params",
  clientResolver
});