/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "google.api";

/**
 * `Visibility` defines restrictions for the visibility of service
 * elements.  Restrictions are specified using visibility labels
 * (e.g., PREVIEW) that are elsewhere linked to users and projects.
 *
 * Users and projects can have access to more than one visibility label. The
 * effective visibility for multiple labels is the union of each label's
 * elements, plus any unrestricted elements.
 *
 * If an element and its parents have no restrictions, visibility is
 * unconditionally granted.
 *
 * Example:
 *
 *     visibility:
 *       rules:
 *       - selector: google.calendar.Calendar.EnhancedSearch
 *         restriction: PREVIEW
 *       - selector: google.calendar.Calendar.Delegate
 *         restriction: INTERNAL
 *
 * Here, all methods are publicly visible except for the restricted methods
 * EnhancedSearch and Delegate.
 */
export interface Visibility {
  /**
   * A list of visibility rules that apply to individual API elements.
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: VisibilityRule[];
}

/**
 * A visibility rule provides visibility configuration for an individual API
 * element.
 */
export interface VisibilityRule {
  /**
   * Selects methods, messages, fields, enums, etc. to which this rule applies.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector: string;
  /**
   * A comma-separated list of visibility labels that apply to the `selector`.
   * Any of the listed labels can be used to grant the visibility.
   *
   * If a rule has multiple labels, removing one of the labels but not all of
   * them can break clients.
   *
   * Example:
   *
   *     visibility:
   *       rules:
   *       - selector: google.calendar.Calendar.EnhancedSearch
   *         restriction: INTERNAL, PREVIEW
   *
   * Removing INTERNAL from this restriction will break clients that rely on
   * this method and only had access to it through INTERNAL.
   */
  restriction: string;
}

function createBaseVisibility(): Visibility {
  return { rules: [] };
}

export const Visibility = {
  encode(
    message: Visibility,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.rules) {
      VisibilityRule.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Visibility {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVisibility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rules.push(VisibilityRule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Visibility {
    return {
      rules: Array.isArray(object?.rules)
        ? object.rules.map((e: any) => VisibilityRule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Visibility): unknown {
    const obj: any = {};
    if (message.rules) {
      obj.rules = message.rules.map((e) =>
        e ? VisibilityRule.toJSON(e) : undefined
      );
    } else {
      obj.rules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Visibility>, I>>(
    object: I
  ): Visibility {
    const message = createBaseVisibility();
    message.rules =
      object.rules?.map((e) => VisibilityRule.fromPartial(e)) || [];
    return message;
  },
};

function createBaseVisibilityRule(): VisibilityRule {
  return { selector: "", restriction: "" };
}

export const VisibilityRule = {
  encode(
    message: VisibilityRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.restriction !== "") {
      writer.uint32(18).string(message.restriction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VisibilityRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVisibilityRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.restriction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VisibilityRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      restriction: isSet(object.restriction) ? String(object.restriction) : "",
    };
  },

  toJSON(message: VisibilityRule): unknown {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    message.restriction !== undefined &&
      (obj.restriction = message.restriction);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VisibilityRule>, I>>(
    object: I
  ): VisibilityRule {
    const message = createBaseVisibilityRule();
    message.selector = object.selector ?? "";
    message.restriction = object.restriction ?? "";
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
