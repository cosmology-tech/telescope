import { buildUseVueQuery } from "../../../vue-query";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosResponse, QueryDevFeeInfoRequest, QueryDevFeeInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse } from "./query";
import { createGetDevFeeInfos, createGetDevFeeInfo, createGetParams, createGetDevFeeInfosPerDeployer } from "./query.rpc.func.ts";
export const useGetDevFeeInfos = buildUseVueQuery<QueryDevFeeInfosRequest, QueryDevFeeInfosResponse>({
  builderQueryFn: createGetDevFeeInfos,
  queryKeyPrefix: "DevFeeInfosQuery"
});
export const useGetDevFeeInfo = buildUseVueQuery<QueryDevFeeInfoRequest, QueryDevFeeInfoResponse>({
  builderQueryFn: createGetDevFeeInfo,
  queryKeyPrefix: "DevFeeInfoQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const useGetDevFeeInfosPerDeployer = buildUseVueQuery<QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse>({
  builderQueryFn: createGetDevFeeInfosPerDeployer,
  queryKeyPrefix: "DevFeeInfosPerDeployerQuery"
});