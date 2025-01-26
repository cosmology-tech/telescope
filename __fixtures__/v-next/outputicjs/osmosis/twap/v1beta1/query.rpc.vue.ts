import { buildUseVueQuery } from "../../../vue-query";
import { ParamsRequest, ParamsResponse, ArithmeticTwapRequest, ArithmeticTwapResponse, ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse } from "./query";
import { createGetParams, createGetArithmeticTwap, createGetArithmeticTwapToNow } from "./query.rpc.func.ts";
export const useGetParams = buildUseVueQuery<ParamsRequest, ParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetArithmeticTwap = buildUseVueQuery<ArithmeticTwapRequest, ArithmeticTwapResponse>({
  builderQueryFn: createGetArithmeticTwap,
  queryKeyPrefix: "ArithmeticTwapQuery"
});
export const useGetArithmeticTwapToNow = buildUseVueQuery<ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse>({
  builderQueryFn: createGetArithmeticTwapToNow,
  queryKeyPrefix: "ArithmeticTwapToNowQuery"
});