import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, AccountSDKType, FractionalPayment, FractionalPaymentSDKType } from "./types";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryPaymentsRequest, QueryPaymentsRequestSDKType, QueryPaymentsResponse, QueryPaymentsResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  /*buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
  Accounts queries all accounts*/

  payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse>;
  /*buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
  Payments queries all payments*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  /* buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
  Accounts queries all accounts */
  accounts = async (request: QueryAccountsRequest): Promise<QueryAccountsResponse> => {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.escrow.v1beta2.Query", "Accounts", data);
    return promise.then(data => QueryAccountsResponse.decode(new _m0.Reader(data)));
  };

  /* buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
  buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
  Payments queries all payments */
  payments = async (request: QueryPaymentsRequest): Promise<QueryPaymentsResponse> => {
    const data = QueryPaymentsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.escrow.v1beta2.Query", "Payments", data);
    return promise.then(data => QueryPaymentsResponse.decode(new _m0.Reader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse> {
      return queryService.accounts(request);
    },

    payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse> {
      return queryService.payments(request);
    }

  };
};