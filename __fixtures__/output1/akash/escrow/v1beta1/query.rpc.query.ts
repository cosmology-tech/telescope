import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, AccountSDKType, Payment, PaymentSDKType } from "./types";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryPaymentsRequest, QueryPaymentsRequestSDKType, QueryPaymentsResponse, QueryPaymentsResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponseSDKType>;
  /*buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
  Accounts queries all accounts*/

  payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponseSDKType>;
  /*buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
  Payments queries all payments*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  accounts = async (request: QueryAccountsRequest): Promise<QueryAccountsResponseSDKType> => {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.escrow.v1beta1.Query", "Accounts", data);
    return promise.then(data => QueryAccountsResponse.decode(new _m0.Reader(data)));
  };
  payments = async (request: QueryPaymentsRequest): Promise<QueryPaymentsResponseSDKType> => {
    const data = QueryPaymentsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.escrow.v1beta1.Query", "Payments", data);
    return promise.then(data => QueryPaymentsResponse.decode(new _m0.Reader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponseSDKType> {
      return queryService.accounts(request);
    },

    payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponseSDKType> {
      return queryService.payments(request);
    }

  };
};