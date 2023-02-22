import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryIncentivesRequest, QueryIncentivesRequestSDKType, QueryIncentivesResponse, QueryIncentivesResponseSDKType, QueryIncentiveRequest, QueryIncentiveRequestSDKType, QueryIncentiveResponse, QueryIncentiveResponseSDKType, QueryGasMetersRequest, QueryGasMetersRequestSDKType, QueryGasMetersResponse, QueryGasMetersResponseSDKType, QueryGasMeterRequest, QueryGasMeterRequestSDKType, QueryGasMeterResponse, QueryGasMeterResponseSDKType, QueryAllocationMetersRequest, QueryAllocationMetersRequestSDKType, QueryAllocationMetersResponse, QueryAllocationMetersResponseSDKType, QueryAllocationMeterRequest, QueryAllocationMeterRequestSDKType, QueryAllocationMeterResponse, QueryAllocationMeterResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";

/** Query defines the gRPC querier service. */
export interface Query {
  /** Incentives retrieves registered incentives */
  Incentives(request?: DeepPartial<QueryIncentivesRequest>, metadata?: grpc.Metadata): Promise<QueryIncentivesResponse>;

  /** Incentive retrieves a registered incentive */
  Incentive(request: DeepPartial<QueryIncentiveRequest>, metadata?: grpc.Metadata): Promise<QueryIncentiveResponse>;

  /** GasMeters retrieves active gas meters for a given contract */
  GasMeters(request: DeepPartial<QueryGasMetersRequest>, metadata?: grpc.Metadata): Promise<QueryGasMetersResponse>;

  /** GasMeter Retrieves a active gas meter */
  GasMeter(request: DeepPartial<QueryGasMeterRequest>, metadata?: grpc.Metadata): Promise<QueryGasMeterResponse>;

  /**
   * AllocationMeters retrieves active allocation meters for a given
   * denomination
   */
  AllocationMeters(request?: DeepPartial<QueryAllocationMetersRequest>, metadata?: grpc.Metadata): Promise<QueryAllocationMetersResponse>;

  /** AllocationMeter Retrieves a active gas meter */
  AllocationMeter(request: DeepPartial<QueryAllocationMeterRequest>, metadata?: grpc.Metadata): Promise<QueryAllocationMeterResponse>;

  /** Params retrieves the incentives module params */
  Params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.incentives = this.incentives.bind(this);
    this.incentive = this.incentive.bind(this);
    this.gasMeters = this.gasMeters.bind(this);
    this.gasMeter = this.gasMeter.bind(this);
    this.allocationMeters = this.allocationMeters.bind(this);
    this.allocationMeter = this.allocationMeter.bind(this);
    this.params = this.params.bind(this);
  }

  incentives(request: DeepPartial<QueryIncentivesRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryIncentivesResponse> {
    return this.rpc.unary(QueryIncentivesDesc, QueryIncentivesRequest.fromPartial(request), metadata);
  }

  incentive(request: DeepPartial<QueryIncentiveRequest>, metadata?: grpc.Metadata): Promise<QueryIncentiveResponse> {
    return this.rpc.unary(QueryIncentiveDesc, QueryIncentiveRequest.fromPartial(request), metadata);
  }

  gasMeters(request: DeepPartial<QueryGasMetersRequest>, metadata?: grpc.Metadata): Promise<QueryGasMetersResponse> {
    return this.rpc.unary(QueryGasMetersDesc, QueryGasMetersRequest.fromPartial(request), metadata);
  }

  gasMeter(request: DeepPartial<QueryGasMeterRequest>, metadata?: grpc.Metadata): Promise<QueryGasMeterResponse> {
    return this.rpc.unary(QueryGasMeterDesc, QueryGasMeterRequest.fromPartial(request), metadata);
  }

  allocationMeters(request: DeepPartial<QueryAllocationMetersRequest> = {
    pagination: undefined
  }, metadata?: grpc.Metadata): Promise<QueryAllocationMetersResponse> {
    return this.rpc.unary(QueryAllocationMetersDesc, QueryAllocationMetersRequest.fromPartial(request), metadata);
  }

  allocationMeter(request: DeepPartial<QueryAllocationMeterRequest>, metadata?: grpc.Metadata): Promise<QueryAllocationMeterResponse> {
    return this.rpc.unary(QueryAllocationMeterDesc, QueryAllocationMeterRequest.fromPartial(request), metadata);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

}