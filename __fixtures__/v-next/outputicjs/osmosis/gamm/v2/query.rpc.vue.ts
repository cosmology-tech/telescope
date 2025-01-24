import { buildUseVueQuery } from "../../../vue-query";
import { QuerySpotPriceRequest, QuerySpotPriceResponse } from "./query";
import { createGetSpotPrice } from "./query.rpc.func.ts";
export const useGetSpotPrice = buildUseVueQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  builderQueryFn: createGetSpotPrice,
  queryKeyPrefix: "SpotPriceQuery"
});