//@ts-nocheck
/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, fromTimestamp, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "cosmos.evidence.v1beta1";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
  height: Long;
  time: Timestamp;
  power: Long;
  consensusAddress: string;
}
function createBaseEquivocation(): Equivocation {
  return {
    height: Long.ZERO,
    time: undefined,
    power: Long.ZERO,
    consensusAddress: ""
  };
}
export const Equivocation = {
  encode(message: Equivocation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
    }
    if (!message.power.isZero()) {
      writer.uint32(24).int64(message.power);
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
          message.height = (reader.int64() as Long);
          break;
        case 2:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.power = (reader.int64() as Long);
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
    const obj = createBaseEquivocation();
    if (isSet(object.height)) obj.height = Long.fromValue(object.height);
    if (isSet(object.time)) obj.time = fromJsonTimestamp(object.time);
    if (isSet(object.power)) obj.power = Long.fromValue(object.power);
    if (isSet(object.consensusAddress)) obj.consensusAddress = String(object.consensusAddress);
    return obj;
  },
  toJSON(message: Equivocation): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.power !== undefined && (obj.power = (message.power || Long.ZERO).toString());
    message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
    return obj;
  },
  fromPartial(object: DeepPartial<Equivocation>): Equivocation {
    const message = createBaseEquivocation();
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : Timestamp.fromPartial({});
    message.power = object.power !== undefined && object.power !== null ? Long.fromValue(object.power) : Long.ZERO;
    message.consensusAddress = object.consensusAddress ?? "";
    return message;
  }
};