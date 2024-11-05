import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryPaymentsRequest, QueryPaymentsResponse } from "./query";
export const createGetAccounts = (clientResolver?: RpcResolver) => buildQuery<QueryAccountsRequest, QueryAccountsResponse>({
  encode: QueryAccountsRequest.encode,
  decode: QueryAccountsResponse.decode,
  service: "akash.escrow.v1beta2.Query",
  method: "Accounts",
  clientResolver
});
export const useGetAccounts = buildUseQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: createGetAccounts,
  queryKeyPrefix: "AccountsQuery"
});
export const createGetPayments = (clientResolver?: RpcResolver) => buildQuery<QueryPaymentsRequest, QueryPaymentsResponse>({
  encode: QueryPaymentsRequest.encode,
  decode: QueryPaymentsResponse.decode,
  service: "akash.escrow.v1beta2.Query",
  method: "Payments",
  clientResolver
});
export const useGetPayments = buildUseQuery<QueryPaymentsRequest, QueryPaymentsResponse>({
  builderQueryFn: createGetPayments,
  queryKeyPrefix: "PaymentsQuery"
});