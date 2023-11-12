import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { DistrInfo, DistrInfoSDKType, Params, ParamsSDKType } from "./incentives";
import { Gauge, GaugeSDKType } from "../../incentives/gauge";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.poolincentives.v1beta1";
export interface QueryGaugeIdsRequest {
  poolId: bigint;
}
export interface QueryGaugeIdsRequestProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest";
  value: Uint8Array;
}
export interface QueryGaugeIdsRequestSDKType {
  pool_id: bigint;
}
export interface QueryGaugeIdsResponse {
  gaugeIdsWithDuration: QueryGaugeIdsResponse_GaugeIdWithDuration[];
}
export interface QueryGaugeIdsResponseProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse";
  value: Uint8Array;
}
export interface QueryGaugeIdsResponseSDKType {
  gauge_ids_with_duration: QueryGaugeIdsResponse_GaugeIdWithDurationSDKType[];
}
export interface QueryGaugeIdsResponse_GaugeIdWithDuration {
  gaugeId: bigint;
  duration: Duration;
  gaugeIncentivePercentage: string;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration";
  value: Uint8Array;
}
export interface QueryGaugeIdsResponse_GaugeIdWithDurationSDKType {
  gauge_id: bigint;
  duration: DurationSDKType;
  gauge_incentive_percentage: string;
}
export interface QueryDistrInfoRequest {}
export interface QueryDistrInfoRequestProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest";
  value: Uint8Array;
}
export interface QueryDistrInfoRequestSDKType {}
export interface QueryDistrInfoResponse {
  distrInfo: DistrInfo;
}
export interface QueryDistrInfoResponseProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse";
  value: Uint8Array;
}
export interface QueryDistrInfoResponseSDKType {
  distr_info: DistrInfoSDKType;
}
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
export interface QueryParamsRequestSDKType {}
export interface QueryParamsResponse {
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryLockableDurationsRequest {}
export interface QueryLockableDurationsRequestProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest";
  value: Uint8Array;
}
export interface QueryLockableDurationsRequestSDKType {}
export interface QueryLockableDurationsResponse {
  lockableDurations: Duration[];
}
export interface QueryLockableDurationsResponseProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse";
  value: Uint8Array;
}
export interface QueryLockableDurationsResponseSDKType {
  lockable_durations: DurationSDKType[];
}
export interface QueryIncentivizedPoolsRequest {}
export interface QueryIncentivizedPoolsRequestProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest";
  value: Uint8Array;
}
export interface QueryIncentivizedPoolsRequestSDKType {}
export interface IncentivizedPool {
  poolId: bigint;
  lockableDuration: Duration;
  gaugeId: bigint;
}
export interface IncentivizedPoolProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool";
  value: Uint8Array;
}
export interface IncentivizedPoolSDKType {
  pool_id: bigint;
  lockable_duration: DurationSDKType;
  gauge_id: bigint;
}
export interface QueryIncentivizedPoolsResponse {
  incentivizedPools: IncentivizedPool[];
}
export interface QueryIncentivizedPoolsResponseProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse";
  value: Uint8Array;
}
export interface QueryIncentivizedPoolsResponseSDKType {
  incentivized_pools: IncentivizedPoolSDKType[];
}
export interface QueryExternalIncentiveGaugesRequest {}
export interface QueryExternalIncentiveGaugesRequestProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest";
  value: Uint8Array;
}
export interface QueryExternalIncentiveGaugesRequestSDKType {}
export interface QueryExternalIncentiveGaugesResponse {
  data: Gauge[];
}
export interface QueryExternalIncentiveGaugesResponseProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse";
  value: Uint8Array;
}
export interface QueryExternalIncentiveGaugesResponseSDKType {
  data: GaugeSDKType[];
}
function createBaseQueryGaugeIdsRequest(): QueryGaugeIdsRequest {
  return {
    poolId: BigInt(0)
  };
}
export const QueryGaugeIdsRequest = {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest",
  encode(message: QueryGaugeIdsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== undefined) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGaugeIdsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeIdsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGaugeIdsRequest {
    const obj = createBaseQueryGaugeIdsRequest();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    return obj;
  },
  toJSON(message: QueryGaugeIdsRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGaugeIdsRequest>): QueryGaugeIdsRequest {
    const message = createBaseQueryGaugeIdsRequest();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    return message;
  },
  fromSDK(object: QueryGaugeIdsRequestSDKType): QueryGaugeIdsRequest {
    return {
      poolId: object?.pool_id
    };
  },
  fromSDKJSON(object: any): QueryGaugeIdsRequestSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0)
    };
  },
  toSDK(message: QueryGaugeIdsRequest): QueryGaugeIdsRequestSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    return obj;
  },
  fromAmino(object: QueryGaugeIdsRequestAmino): QueryGaugeIdsRequest {
    return {
      poolId: BigInt(object.pool_id)
    };
  },
  toAmino(message: QueryGaugeIdsRequest): QueryGaugeIdsRequestAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGaugeIdsRequestAminoMsg): QueryGaugeIdsRequest {
    return QueryGaugeIdsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGaugeIdsRequest): QueryGaugeIdsRequestAminoMsg {
    return {
      type: "osmosis/poolincentives/query-gauge-ids-request",
      value: QueryGaugeIdsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGaugeIdsRequestProtoMsg): QueryGaugeIdsRequest {
    return QueryGaugeIdsRequest.decode(message.value);
  },
  toProto(message: QueryGaugeIdsRequest): Uint8Array {
    return QueryGaugeIdsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGaugeIdsRequest): QueryGaugeIdsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsRequest",
      value: QueryGaugeIdsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGaugeIdsResponse(): QueryGaugeIdsResponse {
  return {
    gaugeIdsWithDuration: []
  };
}
export const QueryGaugeIdsResponse = {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse",
  encode(message: QueryGaugeIdsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.gaugeIdsWithDuration) {
      QueryGaugeIdsResponse_GaugeIdWithDuration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGaugeIdsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeIdsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gaugeIdsWithDuration.push(QueryGaugeIdsResponse_GaugeIdWithDuration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGaugeIdsResponse {
    const obj = createBaseQueryGaugeIdsResponse();
    if (Array.isArray(object?.gaugeIdsWithDuration)) obj.gaugeIdsWithDuration = object.gaugeIdsWithDuration.map((e: any) => QueryGaugeIdsResponse_GaugeIdWithDuration.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryGaugeIdsResponse): unknown {
    const obj: any = {};
    if (message.gaugeIdsWithDuration) {
      obj.gaugeIdsWithDuration = message.gaugeIdsWithDuration.map(e => e ? QueryGaugeIdsResponse_GaugeIdWithDuration.toJSON(e) : undefined);
    } else {
      obj.gaugeIdsWithDuration = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGaugeIdsResponse>): QueryGaugeIdsResponse {
    const message = createBaseQueryGaugeIdsResponse();
    message.gaugeIdsWithDuration = object.gaugeIdsWithDuration?.map(e => QueryGaugeIdsResponse_GaugeIdWithDuration.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryGaugeIdsResponseSDKType): QueryGaugeIdsResponse {
    return {
      gaugeIdsWithDuration: Array.isArray(object?.gauge_ids_with_duration) ? object.gauge_ids_with_duration.map((e: any) => QueryGaugeIdsResponse_GaugeIdWithDuration.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryGaugeIdsResponseSDKType {
    return {
      gauge_ids_with_duration: Array.isArray(object?.gauge_ids_with_duration) ? object.gauge_ids_with_duration.map((e: any) => QueryGaugeIdsResponse_GaugeIdWithDuration.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryGaugeIdsResponse): QueryGaugeIdsResponseSDKType {
    const obj: any = {};
    if (message.gaugeIdsWithDuration) {
      obj.gauge_ids_with_duration = message.gaugeIdsWithDuration.map(e => e ? QueryGaugeIdsResponse_GaugeIdWithDuration.toSDK(e) : undefined);
    } else {
      obj.gauge_ids_with_duration = [];
    }
    return obj;
  },
  fromAmino(object: QueryGaugeIdsResponseAmino): QueryGaugeIdsResponse {
    return {
      gaugeIdsWithDuration: Array.isArray(object?.gauge_ids_with_duration) ? object.gauge_ids_with_duration.map((e: any) => QueryGaugeIdsResponse_GaugeIdWithDuration.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryGaugeIdsResponse): QueryGaugeIdsResponseAmino {
    const obj: any = {};
    if (message.gaugeIdsWithDuration) {
      obj.gauge_ids_with_duration = message.gaugeIdsWithDuration.map(e => e ? QueryGaugeIdsResponse_GaugeIdWithDuration.toAmino(e) : undefined);
    } else {
      obj.gauge_ids_with_duration = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGaugeIdsResponseAminoMsg): QueryGaugeIdsResponse {
    return QueryGaugeIdsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGaugeIdsResponse): QueryGaugeIdsResponseAminoMsg {
    return {
      type: "osmosis/poolincentives/query-gauge-ids-response",
      value: QueryGaugeIdsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGaugeIdsResponseProtoMsg): QueryGaugeIdsResponse {
    return QueryGaugeIdsResponse.decode(message.value);
  },
  toProto(message: QueryGaugeIdsResponse): Uint8Array {
    return QueryGaugeIdsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGaugeIdsResponse): QueryGaugeIdsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.QueryGaugeIdsResponse",
      value: QueryGaugeIdsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGaugeIdsResponse_GaugeIdWithDuration(): QueryGaugeIdsResponse_GaugeIdWithDuration {
  return {
    gaugeId: BigInt(0),
    duration: Duration.fromPartial({}),
    gaugeIncentivePercentage: ""
  };
}
export const QueryGaugeIdsResponse_GaugeIdWithDuration = {
  typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration",
  encode(message: QueryGaugeIdsResponse_GaugeIdWithDuration, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gaugeId !== undefined) {
      writer.uint32(8).uint64(message.gaugeId);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(18).fork()).ldelim();
    }
    if (message.gaugeIncentivePercentage !== undefined) {
      writer.uint32(26).string(message.gaugeIncentivePercentage);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGaugeIdsResponse_GaugeIdWithDuration {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gaugeId = reader.uint64();
          break;
        case 2:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.gaugeIncentivePercentage = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGaugeIdsResponse_GaugeIdWithDuration {
    const obj = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
    if (isSet(object.gaugeId)) obj.gaugeId = BigInt(object.gaugeId.toString());
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    if (isSet(object.gaugeIncentivePercentage)) obj.gaugeIncentivePercentage = String(object.gaugeIncentivePercentage);
    return obj;
  },
  toJSON(message: QueryGaugeIdsResponse_GaugeIdWithDuration): unknown {
    const obj: any = {};
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.gaugeIncentivePercentage !== undefined && (obj.gaugeIncentivePercentage = message.gaugeIncentivePercentage);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryGaugeIdsResponse_GaugeIdWithDuration>): QueryGaugeIdsResponse_GaugeIdWithDuration {
    const message = createBaseQueryGaugeIdsResponse_GaugeIdWithDuration();
    if (object.gaugeId !== undefined && object.gaugeId !== null) {
      message.gaugeId = BigInt(object.gaugeId.toString());
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    message.gaugeIncentivePercentage = object.gaugeIncentivePercentage ?? "";
    return message;
  },
  fromSDK(object: QueryGaugeIdsResponse_GaugeIdWithDurationSDKType): QueryGaugeIdsResponse_GaugeIdWithDuration {
    return {
      gaugeId: object?.gauge_id,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined,
      gaugeIncentivePercentage: object?.gauge_incentive_percentage
    };
  },
  fromSDKJSON(object: any): QueryGaugeIdsResponse_GaugeIdWithDurationSDKType {
    return {
      gauge_id: isSet(object.gauge_id) ? BigInt(object.gauge_id.toString()) : BigInt(0),
      duration: isSet(object.duration) ? Duration.fromSDKJSON(object.duration) : undefined,
      gauge_incentive_percentage: isSet(object.gauge_incentive_percentage) ? String(object.gauge_incentive_percentage) : ""
    };
  },
  toSDK(message: QueryGaugeIdsResponse_GaugeIdWithDuration): QueryGaugeIdsResponse_GaugeIdWithDurationSDKType {
    const obj: any = {};
    obj.gauge_id = message.gaugeId;
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    obj.gauge_incentive_percentage = message.gaugeIncentivePercentage;
    return obj;
  },
  fromAmino(object: QueryGaugeIdsResponse_GaugeIdWithDurationAmino): QueryGaugeIdsResponse_GaugeIdWithDuration {
    return {
      gaugeId: BigInt(object.gauge_id),
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
      gaugeIncentivePercentage: object.gauge_incentive_percentage
    };
  },
  toAmino(message: QueryGaugeIdsResponse_GaugeIdWithDuration): QueryGaugeIdsResponse_GaugeIdWithDurationAmino {
    const obj: any = {};
    obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.gauge_incentive_percentage = message.gaugeIncentivePercentage;
    return obj;
  },
  fromAminoMsg(object: QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg): QueryGaugeIdsResponse_GaugeIdWithDuration {
    return QueryGaugeIdsResponse_GaugeIdWithDuration.fromAmino(object.value);
  },
  toAminoMsg(message: QueryGaugeIdsResponse_GaugeIdWithDuration): QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg {
    return {
      type: "osmosis/poolincentives/gauge-id-with-duration",
      value: QueryGaugeIdsResponse_GaugeIdWithDuration.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg): QueryGaugeIdsResponse_GaugeIdWithDuration {
    return QueryGaugeIdsResponse_GaugeIdWithDuration.decode(message.value);
  },
  toProto(message: QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array {
    return QueryGaugeIdsResponse_GaugeIdWithDuration.encode(message).finish();
  },
  toProtoMsg(message: QueryGaugeIdsResponse_GaugeIdWithDuration): QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.GaugeIdWithDuration",
      value: QueryGaugeIdsResponse_GaugeIdWithDuration.encode(message).finish()
    };
  }
};
function createBaseQueryDistrInfoRequest(): QueryDistrInfoRequest {
  return {};
}
export const QueryDistrInfoRequest = {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest",
  encode(_: QueryDistrInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDistrInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDistrInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryDistrInfoRequest {
    const obj = createBaseQueryDistrInfoRequest();
    return obj;
  },
  toJSON(_: QueryDistrInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryDistrInfoRequest>): QueryDistrInfoRequest {
    const message = createBaseQueryDistrInfoRequest();
    return message;
  },
  fromSDK(_: QueryDistrInfoRequestSDKType): QueryDistrInfoRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryDistrInfoRequestSDKType {
    return {};
  },
  toSDK(_: QueryDistrInfoRequest): QueryDistrInfoRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryDistrInfoRequestAmino): QueryDistrInfoRequest {
    return {};
  },
  toAmino(_: QueryDistrInfoRequest): QueryDistrInfoRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryDistrInfoRequestAminoMsg): QueryDistrInfoRequest {
    return QueryDistrInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDistrInfoRequest): QueryDistrInfoRequestAminoMsg {
    return {
      type: "osmosis/poolincentives/query-distr-info-request",
      value: QueryDistrInfoRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDistrInfoRequestProtoMsg): QueryDistrInfoRequest {
    return QueryDistrInfoRequest.decode(message.value);
  },
  toProto(message: QueryDistrInfoRequest): Uint8Array {
    return QueryDistrInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDistrInfoRequest): QueryDistrInfoRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoRequest",
      value: QueryDistrInfoRequest.encode(message).finish()
    };
  }
};
function createBaseQueryDistrInfoResponse(): QueryDistrInfoResponse {
  return {
    distrInfo: DistrInfo.fromPartial({})
  };
}
export const QueryDistrInfoResponse = {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse",
  encode(message: QueryDistrInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.distrInfo !== undefined) {
      DistrInfo.encode(message.distrInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDistrInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDistrInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distrInfo = DistrInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDistrInfoResponse {
    const obj = createBaseQueryDistrInfoResponse();
    if (isSet(object.distrInfo)) obj.distrInfo = DistrInfo.fromJSON(object.distrInfo);
    return obj;
  },
  toJSON(message: QueryDistrInfoResponse): unknown {
    const obj: any = {};
    message.distrInfo !== undefined && (obj.distrInfo = message.distrInfo ? DistrInfo.toJSON(message.distrInfo) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryDistrInfoResponse>): QueryDistrInfoResponse {
    const message = createBaseQueryDistrInfoResponse();
    if (object.distrInfo !== undefined && object.distrInfo !== null) {
      message.distrInfo = DistrInfo.fromPartial(object.distrInfo);
    }
    return message;
  },
  fromSDK(object: QueryDistrInfoResponseSDKType): QueryDistrInfoResponse {
    return {
      distrInfo: object.distr_info ? DistrInfo.fromSDK(object.distr_info) : undefined
    };
  },
  fromSDKJSON(object: any): QueryDistrInfoResponseSDKType {
    return {
      distr_info: isSet(object.distr_info) ? DistrInfo.fromSDKJSON(object.distr_info) : undefined
    };
  },
  toSDK(message: QueryDistrInfoResponse): QueryDistrInfoResponseSDKType {
    const obj: any = {};
    message.distrInfo !== undefined && (obj.distr_info = message.distrInfo ? DistrInfo.toSDK(message.distrInfo) : undefined);
    return obj;
  },
  fromAmino(object: QueryDistrInfoResponseAmino): QueryDistrInfoResponse {
    return {
      distrInfo: object?.distr_info ? DistrInfo.fromAmino(object.distr_info) : undefined
    };
  },
  toAmino(message: QueryDistrInfoResponse): QueryDistrInfoResponseAmino {
    const obj: any = {};
    obj.distr_info = message.distrInfo ? DistrInfo.toAmino(message.distrInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDistrInfoResponseAminoMsg): QueryDistrInfoResponse {
    return QueryDistrInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDistrInfoResponse): QueryDistrInfoResponseAminoMsg {
    return {
      type: "osmosis/poolincentives/query-distr-info-response",
      value: QueryDistrInfoResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryDistrInfoResponseProtoMsg): QueryDistrInfoResponse {
    return QueryDistrInfoResponse.decode(message.value);
  },
  toProto(message: QueryDistrInfoResponse): Uint8Array {
    return QueryDistrInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDistrInfoResponse): QueryDistrInfoResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.QueryDistrInfoResponse",
      value: QueryDistrInfoResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromSDK(_: QueryParamsRequestSDKType): QueryParamsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryParamsRequestSDKType {
    return {};
  },
  toSDK(_: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "osmosis/poolincentives/query-params-request",
      value: QueryParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined
    };
  },
  fromSDKJSON(object: any): QueryParamsResponseSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined
    };
  },
  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    return obj;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "osmosis/poolincentives/query-params-response",
      value: QueryParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryLockableDurationsRequest(): QueryLockableDurationsRequest {
  return {};
}
export const QueryLockableDurationsRequest = {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest",
  encode(_: QueryLockableDurationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockableDurationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryLockableDurationsRequest {
    const obj = createBaseQueryLockableDurationsRequest();
    return obj;
  },
  toJSON(_: QueryLockableDurationsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryLockableDurationsRequest>): QueryLockableDurationsRequest {
    const message = createBaseQueryLockableDurationsRequest();
    return message;
  },
  fromSDK(_: QueryLockableDurationsRequestSDKType): QueryLockableDurationsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryLockableDurationsRequestSDKType {
    return {};
  },
  toSDK(_: QueryLockableDurationsRequest): QueryLockableDurationsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryLockableDurationsRequestAmino): QueryLockableDurationsRequest {
    return {};
  },
  toAmino(_: QueryLockableDurationsRequest): QueryLockableDurationsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryLockableDurationsRequestAminoMsg): QueryLockableDurationsRequest {
    return QueryLockableDurationsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLockableDurationsRequest): QueryLockableDurationsRequestAminoMsg {
    return {
      type: "osmosis/poolincentives/query-lockable-durations-request",
      value: QueryLockableDurationsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLockableDurationsRequestProtoMsg): QueryLockableDurationsRequest {
    return QueryLockableDurationsRequest.decode(message.value);
  },
  toProto(message: QueryLockableDurationsRequest): Uint8Array {
    return QueryLockableDurationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryLockableDurationsRequest): QueryLockableDurationsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsRequest",
      value: QueryLockableDurationsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryLockableDurationsResponse(): QueryLockableDurationsResponse {
  return {
    lockableDurations: []
  };
}
export const QueryLockableDurationsResponse = {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse",
  encode(message: QueryLockableDurationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryLockableDurationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLockableDurationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryLockableDurationsResponse {
    const obj = createBaseQueryLockableDurationsResponse();
    if (Array.isArray(object?.lockableDurations)) obj.lockableDurations = object.lockableDurations.map((e: any) => Duration.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryLockableDurationsResponse): unknown {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockableDurations = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryLockableDurationsResponse>): QueryLockableDurationsResponse {
    const message = createBaseQueryLockableDurationsResponse();
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryLockableDurationsResponseSDKType): QueryLockableDurationsResponse {
    return {
      lockableDurations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryLockableDurationsResponseSDKType {
    return {
      lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseSDKType {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toSDK(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }
    return obj;
  },
  fromAmino(object: QueryLockableDurationsResponseAmino): QueryLockableDurationsResponse {
    return {
      lockableDurations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseAmino {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryLockableDurationsResponseAminoMsg): QueryLockableDurationsResponse {
    return QueryLockableDurationsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseAminoMsg {
    return {
      type: "osmosis/poolincentives/query-lockable-durations-response",
      value: QueryLockableDurationsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryLockableDurationsResponseProtoMsg): QueryLockableDurationsResponse {
    return QueryLockableDurationsResponse.decode(message.value);
  },
  toProto(message: QueryLockableDurationsResponse): Uint8Array {
    return QueryLockableDurationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryLockableDurationsResponse): QueryLockableDurationsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.QueryLockableDurationsResponse",
      value: QueryLockableDurationsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryIncentivizedPoolsRequest(): QueryIncentivizedPoolsRequest {
  return {};
}
export const QueryIncentivizedPoolsRequest = {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest",
  encode(_: QueryIncentivizedPoolsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPoolsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryIncentivizedPoolsRequest {
    const obj = createBaseQueryIncentivizedPoolsRequest();
    return obj;
  },
  toJSON(_: QueryIncentivizedPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryIncentivizedPoolsRequest>): QueryIncentivizedPoolsRequest {
    const message = createBaseQueryIncentivizedPoolsRequest();
    return message;
  },
  fromSDK(_: QueryIncentivizedPoolsRequestSDKType): QueryIncentivizedPoolsRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryIncentivizedPoolsRequestSDKType {
    return {};
  },
  toSDK(_: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryIncentivizedPoolsRequestAmino): QueryIncentivizedPoolsRequest {
    return {};
  },
  toAmino(_: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPoolsRequestAminoMsg): QueryIncentivizedPoolsRequest {
    return QueryIncentivizedPoolsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestAminoMsg {
    return {
      type: "osmosis/poolincentives/query-incentivized-pools-request",
      value: QueryIncentivizedPoolsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPoolsRequestProtoMsg): QueryIncentivizedPoolsRequest {
    return QueryIncentivizedPoolsRequest.decode(message.value);
  },
  toProto(message: QueryIncentivizedPoolsRequest): Uint8Array {
    return QueryIncentivizedPoolsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPoolsRequest): QueryIncentivizedPoolsRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsRequest",
      value: QueryIncentivizedPoolsRequest.encode(message).finish()
    };
  }
};
function createBaseIncentivizedPool(): IncentivizedPool {
  return {
    poolId: BigInt(0),
    lockableDuration: Duration.fromPartial({}),
    gaugeId: BigInt(0)
  };
}
export const IncentivizedPool = {
  typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool",
  encode(message: IncentivizedPool, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== undefined) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.lockableDuration !== undefined) {
      Duration.encode(message.lockableDuration, writer.uint32(18).fork()).ldelim();
    }
    if (message.gaugeId !== undefined) {
      writer.uint32(24).uint64(message.gaugeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): IncentivizedPool {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIncentivizedPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.lockableDuration = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.gaugeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IncentivizedPool {
    const obj = createBaseIncentivizedPool();
    if (isSet(object.poolId)) obj.poolId = BigInt(object.poolId.toString());
    if (isSet(object.lockableDuration)) obj.lockableDuration = Duration.fromJSON(object.lockableDuration);
    if (isSet(object.gaugeId)) obj.gaugeId = BigInt(object.gaugeId.toString());
    return obj;
  },
  toJSON(message: IncentivizedPool): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || BigInt(0)).toString());
    message.lockableDuration !== undefined && (obj.lockableDuration = message.lockableDuration ? Duration.toJSON(message.lockableDuration) : undefined);
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<IncentivizedPool>): IncentivizedPool {
    const message = createBaseIncentivizedPool();
    if (object.poolId !== undefined && object.poolId !== null) {
      message.poolId = BigInt(object.poolId.toString());
    }
    if (object.lockableDuration !== undefined && object.lockableDuration !== null) {
      message.lockableDuration = Duration.fromPartial(object.lockableDuration);
    }
    if (object.gaugeId !== undefined && object.gaugeId !== null) {
      message.gaugeId = BigInt(object.gaugeId.toString());
    }
    return message;
  },
  fromSDK(object: IncentivizedPoolSDKType): IncentivizedPool {
    return {
      poolId: object?.pool_id,
      lockableDuration: object.lockable_duration ? Duration.fromSDK(object.lockable_duration) : undefined,
      gaugeId: object?.gauge_id
    };
  },
  fromSDKJSON(object: any): IncentivizedPoolSDKType {
    return {
      pool_id: isSet(object.pool_id) ? BigInt(object.pool_id.toString()) : BigInt(0),
      lockable_duration: isSet(object.lockable_duration) ? Duration.fromSDKJSON(object.lockable_duration) : undefined,
      gauge_id: isSet(object.gauge_id) ? BigInt(object.gauge_id.toString()) : BigInt(0)
    };
  },
  toSDK(message: IncentivizedPool): IncentivizedPoolSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    message.lockableDuration !== undefined && (obj.lockable_duration = message.lockableDuration ? Duration.toSDK(message.lockableDuration) : undefined);
    obj.gauge_id = message.gaugeId;
    return obj;
  },
  fromAmino(object: IncentivizedPoolAmino): IncentivizedPool {
    return {
      poolId: BigInt(object.pool_id),
      lockableDuration: object?.lockable_duration ? Duration.fromAmino(object.lockable_duration) : undefined,
      gaugeId: BigInt(object.gauge_id)
    };
  },
  toAmino(message: IncentivizedPool): IncentivizedPoolAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.lockable_duration = message.lockableDuration ? Duration.toAmino(message.lockableDuration) : undefined;
    obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: IncentivizedPoolAminoMsg): IncentivizedPool {
    return IncentivizedPool.fromAmino(object.value);
  },
  toAminoMsg(message: IncentivizedPool): IncentivizedPoolAminoMsg {
    return {
      type: "osmosis/poolincentives/incentivized-pool",
      value: IncentivizedPool.toAmino(message)
    };
  },
  fromProtoMsg(message: IncentivizedPoolProtoMsg): IncentivizedPool {
    return IncentivizedPool.decode(message.value);
  },
  toProto(message: IncentivizedPool): Uint8Array {
    return IncentivizedPool.encode(message).finish();
  },
  toProtoMsg(message: IncentivizedPool): IncentivizedPoolProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.IncentivizedPool",
      value: IncentivizedPool.encode(message).finish()
    };
  }
};
function createBaseQueryIncentivizedPoolsResponse(): QueryIncentivizedPoolsResponse {
  return {
    incentivizedPools: []
  };
}
export const QueryIncentivizedPoolsResponse = {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse",
  encode(message: QueryIncentivizedPoolsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.incentivizedPools) {
      IncentivizedPool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryIncentivizedPoolsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryIncentivizedPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.incentivizedPools.push(IncentivizedPool.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryIncentivizedPoolsResponse {
    const obj = createBaseQueryIncentivizedPoolsResponse();
    if (Array.isArray(object?.incentivizedPools)) obj.incentivizedPools = object.incentivizedPools.map((e: any) => IncentivizedPool.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryIncentivizedPoolsResponse): unknown {
    const obj: any = {};
    if (message.incentivizedPools) {
      obj.incentivizedPools = message.incentivizedPools.map(e => e ? IncentivizedPool.toJSON(e) : undefined);
    } else {
      obj.incentivizedPools = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryIncentivizedPoolsResponse>): QueryIncentivizedPoolsResponse {
    const message = createBaseQueryIncentivizedPoolsResponse();
    message.incentivizedPools = object.incentivizedPools?.map(e => IncentivizedPool.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryIncentivizedPoolsResponseSDKType): QueryIncentivizedPoolsResponse {
    return {
      incentivizedPools: Array.isArray(object?.incentivized_pools) ? object.incentivized_pools.map((e: any) => IncentivizedPool.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryIncentivizedPoolsResponseSDKType {
    return {
      incentivized_pools: Array.isArray(object?.incentivized_pools) ? object.incentivized_pools.map((e: any) => IncentivizedPool.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseSDKType {
    const obj: any = {};
    if (message.incentivizedPools) {
      obj.incentivized_pools = message.incentivizedPools.map(e => e ? IncentivizedPool.toSDK(e) : undefined);
    } else {
      obj.incentivized_pools = [];
    }
    return obj;
  },
  fromAmino(object: QueryIncentivizedPoolsResponseAmino): QueryIncentivizedPoolsResponse {
    return {
      incentivizedPools: Array.isArray(object?.incentivized_pools) ? object.incentivized_pools.map((e: any) => IncentivizedPool.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseAmino {
    const obj: any = {};
    if (message.incentivizedPools) {
      obj.incentivized_pools = message.incentivizedPools.map(e => e ? IncentivizedPool.toAmino(e) : undefined);
    } else {
      obj.incentivized_pools = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryIncentivizedPoolsResponseAminoMsg): QueryIncentivizedPoolsResponse {
    return QueryIncentivizedPoolsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseAminoMsg {
    return {
      type: "osmosis/poolincentives/query-incentivized-pools-response",
      value: QueryIncentivizedPoolsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryIncentivizedPoolsResponseProtoMsg): QueryIncentivizedPoolsResponse {
    return QueryIncentivizedPoolsResponse.decode(message.value);
  },
  toProto(message: QueryIncentivizedPoolsResponse): Uint8Array {
    return QueryIncentivizedPoolsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryIncentivizedPoolsResponse): QueryIncentivizedPoolsResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.QueryIncentivizedPoolsResponse",
      value: QueryIncentivizedPoolsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryExternalIncentiveGaugesRequest(): QueryExternalIncentiveGaugesRequest {
  return {};
}
export const QueryExternalIncentiveGaugesRequest = {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest",
  encode(_: QueryExternalIncentiveGaugesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExternalIncentiveGaugesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalIncentiveGaugesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryExternalIncentiveGaugesRequest {
    const obj = createBaseQueryExternalIncentiveGaugesRequest();
    return obj;
  },
  toJSON(_: QueryExternalIncentiveGaugesRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<QueryExternalIncentiveGaugesRequest>): QueryExternalIncentiveGaugesRequest {
    const message = createBaseQueryExternalIncentiveGaugesRequest();
    return message;
  },
  fromSDK(_: QueryExternalIncentiveGaugesRequestSDKType): QueryExternalIncentiveGaugesRequest {
    return {};
  },
  fromSDKJSON(_: any): QueryExternalIncentiveGaugesRequestSDKType {
    return {};
  },
  toSDK(_: QueryExternalIncentiveGaugesRequest): QueryExternalIncentiveGaugesRequestSDKType {
    const obj: any = {};
    return obj;
  },
  fromAmino(_: QueryExternalIncentiveGaugesRequestAmino): QueryExternalIncentiveGaugesRequest {
    return {};
  },
  toAmino(_: QueryExternalIncentiveGaugesRequest): QueryExternalIncentiveGaugesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryExternalIncentiveGaugesRequestAminoMsg): QueryExternalIncentiveGaugesRequest {
    return QueryExternalIncentiveGaugesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryExternalIncentiveGaugesRequest): QueryExternalIncentiveGaugesRequestAminoMsg {
    return {
      type: "osmosis/poolincentives/query-external-incentive-gauges-request",
      value: QueryExternalIncentiveGaugesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryExternalIncentiveGaugesRequestProtoMsg): QueryExternalIncentiveGaugesRequest {
    return QueryExternalIncentiveGaugesRequest.decode(message.value);
  },
  toProto(message: QueryExternalIncentiveGaugesRequest): Uint8Array {
    return QueryExternalIncentiveGaugesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExternalIncentiveGaugesRequest): QueryExternalIncentiveGaugesRequestProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesRequest",
      value: QueryExternalIncentiveGaugesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExternalIncentiveGaugesResponse(): QueryExternalIncentiveGaugesResponse {
  return {
    data: []
  };
}
export const QueryExternalIncentiveGaugesResponse = {
  typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse",
  encode(message: QueryExternalIncentiveGaugesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.data) {
      Gauge.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExternalIncentiveGaugesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExternalIncentiveGaugesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data.push(Gauge.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryExternalIncentiveGaugesResponse {
    const obj = createBaseQueryExternalIncentiveGaugesResponse();
    if (Array.isArray(object?.data)) obj.data = object.data.map((e: any) => Gauge.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryExternalIncentiveGaugesResponse): unknown {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.data = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<QueryExternalIncentiveGaugesResponse>): QueryExternalIncentiveGaugesResponse {
    const message = createBaseQueryExternalIncentiveGaugesResponse();
    message.data = object.data?.map(e => Gauge.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: QueryExternalIncentiveGaugesResponseSDKType): QueryExternalIncentiveGaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): QueryExternalIncentiveGaugesResponseSDKType {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: QueryExternalIncentiveGaugesResponse): QueryExternalIncentiveGaugesResponseSDKType {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toSDK(e) : undefined);
    } else {
      obj.data = [];
    }
    return obj;
  },
  fromAmino(object: QueryExternalIncentiveGaugesResponseAmino): QueryExternalIncentiveGaugesResponse {
    return {
      data: Array.isArray(object?.data) ? object.data.map((e: any) => Gauge.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryExternalIncentiveGaugesResponse): QueryExternalIncentiveGaugesResponseAmino {
    const obj: any = {};
    if (message.data) {
      obj.data = message.data.map(e => e ? Gauge.toAmino(e) : undefined);
    } else {
      obj.data = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryExternalIncentiveGaugesResponseAminoMsg): QueryExternalIncentiveGaugesResponse {
    return QueryExternalIncentiveGaugesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryExternalIncentiveGaugesResponse): QueryExternalIncentiveGaugesResponseAminoMsg {
    return {
      type: "osmosis/poolincentives/query-external-incentive-gauges-response",
      value: QueryExternalIncentiveGaugesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryExternalIncentiveGaugesResponseProtoMsg): QueryExternalIncentiveGaugesResponse {
    return QueryExternalIncentiveGaugesResponse.decode(message.value);
  },
  toProto(message: QueryExternalIncentiveGaugesResponse): Uint8Array {
    return QueryExternalIncentiveGaugesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExternalIncentiveGaugesResponse): QueryExternalIncentiveGaugesResponseProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.QueryExternalIncentiveGaugesResponse",
      value: QueryExternalIncentiveGaugesResponse.encode(message).finish()
    };
  }
};