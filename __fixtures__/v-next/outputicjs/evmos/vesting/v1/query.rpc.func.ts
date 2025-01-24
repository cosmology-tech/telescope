import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryBalancesRequest, QueryBalancesResponse } from "./query";
export const createGetBalances = (clientResolver?: RpcResolver) => buildQuery<QueryBalancesRequest, QueryBalancesResponse>({
  encode: QueryBalancesRequest.encode,
  decode: QueryBalancesResponse.decode,
  service: "evmos.vesting.v1.Query",
  method: "Balances",
  clientResolver
});