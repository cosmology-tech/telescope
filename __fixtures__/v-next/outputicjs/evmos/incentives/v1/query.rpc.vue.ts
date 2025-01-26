import { buildUseVueQuery } from "../../../vue-query";
import { QueryIncentivesRequest, QueryIncentivesResponse, QueryIncentiveRequest, QueryIncentiveResponse, QueryGasMetersRequest, QueryGasMetersResponse, QueryGasMeterRequest, QueryGasMeterResponse, QueryAllocationMetersRequest, QueryAllocationMetersResponse, QueryAllocationMeterRequest, QueryAllocationMeterResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { createGetIncentives, createGetIncentive, createGetGasMeters, createGetGasMeter, createGetAllocationMeters, createGetAllocationMeter, createGetParams } from "./query.rpc.func.ts";
export const useGetIncentives = buildUseVueQuery<QueryIncentivesRequest, QueryIncentivesResponse>({
  builderQueryFn: createGetIncentives,
  queryKeyPrefix: "IncentivesQuery"
});
export const useGetIncentive = buildUseVueQuery<QueryIncentiveRequest, QueryIncentiveResponse>({
  builderQueryFn: createGetIncentive,
  queryKeyPrefix: "IncentiveQuery"
});
export const useGetGasMeters = buildUseVueQuery<QueryGasMetersRequest, QueryGasMetersResponse>({
  builderQueryFn: createGetGasMeters,
  queryKeyPrefix: "GasMetersQuery"
});
export const useGetGasMeter = buildUseVueQuery<QueryGasMeterRequest, QueryGasMeterResponse>({
  builderQueryFn: createGetGasMeter,
  queryKeyPrefix: "GasMeterQuery"
});
export const useGetAllocationMeters = buildUseVueQuery<QueryAllocationMetersRequest, QueryAllocationMetersResponse>({
  builderQueryFn: createGetAllocationMeters,
  queryKeyPrefix: "AllocationMetersQuery"
});
export const useGetAllocationMeter = buildUseVueQuery<QueryAllocationMeterRequest, QueryAllocationMeterResponse>({
  builderQueryFn: createGetAllocationMeter,
  queryKeyPrefix: "AllocationMeterQuery"
});
export const useGetParams = buildUseVueQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});