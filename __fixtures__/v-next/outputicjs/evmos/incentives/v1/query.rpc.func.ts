import { RpcResolver, buildQuery } from "../../../helper-func-types";
import { buildUseQuery } from "../../../react-query";
import { QueryIncentivesRequest, QueryIncentivesResponse, QueryIncentiveRequest, QueryIncentiveResponse, QueryGasMetersRequest, QueryGasMetersResponse, QueryGasMeterRequest, QueryGasMeterResponse, QueryAllocationMetersRequest, QueryAllocationMetersResponse, QueryAllocationMeterRequest, QueryAllocationMeterResponse, QueryParamsRequest, QueryParamsResponse } from "./query";
export const createGetIncentives = (clientResolver?: RpcResolver) => buildQuery<QueryIncentivesRequest, QueryIncentivesResponse>({
  encode: QueryIncentivesRequest.encode,
  decode: QueryIncentivesResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "Incentives",
  clientResolver
});
export const useGetIncentives = buildUseQuery<QueryIncentivesRequest, QueryIncentivesResponse>({
  builderQueryFn: createGetIncentives,
  queryKeyPrefix: "IncentivesQuery"
});
export const createGetIncentive = (clientResolver?: RpcResolver) => buildQuery<QueryIncentiveRequest, QueryIncentiveResponse>({
  encode: QueryIncentiveRequest.encode,
  decode: QueryIncentiveResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "Incentive",
  clientResolver
});
export const useGetIncentive = buildUseQuery<QueryIncentiveRequest, QueryIncentiveResponse>({
  builderQueryFn: createGetIncentive,
  queryKeyPrefix: "IncentiveQuery"
});
export const createGetGasMeters = (clientResolver?: RpcResolver) => buildQuery<QueryGasMetersRequest, QueryGasMetersResponse>({
  encode: QueryGasMetersRequest.encode,
  decode: QueryGasMetersResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "GasMeters",
  clientResolver
});
export const useGetGasMeters = buildUseQuery<QueryGasMetersRequest, QueryGasMetersResponse>({
  builderQueryFn: createGetGasMeters,
  queryKeyPrefix: "GasMetersQuery"
});
export const createGetGasMeter = (clientResolver?: RpcResolver) => buildQuery<QueryGasMeterRequest, QueryGasMeterResponse>({
  encode: QueryGasMeterRequest.encode,
  decode: QueryGasMeterResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "GasMeter",
  clientResolver
});
export const useGetGasMeter = buildUseQuery<QueryGasMeterRequest, QueryGasMeterResponse>({
  builderQueryFn: createGetGasMeter,
  queryKeyPrefix: "GasMeterQuery"
});
export const createGetAllocationMeters = (clientResolver?: RpcResolver) => buildQuery<QueryAllocationMetersRequest, QueryAllocationMetersResponse>({
  encode: QueryAllocationMetersRequest.encode,
  decode: QueryAllocationMetersResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "AllocationMeters",
  clientResolver
});
export const useGetAllocationMeters = buildUseQuery<QueryAllocationMetersRequest, QueryAllocationMetersResponse>({
  builderQueryFn: createGetAllocationMeters,
  queryKeyPrefix: "AllocationMetersQuery"
});
export const createGetAllocationMeter = (clientResolver?: RpcResolver) => buildQuery<QueryAllocationMeterRequest, QueryAllocationMeterResponse>({
  encode: QueryAllocationMeterRequest.encode,
  decode: QueryAllocationMeterResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "AllocationMeter",
  clientResolver
});
export const useGetAllocationMeter = buildUseQuery<QueryAllocationMeterRequest, QueryAllocationMeterResponse>({
  builderQueryFn: createGetAllocationMeter,
  queryKeyPrefix: "AllocationMeterQuery"
});
export const createGetParams = (clientResolver?: RpcResolver) => buildQuery<QueryParamsRequest, QueryParamsResponse>({
  encode: QueryParamsRequest.encode,
  decode: QueryParamsResponse.decode,
  service: "evmos.incentives.v1.Query",
  method: "Params",
  clientResolver
});
export const useGetParams = buildUseQuery<QueryParamsRequest, QueryParamsResponse>({
  builderQueryFn: createGetParams,
  queryKeyPrefix: "ParamsQuery"
});