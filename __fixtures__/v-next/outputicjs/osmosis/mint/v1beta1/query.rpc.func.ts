import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.mint.v1beta1.Query",
  method: "Params",
  clientResolver
});
export const createGetEpochProvisions = (clientResolver?: RpcResolver) => buildQuery<QueryEpochProvisionsRequest, QueryEpochProvisionsResponse>({
  encode: QueryEpochProvisionsRequest.encode,
  decode: QueryEpochProvisionsResponse.decode,
  service: "osmosis.mint.v1beta1.Query",
  method: "EpochProvisions",
  clientResolver
});