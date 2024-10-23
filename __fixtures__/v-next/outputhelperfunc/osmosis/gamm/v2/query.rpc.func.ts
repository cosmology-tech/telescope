import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QuerySpotPriceRequest, QuerySpotPriceRequestSDKType, QuerySpotPriceResponse, QuerySpotPriceResponseSDKType } from "./query";
export const createGetSpotPrice = (getRpcInstance: RpcResolver) => buildQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  encode: QuerySpotPriceRequest.encode,
  decode: QuerySpotPriceResponse.decode,
  service: "osmosis.gamm.v2.SpotPrice",
  method: "SpotPrice",
  getRpcInstance: getRpcInstance
});
export const useGetSpotPrice = buildUseQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  builderQueryFn: createGetSpotPrice,
  queryKeyPrefix: "SpotPriceQuery"
});