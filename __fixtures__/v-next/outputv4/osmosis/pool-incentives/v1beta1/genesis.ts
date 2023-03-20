import { Params, ParamsSDKType, DistrInfo, DistrInfoSDKType, PoolToGauges, PoolToGaugesSDKType } from "./incentives";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.poolincentives.v1beta1";

/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params?: Params;
  lockableDurations: Duration[];
  distrInfo?: DistrInfo;
  poolToGauges?: PoolToGauges;
}

/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  lockable_durations: DurationSDKType[];
  distr_info?: DistrInfoSDKType;
  pool_to_gauges?: PoolToGaugesSDKType;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    lockableDurations: [],
    distrInfo: undefined,
    poolToGauges: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.lockableDurations) {
      Duration.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.distrInfo !== undefined) {
      DistrInfo.encode(message.distrInfo, writer.uint32(26).fork()).ldelim();
    }

    if (message.poolToGauges !== undefined) {
      PoolToGauges.encode(message.poolToGauges, writer.uint32(34).fork()).ldelim();
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
          message.lockableDurations.push(Duration.decode(reader, reader.uint32()));
          break;

        case 3:
          message.distrInfo = DistrInfo.decode(reader, reader.uint32());
          break;

        case 4:
          message.poolToGauges = PoolToGauges.decode(reader, reader.uint32());
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
      lockableDurations: Array.isArray(object?.lockableDurations) ? object.lockableDurations.map((e: any) => Duration.fromJSON(e)) : [],
      distrInfo: isSet(object.distrInfo) ? DistrInfo.fromJSON(object.distrInfo) : undefined,
      poolToGauges: isSet(object.poolToGauges) ? PoolToGauges.fromJSON(object.poolToGauges) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.lockableDurations) {
      obj.lockableDurations = message.lockableDurations.map(e => e ? Duration.toJSON(e) : undefined);
    } else {
      obj.lockableDurations = [];
    }

    message.distrInfo !== undefined && (obj.distrInfo = message.distrInfo ? DistrInfo.toJSON(message.distrInfo) : undefined);
    message.poolToGauges !== undefined && (obj.poolToGauges = message.poolToGauges ? PoolToGauges.toJSON(message.poolToGauges) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    message.distrInfo = object.distrInfo !== undefined && object.distrInfo !== null ? DistrInfo.fromPartial(object.distrInfo) : undefined;
    message.poolToGauges = object.poolToGauges !== undefined && object.poolToGauges !== null ? PoolToGauges.fromPartial(object.poolToGauges) : undefined;
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      lockableDurations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromSDK(e)) : [],
      distrInfo: object.distr_info ? DistrInfo.fromSDK(object.distr_info) : undefined,
      poolToGauges: object.pool_to_gauges ? PoolToGauges.fromSDK(object.pool_to_gauges) : undefined
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);

    if (message.lockableDurations) {
      obj.lockable_durations = message.lockableDurations.map(e => e ? Duration.toSDK(e) : undefined);
    } else {
      obj.lockable_durations = [];
    }

    message.distrInfo !== undefined && (obj.distr_info = message.distrInfo ? DistrInfo.toSDK(message.distrInfo) : undefined);
    message.poolToGauges !== undefined && (obj.pool_to_gauges = message.poolToGauges ? PoolToGauges.toSDK(message.poolToGauges) : undefined);
    return obj;
  },

  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined,
      lockable_durations: Array.isArray(object?.lockable_durations) ? object.lockable_durations.map((e: any) => Duration.fromSDKJSON(e)) : [],
      distr_info: isSet(object.distr_info) ? DistrInfo.fromSDKJSON(object.distr_info) : undefined,
      pool_to_gauges: isSet(object.pool_to_gauges) ? PoolToGauges.fromSDKJSON(object.pool_to_gauges) : undefined
    };
  }

};