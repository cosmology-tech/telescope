import { BinaryReader, BinaryWriter } from "../../binary";
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
export interface BillingProtoMsg {
  typeUrl: "/google.api.Billing";
  value: Uint8Array;
}
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
export interface BillingSDKType {
  consumer_destinations: Billing_BillingDestinationSDKType[];
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
export interface Billing_BillingDestinationProtoMsg {
  typeUrl: "/google.api.BillingDestination";
  value: Uint8Array;
}
/**
 * Configuration of a specific billing destination (Currently only support
 * bill against consumer project).
 */
export interface Billing_BillingDestinationSDKType {
  monitored_resource: string;
  metrics: string[];
}
function createBaseBilling(): Billing {
  return {
    consumerDestinations: []
  };
}
export const Billing = {
  typeUrl: "/google.api.Billing",
  encode(message: Billing, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.consumerDestinations) {
      Billing_BillingDestination.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Billing {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBilling();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 8:
          message.consumerDestinations.push(Billing_BillingDestination.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: BillingProtoMsg): Billing {
    return Billing.decode(message.value);
  },
  toProto(message: Billing): Uint8Array {
    return Billing.encode(message).finish();
  },
  toProtoMsg(message: Billing): BillingProtoMsg {
    return {
      typeUrl: "/google.api.Billing",
      value: Billing.encode(message).finish()
    };
  }
};
function createBaseBilling_BillingDestination(): Billing_BillingDestination {
  return {
    monitoredResource: "",
    metrics: []
  };
}
export const Billing_BillingDestination = {
  typeUrl: "/google.api.BillingDestination",
  encode(message: Billing_BillingDestination, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.monitoredResource !== "") {
      writer.uint32(10).string(message.monitoredResource);
    }
    for (const v of message.metrics) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Billing_BillingDestination {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromProtoMsg(message: Billing_BillingDestinationProtoMsg): Billing_BillingDestination {
    return Billing_BillingDestination.decode(message.value);
  },
  toProto(message: Billing_BillingDestination): Uint8Array {
    return Billing_BillingDestination.encode(message).finish();
  },
  toProtoMsg(message: Billing_BillingDestination): Billing_BillingDestinationProtoMsg {
    return {
      typeUrl: "/google.api.BillingDestination",
      value: Billing_BillingDestination.encode(message).finish()
    };
  }
};