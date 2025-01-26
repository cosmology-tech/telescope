import { buildUseQuery } from "../../../react-query";
import { QuerySpotPriceRequest, QuerySpotPriceResponse } from "./query";
import { createGetSpotPrice } from "./query.rpc.func";
export const useGetSpotPrice = buildUseQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  builderQueryFn: createGetSpotPrice,
  queryKeyPrefix: "SpotPriceQuery"
});