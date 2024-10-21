import { Api } from "../../../protobuf/api";
import { Documentation } from "../../documentation";
import { Quota } from "../../quota";
import { Authentication } from "../../auth";
import { Usage } from "../../usage";
import { Endpoint } from "../../endpoint";
import { MonitoredResourceDescriptor } from "../../monitored_resource";
import { Monitoring } from "../../monitoring";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { DeepPartial } from "../../../../helpers";
/** Whether or not a service has been enabled for use by a consumer. */
export enum State {
  /**
   * STATE_UNSPECIFIED - The default value, which indicates that the enabled state of the service
   * is unspecified or not meaningful. Currently, all consumers other than
   * projects (such as folders and organizations) are always in this state.
   */
  STATE_UNSPECIFIED = 0,
  /**
   * DISABLED - The service cannot be used by this consumer. It has either been explicitly
   * disabled, or has never been enabled.
   */
  DISABLED = 1,
  /** ENABLED - The service has been explicitly enabled for use by this consumer. */
  ENABLED = 2,
  UNRECOGNIZED = -1,
}
export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return State.STATE_UNSPECIFIED;
    case 1:
    case "DISABLED":
      return State.DISABLED;
    case 2:
    case "ENABLED":
      return State.ENABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}
export function stateToJSON(object: State): string {
  switch (object) {
    case State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case State.DISABLED:
      return "DISABLED";
    case State.ENABLED:
      return "ENABLED";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * Selected view of quota. Can be used to request more detailed quota
 * information when retrieving quota metrics and limits.
 */
export enum QuotaView {
  /**
   * QUOTA_VIEW_UNSPECIFIED - No quota view specified. Requests that do not specify a quota view will
   * typically default to the BASIC view.
   */
  QUOTA_VIEW_UNSPECIFIED = 0,
  /** BASIC - Only buckets with overrides are shown in the response. */
  BASIC = 1,
  /**
   * FULL - Include per-location buckets even if they do not have overrides.
   * When the view is FULL, and a limit has regional or zonal quota, the limit
   * will include buckets for all regions or zones that could support
   * overrides, even if none are currently present. In some cases this will
   * cause the response to become very large; callers that do not need this
   * extra information should use the BASIC view instead.
   */
  FULL = 2,
  UNRECOGNIZED = -1,
}
export function quotaViewFromJSON(object: any): QuotaView {
  switch (object) {
    case 0:
    case "QUOTA_VIEW_UNSPECIFIED":
      return QuotaView.QUOTA_VIEW_UNSPECIFIED;
    case 1:
    case "BASIC":
      return QuotaView.BASIC;
    case 2:
    case "FULL":
      return QuotaView.FULL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QuotaView.UNRECOGNIZED;
  }
}
export function quotaViewToJSON(object: QuotaView): string {
  switch (object) {
    case QuotaView.QUOTA_VIEW_UNSPECIFIED:
      return "QUOTA_VIEW_UNSPECIFIED";
    case QuotaView.BASIC:
      return "BASIC";
    case QuotaView.FULL:
      return "FULL";
    case QuotaView.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** Enumerations of quota safety checks. */
export enum QuotaSafetyCheck {
  /** QUOTA_SAFETY_CHECK_UNSPECIFIED - Unspecified quota safety check. */
  QUOTA_SAFETY_CHECK_UNSPECIFIED = 0,
  /**
   * LIMIT_DECREASE_BELOW_USAGE - Validates that a quota mutation would not cause the consumer's effective
   * limit to be lower than the consumer's quota usage.
   */
  LIMIT_DECREASE_BELOW_USAGE = 1,
  /**
   * LIMIT_DECREASE_PERCENTAGE_TOO_HIGH - Validates that a quota mutation would not cause the consumer's effective
   * limit to decrease by more than 10 percent.
   */
  LIMIT_DECREASE_PERCENTAGE_TOO_HIGH = 2,
  UNRECOGNIZED = -1,
}
export function quotaSafetyCheckFromJSON(object: any): QuotaSafetyCheck {
  switch (object) {
    case 0:
    case "QUOTA_SAFETY_CHECK_UNSPECIFIED":
      return QuotaSafetyCheck.QUOTA_SAFETY_CHECK_UNSPECIFIED;
    case 1:
    case "LIMIT_DECREASE_BELOW_USAGE":
      return QuotaSafetyCheck.LIMIT_DECREASE_BELOW_USAGE;
    case 2:
    case "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH":
      return QuotaSafetyCheck.LIMIT_DECREASE_PERCENTAGE_TOO_HIGH;
    case -1:
    case "UNRECOGNIZED":
    default:
      return QuotaSafetyCheck.UNRECOGNIZED;
  }
}
export function quotaSafetyCheckToJSON(object: QuotaSafetyCheck): string {
  switch (object) {
    case QuotaSafetyCheck.QUOTA_SAFETY_CHECK_UNSPECIFIED:
      return "QUOTA_SAFETY_CHECK_UNSPECIFIED";
    case QuotaSafetyCheck.LIMIT_DECREASE_BELOW_USAGE:
      return "LIMIT_DECREASE_BELOW_USAGE";
    case QuotaSafetyCheck.LIMIT_DECREASE_PERCENTAGE_TOO_HIGH:
      return "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH";
    case QuotaSafetyCheck.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** A service that is available for use by the consumer. */
export interface Service {
  /**
   * The resource name of the consumer and service.
   * 
   * A valid name would be:
   * - `projects/123/services/serviceusage.googleapis.com`
   */
  name: string;
  /**
   * The resource name of the consumer.
   * 
   * A valid name would be:
   * - `projects/123`
   */
  parent: string;
  /**
   * The service configuration of the available service.
   * Some fields may be filtered out of the configuration in responses to
   * the `ListServices` method. These fields are present only in responses to
   * the `GetService` method.
   */
  config?: ServiceConfig;
  /** Whether or not the service has been enabled for use by the consumer. */
  state: State;
}
/** The configuration of the service. */
export interface ServiceConfig {
  /**
   * The DNS address at which this service is available.
   * 
   * An example DNS address would be:
   * `calendar.googleapis.com`.
   */
  name: string;
  /** The product title for this service. */
  title: string;
  /**
   * A list of API interfaces exported by this service. Contains only the names,
   * versions, and method names of the interfaces.
   */
  apis: Api[];
  /**
   * Additional API documentation. Contains only the summary and the
   * documentation URL.
   */
  documentation?: Documentation;
  /** Quota configuration. */
  quota?: Quota;
  /** Auth configuration. Contains only the OAuth rules. */
  authentication?: Authentication;
  /** Configuration controlling usage of this service. */
  usage?: Usage;
  /**
   * Configuration for network endpoints. Contains only the names and aliases
   * of the endpoints.
   */
  endpoints: Endpoint[];
  /**
   * Defines the monitored resources used by this service. This is required
   * by the [Service.monitoring][google.api.Service.monitoring] and [Service.logging][google.api.Service.logging] configurations.
   */
  monitoredResources: MonitoredResourceDescriptor[];
  /**
   * Monitoring configuration.
   * This should not include the 'producer_destinations' field.
   */
  monitoring?: Monitoring;
}
/** The operation metadata returned for the batchend services operation. */
export interface OperationMetadata {
  /**
   * The full name of the resources that this operation is directly
   * associated with.
   */
  resourceNames: string[];
}
/** Consumer quota settings for a quota metric. */
export interface ConsumerQuotaMetric {
  /**
   * The resource name of the quota settings on this metric for this consumer.
   * 
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus`
   * 
   * The resource name is intended to be opaque and should not be parsed for
   * its component strings, since its representation could change in the future.
   */
  name: string;
  /**
   * The name of the metric.
   * 
   * An example name would be:
   * `compute.googleapis.com/cpus`
   */
  metric: string;
  /**
   * The display name of the metric.
   * 
   * An example name would be:
   * `CPUs`
   */
  displayName: string;
  /** The consumer quota for each quota limit defined on the metric. */
  consumerQuotaLimits: ConsumerQuotaLimit[];
  /**
   * The quota limits targeting the descendant containers of the
   * consumer in request.
   * 
   * If the consumer in request is of type `organizations`
   * or `folders`, the field will list per-project limits in the metric; if the
   * consumer in request is of type `project`, the field will be empty.
   * 
   * The `quota_buckets` field of each descendant consumer quota limit will not
   * be populated.
   */
  descendantConsumerQuotaLimits: ConsumerQuotaLimit[];
  /** The units in which the metric value is reported. */
  unit: string;
}
/** Consumer quota settings for a quota limit. */
export interface ConsumerQuotaLimit {
  /**
   * The resource name of the quota limit.
   * 
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
   * 
   * The resource name is intended to be opaque and should not be parsed for
   * its component strings, since its representation could change in the future.
   */
  name: string;
  /**
   * The name of the parent metric of this limit.
   * 
   * An example name would be:
   * `compute.googleapis.com/cpus`
   */
  metric: string;
  /**
   * The limit unit.
   * 
   * An example unit would be
   * `1/{project}/{region}`
   * Note that `{project}` and `{region}` are not placeholders in this example;
   * the literal characters `{` and `}` occur in the string.
   */
  unit: string;
  /** Whether this limit is precise or imprecise. */
  isPrecise: boolean;
  /** Whether admin overrides are allowed on this limit */
  allowsAdminOverrides: boolean;
  /**
   * Summary of the enforced quota buckets, organized by quota dimension,
   * ordered from least specific to most specific (for example, the global
   * default bucket, with no quota dimensions, will always appear first).
   */
  quotaBuckets: QuotaBucket[];
}
export interface QuotaBucket_DimensionsEntry {
  key: string;
  value: string;
}
/** A quota bucket is a quota provisioning unit for a specific set of dimensions. */
export interface QuotaBucket {
  /**
   * The effective limit of this quota bucket. Equal to default_limit if there
   * are no overrides.
   */
  effectiveLimit: bigint;
  /**
   * The default limit of this quota bucket, as specified by the service
   * configuration.
   */
  defaultLimit: bigint;
  /** Producer override on this quota bucket. */
  producerOverride?: QuotaOverride;
  /** Consumer override on this quota bucket. */
  consumerOverride?: QuotaOverride;
  /** Admin override on this quota bucket. */
  adminOverride?: QuotaOverride;
  /**
   * The dimensions of this quota bucket.
   * 
   * If this map is empty, this is the global bucket, which is the default quota
   * value applied to all requests that do not have a more specific override.
   * 
   * If this map is nonempty, the default limit, effective limit, and quota
   * overrides apply only to requests that have the dimensions given in the map.
   * 
   * For example, if the map has key `region` and value `us-east-1`, then the
   * specified effective limit is only effective in that region, and the
   * specified overrides apply only in that region.
   */
  dimensions: {
    [key: string]: string;
  };
}
export interface QuotaOverride_DimensionsEntry {
  key: string;
  value: string;
}
/** A quota override */
export interface QuotaOverride {
  /**
   * The resource name of the override.
   * This name is generated by the server when the override is created.
   * 
   * Example names would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
   * 
   * The resource name is intended to be opaque and should not be parsed for
   * its component strings, since its representation could change in the future.
   */
  name: string;
  /**
   * The overriding quota limit value.
   * Can be any nonnegative integer, or -1 (unlimited quota).
   */
  overrideValue: bigint;
  /**
   * If this map is nonempty, then this override applies only to specific values
   * for dimensions defined in the limit unit.
   * 
   * For example, an override on a limit with the unit `1/{project}/{region}`
   * could contain an entry with the key `region` and the value `us-east-1`;
   * the override is only applied to quota consumed in that region.
   * 
   * This map has the following restrictions:
   * 
   * *   Keys that are not defined in the limit's unit are not valid keys.
   *     Any string appearing in `{brackets}` in the unit (besides `{project}`
   *     or
   *     `{user}`) is a defined key.
   * *   `project` is not a valid key; the project is already specified in
   *     the parent resource name.
   * *   `user` is not a valid key; the API does not support quota overrides
   *     that apply only to a specific user.
   * *   If `region` appears as a key, its value must be a valid Cloud region.
   * *   If `zone` appears as a key, its value must be a valid Cloud zone.
   * *   If any valid key other than `region` or `zone` appears in the map, then
   *     all valid keys other than `region` or `zone` must also appear in the
   *     map.
   */
  dimensions: {
    [key: string]: string;
  };
  /**
   * The name of the metric to which this override applies.
   * 
   * An example name would be:
   * `compute.googleapis.com/cpus`
   */
  metric: string;
  /**
   * The limit unit of the limit to which this override applies.
   * 
   * An example unit would be:
   * `1/{project}/{region}`
   * Note that `{project}` and `{region}` are not placeholders in this example;
   * the literal characters `{` and `}` occur in the string.
   */
  unit: string;
  /**
   * The resource name of the ancestor that requested the override. For example:
   * `organizations/12345` or `folders/67890`.
   * Used by admin overrides only.
   */
  adminOverrideAncestor: string;
}
/** Import data embedded in the request message */
export interface OverrideInlineSource {
  /**
   * The overrides to create.
   * Each override must have a value for 'metric' and 'unit', to specify
   * which metric and which limit the override should be applied to.
   * The 'name' field of the override does not need to be set; it is ignored.
   */
  overrides: QuotaOverride[];
}
export interface AdminQuotaPolicy_DimensionsEntry {
  key: string;
  value: string;
}
/** Quota policy created by quota administrator. */
export interface AdminQuotaPolicy {
  /**
   * The resource name of the policy.
   * This name is generated by the server when the policy is created.
   * 
   * Example names would be:
   * `organizations/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminQuotaPolicies/4a3f2c1d`
   */
  name: string;
  /**
   * The quota policy value.
   * Can be any nonnegative integer, or -1 (unlimited quota).
   */
  policyValue: bigint;
  /**
   * If this map is nonempty, then this policy applies only to specific values
   * for dimensions defined in the limit unit.
   * 
   * For example, an policy on a limit with the unit `1/{project}/{region}`
   * could contain an entry with the key `region` and the value `us-east-1`;
   * the policy is only applied to quota consumed in that region.
   * 
   * This map has the following restrictions:
   * 
   * *   If `region` appears as a key, its value must be a valid Cloud region.
   * *   If `zone` appears as a key, its value must be a valid Cloud zone.
   * *   Keys other than `region` or `zone` are not valid.
   */
  dimensions: {
    [key: string]: string;
  };
  /**
   * The name of the metric to which this policy applies.
   * 
   * An example name would be:
   * `compute.googleapis.com/cpus`
   */
  metric: string;
  /**
   * The limit unit of the limit to which this policy applies.
   * 
   * An example unit would be:
   * `1/{project}/{region}`
   * Note that `{project}` and `{region}` are not placeholders in this example;
   * the literal characters `{` and `}` occur in the string.
   */
  unit: string;
  /**
   * The cloud resource container at which the quota policy is created. The
   * format is `{container_type}/{container_number}`
   */
  container: string;
}
/**
 * Service identity for a service. This is the identity that service producer
 * should use to access consumer resources.
 */
export interface ServiceIdentity {
  /**
   * The email address of the service account that a service producer would use
   * to access consumer resources.
   */
  email: string;
  /**
   * The unique and stable id of the service account.
   * https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts#ServiceAccount
   */
  uniqueId: string;
}
function createBaseService(): Service {
  return {
    name: "",
    parent: "",
    config: undefined,
    state: 0
  };
}
export const Service = {
  typeUrl: "/google.api.serviceusage.v1beta1.Service",
  encode(message: Service, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.parent !== "") {
      writer.uint32(42).string(message.parent);
    }
    if (message.config !== undefined) {
      ServiceConfig.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(32).int32(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Service {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 5:
          message.parent = reader.string();
          break;
        case 2:
          message.config = ServiceConfig.decode(reader, reader.uint32());
          break;
        case 4:
          message.state = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Service>): Service {
    const message = createBaseService();
    message.name = object.name ?? "";
    message.parent = object.parent ?? "";
    message.config = object.config !== undefined && object.config !== null ? ServiceConfig.fromPartial(object.config) : undefined;
    message.state = object.state ?? 0;
    return message;
  }
};
function createBaseServiceConfig(): ServiceConfig {
  return {
    name: "",
    title: "",
    apis: [],
    documentation: undefined,
    quota: undefined,
    authentication: undefined,
    usage: undefined,
    endpoints: [],
    monitoredResources: [],
    monitoring: undefined
  };
}
export const ServiceConfig = {
  typeUrl: "/google.api.serviceusage.v1beta1.ServiceConfig",
  encode(message: ServiceConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    for (const v of message.apis) {
      Api.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.documentation !== undefined) {
      Documentation.encode(message.documentation, writer.uint32(50).fork()).ldelim();
    }
    if (message.quota !== undefined) {
      Quota.encode(message.quota, writer.uint32(82).fork()).ldelim();
    }
    if (message.authentication !== undefined) {
      Authentication.encode(message.authentication, writer.uint32(90).fork()).ldelim();
    }
    if (message.usage !== undefined) {
      Usage.encode(message.usage, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.endpoints) {
      Endpoint.encode(v!, writer.uint32(146).fork()).ldelim();
    }
    for (const v of message.monitoredResources) {
      MonitoredResourceDescriptor.encode(v!, writer.uint32(202).fork()).ldelim();
    }
    if (message.monitoring !== undefined) {
      Monitoring.encode(message.monitoring, writer.uint32(226).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.apis.push(Api.decode(reader, reader.uint32()));
          break;
        case 6:
          message.documentation = Documentation.decode(reader, reader.uint32());
          break;
        case 10:
          message.quota = Quota.decode(reader, reader.uint32());
          break;
        case 11:
          message.authentication = Authentication.decode(reader, reader.uint32());
          break;
        case 15:
          message.usage = Usage.decode(reader, reader.uint32());
          break;
        case 18:
          message.endpoints.push(Endpoint.decode(reader, reader.uint32()));
          break;
        case 25:
          message.monitoredResources.push(MonitoredResourceDescriptor.decode(reader, reader.uint32()));
          break;
        case 28:
          message.monitoring = Monitoring.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ServiceConfig>): ServiceConfig {
    const message = createBaseServiceConfig();
    message.name = object.name ?? "";
    message.title = object.title ?? "";
    message.apis = object.apis?.map(e => Api.fromPartial(e)) || [];
    message.documentation = object.documentation !== undefined && object.documentation !== null ? Documentation.fromPartial(object.documentation) : undefined;
    message.quota = object.quota !== undefined && object.quota !== null ? Quota.fromPartial(object.quota) : undefined;
    message.authentication = object.authentication !== undefined && object.authentication !== null ? Authentication.fromPartial(object.authentication) : undefined;
    message.usage = object.usage !== undefined && object.usage !== null ? Usage.fromPartial(object.usage) : undefined;
    message.endpoints = object.endpoints?.map(e => Endpoint.fromPartial(e)) || [];
    message.monitoredResources = object.monitoredResources?.map(e => MonitoredResourceDescriptor.fromPartial(e)) || [];
    message.monitoring = object.monitoring !== undefined && object.monitoring !== null ? Monitoring.fromPartial(object.monitoring) : undefined;
    return message;
  }
};
function createBaseOperationMetadata(): OperationMetadata {
  return {
    resourceNames: []
  };
}
export const OperationMetadata = {
  typeUrl: "/google.api.serviceusage.v1beta1.OperationMetadata",
  encode(message: OperationMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.resourceNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OperationMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperationMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.resourceNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OperationMetadata>): OperationMetadata {
    const message = createBaseOperationMetadata();
    message.resourceNames = object.resourceNames?.map(e => e) || [];
    return message;
  }
};
function createBaseConsumerQuotaMetric(): ConsumerQuotaMetric {
  return {
    name: "",
    metric: "",
    displayName: "",
    consumerQuotaLimits: [],
    descendantConsumerQuotaLimits: [],
    unit: ""
  };
}
export const ConsumerQuotaMetric = {
  typeUrl: "/google.api.serviceusage.v1beta1.ConsumerQuotaMetric",
  encode(message: ConsumerQuotaMetric, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.metric !== "") {
      writer.uint32(34).string(message.metric);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    for (const v of message.consumerQuotaLimits) {
      ConsumerQuotaLimit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.descendantConsumerQuotaLimits) {
      ConsumerQuotaLimit.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.unit !== "") {
      writer.uint32(42).string(message.unit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerQuotaMetric {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerQuotaMetric();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 4:
          message.metric = reader.string();
          break;
        case 2:
          message.displayName = reader.string();
          break;
        case 3:
          message.consumerQuotaLimits.push(ConsumerQuotaLimit.decode(reader, reader.uint32()));
          break;
        case 6:
          message.descendantConsumerQuotaLimits.push(ConsumerQuotaLimit.decode(reader, reader.uint32()));
          break;
        case 5:
          message.unit = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConsumerQuotaMetric>): ConsumerQuotaMetric {
    const message = createBaseConsumerQuotaMetric();
    message.name = object.name ?? "";
    message.metric = object.metric ?? "";
    message.displayName = object.displayName ?? "";
    message.consumerQuotaLimits = object.consumerQuotaLimits?.map(e => ConsumerQuotaLimit.fromPartial(e)) || [];
    message.descendantConsumerQuotaLimits = object.descendantConsumerQuotaLimits?.map(e => ConsumerQuotaLimit.fromPartial(e)) || [];
    message.unit = object.unit ?? "";
    return message;
  }
};
function createBaseConsumerQuotaLimit(): ConsumerQuotaLimit {
  return {
    name: "",
    metric: "",
    unit: "",
    isPrecise: false,
    allowsAdminOverrides: false,
    quotaBuckets: []
  };
}
export const ConsumerQuotaLimit = {
  typeUrl: "/google.api.serviceusage.v1beta1.ConsumerQuotaLimit",
  encode(message: ConsumerQuotaLimit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.metric !== "") {
      writer.uint32(66).string(message.metric);
    }
    if (message.unit !== "") {
      writer.uint32(18).string(message.unit);
    }
    if (message.isPrecise === true) {
      writer.uint32(24).bool(message.isPrecise);
    }
    if (message.allowsAdminOverrides === true) {
      writer.uint32(56).bool(message.allowsAdminOverrides);
    }
    for (const v of message.quotaBuckets) {
      QuotaBucket.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsumerQuotaLimit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumerQuotaLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 8:
          message.metric = reader.string();
          break;
        case 2:
          message.unit = reader.string();
          break;
        case 3:
          message.isPrecise = reader.bool();
          break;
        case 7:
          message.allowsAdminOverrides = reader.bool();
          break;
        case 9:
          message.quotaBuckets.push(QuotaBucket.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ConsumerQuotaLimit>): ConsumerQuotaLimit {
    const message = createBaseConsumerQuotaLimit();
    message.name = object.name ?? "";
    message.metric = object.metric ?? "";
    message.unit = object.unit ?? "";
    message.isPrecise = object.isPrecise ?? false;
    message.allowsAdminOverrides = object.allowsAdminOverrides ?? false;
    message.quotaBuckets = object.quotaBuckets?.map(e => QuotaBucket.fromPartial(e)) || [];
    return message;
  }
};
function createBaseQuotaBucket_DimensionsEntry(): QuotaBucket_DimensionsEntry {
  return {
    key: "",
    value: ""
  };
}
export const QuotaBucket_DimensionsEntry = {
  encode(message: QuotaBucket_DimensionsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaBucket_DimensionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaBucket_DimensionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuotaBucket_DimensionsEntry>): QuotaBucket_DimensionsEntry {
    const message = createBaseQuotaBucket_DimensionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseQuotaBucket(): QuotaBucket {
  return {
    effectiveLimit: BigInt(0),
    defaultLimit: BigInt(0),
    producerOverride: undefined,
    consumerOverride: undefined,
    adminOverride: undefined,
    dimensions: {}
  };
}
export const QuotaBucket = {
  typeUrl: "/google.api.serviceusage.v1beta1.QuotaBucket",
  encode(message: QuotaBucket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.effectiveLimit !== BigInt(0)) {
      writer.uint32(8).int64(message.effectiveLimit);
    }
    if (message.defaultLimit !== BigInt(0)) {
      writer.uint32(16).int64(message.defaultLimit);
    }
    if (message.producerOverride !== undefined) {
      QuotaOverride.encode(message.producerOverride, writer.uint32(26).fork()).ldelim();
    }
    if (message.consumerOverride !== undefined) {
      QuotaOverride.encode(message.consumerOverride, writer.uint32(34).fork()).ldelim();
    }
    if (message.adminOverride !== undefined) {
      QuotaOverride.encode(message.adminOverride, writer.uint32(42).fork()).ldelim();
    }
    Object.entries(message.dimensions).forEach(([key, value]) => {
      QuotaBucket_DimensionsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(50).fork()).ldelim();
    });
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaBucket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaBucket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectiveLimit = reader.int64();
          break;
        case 2:
          message.defaultLimit = reader.int64();
          break;
        case 3:
          message.producerOverride = QuotaOverride.decode(reader, reader.uint32());
          break;
        case 4:
          message.consumerOverride = QuotaOverride.decode(reader, reader.uint32());
          break;
        case 5:
          message.adminOverride = QuotaOverride.decode(reader, reader.uint32());
          break;
        case 6:
          const entry6 = QuotaBucket_DimensionsEntry.decode(reader, reader.uint32());
          if (entry6.value !== undefined) {
            message.dimensions[entry6.key] = entry6.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuotaBucket>): QuotaBucket {
    const message = createBaseQuotaBucket();
    message.effectiveLimit = object.effectiveLimit !== undefined && object.effectiveLimit !== null ? BigInt(object.effectiveLimit.toString()) : BigInt(0);
    message.defaultLimit = object.defaultLimit !== undefined && object.defaultLimit !== null ? BigInt(object.defaultLimit.toString()) : BigInt(0);
    message.producerOverride = object.producerOverride !== undefined && object.producerOverride !== null ? QuotaOverride.fromPartial(object.producerOverride) : undefined;
    message.consumerOverride = object.consumerOverride !== undefined && object.consumerOverride !== null ? QuotaOverride.fromPartial(object.consumerOverride) : undefined;
    message.adminOverride = object.adminOverride !== undefined && object.adminOverride !== null ? QuotaOverride.fromPartial(object.adminOverride) : undefined;
    message.dimensions = Object.entries(object.dimensions ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    return message;
  }
};
function createBaseQuotaOverride_DimensionsEntry(): QuotaOverride_DimensionsEntry {
  return {
    key: "",
    value: ""
  };
}
export const QuotaOverride_DimensionsEntry = {
  encode(message: QuotaOverride_DimensionsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaOverride_DimensionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaOverride_DimensionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuotaOverride_DimensionsEntry>): QuotaOverride_DimensionsEntry {
    const message = createBaseQuotaOverride_DimensionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseQuotaOverride(): QuotaOverride {
  return {
    name: "",
    overrideValue: BigInt(0),
    dimensions: {},
    metric: "",
    unit: "",
    adminOverrideAncestor: ""
  };
}
export const QuotaOverride = {
  typeUrl: "/google.api.serviceusage.v1beta1.QuotaOverride",
  encode(message: QuotaOverride, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.overrideValue !== BigInt(0)) {
      writer.uint32(16).int64(message.overrideValue);
    }
    Object.entries(message.dimensions).forEach(([key, value]) => {
      QuotaOverride_DimensionsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.metric !== "") {
      writer.uint32(34).string(message.metric);
    }
    if (message.unit !== "") {
      writer.uint32(42).string(message.unit);
    }
    if (message.adminOverrideAncestor !== "") {
      writer.uint32(50).string(message.adminOverrideAncestor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuotaOverride {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaOverride();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.overrideValue = reader.int64();
          break;
        case 3:
          const entry3 = QuotaOverride_DimensionsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.dimensions[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.metric = reader.string();
          break;
        case 5:
          message.unit = reader.string();
          break;
        case 6:
          message.adminOverrideAncestor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuotaOverride>): QuotaOverride {
    const message = createBaseQuotaOverride();
    message.name = object.name ?? "";
    message.overrideValue = object.overrideValue !== undefined && object.overrideValue !== null ? BigInt(object.overrideValue.toString()) : BigInt(0);
    message.dimensions = Object.entries(object.dimensions ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.metric = object.metric ?? "";
    message.unit = object.unit ?? "";
    message.adminOverrideAncestor = object.adminOverrideAncestor ?? "";
    return message;
  }
};
function createBaseOverrideInlineSource(): OverrideInlineSource {
  return {
    overrides: []
  };
}
export const OverrideInlineSource = {
  typeUrl: "/google.api.serviceusage.v1beta1.OverrideInlineSource",
  encode(message: OverrideInlineSource, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.overrides) {
      QuotaOverride.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OverrideInlineSource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOverrideInlineSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overrides.push(QuotaOverride.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<OverrideInlineSource>): OverrideInlineSource {
    const message = createBaseOverrideInlineSource();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromPartial(e)) || [];
    return message;
  }
};
function createBaseAdminQuotaPolicy_DimensionsEntry(): AdminQuotaPolicy_DimensionsEntry {
  return {
    key: "",
    value: ""
  };
}
export const AdminQuotaPolicy_DimensionsEntry = {
  encode(message: AdminQuotaPolicy_DimensionsEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AdminQuotaPolicy_DimensionsEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminQuotaPolicy_DimensionsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AdminQuotaPolicy_DimensionsEntry>): AdminQuotaPolicy_DimensionsEntry {
    const message = createBaseAdminQuotaPolicy_DimensionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }
};
function createBaseAdminQuotaPolicy(): AdminQuotaPolicy {
  return {
    name: "",
    policyValue: BigInt(0),
    dimensions: {},
    metric: "",
    unit: "",
    container: ""
  };
}
export const AdminQuotaPolicy = {
  typeUrl: "/google.api.serviceusage.v1beta1.AdminQuotaPolicy",
  encode(message: AdminQuotaPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.policyValue !== BigInt(0)) {
      writer.uint32(16).int64(message.policyValue);
    }
    Object.entries(message.dimensions).forEach(([key, value]) => {
      AdminQuotaPolicy_DimensionsEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(26).fork()).ldelim();
    });
    if (message.metric !== "") {
      writer.uint32(34).string(message.metric);
    }
    if (message.unit !== "") {
      writer.uint32(42).string(message.unit);
    }
    if (message.container !== "") {
      writer.uint32(50).string(message.container);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AdminQuotaPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminQuotaPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.policyValue = reader.int64();
          break;
        case 3:
          const entry3 = AdminQuotaPolicy_DimensionsEntry.decode(reader, reader.uint32());
          if (entry3.value !== undefined) {
            message.dimensions[entry3.key] = entry3.value;
          }
          break;
        case 4:
          message.metric = reader.string();
          break;
        case 5:
          message.unit = reader.string();
          break;
        case 6:
          message.container = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AdminQuotaPolicy>): AdminQuotaPolicy {
    const message = createBaseAdminQuotaPolicy();
    message.name = object.name ?? "";
    message.policyValue = object.policyValue !== undefined && object.policyValue !== null ? BigInt(object.policyValue.toString()) : BigInt(0);
    message.dimensions = Object.entries(object.dimensions ?? {}).reduce<{
      [key: string]: string;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = String(value);
      }
      return acc;
    }, {});
    message.metric = object.metric ?? "";
    message.unit = object.unit ?? "";
    message.container = object.container ?? "";
    return message;
  }
};
function createBaseServiceIdentity(): ServiceIdentity {
  return {
    email: "",
    uniqueId: ""
  };
}
export const ServiceIdentity = {
  typeUrl: "/google.api.serviceusage.v1beta1.ServiceIdentity",
  encode(message: ServiceIdentity, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.uniqueId !== "") {
      writer.uint32(18).string(message.uniqueId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceIdentity {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceIdentity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.uniqueId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ServiceIdentity>): ServiceIdentity {
    const message = createBaseServiceIdentity();
    message.email = object.email ?? "";
    message.uniqueId = object.uniqueId ?? "";
    return message;
  }
};