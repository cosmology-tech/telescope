//@ts-nocheck
/* eslint-disable */
import { QueryCondition } from "../lockup/lock";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, fromTimestamp, Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "osmosis.incentives";
/** MsgCreateGauge creates a gague to distribute rewards to users */
export interface MsgCreateGauge {
  /**
   * is_perpetual shows if it's a perpetual or non-perpetual gauge
   * Non-perpetual gauges distribute their tokens equally per epoch while the
   * gauge is in the active period. Perpetual gauges distribute all their tokens
   * at a single time and only distribute their tokens again once the gauge is
   * refilled
   */
  isPerpetual: boolean;
  /** owner is the address of gauge creator */
  owner: string;
  /**
   * distribute_to show which lock the gauge should distribute to by time
   * duration or by timestamp
   */
  distributeTo: QueryCondition;
  /** coins are coin(s) to be distributed by the gauge */
  coins: Coin[];
  /** start_time is the distribution start time */
  startTime: Timestamp;
  /**
   * num_epochs_paid_over is the number of epochs distribution will be completed
   * over
   */
  numEpochsPaidOver: Long;
}
export interface MsgCreateGaugeResponse {}
/** MsgAddToGauge adds coins to a previously created gauge */
export interface MsgAddToGauge {
  /** owner is the gauge owner's address */
  owner: string;
  /** gauge_id is the ID of gauge that rewards are getting added to */
  gaugeId: Long;
  /** rewards are the coin(s) to add to gauge */
  rewards: Coin[];
}
export interface MsgAddToGaugeResponse {}
function createBaseMsgCreateGauge(): MsgCreateGauge {
  return {
    isPerpetual: false,
    owner: "",
    distributeTo: QueryCondition.fromPartial({}),
    coins: [],
    startTime: Timestamp.fromPartial({}),
    numEpochsPaidOver: Long.UZERO
  };
}
export const MsgCreateGauge = {
  typeUrl: "/osmosis.incentives.MsgCreateGauge",
  encode(message: MsgCreateGauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.startTime !== undefined) {
      Timestamp.encode(message.startTime, writer.uint32(42).fork()).ldelim();
    }
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
          message.startTime = Timestamp.decode(reader, reader.uint32());
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
      numEpochsPaidOver: isSet(object.numEpochsPaidOver) ? Long.fromValue(object.numEpochsPaidOver) : Long.UZERO
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
    message.startTime !== undefined && (obj.startTime = fromTimestamp(message.startTime).toISOString());
    message.numEpochsPaidOver !== undefined && (obj.numEpochsPaidOver = (message.numEpochsPaidOver || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgCreateGauge>): MsgCreateGauge {
    const message = createBaseMsgCreateGauge();
    message.isPerpetual = object.isPerpetual ?? false;
    message.owner = object.owner ?? "";
    message.distributeTo = object.distributeTo !== undefined && object.distributeTo !== null ? QueryCondition.fromPartial(object.distributeTo) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    message.startTime = object.startTime !== undefined && object.startTime !== null ? Timestamp.fromPartial(object.startTime) : undefined;
    message.numEpochsPaidOver = object.numEpochsPaidOver !== undefined && object.numEpochsPaidOver !== null ? Long.fromValue(object.numEpochsPaidOver) : Long.UZERO;
    return message;
  },
  fromAmino(object: MsgCreateGaugeAmino): MsgCreateGauge {
    return {
      isPerpetual: object.is_perpetual,
      owner: object.owner,
      distributeTo: object?.distribute_to ? QueryCondition.fromAmino(object.distribute_to) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : [],
      startTime: object.start_time,
      numEpochsPaidOver: Long.fromString(object.num_epochs_paid_over)
    };
  },
  toAmino(message: MsgCreateGauge): MsgCreateGaugeAmino {
    const obj: any = {};
    obj.is_perpetual = message.isPerpetual;
    obj.owner = message.owner;
    obj.distribute_to = message.distributeTo ? QueryCondition.toAmino(message.distributeTo) : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
    obj.start_time = message.startTime;
    obj.num_epochs_paid_over = message.numEpochsPaidOver ? message.numEpochsPaidOver.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateGaugeAminoMsg): MsgCreateGauge {
    return MsgCreateGauge.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGauge): MsgCreateGaugeAminoMsg {
    return {
      type: "osmosis/incentives/create-gauge",
      value: MsgCreateGauge.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGaugeProtoMsg): MsgCreateGauge {
    return MsgCreateGauge.decode(message.value);
  },
  toProto(message: MsgCreateGauge): Uint8Array {
    return MsgCreateGauge.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGauge): MsgCreateGaugeProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.MsgCreateGauge",
      value: MsgCreateGauge.encode(message).finish()
    };
  }
};
function createBaseMsgCreateGaugeResponse(): MsgCreateGaugeResponse {
  return {};
}
export const MsgCreateGaugeResponse = {
  typeUrl: "/osmosis.incentives.MsgCreateGaugeResponse",
  encode(_: MsgCreateGaugeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  fromJSON(_: any): MsgCreateGaugeResponse {
    return {};
  },
  toJSON(_: MsgCreateGaugeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateGaugeResponse>): MsgCreateGaugeResponse {
    const message = createBaseMsgCreateGaugeResponse();
    return message;
  },
  fromAmino(_: MsgCreateGaugeResponseAmino): MsgCreateGaugeResponse {
    return {};
  },
  toAmino(_: MsgCreateGaugeResponse): MsgCreateGaugeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateGaugeResponseAminoMsg): MsgCreateGaugeResponse {
    return MsgCreateGaugeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGaugeResponse): MsgCreateGaugeResponseAminoMsg {
    return {
      type: "osmosis/incentives/create-gauge-response",
      value: MsgCreateGaugeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateGaugeResponseProtoMsg): MsgCreateGaugeResponse {
    return MsgCreateGaugeResponse.decode(message.value);
  },
  toProto(message: MsgCreateGaugeResponse): Uint8Array {
    return MsgCreateGaugeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGaugeResponse): MsgCreateGaugeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.MsgCreateGaugeResponse",
      value: MsgCreateGaugeResponse.encode(message).finish()
    };
  }
};
function createBaseMsgAddToGauge(): MsgAddToGauge {
  return {
    owner: "",
    gaugeId: Long.UZERO,
    rewards: []
  };
}
export const MsgAddToGauge = {
  typeUrl: "/osmosis.incentives.MsgAddToGauge",
  encode(message: MsgAddToGauge, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      gaugeId: isSet(object.gaugeId) ? Long.fromValue(object.gaugeId) : Long.UZERO,
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
  fromPartial(object: Partial<MsgAddToGauge>): MsgAddToGauge {
    const message = createBaseMsgAddToGauge();
    message.owner = object.owner ?? "";
    message.gaugeId = object.gaugeId !== undefined && object.gaugeId !== null ? Long.fromValue(object.gaugeId) : Long.UZERO;
    message.rewards = object.rewards?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgAddToGaugeAmino): MsgAddToGauge {
    return {
      owner: object.owner,
      gaugeId: Long.fromString(object.gauge_id),
      rewards: Array.isArray(object?.rewards) ? object.rewards.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgAddToGauge): MsgAddToGaugeAmino {
    const obj: any = {};
    obj.owner = message.owner;
    obj.gauge_id = message.gaugeId ? message.gaugeId.toString() : undefined;
    if (message.rewards) {
      obj.rewards = message.rewards.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgAddToGaugeAminoMsg): MsgAddToGauge {
    return MsgAddToGauge.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddToGauge): MsgAddToGaugeAminoMsg {
    return {
      type: "osmosis/incentives/add-to-gauge",
      value: MsgAddToGauge.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddToGaugeProtoMsg): MsgAddToGauge {
    return MsgAddToGauge.decode(message.value);
  },
  toProto(message: MsgAddToGauge): Uint8Array {
    return MsgAddToGauge.encode(message).finish();
  },
  toProtoMsg(message: MsgAddToGauge): MsgAddToGaugeProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.MsgAddToGauge",
      value: MsgAddToGauge.encode(message).finish()
    };
  }
};
function createBaseMsgAddToGaugeResponse(): MsgAddToGaugeResponse {
  return {};
}
export const MsgAddToGaugeResponse = {
  typeUrl: "/osmosis.incentives.MsgAddToGaugeResponse",
  encode(_: MsgAddToGaugeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  fromJSON(_: any): MsgAddToGaugeResponse {
    return {};
  },
  toJSON(_: MsgAddToGaugeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgAddToGaugeResponse>): MsgAddToGaugeResponse {
    const message = createBaseMsgAddToGaugeResponse();
    return message;
  },
  fromAmino(_: MsgAddToGaugeResponseAmino): MsgAddToGaugeResponse {
    return {};
  },
  toAmino(_: MsgAddToGaugeResponse): MsgAddToGaugeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAddToGaugeResponseAminoMsg): MsgAddToGaugeResponse {
    return MsgAddToGaugeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAddToGaugeResponse): MsgAddToGaugeResponseAminoMsg {
    return {
      type: "osmosis/incentives/add-to-gauge-response",
      value: MsgAddToGaugeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgAddToGaugeResponseProtoMsg): MsgAddToGaugeResponse {
    return MsgAddToGaugeResponse.decode(message.value);
  },
  toProto(message: MsgAddToGaugeResponse): Uint8Array {
    return MsgAddToGaugeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAddToGaugeResponse): MsgAddToGaugeResponseProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.MsgAddToGaugeResponse",
      value: MsgAddToGaugeResponse.encode(message).finish()
    };
  }
};
export interface Msg {
  CreateGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse>;
  AddToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateGauge = this.CreateGauge.bind(this);
    this.AddToGauge = this.AddToGauge.bind(this);
  }
  CreateGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse> {
    const data = MsgCreateGauge.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Msg", "CreateGauge", data);
    return promise.then(data => MsgCreateGaugeResponse.decode(new _m0.Reader(data)));
  }
  AddToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse> {
    const data = MsgAddToGauge.encode(request).finish();
    const promise = this.rpc.request("osmosis.incentives.Msg", "AddToGauge", data);
    return promise.then(data => MsgAddToGaugeResponse.decode(new _m0.Reader(data)));
  }
}