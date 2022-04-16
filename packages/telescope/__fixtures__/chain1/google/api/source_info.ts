/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";

export const protobufPackage = "google.api";

/** Source information used to create a Service Config */
export interface SourceInfo {
  /** All files used during config generation. */
  sourceFiles: Any[];
}

function createBaseSourceInfo(): SourceInfo {
  return { sourceFiles: [] };
}

export const SourceInfo = {
  encode(
    message: SourceInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.sourceFiles) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SourceInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSourceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceFiles.push(Any.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SourceInfo {
    return {
      sourceFiles: Array.isArray(object?.sourceFiles)
        ? object.sourceFiles.map((e: any) => Any.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SourceInfo): unknown {
    const obj: any = {};
    if (message.sourceFiles) {
      obj.sourceFiles = message.sourceFiles.map((e) =>
        e ? Any.toJSON(e) : undefined
      );
    } else {
      obj.sourceFiles = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SourceInfo>, I>>(
    object: I
  ): SourceInfo {
    const message = createBaseSourceInfo();
    message.sourceFiles =
      object.sourceFiles?.map((e) => Any.fromPartial(e)) || [];
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
