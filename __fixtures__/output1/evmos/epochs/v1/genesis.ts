import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, Long, isSet, fromJsonTimestamp, DeepPartial } from "@osmonauts/helpers";
export const protobufPackage = "evmos.epochs.v1";
export interface EpochInfo {
  identifier: string;
  startTime: Date;
  duration: Duration;
  currentEpoch: Long;
  currentEpochStartTime: Date;
  epochCountingStarted: boolean;
  currentEpochStartHeight: Long;
}
export interface EpochInfoSDKType {
  identifier: string;
  start_time: Date;
  duration: DurationSDKType;
  current_epoch: Long;
  current_epoch_start_time: Date;
  epoch_counting_started: boolean;
  current_epoch_start_height: Long;
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
    identifier: "",
    startTime: undefined,
    duration: undefined,
    currentEpoch: Long.ZERO,
    currentEpochStartTime: undefined,
    epochCountingStarted: false,
    currentEpochStartHeight: Long.ZERO
  };
}

export const EpochInfo = {
  encode(message: EpochInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }

    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(18).fork()).ldelim();
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }

    if (!message.currentEpoch.isZero()) {
      writer.uint32(32).int64(message.currentEpoch);
    }

    if (message.currentEpochStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.currentEpochStartTime), writer.uint32(42).fork()).ldelim();
    }

    if (message.epochCountingStarted === true) {
      writer.uint32(48).bool(message.epochCountingStarted);
    }

    if (!message.currentEpochStartHeight.isZero()) {
      writer.uint32(56).int64(message.currentEpochStartHeight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EpochInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.currentEpoch = (reader.int64() as Long);
          break;

        case 5:
          message.currentEpochStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.epochCountingStarted = reader.bool();
          break;

        case 7:
          message.currentEpochStartHeight = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EpochInfo {
    return {
      identifier: isSet(object.identifier) ? String(object.identifier) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      duration: isSet(object.duration) ? Duration.fromJSON(object.duration) : undefined,
      currentEpoch: isSet(object.currentEpoch) ? Long.fromString(object.currentEpoch) : Long.ZERO,
      currentEpochStartTime: isSet(object.currentEpochStartTime) ? fromJsonTimestamp(object.currentEpochStartTime) : undefined,
      epochCountingStarted: isSet(object.epochCountingStarted) ? Boolean(object.epochCountingStarted) : false,
      currentEpochStartHeight: isSet(object.currentEpochStartHeight) ? Long.fromString(object.currentEpochStartHeight) : Long.ZERO
    };
  },

  toJSON(message: EpochInfo): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.duration !== undefined && (obj.duration = message.duration);
    message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || Long.ZERO).toString());
    message.currentEpochStartTime !== undefined && (obj.currentEpochStartTime = message.currentEpochStartTime.toISOString());
    message.epochCountingStarted !== undefined && (obj.epochCountingStarted = message.epochCountingStarted);
    message.currentEpochStartHeight !== undefined && (obj.currentEpochStartHeight = (message.currentEpochStartHeight || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EpochInfo>): EpochInfo {
    const message = createBaseEpochInfo();
    message.identifier = object.identifier ?? "";
    message.startTime = object.startTime ?? undefined;
    message.duration = object.duration ?? undefined;
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? Long.fromValue(object.currentEpoch) : Long.ZERO;
    message.currentEpochStartTime = object.currentEpochStartTime ?? undefined;
    message.epochCountingStarted = object.epochCountingStarted ?? false;
    message.currentEpochStartHeight = object.currentEpochStartHeight !== undefined && object.currentEpochStartHeight !== null ? Long.fromValue(object.currentEpochStartHeight) : Long.ZERO;
    return message;
  },

  fromSDK(object: EpochInfoSDKType): EpochInfo {
    return {
      identifier: isSet(object.identifier) ? object.identifier : "",
      startTime: isSet(object.start_time) ? Timestamp.fromSDK(object.start_time) : undefined,
      duration: isSet(object.duration) ? Duration.fromSDK(object.duration) : undefined,
      currentEpoch: isSet(object.current_epoch) ? object.current_epoch : Long.ZERO,
      currentEpochStartTime: isSet(object.current_epoch_start_time) ? Timestamp.fromSDK(object.current_epoch_start_time) : undefined,
      epochCountingStarted: isSet(object.epoch_counting_started) ? object.epoch_counting_started : false,
      currentEpochStartHeight: isSet(object.current_epoch_start_height) ? object.current_epoch_start_height : Long.ZERO
    };
  },

  toSDK(message: EpochInfo): EpochInfoSDKType {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.startTime !== undefined && (obj.start_time = message.startTime ? Timestamp.toSDK(message.startTime) : undefined);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toSDK(message.duration) : undefined);
    message.currentEpoch !== undefined && (obj.current_epoch = message.currentEpoch);
    message.currentEpochStartTime !== undefined && (obj.current_epoch_start_time = message.currentEpochStartTime ? Timestamp.toSDK(message.currentEpochStartTime) : undefined);
    message.epochCountingStarted !== undefined && (obj.epoch_counting_started = message.epochCountingStarted);
    message.currentEpochStartHeight !== undefined && (obj.current_epoch_start_height = message.currentEpochStartHeight);
    return obj;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    epochs: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromJSON(e)) : []
    };
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

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};

    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toSDK(e) : undefined);
    } else {
      obj.epochs = [];
    }

    return obj;
  }

};