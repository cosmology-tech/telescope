import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryBalancesRequest, QueryBalancesRequestSDKType, QueryBalancesResponse, QueryBalancesResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves the unvested, vested and locked tokens for a vesting account */
  Balances(request: DeepPartial<QueryBalancesRequest>, metadata?: grpc.Metadata): Promise<QueryBalancesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.balances = this.balances.bind(this);
  }

  balances(request: DeepPartial<QueryBalancesRequest>, metadata?: grpc.Metadata): Promise<QueryBalancesResponse> {
    return this.rpc.unary(QueryBalancesDesc, QueryBalancesRequest.fromPartial(request), metadata);
  }

}