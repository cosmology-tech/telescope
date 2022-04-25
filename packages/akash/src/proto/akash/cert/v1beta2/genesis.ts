/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Certificate } from "../../../akash/cert/v1beta2/cert";

/** GenesisCertificate defines certificate entry at genesis */
export interface GenesisCertificate {
  owner: string;
  certificate: Certificate;
}
/** GenesisState defines the basic genesis state used by cert module */

export interface GenesisState {
  certificates: GenesisCertificate[];
}

function createBaseGenesisCertificate(): GenesisCertificate {
  return {
    owner: "",
    certificate: undefined
  };
}

export const GenesisCertificate = {
  encode(message: GenesisCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }

    if (message.certificate !== undefined) {
      Certificate.encode(message.certificate, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisCertificate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;

        case 2:
          message.certificate = Certificate.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): GenesisCertificate {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      certificate: isSet(object.certificate) ? Certificate.fromJSON(object.certificate) : undefined
    };
  },

  toJSON(message: GenesisCertificate): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    message.certificate !== undefined && (obj.certificate = message.certificate ? Certificate.toJSON(message.certificate) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisCertificate>, I>>(object: I): GenesisCertificate {
    const message = createBaseGenesisCertificate();
    message.owner = object.owner ?? "";
    message.certificate = object.certificate !== undefined && object.certificate !== null ? Certificate.fromPartial(object.certificate) : undefined;
    return message;
  }

};

function createBaseGenesisState(): GenesisState {
  return {
    certificates: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.certificates) {
      GenesisCertificate.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.certificates.push(GenesisCertificate.decode(reader, reader.uint32()));
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
      certificates: Array.isArray(object?.certificates) ? object.certificates.map((e: any) => GenesisCertificate.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};

    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e ? GenesisCertificate.toJSON(e) : undefined);
    } else {
      obj.certificates = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.certificates = object.certificates?.map(e => GenesisCertificate.fromPartial(e)) || [];
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