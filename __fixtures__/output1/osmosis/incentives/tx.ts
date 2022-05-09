import { QueryCondition } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { AminoMsg } from "@cosmjs/amino";
import * as _m0 from "protobuf/minimal";
import { toTimestamp, fromTimestamp, Long, isSet, fromJsonTimestamp, Exact, DeepPartial } from "@osmonauts/helpers";
export interface MsgCreateGauge {
  isPerpetual: boolean;
  owner: string;
  distributeTo: QueryCondition;
  coins: Coin[];
  startTime: Date;
  numEpochsPaidOver: Long;
}

function createBaseMsgCreateGauge(): MsgCreateGauge {
  return {
    isPerpetual: false,
    owner: "",
    distributeTo: undefined,
    coins: [],
    startTime: undefined,
    numEpochsPaidOver: Long.UZERO
  };
}

export const MsgCreateGauge = {
  encode(message: MsgCreateGauge, writer = _m0.Writer.create()): _m0.Writer {
    if (message.isPerpetual === true) {
      writer.uint32(8).bool(message.isPerpetual);
    }

    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }

    if (message.distributeTo !== undefined) {
      QueryCondition.encode(message.distributeTo, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.startTime !== undefined) Timestamp.encode(toTimestamp(message.startTime), writer.uint32(42).fork()).ldelim();

    if (!message.numEpochsPaidOver.isZero()) {
      writer.uint32(48).uint64(message.numEpochsPaidOver);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGauge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGauge();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.isPerpetual = reader.bool();
          break;

        case 2:
          message.owner = reader.string();
          break;

        case 3:
          message.distributeTo = QueryCondition.decode(reader, reader.uint32());
          break;

        case 4:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;

        case 5:
          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.numEpochsPaidOver = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGauge {
    return {
      isPerpetual: isSet(object.isPerpetual) ? Boolean(object.isPerpetual) : false,
      owner: isSet(object.owner) ? String(object.owner) : "",
      distributeTo: isSet(object.distributeTo) ? QueryCondition.fromJSON(object.distributeTo) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
      numEpochsPaidOver: isSet(object.numEpochsPaidOver) ? Long.fromString(object.numEpochsPaidOver) : Long.UZERO
    };
  },

  toJSON(message: MsgCreateGauge): unknown {
    const obj: any = {};
    message.isPerpetual !== undefined && (obj.isPerpetual = message.isPerpetual);
    message.owner !== undefined && (obj.owner = message.owner);
    message.distributeTo !== undefined && (obj.distributeTo = message.distributeTo ? QueryCondition.toJSON(message.distributeTo) : undefined);

    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }

    message.startTime !== undefined && (obj.startTime = message.startTime.toISOString());
    message.numEpochsPaidOver !== undefined && (obj.numEpochsPaidOver = (message.numEpochsPaidOver || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGauge>, I>>(object: I): MsgCreateGauge {
    const message = createBaseMsgCreateGauge();
    message.isPerpetual = object.isPerpetual ?? false;
    message.owner = object.owner ?? "";
    message.distributeTo = object.distributeTo !== undefined && object.distributeTo !== null ? QueryCondition.fromPartial(object.distributeTo) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.startTime = object.startTime ?? undefined;
    message.numEpochsPaidOver = object.numEpochsPaidOver !== undefined && object.numEpochsPaidOver !== null ? Long.fromValue(object.numEpochsPaidOver) : Long.UZERO;
    return message;
  }

};
export interface MsgCreateGaugeResponse {}

function createBaseMsgCreateGaugeResponse(): MsgCreateGaugeResponse {
  return {};
}

export const MsgCreateGaugeResponse = {
  encode(message: MsgCreateGaugeResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateGaugeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGaugeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgCreateGaugeResponse {
    return {};
  },

  toJSON(message: MsgCreateGaugeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateGaugeResponse>, I>>(object: I): MsgCreateGaugeResponse {
    const message = createBaseMsgCreateGaugeResponse();
    return message;
  }

};
export interface MsgAddToGauge {
  owner: string;
  gaugeId: Long;
  rewards: Coin[];
}

function createBaseMsgAddToGauge(): MsgAddToGauge {
  return {
    owner: "",
    gaugeId: Long.UZERO,
    rewards: []
  };
}

export const MsgAddToGauge = {
  encode(message: MsgAddToGauge, writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (!message.gaugeId.isZero()) {
      writer.uint32(16).uint64(message.gaugeId);
    }

    for (const v of message.rewards) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGauge {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToGauge();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.gaugeId = (reader.uint64() as Long);
          break;

        case 3:
          message.rewards.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddToGauge {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      gaugeId: isSet(object.gaugeId) ? Long.fromString(object.gaugeId) : Long.UZERO,
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgAddToGauge): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.gaugeId !== undefined && (obj.gaugeId = (message.gaugeId || Long.UZERO).toString());

    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.rewards = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddToGauge>, I>>(object: I): MsgAddToGauge {
    const message = createBaseMsgAddToGauge();
    message.owner = object.owner ?? "";
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};
export interface MsgAddToGaugeResponse {}

function createBaseMsgAddToGaugeResponse(): MsgAddToGaugeResponse {
  return {};
}

export const MsgAddToGaugeResponse = {
  encode(message: MsgAddToGaugeResponse, writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToGaugeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToGaugeResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgAddToGaugeResponse {
    return {};
  },

  toJSON(message: MsgAddToGaugeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddToGaugeResponse>, I>>(object: I): MsgAddToGaugeResponse {
    const message = createBaseMsgAddToGaugeResponse();
    return message;
  }

};
export interface AminoMsgCreateGauge extends AminoMsg {
  type: "osmosis/incentives/create-gauge";
  value: {
    is_perpetual: boolean;
    owner: string;
    distribute_to: {
      lock_query_type: number;
      denom: string;
      duration: {
        seconds: string;
        nanos: number;
      };
      timestamp: {
        seconds: string;
        nanos: number;
      };
    };
    coins: {
      denom: string;
      amount: string;
    }[];
    start_time: {
      seconds: string;
      nanos: number;
    };
    num_epochs_paid_over: string;
  };
}
export interface AminoMsgAddToGauge extends AminoMsg {
  type: "osmosis/incentives/add-to-gauge";
  value: {
    owner: string;
    gauge_id: string;
    rewards: {
      denom: string;
      amount: string;
    }[];
  };
}
export const AminoConverter = {
  "/osmosis.incentives.MsgCreateGauge": {
    aminoType: "osmosis/incentives/create-gauge",
    toAmino: ({
      isPerpetual,
      owner,
      distributeTo,
      coins,
      startTime,
      numEpochsPaidOver
    }: MsgCreateGauge): AminoMsgCreateGauge["value"] => {
      return {
        is_perpetual: isPerpetual,
        owner,
        distribute_to: {
          lock_query_type: distributeTo.lockQueryType,
          denom: distributeTo.denom,
          duration: {
            seconds: distributeTo.duration.seconds.toString(),
            nanos: distributeTo.duration.nanos
          },
          timestamp: {
            seconds: distributeTo.timestamp.seconds.toString(),
            nanos: distributeTo.timestamp.nanos
          }
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        start_time: {
          seconds: startTime.seconds.toString(),
          nanos: startTime.nanos
        },
        num_epochs_paid_over: numEpochsPaidOver.toString()
      };
    },
    fromAmino: ({
      is_perpetual,
      owner,
      distribute_to,
      coins,
      start_time,
      num_epochs_paid_over
    }: AminoMsgCreateGauge["value"]): MsgCreateGauge => {
      return {
        isPerpetual: is_perpetual,
        owner,
        distributeTo: {
          lockQueryType: lockQueryTypeFromJSON(distribute_to.lock_query_type),
          denom: distribute_to.denom,
          duration: {
            seconds: Long.fromString(distribute_to.duration.seconds),
            nanos: distribute_to.duration.nanos
          },
          timestamp: {
            seconds: Long.fromString(distribute_to.timestamp.seconds),
            nanos: distribute_to.timestamp.nanos
          }
        },
        coins: coins.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        })),
        startTime: {
          seconds: Long.fromString(start_time.seconds),
          nanos: start_time.nanos
        },
        numEpochsPaidOver: Long.fromString(num_epochs_paid_over)
      };
    }
  },
  "/osmosis.incentives.MsgAddToGauge": {
    aminoType: "osmosis/incentives/add-to-gauge",
    toAmino: ({
      owner,
      gaugeId,
      rewards
    }: MsgAddToGauge): AminoMsgAddToGauge["value"] => {
      return {
        owner,
        gauge_id: gaugeId.toString(),
        rewards: rewards.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    },
    fromAmino: ({
      owner,
      gauge_id,
      rewards
    }: AminoMsgAddToGauge["value"]): MsgAddToGauge => {
      return {
        owner,
        gaugeId: Long.fromString(gauge_id),
        rewards: rewards.map(el0 => ({
          denom: el0.denom,
          amount: el0.amount
        }))
      };
    }
  }
};
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/osmosis.incentives.MsgCreateGauge", MsgCreateGauge], ["/osmosis.incentives.MsgAddToGauge", MsgAddToGauge]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};