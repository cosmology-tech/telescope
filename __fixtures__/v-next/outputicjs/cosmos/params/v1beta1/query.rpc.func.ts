import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QuerySubspacesRequest, QuerySubspacesResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "cosmos.params.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const createGetSubspaces = (clientResolver?: RpcResolver) => buildQuery<QuerySubspacesRequest, QuerySubspacesResponse>({
  encode: QuerySubspacesRequest.encode,
  decode: QuerySubspacesResponse.decode,
  service: "cosmos.params.v1beta1.Query",
  method: "Subspaces",
  clientResolver
});