/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  QuotaView,
  QuotaOverride,
  ServiceIdentity,
  Service,
  ConsumerQuotaMetric,
  QuotaSafetyCheck,
  OverrideInlineSource,
  AdminQuotaPolicy,
  ConsumerQuotaLimit,
  quotaViewFromJSON,
  quotaViewToJSON,
  quotaSafetyCheckFromJSON,
  quotaSafetyCheckToJSON,
} from "../../../../google/api/serviceusage/v1beta1/resources";
import { Operation } from "../../../../google/longrunning/operations";
import { FieldMask } from "../../../../google/protobuf/field_mask";

export const protobufPackage = "google.api.serviceusage.v1beta1";

/** Request message for the `EnableService` method. */
export interface EnableServiceRequest {
  /**
   * Name of the consumer and service to enable the service on.
   *
   * The `EnableService` and `DisableService` methods currently only support
   * projects.
   *
   * Enabling a service requires that the service is public or is shared with
   * the user enabling the service.
   *
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com`
   * where `123` is the project number (not project ID).
   */
  name: string;
}

/** Request message for the `DisableService` method. */
export interface DisableServiceRequest {
  /**
   * Name of the consumer and service to disable the service on.
   *
   * The enable and disable methods currently only support projects.
   *
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com`
   * where `123` is the project number (not project ID).
   */
  name: string;
}

/** Request message for the `GetService` method. */
export interface GetServiceRequest {
  /**
   * Name of the consumer and service to get the `ConsumerState` for.
   *
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com`
   * where `123` is the project number (not project ID).
   */
  name: string;
}

/** Request message for the `ListServices` method. */
export interface ListServicesRequest {
  /**
   * Parent to search for services on.
   *
   * An example name would be:
   * `projects/123`
   * where `123` is the project number (not project ID).
   */
  parent: string;
  /**
   * Requested size of the next page of data.
   * Requested page size cannot exceed 200.
   *  If not set, the default page size is 50.
   */
  pageSize: number;
  /**
   * Token identifying which result to start with, which is returned by a
   * previous list call.
   */
  pageToken: string;
  /**
   * Only list services that conform to the given filter.
   * The allowed filter strings are `state:ENABLED` and `state:DISABLED`.
   */
  filter: string;
}

/** Response message for the `ListServices` method. */
export interface ListServicesResponse {
  /** The available services for the requested project. */
  services: Service[];
  /**
   * Token that can be passed to `ListServices` to resume a paginated
   * query.
   */
  nextPageToken: string;
}

/** Request message for the `BatchEnableServices` method. */
export interface BatchEnableServicesRequest {
  /**
   * Parent to enable services on.
   *
   * An example name would be:
   * `projects/123`
   * where `123` is the project number (not project ID).
   *
   * The `BatchEnableServices` method currently only supports projects.
   */
  parent: string;
  /**
   * The identifiers of the services to enable on the project.
   *
   * A valid identifier would be:
   * serviceusage.googleapis.com
   *
   * Enabling services requires that each service is public or is shared with
   * the user enabling the service.
   *
   * Two or more services must be specified. To enable a single service,
   * use the `EnableService` method instead.
   *
   * A single request can enable a maximum of 20 services at a time. If more
   * than 20 services are specified, the request will fail, and no state changes
   * will occur.
   */
  serviceIds: string[];
}

/** Request message for ListConsumerQuotaMetrics */
export interface ListConsumerQuotaMetricsRequest {
  /**
   * Parent of the quotas resource.
   *
   * Some example names would be:
   * `projects/123/services/serviceconsumermanagement.googleapis.com`
   * `folders/345/services/serviceconsumermanagement.googleapis.com`
   * `organizations/456/services/serviceconsumermanagement.googleapis.com`
   */
  parent: string;
  /** Requested size of the next page of data. */
  pageSize: number;
  /**
   * Token identifying which result to start with; returned by a previous list
   * call.
   */
  pageToken: string;
  /** Specifies the level of detail for quota information in the response. */
  view: QuotaView;
}

/** Response message for ListConsumerQuotaMetrics */
export interface ListConsumerQuotaMetricsResponse {
  /** Quota settings for the consumer, organized by quota metric. */
  metrics: ConsumerQuotaMetric[];
  /**
   * Token identifying which result to start with; returned by a previous list
   * call.
   */
  nextPageToken: string;
}

/** Request message for GetConsumerQuotaMetric */
export interface GetConsumerQuotaMetricRequest {
  /**
   * The resource name of the quota limit.
   *
   * An example name would be:
   * `projects/123/services/serviceusage.googleapis.com/quotas/metrics/serviceusage.googleapis.com%2Fmutate_requests`
   */
  name: string;
  /** Specifies the level of detail for quota information in the response. */
  view: QuotaView;
}

/** Request message for GetConsumerQuotaLimit */
export interface GetConsumerQuotaLimitRequest {
  /**
   * The resource name of the quota limit.
   *
   * Use the quota limit resource name returned by previous
   * ListConsumerQuotaMetrics and GetConsumerQuotaMetric API calls.
   */
  name: string;
  /** Specifies the level of detail for quota information in the response. */
  view: QuotaView;
}

/** Request message for CreateAdminOverride. */
export interface CreateAdminOverrideRequest {
  /**
   * The resource name of the parent quota limit, returned by a
   * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
   *
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
   */
  parent: string;
  /** The admin override to create. */
  override: QuotaOverride;
  /**
   * Whether to force the creation of the quota override.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}

/** Request message for UpdateAdminOverride. */
export interface UpdateAdminOverrideRequest {
  /**
   * The resource name of the override to update.
   *
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
   */
  name: string;
  /**
   * The new override.
   * Only the override_value is updated; all other fields are ignored.
   */
  override: QuotaOverride;
  /**
   * Whether to force the update of the quota override.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * Update only the specified fields of the override.
   * If unset, all fields will be updated.
   */
  updateMask: string[] | undefined;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}

/** Request message for DeleteAdminOverride. */
export interface DeleteAdminOverrideRequest {
  /**
   * The resource name of the override to delete.
   *
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/adminOverrides/4a3f2c1d`
   */
  name: string;
  /**
   * Whether to force the deletion of the quota override.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}

/** Request message for ListAdminOverrides */
export interface ListAdminOverridesRequest {
  /**
   * The resource name of the parent quota limit, returned by a
   * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
   *
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
   */
  parent: string;
  /** Requested size of the next page of data. */
  pageSize: number;
  /**
   * Token identifying which result to start with; returned by a previous list
   * call.
   */
  pageToken: string;
}

/** Response message for ListAdminOverrides. */
export interface ListAdminOverridesResponse {
  /** Admin overrides on this limit. */
  overrides: QuotaOverride[];
  /**
   * Token identifying which result to start with; returned by a previous list
   * call.
   */
  nextPageToken: string;
}

/** Response message for BatchCreateAdminOverrides */
export interface BatchCreateAdminOverridesResponse {
  /** The overrides that were created. */
  overrides: QuotaOverride[];
}

/** Request message for ImportAdminOverrides */
export interface ImportAdminOverridesRequest {
  /**
   * The resource name of the consumer.
   *
   * An example name would be:
   * `projects/123/services/compute.googleapis.com`
   */
  parent: string;
  /** The import data is specified in the request message itself */
  inlineSource: OverrideInlineSource | undefined;
  /**
   * Whether to force the creation of the quota overrides.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}

/** Response message for ImportAdminOverrides */
export interface ImportAdminOverridesResponse {
  /** The overrides that were created from the imported data. */
  overrides: QuotaOverride[];
}

/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportAdminOverrides.
 */
export interface ImportAdminOverridesMetadata {}

/** Request message for CreateConsumerOverride. */
export interface CreateConsumerOverrideRequest {
  /**
   * The resource name of the parent quota limit, returned by a
   * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
   *
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
   */
  parent: string;
  /** The override to create. */
  override: QuotaOverride;
  /**
   * Whether to force the creation of the quota override.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}

/** Request message for UpdateConsumerOverride. */
export interface UpdateConsumerOverrideRequest {
  /**
   * The resource name of the override to update.
   *
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
   */
  name: string;
  /**
   * The new override.
   * Only the override_value is updated; all other fields are ignored.
   */
  override: QuotaOverride;
  /**
   * Whether to force the update of the quota override.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * Update only the specified fields of the override.
   * If unset, all fields will be updated.
   */
  updateMask: string[] | undefined;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}

/** Request message for DeleteConsumerOverride. */
export interface DeleteConsumerOverrideRequest {
  /**
   * The resource name of the override to delete.
   *
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/consumerOverrides/4a3f2c1d`
   */
  name: string;
  /**
   * Whether to force the deletion of the quota override.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}

/** Request message for ListConsumerOverrides */
export interface ListConsumerOverridesRequest {
  /**
   * The resource name of the parent quota limit, returned by a
   * ListConsumerQuotaMetrics or GetConsumerQuotaMetric call.
   *
   * An example name would be:
   * `projects/123/services/compute.googleapis.com/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
   */
  parent: string;
  /** Requested size of the next page of data. */
  pageSize: number;
  /**
   * Token identifying which result to start with; returned by a previous list
   * call.
   */
  pageToken: string;
}

/** Response message for ListConsumerOverrides. */
export interface ListConsumerOverridesResponse {
  /** Consumer overrides on this limit. */
  overrides: QuotaOverride[];
  /**
   * Token identifying which result to start with; returned by a previous list
   * call.
   */
  nextPageToken: string;
}

/** Response message for BatchCreateConsumerOverrides */
export interface BatchCreateConsumerOverridesResponse {
  /** The overrides that were created. */
  overrides: QuotaOverride[];
}

/** Request message for ImportConsumerOverrides */
export interface ImportConsumerOverridesRequest {
  /**
   * The resource name of the consumer.
   *
   * An example name would be:
   * `projects/123/services/compute.googleapis.com`
   */
  parent: string;
  /** The import data is specified in the request message itself */
  inlineSource: OverrideInlineSource | undefined;
  /**
   * Whether to force the creation of the quota overrides.
   * Setting the force parameter to 'true' ignores all quota safety checks that
   * would fail the request. QuotaSafetyCheck lists all such validations.
   */
  force: boolean;
  /**
   * The list of quota safety checks to ignore before the override mutation.
   * Unlike 'force' field that ignores all the quota safety checks, the
   * 'force_only' field ignores only the specified checks; other checks are
   * still enforced. The 'force' and 'force_only' fields cannot both be set.
   */
  forceOnly: QuotaSafetyCheck[];
}

/** Response message for ImportConsumerOverrides */
export interface ImportConsumerOverridesResponse {
  /** The overrides that were created from the imported data. */
  overrides: QuotaOverride[];
}

/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportConsumerOverrides.
 */
export interface ImportConsumerOverridesMetadata {}

/** Response message for ImportAdminQuotaPolicies */
export interface ImportAdminQuotaPoliciesResponse {
  /** The policies that were created from the imported data. */
  policies: AdminQuotaPolicy[];
}

/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by ImportAdminQuotaPolicies.
 */
export interface ImportAdminQuotaPoliciesMetadata {}

/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by CreateAdminQuotaPolicy.
 */
export interface CreateAdminQuotaPolicyMetadata {}

/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by UpdateAdminQuotaPolicy.
 */
export interface UpdateAdminQuotaPolicyMetadata {}

/**
 * Metadata message that provides information such as progress,
 * partial failures, and similar information on each GetOperation call
 * of LRO returned by DeleteAdminQuotaPolicy.
 */
export interface DeleteAdminQuotaPolicyMetadata {}

/** Request message for generating service identity. */
export interface GenerateServiceIdentityRequest {
  /**
   * Name of the consumer and service to generate an identity for.
   *
   * The `GenerateServiceIdentity` methods currently only support projects.
   *
   * An example name would be:
   * `projects/123/services/example.googleapis.com` where `123` is the
   * project number.
   */
  parent: string;
}

/** Response message for getting service identity. */
export interface GetServiceIdentityResponse {
  /**
   * Service identity that service producer can use to access consumer
   * resources. If exists is true, it contains email and unique_id. If exists is
   * false, it contains pre-constructed email and empty unique_id.
   */
  identity: ServiceIdentity;
  /** Service identity state. */
  state: GetServiceIdentityResponse_IdentityState;
}

/** Enum for service identity state. */
export enum GetServiceIdentityResponse_IdentityState {
  /**
   * IDENTITY_STATE_UNSPECIFIED - Default service identity state. This value is used if the state is
   * omitted.
   */
  IDENTITY_STATE_UNSPECIFIED = 0,
  /** ACTIVE - Service identity has been created and can be used. */
  ACTIVE = 1,
  UNRECOGNIZED = -1,
}

export function getServiceIdentityResponse_IdentityStateFromJSON(
  object: any
): GetServiceIdentityResponse_IdentityState {
  switch (object) {
    case 0:
    case "IDENTITY_STATE_UNSPECIFIED":
      return GetServiceIdentityResponse_IdentityState.IDENTITY_STATE_UNSPECIFIED;
    case 1:
    case "ACTIVE":
      return GetServiceIdentityResponse_IdentityState.ACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GetServiceIdentityResponse_IdentityState.UNRECOGNIZED;
  }
}

export function getServiceIdentityResponse_IdentityStateToJSON(
  object: GetServiceIdentityResponse_IdentityState
): string {
  switch (object) {
    case GetServiceIdentityResponse_IdentityState.IDENTITY_STATE_UNSPECIFIED:
      return "IDENTITY_STATE_UNSPECIFIED";
    case GetServiceIdentityResponse_IdentityState.ACTIVE:
      return "ACTIVE";
    default:
      return "UNKNOWN";
  }
}

/** Metadata for the `GetServiceIdentity` method. */
export interface GetServiceIdentityMetadata {}

function createBaseEnableServiceRequest(): EnableServiceRequest {
  return { name: "" };
}

export const EnableServiceRequest = {
  encode(
    message: EnableServiceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EnableServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnableServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EnableServiceRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: EnableServiceRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EnableServiceRequest>, I>>(
    object: I
  ): EnableServiceRequest {
    const message = createBaseEnableServiceRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseDisableServiceRequest(): DisableServiceRequest {
  return { name: "" };
}

export const DisableServiceRequest = {
  encode(
    message: DisableServiceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DisableServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDisableServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DisableServiceRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: DisableServiceRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DisableServiceRequest>, I>>(
    object: I
  ): DisableServiceRequest {
    const message = createBaseDisableServiceRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseGetServiceRequest(): GetServiceRequest {
  return { name: "" };
}

export const GetServiceRequest = {
  encode(
    message: GetServiceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetServiceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServiceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetServiceRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: GetServiceRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetServiceRequest>, I>>(
    object: I
  ): GetServiceRequest {
    const message = createBaseGetServiceRequest();
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListServicesRequest(): ListServicesRequest {
  return { parent: "", pageSize: 0, pageToken: "", filter: "" };
}

export const ListServicesRequest = {
  encode(
    message: ListServicesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.filter !== "") {
      writer.uint32(34).string(message.filter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListServicesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageSize = reader.int32();
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        case 4:
          message.filter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListServicesRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      filter: isSet(object.filter) ? String(object.filter) : "",
    };
  },

  toJSON(message: ListServicesRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.filter !== undefined && (obj.filter = message.filter);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListServicesRequest>, I>>(
    object: I
  ): ListServicesRequest {
    const message = createBaseListServicesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.filter = object.filter ?? "";
    return message;
  },
};

function createBaseListServicesResponse(): ListServicesResponse {
  return { services: [], nextPageToken: "" };
}

export const ListServicesResponse = {
  encode(
    message: ListServicesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListServicesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListServicesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(Service.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListServicesResponse {
    return {
      services: Array.isArray(object?.services)
        ? object.services.map((e: any) => Service.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken)
        ? String(object.nextPageToken)
        : "",
    };
  },

  toJSON(message: ListServicesResponse): unknown {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map((e) =>
        e ? Service.toJSON(e) : undefined
      );
    } else {
      obj.services = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListServicesResponse>, I>>(
    object: I
  ): ListServicesResponse {
    const message = createBaseListServicesResponse();
    message.services =
      object.services?.map((e) => Service.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseBatchEnableServicesRequest(): BatchEnableServicesRequest {
  return { parent: "", serviceIds: [] };
}

export const BatchEnableServicesRequest = {
  encode(
    message: BatchEnableServicesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    for (const v of message.serviceIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BatchEnableServicesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchEnableServicesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.serviceIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchEnableServicesRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      serviceIds: Array.isArray(object?.serviceIds)
        ? object.serviceIds.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: BatchEnableServicesRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    if (message.serviceIds) {
      obj.serviceIds = message.serviceIds.map((e) => e);
    } else {
      obj.serviceIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchEnableServicesRequest>, I>>(
    object: I
  ): BatchEnableServicesRequest {
    const message = createBaseBatchEnableServicesRequest();
    message.parent = object.parent ?? "";
    message.serviceIds = object.serviceIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseListConsumerQuotaMetricsRequest(): ListConsumerQuotaMetricsRequest {
  return { parent: "", pageSize: 0, pageToken: "", view: 0 };
}

export const ListConsumerQuotaMetricsRequest = {
  encode(
    message: ListConsumerQuotaMetricsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    if (message.view !== 0) {
      writer.uint32(32).int32(message.view);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListConsumerQuotaMetricsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConsumerQuotaMetricsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageSize = reader.int32();
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        case 4:
          message.view = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListConsumerQuotaMetricsRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
      view: isSet(object.view) ? quotaViewFromJSON(object.view) : 0,
    };
  },

  toJSON(message: ListConsumerQuotaMetricsRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    message.view !== undefined && (obj.view = quotaViewToJSON(message.view));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListConsumerQuotaMetricsRequest>, I>>(
    object: I
  ): ListConsumerQuotaMetricsRequest {
    const message = createBaseListConsumerQuotaMetricsRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    message.view = object.view ?? 0;
    return message;
  },
};

function createBaseListConsumerQuotaMetricsResponse(): ListConsumerQuotaMetricsResponse {
  return { metrics: [], nextPageToken: "" };
}

export const ListConsumerQuotaMetricsResponse = {
  encode(
    message: ListConsumerQuotaMetricsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.metrics) {
      ConsumerQuotaMetric.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListConsumerQuotaMetricsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConsumerQuotaMetricsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metrics.push(
            ConsumerQuotaMetric.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListConsumerQuotaMetricsResponse {
    return {
      metrics: Array.isArray(object?.metrics)
        ? object.metrics.map((e: any) => ConsumerQuotaMetric.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken)
        ? String(object.nextPageToken)
        : "",
    };
  },

  toJSON(message: ListConsumerQuotaMetricsResponse): unknown {
    const obj: any = {};
    if (message.metrics) {
      obj.metrics = message.metrics.map((e) =>
        e ? ConsumerQuotaMetric.toJSON(e) : undefined
      );
    } else {
      obj.metrics = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ListConsumerQuotaMetricsResponse>, I>
  >(object: I): ListConsumerQuotaMetricsResponse {
    const message = createBaseListConsumerQuotaMetricsResponse();
    message.metrics =
      object.metrics?.map((e) => ConsumerQuotaMetric.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseGetConsumerQuotaMetricRequest(): GetConsumerQuotaMetricRequest {
  return { name: "", view: 0 };
}

export const GetConsumerQuotaMetricRequest = {
  encode(
    message: GetConsumerQuotaMetricRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.view !== 0) {
      writer.uint32(16).int32(message.view);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetConsumerQuotaMetricRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConsumerQuotaMetricRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.view = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetConsumerQuotaMetricRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      view: isSet(object.view) ? quotaViewFromJSON(object.view) : 0,
    };
  },

  toJSON(message: GetConsumerQuotaMetricRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.view !== undefined && (obj.view = quotaViewToJSON(message.view));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetConsumerQuotaMetricRequest>, I>>(
    object: I
  ): GetConsumerQuotaMetricRequest {
    const message = createBaseGetConsumerQuotaMetricRequest();
    message.name = object.name ?? "";
    message.view = object.view ?? 0;
    return message;
  },
};

function createBaseGetConsumerQuotaLimitRequest(): GetConsumerQuotaLimitRequest {
  return { name: "", view: 0 };
}

export const GetConsumerQuotaLimitRequest = {
  encode(
    message: GetConsumerQuotaLimitRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.view !== 0) {
      writer.uint32(16).int32(message.view);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetConsumerQuotaLimitRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetConsumerQuotaLimitRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.view = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetConsumerQuotaLimitRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      view: isSet(object.view) ? quotaViewFromJSON(object.view) : 0,
    };
  },

  toJSON(message: GetConsumerQuotaLimitRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.view !== undefined && (obj.view = quotaViewToJSON(message.view));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetConsumerQuotaLimitRequest>, I>>(
    object: I
  ): GetConsumerQuotaLimitRequest {
    const message = createBaseGetConsumerQuotaLimitRequest();
    message.name = object.name ?? "";
    message.view = object.view ?? 0;
    return message;
  },
};

function createBaseCreateAdminOverrideRequest(): CreateAdminOverrideRequest {
  return { parent: "", override: undefined, force: false, forceOnly: [] };
}

export const CreateAdminOverrideRequest = {
  encode(
    message: CreateAdminOverrideRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.override !== undefined) {
      QuotaOverride.encode(message.override, writer.uint32(18).fork()).ldelim();
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    writer.uint32(34).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateAdminOverrideRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAdminOverrideRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.override = QuotaOverride.decode(reader, reader.uint32());
          break;
        case 3:
          message.force = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push(reader.int32() as any);
            }
          } else {
            message.forceOnly.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateAdminOverrideRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      override: isSet(object.override)
        ? QuotaOverride.fromJSON(object.override)
        : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      forceOnly: Array.isArray(object?.forceOnly)
        ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateAdminOverrideRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.override !== undefined &&
      (obj.override = message.override
        ? QuotaOverride.toJSON(message.override)
        : undefined);
    message.force !== undefined && (obj.force = message.force);
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map((e) => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateAdminOverrideRequest>, I>>(
    object: I
  ): CreateAdminOverrideRequest {
    const message = createBaseCreateAdminOverrideRequest();
    message.parent = object.parent ?? "";
    message.override =
      object.override !== undefined && object.override !== null
        ? QuotaOverride.fromPartial(object.override)
        : undefined;
    message.force = object.force ?? false;
    message.forceOnly = object.forceOnly?.map((e) => e) || [];
    return message;
  },
};

function createBaseUpdateAdminOverrideRequest(): UpdateAdminOverrideRequest {
  return {
    name: "",
    override: undefined,
    force: false,
    updateMask: undefined,
    forceOnly: [],
  };
}

export const UpdateAdminOverrideRequest = {
  encode(
    message: UpdateAdminOverrideRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.override !== undefined) {
      QuotaOverride.encode(message.override, writer.uint32(18).fork()).ldelim();
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(
        FieldMask.wrap(message.updateMask),
        writer.uint32(34).fork()
      ).ldelim();
    }
    writer.uint32(42).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateAdminOverrideRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminOverrideRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.override = QuotaOverride.decode(reader, reader.uint32());
          break;
        case 3:
          message.force = reader.bool();
          break;
        case 4:
          message.updateMask = FieldMask.unwrap(
            FieldMask.decode(reader, reader.uint32())
          );
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push(reader.int32() as any);
            }
          } else {
            message.forceOnly.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateAdminOverrideRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      override: isSet(object.override)
        ? QuotaOverride.fromJSON(object.override)
        : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      updateMask: isSet(object.updateMask)
        ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask))
        : undefined,
      forceOnly: Array.isArray(object?.forceOnly)
        ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateAdminOverrideRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.override !== undefined &&
      (obj.override = message.override
        ? QuotaOverride.toJSON(message.override)
        : undefined);
    message.force !== undefined && (obj.force = message.force);
    message.updateMask !== undefined &&
      (obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask)));
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map((e) => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAdminOverrideRequest>, I>>(
    object: I
  ): UpdateAdminOverrideRequest {
    const message = createBaseUpdateAdminOverrideRequest();
    message.name = object.name ?? "";
    message.override =
      object.override !== undefined && object.override !== null
        ? QuotaOverride.fromPartial(object.override)
        : undefined;
    message.force = object.force ?? false;
    message.updateMask = object.updateMask ?? undefined;
    message.forceOnly = object.forceOnly?.map((e) => e) || [];
    return message;
  },
};

function createBaseDeleteAdminOverrideRequest(): DeleteAdminOverrideRequest {
  return { name: "", force: false, forceOnly: [] };
}

export const DeleteAdminOverrideRequest = {
  encode(
    message: DeleteAdminOverrideRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.force === true) {
      writer.uint32(16).bool(message.force);
    }
    writer.uint32(26).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteAdminOverrideRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAdminOverrideRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.force = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push(reader.int32() as any);
            }
          } else {
            message.forceOnly.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteAdminOverrideRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      force: isSet(object.force) ? Boolean(object.force) : false,
      forceOnly: Array.isArray(object?.forceOnly)
        ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e))
        : [],
    };
  },

  toJSON(message: DeleteAdminOverrideRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.force !== undefined && (obj.force = message.force);
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map((e) => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAdminOverrideRequest>, I>>(
    object: I
  ): DeleteAdminOverrideRequest {
    const message = createBaseDeleteAdminOverrideRequest();
    message.name = object.name ?? "";
    message.force = object.force ?? false;
    message.forceOnly = object.forceOnly?.map((e) => e) || [];
    return message;
  },
};

function createBaseListAdminOverridesRequest(): ListAdminOverridesRequest {
  return { parent: "", pageSize: 0, pageToken: "" };
}

export const ListAdminOverridesRequest = {
  encode(
    message: ListAdminOverridesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListAdminOverridesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAdminOverridesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageSize = reader.int32();
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListAdminOverridesRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
    };
  },

  toJSON(message: ListAdminOverridesRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListAdminOverridesRequest>, I>>(
    object: I
  ): ListAdminOverridesRequest {
    const message = createBaseListAdminOverridesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListAdminOverridesResponse(): ListAdminOverridesResponse {
  return { overrides: [], nextPageToken: "" };
}

export const ListAdminOverridesResponse = {
  encode(
    message: ListAdminOverridesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.overrides) {
      QuotaOverride.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListAdminOverridesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListAdminOverridesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overrides.push(QuotaOverride.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListAdminOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides)
        ? object.overrides.map((e: any) => QuotaOverride.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken)
        ? String(object.nextPageToken)
        : "",
    };
  },

  toJSON(message: ListAdminOverridesResponse): unknown {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map((e) =>
        e ? QuotaOverride.toJSON(e) : undefined
      );
    } else {
      obj.overrides = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListAdminOverridesResponse>, I>>(
    object: I
  ): ListAdminOverridesResponse {
    const message = createBaseListAdminOverridesResponse();
    message.overrides =
      object.overrides?.map((e) => QuotaOverride.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseBatchCreateAdminOverridesResponse(): BatchCreateAdminOverridesResponse {
  return { overrides: [] };
}

export const BatchCreateAdminOverridesResponse = {
  encode(
    message: BatchCreateAdminOverridesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.overrides) {
      QuotaOverride.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BatchCreateAdminOverridesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchCreateAdminOverridesResponse();
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

  fromJSON(object: any): BatchCreateAdminOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides)
        ? object.overrides.map((e: any) => QuotaOverride.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BatchCreateAdminOverridesResponse): unknown {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map((e) =>
        e ? QuotaOverride.toJSON(e) : undefined
      );
    } else {
      obj.overrides = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BatchCreateAdminOverridesResponse>, I>
  >(object: I): BatchCreateAdminOverridesResponse {
    const message = createBaseBatchCreateAdminOverridesResponse();
    message.overrides =
      object.overrides?.map((e) => QuotaOverride.fromPartial(e)) || [];
    return message;
  },
};

function createBaseImportAdminOverridesRequest(): ImportAdminOverridesRequest {
  return { parent: "", inlineSource: undefined, force: false, forceOnly: [] };
}

export const ImportAdminOverridesRequest = {
  encode(
    message: ImportAdminOverridesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.inlineSource !== undefined) {
      OverrideInlineSource.encode(
        message.inlineSource,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    writer.uint32(34).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ImportAdminOverridesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportAdminOverridesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.inlineSource = OverrideInlineSource.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.force = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push(reader.int32() as any);
            }
          } else {
            message.forceOnly.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ImportAdminOverridesRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      inlineSource: isSet(object.inlineSource)
        ? OverrideInlineSource.fromJSON(object.inlineSource)
        : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      forceOnly: Array.isArray(object?.forceOnly)
        ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e))
        : [],
    };
  },

  toJSON(message: ImportAdminOverridesRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.inlineSource !== undefined &&
      (obj.inlineSource = message.inlineSource
        ? OverrideInlineSource.toJSON(message.inlineSource)
        : undefined);
    message.force !== undefined && (obj.force = message.force);
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map((e) => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ImportAdminOverridesRequest>, I>>(
    object: I
  ): ImportAdminOverridesRequest {
    const message = createBaseImportAdminOverridesRequest();
    message.parent = object.parent ?? "";
    message.inlineSource =
      object.inlineSource !== undefined && object.inlineSource !== null
        ? OverrideInlineSource.fromPartial(object.inlineSource)
        : undefined;
    message.force = object.force ?? false;
    message.forceOnly = object.forceOnly?.map((e) => e) || [];
    return message;
  },
};

function createBaseImportAdminOverridesResponse(): ImportAdminOverridesResponse {
  return { overrides: [] };
}

export const ImportAdminOverridesResponse = {
  encode(
    message: ImportAdminOverridesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.overrides) {
      QuotaOverride.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ImportAdminOverridesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportAdminOverridesResponse();
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

  fromJSON(object: any): ImportAdminOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides)
        ? object.overrides.map((e: any) => QuotaOverride.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ImportAdminOverridesResponse): unknown {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map((e) =>
        e ? QuotaOverride.toJSON(e) : undefined
      );
    } else {
      obj.overrides = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ImportAdminOverridesResponse>, I>>(
    object: I
  ): ImportAdminOverridesResponse {
    const message = createBaseImportAdminOverridesResponse();
    message.overrides =
      object.overrides?.map((e) => QuotaOverride.fromPartial(e)) || [];
    return message;
  },
};

function createBaseImportAdminOverridesMetadata(): ImportAdminOverridesMetadata {
  return {};
}

export const ImportAdminOverridesMetadata = {
  encode(
    _: ImportAdminOverridesMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ImportAdminOverridesMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportAdminOverridesMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ImportAdminOverridesMetadata {
    return {};
  },

  toJSON(_: ImportAdminOverridesMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ImportAdminOverridesMetadata>, I>>(
    _: I
  ): ImportAdminOverridesMetadata {
    const message = createBaseImportAdminOverridesMetadata();
    return message;
  },
};

function createBaseCreateConsumerOverrideRequest(): CreateConsumerOverrideRequest {
  return { parent: "", override: undefined, force: false, forceOnly: [] };
}

export const CreateConsumerOverrideRequest = {
  encode(
    message: CreateConsumerOverrideRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.override !== undefined) {
      QuotaOverride.encode(message.override, writer.uint32(18).fork()).ldelim();
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    writer.uint32(34).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateConsumerOverrideRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateConsumerOverrideRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.override = QuotaOverride.decode(reader, reader.uint32());
          break;
        case 3:
          message.force = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push(reader.int32() as any);
            }
          } else {
            message.forceOnly.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateConsumerOverrideRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      override: isSet(object.override)
        ? QuotaOverride.fromJSON(object.override)
        : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      forceOnly: Array.isArray(object?.forceOnly)
        ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e))
        : [],
    };
  },

  toJSON(message: CreateConsumerOverrideRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.override !== undefined &&
      (obj.override = message.override
        ? QuotaOverride.toJSON(message.override)
        : undefined);
    message.force !== undefined && (obj.force = message.force);
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map((e) => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateConsumerOverrideRequest>, I>>(
    object: I
  ): CreateConsumerOverrideRequest {
    const message = createBaseCreateConsumerOverrideRequest();
    message.parent = object.parent ?? "";
    message.override =
      object.override !== undefined && object.override !== null
        ? QuotaOverride.fromPartial(object.override)
        : undefined;
    message.force = object.force ?? false;
    message.forceOnly = object.forceOnly?.map((e) => e) || [];
    return message;
  },
};

function createBaseUpdateConsumerOverrideRequest(): UpdateConsumerOverrideRequest {
  return {
    name: "",
    override: undefined,
    force: false,
    updateMask: undefined,
    forceOnly: [],
  };
}

export const UpdateConsumerOverrideRequest = {
  encode(
    message: UpdateConsumerOverrideRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.override !== undefined) {
      QuotaOverride.encode(message.override, writer.uint32(18).fork()).ldelim();
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    if (message.updateMask !== undefined) {
      FieldMask.encode(
        FieldMask.wrap(message.updateMask),
        writer.uint32(34).fork()
      ).ldelim();
    }
    writer.uint32(42).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateConsumerOverrideRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateConsumerOverrideRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.override = QuotaOverride.decode(reader, reader.uint32());
          break;
        case 3:
          message.force = reader.bool();
          break;
        case 4:
          message.updateMask = FieldMask.unwrap(
            FieldMask.decode(reader, reader.uint32())
          );
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push(reader.int32() as any);
            }
          } else {
            message.forceOnly.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateConsumerOverrideRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      override: isSet(object.override)
        ? QuotaOverride.fromJSON(object.override)
        : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      updateMask: isSet(object.updateMask)
        ? FieldMask.unwrap(FieldMask.fromJSON(object.updateMask))
        : undefined,
      forceOnly: Array.isArray(object?.forceOnly)
        ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e))
        : [],
    };
  },

  toJSON(message: UpdateConsumerOverrideRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.override !== undefined &&
      (obj.override = message.override
        ? QuotaOverride.toJSON(message.override)
        : undefined);
    message.force !== undefined && (obj.force = message.force);
    message.updateMask !== undefined &&
      (obj.updateMask = FieldMask.toJSON(FieldMask.wrap(message.updateMask)));
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map((e) => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateConsumerOverrideRequest>, I>>(
    object: I
  ): UpdateConsumerOverrideRequest {
    const message = createBaseUpdateConsumerOverrideRequest();
    message.name = object.name ?? "";
    message.override =
      object.override !== undefined && object.override !== null
        ? QuotaOverride.fromPartial(object.override)
        : undefined;
    message.force = object.force ?? false;
    message.updateMask = object.updateMask ?? undefined;
    message.forceOnly = object.forceOnly?.map((e) => e) || [];
    return message;
  },
};

function createBaseDeleteConsumerOverrideRequest(): DeleteConsumerOverrideRequest {
  return { name: "", force: false, forceOnly: [] };
}

export const DeleteConsumerOverrideRequest = {
  encode(
    message: DeleteConsumerOverrideRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.force === true) {
      writer.uint32(16).bool(message.force);
    }
    writer.uint32(26).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteConsumerOverrideRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteConsumerOverrideRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.force = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push(reader.int32() as any);
            }
          } else {
            message.forceOnly.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeleteConsumerOverrideRequest {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      force: isSet(object.force) ? Boolean(object.force) : false,
      forceOnly: Array.isArray(object?.forceOnly)
        ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e))
        : [],
    };
  },

  toJSON(message: DeleteConsumerOverrideRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.force !== undefined && (obj.force = message.force);
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map((e) => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteConsumerOverrideRequest>, I>>(
    object: I
  ): DeleteConsumerOverrideRequest {
    const message = createBaseDeleteConsumerOverrideRequest();
    message.name = object.name ?? "";
    message.force = object.force ?? false;
    message.forceOnly = object.forceOnly?.map((e) => e) || [];
    return message;
  },
};

function createBaseListConsumerOverridesRequest(): ListConsumerOverridesRequest {
  return { parent: "", pageSize: 0, pageToken: "" };
}

export const ListConsumerOverridesRequest = {
  encode(
    message: ListConsumerOverridesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.pageSize !== 0) {
      writer.uint32(16).int32(message.pageSize);
    }
    if (message.pageToken !== "") {
      writer.uint32(26).string(message.pageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListConsumerOverridesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConsumerOverridesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.pageSize = reader.int32();
          break;
        case 3:
          message.pageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListConsumerOverridesRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
      pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
    };
  },

  toJSON(message: ListConsumerOverridesRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.pageSize !== undefined &&
      (obj.pageSize = Math.round(message.pageSize));
    message.pageToken !== undefined && (obj.pageToken = message.pageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListConsumerOverridesRequest>, I>>(
    object: I
  ): ListConsumerOverridesRequest {
    const message = createBaseListConsumerOverridesRequest();
    message.parent = object.parent ?? "";
    message.pageSize = object.pageSize ?? 0;
    message.pageToken = object.pageToken ?? "";
    return message;
  },
};

function createBaseListConsumerOverridesResponse(): ListConsumerOverridesResponse {
  return { overrides: [], nextPageToken: "" };
}

export const ListConsumerOverridesResponse = {
  encode(
    message: ListConsumerOverridesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.overrides) {
      QuotaOverride.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.nextPageToken !== "") {
      writer.uint32(18).string(message.nextPageToken);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ListConsumerOverridesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListConsumerOverridesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.overrides.push(QuotaOverride.decode(reader, reader.uint32()));
          break;
        case 2:
          message.nextPageToken = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ListConsumerOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides)
        ? object.overrides.map((e: any) => QuotaOverride.fromJSON(e))
        : [],
      nextPageToken: isSet(object.nextPageToken)
        ? String(object.nextPageToken)
        : "",
    };
  },

  toJSON(message: ListConsumerOverridesResponse): unknown {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map((e) =>
        e ? QuotaOverride.toJSON(e) : undefined
      );
    } else {
      obj.overrides = [];
    }
    message.nextPageToken !== undefined &&
      (obj.nextPageToken = message.nextPageToken);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ListConsumerOverridesResponse>, I>>(
    object: I
  ): ListConsumerOverridesResponse {
    const message = createBaseListConsumerOverridesResponse();
    message.overrides =
      object.overrides?.map((e) => QuotaOverride.fromPartial(e)) || [];
    message.nextPageToken = object.nextPageToken ?? "";
    return message;
  },
};

function createBaseBatchCreateConsumerOverridesResponse(): BatchCreateConsumerOverridesResponse {
  return { overrides: [] };
}

export const BatchCreateConsumerOverridesResponse = {
  encode(
    message: BatchCreateConsumerOverridesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.overrides) {
      QuotaOverride.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BatchCreateConsumerOverridesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchCreateConsumerOverridesResponse();
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

  fromJSON(object: any): BatchCreateConsumerOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides)
        ? object.overrides.map((e: any) => QuotaOverride.fromJSON(e))
        : [],
    };
  },

  toJSON(message: BatchCreateConsumerOverridesResponse): unknown {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map((e) =>
        e ? QuotaOverride.toJSON(e) : undefined
      );
    } else {
      obj.overrides = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<BatchCreateConsumerOverridesResponse>, I>
  >(object: I): BatchCreateConsumerOverridesResponse {
    const message = createBaseBatchCreateConsumerOverridesResponse();
    message.overrides =
      object.overrides?.map((e) => QuotaOverride.fromPartial(e)) || [];
    return message;
  },
};

function createBaseImportConsumerOverridesRequest(): ImportConsumerOverridesRequest {
  return { parent: "", inlineSource: undefined, force: false, forceOnly: [] };
}

export const ImportConsumerOverridesRequest = {
  encode(
    message: ImportConsumerOverridesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.inlineSource !== undefined) {
      OverrideInlineSource.encode(
        message.inlineSource,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.force === true) {
      writer.uint32(24).bool(message.force);
    }
    writer.uint32(34).fork();
    for (const v of message.forceOnly) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ImportConsumerOverridesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportConsumerOverridesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        case 2:
          message.inlineSource = OverrideInlineSource.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.force = reader.bool();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.forceOnly.push(reader.int32() as any);
            }
          } else {
            message.forceOnly.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ImportConsumerOverridesRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
      inlineSource: isSet(object.inlineSource)
        ? OverrideInlineSource.fromJSON(object.inlineSource)
        : undefined,
      force: isSet(object.force) ? Boolean(object.force) : false,
      forceOnly: Array.isArray(object?.forceOnly)
        ? object.forceOnly.map((e: any) => quotaSafetyCheckFromJSON(e))
        : [],
    };
  },

  toJSON(message: ImportConsumerOverridesRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    message.inlineSource !== undefined &&
      (obj.inlineSource = message.inlineSource
        ? OverrideInlineSource.toJSON(message.inlineSource)
        : undefined);
    message.force !== undefined && (obj.force = message.force);
    if (message.forceOnly) {
      obj.forceOnly = message.forceOnly.map((e) => quotaSafetyCheckToJSON(e));
    } else {
      obj.forceOnly = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ImportConsumerOverridesRequest>, I>>(
    object: I
  ): ImportConsumerOverridesRequest {
    const message = createBaseImportConsumerOverridesRequest();
    message.parent = object.parent ?? "";
    message.inlineSource =
      object.inlineSource !== undefined && object.inlineSource !== null
        ? OverrideInlineSource.fromPartial(object.inlineSource)
        : undefined;
    message.force = object.force ?? false;
    message.forceOnly = object.forceOnly?.map((e) => e) || [];
    return message;
  },
};

function createBaseImportConsumerOverridesResponse(): ImportConsumerOverridesResponse {
  return { overrides: [] };
}

export const ImportConsumerOverridesResponse = {
  encode(
    message: ImportConsumerOverridesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.overrides) {
      QuotaOverride.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ImportConsumerOverridesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportConsumerOverridesResponse();
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

  fromJSON(object: any): ImportConsumerOverridesResponse {
    return {
      overrides: Array.isArray(object?.overrides)
        ? object.overrides.map((e: any) => QuotaOverride.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ImportConsumerOverridesResponse): unknown {
    const obj: any = {};
    if (message.overrides) {
      obj.overrides = message.overrides.map((e) =>
        e ? QuotaOverride.toJSON(e) : undefined
      );
    } else {
      obj.overrides = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ImportConsumerOverridesResponse>, I>>(
    object: I
  ): ImportConsumerOverridesResponse {
    const message = createBaseImportConsumerOverridesResponse();
    message.overrides =
      object.overrides?.map((e) => QuotaOverride.fromPartial(e)) || [];
    return message;
  },
};

function createBaseImportConsumerOverridesMetadata(): ImportConsumerOverridesMetadata {
  return {};
}

export const ImportConsumerOverridesMetadata = {
  encode(
    _: ImportConsumerOverridesMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ImportConsumerOverridesMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportConsumerOverridesMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ImportConsumerOverridesMetadata {
    return {};
  },

  toJSON(_: ImportConsumerOverridesMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ImportConsumerOverridesMetadata>, I>>(
    _: I
  ): ImportConsumerOverridesMetadata {
    const message = createBaseImportConsumerOverridesMetadata();
    return message;
  },
};

function createBaseImportAdminQuotaPoliciesResponse(): ImportAdminQuotaPoliciesResponse {
  return { policies: [] };
}

export const ImportAdminQuotaPoliciesResponse = {
  encode(
    message: ImportAdminQuotaPoliciesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.policies) {
      AdminQuotaPolicy.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ImportAdminQuotaPoliciesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportAdminQuotaPoliciesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.policies.push(
            AdminQuotaPolicy.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ImportAdminQuotaPoliciesResponse {
    return {
      policies: Array.isArray(object?.policies)
        ? object.policies.map((e: any) => AdminQuotaPolicy.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ImportAdminQuotaPoliciesResponse): unknown {
    const obj: any = {};
    if (message.policies) {
      obj.policies = message.policies.map((e) =>
        e ? AdminQuotaPolicy.toJSON(e) : undefined
      );
    } else {
      obj.policies = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ImportAdminQuotaPoliciesResponse>, I>
  >(object: I): ImportAdminQuotaPoliciesResponse {
    const message = createBaseImportAdminQuotaPoliciesResponse();
    message.policies =
      object.policies?.map((e) => AdminQuotaPolicy.fromPartial(e)) || [];
    return message;
  },
};

function createBaseImportAdminQuotaPoliciesMetadata(): ImportAdminQuotaPoliciesMetadata {
  return {};
}

export const ImportAdminQuotaPoliciesMetadata = {
  encode(
    _: ImportAdminQuotaPoliciesMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ImportAdminQuotaPoliciesMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImportAdminQuotaPoliciesMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ImportAdminQuotaPoliciesMetadata {
    return {};
  },

  toJSON(_: ImportAdminQuotaPoliciesMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ImportAdminQuotaPoliciesMetadata>, I>
  >(_: I): ImportAdminQuotaPoliciesMetadata {
    const message = createBaseImportAdminQuotaPoliciesMetadata();
    return message;
  },
};

function createBaseCreateAdminQuotaPolicyMetadata(): CreateAdminQuotaPolicyMetadata {
  return {};
}

export const CreateAdminQuotaPolicyMetadata = {
  encode(
    _: CreateAdminQuotaPolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CreateAdminQuotaPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAdminQuotaPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): CreateAdminQuotaPolicyMetadata {
    return {};
  },

  toJSON(_: CreateAdminQuotaPolicyMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateAdminQuotaPolicyMetadata>, I>>(
    _: I
  ): CreateAdminQuotaPolicyMetadata {
    const message = createBaseCreateAdminQuotaPolicyMetadata();
    return message;
  },
};

function createBaseUpdateAdminQuotaPolicyMetadata(): UpdateAdminQuotaPolicyMetadata {
  return {};
}

export const UpdateAdminQuotaPolicyMetadata = {
  encode(
    _: UpdateAdminQuotaPolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateAdminQuotaPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAdminQuotaPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): UpdateAdminQuotaPolicyMetadata {
    return {};
  },

  toJSON(_: UpdateAdminQuotaPolicyMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateAdminQuotaPolicyMetadata>, I>>(
    _: I
  ): UpdateAdminQuotaPolicyMetadata {
    const message = createBaseUpdateAdminQuotaPolicyMetadata();
    return message;
  },
};

function createBaseDeleteAdminQuotaPolicyMetadata(): DeleteAdminQuotaPolicyMetadata {
  return {};
}

export const DeleteAdminQuotaPolicyMetadata = {
  encode(
    _: DeleteAdminQuotaPolicyMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DeleteAdminQuotaPolicyMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAdminQuotaPolicyMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): DeleteAdminQuotaPolicyMetadata {
    return {};
  },

  toJSON(_: DeleteAdminQuotaPolicyMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeleteAdminQuotaPolicyMetadata>, I>>(
    _: I
  ): DeleteAdminQuotaPolicyMetadata {
    const message = createBaseDeleteAdminQuotaPolicyMetadata();
    return message;
  },
};

function createBaseGenerateServiceIdentityRequest(): GenerateServiceIdentityRequest {
  return { parent: "" };
}

export const GenerateServiceIdentityRequest = {
  encode(
    message: GenerateServiceIdentityRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GenerateServiceIdentityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenerateServiceIdentityRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parent = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenerateServiceIdentityRequest {
    return {
      parent: isSet(object.parent) ? String(object.parent) : "",
    };
  },

  toJSON(message: GenerateServiceIdentityRequest): unknown {
    const obj: any = {};
    message.parent !== undefined && (obj.parent = message.parent);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenerateServiceIdentityRequest>, I>>(
    object: I
  ): GenerateServiceIdentityRequest {
    const message = createBaseGenerateServiceIdentityRequest();
    message.parent = object.parent ?? "";
    return message;
  },
};

function createBaseGetServiceIdentityResponse(): GetServiceIdentityResponse {
  return { identity: undefined, state: 0 };
}

export const GetServiceIdentityResponse = {
  encode(
    message: GetServiceIdentityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.identity !== undefined) {
      ServiceIdentity.encode(
        message.identity,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetServiceIdentityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServiceIdentityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identity = ServiceIdentity.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GetServiceIdentityResponse {
    return {
      identity: isSet(object.identity)
        ? ServiceIdentity.fromJSON(object.identity)
        : undefined,
      state: isSet(object.state)
        ? getServiceIdentityResponse_IdentityStateFromJSON(object.state)
        : 0,
    };
  },

  toJSON(message: GetServiceIdentityResponse): unknown {
    const obj: any = {};
    message.identity !== undefined &&
      (obj.identity = message.identity
        ? ServiceIdentity.toJSON(message.identity)
        : undefined);
    message.state !== undefined &&
      (obj.state = getServiceIdentityResponse_IdentityStateToJSON(
        message.state
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetServiceIdentityResponse>, I>>(
    object: I
  ): GetServiceIdentityResponse {
    const message = createBaseGetServiceIdentityResponse();
    message.identity =
      object.identity !== undefined && object.identity !== null
        ? ServiceIdentity.fromPartial(object.identity)
        : undefined;
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseGetServiceIdentityMetadata(): GetServiceIdentityMetadata {
  return {};
}

export const GetServiceIdentityMetadata = {
  encode(
    _: GetServiceIdentityMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GetServiceIdentityMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetServiceIdentityMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): GetServiceIdentityMetadata {
    return {};
  },

  toJSON(_: GetServiceIdentityMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GetServiceIdentityMetadata>, I>>(
    _: I
  ): GetServiceIdentityMetadata {
    const message = createBaseGetServiceIdentityMetadata();
    return message;
  },
};

/** [Service Usage API](https://cloud.google.com/service-usage/docs/overview) */
export interface ServiceUsage {
  /**
   * Enables a service so that it can be used with a project.
   *
   * Operation response type: `google.protobuf.Empty`
   *
   * @deprecated
   */
  EnableService(request: EnableServiceRequest): Promise<Operation>;
  /**
   * Disables a service so that it can no longer be used with a project.
   * This prevents unintended usage that may cause unexpected billing
   * charges or security leaks.
   *
   * It is not valid to call the disable method on a service that is not
   * currently enabled. Callers will receive a `FAILED_PRECONDITION` status if
   * the target service is not currently enabled.
   *
   * Operation response type: `google.protobuf.Empty`
   *
   * @deprecated
   */
  DisableService(request: DisableServiceRequest): Promise<Operation>;
  /**
   * Returns the service configuration and enabled state for a given service.
   *
   * @deprecated
   */
  GetService(request: GetServiceRequest): Promise<Service>;
  /**
   * Lists all services available to the specified project, and the current
   * state of those services with respect to the project. The list includes
   * all public services, all services for which the calling user has the
   * `servicemanagement.services.bind` permission, and all services that have
   * already been enabled on the project. The list can be filtered to
   * only include services in a specific state, for example to only include
   * services enabled on the project.
   *
   * @deprecated
   */
  ListServices(request: ListServicesRequest): Promise<ListServicesResponse>;
  /**
   * Enables multiple services on a project. The operation is atomic: if
   * enabling any service fails, then the entire batch fails, and no state
   * changes occur.
   *
   * Operation response type: `google.protobuf.Empty`
   *
   * @deprecated
   */
  BatchEnableServices(request: BatchEnableServicesRequest): Promise<Operation>;
  /**
   * Retrieves a summary of all quota information visible to the service
   * consumer, organized by service metric. Each metric includes information
   * about all of its defined limits. Each limit includes the limit
   * configuration (quota unit, preciseness, default value), the current
   * effective limit value, and all of the overrides applied to the limit.
   */
  ListConsumerQuotaMetrics(
    request: ListConsumerQuotaMetricsRequest
  ): Promise<ListConsumerQuotaMetricsResponse>;
  /** Retrieves a summary of quota information for a specific quota metric */
  GetConsumerQuotaMetric(
    request: GetConsumerQuotaMetricRequest
  ): Promise<ConsumerQuotaMetric>;
  /** Retrieves a summary of quota information for a specific quota limit. */
  GetConsumerQuotaLimit(
    request: GetConsumerQuotaLimitRequest
  ): Promise<ConsumerQuotaLimit>;
  /**
   * Creates an admin override.
   * An admin override is applied by an administrator of a parent folder or
   * parent organization of the consumer receiving the override. An admin
   * override is intended to limit the amount of quota the consumer can use out
   * of the total quota pool allocated to all children of the folder or
   * organization.
   */
  CreateAdminOverride(request: CreateAdminOverrideRequest): Promise<Operation>;
  /** Updates an admin override. */
  UpdateAdminOverride(request: UpdateAdminOverrideRequest): Promise<Operation>;
  /** Deletes an admin override. */
  DeleteAdminOverride(request: DeleteAdminOverrideRequest): Promise<Operation>;
  /** Lists all admin overrides on this limit. */
  ListAdminOverrides(
    request: ListAdminOverridesRequest
  ): Promise<ListAdminOverridesResponse>;
  /**
   * Creates or updates multiple admin overrides atomically, all on the
   * same consumer, but on many different metrics or limits.
   * The name field in the quota override message should not be set.
   */
  ImportAdminOverrides(
    request: ImportAdminOverridesRequest
  ): Promise<Operation>;
  /**
   * Creates a consumer override.
   * A consumer override is applied to the consumer on its own authority to
   * limit its own quota usage. Consumer overrides cannot be used to grant more
   * quota than would be allowed by admin overrides, producer overrides, or the
   * default limit of the service.
   */
  CreateConsumerOverride(
    request: CreateConsumerOverrideRequest
  ): Promise<Operation>;
  /** Updates a consumer override. */
  UpdateConsumerOverride(
    request: UpdateConsumerOverrideRequest
  ): Promise<Operation>;
  /** Deletes a consumer override. */
  DeleteConsumerOverride(
    request: DeleteConsumerOverrideRequest
  ): Promise<Operation>;
  /** Lists all consumer overrides on this limit. */
  ListConsumerOverrides(
    request: ListConsumerOverridesRequest
  ): Promise<ListConsumerOverridesResponse>;
  /**
   * Creates or updates multiple consumer overrides atomically, all on the
   * same consumer, but on many different metrics or limits.
   * The name field in the quota override message should not be set.
   */
  ImportConsumerOverrides(
    request: ImportConsumerOverridesRequest
  ): Promise<Operation>;
  /** Generates service identity for service. */
  GenerateServiceIdentity(
    request: GenerateServiceIdentityRequest
  ): Promise<Operation>;
}

export class ServiceUsageClientImpl implements ServiceUsage {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.EnableService = this.EnableService.bind(this);
    this.DisableService = this.DisableService.bind(this);
    this.GetService = this.GetService.bind(this);
    this.ListServices = this.ListServices.bind(this);
    this.BatchEnableServices = this.BatchEnableServices.bind(this);
    this.ListConsumerQuotaMetrics = this.ListConsumerQuotaMetrics.bind(this);
    this.GetConsumerQuotaMetric = this.GetConsumerQuotaMetric.bind(this);
    this.GetConsumerQuotaLimit = this.GetConsumerQuotaLimit.bind(this);
    this.CreateAdminOverride = this.CreateAdminOverride.bind(this);
    this.UpdateAdminOverride = this.UpdateAdminOverride.bind(this);
    this.DeleteAdminOverride = this.DeleteAdminOverride.bind(this);
    this.ListAdminOverrides = this.ListAdminOverrides.bind(this);
    this.ImportAdminOverrides = this.ImportAdminOverrides.bind(this);
    this.CreateConsumerOverride = this.CreateConsumerOverride.bind(this);
    this.UpdateConsumerOverride = this.UpdateConsumerOverride.bind(this);
    this.DeleteConsumerOverride = this.DeleteConsumerOverride.bind(this);
    this.ListConsumerOverrides = this.ListConsumerOverrides.bind(this);
    this.ImportConsumerOverrides = this.ImportConsumerOverrides.bind(this);
    this.GenerateServiceIdentity = this.GenerateServiceIdentity.bind(this);
  }
  EnableService(request: EnableServiceRequest): Promise<Operation> {
    const data = EnableServiceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "EnableService",
      data
    );
    return promise.then((data) => Operation.decode(new _m0.Reader(data)));
  }

  DisableService(request: DisableServiceRequest): Promise<Operation> {
    const data = DisableServiceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "DisableService",
      data
    );
    return promise.then((data) => Operation.decode(new _m0.Reader(data)));
  }

  GetService(request: GetServiceRequest): Promise<Service> {
    const data = GetServiceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "GetService",
      data
    );
    return promise.then((data) => Service.decode(new _m0.Reader(data)));
  }

  ListServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    const data = ListServicesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "ListServices",
      data
    );
    return promise.then((data) =>
      ListServicesResponse.decode(new _m0.Reader(data))
    );
  }

  BatchEnableServices(request: BatchEnableServicesRequest): Promise<Operation> {
    const data = BatchEnableServicesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "BatchEnableServices",
      data
    );
    return promise.then((data) => Operation.decode(new _m0.Reader(data)));
  }

  ListConsumerQuotaMetrics(
    request: ListConsumerQuotaMetricsRequest
  ): Promise<ListConsumerQuotaMetricsResponse> {
    const data = ListConsumerQuotaMetricsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "ListConsumerQuotaMetrics",
      data
    );
    return promise.then((data) =>
      ListConsumerQuotaMetricsResponse.decode(new _m0.Reader(data))
    );
  }

  GetConsumerQuotaMetric(
    request: GetConsumerQuotaMetricRequest
  ): Promise<ConsumerQuotaMetric> {
    const data = GetConsumerQuotaMetricRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "GetConsumerQuotaMetric",
      data
    );
    return promise.then((data) =>
      ConsumerQuotaMetric.decode(new _m0.Reader(data))
    );
  }

  GetConsumerQuotaLimit(
    request: GetConsumerQuotaLimitRequest
  ): Promise<ConsumerQuotaLimit> {
    const data = GetConsumerQuotaLimitRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "GetConsumerQuotaLimit",
      data
    );
    return promise.then((data) =>
      ConsumerQuotaLimit.decode(new _m0.Reader(data))
    );
  }

  CreateAdminOverride(request: CreateAdminOverrideRequest): Promise<Operation> {
    const data = CreateAdminOverrideRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "CreateAdminOverride",
      data
    );
    return promise.then((data) => Operation.decode(new _m0.Reader(data)));
  }

  UpdateAdminOverride(request: UpdateAdminOverrideRequest): Promise<Operation> {
    const data = UpdateAdminOverrideRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "UpdateAdminOverride",
      data
    );
    return promise.then((data) => Operation.decode(new _m0.Reader(data)));
  }

  DeleteAdminOverride(request: DeleteAdminOverrideRequest): Promise<Operation> {
    const data = DeleteAdminOverrideRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "DeleteAdminOverride",
      data
    );
    return promise.then((data) => Operation.decode(new _m0.Reader(data)));
  }

  ListAdminOverrides(
    request: ListAdminOverridesRequest
  ): Promise<ListAdminOverridesResponse> {
    const data = ListAdminOverridesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "ListAdminOverrides",
      data
    );
    return promise.then((data) =>
      ListAdminOverridesResponse.decode(new _m0.Reader(data))
    );
  }

  ImportAdminOverrides(
    request: ImportAdminOverridesRequest
  ): Promise<Operation> {
    const data = ImportAdminOverridesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "ImportAdminOverrides",
      data
    );
    return promise.then((data) => Operation.decode(new _m0.Reader(data)));
  }

  CreateConsumerOverride(
    request: CreateConsumerOverrideRequest
  ): Promise<Operation> {
    const data = CreateConsumerOverrideRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "CreateConsumerOverride",
      data
    );
    return promise.then((data) => Operation.decode(new _m0.Reader(data)));
  }

  UpdateConsumerOverride(
    request: UpdateConsumerOverrideRequest
  ): Promise<Operation> {
    const data = UpdateConsumerOverrideRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "UpdateConsumerOverride",
      data
    );
    return promise.then((data) => Operation.decode(new _m0.Reader(data)));
  }

  DeleteConsumerOverride(
    request: DeleteConsumerOverrideRequest
  ): Promise<Operation> {
    const data = DeleteConsumerOverrideRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "DeleteConsumerOverride",
      data
    );
    return promise.then((data) => Operation.decode(new _m0.Reader(data)));
  }

  ListConsumerOverrides(
    request: ListConsumerOverridesRequest
  ): Promise<ListConsumerOverridesResponse> {
    const data = ListConsumerOverridesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "ListConsumerOverrides",
      data
    );
    return promise.then((data) =>
      ListConsumerOverridesResponse.decode(new _m0.Reader(data))
    );
  }

  ImportConsumerOverrides(
    request: ImportConsumerOverridesRequest
  ): Promise<Operation> {
    const data = ImportConsumerOverridesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "ImportConsumerOverrides",
      data
    );
    return promise.then((data) => Operation.decode(new _m0.Reader(data)));
  }

  GenerateServiceIdentity(
    request: GenerateServiceIdentityRequest
  ): Promise<Operation> {
    const data = GenerateServiceIdentityRequest.encode(request).finish();
    const promise = this.rpc.request(
      "google.api.serviceusage.v1beta1.ServiceUsage",
      "GenerateServiceIdentity",
      data
    );
    return promise.then((data) => Operation.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
