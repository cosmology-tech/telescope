import { buildUseQuery } from "../../../react-query";
import { QueryIncentivesRequest, QueryIncentivesResponse, QueryIncentiveRequest, QueryIncentiveResponse, QueryGasMetersRequest, QueryGasMetersResponse, QueryGasMeterRequest, QueryGasMeterResponse, QueryAllocationMetersRequest, QueryAllocationMetersResponse, QueryAllocationMeterRequest, QueryAllocationMeterResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
import { createGetIncentives, createGetIncentive, createGetGasMeters, createGetGasMeter, createGetAllocationMeters, createGetAllocationMeter, createGetParams } from "./query.rpc.func";
export const useGetIncentives = buildUseQuery<QueryIncentivesRequest, QueryIncentivesResponse>({
  builderQueryFn: createGetIncentives,
  queryKeyPrefix: "IncentivesQuery"
});
export const useGetIncentive = buildUseQuery<QueryIncentiveRequest, QueryIncentiveResponse>({
  builderQueryFn: createGetIncentive,
  queryKeyPrefix: "IncentiveQuery"
});
export const useGetGasMeters = buildUseQuery<QueryGasMetersRequest, QueryGasMetersResponse>({
  builderQueryFn: createGetGasMeters,
  queryKeyPrefix: "GasMetersQuery"
});
export const useGetGasMeter = buildUseQuery<QueryGasMeterRequest, QueryGasMeterResponse>({
  builderQueryFn: createGetGasMeter,
  queryKeyPrefix: "GasMeterQuery"
});
export const useGetAllocationMeters = buildUseQuery<QueryAllocationMetersRequest, QueryAllocationMetersResponse>({
  builderQueryFn: createGetAllocationMeters,
  queryKeyPrefix: "AllocationMetersQuery"
});
export const useGetAllocationMeter = buildUseQuery<QueryAllocationMeterRequest, QueryAllocationMeterResponse>({
  builderQueryFn: createGetAllocationMeter,
  queryKeyPrefix: "AllocationMeterQuery"
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});