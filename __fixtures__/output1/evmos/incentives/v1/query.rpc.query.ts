import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType } from "./genesis";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryIncentivesRequest, QueryIncentivesRequestSDKType, QueryIncentivesResponse, QueryIncentivesResponseSDKType, QueryIncentiveRequest, QueryIncentiveRequestSDKType, QueryIncentiveResponse, QueryIncentiveResponseSDKType, QueryGasMetersRequest, QueryGasMetersRequestSDKType, QueryGasMetersResponse, QueryGasMetersResponseSDKType, QueryGasMeterRequest, QueryGasMeterRequestSDKType, QueryGasMeterResponse, QueryGasMeterResponseSDKType, QueryAllocationMetersRequest, QueryAllocationMetersRequestSDKType, QueryAllocationMetersResponse, QueryAllocationMetersResponseSDKType, QueryAllocationMeterRequest, QueryAllocationMeterRequestSDKType, QueryAllocationMeterResponse, QueryAllocationMeterResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  incentives(request: QueryIncentivesRequest): Promise<QueryIncentivesResponseSDKType>;
  /*Incentives retrieves registered incentives*/

  incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponseSDKType>;
  /*Incentive retrieves a registered incentive*/

  gasMeters(request: QueryGasMetersRequest): Promise<QueryGasMetersResponseSDKType>;
  /*GasMeters retrieves active gas meters for a given contract*/

  gasMeter(request: QueryGasMeterRequest): Promise<QueryGasMeterResponseSDKType>;
  /*GasMeter Retrieves a active gas meter*/

  allocationMeters(request: QueryAllocationMetersRequest): Promise<QueryAllocationMetersResponseSDKType>;
  /*AllocationMeters retrieves active allocation meters for a given
  denomination*/

  allocationMeter(request: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponseSDKType>;
  /*AllocationMeter Retrieves a active gas meter*/

  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*Params retrieves the incentives module params*/

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

  incentives(request: QueryIncentivesRequest): Promise<QueryIncentivesResponseSDKType> {
    const data = QueryIncentivesRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "Incentives", data);
    return promise.then(data => QueryIncentivesResponse.decode(new _m0.Reader(data)));
  }

  incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponseSDKType> {
    const data = QueryIncentiveRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "Incentive", data);
    return promise.then(data => QueryIncentiveResponse.decode(new _m0.Reader(data)));
  }

  gasMeters(request: QueryGasMetersRequest): Promise<QueryGasMetersResponseSDKType> {
    const data = QueryGasMetersRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "GasMeters", data);
    return promise.then(data => QueryGasMetersResponse.decode(new _m0.Reader(data)));
  }

  gasMeter(request: QueryGasMeterRequest): Promise<QueryGasMeterResponseSDKType> {
    const data = QueryGasMeterRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "GasMeter", data);
    return promise.then(data => QueryGasMeterResponse.decode(new _m0.Reader(data)));
  }

  allocationMeters(request: QueryAllocationMetersRequest): Promise<QueryAllocationMetersResponseSDKType> {
    const data = QueryAllocationMetersRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "AllocationMeters", data);
    return promise.then(data => QueryAllocationMetersResponse.decode(new _m0.Reader(data)));
  }

  allocationMeter(request: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponseSDKType> {
    const data = QueryAllocationMeterRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "AllocationMeter", data);
    return promise.then(data => QueryAllocationMeterResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}