import { SigningClientResolver } from "../../../helpers";
import { QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType } from "./query";
export const createGetSpotPrice = (getRpcInstance: SigningClientResolver) => buildQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  encoder: QuerySpotPriceRequest.encode,
  decoder: QuerySpotPriceResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "SpotPrice",
  getRpcInstance: getRpcInstance
});
export const useGetSpotPrice = buildUseQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  builderQueryFn: createGetSpotPrice,
  queryKeyPrefix: "SpotPriceQuery"
});