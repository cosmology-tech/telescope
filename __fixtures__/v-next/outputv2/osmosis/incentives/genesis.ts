import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Gauge, GaugeAmino, GaugeSDKType } from "./gauge";
import { Duration, DurationAmino, DurationSDKType } from "../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, DeepPartial, omitDefault } from "../../helpers";
export const protobufPackage = "osmosis.incentives";
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisState {
  /** params are all the parameters of the module */
  params: Params;
  /** gauges are all gauges that should exist at genesis */
  gauges: Gauge[];
  /**
   * lockable_durations are all lockup durations that gauges can be locked for
   * in order to recieve incentives
   */
  lockableDurations: Duration[];
  /**
   * last_gauge_id is what the gauge number will increment from when creating
   * the next gauge after genesis
   */
  lastGaugeId: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/osmosis.incentives.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisStateAmino {
  /** params are all the parameters of the module */
  params?: ParamsAmino;
  /** gauges are all gauges that should exist at genesis */
  gauges?: GaugeAmino[];
  /**
   * lockable_durations are all lockup durations that gauges can be locked for
   * in order to recieve incentives
   */
  lockable_durations?: DurationAmino[];
  /**
   * last_gauge_id is what the gauge number will increment from when creating
   * the next gauge after genesis
   */
  last_gauge_id?: string;
}
export interface GenesisStateAminoMsg {
  type: "osmosis/incentives/genesis-state";
  value: GenesisStateAmino;
}
/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  gauges: GaugeSDKType[];
  lockable_durations: DurationSDKType[];
  last_gauge_id: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    gauges: [],
    lockableDurations: [],
    lastGaugeId: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/osmosis.incentives.GenesisState",
  aminoType: "osmosis/incentives/genesis-state",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.gauges) {
      Gauge.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastGaugeId !== BigInt(0)) {
      writer.uint32(32).uint64(message.lastGaugeId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.gauges.push(Gauge.decode(reader, reader.uint32()));
          break;
        case 3:
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;
        case 4:
          message.lastGaugeId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (Array.isArray(object?.gauges)) obj.gauges = object.gauges.map((e: any) => Gauge.fromJSON(e));
    if (Array.isArray(object?.lockableDurations)) obj.lockableDurations = object.lockableDurations.map((e: any) => Duration.fromJSON(e));
    if (isSet(object.lastGaugeId)) obj.lastGaugeId = BigInt(object.lastGaugeId.toString());
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.gauges) {
      obj.gauges = message.gauges.map(e => e ? Gauge.toJSON(e) : undefined);
    } else {
      obj.gauges = [];
    }
    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockableDurations = [];
    }
    message.lastGaugeId !== undefined && (obj.lastGaugeId = (message.lastGaugeId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.gauges = object.gauges?.map(e => Gauge.fromPartial(e)) || [];
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    if (object.lastGaugeId !== undefined && object.lastGaugeId !== null) {
      message.lastGaugeId = BigInt(object.lastGaugeId.toString());
    }
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      gauges: Array.isArray(object?.gauges) ? object.gauges.map((e: any) => Gauge.fromSDK(e)) : [],
      lockableDurations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromSDK(e)) : [],
      lastGaugeId: object?.last_gauge_id
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    if (message.gauges) {
      obj.gauges = message.gauges.map(e => e ? Gauge.toSDK(e) : undefined);
    } else {
      obj.gauges = [];
    }
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toSDK(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }
    obj.last_gauge_id = message.lastGaugeId;
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.gauges = object.gauges?.map(e => Gauge.fromAmino(e)) || [];
    message.lockableDurations = object.lockable_durations?.map(e => Duration.fromAmino(e)) || [];
    if (object.last_gauge_id !== undefined && object.last_gauge_id !== null) {
      message.lastGaugeId = BigInt(object.last_gauge_id);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.gauges) {
      obj.gauges = message.gauges.map(e => e ? Gauge.toAmino(e) : undefined);
    } else {
      obj.gauges = [];
    }
    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toAmino(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }
    obj.last_gauge_id = omitDefault(message.lastGaugeId);
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "osmosis/incentives/genesis-state",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/osmosis.incentives.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};