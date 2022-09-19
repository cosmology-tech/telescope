import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial } from "@osmonauts/helpers";
export const protobufPackage = "osmosis.claim.v1beta1";

/** Params defines the claim module's parameters. */
export interface Params {
  airdropStartTime: Date;
  durationUntilDecay: Duration;
  durationOfDecay: Duration;

  /** denom of claimable asset */
  claimDenom: string;
}

/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
  airdrop_start_time: Date;
  duration_until_decay: DurationSDKType;
  duration_of_decay: DurationSDKType;

  /** denom of claimable asset */
  claim_denom: string;
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
      durationUntilDecay: isSet(object.durationUntilDecay) ? Duration.fromJSON(object.durationUntilDecay) : undefined,
      durationOfDecay: isSet(object.durationOfDecay) ? Duration.fromJSON(object.durationOfDecay) : undefined,
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

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.airdropStartTime = object.airdropStartTime ?? undefined;
    message.durationUntilDecay = object.durationUntilDecay ?? undefined;
    message.durationOfDecay = object.durationOfDecay ?? undefined;
    message.claimDenom = object.claimDenom ?? "";
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      airdropStartTime: isSet(object.airdrop_start_time) ? Timestamp.fromSDK(object.airdrop_start_time) : undefined,
      durationUntilDecay: isSet(object.duration_until_decay) ? Duration.fromSDK(object.duration_until_decay) : undefined,
      durationOfDecay: isSet(object.duration_of_decay) ? Duration.fromSDK(object.duration_of_decay) : undefined,
      claimDenom: isSet(object.claim_denom) ? object.claim_denom : undefined
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.airdropStartTime !== undefined && (obj.airdrop_start_time = message.airdropStartTime ? Timestamp.toSDK(message.airdropStartTime) : undefined);
    message.durationUntilDecay !== undefined && (obj.duration_until_decay = message.durationUntilDecay ? Duration.toSDK(message.durationUntilDecay) : undefined);
    message.durationOfDecay !== undefined && (obj.duration_of_decay = message.durationOfDecay ? Duration.toSDK(message.durationOfDecay) : undefined);
    message.claimDenom !== undefined && (obj.claim_denom = message.claimDenom);
    return obj;
  }

};