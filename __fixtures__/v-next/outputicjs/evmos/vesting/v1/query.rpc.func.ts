import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryBalancesRequest, QueryBalancesResponse } from "./query";
export const createGetBalances = (getRpcInstance: RpcResolver) => buildQuery<QueryBalancesRequest, QueryBalancesResponse>({
  encoder: QueryBalancesRequest.encode,
  decoder: QueryBalancesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Balances",
  getRpcInstance: getRpcInstance
});
export const useGetBalances = buildUseQuery<QueryBalancesRequest, QueryBalancesResponse>({
  builderQueryFn: createGetBalances,
  queryKeyPrefix: "BalancesQuery"
});