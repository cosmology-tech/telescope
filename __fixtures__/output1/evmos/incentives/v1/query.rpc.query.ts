import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Incentive, GasMeter } from "./incentives";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import { Params } from "./genesis";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryIncentivesRequest, QueryIncentivesResponse, QueryIncentiveRequest, QueryIncentiveResponse, QueryGasMetersRequest, QueryGasMetersResponse, QueryGasMeterRequest, QueryGasMeterResponse, QueryAllocationMetersRequest, QueryAllocationMetersResponse, QueryAllocationMeterRequest, QueryAllocationMeterResponse, QueryParamsRequest, QueryParamsResponse } from "./query";

/** Query defines the RPC service */
export interface Query {
  incentives(request: QueryIncentivesRequest): Promise<QueryIncentivesResponse>;
  /*Incentives retrieves registered incentives*/

  incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse>;
  /*Incentive retrieves a registered incentive*/

  gasMeters(request: QueryGasMetersRequest): Promise<QueryGasMetersResponse>;
  /*GasMeters retrieves active gas meters for a given contract*/

  gasMeter(request: QueryGasMeterRequest): Promise<QueryGasMeterResponse>;
  /*GasMeter Retrieves a active gas meter*/

  allocationMeters(request: QueryAllocationMetersRequest): Promise<QueryAllocationMetersResponse>;
  /*AllocationMeters retrieves active allocation meters for a given
  denomination*/

  allocationMeter(request: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponse>;
  /*AllocationMeter Retrieves a active gas meter*/

  params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
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

  incentives(request: QueryIncentivesRequest): Promise<QueryIncentivesResponse> {
    const data = QueryIncentivesRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "Incentives", data);
    return promise.then(data => QueryIncentivesResponse.decode(new _m0.Reader(data)));
  }

  incentive(request: QueryIncentiveRequest): Promise<QueryIncentiveResponse> {
    const data = QueryIncentiveRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "Incentive", data);
    return promise.then(data => QueryIncentiveResponse.decode(new _m0.Reader(data)));
  }

  gasMeters(request: QueryGasMetersRequest): Promise<QueryGasMetersResponse> {
    const data = QueryGasMetersRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "GasMeters", data);
    return promise.then(data => QueryGasMetersResponse.decode(new _m0.Reader(data)));
  }

  gasMeter(request: QueryGasMeterRequest): Promise<QueryGasMeterResponse> {
    const data = QueryGasMeterRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "GasMeter", data);
    return promise.then(data => QueryGasMeterResponse.decode(new _m0.Reader(data)));
  }

  allocationMeters(request: QueryAllocationMetersRequest): Promise<QueryAllocationMetersResponse> {
    const data = QueryAllocationMetersRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "AllocationMeters", data);
    return promise.then(data => QueryAllocationMetersResponse.decode(new _m0.Reader(data)));
  }

  allocationMeter(request: QueryAllocationMeterRequest): Promise<QueryAllocationMeterResponse> {
    const data = QueryAllocationMeterRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "AllocationMeter", data);
    return promise.then(data => QueryAllocationMeterResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("evmos.incentives.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

}