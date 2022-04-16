/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "google.api";

/**
 * Monitoring configuration of the service.
 *
 * The example below shows how to configure monitored resources and metrics
 * for monitoring. In the example, a monitored resource and two metrics are
 * defined. The `library.googleapis.com/book/returned_count` metric is sent
 * to both producer and consumer projects, whereas the
 * `library.googleapis.com/book/num_overdue` metric is only sent to the
 * consumer project.
 *
 *     monitored_resources:
 *     - type: library.googleapis.com/Branch
 *       display_name: "Library Branch"
 *       description: "A branch of a library."
 *       launch_stage: GA
 *       labels:
 *       - key: resource_container
 *         description: "The Cloud container (ie. project id) for the Branch."
 *       - key: location
 *         description: "The location of the library branch."
 *       - key: branch_id
 *         description: "The id of the branch."
 *     metrics:
 *     - name: library.googleapis.com/book/returned_count
 *       display_name: "Books Returned"
 *       description: "The count of books that have been returned."
 *       launch_stage: GA
 *       metric_kind: DELTA
 *       value_type: INT64
 *       unit: "1"
 *       labels:
 *       - key: customer_id
 *         description: "The id of the customer."
 *     - name: library.googleapis.com/book/num_overdue
 *       display_name: "Books Overdue"
 *       description: "The current number of overdue books."
 *       launch_stage: GA
 *       metric_kind: GAUGE
 *       value_type: INT64
 *       unit: "1"
 *       labels:
 *       - key: customer_id
 *         description: "The id of the customer."
 *     monitoring:
 *       producer_destinations:
 *       - monitored_resource: library.googleapis.com/Branch
 *         metrics:
 *         - library.googleapis.com/book/returned_count
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/Branch
 *         metrics:
 *         - library.googleapis.com/book/returned_count
 *         - library.googleapis.com/book/num_overdue
 */
export interface Monitoring {
  /**
   * Monitoring configurations for sending metrics to the producer project.
   * There can be multiple producer destinations. A monitored resource type may
   * appear in multiple monitoring destinations if different aggregations are
   * needed for different sets of metrics associated with that monitored
   * resource type. A monitored resource and metric pair may only be used once
   * in the Monitoring configuration.
   */
  producerDestinations: Monitoring_MonitoringDestination[];
  /**
   * Monitoring configurations for sending metrics to the consumer project.
   * There can be multiple consumer destinations. A monitored resource type may
   * appear in multiple monitoring destinations if different aggregations are
   * needed for different sets of metrics associated with that monitored
   * resource type. A monitored resource and metric pair may only be used once
   * in the Monitoring configuration.
   */
  consumerDestinations: Monitoring_MonitoringDestination[];
}

/**
 * Configuration of a specific monitoring destination (the producer project
 * or the consumer project).
 */
export interface Monitoring_MonitoringDestination {
  /**
   * The monitored resource type. The type must be defined in
   * [Service.monitored_resources][google.api.Service.monitored_resources] section.
   */
  monitoredResource: string;
  /**
   * Types of the metrics to report to this monitoring destination.
   * Each type must be defined in [Service.metrics][google.api.Service.metrics] section.
   */
  metrics: string[];
}

function createBaseMonitoring(): Monitoring {
  return { producerDestinations: [], consumerDestinations: [] };
}

export const Monitoring = {
  encode(
    message: Monitoring,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.producerDestinations) {
      Monitoring_MonitoringDestination.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.consumerDestinations) {
      Monitoring_MonitoringDestination.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Monitoring {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoring();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producerDestinations.push(
            Monitoring_MonitoringDestination.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.consumerDestinations.push(
            Monitoring_MonitoringDestination.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Monitoring {
    return {
      producerDestinations: Array.isArray(object?.producerDestinations)
        ? object.producerDestinations.map((e: any) =>
            Monitoring_MonitoringDestination.fromJSON(e)
          )
        : [],
      consumerDestinations: Array.isArray(object?.consumerDestinations)
        ? object.consumerDestinations.map((e: any) =>
            Monitoring_MonitoringDestination.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: Monitoring): unknown {
    const obj: any = {};
    if (message.producerDestinations) {
      obj.producerDestinations = message.producerDestinations.map((e) =>
        e ? Monitoring_MonitoringDestination.toJSON(e) : undefined
      );
    } else {
      obj.producerDestinations = [];
    }
    if (message.consumerDestinations) {
      obj.consumerDestinations = message.consumerDestinations.map((e) =>
        e ? Monitoring_MonitoringDestination.toJSON(e) : undefined
      );
    } else {
      obj.consumerDestinations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Monitoring>, I>>(
    object: I
  ): Monitoring {
    const message = createBaseMonitoring();
    message.producerDestinations =
      object.producerDestinations?.map((e) =>
        Monitoring_MonitoringDestination.fromPartial(e)
      ) || [];
    message.consumerDestinations =
      object.consumerDestinations?.map((e) =>
        Monitoring_MonitoringDestination.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseMonitoring_MonitoringDestination(): Monitoring_MonitoringDestination {
  return { monitoredResource: "", metrics: [] };
}

export const Monitoring_MonitoringDestination = {
  encode(
    message: Monitoring_MonitoringDestination,
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
  ): Monitoring_MonitoringDestination {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMonitoring_MonitoringDestination();
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

  fromJSON(object: any): Monitoring_MonitoringDestination {
    return {
      monitoredResource: isSet(object.monitoredResource)
        ? String(object.monitoredResource)
        : "",
      metrics: Array.isArray(object?.metrics)
        ? object.metrics.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Monitoring_MonitoringDestination): unknown {
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

  fromPartial<
    I extends Exact<DeepPartial<Monitoring_MonitoringDestination>, I>
  >(object: I): Monitoring_MonitoringDestination {
    const message = createBaseMonitoring_MonitoringDestination();
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
