/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { AuditedAttributes } from "../../../akash/audit/v1beta2/audit";

/** GenesisState defines the basic genesis state used by audit module */
export interface GenesisState {
  attributes: AuditedAttributes[];
}

function createBaseGenesisState(): GenesisState {
  return {
    attributes: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attributes) {
      AuditedAttributes.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.attributes.push(AuditedAttributes.decode(reader, reader.uint32()));
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
      attributes: Array.isArray(object?.attributes) ? object.attributes.map((e: any) => AuditedAttributes.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? AuditedAttributes.toJSON(e) : undefined);
    } else {
      obj.attributes = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.attributes = object.attributes?.map(e => AuditedAttributes.fromPartial(e)) || [];
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