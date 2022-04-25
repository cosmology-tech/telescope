/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params, DistrInfo } from "../../../osmosis/pool-incentives/v1beta1/incentives";
import { Duration } from "../../../google/protobuf/duration";

/** GenesisState defines the pool incentives module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  lockableDurations: Duration[];
  distrInfo: DistrInfo;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    lockableDurations: [],
    distrInfo: undefined
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
      distrInfo: isSet(object.distrInfo) ? DistrInfo.fromJSON(object.distrInfo) : undefined
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
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.lockableDurations = object.lockableDurations?.map(e => Duration.fromPartial(e)) || [];
    message.distrInfo = object.distrInfo !== undefined && object.distrInfo !== null ? DistrInfo.fromPartial(object.distrInfo) : undefined;
    return message;
  }

};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> } : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = (Long as any);

  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}