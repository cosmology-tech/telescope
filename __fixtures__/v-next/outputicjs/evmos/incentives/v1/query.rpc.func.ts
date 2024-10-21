import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryIncentivesRequest, QueryIncentivesResponse, QueryIncentiveRequest, QueryIncentiveResponse, QueryGasMetersRequest, QueryGasMetersResponse, QueryGasMeterRequest, QueryGasMeterResponse, QueryAllocationMetersRequest, QueryAllocationMetersResponse, QueryAllocationMeterRequest, QueryAllocationMeterResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export const createGetIncentives = (getRpcInstance: RpcResolver) => buildQuery<QueryIncentivesRequest, QueryIncentivesResponse>({
  encoder: QueryIncentivesRequest.encode,
  decoder: QueryIncentivesResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Incentives",
  getRpcInstance: getRpcInstance
});
export const useGetIncentives = buildUseQuery<QueryIncentivesRequest, QueryIncentivesResponse>({
  builderQueryFn: createGetIncentives,
  queryKeyPrefix: "IncentivesQuery"
});
export const createGetIncentive = (getRpcInstance: RpcResolver) => buildQuery<QueryIncentiveRequest, QueryIncentiveResponse>({
  encoder: QueryIncentiveRequest.encode,
  decoder: QueryIncentiveResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "Incentive",
  getRpcInstance: getRpcInstance
});
export const useGetIncentive = buildUseQuery<QueryIncentiveRequest, QueryIncentiveResponse>({
  builderQueryFn: createGetIncentive,
  queryKeyPrefix: "IncentiveQuery"
});
export const createGetGasMeters = (getRpcInstance: RpcResolver) => buildQuery<QueryGasMetersRequest, QueryGasMetersResponse>({
  encoder: QueryGasMetersRequest.encode,
  decoder: QueryGasMetersResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GasMeters",
  getRpcInstance: getRpcInstance
});
export const useGetGasMeters = buildUseQuery<QueryGasMetersRequest, QueryGasMetersResponse>({
  builderQueryFn: createGetGasMeters,
  queryKeyPrefix: "GasMetersQuery"
});
export const createGetGasMeter = (getRpcInstance: RpcResolver) => buildQuery<QueryGasMeterRequest, QueryGasMeterResponse>({
  encoder: QueryGasMeterRequest.encode,
  decoder: QueryGasMeterResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "GasMeter",
  getRpcInstance: getRpcInstance
});
export const useGetGasMeter = buildUseQuery<QueryGasMeterRequest, QueryGasMeterResponse>({
  builderQueryFn: createGetGasMeter,
  queryKeyPrefix: "GasMeterQuery"
});
export const createGetAllocationMeters = (getRpcInstance: RpcResolver) => buildQuery<QueryAllocationMetersRequest, QueryAllocationMetersResponse>({
  encoder: QueryAllocationMetersRequest.encode,
  decoder: QueryAllocationMetersResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllocationMeters",
  getRpcInstance: getRpcInstance
});
export const useGetAllocationMeters = buildUseQuery<QueryAllocationMetersRequest, QueryAllocationMetersResponse>({
  builderQueryFn: createGetAllocationMeters,
  queryKeyPrefix: "AllocationMetersQuery"
});
export const createGetAllocationMeter = (getRpcInstance: RpcResolver) => buildQuery<QueryAllocationMeterRequest, QueryAllocationMeterResponse>({
  encoder: QueryAllocationMeterRequest.encode,
  decoder: QueryAllocationMeterResponse.decode,
  service: "cosmos.bank.v1beta1.Query",
  method: "AllocationMeter",
  getRpcInstance: getRpcInstance
});
export const useGetAllocationMeter = buildUseQuery<QueryAllocationMeterRequest, QueryAllocationMeterResponse>({
  builderQueryFn: createGetAllocationMeter,
  queryKeyPrefix: "AllocationMeterQuery"
});
export const createGetParams = (getRpcInstance: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
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