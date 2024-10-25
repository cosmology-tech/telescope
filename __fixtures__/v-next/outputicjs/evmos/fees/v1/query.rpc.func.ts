import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosResponse, QueryDevFeeInfoRequest, QueryDevFeeInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse } from "./query";
export const createGetDevFeeInfos = (getRpcInstance: RpcResolver) => buildQuery<QueryDevFeeInfosRequest, QueryDevFeeInfosResponse>({
  encode: QueryDevFeeInfosRequest.encode,
  decode: QueryDevFeeInfosResponse.decode,
  service: "evmos.fees.v1.Query",
  method: "DevFeeInfos",
  getRpcInstance: getRpcInstance
});
export const useGetDevFeeInfos = buildUseQuery<QueryDevFeeInfosRequest, QueryDevFeeInfosResponse>({
  builderQueryFn: createGetDevFeeInfos,
  queryKeyPrefix: "DevFeeInfosQuery"
});
export const createGetDevFeeInfo = (getRpcInstance: RpcResolver) => buildQuery<QueryDevFeeInfoRequest, QueryDevFeeInfoResponse>({
  encode: QueryDevFeeInfoRequest.encode,
  decode: QueryDevFeeInfoResponse.decode,
  service: "evmos.fees.v1.Query",
  method: "DevFeeInfo",
  getRpcInstance: getRpcInstance
});
export const useGetDevFeeInfo = buildUseQuery<QueryDevFeeInfoRequest, QueryDevFeeInfoResponse>({
  builderQueryFn: createGetDevFeeInfo,
  queryKeyPrefix: "DevFeeInfoQuery"
});
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.fees.v1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetDevFeeInfosPerDeployer = (getRpcInstance: RpcResolver) => buildQuery<QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse>({
  encode: QueryDevFeeInfosPerDeployerRequest.encode,
  decode: QueryDevFeeInfosPerDeployerResponse.decode,
  service: "evmos.fees.v1.Query",
  method: "DevFeeInfosPerDeployer",
  getRpcInstance: getRpcInstance
});
export const useGetDevFeeInfosPerDeployer = buildUseQuery<QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse>({
  builderQueryFn: createGetDevFeeInfosPerDeployer,
  queryKeyPrefix: "DevFeeInfosPerDeployerQuery"
});