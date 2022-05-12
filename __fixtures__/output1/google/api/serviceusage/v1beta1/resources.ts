import { Api } from "../../../protobuf/api";
import { Documentation } from "../../documentation";
import { Quota } from "../../quota";
import { Authentication } from "../../auth";
import { Usage } from "../../usage";
import { Endpoint } from "../../endpoint";
import { MonitoredResourceDescriptor } from "../../monitored_resource";
import { Monitoring } from "../../monitoring";
import * as _m0 from "protobufjs/minimal";
import { isSet, Exact, DeepPartial, Long, isObject } from "@osmonauts/helpers";
export interface Service {
  name: string;
  parent: string;
  config: ServiceConfig;
  state: State;
}

function createBaseService(): Service {
  return {
    name: "",
    parent: "",
    config: undefined,
    state: undefined
  };
}

export const Service = {
  encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): Service {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      parent: isSet(object.parent) ? String(object.parent) : "",
      config: isSet(object.config) ? ServiceConfig.fromJSON(object.config) : undefined,
      state: isSet(object.state) ? stateFromJSON(object.state) : 0
    };
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.parent !== undefined && (obj.parent = message.parent);
    message.config !== undefined && (obj.config = message.config ? ServiceConfig.toJSON(message.config) : undefined);
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
    const message = createBaseService();
    message.name = object.name ?? "";
    message.parent = object.parent ?? "";
    message.config = object.config !== undefined && object.config !== null ? ServiceConfig.fromPartial(object.config) : undefined;
    message.state = object.state ?? undefined;
    return message;
  }

};
export enum State {
  /** STATE_UNSPECIFIED - The default value, which indicates that the enabled state of the service
  is unspecified or not meaningful. Currently, all consumers other than
  projects (such as folders and organizations) are always in this state. */
  STATE_UNSPECIFIED = 0,

  /** DISABLED - The service cannot be used by this consumer. It has either been explicitly
  disabled, or has never been enabled. */
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

    default:
      return "UNKNOWN";
  }
}
export interface ServiceConfig {
  name: string;
  title: string;
  apis: Api[];
  documentation: Documentation;
  quota: Quota;
  authentication: Authentication;
  usage: Usage;
  endpoints: Endpoint[];
  monitoredResources: MonitoredResourceDescriptor[];
  monitoring: Monitoring;
}

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
  encode(message: ServiceConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceConfig {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): ServiceConfig {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      title: isSet(object.title) ? String(object.title) : "",
      apis: Array.isArray(object?.apis) ? object.apis.map((e: any) => Api.fromJSON(e)) : [],
      documentation: isSet(object.documentation) ? Documentation.fromJSON(object.documentation) : undefined,
      quota: isSet(object.quota) ? Quota.fromJSON(object.quota) : undefined,
      authentication: isSet(object.authentication) ? Authentication.fromJSON(object.authentication) : undefined,
      usage: isSet(object.usage) ? Usage.fromJSON(object.usage) : undefined,
      endpoints: Array.isArray(object?.endpoints) ? object.endpoints.map((e: any) => Endpoint.fromJSON(e)) : [],
      monitoredResources: Array.isArray(object?.monitoredResources) ? object.monitoredResources.map((e: any) => MonitoredResourceDescriptor.fromJSON(e)) : [],
      monitoring: isSet(object.monitoring) ? Monitoring.fromJSON(object.monitoring) : undefined
    };
  },

  toJSON(message: ServiceConfig): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.title !== undefined && (obj.title = message.title);

    if (message.apis) {
      obj.apis = message.apis.map(e => e ? Api.toJSON(e) : undefined);
    } else {
      obj.apis = [];
    }

    message.documentation !== undefined && (obj.documentation = message.documentation ? Documentation.toJSON(message.documentation) : undefined);
    message.quota !== undefined && (obj.quota = message.quota ? Quota.toJSON(message.quota) : undefined);
    message.authentication !== undefined && (obj.authentication = message.authentication ? Authentication.toJSON(message.authentication) : undefined);
    message.usage !== undefined && (obj.usage = message.usage ? Usage.toJSON(message.usage) : undefined);

    if (message.endpoints) {
      obj.endpoints = message.endpoints.map(e => e ? Endpoint.toJSON(e) : undefined);
    } else {
      obj.endpoints = [];
    }

    if (message.monitoredResources) {
      obj.monitoredResources = message.monitoredResources.map(e => e ? MonitoredResourceDescriptor.toJSON(e) : undefined);
    } else {
      obj.monitoredResources = [];
    }

    message.monitoring !== undefined && (obj.monitoring = message.monitoring ? Monitoring.toJSON(message.monitoring) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ServiceConfig>, I>>(object: I): ServiceConfig {
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
export interface OperationMetadata {
  resourceNames: string[];
}

function createBaseOperationMetadata(): OperationMetadata {
  return {
    resourceNames: []
  };
}

export const OperationMetadata = {
  encode(message: OperationMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resourceNames) {
      writer.uint32(18).string(v!);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OperationMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): OperationMetadata {
    return {
      resourceNames: Array.isArray(object?.resourceNames) ? object.resourceNames.map((e: any) => String(e)) : []
    };
  },

  toJSON(message: OperationMetadata): unknown {
    const obj: any = {};

    if (message.resourceNames) {
      obj.resourceNames = message.resourceNames.map(e => e);
    } else {
      obj.resourceNames = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OperationMetadata>, I>>(object: I): OperationMetadata {
    const message = createBaseOperationMetadata();
    message.resourceNames = object.resourceNames?.map(e => e) || [];
    return message;
  }

};
export interface ConsumerQuotaMetric {
  name: string;
  metric: string;
  displayName: string;
  consumerQuotaLimits: ConsumerQuotaLimit[];
  descendantConsumerQuotaLimits: ConsumerQuotaLimit[];
  unit: string;
}

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
  encode(message: ConsumerQuotaMetric, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsumerQuotaMetric {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): ConsumerQuotaMetric {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      metric: isSet(object.metric) ? String(object.metric) : "",
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
      consumerQuotaLimits: Array.isArray(object?.consumerQuotaLimits) ? object.consumerQuotaLimits.map((e: any) => ConsumerQuotaLimit.fromJSON(e)) : [],
      descendantConsumerQuotaLimits: Array.isArray(object?.descendantConsumerQuotaLimits) ? object.descendantConsumerQuotaLimits.map((e: any) => ConsumerQuotaLimit.fromJSON(e)) : [],
      unit: isSet(object.unit) ? String(object.unit) : ""
    };
  },

  toJSON(message: ConsumerQuotaMetric): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.metric !== undefined && (obj.metric = message.metric);
    message.displayName !== undefined && (obj.displayName = message.displayName);

    if (message.consumerQuotaLimits) {
      obj.consumerQuotaLimits = message.consumerQuotaLimits.map(e => e ? ConsumerQuotaLimit.toJSON(e) : undefined);
    } else {
      obj.consumerQuotaLimits = [];
    }

    if (message.descendantConsumerQuotaLimits) {
      obj.descendantConsumerQuotaLimits = message.descendantConsumerQuotaLimits.map(e => e ? ConsumerQuotaLimit.toJSON(e) : undefined);
    } else {
      obj.descendantConsumerQuotaLimits = [];
    }

    message.unit !== undefined && (obj.unit = message.unit);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConsumerQuotaMetric>, I>>(object: I): ConsumerQuotaMetric {
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
export interface ConsumerQuotaLimit {
  name: string;
  metric: string;
  unit: string;
  isPrecise: boolean;
  allowsAdminOverrides: boolean;
  quotaBuckets: QuotaBucket[];
}

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
  encode(message: ConsumerQuotaLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): ConsumerQuotaLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): ConsumerQuotaLimit {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      metric: isSet(object.metric) ? String(object.metric) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      isPrecise: isSet(object.isPrecise) ? Boolean(object.isPrecise) : false,
      allowsAdminOverrides: isSet(object.allowsAdminOverrides) ? Boolean(object.allowsAdminOverrides) : false,
      quotaBuckets: Array.isArray(object?.quotaBuckets) ? object.quotaBuckets.map((e: any) => QuotaBucket.fromJSON(e)) : []
    };
  },

  toJSON(message: ConsumerQuotaLimit): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.metric !== undefined && (obj.metric = message.metric);
    message.unit !== undefined && (obj.unit = message.unit);
    message.isPrecise !== undefined && (obj.isPrecise = message.isPrecise);
    message.allowsAdminOverrides !== undefined && (obj.allowsAdminOverrides = message.allowsAdminOverrides);

    if (message.quotaBuckets) {
      obj.quotaBuckets = message.quotaBuckets.map(e => e ? QuotaBucket.toJSON(e) : undefined);
    } else {
      obj.quotaBuckets = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConsumerQuotaLimit>, I>>(object: I): ConsumerQuotaLimit {
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
export enum QuotaView {
  /** QUOTA_VIEW_UNSPECIFIED - No quota view specified. Requests that do not specify a quota view will
  typically default to the BASIC view. */
  QUOTA_VIEW_UNSPECIFIED = 0,

  /** BASIC - Only buckets with overrides are shown in the response. */
  BASIC = 1,

  /** FULL - Include per-location buckets even if they do not have overrides.
  When the view is FULL, and a limit has regional or zonal quota, the limit
  will include buckets for all regions or zones that could support
  overrides, even if none are currently present. In some cases this will
  cause the response to become very large; callers that do not need this
  extra information should use the BASIC view instead. */
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

    default:
      return "UNKNOWN";
  }
}
export interface QuotaBucket_DimensionsEntry {
  key: string;
  value: string;
}

function createBaseQuotaBucket_DimensionsEntry(): QuotaBucket_DimensionsEntry {
  return {
    key: "",
    value: ""
  };
}

export const QuotaBucket_DimensionsEntry = {
  encode(message: QuotaBucket_DimensionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaBucket_DimensionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): QuotaBucket_DimensionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: QuotaBucket_DimensionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaBucket_DimensionsEntry>, I>>(object: I): QuotaBucket_DimensionsEntry {
    const message = createBaseQuotaBucket_DimensionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};
export interface QuotaBucket {
  effectiveLimit: Long;
  defaultLimit: Long;
  producerOverride: QuotaOverride;
  consumerOverride: QuotaOverride;
  adminOverride: QuotaOverride;
  dimensions: {
    [key: string]: string;
  };
}

function createBaseQuotaBucket(): QuotaBucket {
  return {
    effectiveLimit: Long.ZERO,
    defaultLimit: Long.ZERO,
    producerOverride: undefined,
    consumerOverride: undefined,
    adminOverride: undefined,
    dimensions: {}
  };
}

export const QuotaBucket = {
  encode(message: QuotaBucket, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.effectiveLimit.isZero()) {
      writer.uint32(8).int64(message.effectiveLimit);
    }

    if (!message.defaultLimit.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaBucket {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaBucket();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.effectiveLimit = (reader.int64() as Long);
          break;

        case 2:
          message.defaultLimit = (reader.int64() as Long);
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

  fromJSON(object: any): QuotaBucket {
    return {
      effectiveLimit: isSet(object.effectiveLimit) ? Long.fromString(object.effectiveLimit) : Long.ZERO,
      defaultLimit: isSet(object.defaultLimit) ? Long.fromString(object.defaultLimit) : Long.ZERO,
      producerOverride: isSet(object.producerOverride) ? QuotaOverride.fromJSON(object.producerOverride) : undefined,
      consumerOverride: isSet(object.consumerOverride) ? QuotaOverride.fromJSON(object.consumerOverride) : undefined,
      adminOverride: isSet(object.adminOverride) ? QuotaOverride.fromJSON(object.adminOverride) : undefined,
      dimensions: isObject(object.dimensions) ? Object.entries(object.dimensions).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: QuotaBucket): unknown {
    const obj: any = {};
    message.effectiveLimit !== undefined && (obj.effectiveLimit = (message.effectiveLimit || Long.ZERO).toString());
    message.defaultLimit !== undefined && (obj.defaultLimit = (message.defaultLimit || Long.ZERO).toString());
    message.producerOverride !== undefined && (obj.producerOverride = message.producerOverride ? QuotaOverride.toJSON(message.producerOverride) : undefined);
    message.consumerOverride !== undefined && (obj.consumerOverride = message.consumerOverride ? QuotaOverride.toJSON(message.consumerOverride) : undefined);
    message.adminOverride !== undefined && (obj.adminOverride = message.adminOverride ? QuotaOverride.toJSON(message.adminOverride) : undefined);
    obj.dimensions = {};

    if (message.dimensions) {
      Object.entries(message.dimensions).forEach(([k, v]) => {
        obj.dimensions[k] = v;
      });
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaBucket>, I>>(object: I): QuotaBucket {
    const message = createBaseQuotaBucket();
    message.effectiveLimit = object.effectiveLimit !== undefined && object.effectiveLimit !== null ? Long.fromValue(object.effectiveLimit) : Long.ZERO;
    message.defaultLimit = object.defaultLimit !== undefined && object.defaultLimit !== null ? Long.fromValue(object.defaultLimit) : Long.ZERO;
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
export interface QuotaOverride_DimensionsEntry {
  key: string;
  value: string;
}

function createBaseQuotaOverride_DimensionsEntry(): QuotaOverride_DimensionsEntry {
  return {
    key: "",
    value: ""
  };
}

export const QuotaOverride_DimensionsEntry = {
  encode(message: QuotaOverride_DimensionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaOverride_DimensionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): QuotaOverride_DimensionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: QuotaOverride_DimensionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaOverride_DimensionsEntry>, I>>(object: I): QuotaOverride_DimensionsEntry {
    const message = createBaseQuotaOverride_DimensionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};
export interface QuotaOverride {
  name: string;
  overrideValue: Long;
  dimensions: {
    [key: string]: string;
  };
  metric: string;
  unit: string;
  adminOverrideAncestor: string;
}

function createBaseQuotaOverride(): QuotaOverride {
  return {
    name: "",
    overrideValue: Long.ZERO,
    dimensions: {},
    metric: "",
    unit: "",
    adminOverrideAncestor: ""
  };
}

export const QuotaOverride = {
  encode(message: QuotaOverride, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (!message.overrideValue.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaOverride {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaOverride();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.overrideValue = (reader.int64() as Long);
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

  fromJSON(object: any): QuotaOverride {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      overrideValue: isSet(object.overrideValue) ? Long.fromString(object.overrideValue) : Long.ZERO,
      dimensions: isObject(object.dimensions) ? Object.entries(object.dimensions).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      metric: isSet(object.metric) ? String(object.metric) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      adminOverrideAncestor: isSet(object.adminOverrideAncestor) ? String(object.adminOverrideAncestor) : ""
    };
  },

  toJSON(message: QuotaOverride): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.overrideValue !== undefined && (obj.overrideValue = (message.overrideValue || Long.ZERO).toString());
    obj.dimensions = {};

    if (message.dimensions) {
      Object.entries(message.dimensions).forEach(([k, v]) => {
        obj.dimensions[k] = v;
      });
    }

    message.metric !== undefined && (obj.metric = message.metric);
    message.unit !== undefined && (obj.unit = message.unit);
    message.adminOverrideAncestor !== undefined && (obj.adminOverrideAncestor = message.adminOverrideAncestor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaOverride>, I>>(object: I): QuotaOverride {
    const message = createBaseQuotaOverride();
    message.name = object.name ?? "";
    message.overrideValue = object.overrideValue !== undefined && object.overrideValue !== null ? Long.fromValue(object.overrideValue) : Long.ZERO;
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
export interface OverrideInlineSource {
  overrides: QuotaOverride[];
}

function createBaseOverrideInlineSource(): OverrideInlineSource {
  return {
    overrides: []
  };
}

export const OverrideInlineSource = {
  encode(message: OverrideInlineSource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.overrides) {
      QuotaOverride.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OverrideInlineSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): OverrideInlineSource {
    return {
      overrides: Array.isArray(object?.overrides) ? object.overrides.map((e: any) => QuotaOverride.fromJSON(e)) : []
    };
  },

  toJSON(message: OverrideInlineSource): unknown {
    const obj: any = {};

    if (message.overrides) {
      obj.overrides = message.overrides.map(e => e ? QuotaOverride.toJSON(e) : undefined);
    } else {
      obj.overrides = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OverrideInlineSource>, I>>(object: I): OverrideInlineSource {
    const message = createBaseOverrideInlineSource();
    message.overrides = object.overrides?.map(e => QuotaOverride.fromPartial(e)) || [];
    return message;
  }

};
export enum QuotaSafetyCheck {
  /** QUOTA_SAFETY_CHECK_UNSPECIFIED - Unspecified quota safety check. */
  QUOTA_SAFETY_CHECK_UNSPECIFIED = 0,

  /** LIMIT_DECREASE_BELOW_USAGE - Validates that a quota mutation would not cause the consumer's effective
  limit to be lower than the consumer's quota usage. */
  LIMIT_DECREASE_BELOW_USAGE = 1,

  /** LIMIT_DECREASE_PERCENTAGE_TOO_HIGH - Validates that a quota mutation would not cause the consumer's effective
  limit to decrease by more than 10 percent. */
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

    default:
      return "UNKNOWN";
  }
}
export interface AdminQuotaPolicy_DimensionsEntry {
  key: string;
  value: string;
}

function createBaseAdminQuotaPolicy_DimensionsEntry(): AdminQuotaPolicy_DimensionsEntry {
  return {
    key: "",
    value: ""
  };
}

export const AdminQuotaPolicy_DimensionsEntry = {
  encode(message: AdminQuotaPolicy_DimensionsEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AdminQuotaPolicy_DimensionsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): AdminQuotaPolicy_DimensionsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : ""
    };
  },

  toJSON(message: AdminQuotaPolicy_DimensionsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminQuotaPolicy_DimensionsEntry>, I>>(object: I): AdminQuotaPolicy_DimensionsEntry {
    const message = createBaseAdminQuotaPolicy_DimensionsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  }

};
export interface AdminQuotaPolicy {
  name: string;
  policyValue: Long;
  dimensions: {
    [key: string]: string;
  };
  metric: string;
  unit: string;
  container: string;
}

function createBaseAdminQuotaPolicy(): AdminQuotaPolicy {
  return {
    name: "",
    policyValue: Long.ZERO,
    dimensions: {},
    metric: "",
    unit: "",
    container: ""
  };
}

export const AdminQuotaPolicy = {
  encode(message: AdminQuotaPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }

    if (!message.policyValue.isZero()) {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): AdminQuotaPolicy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdminQuotaPolicy();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;

        case 2:
          message.policyValue = (reader.int64() as Long);
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

  fromJSON(object: any): AdminQuotaPolicy {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      policyValue: isSet(object.policyValue) ? Long.fromString(object.policyValue) : Long.ZERO,
      dimensions: isObject(object.dimensions) ? Object.entries(object.dimensions).reduce<{
        [key: string]: string;
      }>((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {}) : {},
      metric: isSet(object.metric) ? String(object.metric) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      container: isSet(object.container) ? String(object.container) : ""
    };
  },

  toJSON(message: AdminQuotaPolicy): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.policyValue !== undefined && (obj.policyValue = (message.policyValue || Long.ZERO).toString());
    obj.dimensions = {};

    if (message.dimensions) {
      Object.entries(message.dimensions).forEach(([k, v]) => {
        obj.dimensions[k] = v;
      });
    }

    message.metric !== undefined && (obj.metric = message.metric);
    message.unit !== undefined && (obj.unit = message.unit);
    message.container !== undefined && (obj.container = message.container);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AdminQuotaPolicy>, I>>(object: I): AdminQuotaPolicy {
    const message = createBaseAdminQuotaPolicy();
    message.name = object.name ?? "";
    message.policyValue = object.policyValue !== undefined && object.policyValue !== null ? Long.fromValue(object.policyValue) : Long.ZERO;
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
export interface ServiceIdentity {
  email: string;
  uniqueId: string;
}

function createBaseServiceIdentity(): ServiceIdentity {
  return {
    email: "",
    uniqueId: ""
  };
}

export const ServiceIdentity = {
  encode(message: ServiceIdentity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }

    if (message.uniqueId !== "") {
      writer.uint32(18).string(message.uniqueId);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServiceIdentity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): ServiceIdentity {
    return {
      email: isSet(object.email) ? String(object.email) : "",
      uniqueId: isSet(object.uniqueId) ? String(object.uniqueId) : ""
    };
  },

  toJSON(message: ServiceIdentity): unknown {
    const obj: any = {};
    message.email !== undefined && (obj.email = message.email);
    message.uniqueId !== undefined && (obj.uniqueId = message.uniqueId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ServiceIdentity>, I>>(object: I): ServiceIdentity {
    const message = createBaseServiceIdentity();
    message.email = object.email ?? "";
    message.uniqueId = object.uniqueId ?? "";
    return message;
  }

};