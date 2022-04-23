/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

/** MsgIBCSend */
export interface MsgIBCSend {
  /** the channel by which the packet will be sent */
  channel: string;
  /**
   * Timeout height relative to the current block height.
   * The timeout is disabled when set to 0.
   */

  timeoutHeight: Long;
  /**
   * Timeout timestamp (in nanoseconds) relative to the current block timestamp.
   * The timeout is disabled when set to 0.
   */

  timeoutTimestamp: Long;
  /**
   * Data is the payload to transfer. We must not make assumption what format or
   * content is in here.
   */

  data: Uint8Array;
}
/** MsgIBCCloseChannel port and channel need to be owned by the contract */

export interface MsgIBCCloseChannel {
  channel: string;
}

function createBaseMsgIBCSend(): MsgIBCSend {
  return {
    channel: "",
    timeoutHeight: Long.UZERO,
    timeoutTimestamp: Long.UZERO,
    data: new Uint8Array()
  };
}

export const MsgIBCSend = {
  encode(message: MsgIBCSend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }

    if (!message.timeoutHeight.isZero()) {
      writer.uint32(32).uint64(message.timeoutHeight);
    }

    if (!message.timeoutTimestamp.isZero()) {
      writer.uint32(40).uint64(message.timeoutTimestamp);
    }

    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIBCSend {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCSend();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;

        case 4:
          message.timeoutHeight = (reader.uint64() as Long);
          break;

        case 5:
          message.timeoutTimestamp = (reader.uint64() as Long);
          break;

        case 6:
          message.data = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgIBCSend {
    return {
      channel: isSet(object.channel) ? String(object.channel) : "",
      timeoutHeight: isSet(object.timeoutHeight) ? Long.fromString(object.timeoutHeight) : Long.UZERO,
      timeoutTimestamp: isSet(object.timeoutTimestamp) ? Long.fromString(object.timeoutTimestamp) : Long.UZERO,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },

  toJSON(message: MsgIBCSend): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    message.timeoutHeight !== undefined && (obj.timeoutHeight = (message.timeoutHeight || Long.UZERO).toString());
    message.timeoutTimestamp !== undefined && (obj.timeoutTimestamp = (message.timeoutTimestamp || Long.UZERO).toString());
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIBCSend>, I>>(object: I): MsgIBCSend {
    const message = createBaseMsgIBCSend();
    message.channel = object.channel ?? "";
    message.timeoutHeight = object.timeoutHeight !== undefined && object.timeoutHeight !== null ? Long.fromValue(object.timeoutHeight) : Long.UZERO;
    message.timeoutTimestamp = object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null ? Long.fromValue(object.timeoutTimestamp) : Long.UZERO;
    message.data = object.data ?? new Uint8Array();
    return message;
  }

};

function createBaseMsgIBCCloseChannel(): MsgIBCCloseChannel {
  return {
    channel: ""
  };
}

export const MsgIBCCloseChannel = {
  encode(message: MsgIBCCloseChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channel !== "") {
      writer.uint32(18).string(message.channel);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIBCCloseChannel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgIBCCloseChannel();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 2:
          message.channel = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgIBCCloseChannel {
    return {
      channel: isSet(object.channel) ? String(object.channel) : ""
    };
  },

  toJSON(message: MsgIBCCloseChannel): unknown {
    const obj: any = {};
    message.channel !== undefined && (obj.channel = message.channel);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgIBCCloseChannel>, I>>(object: I): MsgIBCCloseChannel {
    const message = createBaseMsgIBCCloseChannel();
    message.channel = object.channel ?? "";
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