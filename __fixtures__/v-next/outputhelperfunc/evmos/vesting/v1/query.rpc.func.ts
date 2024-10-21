import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { SigningClientResolver } from "../../../helper-func-types";
import { QueryBalancesRequest, QueryBalancesRequestSDKType, QueryBalancesResponse, QueryBalancesResponseSDKType } from "./query";
export const createGetBalances = (getRpcInstance: SigningClientResolver) => buildQuery<QueryBalancesRequest, QueryBalancesResponse>({
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