import { Coin, CoinAmino, CoinAminoType, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryBalancesRequest, QueryBalancesRequestAmino, QueryBalancesRequestAminoType, QueryBalancesRequestSDKType, QueryBalancesResponse, QueryBalancesResponseAmino, QueryBalancesResponseAminoType, QueryBalancesResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves the unvested, vested and locked tokens for a vesting account */
  balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.balances = this.balances.bind(this);
  }

  balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse> {
    const data = QueryBalancesRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.vesting.v1.Query", "Balances", data);
    return promise.then(data => QueryBalancesResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse> {
      return queryService.balances(request);
    }

  };
};