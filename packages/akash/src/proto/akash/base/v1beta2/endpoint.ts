/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

/** Endpoint describes a publicly accessible IP service */
export interface Endpoint {
  kind: Endpoint_Kind;
  sequenceNumber: number;
}
/** This describes how the endpoint is implemented when the lease is deployed */

export enum Endpoint_Kind {
  /** SHARED_HTTP - Describes an endpoint that becomes a Kubernetes Ingress */
  SHARED_HTTP = 0,

  /** RANDOM_PORT - Describes an endpoint that becomes a Kubernetes NodePort */
  RANDOM_PORT = 1,

  /** LEASED_IP - Describes an endpoint that becomes a leased IP */
  LEASED_IP = 2,
  UNRECOGNIZED = -1,
}
export function endpoint_KindFromJSON(object: any): Endpoint_Kind {
  switch (object) {
    case 0:
    case "SHARED_HTTP":
      return Endpoint_Kind.SHARED_HTTP;

    case 1:
    case "RANDOM_PORT":
      return Endpoint_Kind.RANDOM_PORT;

    case 2:
    case "LEASED_IP":
      return Endpoint_Kind.LEASED_IP;

    case -1:
    case "UNRECOGNIZED":
    default:
      return Endpoint_Kind.UNRECOGNIZED;
  }
}
export function endpoint_KindToJSON(object: Endpoint_Kind): string {
  switch (object) {
    case Endpoint_Kind.SHARED_HTTP:
      return "SHARED_HTTP";

    case Endpoint_Kind.RANDOM_PORT:
      return "RANDOM_PORT";

    case Endpoint_Kind.LEASED_IP:
      return "LEASED_IP";

    default:
      return "UNKNOWN";
  }
}

function createBaseEndpoint(): Endpoint {
  return {
    kind: 0,
    sequenceNumber: 0
  };
}

export const Endpoint = {
  encode(message: Endpoint, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.kind !== 0) {
      writer.uint32(8).int32(message.kind);
    }

    if (message.sequenceNumber !== 0) {
      writer.uint32(16).uint32(message.sequenceNumber);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Endpoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEndpoint();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.kind = (reader.int32() as any);
          break;

        case 2:
          message.sequenceNumber = reader.uint32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Endpoint {
    return {
      kind: isSet(object.kind) ? endpoint_KindFromJSON(object.kind) : 0,
      sequenceNumber: isSet(object.sequenceNumber) ? Number(object.sequenceNumber) : 0
    };
  },

  toJSON(message: Endpoint): unknown {
    const obj: any = {};
    message.kind !== undefined && (obj.kind = endpoint_KindToJSON(message.kind));
    message.sequenceNumber !== undefined && (obj.sequenceNumber = Math.round(message.sequenceNumber));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Endpoint>, I>>(object: I): Endpoint {
    const message = createBaseEndpoint();
    message.kind = object.kind ?? 0;
    message.sequenceNumber = object.sequenceNumber ?? 0;
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