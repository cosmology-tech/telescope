import { _m0 } from "protobuf/minimal";
import { Long, isSet } from "@osmonauts/helpers";
export interface Quota {
  limits: QuotaLimit[];
  metricRules: MetricRule[];
}

function createBaseQuota(): Quota {
  return {
    limits: [],
    metricRules: []
  };
}

export const Quota = {
  encode(message: Quota, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.limits) {
      QuotaLimit.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    for (const v of message.metricRules) {
      MetricRule.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): Quota {
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
      limits: Array.isArray(object?.limits) ? object.limits.map((e: any) => QuotaLimit.fromJSON(e)) : [],
      metricRules: Array.isArray(object?.metricRules) ? object.metricRules.map((e: any) => MetricRule.fromJSON(e)) : []
    };
  },

  toJSON(message: Quota): unknown {
    const obj: any = {};

    if (message.limits) {
      obj.limits = message.limits.map(e => e ? QuotaLimit.toJSON(e) : undefined);
    } else {
      obj.limits = [];
    }

    if (message.metricRules) {
      obj.metricRules = message.metricRules.map(e => e ? MetricRule.toJSON(e) : undefined);
    } else {
      obj.metricRules = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Quota>, I>>(object: I): Quota {
    const message = createBaseQuota();
    message.limits = object.limits?.map(e => QuotaLimit.fromPartial(e)) || [];
    message.metricRules = object.metricRules?.map(e => MetricRule.fromPartial(e)) || [];
    return message;
  }

};
export interface MetricRule_Int64MapEntry {
  key: string;
  value: Long;
}

function createBaseMetricRule_Int64MapEntry(): MetricRule_Int64MapEntry {
  return {
    key: "",
    value: Long.UZERO
  };
}

export const MetricRule_Int64MapEntry = {
  encode(message: MetricRule_Int64MapEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (!message.value.isZero()) {
      writer.uint32(16).int64(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): MetricRule_Int64MapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetricRule_Int64MapEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MetricRule_Int64MapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Long.fromString(object.value) : Long.ZERO
    };
  },

  toJSON(message: MetricRule_Int64MapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MetricRule_Int64MapEntry>, I>>(object: I): MetricRule_Int64MapEntry {
    const message = createBaseMetricRule_Int64MapEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.ZERO;
    return message;
  }

};
export interface MetricRule {
  selector: string;
  metricCosts: {
    [key: string]: Long;
  };
}

function createBaseMetricRule(): MetricRule {
  return {
    selector: "",
    metricCosts: Long.UZERO
  };
}

export const MetricRule = {
  encode(message: MetricRule, writer = _m0.Writer.create()): _m0.Writer {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }

    Object.entries(message.metricCosts).forEach(([key, value]) => {
      MetricRule_MetricCostsMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(16).fork()).ldelim();
    });
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): MetricRule {
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
          const entry2 = MetricRule_MetricCostsMapEntry.decode(reader, reader.uint32());

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
      metricCosts: isObject(object.metricCosts) ? Object.entries(object.metricCosts).reduce<{
        [key: string]: int64;
      }>((acc, [key, value]) => {
        acc[key] = int64.fromJSON(value);
        return acc;
      }, {}) : {}
    };
  },

  toJSON(message: MetricRule): unknown {
    const obj: any = {};
    message.selector !== undefined && (obj.selector = message.selector);
    obj.metricCosts = {};

    if (message.metricCosts) {
      Object.entries(message.metricCosts).forEach(([k, v]) => {
        obj.metricCosts[k] = int64.toJSON(v);
      });
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MetricRule>, I>>(object: I): MetricRule {
    const message = createBaseMetricRule();
    message.selector = object.selector ?? "";
    message.metricCosts = Object.entries(object.metricCosts ?? {}).reduce<{
      [key: string]: int64;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = int64.fromPartial(value);
      }

      return acc;
    }, {});
    return message;
  }

};
export interface QuotaLimit_Int64MapEntry {
  key: string;
  value: Long;
}

function createBaseQuotaLimit_Int64MapEntry(): QuotaLimit_Int64MapEntry {
  return {
    key: "",
    value: Long.UZERO
  };
}

export const QuotaLimit_Int64MapEntry = {
  encode(message: QuotaLimit_Int64MapEntry, writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }

    if (!message.value.isZero()) {
      writer.uint32(16).int64(message.value);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QuotaLimit_Int64MapEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuotaLimit_Int64MapEntry();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;

        case 2:
          message.value = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QuotaLimit_Int64MapEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? Long.fromString(object.value) : Long.ZERO
    };
  },

  toJSON(message: QuotaLimit_Int64MapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = (message.value || Long.ZERO).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaLimit_Int64MapEntry>, I>>(object: I): QuotaLimit_Int64MapEntry {
    const message = createBaseQuotaLimit_Int64MapEntry();
    message.key = object.key ?? "";
    message.value = object.value !== undefined && object.value !== null ? Long.fromValue(object.value) : Long.ZERO;
    return message;
  }

};
export interface QuotaLimit {
  name: string;
  description: string;
  defaultLimit: Long;
  maxLimit: Long;
  freeTier: Long;
  duration: string;
  metric: string;
  unit: string;
  values: {
    [key: string]: Long;
  };
  displayName: string;
}

function createBaseQuotaLimit(): QuotaLimit {
  return {
    name: "",
    description: "",
    defaultLimit: Long.UZERO,
    maxLimit: Long.UZERO,
    freeTier: Long.UZERO,
    duration: "",
    metric: "",
    unit: "",
    values: Long.UZERO,
    displayName: ""
  };
}

export const QuotaLimit = {
  encode(message: QuotaLimit, writer = _m0.Writer.create()): _m0.Writer {
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
      QuotaLimit_ValuesMapEntry.encode({
        key: (key as any),
        value
      }, writer.uint32(80).fork()).ldelim();
    });

    if (message.displayName !== "") {
      writer.uint32(98).string(message.displayName);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): QuotaLimit {
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
          message.defaultLimit = (reader.int64() as Long);
          break;

        case 4:
          message.maxLimit = (reader.int64() as Long);
          break;

        case 7:
          message.freeTier = (reader.int64() as Long);
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
          const entry10 = QuotaLimit_ValuesMapEntry.decode(reader, reader.uint32());

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
      defaultLimit: isSet(object.defaultLimit) ? Long.fromString(object.defaultLimit) : Long.ZERO,
      maxLimit: isSet(object.maxLimit) ? Long.fromString(object.maxLimit) : Long.ZERO,
      freeTier: isSet(object.freeTier) ? Long.fromString(object.freeTier) : Long.ZERO,
      duration: isSet(object.duration) ? String(object.duration) : "",
      metric: isSet(object.metric) ? String(object.metric) : "",
      unit: isSet(object.unit) ? String(object.unit) : "",
      values: isObject(object.values) ? Object.entries(object.values).reduce<{
        [key: string]: int64;
      }>((acc, [key, value]) => {
        acc[key] = int64.fromJSON(value);
        return acc;
      }, {}) : {},
      displayName: isSet(object.displayName) ? String(object.displayName) : ""
    };
  },

  toJSON(message: QuotaLimit): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.defaultLimit !== undefined && (obj.defaultLimit = (message.defaultLimit || Long.ZERO).toString());
    message.maxLimit !== undefined && (obj.maxLimit = (message.maxLimit || Long.ZERO).toString());
    message.freeTier !== undefined && (obj.freeTier = (message.freeTier || Long.ZERO).toString());
    message.duration !== undefined && (obj.duration = message.duration);
    message.metric !== undefined && (obj.metric = message.metric);
    message.unit !== undefined && (obj.unit = message.unit);
    obj.values = {};

    if (message.values) {
      Object.entries(message.values).forEach(([k, v]) => {
        obj.values[k] = int64.toJSON(v);
      });
    }

    message.displayName !== undefined && (obj.displayName = message.displayName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuotaLimit>, I>>(object: I): QuotaLimit {
    const message = createBaseQuotaLimit();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.defaultLimit = object.defaultLimit !== undefined && object.defaultLimit !== null ? Long.fromValue(object.defaultLimit) : Long.ZERO;
    message.maxLimit = object.maxLimit !== undefined && object.maxLimit !== null ? Long.fromValue(object.maxLimit) : Long.ZERO;
    message.freeTier = object.freeTier !== undefined && object.freeTier !== null ? Long.fromValue(object.freeTier) : Long.ZERO;
    message.duration = object.duration ?? "";
    message.metric = object.metric ?? "";
    message.unit = object.unit ?? "";
    message.values = Object.entries(object.values ?? {}).reduce<{
      [key: string]: int64;
    }>((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = int64.fromPartial(value);
      }

      return acc;
    }, {});
    message.displayName = object.displayName ?? "";
    return message;
  }

};