import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryBalancesRequest, QueryBalancesRequestSDKType, QueryBalancesResponse, QueryBalancesResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves the unvested, vested and locked tokens for a vesting account */
  balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* Retrieves the unvested, vested and locked tokens for a vesting account */
  balances = async (request: QueryBalancesRequest): Promise<QueryBalancesResponse> => {
    const data = QueryBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.vesting.v1.Query", "Balances", data);
    return promise.then(data => QueryBalancesResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new QueryClientImpl(rpc);
};