/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "google.api";

/**
 * Quota configuration helps to achieve fairness and budgeting in service
 * usage.
 *
 * The metric based quota configuration works this way:
 * - The service configuration defines a set of metrics.
 * - For API calls, the quota.metric_rules maps methods to metrics with
 *   corresponding costs.
 * - The quota.limits defines limits on the metrics, which will be used for
 *   quota checks at runtime.
 *
 * An example quota configuration in yaml format:
 *
 *    quota:
 *      limits:
 *
 *      - name: apiWriteQpsPerProject
 *        metric: library.googleapis.com/write_calls
 *        unit: "1/min/{project}"  # rate limit for consumer projects
 *        values:
 *          STANDARD: 10000
 *
 *
 *      # The metric rules bind all methods to the read_calls metric,
 *      # except for the UpdateBook and DeleteBook methods. These two methods
 *      # are mapped to the write_calls metric, with the UpdateBook method
 *      # consuming at twice rate as the DeleteBook method.
 *      metric_rules:
 *      - selector: "*"
 *        metric_costs:
 *          library.googleapis.com/read_calls: 1
 *      - selector: google.example.library.v1.LibraryService.UpdateBook
 *        metric_costs:
 *          library.googleapis.com/write_calls: 2
 *      - selector: google.example.library.v1.LibraryService.DeleteBook
 *        metric_costs:
 *          library.googleapis.com/write_calls: 1
 *
 *  Corresponding Metric definition:
 *
 *      metrics:
 *      - name: library.googleapis.com/read_calls
 *        display_name: Read requests
 *        metric_kind: DELTA
 *        value_type: INT64
 *
 *      - name: library.googleapis.com/write_calls
 *        display_name: Write requests
 *        metric_kind: DELTA
 *        value_type: INT64
 */
export interface Quota {
  /** List of `QuotaLimit` definitions for the service. */
  limits: QuotaLimit[];
  /**
   * List of `MetricRule` definitions, each one mapping a selected method to one
   * or more metrics.
   */
  metricRules: MetricRule[];
}

/**
 * Bind API methods to metrics. Binding a method to a metric causes that
 * metric's configured quota behaviors to apply to the method call.
 */
export interface MetricRule {
  /**
   * Selects the methods to which this rule applies.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax details.
   */
  selector: string;
  /**
   * Metrics to update when the selected methods are called, and the associated
   * cost applied to each metric.
   *
   * The key of the map is the metric name, and the values are the amount
   * increased for the metric against which the quota limits are defined.
   * The value must not be negative.
   */
  metricCosts: { [key: string]: Long };
}

export interface MetricRule_MetricCostsEntry {
  key: string;
  value: Long;
}

/**
 * `QuotaLimit` defines a specific limit that applies over a specified duration
 * for a limit type. There can be at most one limit for a duration and limit
 * type combination defined within a `QuotaGroup`.
 */
export interface QuotaLimit {
  /**
   * Name of the quota limit.
   *
   * The name must be provided, and it must be unique within the service. The
   * name can only include alphanumeric characters as well as '-'.
   *
   * The maximum length of the limit name is 64 characters.
   */
  name: string;
  /**
   * Optional. User-visible, extended description for this quota limit.
   * Should be used only when more context is needed to understand this limit
   * than provided by the limit's display name (see: `display_name`).
   */
  description: string;
  /**
   * Default number of tokens that can be consumed during the specified
   * duration. This is the number of tokens assigned when a client
   * application developer activates the service for his/her project.
   *
   * Specifying a value of 0 will block all requests. This can be used if you
   * are provisioning quota to selected consumers and blocking others.
   * Similarly, a value of -1 will indicate an unlimited quota. No other
   * negative values are allowed.
   *
   * Used by group-based quotas only.
   */
  defaultLimit: Long;
  /**
   * Maximum number of tokens that can be consumed during the specified
   * duration. Client application developers can override the default limit up
   * to this maximum. If specified, this value cannot be set to a value less
   * than the default limit. If not specified, it is set to the default limit.
   *
   * To allow clients to apply overrides with no upper bound, set this to -1,
   * indicating unlimited maximum quota.
   *
   * Used by group-based quotas only.
   */
  maxLimit: Long;
  /**
   * Free tier value displayed in the Developers Console for this limit.
   * The free tier is the number of tokens that will be subtracted from the
   * billed amount when billing is enabled.
   * This field can only be set on a limit with duration "1d", in a billable
   * group; it is invalid on any other limit. If this field is not set, it
   * defaults to 0, indicating that there is no free tier for this service.
   *
   * Used by group-based quotas only.
   */
  freeTier: Long;
  /**
   * Duration of this limit in textual notation. Must be "100s" or "1d".
   *
   * Used by group-based quotas only.
   */
  duration: string;
  /**
   * The name of the metric this quota limit applies to. The quota limits with
   * the same metric will be checked together during runtime. The metric must be
   * defined within the service config.
   */
  metric: string;
  /**
   * Specify the unit of the quota limit. It uses the same syntax as
   * [Metric.unit][]. The supported unit kinds are determined by the quota
   * backend system.
   *
   * Here are some examples:
   * * "1/min/{project}" for quota per minute per project.
   *
   * Note: the order of unit components is insignificant.
   * The "1" at the beginning is required to follow the metric unit syntax.
   */
  unit: string;
  /**
   * Tiered limit values. You must specify this as a key:value pair, with an
   * integer value that is the maximum number of requests allowed for the
   * specified unit. Currently only STANDARD is supported.
   */
  values: { [key: string]: Long };
  /**
   * User-visible display name for this limit.
   * Optional. If not set, the UI will provide a default display name based on
   * the quota configuration. This field can be used to override the default
   * display name generated from the configuration.
   */
  displayName: string;
}

export interface QuotaLimit_ValuesEntry {
  key: string;
  value: Long;
}

function createBaseQuota(): Quota {
  return { limits: [], metricRules: [] };
}

export const Quota = {
  encode(message: Quota, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.limits) {
      QuotaLimit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.metricRules) {
      MetricRule.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Quota {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuota();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.limits.push(QuotaLimit.decode(reader, reader.uint32()));
          break;
        case 4:
          message.metricRules.push(MetricRule.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Quota {
    return {
      limits: Array.isArray(object?.limits)
        ? object.limits.map((e: any) => QuotaLimit.fromJSON(e))
        : [],
      metricRules: Array.isArray(object?.metricRules)
        ? object.metricRules.map((e: any) => MetricRule.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Quota): unknown {
    const obj: any = {};
    if (message.limits) {
      obj.limits = message.limits.map((e) =>
        e ? QuotaLimit.toJSON(e) : undefined
      );
    } else {
      obj.limits = [];
    }
    if (message.metricRules) {
      obj.metricRules = message.metricRules.map((e) =>
        e ? MetricRule.toJSON(e) : undefined
      );
    } else {
      obj.metricRules = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Quota>, I>>(object: I): Quota {
    const message = createBaseQuota();
    message.limits = object.limits?.map((e) => QuotaLimit.fromPartial(e)) || [];
    message.metricRules =
      object.metricRules?.map((e) => MetricRule.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMetricRule(): MetricRule {
  return { selector: "", metricCosts: {} };
}

export const MetricRule = {
  encode(
    message: MetricRule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    Object.entries(message.metricCosts).forEach(([key, value]) => {
      MetricRule_MetricCostsEntry.encode(
        { key: key as any, value },
        writer.uint32(18).fork()
      ).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MetricRule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selector = reader.string();
          break;
        case 2:
          const entry2 = MetricRule_MetricCostsEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry2.value !== undefined) {
            message.metricCosts[entry2.key] = entry2.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MetricRule {
    return {
      selector: isSet(object.selector) ? String(object.selector) : "",
      metricCosts: isObject(object.metricCosts)
        ? Object.entries(object.metricCosts).reduce<{ [key: string]: Long }>(
            (acc, [key, value]) => {
              acc[key] = Long.fromValue(value as Long | string);
              return acc;
            },
            {}
          )
        : {},
    };
  },

  toJSON(message: MetricRule): unknown {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    obj.metricCosts = {};
    if (message.metricCosts) {
      Object.entries(message.metricCosts).forEach(([k, v]) => {
        obj.metricCosts[k] = v.toString();
      });
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MetricRule>, I>>(
    object: I
  ): MetricRule {
    const message = createBaseMetricRule();
    message.selector = object.selector ?? "";
    message.metricCosts = Object.entries(object.metricCosts ?? {}).reduce<{
      [key: string]: Long;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Long.fromValue(value);
      }
      return acc;
    }, {});
    return message;
  },
};

function createBaseMetricRule_MetricCostsEntry(): MetricRule_MetricCostsEntry {
  return { key: "", value: Long.ZERO };
}

export const MetricRule_MetricCostsEntry = {
  encode(
    message: MetricRule_MetricCostsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MetricRule_MetricCostsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricRule_MetricCostsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MetricRule_MetricCostsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Long.fromString(object.value) : Long.ZERO,
    };
  },

  toJSON(message: MetricRule_MetricCostsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = (message.value || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MetricRule_MetricCostsEntry>, I>>(
    object: I
  ): MetricRule_MetricCostsEntry {
    const message = createBaseMetricRule_MetricCostsEntry();
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Long.fromValue(object.value)
        : Long.ZERO;
    return message;
  },
};

function createBaseQuotaLimit(): QuotaLimit {
  return {
    name: "",
    description: "",
    defaultLimit: Long.ZERO,
    maxLimit: Long.ZERO,
    freeTier: Long.ZERO,
    duration: "",
    metric: "",
    unit: "",
    values: {},
    displayName: "",
  };
}

export const QuotaLimit = {
  encode(
    message: QuotaLimit,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (!message.defaultLimit.isZero()) {
      writer.uint32(24).int64(message.defaultLimit);
    }
    if (!message.maxLimit.isZero()) {
      writer.uint32(32).int64(message.maxLimit);
    }
    if (!message.freeTier.isZero()) {
      writer.uint32(56).int64(message.freeTier);
    }
    if (message.duration !== "") {
      writer.uint32(42).string(message.duration);
    }
    if (message.metric !== "") {
      writer.uint32(66).string(message.metric);
    }
    if (message.unit !== "") {
      writer.uint32(74).string(message.unit);
    }
    Object.entries(message.values).forEach(([key, value]) => {
      QuotaLimit_ValuesEntry.encode(
        { key: key as any, value },
        writer.uint32(82).fork()
      ).ldelim();
    });
    if (message.displayName !== "") {
      writer.uint32(98).string(message.displayName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuotaLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.defaultLimit = reader.int64() as Long;
          break;
        case 4:
          message.maxLimit = reader.int64() as Long;
          break;
        case 7:
          message.freeTier = reader.int64() as Long;
          break;
        case 5:
          message.duration = reader.string();
          break;
        case 8:
          message.metric = reader.string();
          break;
        case 9:
          message.unit = reader.string();
          break;
        case 10:
          const entry10 = QuotaLimit_ValuesEntry.decode(
            reader,
            reader.uint32()
          );
          if (entry10.value !== undefined) {
            message.values[entry10.key] = entry10.value;
          }
          break;
        case 12:
          message.displayName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuotaLimit {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      defaultLimit: isSet(object.defaultLimit)
        ? Long.fromString(object.defaultLimit)
        : Long.ZERO,
      maxLimit: isSet(object.maxLimit)
        ? Long.fromString(object.maxLimit)
        : Long.ZERO,
      freeTier: isSet(object.freeTier)
        ? Long.fromString(object.freeTier)
        : Long.ZERO,
      duration: isSet(object.duration) ? String(object.duration) : "",
      metric: isSet(object.metric) ? String(object.metric) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      values: isObject(object.values)
        ? Object.entries(object.values).reduce<{ [key: string]: Long }>(
            (acc, [key, value]) => {
              acc[key] = Long.fromValue(value as Long | string);
              return acc;
            },
            {}
          )
        : {},
      displayName: isSet(object.displayName) ? String(object.displayName) : "",
    };
  },

  toJSON(message: QuotaLimit): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    message.defaultLimit !== undefined &&
      (obj.defaultLimit = (message.defaultLimit || Long.ZERO).toString());
    message.maxLimit !== undefined &&
      (obj.maxLimit = (message.maxLimit || Long.ZERO).toString());
    message.freeTier !== undefined &&
      (obj.freeTier = (message.freeTier || Long.ZERO).toString());
    message.duration !== undefined && (obj.duration = message.duration);
    message.metric !== undefined && (obj.metric = message.metric);
    message.unit !== undefined && (obj.unit = message.unit);
    obj.values = {};
    if (message.values) {
      Object.entries(message.values).forEach(([k, v]) => {
        obj.values[k] = v.toString();
      });
    }
    message.displayName !== undefined &&
      (obj.displayName = message.displayName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaLimit>, I>>(
    object: I
  ): QuotaLimit {
    const message = createBaseQuotaLimit();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.defaultLimit =
      object.defaultLimit !== undefined && object.defaultLimit !== null
        ? Long.fromValue(object.defaultLimit)
        : Long.ZERO;
    message.maxLimit =
      object.maxLimit !== undefined && object.maxLimit !== null
        ? Long.fromValue(object.maxLimit)
        : Long.ZERO;
    message.freeTier =
      object.freeTier !== undefined && object.freeTier !== null
        ? Long.fromValue(object.freeTier)
        : Long.ZERO;
    message.duration = object.duration ?? "";
    message.metric = object.metric ?? "";
    message.unit = object.unit ?? "";
    message.values = Object.entries(object.values ?? {}).reduce<{
      [key: string]: Long;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = Long.fromValue(value);
      }
      return acc;
    }, {});
    message.displayName = object.displayName ?? "";
    return message;
  },
};

function createBaseQuotaLimit_ValuesEntry(): QuotaLimit_ValuesEntry {
  return { key: "", value: Long.ZERO };
}

export const QuotaLimit_ValuesEntry = {
  encode(
    message: QuotaLimit_ValuesEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (!message.value.isZero()) {
      writer.uint32(16).int64(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuotaLimit_ValuesEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaLimit_ValuesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuotaLimit_ValuesEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Long.fromString(object.value) : Long.ZERO,
    };
  },

  toJSON(message: QuotaLimit_ValuesEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = (message.value || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaLimit_ValuesEntry>, I>>(
    object: I
  ): QuotaLimit_ValuesEntry {
    const message = createBaseQuotaLimit_ValuesEntry();
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? Long.fromValue(object.value)
        : Long.ZERO;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
