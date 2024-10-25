import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryIncentivesRequest, QueryIncentivesRequestSDKType, QueryIncentivesResponse, QueryIncentivesResponseSDKType, QueryIncentiveRequest, QueryIncentiveRequestSDKType, QueryIncentiveResponse, QueryIncentiveResponseSDKType, QueryGasMetersRequest, QueryGasMetersRequestSDKType, QueryGasMetersResponse, QueryGasMetersResponseSDKType, QueryGasMeterRequest, QueryGasMeterRequestSDKType, QueryGasMeterResponse, QueryGasMeterResponseSDKType, QueryAllocationMetersRequest, QueryAllocationMetersRequestSDKType, QueryAllocationMetersResponse, QueryAllocationMetersResponseSDKType, QueryAllocationMeterRequest, QueryAllocationMeterRequestSDKType, QueryAllocationMeterResponse, QueryAllocationMeterResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
export const createGetIncentives = (getRpcInstance: RpcResolver) => buildQuery<QueryIncentivesRequest, QueryIncentivesResponse>({
  encode: QueryIncentivesRequest.encode,
  decode: QueryIncentivesResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "Incentives",
  getRpcInstance: getRpcInstance
});
export const useGetIncentives = buildUseQuery<QueryIncentivesRequest, QueryIncentivesResponse>({
  builderQueryFn: createGetIncentives,
  queryKeyPrefix: "IncentivesQuery"
});
export const createGetIncentive = (getRpcInstance: RpcResolver) => buildQuery<QueryIncentiveRequest, QueryIncentiveResponse>({
  encode: QueryIncentiveRequest.encode,
  decode: QueryIncentiveResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "Incentive",
  getRpcInstance: getRpcInstance
});
export const useGetIncentive = buildUseQuery<QueryIncentiveRequest, QueryIncentiveResponse>({
  builderQueryFn: createGetIncentive,
  queryKeyPrefix: "IncentiveQuery"
});
export const createGetGasMeters = (getRpcInstance: RpcResolver) => buildQuery<QueryGasMetersRequest, QueryGasMetersResponse>({
  encode: QueryGasMetersRequest.encode,
  decode: QueryGasMetersResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "GasMeters",
  getRpcInstance: getRpcInstance
});
export const useGetGasMeters = buildUseQuery<QueryGasMetersRequest, QueryGasMetersResponse>({
  builderQueryFn: createGetGasMeters,
  queryKeyPrefix: "GasMetersQuery"
});
export const createGetGasMeter = (getRpcInstance: RpcResolver) => buildQuery<QueryGasMeterRequest, QueryGasMeterResponse>({
  encode: QueryGasMeterRequest.encode,
  decode: QueryGasMeterResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "GasMeter",
  getRpcInstance: getRpcInstance
});
export const useGetGasMeter = buildUseQuery<QueryGasMeterRequest, QueryGasMeterResponse>({
  builderQueryFn: createGetGasMeter,
  queryKeyPrefix: "GasMeterQuery"
});
export const createGetAllocationMeters = (getRpcInstance: RpcResolver) => buildQuery<QueryAllocationMetersRequest, QueryAllocationMetersResponse>({
  encode: QueryAllocationMetersRequest.encode,
  decode: QueryAllocationMetersResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "AllocationMeters",
  getRpcInstance: getRpcInstance
});
export const useGetAllocationMeters = buildUseQuery<QueryAllocationMetersRequest, QueryAllocationMetersResponse>({
  builderQueryFn: createGetAllocationMeters,
  queryKeyPrefix: "AllocationMetersQuery"
});
export const createGetAllocationMeter = (getRpcInstance: RpcResolver) => buildQuery<QueryAllocationMeterRequest, QueryAllocationMeterResponse>({
  encode: QueryAllocationMeterRequest.encode,
  decode: QueryAllocationMeterResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "AllocationMeter",
  getRpcInstance: getRpcInstance
});
export const useGetAllocationMeter = buildUseQuery<QueryAllocationMeterRequest, QueryAllocationMeterResponse>({
  builderQueryFn: createGetAllocationMeter,
  queryKeyPrefix: "AllocationMeterQuery"
});
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "Params",
  getRpcInstance: getRpcInstance
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});