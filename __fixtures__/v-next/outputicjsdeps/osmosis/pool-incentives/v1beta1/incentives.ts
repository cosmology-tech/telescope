import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
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
export interface DistrRecord {
  gaugeId: bigint;
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
export interface PoolToGauge {
  poolId: bigint;
  gaugeId: bigint;
  duration: Duration;
}
export interface PoolToGaugeProtoMsg {
  typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge";
  value: Uint8Array;
}
export interface PoolToGaugeAmino {
  pool_id: string;
  gauge_id: string;
  duration: DurationAmino;
}
export interface PoolToGaugeAminoMsg {
  type: "osmosis/poolincentives/pool-to-gauge";
  value: PoolToGaugeAmino;
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
function createBaseParams(): Params {
  return {
    mintedDenom: ""
  };
}
export const Params = {
  typeUrl: "/osmosis.poolincentives.v1beta1.Params",
  aminoType: "osmosis/poolincentives/params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintedDenom !== "") {
      writer.uint32(10).string(message.mintedDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintedDenom = object.mintedDenom ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.minted_denom !== undefined && object.minted_denom !== null) {
      message.mintedDenom = object.minted_denom;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.minted_denom = message.mintedDenom === "" ? undefined : message.mintedDenom;
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
  encode(message: LockableDurationsInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LockableDurationsInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<LockableDurationsInfo>): LockableDurationsInfo {
    const message = createBaseLockableDurationsInfo();
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: LockableDurationsInfoAmino): LockableDurationsInfo {
    const message = createBaseLockableDurationsInfo();
    message.lockableDurations = object.lockable_durations?.map(e => Duration.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: LockableDurationsInfo): LockableDurationsInfoAmino {
    const obj: any = {};
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.lockable_durations = message.lockableDurations;
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
  encode(message: DistrInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalWeight !== "") {
      writer.uint32(10).string(message.totalWeight);
    }
    for (const v of message.records) {
      DistrRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistrInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<DistrInfo>): DistrInfo {
    const message = createBaseDistrInfo();
    message.totalWeight = object.totalWeight ?? "";
    message.records = object.records?.map(e => DistrRecord.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DistrInfoAmino): DistrInfo {
    const message = createBaseDistrInfo();
    if (object.total_weight !== undefined && object.total_weight !== null) {
      message.totalWeight = object.total_weight;
    }
    message.records = object.records?.map(e => DistrRecord.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: DistrInfo): DistrInfoAmino {
    const obj: any = {};
    obj.total_weight = message.totalWeight === "" ? undefined : message.totalWeight;
    if (message.records) {
      obj.records = message.records.map(e => e ? DistrRecord.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
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
    gaugeId: BigInt(0),
    weight: ""
  };
}
export const DistrRecord = {
  typeUrl: "/osmosis.poolincentives.v1beta1.DistrRecord",
  aminoType: "osmosis/poolincentives/distr-record",
  encode(message: DistrRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.gaugeId !== BigInt(0)) {
      writer.uint32(8).uint64(message.gaugeId);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DistrRecord {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistrRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gaugeId = reader.uint64();
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
  fromPartial(object: DeepPartial<DistrRecord>): DistrRecord {
    const message = createBaseDistrRecord();
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: DistrRecordAmino): DistrRecord {
    const message = createBaseDistrRecord();
    if (object.gauge_id !== undefined && object.gauge_id !== null) {
      message.gaugeId = BigInt(object.gauge_id);
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: DistrRecord): DistrRecordAmino {
    const obj: any = {};
    obj.gauge_id = message.gaugeId !== BigInt(0) ? message.gaugeId?.toString() : undefined;
    obj.weight = message.weight === "" ? undefined : message.weight;
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
    poolId: BigInt(0),
    gaugeId: BigInt(0),
    duration: Duration.fromPartial({})
  };
}
export const PoolToGauge = {
  typeUrl: "/osmosis.poolincentives.v1beta1.PoolToGauge",
  aminoType: "osmosis/poolincentives/pool-to-gauge",
  encode(message: PoolToGauge, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.gaugeId !== BigInt(0)) {
      writer.uint32(16).uint64(message.gaugeId);
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolToGauge {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoolToGauge();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = reader.uint64();
          break;
        case 2:
          message.gaugeId = reader.uint64();
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
  fromPartial(object: DeepPartial<PoolToGauge>): PoolToGauge {
    const message = createBasePoolToGauge();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? BigInt(object.gaugeId.toString()) : BigInt(0);
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    return message;
  },
  fromAmino(object: PoolToGaugeAmino): PoolToGauge {
    const message = createBasePoolToGauge();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.gauge_id !== undefined && object.gauge_id !== null) {
      message.gaugeId = BigInt(object.gauge_id);
    }
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromAmino(object.duration);
    }
    return message;
  },
  toAmino(message: PoolToGauge): PoolToGaugeAmino {
    const obj: any = {};
    obj.pool_id = message.poolId !== BigInt(0) ? message.poolId?.toString() : undefined;
    obj.gauge_id = message.gaugeId !== BigInt(0) ? message.gaugeId?.toString() : undefined;
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
  encode(message: PoolToGauges, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.poolToGauge) {
      PoolToGauge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PoolToGauges {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<PoolToGauges>): PoolToGauges {
    const message = createBasePoolToGauges();
    message.poolToGauge = object.poolToGauge?.map(e => PoolToGauge.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: PoolToGaugesAmino): PoolToGauges {
    const message = createBasePoolToGauges();
    message.poolToGauge = object.pool_to_gauge?.map(e => PoolToGauge.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: PoolToGauges): PoolToGaugesAmino {
    const obj: any = {};
    if (message.poolToGauge) {
      obj.pool_to_gauge = message.poolToGauge.map(e => e ? PoolToGauge.toAmino(e) : undefined);
    } else {
      obj.pool_to_gauge = message.poolToGauge;
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