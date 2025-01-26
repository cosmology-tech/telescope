import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryFeeTokensRequest, QueryFeeTokensResponse, QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse, QueryDenomPoolIdRequest, QueryDenomPoolIdResponse, QueryBaseDenomRequest, QueryBaseDenomResponse } from "./query";
export const createGetFeeTokens = (clientResolver?: RpcResolver) => buildQuery<QueryFeeTokensRequest, QueryFeeTokensResponse>({
  encode: QueryFeeTokensRequest.encode,
  decode: QueryFeeTokensResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "FeeTokens",
  clientResolver
});
export const createGetDenomSpotPrice = (clientResolver?: RpcResolver) => buildQuery<QueryDenomSpotPriceRequest, QueryDenomSpotPriceResponse>({
  encode: QueryDenomSpotPriceRequest.encode,
  decode: QueryDenomSpotPriceResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "DenomSpotPrice",
  clientResolver
});
export const createGetDenomPoolId = (clientResolver?: RpcResolver) => buildQuery<QueryDenomPoolIdRequest, QueryDenomPoolIdResponse>({
  encode: QueryDenomPoolIdRequest.encode,
  decode: QueryDenomPoolIdResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "DenomPoolId",
  clientResolver
});
export const createGetBaseDenom = (clientResolver?: RpcResolver) => buildQuery<QueryBaseDenomRequest, QueryBaseDenomResponse>({
  encode: QueryBaseDenomRequest.encode,
  decode: QueryBaseDenomResponse.decode,
  service: "osmosis.txfees.v1beta1.Query",
  method: "BaseDenom",
  clientResolver
});