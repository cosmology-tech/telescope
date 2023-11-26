import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryIncentivesRequest, QueryIncentivesRequestSDKType, QueryIncentivesResponse, QueryIncentivesResponseSDKType, QueryIncentiveRequest, QueryIncentiveRequestSDKType, QueryIncentiveResponse, QueryIncentiveResponseSDKType, QueryGasMetersRequest, QueryGasMetersRequestSDKType, QueryGasMetersResponse, QueryGasMetersResponseSDKType, QueryGasMeterRequest, QueryGasMeterRequestSDKType, QueryGasMeterResponse, QueryGasMeterResponseSDKType, QueryAllocationMetersRequest, QueryAllocationMetersRequestSDKType, QueryAllocationMetersResponse, QueryAllocationMetersResponseSDKType, QueryAllocationMeterRequest, QueryAllocationMeterRequestSDKType, QueryAllocationMeterResponse, QueryAllocationMeterResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Incentives retrieves registered incentives */
  incentives(request?: QueryIncentivesRequest): Promise<QueryIncentivesResponse>;
  /** Incentive retrieves a registered incentive */
  incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse>;
  /** GasMeters retrieves active gas meters for a given contract */
  gasMeters(request: QueryGasMetersRequest): Promise<QueryGasMetersResponse>;
  /** GasMeter Retrieves a active gas meter */
  gasMeter(request: QueryGasMeterRequest): Promise<QueryGasMeterResponse>;
  /**
   * AllocationMeters retrieves active allocation meters for a given
   * denomination
   */
  allocationMeters(request?: QueryAllocationMetersRequest): Promise<QueryAllocationMetersResponse>;
  /** AllocationMeter Retrieves a active gas meter */
  allocationMeter(request: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponse>;
  /** Params retrieves the incentives module params */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* Incentives retrieves registered incentives */
  incentives = async (request: QueryIncentivesRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryIncentivesResponse> => {
    const data = QueryIncentivesRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "Incentives", data);
    return promise.then(data => QueryIncentivesResponse.decode(new BinaryReader(data)));
  };
  /* Incentive retrieves a registered incentive */
  incentive = async (request: QueryIncentiveRequest): Promise<QueryIncentiveResponse> => {
    const data = QueryIncentiveRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "Incentive", data);
    return promise.then(data => QueryIncentiveResponse.decode(new BinaryReader(data)));
  };
  /* GasMeters retrieves active gas meters for a given contract */
  gasMeters = async (request: QueryGasMetersRequest): Promise<QueryGasMetersResponse> => {
    const data = QueryGasMetersRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "GasMeters", data);
    return promise.then(data => QueryGasMetersResponse.decode(new BinaryReader(data)));
  };
  /* GasMeter Retrieves a active gas meter */
  gasMeter = async (request: QueryGasMeterRequest): Promise<QueryGasMeterResponse> => {
    const data = QueryGasMeterRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "GasMeter", data);
    return promise.then(data => QueryGasMeterResponse.decode(new BinaryReader(data)));
  };
  /* AllocationMeters retrieves active allocation meters for a given
   denomination */
  allocationMeters = async (request: QueryAllocationMetersRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryAllocationMetersResponse> => {
    const data = QueryAllocationMetersRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "AllocationMeters", data);
    return promise.then(data => QueryAllocationMetersResponse.decode(new BinaryReader(data)));
  };
  /* AllocationMeter Retrieves a active gas meter */
  allocationMeter = async (request: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponse> => {
    const data = QueryAllocationMeterRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "AllocationMeter", data);
    return promise.then(data => QueryAllocationMeterResponse.decode(new BinaryReader(data)));
  };
  /* Params retrieves the incentives module params */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: Rpc) => {
  return new QueryClientImpl(rpc);
};