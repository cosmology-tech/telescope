import { buildUseQuery } from "../../../react-query";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosResponse, QueryDevFeeInfoRequest, QueryDevFeeInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse } from "./query";
import { createGetDevFeeInfos, createGetDevFeeInfo, createGetParams, createGetDevFeeInfosPerDeployer } from "./query.rpc.func";
export const useGetDevFeeInfos = buildUseQuery<QueryDevFeeInfosRequest, QueryDevFeeInfosResponse>({
  builderQueryFn: createGetDevFeeInfos,
  queryKeyPrefix: "DevFeeInfosQuery"
});
export const useGetDevFeeInfo = buildUseQuery<QueryDevFeeInfoRequest, QueryDevFeeInfoResponse>({
  builderQueryFn: createGetDevFeeInfo,
  queryKeyPrefix: "DevFeeInfoQuery"
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetDevFeeInfosPerDeployer = buildUseQuery<QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse>({
  builderQueryFn: createGetDevFeeInfosPerDeployer,
  queryKeyPrefix: "DevFeeInfosPerDeployerQuery"
});