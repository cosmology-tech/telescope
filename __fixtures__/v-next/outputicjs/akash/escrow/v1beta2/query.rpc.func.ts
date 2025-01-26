import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryAccountsRequest, QueryAccountsResponse, QueryPaymentsRequest, QueryPaymentsResponse } from "./query";
export const createGetAccounts = (clientResolver?: RpcResolver) => buildQuery<QueryAccountsRequest, QueryAccountsResponse>({
  encode: QueryAccountsRequest.encode,
  decode: QueryAccountsResponse.decode,
  service: "akash.escrow.v1beta2.Query",
  method: "Accounts",
  clientResolver
});
export const createGetPayments = (clientResolver?: RpcResolver) => buildQuery<QueryPaymentsRequest, QueryPaymentsResponse>({
  encode: QueryPaymentsRequest.encode,
  decode: QueryPaymentsResponse.decode,
  service: "akash.escrow.v1beta2.Query",
  method: "Payments",
  clientResolver
});