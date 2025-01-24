import { buildUseQuery } from "../../../react-query";
import { QuerySpotPriceRequest, QuerySpotPriceResponse } from "./query";
import { createGetSpotPrice } from "./query.rpc.func.ts";
export const useGetSpotPrice = buildUseQuery<QuerySpotPriceRequest, QuerySpotPriceResponse>({
  builderQueryFn: createGetSpotPrice,
  queryKeyPrefix: "SpotPriceQuery"
});