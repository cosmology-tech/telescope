import { Timestamp } from "../protobuf/timestamp";
import { Any } from "../protobuf/any";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, Exact, DeepPartial, toTimestamp, fromTimestamp, fromJsonTimestamp } from "@osmonauts/helpers";

/**
 * `Distribution` contains summary statistics for a population of values. It
 * optionally contains a histogram representing the distribution of those values
 * across a set of buckets.
 * 
 * The summary statistics are the count, mean, sum of the squared deviation from
 * the mean, the minimum, and the maximum of the set of population of values.
 * The histogram is based on a sequence of buckets and gives a count of values
 * that fall into each bucket. The boundaries of the buckets are given either
 * explicitly or by formulas for buckets of fixed or exponentially increasing
 * widths.
 * 
 * Although it is not forbidden, it is generally a bad idea to include
 * non-finite values (infinities or NaNs) in the population of values, as this
 * will render the `mean` and `sum_of_squared_deviation` fields meaningless.
 */
export interface Distribution {
  /**
   * The number of values in the population. Must be non-negative. This value
   * must equal the sum of the values in `bucket_counts` if a histogram is
   * provided.
   */
  count: Long;

  /**
   * The arithmetic mean of the values in the population. If `count` is zero
   * then this field must be zero.
   */
  mean: number;

  /**
   * The sum of squared deviations from the mean of the values in the
   * population. For values x_i this is:
   * 
   * Sum[i=1..n]((x_i - mean)^2)
   * 
   * Knuth, "The Art of Computer Programming", Vol. 2, page 232, 3rd edition
   * describes Welford's method for accumulating this sum in one pass.
   * 
   * If `count` is zero then this field must be zero.
   */
  sumOfSquaredDeviation: number;

  /**
   * If specified, contains the range of the population values. The field
   * must not be present if the `count` is zero.
   */
  range: Distribution_Range;

  /**
   * Defines the histogram bucket boundaries. If the distribution does not
   * contain a histogram, then omit this field.
   */
  bucketOptions: Distribution_BucketOptions;

  /**
   * The number of values in each bucket of the histogram, as described in
   * `bucket_options`. If the distribution does not have a histogram, then omit
   * this field. If there is a histogram, then the sum of the values in
   * `bucket_counts` must equal the value in the `count` field of the
   * distribution.
   * 
   * If present, `bucket_counts` should contain N values, where N is the number
   * of buckets specified in `bucket_options`. If you supply fewer than N
   * values, the remaining values are assumed to be 0.
   * 
   * The order of the values in `bucket_counts` follows the bucket numbering
   * schemes described for the three bucket types. The first value must be the
   * count for the underflow bucket (number 0). The next N-2 values are the
   * counts for the finite buckets (number 1 through N-2). The N'th value in
   * `bucket_counts` is the count for the overflow bucket (number N-1).
   */
  bucketCounts: Long[];

  /** Must be in increasing order of `value` field. */
  exemplars: Distribution_Exemplar[];
}

/** The range of the population values. */
export interface Distribution_Range {
  /** The minimum of the population values. */
  min: number;

  /** The maximum of the population values. */
  max: number;
}

/**
 * `BucketOptions` describes the bucket boundaries used to create a histogram
 * for the distribution. The buckets can be in a linear sequence, an
 * exponential sequence, or each bucket can be specified explicitly.
 * `BucketOptions` does not include the number of values in each bucket.
 * 
 * A bucket has an inclusive lower bound and exclusive upper bound for the
 * values that are counted for that bucket. The upper bound of a bucket must
 * be strictly greater than the lower bound. The sequence of N buckets for a
 * distribution consists of an underflow bucket (number 0), zero or more
 * finite buckets (number 1 through N - 2) and an overflow bucket (number N -
 * 1). The buckets are contiguous: the lower bound of bucket i (i > 0) is the
 * same as the upper bound of bucket i - 1. The buckets span the whole range
 * of finite values: lower bound of the underflow bucket is -infinity and the
 * upper bound of the overflow bucket is +infinity. The finite buckets are
 * so-called because both bounds are finite.
 */
export interface Distribution_BucketOptions {
  /** The linear bucket. */
  linearBuckets?: Distribution_BucketOptions_Linear;

  /** The exponential buckets. */
  exponentialBuckets?: Distribution_BucketOptions_Exponential;

  /** The explicit buckets. */
  explicitBuckets?: Distribution_BucketOptions_Explicit;
}

/**
 * Specifies a linear sequence of buckets that all have the same width
 * (except overflow and underflow). Each bucket represents a constant
 * absolute uncertainty on the specific value in the bucket.
 * 
 * There are `num_finite_buckets + 2` (= N) buckets. Bucket `i` has the
 * following boundaries:
 * 
 * Upper bound (0 <= i < N-1):     offset + (width * i).
 * Lower bound (1 <= i < N):       offset + (width * (i - 1)).
 */
export interface Distribution_BucketOptions_Linear {
  /** Must be greater than 0. */
  numFiniteBuckets: number;

  /** Must be greater than 0. */
  width: number;

  /** Lower bound of the first bucket. */
  offset: number;
}

/**
 * Specifies an exponential sequence of buckets that have a width that is
 * proportional to the value of the lower bound. Each bucket represents a
 * constant relative uncertainty on a specific value in the bucket.
 * 
 * There are `num_finite_buckets + 2` (= N) buckets. Bucket `i` has the
 * following boundaries:
 * 
 * Upper bound (0 <= i < N-1):     scale * (growth_factor ^ i).
 * Lower bound (1 <= i < N):       scale * (growth_factor ^ (i - 1)).
 */
export interface Distribution_BucketOptions_Exponential {
  /** Must be greater than 0. */
  numFiniteBuckets: number;

  /** Must be greater than 1. */
  growthFactor: number;

  /** Must be greater than 0. */
  scale: number;
}

/**
 * Specifies a set of buckets with arbitrary widths.
 * 
 * There are `size(bounds) + 1` (= N) buckets. Bucket `i` has the following
 * boundaries:
 * 
 * Upper bound (0 <= i < N-1):     bounds[i]
 * Lower bound (1 <= i < N);       bounds[i - 1]
 * 
 * The `bounds` field must contain at least one element. If `bounds` has
 * only one element, then there are no finite buckets, and that single
 * element is the common boundary of the overflow and underflow buckets.
 */
export interface Distribution_BucketOptions_Explicit {
  /** The values must be monotonically increasing. */
  bounds: number[];
}

/**
 * Exemplars are example points that may be used to annotate aggregated
 * distribution values. They are metadata that gives information about a
 * particular value added to a Distribution bucket, such as a trace ID that
 * was active when a value was added. They may contain further information,
 * such as a example values and timestamps, origin, etc.
 */
export interface Distribution_Exemplar {
  /**
   * Value of the exemplar point. This value determines to which bucket the
   * exemplar belongs.
   */
  value: number;

  /** The observation (sampling) time of the above value. */
  timestamp: Date;

  /**
   * Contextual information about the example value. Examples are:
   * 
   * Trace: type.googleapis.com/google.monitoring.v3.SpanContext
   * 
   * Literal string: type.googleapis.com/google.protobuf.StringValue
   * 
   * Labels dropped during aggregation:
   * type.googleapis.com/google.monitoring.v3.DroppedLabels
   * 
   * There may be only a single attachment of any given message type in a
   * single exemplar, and this is enforced by the system.
   */
  attachments: Any[];
}

function createBaseDistribution(): Distribution {
  return {
    count: Long.ZERO,
    mean: 0,
    sumOfSquaredDeviation: 0,
    range: undefined,
    bucketOptions: undefined,
    bucketCounts: [],
    exemplars: []
  };
}

export const Distribution = {
  encode(message: Distribution, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

    writer.uint32(58).fork();

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

          break;

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
    message.range = object.range !== undefined && object.range !== null ? Distribution_Range.fromPartial(object.range) : undefined;
    message.bucketOptions = object.bucketOptions !== undefined && object.bucketOptions !== null ? Distribution_BucketOptions.fromPartial(object.bucketOptions) : undefined;
    message.bucketCounts = object.bucketCounts?.map(e => Long.fromValue(e)) || [];
    message.exemplars = object.exemplars?.map(e => Distribution_Exemplar.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDistribution_Range(): Distribution_Range {
  return {
    min: 0,
    max: 0
  };
}

export const Distribution_Range = {
  encode(message: Distribution_Range, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

function createBaseDistribution_BucketOptions(): Distribution_BucketOptions {
  return {
    linearBuckets: undefined,
    exponentialBuckets: undefined,
    explicitBuckets: undefined
  };
}

export const Distribution_BucketOptions = {
  encode(message: Distribution_BucketOptions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.linearBuckets !== undefined) {
      Distribution_BucketOptions_Linear.encode(message.linearBuckets, writer.uint32(10).fork()).ldelim();
    }

    if (message.exponentialBuckets !== undefined) {
      Distribution_BucketOptions_Exponential.encode(message.exponentialBuckets, writer.uint32(18).fork()).ldelim();
    }

    if (message.explicitBuckets !== undefined) {
      Distribution_BucketOptions_Explicit.encode(message.explicitBuckets, writer.uint32(26).fork()).ldelim();
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
          message.linearBuckets = Distribution_BucketOptions_Linear.decode(reader, reader.uint32());
          break;

        case 2:
          message.exponentialBuckets = Distribution_BucketOptions_Exponential.decode(reader, reader.uint32());
          break;

        case 3:
          message.explicitBuckets = Distribution_BucketOptions_Explicit.decode(reader, reader.uint32());
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
      linearBuckets: isSet(object.linearBuckets) ? Distribution_BucketOptions_Linear.fromJSON(object.linearBuckets) : undefined,
      exponentialBuckets: isSet(object.exponentialBuckets) ? Distribution_BucketOptions_Exponential.fromJSON(object.exponentialBuckets) : undefined,
      explicitBuckets: isSet(object.explicitBuckets) ? Distribution_BucketOptions_Explicit.fromJSON(object.explicitBuckets) : undefined
    };
  },

  toJSON(message: Distribution_BucketOptions): unknown {
    const obj: any = {};
    message.linearBuckets !== undefined && (obj.linearBuckets = message.linearBuckets ? Distribution_BucketOptions_Linear.toJSON(message.linearBuckets) : undefined);
    message.exponentialBuckets !== undefined && (obj.exponentialBuckets = message.exponentialBuckets ? Distribution_BucketOptions_Exponential.toJSON(message.exponentialBuckets) : undefined);
    message.explicitBuckets !== undefined && (obj.explicitBuckets = message.explicitBuckets ? Distribution_BucketOptions_Explicit.toJSON(message.explicitBuckets) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Distribution_BucketOptions>, I>>(object: I): Distribution_BucketOptions {
    const message = createBaseDistribution_BucketOptions();
    message.linearBuckets = object.linearBuckets !== undefined && object.linearBuckets !== null ? Distribution_BucketOptions_Linear.fromPartial(object.linearBuckets) : undefined;
    message.exponentialBuckets = object.exponentialBuckets !== undefined && object.exponentialBuckets !== null ? Distribution_BucketOptions_Exponential.fromPartial(object.exponentialBuckets) : undefined;
    message.explicitBuckets = object.explicitBuckets !== undefined && object.explicitBuckets !== null ? Distribution_BucketOptions_Explicit.fromPartial(object.explicitBuckets) : undefined;
    return message;
  }

};

function createBaseDistribution_BucketOptions_Linear(): Distribution_BucketOptions_Linear {
  return {
    numFiniteBuckets: 0,
    width: 0,
    offset: 0
  };
}

export const Distribution_BucketOptions_Linear = {
  encode(message: Distribution_BucketOptions_Linear, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_BucketOptions_Linear {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_BucketOptions_Linear();

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

  fromJSON(object: any): Distribution_BucketOptions_Linear {
    return {
      numFiniteBuckets: isSet(object.numFiniteBuckets) ? Number(object.numFiniteBuckets) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0
    };
  },

  toJSON(message: Distribution_BucketOptions_Linear): unknown {
    const obj: any = {};
    message.numFiniteBuckets !== undefined && (obj.numFiniteBuckets = Math.round(message.numFiniteBuckets));
    message.width !== undefined && (obj.width = message.width);
    message.offset !== undefined && (obj.offset = message.offset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Distribution_BucketOptions_Linear>, I>>(object: I): Distribution_BucketOptions_Linear {
    const message = createBaseDistribution_BucketOptions_Linear();
    message.numFiniteBuckets = object.numFiniteBuckets ?? 0;
    message.width = object.width ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  }

};

function createBaseDistribution_BucketOptions_Exponential(): Distribution_BucketOptions_Exponential {
  return {
    numFiniteBuckets: 0,
    growthFactor: 0,
    scale: 0
  };
}

export const Distribution_BucketOptions_Exponential = {
  encode(message: Distribution_BucketOptions_Exponential, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_BucketOptions_Exponential {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_BucketOptions_Exponential();

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

  fromJSON(object: any): Distribution_BucketOptions_Exponential {
    return {
      numFiniteBuckets: isSet(object.numFiniteBuckets) ? Number(object.numFiniteBuckets) : 0,
      growthFactor: isSet(object.growthFactor) ? Number(object.growthFactor) : 0,
      scale: isSet(object.scale) ? Number(object.scale) : 0
    };
  },

  toJSON(message: Distribution_BucketOptions_Exponential): unknown {
    const obj: any = {};
    message.numFiniteBuckets !== undefined && (obj.numFiniteBuckets = Math.round(message.numFiniteBuckets));
    message.growthFactor !== undefined && (obj.growthFactor = message.growthFactor);
    message.scale !== undefined && (obj.scale = message.scale);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Distribution_BucketOptions_Exponential>, I>>(object: I): Distribution_BucketOptions_Exponential {
    const message = createBaseDistribution_BucketOptions_Exponential();
    message.numFiniteBuckets = object.numFiniteBuckets ?? 0;
    message.growthFactor = object.growthFactor ?? 0;
    message.scale = object.scale ?? 0;
    return message;
  }

};

function createBaseDistribution_BucketOptions_Explicit(): Distribution_BucketOptions_Explicit {
  return {
    bounds: []
  };
}

export const Distribution_BucketOptions_Explicit = {
  encode(message: Distribution_BucketOptions_Explicit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.bounds) {
      writer.double(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_BucketOptions_Explicit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_BucketOptions_Explicit();

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

          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Distribution_BucketOptions_Explicit {
    return {
      bounds: Array.isArray(object?.bounds) ? object.bounds.map((e: any) => Number(e)) : []
    };
  },

  toJSON(message: Distribution_BucketOptions_Explicit): unknown {
    const obj: any = {};

    if (message.bounds) {
      obj.bounds = message.bounds.map(e => e);
    } else {
      obj.bounds = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Distribution_BucketOptions_Explicit>, I>>(object: I): Distribution_BucketOptions_Explicit {
    const message = createBaseDistribution_BucketOptions_Explicit();
    message.bounds = object.bounds?.map(e => e) || [];
    return message;
  }

};

function createBaseDistribution_Exemplar(): Distribution_Exemplar {
  return {
    value: 0,
    timestamp: undefined,
    attachments: []
  };
}

export const Distribution_Exemplar = {
  encode(message: Distribution_Exemplar, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== 0) {
      writer.uint32(9).double(message.value);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
    }

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