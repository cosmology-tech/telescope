import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsResponse, QueryEpochProvisionsRequest, QueryEpochProvisionsResponse } from "./query";
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.mint.v1beta1.Params",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetEpochProvisions = (getRpcInstance: RpcResolver) => buildQuery<QueryEpochProvisionsRequest, QueryEpochProvisionsResponse>({
  encode: QueryEpochProvisionsRequest.encode,
  decode: QueryEpochProvisionsResponse.decode,
  service: "osmosis.mint.v1beta1.EpochProvisions",
  method: "EpochProvisions",
  getRpcInstance: getRpcInstance
});
export const useGetEpochProvisions = buildUseQuery<QueryEpochProvisionsRequest, QueryEpochProvisionsResponse>({
  builderQueryFn: createGetEpochProvisions,
  queryKeyPrefix: "EpochProvisionsQuery"
});