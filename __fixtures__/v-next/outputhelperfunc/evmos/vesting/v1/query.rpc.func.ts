import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryBalancesRequest, QueryBalancesRequestSDKType, QueryBalancesResponse, QueryBalancesResponseSDKType } from "./query";
export const createGetBalances = (getRpcInstance: RpcResolver) => buildQuery<QueryBalancesRequest, QueryBalancesResponse>({
  encode: QueryBalancesRequest.encode,
  decode: QueryBalancesResponse.decode,
  service: "evmos.vesting.v1.Balances",
  method: "Balances",
  getRpcInstance: getRpcInstance
});
export const useGetBalances = buildUseQuery<QueryBalancesRequest, QueryBalancesResponse>({
  builderQueryFn: createGetBalances,
  queryKeyPrefix: "BalancesQuery"
});