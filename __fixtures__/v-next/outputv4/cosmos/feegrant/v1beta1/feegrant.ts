import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { toTimestamp, fromTimestamp, isSet, fromJsonTimestamp, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.feegrant.v1beta1";

/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowance {
  /**
   * spend_limit specifies the maximum amount of tokens that can be spent
   * by this allowance and will be updated as tokens are spent. If it is
   * empty, there is no spend limit and any amount of coins can be spent.
   */
  spendLimit: Coin[];

  /** expiration specifies an optional time when this allowance expires */
  expiration?: Date;
}

/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowanceSDKType {
  spend_limit: CoinSDKType[];
  expiration?: Date;
}

/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowance {
  /** basic specifies a struct of `BasicAllowance` */
  basic?: BasicAllowance;

  /**
   * period specifies the time duration in which period_spend_limit coins can
   * be spent before that allowance is reset
   */
  period?: Duration;

  /**
   * period_spend_limit specifies the maximum number of coins that can be spent
   * in the period
   */
  periodSpendLimit: Coin[];

  /** period_can_spend is the number of coins left to be spent before the period_reset time */
  periodCanSpend: Coin[];

  /**
   * period_reset is the time at which this period resets and a new one begins,
   * it is calculated from the start time of the first transaction after the
   * last period ended
   */
  periodReset?: Date;
}

/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowanceSDKType {
  basic?: BasicAllowanceSDKType;
  period?: DurationSDKType;
  period_spend_limit: CoinSDKType[];
  period_can_spend: CoinSDKType[];
  period_reset?: Date;
}

/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowance {
  /** allowance can be any of basic and periodic fee allowance. */
  allowance?: Any;

  /** allowed_messages are the messages for which the grantee has the access. */
  allowedMessages: string[];
}

/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowanceSDKType {
  allowance?: AnySDKType;
  allowed_messages: string[];
}

/** Grant is stored in the KVStore to record a grant with full context */
export interface Grant {
  /** granter is the address of the user granting an allowance of their funds. */
  granter: string;

  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee: string;

  /** allowance can be any of basic, periodic, allowed fee allowance. */
  allowance?: Any;
}

/** Grant is stored in the KVStore to record a grant with full context */
export interface GrantSDKType {
  granter: string;
  grantee: string;
  allowance?: AnySDKType;
}

function createBaseBasicAllowance(): BasicAllowance {
  return {
    spendLimit: [],
    expiration: undefined
  };
}

export const BasicAllowance = {
  encode(message: BasicAllowance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.spendLimit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.expiration !== undefined) {
      Timestamp.encode(toTimestamp(message.expiration), writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BasicAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBasicAllowance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.spendLimit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.expiration = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): BasicAllowance {
    return {
      spendLimit: Array.isArray(object?.spendLimit) ? object.spendLimit.map((e: any) => Coin.fromJSON(e)) : [],
      expiration: isSet(object.expiration) ? fromTimestamp(fromJsonTimestamp(object.expiration)) : undefined
    };
  },

  toJSON(message: BasicAllowance): unknown {
    const obj: any = {};

    if (message.spendLimit) {
      obj.spendLimit = message.spendLimit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.spendLimit = [];
    }

    message.expiration !== undefined && (obj.expiration = message.expiration.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<BasicAllowance>): BasicAllowance {
    const message = createBaseBasicAllowance();
    message.spendLimit = object.spendLimit?.map(e => Coin.fromPartial(e)) || [];
    message.expiration = object.expiration ?? undefined;
    return message;
  },

  fromSDK(object: BasicAllowanceSDKType): BasicAllowance {
    return {
      spendLimit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e: any) => Coin.fromSDK(e)) : [],
      expiration: object.expiration ?? undefined
    };
  },

  toSDK(message: BasicAllowance): BasicAllowanceSDKType {
    const obj: any = {};

    if (message.spendLimit) {
      obj.spend_limit = message.spendLimit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.spend_limit = [];
    }

    message.expiration !== undefined && (obj.expiration = message.expiration ?? undefined);
    return obj;
  },

  fromSDKJSON(object: any): BasicAllowanceSDKType {
    return {
      spend_limit: Array.isArray(object?.spend_limit) ? object.spend_limit.map((e: any) => Coin.fromSDKJSON(e)) : [],
      expiration: isSet(object.expiration) ? fromTimestamp(fromJsonTimestamp(object.expiration)) : undefined
    };
  }

};

function createBasePeriodicAllowance(): PeriodicAllowance {
  return {
    basic: undefined,
    period: undefined,
    periodSpendLimit: [],
    periodCanSpend: [],
    periodReset: undefined
  };
}

export const PeriodicAllowance = {
  encode(message: PeriodicAllowance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.basic !== undefined) {
      BasicAllowance.encode(message.basic, writer.uint32(10).fork()).ldelim();
    }

    if (message.period !== undefined) {
      Duration.encode(message.period, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.periodSpendLimit) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.periodCanSpend) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.periodReset !== undefined) {
      Timestamp.encode(toTimestamp(message.periodReset), writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PeriodicAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePeriodicAllowance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.basic = BasicAllowance.decode(reader, reader.uint32());
          break;

        case 2:
          message.period = Duration.decode(reader, reader.uint32());
          break;

        case 3:
          message.periodSpendLimit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 4:
          message.periodCanSpend.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.periodReset = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): PeriodicAllowance {
    return {
      basic: isSet(object.basic) ? BasicAllowance.fromJSON(object.basic) : undefined,
      period: isSet(object.period) ? Duration.fromJSON(object.period) : undefined,
      periodSpendLimit: Array.isArray(object?.periodSpendLimit) ? object.periodSpendLimit.map((e: any) => Coin.fromJSON(e)) : [],
      periodCanSpend: Array.isArray(object?.periodCanSpend) ? object.periodCanSpend.map((e: any) => Coin.fromJSON(e)) : [],
      periodReset: isSet(object.periodReset) ? fromTimestamp(fromJsonTimestamp(object.periodReset)) : undefined
    };
  },

  toJSON(message: PeriodicAllowance): unknown {
    const obj: any = {};
    message.basic !== undefined && (obj.basic = message.basic ? BasicAllowance.toJSON(message.basic) : undefined);
    message.period !== undefined && (obj.period = message.period ? Duration.toJSON(message.period) : undefined);

    if (message.periodSpendLimit) {
      obj.periodSpendLimit = message.periodSpendLimit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.periodSpendLimit = [];
    }

    if (message.periodCanSpend) {
      obj.periodCanSpend = message.periodCanSpend.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.periodCanSpend = [];
    }

    message.periodReset !== undefined && (obj.periodReset = message.periodReset.toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<PeriodicAllowance>): PeriodicAllowance {
    const message = createBasePeriodicAllowance();
    message.basic = object.basic !== undefined && object.basic !== null ? BasicAllowance.fromPartial(object.basic) : undefined;
    message.period = object.period !== undefined && object.period !== null ? Duration.fromPartial(object.period) : undefined;
    message.periodSpendLimit = object.periodSpendLimit?.map(e => Coin.fromPartial(e)) || [];
    message.periodCanSpend = object.periodCanSpend?.map(e => Coin.fromPartial(e)) || [];
    message.periodReset = object.periodReset ?? undefined;
    return message;
  },

  fromSDK(object: PeriodicAllowanceSDKType): PeriodicAllowance {
    return {
      basic: object.basic ? BasicAllowance.fromSDK(object.basic) : undefined,
      period: object.period ? Duration.fromSDK(object.period) : undefined,
      periodSpendLimit: Array.isArray(object?.period_spend_limit) ? object.period_spend_limit.map((e: any) => Coin.fromSDK(e)) : [],
      periodCanSpend: Array.isArray(object?.period_can_spend) ? object.period_can_spend.map((e: any) => Coin.fromSDK(e)) : [],
      periodReset: object.period_reset ?? undefined
    };
  },

  toSDK(message: PeriodicAllowance): PeriodicAllowanceSDKType {
    const obj: any = {};
    message.basic !== undefined && (obj.basic = message.basic ? BasicAllowance.toSDK(message.basic) : undefined);
    message.period !== undefined && (obj.period = message.period ? Duration.toSDK(message.period) : undefined);

    if (message.periodSpendLimit) {
      obj.period_spend_limit = message.periodSpendLimit.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.period_spend_limit = [];
    }

    if (message.periodCanSpend) {
      obj.period_can_spend = message.periodCanSpend.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.period_can_spend = [];
    }

    message.periodReset !== undefined && (obj.period_reset = message.periodReset ?? undefined);
    return obj;
  },

  fromSDKJSON(object: any): PeriodicAllowanceSDKType {
    return {
      basic: isSet(object.basic) ? BasicAllowance.fromSDKJSON(object.basic) : undefined,
      period: isSet(object.period) ? Duration.fromSDKJSON(object.period) : undefined,
      period_spend_limit: Array.isArray(object?.period_spend_limit) ? object.period_spend_limit.map((e: any) => Coin.fromSDKJSON(e)) : [],
      period_can_spend: Array.isArray(object?.period_can_spend) ? object.period_can_spend.map((e: any) => Coin.fromSDKJSON(e)) : [],
      period_reset: isSet(object.period_reset) ? fromTimestamp(fromJsonTimestamp(object.period_reset)) : undefined
    };
  }

};

function createBaseAllowedMsgAllowance(): AllowedMsgAllowance {
  return {
    allowance: undefined,
    allowedMessages: []
  };
}

export const AllowedMsgAllowance = {
  encode(message: AllowedMsgAllowance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.allowedMessages) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AllowedMsgAllowance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAllowedMsgAllowance();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.allowance = Any.decode(reader, reader.uint32());
          break;

        case 2:
          message.allowedMessages.push(reader.string());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): AllowedMsgAllowance {
    return {
      allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined,
      allowedMessages: Array.isArray(object?.allowedMessages) ? object.allowedMessages.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: AllowedMsgAllowance): unknown {
    const obj: any = {};
    message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : undefined);

    if (message.allowedMessages) {
      obj.allowedMessages = message.allowedMessages.map(e => e);
    } else {
      obj.allowedMessages = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<AllowedMsgAllowance>): AllowedMsgAllowance {
    const message = createBaseAllowedMsgAllowance();
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
    message.allowedMessages = object.allowedMessages?.map(e => e) || [];
    return message;
  },

  fromSDK(object: AllowedMsgAllowanceSDKType): AllowedMsgAllowance {
    return {
      allowance: object.allowance ? Any.fromSDK(object.allowance) : undefined,
      allowedMessages: Array.isArray(object?.allowed_messages) ? object.allowed_messages.map((e: any) => e) : []
    };
  },

  toSDK(message: AllowedMsgAllowance): AllowedMsgAllowanceSDKType {
    const obj: any = {};
    message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toSDK(message.allowance) : undefined);

    if (message.allowedMessages) {
      obj.allowed_messages = message.allowedMessages.map(e => e);
    } else {
      obj.allowed_messages = [];
    }

    return obj;
  },

  fromSDKJSON(object: any): AllowedMsgAllowanceSDKType {
    return {
      allowance: isSet(object.allowance) ? Any.fromSDKJSON(object.allowance) : undefined,
      allowed_messages: Array.isArray(object?.allowed_messages) ? object.allowed_messages.map((e: any) => String(e)) : []
    };
  }

};

function createBaseGrant(): Grant {
  return {
    granter: "",
    grantee: "",
    allowance: undefined
  };
}

export const Grant = {
  encode(message: Grant, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }

    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }

    if (message.allowance !== undefined) {
      Any.encode(message.allowance, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Grant {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrant();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.allowance = Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Grant {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      allowance: isSet(object.allowance) ? Any.fromJSON(object.allowance) : undefined
    };
  },

  toJSON(message: Grant): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toJSON(message.allowance) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Grant>): Grant {
    const message = createBaseGrant();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.allowance = object.allowance !== undefined && object.allowance !== null ? Any.fromPartial(object.allowance) : undefined;
    return message;
  },

  fromSDK(object: GrantSDKType): Grant {
    return {
      granter: object?.granter,
      grantee: object?.grantee,
      allowance: object.allowance ? Any.fromSDK(object.allowance) : undefined
    };
  },

  toSDK(message: Grant): GrantSDKType {
    const obj: any = {};
    obj.granter = message.granter;
    obj.grantee = message.grantee;
    message.allowance !== undefined && (obj.allowance = message.allowance ? Any.toSDK(message.allowance) : undefined);
    return obj;
  },

  fromSDKJSON(object: any): GrantSDKType {
    return {
      granter: isSet(object.granter) ? String(object.granter) : "",
      grantee: isSet(object.grantee) ? String(object.grantee) : "",
      allowance: isSet(object.allowance) ? Any.fromSDKJSON(object.allowance) : undefined
    };
  }

};