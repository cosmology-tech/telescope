import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, AccountSDKType, Payment, PaymentSDKType } from "./types";
import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { ReactQueryParams } from "../../../react-query";
import { useQuery } from "@tanstack/react-query";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryPaymentsRequest, QueryPaymentsRequestSDKType, QueryPaymentsResponse, QueryPaymentsResponseSDKType } from "./query";

/** Query defines the gRPC querier service */
export interface Query {
  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Accounts queries all accounts
   */
  accounts(request: QueryAccountsRequest): Promise<QueryAccountsResponse>;

  /**
   * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   * Payments queries all payments
   */
  payments(request: QueryPaymentsRequest): Promise<QueryPaymentsResponse>;
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
    const promise = this.rpc.request("akash.escrow.v1beta1.Query", "Accounts", data);
    return promise.then(data => QueryAccountsResponse.decode(new _m0.Reader(data)));
  };

  /* buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   Payments queries all payments */
  payments = async (request: QueryPaymentsRequest): Promise<QueryPaymentsResponse> => {
    const data = QueryPaymentsRequest.encode(request).finish();
    const promise = this.rpc.request("akash.escrow.v1beta1.Query", "Payments", data);
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
export interface UseAccountsQuery<TData> extends ReactQueryParams<QueryAccountsResponse, TData> {
  request: QueryAccountsRequest;
}
export interface UsePaymentsQuery<TData> extends ReactQueryParams<QueryPaymentsResponse, TData> {
  request: QueryPaymentsRequest;
}

const _queryClients: WeakMap<ProtobufRpcClient, QueryClientImpl> = new WeakMap();

const getQueryService = (rpc: ProtobufRpcClient | undefined): QueryClientImpl | undefined => {
  if (!rpc) return;

  if (_queryClients.has(rpc)) {
    return _queryClients.get(rpc);
  }

  const queryService = new QueryClientImpl(rpc);

  _queryClients.set(rpc, queryService);

  return queryService;
};

export const createRpcQueryHooks = (rpc: ProtobufRpcClient | undefined) => {
  const queryService = getQueryService(rpc);

  const useAccounts = ({
    request,
    options
  }: UseAccountsQuery<TData>) => {
    return useQuery<QueryAccountsResponse, Error, TData>(["accountsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.accounts(request);
    }, options);
  };

  const usePayments = ({
    request,
    options
  }: UsePaymentsQuery<TData>) => {
    return useQuery<QueryPaymentsResponse, Error, TData>(["paymentsQuery", request], () => {
      if (!queryService) throw new Error("Query Service not initialized");
      return queryService.payments(request);
    }, options);
  };

  return {
    /**
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Accounts queries all accounts
     */
    useAccounts,

    /**
     * buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
     * buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
     * Payments queries all payments
     */
    usePayments
  };
};