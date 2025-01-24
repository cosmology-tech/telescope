import { buildUseQuery } from "../../../react-query";
import { ParamsRequest, ParamsResponse, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse } from "./query";
import { createGetParams, createGetArithmeticTwap, createGetArithmeticTwapToNow } from "./query.rpc.func.ts";
export const useGetParams = buildUseQuery<ParamsRequest, ParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetArithmeticTwap = buildUseQuery<ArithmeticTwapRequest, ArithmeticTwapResponse>({
  builderQueryFn: createGetArithmeticTwap,
  queryKeyPrefix: "ArithmeticTwapQuery"
});
export const useGetArithmeticTwapToNow = buildUseQuery<ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse>({
  builderQueryFn: createGetArithmeticTwapToNow,
  queryKeyPrefix: "ArithmeticTwapToNowQuery"
});