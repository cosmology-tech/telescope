import { BinaryReader, BinaryWriter } from "../../binary";
import { DeepPartial } from "../../helpers";
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
  return {
    requirements: [],
    rules: [],
    producerNotificationChannel: ""
  };
}
export const Usage = {
  typeUrl: "/google.api.Usage",
  encode(message: Usage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Usage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<Usage>): Usage {
    const message = createBaseUsage();
    message.requirements = object.requirements?.map(e => e) || [];
    message.rules = object.rules?.map(e => UsageRule.fromPartial(e)) || [];
    message.producerNotificationChannel = object.producerNotificationChannel ?? "";
    return message;
  }
};
function createBaseUsageRule(): UsageRule {
  return {
    selector: "",
    allowUnregisteredCalls: false,
    skipServiceControl: false
  };
}
export const UsageRule = {
  typeUrl: "/google.api.UsageRule",
  encode(message: UsageRule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): UsageRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: DeepPartial<UsageRule>): UsageRule {
    const message = createBaseUsageRule();
    message.selector = object.selector ?? "";
    message.allowUnregisteredCalls = object.allowUnregisteredCalls ?? false;
    message.skipServiceControl = object.skipServiceControl ?? false;
    return message;
  }
};