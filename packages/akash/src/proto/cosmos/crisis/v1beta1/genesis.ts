/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

/** GenesisState defines the crisis module's genesis state. */
export interface GenesisState {
  /**
   * constant_fee is the fee used to verify the invariant in the crisis
   * module.
   */
  constantFee: Coin;
}

function createBaseGenesisState(): GenesisState {
  return {
    constantFee: undefined
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.constantFee !== undefined) {
      Coin.encode(message.constantFee, writer.uint32(26).fork()).ldelim();
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
        case 3:
          message.constantFee = Coin.decode(reader, reader.uint32());
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
      constantFee: isSet(object.constantFee) ? Coin.fromJSON(object.constantFee) : undefined
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.constantFee !== undefined && (obj.constantFee = message.constantFee ? Coin.toJSON(message.constantFee) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.constantFee = object.constantFee !== undefined && object.constantFee !== null ? Coin.fromPartial(object.constantFee) : undefined;
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