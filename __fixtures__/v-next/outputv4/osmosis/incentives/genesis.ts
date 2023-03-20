import { Params, ParamsSDKType } from "./params";
import { Gauge, GaugeSDKType } from "./gauge";
import { Duration, DurationSDKType } from "../../google/protobuf/duration";
import { Long, isSet, DeepPartial } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "osmosis.incentives";

/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisState {
  /** params are all the parameters of the module */
  params?: Params;

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
  lastGaugeId: Long;
}

/**
 * GenesisState defines the incentives module's various parameters when first
 * initialized
 */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  gauges: GaugeSDKType[];
  lockable_durations: DurationSDKType[];
  last_gauge_id: Long;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    gauges: [],
    lockableDurations: [],
    lastGaugeId: Long.UZERO
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.gauges) {
      Gauge.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (!message.lastGaugeId.isZero()) {
      writer.uint32(32).uint64(message.lastGaugeId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.lastGaugeId = (reader.uint64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      gauges: Array.isArray(object?.gauges) ? object.gauges.map((e: any) => Gauge.fromJSON(e)) : [],
      lockableDurations: Array.isArray(object?.lockableDurations) ? object.lockableDurations.map((e: any) => Duration.fromJSON(e)) : [],
      lastGaugeId: isSet(object.lastGaugeId) ? Long.fromValue(object.lastGaugeId) : Long.UZERO
    };
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

    message.lastGaugeId !== undefined && (obj.lastGaugeId = (message.lastGaugeId || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.gauges = object.gauges?.map(e => Gauge.fromPartial(e)) || [];
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    message.lastGaugeId = object.lastGaugeId !== undefined && object.lastGaugeId !== null ? Long.fromValue(object.lastGaugeId) : Long.UZERO;
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

  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined,
      gauges: Array.isArray(object?.gauges) ? object.gauges.map((e: any) => Gauge.fromSDKJSON(e)) : [],
      lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromSDKJSON(e)) : [],
      last_gauge_id: isSet(object.last_gauge_id) ? Long.fromValue(object.last_gauge_id) : Long.UZERO
    };
  }

};