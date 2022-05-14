import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, Exact, DeepPartial } from "@osmonauts/helpers";

/** Params defines the claim module's parameters. */
export interface Params {
  airdropStartTime: Date;
  durationUntilDecay: string;
  durationOfDecay: string;

  /** denom of claimable asset */
  claimDenom: string;
}

function createBaseParams(): Params {
  return {
    airdropStartTime: undefined,
    durationUntilDecay: undefined,
    durationOfDecay: undefined,
    claimDenom: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.airdropStartTime !== undefined) {
      Timestamp.encode(toTimestamp(message.airdropStartTime), writer.uint32(10).fork()).ldelim();
    }

    if (message.durationUntilDecay !== undefined) {
      Duration.encode(message.durationUntilDecay, writer.uint32(18).fork()).ldelim();
    }

    if (message.durationOfDecay !== undefined) {
      Duration.encode(message.durationOfDecay, writer.uint32(26).fork()).ldelim();
    }

    if (message.claimDenom !== "") {
      writer.uint32(34).string(message.claimDenom);
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
          message.airdropStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 2:
          message.durationUntilDecay = Duration.decode(reader, reader.uint32());
          break;

        case 3:
          message.durationOfDecay = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.claimDenom = reader.string();
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
      airdropStartTime: isSet(object.airdropStartTime) ? fromJsonTimestamp(object.airdropStartTime) : undefined,
      durationUntilDecay: isSet(object.durationUntilDecay) ? String(object.durationUntilDecay) : undefined,
      durationOfDecay: isSet(object.durationOfDecay) ? String(object.durationOfDecay) : undefined,
      claimDenom: isSet(object.claimDenom) ? String(object.claimDenom) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.airdropStartTime !== undefined && (obj.airdropStartTime = message.airdropStartTime.toISOString());
    message.durationUntilDecay !== undefined && (obj.durationUntilDecay = message.durationUntilDecay);
    message.durationOfDecay !== undefined && (obj.durationOfDecay = message.durationOfDecay);
    message.claimDenom !== undefined && (obj.claimDenom = message.claimDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.airdropStartTime = object.airdropStartTime ?? undefined;
    message.durationUntilDecay = object.durationUntilDecay ?? undefined;
    message.durationOfDecay = object.durationOfDecay ?? undefined;
    message.claimDenom = object.claimDenom ?? "";
    return message;
  }

};