import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { ParamsRequest, ParamsResponse, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse } from "./query";
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<ParamsRequest, ParamsResponse>({
  encode: ParamsRequest.encode,
  decode: ParamsResponse.decode,
  service: "osmosis.twap.v1beta1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<ParamsRequest, ParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetArithmeticTwap = (getRpcInstance: RpcResolver) => buildQuery<ArithmeticTwapRequest, ArithmeticTwapResponse>({
  encode: ArithmeticTwapRequest.encode,
  decode: ArithmeticTwapResponse.decode,
  service: "osmosis.twap.v1beta1.Query",
  method: "ArithmeticTwap",
  getRpcInstance: getRpcInstance
});
export const useGetArithmeticTwap = buildUseQuery<ArithmeticTwapRequest, ArithmeticTwapResponse>({
  builderQueryFn: createGetArithmeticTwap,
  queryKeyPrefix: "ArithmeticTwapQuery"
});
export const createGetArithmeticTwapToNow = (getRpcInstance: RpcResolver) => buildQuery<ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse>({
  encode: ArithmeticTwapToNowRequest.encode,
  decode: ArithmeticTwapToNowResponse.decode,
  service: "osmosis.twap.v1beta1.Query",
  method: "ArithmeticTwapToNow",
  getRpcInstance: getRpcInstance
});
export const useGetArithmeticTwapToNow = buildUseQuery<ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse>({
  builderQueryFn: createGetArithmeticTwapToNow,
  queryKeyPrefix: "ArithmeticTwapToNowQuery"
});