import { buildUseVueQuery } from "../../../vue-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryPaymentsRequest, QueryPaymentsResponse } from "./query";
import { createGetAccounts, createGetPayments } from "./query.rpc.func.ts";
export const useGetAccounts = buildUseVueQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: createGetAccounts,
  queryKeyPrefix: "AccountsQuery"
});
export const useGetPayments = buildUseVueQuery<QueryPaymentsRequest, QueryPaymentsResponse>({
  builderQueryFn: createGetPayments,
  queryKeyPrefix: "PaymentsQuery"
});