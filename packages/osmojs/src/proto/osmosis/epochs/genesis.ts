import { Timestamp } from "../../google/protobuf/timestamp";
import { Duration } from "../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, Long, isSet, fromJsonTimestamp, Exact, DeepPartial } from "@osmonauts/helpers";
export interface EpochInfo {
  identifier: string;
  startTime: Date;
  duration: string;
  currentEpoch: Long;
  currentEpochStartTime: Date;
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
      writer.uint32(64).int64(message.currentEpochStartHeight);
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

        case 8:
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
      duration: isSet(object.duration) ? String(object.duration) : undefined,
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

  fromPartial<I extends Exact<DeepPartial<EpochInfo>, I>>(object: I): EpochInfo {
    const message = createBaseEpochInfo();
    message.identifier = object.identifier ?? "";
    message.startTime = object.startTime ?? undefined;
    message.duration = object.duration ?? undefined;
    message.currentEpoch = object.currentEpoch !== undefined && object.currentEpoch !== null ? Long.fromValue(object.currentEpoch) : Long.ZERO;
    message.currentEpochStartTime = object.currentEpochStartTime ?? undefined;
    message.epochCountingStarted = object.epochCountingStarted ?? false;
    message.currentEpochStartHeight = object.currentEpochStartHeight !== undefined && object.currentEpochStartHeight !== null ? Long.fromValue(object.currentEpochStartHeight) : Long.ZERO;
    return message;
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

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.epochs = object.epochs?.map(e => EpochInfo.fromPartial(e)) || [];
    return message;
  }

};