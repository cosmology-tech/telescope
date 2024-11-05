import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { ParamsRequest, ParamsResponse, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<ParamsRequest, ParamsResponse>({
  encode: ParamsRequest.encode,
  decode: ParamsResponse.decode,
  service: "osmosis.twap.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<ParamsRequest, ParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetArithmeticTwap = (clientResolver?: RpcResolver) => buildQuery<ArithmeticTwapRequest, ArithmeticTwapResponse>({
  encode: ArithmeticTwapRequest.encode,
  decode: ArithmeticTwapResponse.decode,
  service: "osmosis.twap.v1beta1.Query",
  method: "ArithmeticTwap",
  clientResolver
});
export const useGetArithmeticTwap = buildUseQuery<ArithmeticTwapRequest, ArithmeticTwapResponse>({
  builderQueryFn: createGetArithmeticTwap,
  queryKeyPrefix: "ArithmeticTwapQuery"
});
export const createGetArithmeticTwapToNow = (clientResolver?: RpcResolver) => buildQuery<ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse>({
  encode: ArithmeticTwapToNowRequest.encode,
  decode: ArithmeticTwapToNowResponse.decode,
  service: "osmosis.twap.v1beta1.Query",
  method: "ArithmeticTwapToNow",
  clientResolver
});
export const useGetArithmeticTwapToNow = buildUseQuery<ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse>({
  builderQueryFn: createGetArithmeticTwapToNow,
  queryKeyPrefix: "ArithmeticTwapToNowQuery"
});