import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsSDKType } from "./genesis";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType, ArithmeticTwapRequest, ArithmeticTwapRequestSDKType, ArithmeticTwapResponse, ArithmeticTwapResponseSDKType, ArithmeticTwapToNowRequest, ArithmeticTwapToNowRequestSDKType, ArithmeticTwapToNowResponse, ArithmeticTwapToNowResponseSDKType } from "./query";
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<ParamsRequest, ParamsResponse>({
  encode: ParamsRequest.encode,
  decode: ParamsResponse.decode,
  service: "osmosis.twap.v1beta1.Params",
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
  service: "osmosis.twap.v1beta1.ArithmeticTwap",
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
  service: "osmosis.twap.v1beta1.ArithmeticTwapToNow",
  method: "ArithmeticTwapToNow",
  getRpcInstance: getRpcInstance
});
export const useGetArithmeticTwapToNow = buildUseQuery<ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse>({
  builderQueryFn: createGetArithmeticTwapToNow,
  queryKeyPrefix: "ArithmeticTwapToNowQuery"
});