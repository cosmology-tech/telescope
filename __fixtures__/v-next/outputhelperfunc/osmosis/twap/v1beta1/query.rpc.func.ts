import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Params, ParamsSDKType } from "./genesis";
import { SigningClientResolver } from "../../../helpers";
import { ParamsRequest, ParamsRequestSDKType, ParamsResponse, ParamsResponseSDKType, ArithmeticTwapRequest, ArithmeticTwapRequestSDKType, ArithmeticTwapResponse, ArithmeticTwapResponseSDKType, ArithmeticTwapToNowRequest, ArithmeticTwapToNowRequestSDKType, ArithmeticTwapToNowResponse, ArithmeticTwapToNowResponseSDKType } from "./query";
export const createGetParams = (getRpcInstance: SigningClientResolver) => buildQuery<ParamsRequest, ParamsResponse>({
  encoder: ParamsRequest.encode,
  decoder: ParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<ParamsRequest, ParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetArithmeticTwap = (getRpcInstance: SigningClientResolver) => buildQuery<ArithmeticTwapRequest, ArithmeticTwapResponse>({
  encoder: ArithmeticTwapRequest.encode,
  decoder: ArithmeticTwapResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ArithmeticTwap",
  getRpcInstance: getRpcInstance
});
export const useGetArithmeticTwap = buildUseQuery<ArithmeticTwapRequest, ArithmeticTwapResponse>({
  builderQueryFn: createGetArithmeticTwap,
  queryKeyPrefix: "ArithmeticTwapQuery"
});
export const createGetArithmeticTwapToNow = (getRpcInstance: SigningClientResolver) => buildQuery<ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse>({
  encoder: ArithmeticTwapToNowRequest.encode,
  decoder: ArithmeticTwapToNowResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "ArithmeticTwapToNow",
  getRpcInstance: getRpcInstance
});
export const useGetArithmeticTwapToNow = buildUseQuery<ArithmeticTwapToNowRequest, ArithmeticTwapToNowResponse>({
  builderQueryFn: createGetArithmeticTwapToNow,
  queryKeyPrefix: "ArithmeticTwapToNowQuery"
});