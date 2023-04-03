import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long, toTimestamp, fromTimestamp, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.evidence.v1beta1";

/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
  height: bigint;
  time?: Date;
  power: bigint;
  consensusAddress: string;
}

/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface EquivocationSDKType {
  height: bigint;
  time?: Date;
  power: bigint;
  consensus_address: string;
}

function createBaseEquivocation(): Equivocation {
  return {
    height: BigInt("0"),
    time: undefined,
    power: BigInt("0"),
    consensusAddress: ""
  };
}

export const Equivocation = {
  encode(message: Equivocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(Long.fromString(message.height.toString()));
    }

    if (message.time !== undefined) {
      Timestamp.encode(toTimestamp(message.time), writer.uint32(18).fork()).ldelim();
    }

    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(Long.fromString(message.power.toString()));
    }

    if (message.consensusAddress !== "") {
      writer.uint32(34).string(message.consensusAddress);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Equivocation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquivocation();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.height = BigInt(reader.int64().toString());
          break;

        case 2:
          message.time = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.power = BigInt(reader.int64().toString());
          break;

        case 4:
          message.consensusAddress = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Equivocation {
    return {
      height: isSet(object.height) ? (prop => BigInt(prop.toString!!()))(object.height) : BigInt("0"),
      time: isSet(object.time) ? new Date(object.time) : undefined,
      power: isSet(object.power) ? (prop => BigInt(prop.toString!!()))(object.power) : BigInt("0"),
      consensusAddress: isSet(object.consensusAddress) ? String(object.consensusAddress) : ""
    };
  },

  toJSON(message: Equivocation): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt("0")).toString());
    message.time !== undefined && (obj.time = message.time.toISOString());
    message.power !== undefined && (obj.power = (message.power || BigInt("0")).toString());
    message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
    return obj;
  },

  fromPartial(object: DeepPartial<Equivocation>): Equivocation {
    const message = createBaseEquivocation();
    message.height = object.height !== undefined && object.height !== null ? (prop => BigInt(prop.toString!!()))(object.height) : BigInt("0");
    message.time = object.time ?? undefined;
    message.power = object.power !== undefined && object.power !== null ? (prop => BigInt(prop.toString!!()))(object.power) : BigInt("0");
    message.consensusAddress = object.consensusAddress ?? "";
    return message;
  },

  fromSDK(object: EquivocationSDKType): Equivocation {
    return {
      height: object?.height,
      time: object.time ?? undefined,
      power: object?.power,
      consensusAddress: object?.consensus_address
    };
  },

  fromSDKJSON(object: any): EquivocationSDKType {
    return {
      height: isSet(object.height) ? (prop => BigInt(prop.toString!!()))(object.height) : BigInt("0"),
      time: isSet(object.time) ? new Date(object.time) : undefined,
      power: isSet(object.power) ? (prop => BigInt(prop.toString!!()))(object.power) : BigInt("0"),
      consensus_address: isSet(object.consensus_address) ? String(object.consensus_address) : ""
    };
  },

  toSDK(message: Equivocation): EquivocationSDKType {
    const obj: any = {};
    obj.height = message.height;
    message.time !== undefined && (obj.time = message.time ?? undefined);
    obj.power = message.power;
    obj.consensus_address = message.consensusAddress;
    return obj;
  }

};