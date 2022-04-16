/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "osmosis.txfees.v1beta1";

/**
 * FeeToken is a struct that specifies a coin denom, and pool ID pair.
 * This marks the token as eligible for use as a tx fee asset in Osmosis.
 * Its price in osmo is derived through looking at the provided pool ID.
 * The pool ID must have osmo as one of its assets.
 */
export interface FeeToken {
  denom: string;
  poolID: Long;
}

function createBaseFeeToken(): FeeToken {
  return { denom: "", poolID: Long.UZERO };
}

export const FeeToken = {
  encode(
    message: FeeToken,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (!message.poolID.isZero()) {
      writer.uint32(16).uint64(message.poolID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.poolID = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeToken {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      poolID: isSet(object.poolID)
        ? Long.fromString(object.poolID)
        : Long.UZERO,
    };
  },

  toJSON(message: FeeToken): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.poolID !== undefined &&
      (obj.poolID = (message.poolID || Long.UZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeeToken>, I>>(object: I): FeeToken {
    const message = createBaseFeeToken();
    message.denom = object.denom ?? "";
    message.poolID =
      object.poolID !== undefined && object.poolID !== null
        ? Long.fromValue(object.poolID)
        : Long.UZERO;
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
