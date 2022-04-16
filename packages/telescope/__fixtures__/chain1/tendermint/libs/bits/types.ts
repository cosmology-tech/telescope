/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "tendermint.libs.bits";

export interface BitArray {
  bits: Long;
  elems: Long[];
}

function createBaseBitArray(): BitArray {
  return { bits: Long.ZERO, elems: [] };
}

export const BitArray = {
  encode(
    message: BitArray,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.bits.isZero()) {
      writer.uint32(8).int64(message.bits);
    }
    writer.uint32(18).fork();
    for (const v of message.elems) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BitArray {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBitArray();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bits = reader.int64() as Long;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.elems.push(reader.uint64() as Long);
            }
          } else {
            message.elems.push(reader.uint64() as Long);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BitArray {
    return {
      bits: isSet(object.bits) ? Long.fromString(object.bits) : Long.ZERO,
      elems: Array.isArray(object?.elems)
        ? object.elems.map((e: any) => Long.fromString(e))
        : [],
    };
  },

  toJSON(message: BitArray): unknown {
    const obj: any = {};
    message.bits !== undefined &&
      (obj.bits = (message.bits || Long.ZERO).toString());
    if (message.elems) {
      obj.elems = message.elems.map((e) => (e || Long.UZERO).toString());
    } else {
      obj.elems = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BitArray>, I>>(object: I): BitArray {
    const message = createBaseBitArray();
    message.bits =
      object.bits !== undefined && object.bits !== null
        ? Long.fromValue(object.bits)
        : Long.ZERO;
    message.elems = object.elems?.map((e) => Long.fromValue(e)) || [];
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
