/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "google.api";

/** Configuration controlling usage of a service. */
export interface Usage {
  /**
   * Requirements that must be satisfied before a consumer project can use the
   * service. Each requirement is of the form <service.name>/<requirement-id>;
   * for example 'serviceusage.googleapis.com/billing-enabled'.
   *
   * For Google APIs, a Terms of Service requirement must be included here.
   * Google Cloud APIs must include "serviceusage.googleapis.com/tos/cloud".
   * Other Google APIs should include
   * "serviceusage.googleapis.com/tos/universal". Additional ToS can be
   * included based on the business needs.
   */
  requirements: string[];
  /**
   * A list of usage rules that apply to individual API methods.
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: UsageRule[];
  /**
   * The full resource name of a channel used for sending notifications to the
   * service producer.
   *
   * Google Service Management currently only supports
   * [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification
   * channel. To use Google Cloud Pub/Sub as the channel, this must be the name
   * of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format
   * documented in https://cloud.google.com/pubsub/docs/overview.
   */
  producerNotificationChannel: string;
}

/**
 * Usage configuration rules for the service.
 *
 * NOTE: Under development.
 *
 *
 * Use this rule to configure unregistered calls for the service. Unregistered
 * calls are calls that do not contain consumer project identity.
 * (Example: calls that do not contain an API key).
 * By default, API methods do not allow unregistered calls, and each method call
 * must be identified by a consumer project identity. Use this rule to
 * allow/disallow unregistered calls.
 *
 * Example of an API that wants to allow unregistered calls for entire service.
 *
 *     usage:
 *       rules:
 *       - selector: "*"
 *         allow_unregistered_calls: true
 *
 * Example of a method that wants to allow unregistered calls.
 *
 *     usage:
 *       rules:
 *       - selector: "google.example.library.v1.LibraryService.CreateBook"
 *         allow_unregistered_calls: true
 */
export interface UsageRule {
  /**
   * Selects the methods to which this rule applies. Use '*' to indicate all
   * methods in all APIs.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector: string;
  /**
   * If true, the selected method allows unregistered calls, e.g. calls
   * that don't identify any user or application.
   */
  allowUnregisteredCalls: boolean;
  /**
   * If true, the selected method should skip service control and the control
   * plane features, such as quota and billing, will not be available.
   * This flag is used by Google Cloud Endpoints to bypass checks for internal
   * methods, such as service health check methods.
   */
  skipServiceControl: boolean;
}

function createBaseUsage(): Usage {
  return { requirements: [], rules: [], producerNotificationChannel: "" };
}

export const Usage = {
  encode(message: Usage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.requirements) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.rules) {
      UsageRule.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.producerNotificationChannel !== "") {
      writer.uint32(58).string(message.producerNotificationChannel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Usage {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.requirements.push(reader.string());
          break;
        case 6:
          message.rules.push(UsageRule.decode(reader, reader.uint32()));
          break;
        case 7:
          message.producerNotificationChannel = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Usage {
    return {
      requirements: Array.isArray(object?.requirements)
        ? object.requirements.map((e: any) => String(e))
        : [],
      rules: Array.isArray(object?.rules)
        ? object.rules.map((e: any) => UsageRule.fromJSON(e))
        : [],
      producerNotificationChannel: isSet(object.producerNotificationChannel)
        ? String(object.producerNotificationChannel)
        : "",
    };
  },

  toJSON(message: Usage): unknown {
    const obj: any = {};
    if (message.requirements) {
      obj.requirements = message.requirements.map((e) => e);
    } else {
      obj.requirements = [];
    }
    if (message.rules) {
      obj.rules = message.rules.map((e) =>
        e ? UsageRule.toJSON(e) : undefined
      );
    } else {
      obj.rules = [];
    }
    message.producerNotificationChannel !== undefined &&
      (obj.producerNotificationChannel = message.producerNotificationChannel);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Usage>, I>>(object: I): Usage {
    const message = createBaseUsage();
    message.requirements = object.requirements?.map((e) => e) || [];
    message.rules = object.rules?.map((e) => UsageRule.fromPartial(e)) || [];
    message.producerNotificationChannel =
      object.producerNotificationChannel ?? "";
    return message;
  },
};

function createBaseUsageRule(): UsageRule {
  return {
    selector: "",
    allowUnregisteredCalls: false,
    skipServiceControl: false,
  };
}

export const UsageRule = {
  encode(
    message: UsageRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.allowUnregisteredCalls === true) {
      writer.uint32(16).bool(message.allowUnregisteredCalls);
    }
    if (message.skipServiceControl === true) {
      writer.uint32(24).bool(message.skipServiceControl);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UsageRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsageRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          message.allowUnregisteredCalls = reader.bool();
          break;
        case 3:
          message.skipServiceControl = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UsageRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      allowUnregisteredCalls: isSet(object.allowUnregisteredCalls)
        ? Boolean(object.allowUnregisteredCalls)
        : false,
      skipServiceControl: isSet(object.skipServiceControl)
        ? Boolean(object.skipServiceControl)
        : false,
    };
  },

  toJSON(message: UsageRule): unknown {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    message.allowUnregisteredCalls !== undefined &&
      (obj.allowUnregisteredCalls = message.allowUnregisteredCalls);
    message.skipServiceControl !== undefined &&
      (obj.skipServiceControl = message.skipServiceControl);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UsageRule>, I>>(
    object: I
  ): UsageRule {
    const message = createBaseUsageRule();
    message.selector = object.selector ?? "";
    message.allowUnregisteredCalls = object.allowUnregisteredCalls ?? false;
    message.skipServiceControl = object.skipServiceControl ?? false;
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
