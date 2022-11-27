import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long } from "../../../helpers";
export const protobufPackage = "osmosis.streamswap.v1";

/** Params holds parameters for the streamswap module */
export interface Params {
  /**
   * fee charged when creating a new sale. The fee will go to the
   * sale_fee_recipient unless it is not defined (empty).
   */
  saleCreationFee: Coin[];

  /** bech32 address of the fee recipient */
  saleCreationFeeRecipient: string;

  /**
   * minimum amount duration of time between the sale creation and the sale
   * start time.
   */
  minDurationUntilStartTime?: Duration;

  /** minimum duration for every new sale. */
  minSaleDuration?: Duration;
}

/** Params holds parameters for the streamswap module */
export interface ParamsSDKType {
  /**
   * fee charged when creating a new sale. The fee will go to the
   * sale_fee_recipient unless it is not defined (empty).
   */
  sale_creation_fee: CoinSDKType[];

  /** bech32 address of the fee recipient */
  sale_creation_fee_recipient: string;

  /**
   * minimum amount duration of time between the sale creation and the sale
   * start time.
   */
  min_duration_until_start_time?: DurationSDKType;

  /** minimum duration for every new sale. */
  min_sale_duration?: DurationSDKType;
}

function createBaseParams(): Params {
  return {
    saleCreationFee: [],
    saleCreationFeeRecipient: "",
    minDurationUntilStartTime: undefined,
    minSaleDuration: undefined
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.saleCreationFee) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.saleCreationFeeRecipient !== "") {
      writer.uint32(18).string(message.saleCreationFeeRecipient);
    }

    if (message.minDurationUntilStartTime !== undefined) {
      Duration.encode(message.minDurationUntilStartTime, writer.uint32(26).fork()).ldelim();
    }

    if (message.minSaleDuration !== undefined) {
      Duration.encode(message.minSaleDuration, writer.uint32(34).fork()).ldelim();
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
          message.saleCreationFee.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.saleCreationFeeRecipient = reader.string();
          break;

        case 3:
          message.minDurationUntilStartTime = Duration.decode(reader, reader.uint32());
          break;

        case 4:
          message.minSaleDuration = Duration.decode(reader, reader.uint32());
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
      saleCreationFee: Array.isArray(object?.saleCreationFee) ? object.saleCreationFee.map((e: any) => Coin.fromJSON(e)) : [],
      saleCreationFeeRecipient: isSet(object.saleCreationFeeRecipient) ? String(object.saleCreationFeeRecipient) : "",
      minDurationUntilStartTime: isSet(object.minDurationUntilStartTime) ? Duration.fromJSON(object.minDurationUntilStartTime) : undefined,
      minSaleDuration: isSet(object.minSaleDuration) ? Duration.fromJSON(object.minSaleDuration) : undefined
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};

    if (message.saleCreationFee) {
      obj.saleCreationFee = message.saleCreationFee.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.saleCreationFee = [];
    }

    message.saleCreationFeeRecipient !== undefined && (obj.saleCreationFeeRecipient = message.saleCreationFeeRecipient);
    message.minDurationUntilStartTime !== undefined && (obj.minDurationUntilStartTime = message.minDurationUntilStartTime ? Duration.toJSON(message.minDurationUntilStartTime) : undefined);
    message.minSaleDuration !== undefined && (obj.minSaleDuration = message.minSaleDuration ? Duration.toJSON(message.minSaleDuration) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.saleCreationFee = object.saleCreationFee?.map(e => Coin.fromPartial(e)) || [];
    message.saleCreationFeeRecipient = object.saleCreationFeeRecipient ?? "";
    message.minDurationUntilStartTime = object.minDurationUntilStartTime !== undefined && object.minDurationUntilStartTime !== null ? Duration.fromPartial(object.minDurationUntilStartTime) : undefined;
    message.minSaleDuration = object.minSaleDuration !== undefined && object.minSaleDuration !== null ? Duration.fromPartial(object.minSaleDuration) : undefined;
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      saleCreationFee: Array.isArray(object?.sale_creation_fee) ? object.sale_creation_fee.map((e: any) => Coin.fromSDK(e)) : [],
      saleCreationFeeRecipient: isSet(object.sale_creation_fee_recipient) ? object.sale_creation_fee_recipient : undefined,
      minDurationUntilStartTime: isSet(object.min_duration_until_start_time) ? Duration.fromSDK(object.min_duration_until_start_time) : undefined,
      minSaleDuration: isSet(object.min_sale_duration) ? Duration.fromSDK(object.min_sale_duration) : undefined
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};

    if (message.saleCreationFee) {
      obj.sale_creation_fee = message.saleCreationFee.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.sale_creation_fee = [];
    }

    message.saleCreationFeeRecipient !== undefined && (obj.sale_creation_fee_recipient = message.saleCreationFeeRecipient);
    message.minDurationUntilStartTime !== undefined && (obj.min_duration_until_start_time = message.minDurationUntilStartTime ? Duration.toSDK(message.minDurationUntilStartTime) : undefined);
    message.minSaleDuration !== undefined && (obj.min_sale_duration = message.minSaleDuration ? Duration.toSDK(message.minSaleDuration) : undefined);
    return obj;
  },

  fromAmino(object: ParamsSDKType): Params {
    return {
      saleCreationFee: Array.isArray(object?.sale_creation_fee) ? object.sale_creation_fee.map((e: any) => Coin.fromAmino(e)) : [],
      saleCreationFeeRecipient: isSet(object.sale_creation_fee_recipient) ? object.sale_creation_fee_recipient : undefined,
      minDurationUntilStartTime: {
        seconds: Long.fromNumber(Math.floor(parseInt(objectObject) / 1_000_000_000)),
        nanos: parseInt(objectObject) % 1_000_000_000
      },
      minSaleDuration: {
        seconds: Long.fromNumber(Math.floor(parseInt(objectObject) / 1_000_000_000)),
        nanos: parseInt(objectObject) % 1_000_000_000
      }
    };
  },

  toAmino(message: Params): ParamsSDKType {
    const obj: any = {};

    if (message.saleCreationFee) {
      obj.sale_creation_fee = message.saleCreationFee.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.sale_creation_fee = [];
    }

    message.saleCreationFeeRecipient !== undefined && (obj.sale_creation_fee_recipient = message.saleCreationFeeRecipient);
    message.minDurationUntilStartTime !== undefined && (obj.min_duration_until_start_time = message.minDurationUntilStartTime ? Duration.toAmino(message.minDurationUntilStartTime) : undefined);
    message.minSaleDuration !== undefined && (obj.min_sale_duration = message.minSaleDuration ? Duration.toAmino(message.minSaleDuration) : undefined);
    return obj;
  }

};