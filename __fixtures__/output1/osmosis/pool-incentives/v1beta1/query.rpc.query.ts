import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoSDKType, Params, ParamsSDKType } from "./incentives";
import { Gauge, GaugeSDKType } from "../../incentives/gauge";
import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryGaugeIdsRequest, QueryGaugeIdsRequestSDKType, QueryGaugeIdsResponse, QueryGaugeIdsResponseSDKType, QueryDistrInfoRequest, QueryDistrInfoRequestSDKType, QueryDistrInfoResponse, QueryDistrInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsRequestSDKType, QueryIncentivizedPoolsResponse, QueryIncentivizedPoolsResponseSDKType, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesRequestSDKType, QueryExternalIncentiveGaugesResponse, QueryExternalIncentiveGaugesResponseSDKType } from "./query";

/** Query defines the RPC service */
export interface Query {
  gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponseSDKType>;
  /*GaugeIds takes the pool id and returns the matching gauge ids and durations*/

  distrInfo(request: QueryDistrInfoRequest): Promise<QueryDistrInfoResponseSDKType>;
  /*null*/

  params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType>;
  /*null*/

  lockableDurations(request: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponseSDKType>;
  /*null*/

  incentivizedPools(request: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponseSDKType>;
  /*null*/

  externalIncentiveGauges(request: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponseSDKType>;
  /*null*/

}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.gaugeIds = this.gaugeIds.bind(this);
    this.distrInfo = this.distrInfo.bind(this);
    this.params = this.params.bind(this);
    this.lockableDurations = this.lockableDurations.bind(this);
    this.incentivizedPools = this.incentivizedPools.bind(this);
    this.externalIncentiveGauges = this.externalIncentiveGauges.bind(this);
  }

  gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponseSDKType> {
    const data = QueryGaugeIdsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "GaugeIds", data);
    return promise.then(data => QueryGaugeIdsResponse.decode(new _m0.Reader(data)));
  }

  distrInfo(request: QueryDistrInfoRequest = {}): Promise<QueryDistrInfoResponseSDKType> {
    const data = QueryDistrInfoRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "DistrInfo", data);
    return promise.then(data => QueryDistrInfoResponse.decode(new _m0.Reader(data)));
  }

  params(request: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  lockableDurations(request: QueryLockableDurationsRequest = {}): Promise<QueryLockableDurationsResponseSDKType> {
    const data = QueryLockableDurationsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "LockableDurations", data);
    return promise.then(data => QueryLockableDurationsResponse.decode(new _m0.Reader(data)));
  }

  incentivizedPools(request: QueryIncentivizedPoolsRequest = {}): Promise<QueryIncentivizedPoolsResponseSDKType> {
    const data = QueryIncentivizedPoolsRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "IncentivizedPools", data);
    return promise.then(data => QueryIncentivizedPoolsResponse.decode(new _m0.Reader(data)));
  }

  externalIncentiveGauges(request: QueryExternalIncentiveGaugesRequest = {}): Promise<QueryExternalIncentiveGaugesResponseSDKType> {
    const data = QueryExternalIncentiveGaugesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.poolincentives.v1beta1.Query", "ExternalIncentiveGauges", data);
    return promise.then(data => QueryExternalIncentiveGaugesResponse.decode(new _m0.Reader(data)));
  }

}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    gaugeIds(request: QueryGaugeIdsRequest): Promise<QueryGaugeIdsResponseSDKType> {
      return queryService.gaugeIds(request);
    },

    distrInfo(request: QueryDistrInfoRequest): Promise<QueryDistrInfoResponseSDKType> {
      return queryService.distrInfo(request);
    },

    params(request: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
      return queryService.params(request);
    },

    lockableDurations(request: QueryLockableDurationsRequest): Promise<QueryLockableDurationsResponseSDKType> {
      return queryService.lockableDurations(request);
    },

    incentivizedPools(request: QueryIncentivizedPoolsRequest): Promise<QueryIncentivizedPoolsResponseSDKType> {
      return queryService.incentivizedPools(request);
    },

    externalIncentiveGauges(request: QueryExternalIncentiveGaugesRequest): Promise<QueryExternalIncentiveGaugesResponseSDKType> {
      return queryService.externalIncentiveGauges(request);
    }

  };
};