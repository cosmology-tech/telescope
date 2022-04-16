/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../osmosis/incentives/params";
import { Duration } from "../../google/protobuf/duration";
import { Gauge } from "../../osmosis/incentives/gauge";

/** GenesisState defines the incentives module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of the module */
  params: Params;
  gauges: Gauge[];
  lockableDurations: string[];
  lastGaugeId: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    gauges: [],
    lockableDurations: [],
    lastGaugeId: "0"
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
      Duration.encode(toDuration(v!), writer.uint32(26).fork()).ldelim();
    }

    if (message.lastGaugeId !== "0") {
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
          message.lockableDurations.push(fromDuration(Duration.decode(reader, reader.uint32())));
          break;

        case 4:
          message.lastGaugeId = longToString((reader.uint64() as Long));
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
      lockableDurations: Array.isArray(object?.lockableDurations) ? object.lockableDurations.map((e: any) => String(e)) : [],
      lastGaugeId: isSet(object.lastGaugeId) ? String(object.lastGaugeId) : "0"
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
      obj.lockableDurations = message.lockableDurations.map(e => e);
    } else {
      obj.lockableDurations = [];
    }

    message.lastGaugeId !== undefined && (obj.lastGaugeId = message.lastGaugeId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.gauges = object.gauges?.map(e => Gauge.fromPartial(e)) || [];
    message.lockableDurations = object.lockableDurations?.map(e => e) || [];
    message.lastGaugeId = object.lastGaugeId ?? "0";
    return message;
  }

};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> } : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

function toDuration(duration: string): Duration {
  return {
    seconds: Long.fromNumber(Math.floor(parseInt(duration) / 1_000_000_000)),
    nanos: parseInt(duration) % 1_000_000_000
  };
}

function fromDuration(duration: Duration): string {
  return parseInt(duration.seconds) * 1_000_000_000 + parseInt(duration.nanoseconds);
}

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = (Long as any);

  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}