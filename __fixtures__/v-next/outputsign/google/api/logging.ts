import { BinaryReader, BinaryWriter } from "../../binary";
export const protobufPackage = "google.api";
/**
 * Logging configuration of the service.
 * 
 * The following example shows how to configure logs to be sent to the
 * producer and consumer projects. In the example, the `activity_history`
 * log is sent to both the producer and consumer projects, whereas the
 * `purchase_history` log is only sent to the producer project.
 * 
 *     monitored_resources:
 *     - type: library.googleapis.com/branch
 *       labels:
 *       - key: /city
 *         description: The city where the library branch is located in.
 *       - key: /name
 *         description: The name of the branch.
 *     logs:
 *     - name: activity_history
 *       labels:
 *       - key: /customer_id
 *     - name: purchase_history
 *     logging:
 *       producer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 *         - purchase_history
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 */
export interface Logging {
  /**
   * Logging configurations for sending logs to the producer project.
   * There can be multiple producer destinations, each one must have a
   * different monitored resource type. A log can be used in at most
   * one producer destination.
   */
  producerDestinations: Logging_LoggingDestination[];
  /**
   * Logging configurations for sending logs to the consumer project.
   * There can be multiple consumer destinations, each one must have a
   * different monitored resource type. A log can be used in at most
   * one consumer destination.
   */
  consumerDestinations: Logging_LoggingDestination[];
}
export interface LoggingProtoMsg {
  typeUrl: "/google.api.Logging";
  value: Uint8Array;
}
/**
 * Logging configuration of the service.
 * 
 * The following example shows how to configure logs to be sent to the
 * producer and consumer projects. In the example, the `activity_history`
 * log is sent to both the producer and consumer projects, whereas the
 * `purchase_history` log is only sent to the producer project.
 * 
 *     monitored_resources:
 *     - type: library.googleapis.com/branch
 *       labels:
 *       - key: /city
 *         description: The city where the library branch is located in.
 *       - key: /name
 *         description: The name of the branch.
 *     logs:
 *     - name: activity_history
 *       labels:
 *       - key: /customer_id
 *     - name: purchase_history
 *     logging:
 *       producer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 *         - purchase_history
 *       consumer_destinations:
 *       - monitored_resource: library.googleapis.com/branch
 *         logs:
 *         - activity_history
 */
export interface LoggingSDKType {
  producer_destinations: Logging_LoggingDestinationSDKType[];
  consumer_destinations: Logging_LoggingDestinationSDKType[];
}
/**
 * Configuration of a specific logging destination (the producer project
 * or the consumer project).
 */
export interface Logging_LoggingDestination {
  /**
   * The monitored resource type. The type must be defined in the
   * [Service.monitored_resources][google.api.Service.monitored_resources] section.
   */
  monitoredResource: string;
  /**
   * Names of the logs to be sent to this destination. Each name must
   * be defined in the [Service.logs][google.api.Service.logs] section. If the log name is
   * not a domain scoped name, it will be automatically prefixed with
   * the service name followed by "/".
   */
  logs: string[];
}
export interface Logging_LoggingDestinationProtoMsg {
  typeUrl: "/google.api.LoggingDestination";
  value: Uint8Array;
}
/**
 * Configuration of a specific logging destination (the producer project
 * or the consumer project).
 */
export interface Logging_LoggingDestinationSDKType {
  monitored_resource: string;
  logs: string[];
}
function createBaseLogging(): Logging {
  return {
    producerDestinations: [],
    consumerDestinations: []
  };
}
export const Logging = {
  typeUrl: "/google.api.Logging",
  encode(message: Logging, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.producerDestinations) {
      Logging_LoggingDestination.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.consumerDestinations) {
      Logging_LoggingDestination.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Logging {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogging();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.producerDestinations.push(Logging_LoggingDestination.decode(reader, reader.uint32()));
          break;
        case 2:
          message.consumerDestinations.push(Logging_LoggingDestination.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: LoggingProtoMsg): Logging {
    return Logging.decode(message.value);
  },
  toProto(message: Logging): Uint8Array {
    return Logging.encode(message).finish();
  },
  toProtoMsg(message: Logging): LoggingProtoMsg {
    return {
      typeUrl: "/google.api.Logging",
      value: Logging.encode(message).finish()
    };
  }
};
function createBaseLogging_LoggingDestination(): Logging_LoggingDestination {
  return {
    monitoredResource: "",
    logs: []
  };
}
export const Logging_LoggingDestination = {
  typeUrl: "/google.api.LoggingDestination",
  encode(message: Logging_LoggingDestination, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.monitoredResource !== "") {
      writer.uint32(26).string(message.monitoredResource);
    }
    for (const v of message.logs) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Logging_LoggingDestination {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogging_LoggingDestination();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.monitoredResource = reader.string();
          break;
        case 1:
          message.logs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: Logging_LoggingDestinationProtoMsg): Logging_LoggingDestination {
    return Logging_LoggingDestination.decode(message.value);
  },
  toProto(message: Logging_LoggingDestination): Uint8Array {
    return Logging_LoggingDestination.encode(message).finish();
  },
  toProtoMsg(message: Logging_LoggingDestination): Logging_LoggingDestinationProtoMsg {
    return {
      typeUrl: "/google.api.LoggingDestination",
      value: Logging_LoggingDestination.encode(message).finish()
    };
  }
};