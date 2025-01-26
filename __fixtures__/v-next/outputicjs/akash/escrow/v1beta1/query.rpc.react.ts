import { buildUseQuery } from "../../../react-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryPaymentsRequest, QueryPaymentsResponse } from "./query";
import { createGetAccounts, createGetPayments } from "./query.rpc.func";
export const useGetAccounts = buildUseQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: createGetAccounts,
  queryKeyPrefix: "AccountsQuery"
});
export const useGetPayments = buildUseQuery<QueryPaymentsRequest, QueryPaymentsResponse>({
  builderQueryFn: createGetPayments,
  queryKeyPrefix: "PaymentsQuery"
});