/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { LabelDescriptor } from "../../google/api/label";

export const protobufPackage = "google.api";

/**
 * A description of a log type. Example in YAML format:
 *
 *     - name: library.googleapis.com/activity_history
 *       description: The history of borrowing and returning library items.
 *       display_name: Activity
 *       labels:
 *       - key: /customer_id
 *         description: Identifier of a library customer
 */
export interface LogDescriptor {
  /**
   * The name of the log. It must be less than 512 characters long and can
   * include the following characters: upper- and lower-case alphanumeric
   * characters [A-Za-z0-9], and punctuation characters including
   * slash, underscore, hyphen, period [/_-.].
   */
  name: string;
  /**
   * The set of labels that are available to describe a specific log entry.
   * Runtime requests that contain labels not specified here are
   * considered invalid.
   */
  labels: LabelDescriptor[];
  /**
   * A human-readable description of this log. This information appears in
   * the documentation and can contain details.
   */
  description: string;
  /**
   * The human-readable name for this log. This information appears on
   * the user interface and should be concise.
   */
  displayName: string;
}

function createBaseLogDescriptor(): LogDescriptor {
  return { name: "", labels: [], description: "", displayName: "" };
}

export const LogDescriptor = {
  encode(
    message: LogDescriptor,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.labels) {
      LabelDescriptor.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.displayName !== "") {
      writer.uint32(34).string(message.displayName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LogDescriptor {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogDescriptor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.labels.push(LabelDescriptor.decode(reader, reader.uint32()));
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.displayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LogDescriptor {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      labels: Array.isArray(object?.labels)
        ? object.labels.map((e: any) => LabelDescriptor.fromJSON(e))
        : [],
      description: isSet(object.description) ? String(object.description) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
    };
  },

  toJSON(message: LogDescriptor): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    if (message.labels) {
      obj.labels = message.labels.map((e) =>
        e ? LabelDescriptor.toJSON(e) : undefined
      );
    } else {
      obj.labels = [];
    }
    message.description !== undefined &&
      (obj.description = message.description);
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LogDescriptor>, I>>(
    object: I
  ): LogDescriptor {
    const message = createBaseLogDescriptor();
    message.name = object.name ?? "";
    message.labels =
      object.labels?.map((e) => LabelDescriptor.fromPartial(e)) || [];
    message.description = object.description ?? "";
    message.displayName = object.displayName ?? "";
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
