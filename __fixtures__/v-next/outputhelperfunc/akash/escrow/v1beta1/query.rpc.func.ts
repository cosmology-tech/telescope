import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Account, AccountSDKType, Payment, PaymentSDKType } from "./types";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryAccountsRequest, QueryAccountsRequestSDKType, QueryAccountsResponse, QueryAccountsResponseSDKType, QueryPaymentsRequest, QueryPaymentsRequestSDKType, QueryPaymentsResponse, QueryPaymentsResponseSDKType } from "./query";
export const createGetAccounts = (getRpcInstance: RpcResolver) => buildQuery<QueryAccountsRequest, QueryAccountsResponse>({
  encoder: QueryAccountsRequest.encode,
  decoder: QueryAccountsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Accounts",
  getRpcInstance: getRpcInstance
});
export const useGetAccounts = buildUseQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: createGetAccounts,
  queryKeyPrefix: "AccountsQuery"
});
export const createGetPayments = (getRpcInstance: RpcResolver) => buildQuery<QueryPaymentsRequest, QueryPaymentsResponse>({
  encoder: QueryPaymentsRequest.encode,
  decoder: QueryPaymentsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Payments",
  getRpcInstance: getRpcInstance
});
export const useGetPayments = buildUseQuery<QueryPaymentsRequest, QueryPaymentsResponse>({
  builderQueryFn: createGetPayments,
  queryKeyPrefix: "PaymentsQuery"
});