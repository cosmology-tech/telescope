import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "../../../helpers";
export const protobufPackage = "osmosis.poolincentives.v1beta1";
export interface Params {
  /**
   * minted_denom is the denomination of the coin expected to be minted by the
   * minting module. Pool-incentives module doesn’t actually mint the coin
   * itself, but rather manages the distribution of coins that matches the
   * defined minted_denom.
   */
  mintedDenom: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  /**
   * minted_denom is the denomination of the coin expected to be minted by the
   * minting module. Pool-incentives module doesn’t actually mint the coin
   * itself, but rather manages the distribution of coins that matches the
   * defined minted_denom.
   */
  minted_denom: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/poolincentives/params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  minted_denom: string;
}
export interface LockableDurationsInfo {
  lockableDurations: Duration[];
}
export interface LockableDurationsInfoProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo";
  value: Uint8Array;
}
export interface LockableDurationsInfoAmino {
  lockable_durations: DurationAmino[];
}
export interface LockableDurationsInfoAminoMsg {
  type: "osmosis/poolincentives/lockable-durations-info";
  value: LockableDurationsInfoAmino;
}
export interface LockableDurationsInfoSDKType {
  lockable_durations: DurationSDKType[];
}
export interface DistrInfo {
  totalWeight: string;
  records: DistrRecord[];
}
export interface DistrInfoProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.DistrInfo";
  value: Uint8Array;
}
export interface DistrInfoAmino {
  total_weight: string;
  records: DistrRecordAmino[];
}
export interface DistrInfoAminoMsg {
  type: "osmosis/poolincentives/distr-info";
  value: DistrInfoAmino;
}
export interface DistrInfoSDKType {
  total_weight: string;
  records: DistrRecordSDKType[];
}
export interface DistrRecord {
  gaugeId: Long;
  weight: string;
}
export interface DistrRecordProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord";
  value: Uint8Array;
}
export interface DistrRecordAmino {
  gauge_id: string;
  weight: string;
}
export interface DistrRecordAminoMsg {
  type: "osmosis/poolincentives/distr-record";
  value: DistrRecordAmino;
}
export interface DistrRecordSDKType {
  gauge_id: Long;
  weight: string;
}
export interface PoolToGauge {
  poolId: Long;
  gaugeId: Long;
  duration?: Duration;
}
export interface PoolToGaugeProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge";
  value: Uint8Array;
}
export interface PoolToGaugeAmino {
  pool_id: string;
  gauge_id: string;
  duration?: DurationAmino;
}
export interface PoolToGaugeAminoMsg {
  type: "osmosis/poolincentives/pool-to-gauge";
  value: PoolToGaugeAmino;
}
export interface PoolToGaugeSDKType {
  pool_id: Long;
  gauge_id: Long;
  duration?: DurationSDKType;
}
export interface PoolToGauges {
  poolToGauge: PoolToGauge[];
}
export interface PoolToGaugesProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauges";
  value: Uint8Array;
}
export interface PoolToGaugesAmino {
  pool_to_gauge: PoolToGaugeAmino[];
}
export interface PoolToGaugesAminoMsg {
  type: "osmosis/poolincentives/pool-to-gauges";
  value: PoolToGaugesAmino;
}
export interface PoolToGaugesSDKType {
  pool_to_gauge: PoolToGaugeSDKType[];
}

function createBaseParams(): Params {
  return {
    mintedDenom: ""
  };
}

export const Params = {
  typeUrl: "/osmosis.poolincentives.v1beta1.Params",
  aminoType: "osmosis/poolincentives/params",

  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mintedDenom !== "") {
      writer.uint32(10).string(message.mintedDenom);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.mintedDenom = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Params {
    return {
      mintedDenom: isSet(object.mintedDenom) ? String(object.mintedDenom) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintedDenom !== undefined && (obj.mintedDenom = message.mintedDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintedDenom = object.mintedDenom ?? "";
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      mintedDenom: object?.minted_denom
    };
  },

  fromSDKJSON(object: any): ParamsSDKType {
    return {
      minted_denom: isSet(object.minted_denom) ? String(object.minted_denom) : ""
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.minted_denom = message.mintedDenom;
    return obj;
  },

  fromAmino(object: ParamsAmino): Params {
    return {
      mintedDenom: object.minted_denom
    };
  },

  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.minted_denom = message.mintedDenom;
    return obj;
  },

  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },

  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/poolincentives/params",
      value: Params.toAmino(message)
    };
  },

  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },

  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },

  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }

};

function createBaseLockableDurationsInfo(): LockableDurationsInfo {
  return {
    lockableDurations: []
  };
}

export const LockableDurationsInfo = {
  typeUrl: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo",
  aminoType: "osmosis/poolincentives/lockable-durations-info",

  encode(message: LockableDurationsInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockableDurationsInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockableDurationsInfo();

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

  fromJSON(object: any): LockableDurationsInfo {
    return {
      lockableDurations: Array.isArray(object?.lockableDurations) ? object.lockableDurations.map((e: any) => Duration.fromJSON(e)) : []
    };
  },

  toJSON(message: LockableDurationsInfo): unknown {
    const obj: any = {};

    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockableDurations = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<LockableDurationsInfo>): LockableDurationsInfo {
    const message = createBaseLockableDurationsInfo();
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: LockableDurationsInfoSDKType): LockableDurationsInfo {
    return {
      lockableDurations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromSDK(e)) : []
    };
  },

  fromSDKJSON(object: any): LockableDurationsInfoSDKType {
    return {
      lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromSDKJSON(e)) : []
    };
  },

  toSDK(message: LockableDurationsInfo): LockableDurationsInfoSDKType {
    const obj: any = {};

    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toSDK(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }

    return obj;
  },

  fromAmino(object: LockableDurationsInfoAmino): LockableDurationsInfo {
    return {
      lockableDurations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromAmino(e)) : []
    };
  },

  toAmino(message: LockableDurationsInfo): LockableDurationsInfoAmino {
    const obj: any = {};

    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }

    return obj;
  },

  fromAminoMsg(object: LockableDurationsInfoAminoMsg): LockableDurationsInfo {
    return LockableDurationsInfo.fromAmino(object.value);
  },

  toAminoMsg(message: LockableDurationsInfo): LockableDurationsInfoAminoMsg {
    return {
      type: "osmosis/poolincentives/lockable-durations-info",
      value: LockableDurationsInfo.toAmino(message)
    };
  },

  fromProtoMsg(message: LockableDurationsInfoProtoMsg): LockableDurationsInfo {
    return LockableDurationsInfo.decode(message.value);
  },

  toProto(message: LockableDurationsInfo): Uint8Array {
    return LockableDurationsInfo.encode(message).finish();
  },

  toProtoMsg(message: LockableDurationsInfo): LockableDurationsInfoProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.LockableDurationsInfo",
      value: LockableDurationsInfo.encode(message).finish()
    };
  }

};

function createBaseDistrInfo(): DistrInfo {
  return {
    totalWeight: "",
    records: []
  };
}

export const DistrInfo = {
  typeUrl: "/osmosis.poolincentives.v1beta1.DistrInfo",
  aminoType: "osmosis/poolincentives/distr-info",

  encode(message: DistrInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.totalWeight !== "") {
      writer.uint32(10).string(message.totalWeight);
    }

    for (const v of message.records) {
      DistrRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistrInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistrInfo();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.totalWeight = reader.string();
          break;

        case 2:
          message.records.push(DistrRecord.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DistrInfo {
    return {
      totalWeight: isSet(object.totalWeight) ? String(object.totalWeight) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromJSON(e)) : []
    };
  },

  toJSON(message: DistrInfo): unknown {
    const obj: any = {};
    message.totalWeight !== undefined && (obj.totalWeight = message.totalWeight);

    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<DistrInfo>): DistrInfo {
    const message = createBaseDistrInfo();
    message.totalWeight = object.totalWeight ?? "";
    message.records = object.records?.map(e => DistrRecord.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: DistrInfoSDKType): DistrInfo {
    return {
      totalWeight: object?.total_weight,
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromSDK(e)) : []
    };
  },

  fromSDKJSON(object: any): DistrInfoSDKType {
    return {
      total_weight: isSet(object.total_weight) ? String(object.total_weight) : "",
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromSDKJSON(e)) : []
    };
  },

  toSDK(message: DistrInfo): DistrInfoSDKType {
    const obj: any = {};
    obj.total_weight = message.totalWeight;

    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toSDK(e) : undefined);
    } else {
      obj.records = [];
    }

    return obj;
  },

  fromAmino(object: DistrInfoAmino): DistrInfo {
    return {
      totalWeight: object.total_weight,
      records: Array.isArray(object?.records) ? object.records.map((e: any) => DistrRecord.fromAmino(e)) : []
    };
  },

  toAmino(message: DistrInfo): DistrInfoAmino {
    const obj: any = {};
    obj.total_weight = message.totalWeight;

    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toAmino(e) : undefined);
    } else {
      obj.records = [];
    }

    return obj;
  },

  fromAminoMsg(object: DistrInfoAminoMsg): DistrInfo {
    return DistrInfo.fromAmino(object.value);
  },

  toAminoMsg(message: DistrInfo): DistrInfoAminoMsg {
    return {
      type: "osmosis/poolincentives/distr-info",
      value: DistrInfo.toAmino(message)
    };
  },

  fromProtoMsg(message: DistrInfoProtoMsg): DistrInfo {
    return DistrInfo.decode(message.value);
  },

  toProto(message: DistrInfo): Uint8Array {
    return DistrInfo.encode(message).finish();
  },

  toProtoMsg(message: DistrInfo): DistrInfoProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.DistrInfo",
      value: DistrInfo.encode(message).finish()
    };
  }

};

function createBaseDistrRecord(): DistrRecord {
  return {
    gaugeId: Long.UZERO,
    weight: ""
  };
}

export const DistrRecord = {
  typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord",
  aminoType: "osmosis/poolincentives/distr-record",

  encode(message: DistrRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.gaugeId.isZero()) {
      writer.uint32(8).uint64(message.gaugeId);
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DistrRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistrRecord();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.gaugeId = (reader.uint64() as Long);
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DistrRecord {
    return {
      gaugeId: isSet(object.gaugeId) ? Long.fromValue(object.gaugeId) : Long.UZERO,
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },

  toJSON(message: DistrRecord): unknown {
    const obj: any = {};
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial(object: DeepPartial<DistrRecord>): DistrRecord {
    const message = createBaseDistrRecord();
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.weight = object.weight ?? "";
    return message;
  },

  fromSDK(object: DistrRecordSDKType): DistrRecord {
    return {
      gaugeId: object?.gauge_id,
      weight: object?.weight
    };
  },

  fromSDKJSON(object: any): DistrRecordSDKType {
    return {
      gauge_id: isSet(object.gauge_id) ? Long.fromValue(object.gauge_id) : Long.UZERO,
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },

  toSDK(message: DistrRecord): DistrRecordSDKType {
    const obj: any = {};
    obj.gauge_id = message.gaugeId;
    obj.weight = message.weight;
    return obj;
  },

  fromAmino(object: DistrRecordAmino): DistrRecord {
    return {
      gaugeId: Long.fromString(object.gauge_id),
      weight: object.weight
    };
  },

  toAmino(message: DistrRecord): DistrRecordAmino {
    const obj: any = {};
    obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
    obj.weight = message.weight;
    return obj;
  },

  fromAminoMsg(object: DistrRecordAminoMsg): DistrRecord {
    return DistrRecord.fromAmino(object.value);
  },

  toAminoMsg(message: DistrRecord): DistrRecordAminoMsg {
    return {
      type: "osmosis/poolincentives/distr-record",
      value: DistrRecord.toAmino(message)
    };
  },

  fromProtoMsg(message: DistrRecordProtoMsg): DistrRecord {
    return DistrRecord.decode(message.value);
  },

  toProto(message: DistrRecord): Uint8Array {
    return DistrRecord.encode(message).finish();
  },

  toProtoMsg(message: DistrRecord): DistrRecordProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord",
      value: DistrRecord.encode(message).finish()
    };
  }

};

function createBasePoolToGauge(): PoolToGauge {
  return {
    poolId: Long.UZERO,
    gaugeId: Long.UZERO,
    duration: undefined
  };
}

export const PoolToGauge = {
  typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge",
  aminoType: "osmosis/poolincentives/pool-to-gauge",

  encode(message: PoolToGauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.poolId.isZero()) {
      writer.uint32(8).uint64(message.poolId);
    }

    if (!message.gaugeId.isZero()) {
      writer.uint32(16).uint64(message.gaugeId);
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolToGauge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolToGauge();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.poolId = (reader.uint64() as Long);
          break;

        case 2:
          message.gaugeId = (reader.uint64() as Long);
          break;

        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PoolToGauge {
    return {
      poolId: isSet(object.poolId) ? Long.fromValue(object.poolId) : Long.UZERO,
      gaugeId: isSet(object.gaugeId) ? Long.fromValue(object.gaugeId) : Long.UZERO,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined
    };
  },

  toJSON(message: PoolToGauge): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = (message.poolId || Long.UZERO).toString());
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolToGauge>): PoolToGauge {
    const message = createBasePoolToGauge();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? Long.fromValue(object.poolId) : Long.UZERO;
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },

  fromSDK(object: PoolToGaugeSDKType): PoolToGauge {
    return {
      poolId: object?.pool_id,
      gaugeId: object?.gauge_id,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined
    };
  },

  fromSDKJSON(object: any): PoolToGaugeSDKType {
    return {
      pool_id: isSet(object.pool_id) ? Long.fromValue(object.pool_id) : Long.UZERO,
      gauge_id: isSet(object.gauge_id) ? Long.fromValue(object.gauge_id) : Long.UZERO,
      duration: isSet(object.duration) ? Duration.fromSDKJSON(object.duration) : undefined
    };
  },

  toSDK(message: PoolToGauge): PoolToGaugeSDKType {
    const obj: any = {};
    obj.pool_id = message.poolId;
    obj.gauge_id = message.gaugeId;
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    return obj;
  },

  fromAmino(object: PoolToGaugeAmino): PoolToGauge {
    return {
      poolId: Long.fromString(object.pool_id),
      gaugeId: Long.fromString(object.gauge_id),
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined
    };
  },

  toAmino(message: PoolToGauge): PoolToGaugeAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    return obj;
  },

  fromAminoMsg(object: PoolToGaugeAminoMsg): PoolToGauge {
    return PoolToGauge.fromAmino(object.value);
  },

  toAminoMsg(message: PoolToGauge): PoolToGaugeAminoMsg {
    return {
      type: "osmosis/poolincentives/pool-to-gauge",
      value: PoolToGauge.toAmino(message)
    };
  },

  fromProtoMsg(message: PoolToGaugeProtoMsg): PoolToGauge {
    return PoolToGauge.decode(message.value);
  },

  toProto(message: PoolToGauge): Uint8Array {
    return PoolToGauge.encode(message).finish();
  },

  toProtoMsg(message: PoolToGauge): PoolToGaugeProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge",
      value: PoolToGauge.encode(message).finish()
    };
  }

};

function createBasePoolToGauges(): PoolToGauges {
  return {
    poolToGauge: []
  };
}

export const PoolToGauges = {
  typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauges",
  aminoType: "osmosis/poolincentives/pool-to-gauges",

  encode(message: PoolToGauges, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.poolToGauge) {
      PoolToGauge.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PoolToGauges {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolToGauges();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.poolToGauge.push(PoolToGauge.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PoolToGauges {
    return {
      poolToGauge: Array.isArray(object?.poolToGauge) ? object.poolToGauge.map((e: any) => PoolToGauge.fromJSON(e)) : []
    };
  },

  toJSON(message: PoolToGauges): unknown {
    const obj: any = {};

    if (message.poolToGauge) {
      obj.poolToGauge = message.poolToGauge.map(e => e ? PoolToGauge.toJSON(e) : undefined);
    } else {
      obj.poolToGauge = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<PoolToGauges>): PoolToGauges {
    const message = createBasePoolToGauges();
    message.poolToGauge = object.poolToGauge?.map(e => PoolToGauge.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: PoolToGaugesSDKType): PoolToGauges {
    return {
      poolToGauge: Array.isArray(object?.pool_to_gauge) ? object.pool_to_gauge.map((e: any) => PoolToGauge.fromSDK(e)) : []
    };
  },

  fromSDKJSON(object: any): PoolToGaugesSDKType {
    return {
      pool_to_gauge: Array.isArray(object?.pool_to_gauge) ? object.pool_to_gauge.map((e: any) => PoolToGauge.fromSDKJSON(e)) : []
    };
  },

  toSDK(message: PoolToGauges): PoolToGaugesSDKType {
    const obj: any = {};

    if (message.poolToGauge) {
      obj.pool_to_gauge = message.poolToGauge.map(e => e ? PoolToGauge.toSDK(e) : undefined);
    } else {
      obj.pool_to_gauge = [];
    }

    return obj;
  },

  fromAmino(object: PoolToGaugesAmino): PoolToGauges {
    return {
      poolToGauge: Array.isArray(object?.pool_to_gauge) ? object.pool_to_gauge.map((e: any) => PoolToGauge.fromAmino(e)) : []
    };
  },

  toAmino(message: PoolToGauges): PoolToGaugesAmino {
    const obj: any = {};

    if (message.poolToGauge) {
      obj.pool_to_gauge = message.poolToGauge.map(e => e ? PoolToGauge.toAmino(e) : undefined);
    } else {
      obj.pool_to_gauge = [];
    }

    return obj;
  },

  fromAminoMsg(object: PoolToGaugesAminoMsg): PoolToGauges {
    return PoolToGauges.fromAmino(object.value);
  },

  toAminoMsg(message: PoolToGauges): PoolToGaugesAminoMsg {
    return {
      type: "osmosis/poolincentives/pool-to-gauges",
      value: PoolToGauges.toAmino(message)
    };
  },

  fromProtoMsg(message: PoolToGaugesProtoMsg): PoolToGauges {
    return PoolToGauges.decode(message.value);
  },

  toProto(message: PoolToGauges): Uint8Array {
    return PoolToGauges.encode(message).finish();
  },

  toProtoMsg(message: PoolToGauges): PoolToGaugesProtoMsg {
    return {
      typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauges",
      value: PoolToGauges.encode(message).finish()
    };
  }

};