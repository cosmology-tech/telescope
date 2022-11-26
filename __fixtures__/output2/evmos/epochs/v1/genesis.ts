//@ts-nocheck
/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, fromJsonTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
export const protobufPackage = "evmos.epochs.v1";
export interface EpochInfo {
  identifier: string;
  startTime?: Timestamp;
  duration?: Duration;
  currentEpoch: Long;
  currentEpochStartTime?: Timestamp;
  epochCountingStarted: boolean;
  currentEpochStartHeight: Long;
}

/** GenesisState defines the epochs module's genesis state. */
export interface GenesisState {
  epochs: EpochInfo[];
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
      Timestamp.encode(message.startTime, writer.uint32(18).fork()).ldelim();
    }

    if (message.duration !== undefined) {
      Duration.encode(message.duration, writer.uint32(26).fork()).ldelim();
    }

    if (!message.currentEpoch.isZero()) {
      writer.uint32(32).int64(message.currentEpoch);
    }

    if (message.currentEpochStartTime !== undefined) {
      Timestamp.encode(message.currentEpochStartTime, writer.uint32(42).fork()).ldelim();
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
          message.startTime = Timestamp.decode(reader, reader.uint32());
          break;

        case 3:
          message.duration = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.currentEpoch = (reader.int64() as Long);
          break;

        case 5:
          message.currentEpochStartTime = Timestamp.decode(reader, reader.uint32());
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
      currentEpoch: isSet(object.currentEpoch) ? Long.fromValue(object.currentEpoch) : Long.ZERO,
      currentEpochStartTime: isSet(object.currentEpochStartTime) ? fromJsonTimestamp(object.currentEpochStartTime) : undefined,
      epochCountingStarted: isSet(object.epochCountingStarted) ? Boolean(object.epochCountingStarted) : false,
      currentEpochStartHeight: isSet(object.currentEpochStartHeight) ? Long.fromValue(object.currentEpochStartHeight) : Long.ZERO
    };
  },

  toJSON(message: EpochInfo): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toJSON(message.duration) : undefined);
    message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || Long.ZERO).toString());
    message.currentEpochStartTime !== undefined && (obj.currentEpochStartTime = fromTimestamp(message.currentEpochStartTime).toISOString());
    message.epochCountingStarted !== undefined && (obj.epochCountingStarted = message.epochCountingStarted);
    message.currentEpochStartHeight !== undefined && (obj.currentEpochStartHeight = (message.currentEpochStartHeight || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<EpochInfo>): EpochInfo {
    const message = createBaseEpochInfo();
    message.identifier = object.identifier ?? "";
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.duration = object.duration !== undefined && object.duration !== null ? Duration.fromPartial(object.duration) : undefined;
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? Long.fromValue(object.currentEpoch) : Long.ZERO;
    message.currentEpochStartTime = object.currentEpochStartTime !== undefined && object.currentEpochStartTime !== null ? Timestamp.fromPartial(object.currentEpochStartTime) : undefined;
    message.epochCountingStarted = object.epochCountingStarted ?? false;
    message.currentEpochStartHeight = object.currentEpochStartHeight !== undefined && object.currentEpochStartHeight !== null ? Long.fromValue(object.currentEpochStartHeight) : Long.ZERO;
    return message;
  },

  fromAmino(object: EpochInfoSDKType): EpochInfo {
    return {
      identifier: isSet(object.identifier) ? object.identifier : undefined,
      startTime: isSet(object.start_time) ? Timestamp.fromAmino(object.start_time) : undefined,
      duration: isSet(object.duration) ? Duration.fromAmino(object.duration) : undefined,
      currentEpoch: isSet(object.current_epoch) ? object.current_epoch : undefined,
      currentEpochStartTime: isSet(object.current_epoch_start_time) ? Timestamp.fromAmino(object.current_epoch_start_time) : undefined,
      epochCountingStarted: isSet(object.epoch_counting_started) ? object.epoch_counting_started : undefined,
      currentEpochStartHeight: isSet(object.current_epoch_start_height) ? object.current_epoch_start_height : undefined
    };
  },

  toAmino(message: EpochInfo): EpochInfoSDKType {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    message.startTime !== undefined && (obj.start_time = message.startTime ? Timestamp.toAmino(message.startTime) : undefined);
    message.duration !== undefined && (obj.duration = message.duration ? Duration.toAmino(message.duration) : undefined);
    message.currentEpoch !== undefined && (obj.current_epoch = message.currentEpoch);
    message.currentEpochStartTime !== undefined && (obj.current_epoch_start_time = message.currentEpochStartTime ? Timestamp.toAmino(message.currentEpochStartTime) : undefined);
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

  fromAmino(object: GenesisStateSDKType): GenesisState {
    return {
      epochs: Array.isArray(object?.epochs) ? object.epochs.map((e: any) => EpochInfo.fromAmino(e)) : []
    };
  },

  toAmino(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};

    if (message.epochs) {
      obj.epochs = message.epochs.map(e => e ? EpochInfo.toAmino(e) : undefined);
    } else {
      obj.epochs = [];
    }

    return obj;
  }

};