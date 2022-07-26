import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryBalancesRequest, QueryBalancesResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  balances(request: QueryBalancesRequest): Promise<QueryBalancesResponse>;
  /*Retrieves the unvested, vested and locked tokens for a vesting account*/

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