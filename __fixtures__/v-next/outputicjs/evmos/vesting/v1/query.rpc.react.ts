import { buildUseQuery } from "../../../react-query";
import { QueryBalancesRequest, QueryBalancesResponse } from "./query";
import { createGetBalances } from "./query.rpc.func";
export const useGetBalances = buildUseQuery<QueryBalancesRequest, QueryBalancesResponse>({
  builderQueryFn: createGetBalances,
  queryKeyPrefix: "BalancesQuery"
});