/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "google.api";

/**
 * Billing related configuration of the service.
 *
 * The following example shows how to configure monitored resources and metrics
 * for billing, `consumer_destinations` is the only supported destination and
 * the monitored resources need at least one label key
 * `cloud.googleapis.com/location` to indicate the location of the billing
 * usage, using different monitored resources between monitoring and billing is
 * recommended so they can be evolved independently:
 *
 *
 *     monitored_resources:
 *     - type: library.googleapis.com/billing_branch
 *       labels:
 *       - key: cloud.googleapis.com/location
 *         description: |
 *           Predefined label to support billing location restriction.
 *       - key: city
 *         description: |
 *           Custom label to define the city where the library branch is located
 *           in.
 *       - key: name
 *         description: Custom label to define the name of the library branch.
 *     metrics:
 *     - name: library.googleapis.com/book/borrowed_count
 *       metric_kind: DELTA
 *       value_type: INT64
 *       unit: "1"
 *     billing:
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/billing_branch
 *         metrics:
 *         - library.googleapis.com/book/borrowed_count
 */
export interface Billing {
  /**
   * Billing configurations for sending metrics to the consumer project.
   * There can be multiple consumer destinations per service, each one must have
   * a different monitored resource type. A metric can be used in at most
   * one consumer destination.
   */
  consumerDestinations: Billing_BillingDestination[];
}

/**
 * Configuration of a specific billing destination (Currently only support
 * bill against consumer project).
 */
export interface Billing_BillingDestination {
  /**
   * The monitored resource type. The type must be defined in
   * [Service.monitored_resources][google.api.Service.monitored_resources] section.
   */
  monitoredResource: string;
  /**
   * Names of the metrics to report to this billing destination.
   * Each name must be defined in [Service.metrics][google.api.Service.metrics] section.
   */
  metrics: string[];
}

function createBaseBilling(): Billing {
  return { consumerDestinations: [] };
}

export const Billing = {
  encode(
    message: Billing,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.consumerDestinations) {
      Billing_BillingDestination.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Billing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBilling();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 8:
          message.consumerDestinations.push(
            Billing_BillingDestination.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Billing {
    return {
      consumerDestinations: Array.isArray(object?.consumerDestinations)
        ? object.consumerDestinations.map((e: any) =>
            Billing_BillingDestination.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: Billing): unknown {
    const obj: any = {};
    if (message.consumerDestinations) {
      obj.consumerDestinations = message.consumerDestinations.map((e) =>
        e ? Billing_BillingDestination.toJSON(e) : undefined
      );
    } else {
      obj.consumerDestinations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Billing>, I>>(object: I): Billing {
    const message = createBaseBilling();
    message.consumerDestinations =
      object.consumerDestinations?.map((e) =>
        Billing_BillingDestination.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseBilling_BillingDestination(): Billing_BillingDestination {
  return { monitoredResource: "", metrics: [] };
}

export const Billing_BillingDestination = {
  encode(
    message: Billing_BillingDestination,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.monitoredResource !== "") {
      writer.uint32(10).string(message.monitoredResource);
    }
    for (const v of message.metrics) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Billing_BillingDestination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBilling_BillingDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.monitoredResource = reader.string();
          break;
        case 2:
          message.metrics.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Billing_BillingDestination {
    return {
      monitoredResource: isSet(object.monitoredResource)
        ? String(object.monitoredResource)
        : "",
      metrics: Array.isArray(object?.metrics)
        ? object.metrics.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Billing_BillingDestination): unknown {
    const obj: any = {};
    message.monitoredResource !== undefined &&
      (obj.monitoredResource = message.monitoredResource);
    if (message.metrics) {
      obj.metrics = message.metrics.map((e) => e);
    } else {
      obj.metrics = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Billing_BillingDestination>, I>>(
    object: I
  ): Billing_BillingDestination {
    const message = createBaseBilling_BillingDestination();
    message.monitoredResource = object.monitoredResource ?? "";
    message.metrics = object.metrics?.map((e) => e) || [];
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
