import { buildUseVueQuery } from "../../../vue-query";
import { QueryBalancesRequest, QueryBalancesResponse } from "./query";
import { createGetBalances } from "./query.rpc.func.ts";
export const useGetBalances = buildUseVueQuery<QueryBalancesRequest, QueryBalancesResponse>({
  builderQueryFn: createGetBalances,
  queryKeyPrefix: "BalancesQuery"
});