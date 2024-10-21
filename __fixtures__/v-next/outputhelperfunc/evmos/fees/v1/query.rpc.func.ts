import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { DevFeeInfo, DevFeeInfoSDKType } from "./fees";
import { Params, ParamsSDKType } from "./genesis";
import { SigningClientResolver } from "../../../helpers";
import { QueryDevFeeInfosRequest, QueryDevFeeInfosRequestSDKType, QueryDevFeeInfosResponse, QueryDevFeeInfosResponseSDKType, QueryDevFeeInfoRequest, QueryDevFeeInfoRequestSDKType, QueryDevFeeInfoResponse, QueryDevFeeInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerRequestSDKType, QueryDevFeeInfosPerDeployerResponse, QueryDevFeeInfosPerDeployerResponseSDKType } from "./query";
export const createGetDevFeeInfos = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDevFeeInfosRequest, QueryDevFeeInfosResponse>({
  encoder: QueryDevFeeInfosRequest.encode,
  decoder: QueryDevFeeInfosResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DevFeeInfos",
  getRpcInstance: getRpcInstance
});
export const useGetDevFeeInfos = buildUseQuery<QueryDevFeeInfosRequest, QueryDevFeeInfosResponse>({
  builderQueryFn: createGetDevFeeInfos,
  queryKeyPrefix: "DevFeeInfosQuery"
});
export const createGetDevFeeInfo = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDevFeeInfoRequest, QueryDevFeeInfoResponse>({
  encoder: QueryDevFeeInfoRequest.encode,
  decoder: QueryDevFeeInfoResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DevFeeInfo",
  getRpcInstance: getRpcInstance
});
export const useGetDevFeeInfo = buildUseQuery<QueryDevFeeInfoRequest, QueryDevFeeInfoResponse>({
  builderQueryFn: createGetDevFeeInfo,
  queryKeyPrefix: "DevFeeInfoQuery"
});
export const createGetParams = (getRpcInstance: SigningClientResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encoder: QueryParamsRequest.encode,
  decoder: QueryParamsResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});
export const createGetDevFeeInfosPerDeployer = (getRpcInstance: SigningClientResolver) => buildQuery<QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse>({
  encoder: QueryDevFeeInfosPerDeployerRequest.encode,
  decoder: QueryDevFeeInfosPerDeployerResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "DevFeeInfosPerDeployer",
  getRpcInstance: getRpcInstance
});
export const useGetDevFeeInfosPerDeployer = buildUseQuery<QueryDevFeeInfosPerDeployerRequest, QueryDevFeeInfosPerDeployerResponse>({
  builderQueryFn: createGetDevFeeInfosPerDeployer,
  queryKeyPrefix: "DevFeeInfosPerDeployerQuery"
});