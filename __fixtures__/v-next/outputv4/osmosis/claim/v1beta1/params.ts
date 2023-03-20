import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.claim.v1beta1";

/** Params defines the claim module's parameters. */
export interface Params {
  airdropStartTime?: Date;
  durationUntilDecay?: Duration;
  durationOfDecay?: Duration;

  /** denom of claimable asset */
  claimDenom: string;
}

/** Params defines the claim module's parameters. */
export interface ParamsSDKType {
  airdrop_start_time?: Date;
  duration_until_decay?: DurationSDKType;
  duration_of_decay?: DurationSDKType;
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
      airdropStartTime: isSet(object.airdropStartTime) ? fromTimestamp(fromJsonTimestamp(object.airdropStartTime)) : undefined,
      durationUntilDecay: isSet(object.durationUntilDecay) ? Duration.fromJSON(object.durationUntilDecay) : undefined,
      durationOfDecay: isSet(object.durationOfDecay) ? Duration.fromJSON(object.durationOfDecay) : undefined,
      claimDenom: isSet(object.claimDenom) ? String(object.claimDenom) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.airdropStartTime !== undefined && (obj.airdropStartTime = message.airdropStartTime.toISOString());
    message.durationUntilDecay !== undefined && (obj.durationUntilDecay = message.durationUntilDecay ? Duration.toJSON(message.durationUntilDecay) : undefined);
    message.durationOfDecay !== undefined && (obj.durationOfDecay = message.durationOfDecay ? Duration.toJSON(message.durationOfDecay) : undefined);
    message.claimDenom !== undefined && (obj.claimDenom = message.claimDenom);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.airdropStartTime = object.airdropStartTime ?? undefined;
    message.durationUntilDecay = object.durationUntilDecay !== undefined && object.durationUntilDecay !== null ? Duration.fromPartial(object.durationUntilDecay) : undefined;
    message.durationOfDecay = object.durationOfDecay !== undefined && object.durationOfDecay !== null ? Duration.fromPartial(object.durationOfDecay) : undefined;
    message.claimDenom = object.claimDenom ?? "";
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      airdropStartTime: object.airdrop_start_time ?? undefined,
      durationUntilDecay: object.duration_until_decay ? Duration.fromSDK(object.duration_until_decay) : undefined,
      durationOfDecay: object.duration_of_decay ? Duration.fromSDK(object.duration_of_decay) : undefined,
      claimDenom: object?.claim_denom
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.airdropStartTime !== undefined && (obj.airdrop_start_time = message.airdropStartTime ?? undefined);
    message.durationUntilDecay !== undefined && (obj.duration_until_decay = message.durationUntilDecay ? Duration.toSDK(message.durationUntilDecay) : undefined);
    message.durationOfDecay !== undefined && (obj.duration_of_decay = message.durationOfDecay ? Duration.toSDK(message.durationOfDecay) : undefined);
    obj.claim_denom = message.claimDenom;
    return obj;
  },

  fromSDKJSON(object: any): ParamsSDKType {
    return {
      airdrop_start_time: isSet(object.airdrop_start_time) ? fromTimestamp(fromJsonTimestamp(object.airdrop_start_time)) : undefined,
      duration_until_decay: isSet(object.duration_until_decay) ? Duration.fromSDKJSON(object.duration_until_decay) : undefined,
      duration_of_decay: isSet(object.duration_of_decay) ? Duration.fromSDKJSON(object.duration_of_decay) : undefined,
      claim_denom: isSet(object.claim_denom) ? String(object.claim_denom) : ""
    };
  }

};