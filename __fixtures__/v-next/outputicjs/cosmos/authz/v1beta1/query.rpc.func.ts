import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryGrantsRequest, QueryGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGranteeGrantsRequest, QueryGranteeGrantsResponse } from "./query";
export const createGetGrants = (clientResolver?: RpcResolver) => buildQuery<QueryGrantsRequest, QueryGrantsResponse>({
  encode: QueryGrantsRequest.encode,
  decode: QueryGrantsResponse.decode,
  service: "cosmos.authz.v1beta1.Query",
  method: "Grants",
  clientResolver
});
export const createGetGranterGrants = (clientResolver?: RpcResolver) => buildQuery<QueryGranterGrantsRequest, QueryGranterGrantsResponse>({
  encode: QueryGranterGrantsRequest.encode,
  decode: QueryGranterGrantsResponse.decode,
  service: "cosmos.authz.v1beta1.Query",
  method: "GranterGrants",
  clientResolver
});
export const createGetGranteeGrants = (clientResolver?: RpcResolver) => buildQuery<QueryGranteeGrantsRequest, QueryGranteeGrantsResponse>({
  encode: QueryGranteeGrantsRequest.encode,
  decode: QueryGranteeGrantsResponse.decode,
  service: "cosmos.authz.v1beta1.Query",
  method: "GranteeGrants",
  clientResolver
});