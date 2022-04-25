/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export interface RaAuthenticate {
  sender: Uint8Array;
  certificate: Uint8Array;
}
export interface MasterCertificate {
  bytes: Uint8Array;
}
export interface Key {
  key: Uint8Array;
}

function createBaseRaAuthenticate(): RaAuthenticate {
  return {
    sender: new Uint8Array(),
    certificate: new Uint8Array()
  };
}

export const RaAuthenticate = {
  encode(message: RaAuthenticate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender.length !== 0) {
      writer.uint32(10).bytes(message.sender);
    }

    if (message.certificate.length !== 0) {
      writer.uint32(18).bytes(message.certificate);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RaAuthenticate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaAuthenticate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.sender = reader.bytes();
          break;

        case 2:
          message.certificate = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): RaAuthenticate {
    return {
      sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
      certificate: isSet(object.certificate) ? bytesFromBase64(object.certificate) : new Uint8Array()
    };
  },

  toJSON(message: RaAuthenticate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
    message.certificate !== undefined && (obj.certificate = base64FromBytes(message.certificate !== undefined ? message.certificate : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RaAuthenticate>, I>>(object: I): RaAuthenticate {
    const message = createBaseRaAuthenticate();
    message.sender = object.sender ?? new Uint8Array();
    message.certificate = object.certificate ?? new Uint8Array();
    return message;
  }

};

function createBaseMasterCertificate(): MasterCertificate {
  return {
    bytes: new Uint8Array()
  };
}

export const MasterCertificate = {
  encode(message: MasterCertificate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bytes.length !== 0) {
      writer.uint32(10).bytes(message.bytes);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MasterCertificate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMasterCertificate();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.bytes = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MasterCertificate {
    return {
      bytes: isSet(object.bytes) ? bytesFromBase64(object.bytes) : new Uint8Array()
    };
  },

  toJSON(message: MasterCertificate): unknown {
    const obj: any = {};
    message.bytes !== undefined && (obj.bytes = base64FromBytes(message.bytes !== undefined ? message.bytes : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MasterCertificate>, I>>(object: I): MasterCertificate {
    const message = createBaseMasterCertificate();
    message.bytes = object.bytes ?? new Uint8Array();
    return message;
  }

};

function createBaseKey(): Key {
  return {
    key: new Uint8Array()
  };
}

export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Key {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Key {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array()
    };
  },

  toJSON(message: Key): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Key>, I>>(object: I): Key {
    const message = createBaseKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  }

};
declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;

var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string = globalThis.atob || (b64 => globalThis.Buffer.from(b64, "base64").toString("binary"));

function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);

  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }

  return arr;
}

const btoa: (bin: string) => string = globalThis.btoa || (bin => globalThis.Buffer.from(bin, "binary").toString("base64"));

function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach(byte => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

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