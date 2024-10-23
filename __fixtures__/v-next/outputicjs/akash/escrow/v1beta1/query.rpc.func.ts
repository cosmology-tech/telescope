import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryAccountsRequest, QueryAccountsResponse, QueryPaymentsRequest, QueryPaymentsResponse } from "./query";
export const createGetAccounts = (getRpcInstance: RpcResolver) => buildQuery<QueryAccountsRequest, QueryAccountsResponse>({
  encode: QueryAccountsRequest.encode,
  decode: QueryAccountsResponse.decode,
  service: "akash.escrow.v1beta1.Accounts",
  method: "Accounts",
  getRpcInstance: getRpcInstance
});
export const useGetAccounts = buildUseQuery<QueryAccountsRequest, QueryAccountsResponse>({
  builderQueryFn: createGetAccounts,
  queryKeyPrefix: "AccountsQuery"
});
export const createGetPayments = (getRpcInstance: RpcResolver) => buildQuery<QueryPaymentsRequest, QueryPaymentsResponse>({
  encode: QueryPaymentsRequest.encode,
  decode: QueryPaymentsResponse.decode,
  service: "akash.escrow.v1beta1.Payments",
  method: "Payments",
  getRpcInstance: getRpcInstance
});
export const useGetPayments = buildUseQuery<QueryPaymentsRequest, QueryPaymentsResponse>({
  builderQueryFn: createGetPayments,
  queryKeyPrefix: "PaymentsQuery"
});