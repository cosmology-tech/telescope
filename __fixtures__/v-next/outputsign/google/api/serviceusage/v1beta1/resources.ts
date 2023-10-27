import { Api, ApiSDKType } from "../../../protobuf/api";
import { Documentation, DocumentationSDKType } from "../../documentation";
import { Quota, QuotaSDKType } from "../../quota";
import { Authentication, AuthenticationSDKType } from "../../auth";
import { Usage, UsageSDKType } from "../../usage";
import { Endpoint, EndpointSDKType } from "../../endpoint";
import { MonitoredResourceDescriptor, MonitoredResourceDescriptorSDKType } from "../../monitored_resource";
import { Monitoring, MonitoringSDKType } from "../../monitoring";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export const protobufPackage = "google.api.serviceusage.v1beta1";
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
export const StateSDKType = State;
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
export const QuotaViewSDKType = QuotaView;
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
export const QuotaSafetyCheckSDKType = QuotaSafetyCheck;
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
export interface ServiceProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.Service";
  value: Uint8Array;
}
/** A service that is available for use by the consumer. */
export interface ServiceSDKType {
  name: string;
  parent: string;
  config?: ServiceConfigSDKType;
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
export interface ServiceConfigProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ServiceConfig";
  value: Uint8Array;
}
/** The configuration of the service. */
export interface ServiceConfigSDKType {
  name: string;
  title: string;
  apis: ApiSDKType[];
  documentation?: DocumentationSDKType;
  quota?: QuotaSDKType;
  authentication?: AuthenticationSDKType;
  usage?: UsageSDKType;
  endpoints: EndpointSDKType[];
  monitored_resources: MonitoredResourceDescriptorSDKType[];
  monitoring?: MonitoringSDKType;
}
/** The operation metadata returned for the batchend services operation. */
export interface OperationMetadata {
  /**
   * The full name of the resources that this operation is directly
   * associated with.
   */
  resourceNames: string[];
}
export interface OperationMetadataProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.OperationMetadata";
  value: Uint8Array;
}
/** The operation metadata returned for the batchend services operation. */
export interface OperationMetadataSDKType {
  resource_names: string[];
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
export interface ConsumerQuotaMetricProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ConsumerQuotaMetric";
  value: Uint8Array;
}
/** Consumer quota settings for a quota metric. */
export interface ConsumerQuotaMetricSDKType {
  name: string;
  metric: string;
  display_name: string;
  consumer_quota_limits: ConsumerQuotaLimitSDKType[];
  descendant_consumer_quota_limits: ConsumerQuotaLimitSDKType[];
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
export interface ConsumerQuotaLimitProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ConsumerQuotaLimit";
  value: Uint8Array;
}
/** Consumer quota settings for a quota limit. */
export interface ConsumerQuotaLimitSDKType {
  name: string;
  metric: string;
  unit: string;
  is_precise: boolean;
  allows_admin_overrides: boolean;
  quota_buckets: QuotaBucketSDKType[];
}
export interface QuotaBucket_DimensionsEntry {
  key: string;
  value: string;
}
export interface QuotaBucket_DimensionsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface QuotaBucket_DimensionsEntrySDKType {
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
export interface QuotaBucketProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.QuotaBucket";
  value: Uint8Array;
}
/** A quota bucket is a quota provisioning unit for a specific set of dimensions. */
export interface QuotaBucketSDKType {
  effective_limit: bigint;
  default_limit: bigint;
  producer_override?: QuotaOverrideSDKType;
  consumer_override?: QuotaOverrideSDKType;
  admin_override?: QuotaOverrideSDKType;
  dimensions: {
    [key: string]: string;
  };
}
export interface QuotaOverride_DimensionsEntry {
  key: string;
  value: string;
}
export interface QuotaOverride_DimensionsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface QuotaOverride_DimensionsEntrySDKType {
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
export interface QuotaOverrideProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.QuotaOverride";
  value: Uint8Array;
}
/** A quota override */
export interface QuotaOverrideSDKType {
  name: string;
  override_value: bigint;
  dimensions: {
    [key: string]: string;
  };
  metric: string;
  unit: string;
  admin_override_ancestor: string;
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
export interface OverrideInlineSourceProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.OverrideInlineSource";
  value: Uint8Array;
}
/** Import data embedded in the request message */
export interface OverrideInlineSourceSDKType {
  overrides: QuotaOverrideSDKType[];
}
export interface AdminQuotaPolicy_DimensionsEntry {
  key: string;
  value: string;
}
export interface AdminQuotaPolicy_DimensionsEntryProtoMsg {
  typeUrl: string;
  value: Uint8Array;
}
export interface AdminQuotaPolicy_DimensionsEntrySDKType {
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
export interface AdminQuotaPolicyProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.AdminQuotaPolicy";
  value: Uint8Array;
}
/** Quota policy created by quota administrator. */
export interface AdminQuotaPolicySDKType {
  name: string;
  policy_value: bigint;
  dimensions: {
    [key: string]: string;
  };
  metric: string;
  unit: string;
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
export interface ServiceIdentityProtoMsg {
  typeUrl: "/google.api.serviceusage.v1beta1.ServiceIdentity";
  value: Uint8Array;
}
/**
 * Service identity for a service. This is the identity that service producer
 * should use to access consumer resources.
 */
export interface ServiceIdentitySDKType {
  email: string;
  unique_id: string;
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
  fromProtoMsg(message: ServiceProtoMsg): Service {
    return Service.decode(message.value);
  },
  toProto(message: Service): Uint8Array {
    return Service.encode(message).finish();
  },
  toProtoMsg(message: Service): ServiceProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.Service",
      value: Service.encode(message).finish()
    };
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
  fromProtoMsg(message: ServiceConfigProtoMsg): ServiceConfig {
    return ServiceConfig.decode(message.value);
  },
  toProto(message: ServiceConfig): Uint8Array {
    return ServiceConfig.encode(message).finish();
  },
  toProtoMsg(message: ServiceConfig): ServiceConfigProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ServiceConfig",
      value: ServiceConfig.encode(message).finish()
    };
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
  fromProtoMsg(message: OperationMetadataProtoMsg): OperationMetadata {
    return OperationMetadata.decode(message.value);
  },
  toProto(message: OperationMetadata): Uint8Array {
    return OperationMetadata.encode(message).finish();
  },
  toProtoMsg(message: OperationMetadata): OperationMetadataProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.OperationMetadata",
      value: OperationMetadata.encode(message).finish()
    };
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
  fromProtoMsg(message: ConsumerQuotaMetricProtoMsg): ConsumerQuotaMetric {
    return ConsumerQuotaMetric.decode(message.value);
  },
  toProto(message: ConsumerQuotaMetric): Uint8Array {
    return ConsumerQuotaMetric.encode(message).finish();
  },
  toProtoMsg(message: ConsumerQuotaMetric): ConsumerQuotaMetricProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ConsumerQuotaMetric",
      value: ConsumerQuotaMetric.encode(message).finish()
    };
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
  fromProtoMsg(message: ConsumerQuotaLimitProtoMsg): ConsumerQuotaLimit {
    return ConsumerQuotaLimit.decode(message.value);
  },
  toProto(message: ConsumerQuotaLimit): Uint8Array {
    return ConsumerQuotaLimit.encode(message).finish();
  },
  toProtoMsg(message: ConsumerQuotaLimit): ConsumerQuotaLimitProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ConsumerQuotaLimit",
      value: ConsumerQuotaLimit.encode(message).finish()
    };
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
  fromProtoMsg(message: QuotaBucket_DimensionsEntryProtoMsg): QuotaBucket_DimensionsEntry {
    return QuotaBucket_DimensionsEntry.decode(message.value);
  },
  toProto(message: QuotaBucket_DimensionsEntry): Uint8Array {
    return QuotaBucket_DimensionsEntry.encode(message).finish();
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
  fromProtoMsg(message: QuotaBucketProtoMsg): QuotaBucket {
    return QuotaBucket.decode(message.value);
  },
  toProto(message: QuotaBucket): Uint8Array {
    return QuotaBucket.encode(message).finish();
  },
  toProtoMsg(message: QuotaBucket): QuotaBucketProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.QuotaBucket",
      value: QuotaBucket.encode(message).finish()
    };
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
  fromProtoMsg(message: QuotaOverride_DimensionsEntryProtoMsg): QuotaOverride_DimensionsEntry {
    return QuotaOverride_DimensionsEntry.decode(message.value);
  },
  toProto(message: QuotaOverride_DimensionsEntry): Uint8Array {
    return QuotaOverride_DimensionsEntry.encode(message).finish();
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
  fromProtoMsg(message: QuotaOverrideProtoMsg): QuotaOverride {
    return QuotaOverride.decode(message.value);
  },
  toProto(message: QuotaOverride): Uint8Array {
    return QuotaOverride.encode(message).finish();
  },
  toProtoMsg(message: QuotaOverride): QuotaOverrideProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.QuotaOverride",
      value: QuotaOverride.encode(message).finish()
    };
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
  fromProtoMsg(message: OverrideInlineSourceProtoMsg): OverrideInlineSource {
    return OverrideInlineSource.decode(message.value);
  },
  toProto(message: OverrideInlineSource): Uint8Array {
    return OverrideInlineSource.encode(message).finish();
  },
  toProtoMsg(message: OverrideInlineSource): OverrideInlineSourceProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.OverrideInlineSource",
      value: OverrideInlineSource.encode(message).finish()
    };
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
  fromProtoMsg(message: AdminQuotaPolicy_DimensionsEntryProtoMsg): AdminQuotaPolicy_DimensionsEntry {
    return AdminQuotaPolicy_DimensionsEntry.decode(message.value);
  },
  toProto(message: AdminQuotaPolicy_DimensionsEntry): Uint8Array {
    return AdminQuotaPolicy_DimensionsEntry.encode(message).finish();
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
  fromProtoMsg(message: AdminQuotaPolicyProtoMsg): AdminQuotaPolicy {
    return AdminQuotaPolicy.decode(message.value);
  },
  toProto(message: AdminQuotaPolicy): Uint8Array {
    return AdminQuotaPolicy.encode(message).finish();
  },
  toProtoMsg(message: AdminQuotaPolicy): AdminQuotaPolicyProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.AdminQuotaPolicy",
      value: AdminQuotaPolicy.encode(message).finish()
    };
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
  fromProtoMsg(message: ServiceIdentityProtoMsg): ServiceIdentity {
    return ServiceIdentity.decode(message.value);
  },
  toProto(message: ServiceIdentity): Uint8Array {
    return ServiceIdentity.encode(message).finish();
  },
  toProtoMsg(message: ServiceIdentity): ServiceIdentityProtoMsg {
    return {
      typeUrl: "/google.api.serviceusage.v1beta1.ServiceIdentity",
      value: ServiceIdentity.encode(message).finish()
    };
  }
};