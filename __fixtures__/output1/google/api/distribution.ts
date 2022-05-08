import * as _m0 from "protobuf/minimal";
import { Long, isSet, Exact, DeepPartial, KeysOfUnion, Builtin, toTimestamp, fromTimestamp, fromJsonTimestamp } from "@osmonauts/helpers";
import { Timestamp } from "../protobuf/timestamp";
import { Any } from "../protobuf/any";
export interface Distribution {
  count: Long;
  mean: number;
  sumOfSquaredDeviation: number;
  range: Range;
  bucketOptions: BucketOptions;
  bucketCounts: Long[];
  exemplars: Exemplar[];
}

function createBaseDistribution(): Distribution {
  return {
    count: Long.UZERO,
    mean: 0,
    sumOfSquaredDeviation: 0,
    range: undefined,
    bucketOptions: undefined,
    bucketCounts: [],
    exemplars: []
  };
}

export const Distribution = {
  encode(message: Distribution, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.count.isZero()) {
      writer.uint32(8).int64(message.count);
    }

    if (message.mean !== 0) {
      writer.uint32(17).double(message.mean);
    }

    if (message.sumOfSquaredDeviation !== 0) {
      writer.uint32(25).double(message.sumOfSquaredDeviation);
    }

    if (message.range !== undefined) {
      Distribution_Range.encode(message.range, writer.uint32(34).fork()).ldelim();
    }

    if (message.bucketOptions !== undefined) {
      Distribution_BucketOptions.encode(message.bucketOptions, writer.uint32(50).fork()).ldelim();
    }

    writer.uint32(56).fork();

    for (const v of message.bucketCounts) {
      writer.int64(v);
    }

    writer.ldelim();

    for (const v of message.exemplars) {
      Distribution_Exemplar.encode(v!, writer.uint32(82).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.count = (reader.int64() as Long);
          break;

        case 2:
          message.mean = reader.double();
          break;

        case 3:
          message.sumOfSquaredDeviation = reader.double();
          break;

        case 4:
          message.range = Distribution_Range.decode(reader, reader.uint32());
          break;

        case 6:
          message.bucketOptions = Distribution_BucketOptions.decode(reader, reader.uint32());
          break;

        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.bucketCounts.push((reader.int64() as Long));
            }
          } else {
            message.bucketCounts.push((reader.int64() as Long));
          }

        case 10:
          message.exemplars.push(Distribution_Exemplar.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Distribution {
    return {
      count: isSet(object.count) ? Long.fromString(object.count) : Long.ZERO,
      mean: isSet(object.mean) ? Number(object.mean) : 0,
      sumOfSquaredDeviation: isSet(object.sumOfSquaredDeviation) ? Number(object.sumOfSquaredDeviation) : 0,
      range: isSet(object.range) ? Distribution_Range.fromJSON(object.range) : undefined,
      bucketOptions: isSet(object.bucketOptions) ? Distribution_BucketOptions.fromJSON(object.bucketOptions) : undefined,
      bucketCounts: Array.isArray(object?.bucketCounts) ? object.bucketCounts.map((e: any) => Long.fromString(e)) : [],
      exemplars: Array.isArray(object?.exemplars) ? object.exemplars.map((e: any) => Distribution_Exemplar.fromJSON(e)) : []
    };
  },

  toJSON(message: Distribution): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = (message.count || Long.ZERO).toString());
    message.mean !== undefined && (obj.mean = message.mean);
    message.sumOfSquaredDeviation !== undefined && (obj.sumOfSquaredDeviation = message.sumOfSquaredDeviation);
    message.range !== undefined && (obj.range = message.range ? Distribution_Range.toJSON(message.range) : undefined);
    message.bucketOptions !== undefined && (obj.bucketOptions = message.bucketOptions ? Distribution_BucketOptions.toJSON(message.bucketOptions) : undefined);

    if (message.bucketCounts) {
      obj.bucketCounts = message.bucketCounts.map(e => (e || Long.ZERO).toString());
    } else {
      obj.bucketCounts = [];
    }

    if (message.exemplars) {
      obj.exemplars = message.exemplars.map(e => e ? Distribution_Exemplar.toJSON(e) : undefined);
    } else {
      obj.exemplars = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Distribution>, I>>(object: I): Distribution {
    const message = createBaseDistribution();
    message.count = object.count !== undefined && object.count !== null ? Long.fromValue(object.count) : Long.ZERO;
    message.mean = object.mean ?? 0;
    message.sumOfSquaredDeviation = object.sumOfSquaredDeviation ?? 0;
    message.range = object.range !== undefined && object.range !== null ? Range.fromPartial(object.range) : undefined;
    message.bucketOptions = object.bucketOptions !== undefined && object.bucketOptions !== null ? BucketOptions.fromPartial(object.bucketOptions) : undefined;
    message.bucketCounts = object.bucketCounts?.map(e => Long.fromValue(e)) || [];
    message.exemplars = object.exemplars?.map(e => Exemplar.fromPartial(e)) || [];
    return message;
  }

};
export interface Distribution_Range {
  min: number;
  max: number;
}

function createBaseDistribution_Range(): Distribution_Range {
  return {
    min: 0,
    max: 0
  };
}

export const Distribution_Range = {
  encode(message: Distribution_Range, writer = _m0.Writer.create()): _m0.Writer {
    if (message.min !== 0) {
      writer.uint32(9).double(message.min);
    }

    if (message.max !== 0) {
      writer.uint32(17).double(message.max);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_Range {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_Range();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.min = reader.double();
          break;

        case 2:
          message.max = reader.double();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Distribution_Range {
    return {
      min: isSet(object.min) ? Number(object.min) : 0,
      max: isSet(object.max) ? Number(object.max) : 0
    };
  },

  toJSON(message: Distribution_Range): unknown {
    const obj: any = {};
    message.min !== undefined && (obj.min = message.min);
    message.max !== undefined && (obj.max = message.max);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Distribution_Range>, I>>(object: I): Distribution_Range {
    const message = createBaseDistribution_Range();
    message.min = object.min ?? 0;
    message.max = object.max ?? 0;
    return message;
  }

};
export interface Distribution_BucketOptions {
  linearBuckets?: Linear;
  exponentialBuckets?: Exponential;
  explicitBuckets?: Explicit;
}

function createBaseDistribution_BucketOptions(): Distribution_BucketOptions {
  return {
    linearBuckets: undefined,
    exponentialBuckets: undefined,
    explicitBuckets: undefined
  };
}

export const Distribution_BucketOptions = {
  encode(message: Distribution_BucketOptions, writer = _m0.Writer.create()): _m0.Writer {
    if (message.linearBuckets !== undefined) {
      BucketOptions_Distribution_Linear.encode(message.linearBuckets, writer.uint32(10).fork()).ldelim();
    }

    if (message.exponentialBuckets !== undefined) {
      BucketOptions_Distribution_Exponential.encode(message.exponentialBuckets, writer.uint32(18).fork()).ldelim();
    }

    if (message.explicitBuckets !== undefined) {
      BucketOptions_Distribution_Explicit.encode(message.explicitBuckets, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_BucketOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_BucketOptions();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.linearBuckets = BucketOptions_Distribution_Linear.decode(reader, reader.uint32());
          break;

        case 2:
          message.exponentialBuckets = BucketOptions_Distribution_Exponential.decode(reader, reader.uint32());
          break;

        case 3:
          message.explicitBuckets = BucketOptions_Distribution_Explicit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Distribution_BucketOptions {
    return {
      linearBuckets: isSet(object.linearBuckets) ? BucketOptions_Distribution_Linear.fromJSON(object.linearBuckets) : undefined,
      exponentialBuckets: isSet(object.exponentialBuckets) ? BucketOptions_Distribution_Exponential.fromJSON(object.exponentialBuckets) : undefined,
      explicitBuckets: isSet(object.explicitBuckets) ? BucketOptions_Distribution_Explicit.fromJSON(object.explicitBuckets) : undefined
    };
  },

  toJSON(message: Distribution_BucketOptions): unknown {
    const obj: any = {};
    message.linearBuckets !== undefined && (obj.linearBuckets = message.linearBuckets ? BucketOptions_Distribution_Linear.toJSON(message.linearBuckets) : undefined);
    message.exponentialBuckets !== undefined && (obj.exponentialBuckets = message.exponentialBuckets ? BucketOptions_Distribution_Exponential.toJSON(message.exponentialBuckets) : undefined);
    message.explicitBuckets !== undefined && (obj.explicitBuckets = message.explicitBuckets ? BucketOptions_Distribution_Explicit.toJSON(message.explicitBuckets) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Distribution_BucketOptions>, I>>(object: I): Distribution_BucketOptions {
    const message = createBaseDistribution_BucketOptions();
    message.linearBuckets = object.linearBuckets !== undefined && object.linearBuckets !== null ? Linear.fromPartial(object.linearBuckets) : undefined;
    message.exponentialBuckets = object.exponentialBuckets !== undefined && object.exponentialBuckets !== null ? Exponential.fromPartial(object.exponentialBuckets) : undefined;
    message.explicitBuckets = object.explicitBuckets !== undefined && object.explicitBuckets !== null ? Explicit.fromPartial(object.explicitBuckets) : undefined;
    return message;
  }

};
export interface Linear {
  numFiniteBuckets: number;
  width: number;
  offset: number;
}

function createBaseLinear(): Linear {
  return {
    numFiniteBuckets: 0,
    width: 0,
    offset: 0
  };
}

export const Linear = {
  encode(message: Linear, writer = _m0.Writer.create()): _m0.Writer {
    if (message.numFiniteBuckets !== 0) {
      writer.uint32(8).int32(message.numFiniteBuckets);
    }

    if (message.width !== 0) {
      writer.uint32(17).double(message.width);
    }

    if (message.offset !== 0) {
      writer.uint32(25).double(message.offset);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Linear {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinear();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.numFiniteBuckets = reader.int32();
          break;

        case 2:
          message.width = reader.double();
          break;

        case 3:
          message.offset = reader.double();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Linear {
    return {
      numFiniteBuckets: isSet(object.numFiniteBuckets) ? Number(object.numFiniteBuckets) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0
    };
  },

  toJSON(message: Linear): unknown {
    const obj: any = {};
    message.numFiniteBuckets !== undefined && (obj.numFiniteBuckets = Math.round(message.numFiniteBuckets));
    message.width !== undefined && (obj.width = message.width);
    message.offset !== undefined && (obj.offset = message.offset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Linear>, I>>(object: I): Linear {
    const message = createBaseLinear();
    message.numFiniteBuckets = object.numFiniteBuckets ?? 0;
    message.width = object.width ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  }

};
export interface Exponential {
  numFiniteBuckets: number;
  growthFactor: number;
  scale: number;
}

function createBaseExponential(): Exponential {
  return {
    numFiniteBuckets: 0,
    growthFactor: 0,
    scale: 0
  };
}

export const Exponential = {
  encode(message: Exponential, writer = _m0.Writer.create()): _m0.Writer {
    if (message.numFiniteBuckets !== 0) {
      writer.uint32(8).int32(message.numFiniteBuckets);
    }

    if (message.growthFactor !== 0) {
      writer.uint32(17).double(message.growthFactor);
    }

    if (message.scale !== 0) {
      writer.uint32(25).double(message.scale);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Exponential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExponential();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.numFiniteBuckets = reader.int32();
          break;

        case 2:
          message.growthFactor = reader.double();
          break;

        case 3:
          message.scale = reader.double();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Exponential {
    return {
      numFiniteBuckets: isSet(object.numFiniteBuckets) ? Number(object.numFiniteBuckets) : 0,
      growthFactor: isSet(object.growthFactor) ? Number(object.growthFactor) : 0,
      scale: isSet(object.scale) ? Number(object.scale) : 0
    };
  },

  toJSON(message: Exponential): unknown {
    const obj: any = {};
    message.numFiniteBuckets !== undefined && (obj.numFiniteBuckets = Math.round(message.numFiniteBuckets));
    message.growthFactor !== undefined && (obj.growthFactor = message.growthFactor);
    message.scale !== undefined && (obj.scale = message.scale);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Exponential>, I>>(object: I): Exponential {
    const message = createBaseExponential();
    message.numFiniteBuckets = object.numFiniteBuckets ?? 0;
    message.growthFactor = object.growthFactor ?? 0;
    message.scale = object.scale ?? 0;
    return message;
  }

};
export interface Explicit {
  bounds: number[];
}

function createBaseExplicit(): Explicit {
  return {
    bounds: []
  };
}

export const Explicit = {
  encode(message: Explicit, writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(9).fork();

    for (const v of message.bounds) {
      writer.double(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Explicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExplicit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.bounds.push(reader.double());
            }
          } else {
            message.bounds.push(reader.double());
          }

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Explicit {
    return {
      bounds: Array.isArray(object?.bounds) ? object.bounds.map((e: any) => Number(e)) : []
    };
  },

  toJSON(message: Explicit): unknown {
    const obj: any = {};

    if (message.bounds) {
      obj.bounds = message.bounds.map(e => e);
    } else {
      obj.bounds = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Explicit>, I>>(object: I): Explicit {
    const message = createBaseExplicit();
    message.bounds = object.bounds?.map(e => e) || [];
    return message;
  }

};
export interface Distribution_Exemplar {
  value: number;
  timestamp: Date;
  attachments: Any[];
}

function createBaseDistribution_Exemplar(): Distribution_Exemplar {
  return {
    value: 0,
    timestamp: undefined,
    attachments: []
  };
}

export const Distribution_Exemplar = {
  encode(message: Distribution_Exemplar, writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }

    if (message.timestamp !== undefined) Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();

    for (const v of message.attachments) {
      Any.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_Exemplar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_Exemplar();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.value = reader.double();
          break;

        case 2:
          message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 3:
          message.attachments.push(Any.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Distribution_Exemplar {
    return {
      value: isSet(object.value) ? Number(object.value) : 0,
      timestamp: isSet(object.timestamp) ? fromJsonTimestamp(object.timestamp) : undefined,
      attachments: Array.isArray(object?.attachments) ? object.attachments.map((e: any) => Any.fromJSON(e)) : []
    };
  },

  toJSON(message: Distribution_Exemplar): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());

    if (message.attachments) {
      obj.attachments = message.attachments.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.attachments = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Distribution_Exemplar>, I>>(object: I): Distribution_Exemplar {
    const message = createBaseDistribution_Exemplar();
    message.value = object.value ?? 0;
    message.timestamp = object.timestamp ?? undefined;
    message.attachments = object.attachments?.map(e => Any.fromPartial(e)) || [];
    return message;
  }

};