import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "evmos.epochs.v1";
export interface EpochInfo {
  identifier?: string;
  startTime: Date;
  duration: Duration;
  currentEpoch?: bigint;
  currentEpochStartTime: Date;
  epochCountingStarted?: boolean;
  currentEpochStartHeight?: bigint;
}
export interface EpochInfoSDKType {
  identifier?: string;
  start_time: Date;
  duration: DurationSDKType;
  current_epoch?: bigint;
  current_epoch_start_time: Date;
  epoch_counting_started?: boolean;
  current_epoch_start_height?: bigint;
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
  epochs: EpochInfo[];
}
/** GenesisState defines the epochs module's genesis state. */
export interface GenesisStateSDKType {
  epochs: EpochInfoSDKType[];
}
function createBaseEpochInfo(): EpochInfo {
  return {
    identifier: undefined,
    startTime: new Date(),
    duration: Duration.fromPartial({}),
    currentEpoch: undefined,
    currentEpochStartTime: new Date(),
    epochCountingStarted: undefined,
    currentEpochStartHeight: undefined
  };
}
export const EpochInfo = {
  typeUrl: "/evmos.epochs.v1.EpochInfo",
  encode(message: EpochInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== undefined) {
      writer.uint32(10).string(message.identifier);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }
    if (message.currentEpoch !== undefined) {
      writer.uint32(32).int64(message.currentEpoch);
    }
    if (message.currentEpochStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.currentEpochStartTime), writer.uint32(42).fork()).ldelim();
    }
    if (message.epochCountingStarted !== undefined) {
      writer.uint32(48).bool(message.epochCountingStarted);
    }
    if (message.currentEpochStartHeight !== undefined) {
      writer.uint32(56).int64(message.currentEpochStartHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EpochInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEpochInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        case 2:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.currentEpoch = reader.int64();
          break;
        case 5:
          message.currentEpochStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 6:
          message.epochCountingStarted = reader.bool();
          break;
        case 7:
          message.currentEpochStartHeight = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EpochInfo {
    const obj = createBaseEpochInfo();
    if (isSet(object.identifier)) obj.identifier = String(object.identifier);
    if (isSet(object.startTime)) obj.startTime = new Date(object.startTime);
    if (isSet(object.duration)) obj.duration = Duration.fromJSON(object.duration);
    if (isSet(object.currentEpoch)) obj.currentEpoch = BigInt(object.currentEpoch.toString());
    if (isSet(object.currentEpochStartTime)) obj.currentEpochStartTime = new Date(object.currentEpochStartTime);
    if (isSet(object.epochCountingStarted)) obj.epochCountingStarted = Boolean(object.epochCountingStarted);
    if (isSet(object.currentEpochStartHeight)) obj.currentEpochStartHeight = BigInt(object.currentEpochStartHeight.toString());
    return obj;
  },
  toJSON(message: EpochInfo): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    if (message.currentEpoch !== undefined) {
      obj.currentEpoch = message.currentEpoch.toString();
    }
    message.currentEpochStartTime !== undefined && (obj.currentEpochStartTime = message.currentEpochStartTime.toISOString());
    message.epochCountingStarted !== undefined && (obj.epochCountingStarted = message.epochCountingStarted);
    if (message.currentEpochStartHeight !== undefined) {
      obj.currentEpochStartHeight = message.currentEpochStartHeight.toString();
    }
    return obj;
  },
  fromPartial(object: DeepPartial<EpochInfo>): EpochInfo {
    const message = createBaseEpochInfo();
    message.identifier = object.identifier ?? undefined;
    message.startTime = object.startTime ?? undefined;
    if (object.duration !== undefined && object.duration !== null) {
      message.duration = Duration.fromPartial(object.duration);
    }
    if (object.currentEpoch !== undefined && object.currentEpoch !== null) {
      message.currentEpoch = BigInt(object.currentEpoch.toString());
    }
    message.currentEpochStartTime = object.currentEpochStartTime ?? undefined;
    message.epochCountingStarted = object.epochCountingStarted ?? undefined;
    if (object.currentEpochStartHeight !== undefined && object.currentEpochStartHeight !== null) {
      message.currentEpochStartHeight = BigInt(object.currentEpochStartHeight.toString());
    }
    return message;
  },
  fromSDK(object: EpochInfoSDKType): EpochInfo {
    return {
      identifier: object?.identifier,
      startTime: object.start_time ?? undefined,
      duration: object.duration ? Duration.fromSDK(object.duration) : undefined,
      currentEpoch: object?.current_epoch,
      currentEpochStartTime: object.current_epoch_start_time ?? undefined,
      epochCountingStarted: object?.epoch_counting_started,
      currentEpochStartHeight: object?.current_epoch_start_height
    };
  },
  fromSDKJSON(object: any): EpochInfoSDKType {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : undefined,
      start_time: isSet(object.start_time) ? new Date(object.start_time) : undefined,
      duration: isSet(object.duration) ? Duration.fromSDKJSON(object.duration) : undefined,
      current_epoch: isSet(object.current_epoch) ? BigInt(object.current_epoch.toString()) : undefined,
      current_epoch_start_time: isSet(object.current_epoch_start_time) ? new Date(object.current_epoch_start_time) : undefined,
      epoch_counting_started: isSet(object.epoch_counting_started) ? Boolean(object.epoch_counting_started) : undefined,
      current_epoch_start_height: isSet(object.current_epoch_start_height) ? BigInt(object.current_epoch_start_height.toString()) : undefined
    };
  },
  toSDK(message: EpochInfo): EpochInfoSDKType {
    const obj: any = {};
    obj.identifier = message.identifier;
    message.startTime !== undefined && (obj.start_time = message.startTime ?? undefined);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    obj.current_epoch = message.currentEpoch;
    message.currentEpochStartTime !== undefined && (obj.current_epoch_start_time = message.currentEpochStartTime ?? undefined);
    obj.epoch_counting_started = message.epochCountingStarted;
    obj.current_epoch_start_height = message.currentEpochStartHeight;
    return obj;
  },
  fromAmino(object: EpochInfoAmino): EpochInfo {
    return {
      identifier: object?.identifier,
      startTime: object.start_time,
      duration: object?.duration ? Duration.fromAmino(object.duration) : undefined,
      currentEpoch: object?.current_epoch ? BigInt(object.current_epoch) : undefined,
      currentEpochStartTime: object.current_epoch_start_time,
      epochCountingStarted: object?.epoch_counting_started,
      currentEpochStartHeight: object?.current_epoch_start_height ? BigInt(object.current_epoch_start_height) : undefined
    };
  },
  toAmino(message: EpochInfo): EpochInfoAmino {
    const obj: any = {};
    obj.identifier = message.identifier;
    obj.start_time = message.startTime;
    obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined;
    obj.current_epoch = message.currentEpoch ? message.currentEpoch.toString() : undefined;
    obj.current_epoch_start_time = message.currentEpochStartTime;
    obj.epoch_counting_started = message.epochCountingStarted;
    obj.current_epoch_start_height = message.currentEpochStartHeight ? message.currentEpochStartHeight.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EpochInfoAminoMsg): EpochInfo {
    return EpochInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: EpochInfoProtoMsg): EpochInfo {
    return EpochInfo.decode(message.value);
  },
  toProto(message: EpochInfo): Uint8Array {
    return EpochInfo.encode(message).finish();
  },
  toProtoMsg(message: EpochInfo): EpochInfoProtoMsg {
    return {
      typeUrl: "/evmos.epochs.v1.EpochInfo",
      value: EpochInfo.encode(message).finish()
    };
  }
};
function createBaseGenesisState(): GenesisState {
  return {
    epochs: []
  };
}
export const GenesisState = {
  typeUrl: "/evmos.epochs.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (Array.isArray(object?.epochs)) obj.epochs = object.epochs.map((e: any) => EpochInfo.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toJSON(e) : undefined);
    } else {
      obj.epochs = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toSDK(e) : undefined);
    } else {
      obj.epochs = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toAmino(e) : undefined);
    } else {
      obj.epochs = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/evmos.epochs.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};