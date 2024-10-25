import { Params, ParamsSDKType } from "./mint";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryEpochProvisionsRequest, QueryEpochProvisionsRequestSDKType, QueryEpochProvisionsResponse, QueryEpochProvisionsResponseSDKType } from "./query";
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "osmosis.mint.v1beta1.Query",
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
  service: "osmosis.mint.v1beta1.Query",
  method: "EpochProvisions",
  getRpcInstance: getRpcInstance
});
export const useGetEpochProvisions = buildUseQuery<QueryEpochProvisionsRequest, QueryEpochProvisionsResponse>({
  builderQueryFn: createGetEpochProvisions,
  queryKeyPrefix: "EpochProvisionsQuery"
});