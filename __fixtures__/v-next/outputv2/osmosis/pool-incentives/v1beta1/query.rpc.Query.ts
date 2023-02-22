import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoSDKType, Params, ParamsSDKType } from "./incentives";
import { Gauge, GaugeSDKType } from "../../incentives/gauge";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryGaugeIdsRequest, QueryGaugeIdsRequestSDKType, QueryGaugeIdsResponse, QueryGaugeIdsResponseSDKType, QueryDistrInfoRequest, QueryDistrInfoRequestSDKType, QueryDistrInfoResponse, QueryDistrInfoResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryLockableDurationsRequest, QueryLockableDurationsRequestSDKType, QueryLockableDurationsResponse, QueryLockableDurationsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsRequestSDKType, QueryIncentivizedPoolsResponse, QueryIncentivizedPoolsResponseSDKType, QueryExternalIncentiveGaugesRequest, QueryExternalIncentiveGaugesRequestSDKType, QueryExternalIncentiveGaugesResponse, QueryExternalIncentiveGaugesResponseSDKType } from "./query";
export interface Query {
  /** GaugeIds takes the pool id and returns the matching gauge ids and durations */
  GaugeIds(request: DeepPartial<QueryGaugeIdsRequest>, metadata?: grpc.Metadata): Promise<QueryGaugeIdsResponse>;

  /** DistrInfo returns the pool's matching gauge ids and weights. */
  DistrInfo(request?: DeepPartial<QueryDistrInfoRequest>, metadata?: grpc.Metadata): Promise<QueryDistrInfoResponse>;

  /** Params returns pool incentives params. */
  Params(request?: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;

  /** LockableDurations returns lock durations for pools. */
  LockableDurations(request?: DeepPartial<QueryLockableDurationsRequest>, metadata?: grpc.Metadata): Promise<QueryLockableDurationsResponse>;

  /** IncentivizedPools returns currently incentivized pools */
  IncentivizedPools(request?: DeepPartial<QueryIncentivizedPoolsRequest>, metadata?: grpc.Metadata): Promise<QueryIncentivizedPoolsResponse>;

  /** ExternalIncentiveGauges returns external incentive gauges. */
  ExternalIncentiveGauges(request?: DeepPartial<QueryExternalIncentiveGaugesRequest>, metadata?: grpc.Metadata): Promise<QueryExternalIncentiveGaugesResponse>;
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

  gaugeIds(request: DeepPartial<QueryGaugeIdsRequest>, metadata?: grpc.Metadata): Promise<QueryGaugeIdsResponse> {
    return this.rpc.unary(QueryGaugeIdsDesc, QueryGaugeIdsRequest.fromPartial(request), metadata);
  }

  distrInfo(request: DeepPartial<QueryDistrInfoRequest> = {}, metadata?: grpc.Metadata): Promise<QueryDistrInfoResponse> {
    return this.rpc.unary(QueryDistrInfoDesc, QueryDistrInfoRequest.fromPartial(request), metadata);
  }

  params(request: DeepPartial<QueryParamsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  lockableDurations(request: DeepPartial<QueryLockableDurationsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryLockableDurationsResponse> {
    return this.rpc.unary(QueryLockableDurationsDesc, QueryLockableDurationsRequest.fromPartial(request), metadata);
  }

  incentivizedPools(request: DeepPartial<QueryIncentivizedPoolsRequest> = {}, metadata?: grpc.Metadata): Promise<QueryIncentivizedPoolsResponse> {
    return this.rpc.unary(QueryIncentivizedPoolsDesc, QueryIncentivizedPoolsRequest.fromPartial(request), metadata);
  }

  externalIncentiveGauges(request: DeepPartial<QueryExternalIncentiveGaugesRequest> = {}, metadata?: grpc.Metadata): Promise<QueryExternalIncentiveGaugesResponse> {
    return this.rpc.unary(QueryExternalIncentiveGaugesDesc, QueryExternalIncentiveGaugesRequest.fromPartial(request), metadata);
  }

}