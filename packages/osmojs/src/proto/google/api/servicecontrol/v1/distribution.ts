import { Distribution_Exemplar } from "../../distribution";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, Exact, DeepPartial } from "@osmonauts/helpers";

/**
 * Distribution represents a frequency distribution of double-valued sample
 * points. It contains the size of the population of sample points plus
 * additional optional information:
 * 
 * * the arithmetic mean of the samples
 * * the minimum and maximum of the samples
 * * the sum-squared-deviation of the samples, used to compute variance
 * * a histogram of the values of the sample points
 */
export interface Distribution {
  /** The total number of samples in the distribution. Must be >= 0. */
  count: Long;

  /**
   * The arithmetic mean of the samples in the distribution. If `count` is
   * zero then this field must be zero.
   */
  mean: number;

  /** The minimum of the population of values. Ignored if `count` is zero. */
  minimum: number;

  /** The maximum of the population of values. Ignored if `count` is zero. */
  maximum: number;

  /**
   * The sum of squared deviations from the mean:
   * Sum[i=1..count]((x_i - mean)^2)
   * where each x_i is a sample values. If `count` is zero then this field
   * must be zero, otherwise validation of the request fails.
   */
  sumOfSquaredDeviation: number;

  /**
   * The number of samples in each histogram bucket. `bucket_counts` are
   * optional. If present, they must sum to the `count` value.
   * 
   * The buckets are defined below in `bucket_option`. There are N buckets.
   * `bucket_counts[0]` is the number of samples in the underflow bucket.
   * `bucket_counts[1]` to `bucket_counts[N-1]` are the numbers of samples
   * in each of the finite buckets. And `bucket_counts[N] is the number
   * of samples in the overflow bucket. See the comments of `bucket_option`
   * below for more details.
   * 
   * Any suffix of trailing zeros may be omitted.
   */
  bucketCounts: Long[];

  /** Buckets with constant width. */
  linearBuckets?: Distribution_LinearBuckets;

  /** Buckets with exponentially growing width. */
  exponentialBuckets?: Distribution_ExponentialBuckets;

  /** Buckets with arbitrary user-provided width. */
  explicitBuckets?: Distribution_ExplicitBuckets;

  /** Example points. Must be in increasing order of `value` field. */
  exemplars: Distribution_Exemplar[];
}

/** Describing buckets with constant width. */
export interface Distribution_LinearBuckets {
  /**
   * The number of finite buckets. With the underflow and overflow buckets,
   * the total number of buckets is `num_finite_buckets` + 2.
   * See comments on `bucket_options` for details.
   */
  numFiniteBuckets: number;

  /**
   * The i'th linear bucket covers the interval
   * [offset + (i-1) * width, offset + i * width)
   * where i ranges from 1 to num_finite_buckets, inclusive.
   * Must be strictly positive.
   */
  width: number;

  /**
   * The i'th linear bucket covers the interval
   * [offset + (i-1) * width, offset + i * width)
   * where i ranges from 1 to num_finite_buckets, inclusive.
   */
  offset: number;
}

/** Describing buckets with exponentially growing width. */
export interface Distribution_ExponentialBuckets {
  /**
   * The number of finite buckets. With the underflow and overflow buckets,
   * the total number of buckets is `num_finite_buckets` + 2.
   * See comments on `bucket_options` for details.
   */
  numFiniteBuckets: number;

  /**
   * The i'th exponential bucket covers the interval
   * [scale * growth_factor^(i-1), scale * growth_factor^i)
   * where i ranges from 1 to num_finite_buckets inclusive.
   * Must be larger than 1.0.
   */
  growthFactor: number;

  /**
   * The i'th exponential bucket covers the interval
   * [scale * growth_factor^(i-1), scale * growth_factor^i)
   * where i ranges from 1 to num_finite_buckets inclusive.
   * Must be > 0.
   */
  scale: number;
}

/** Describing buckets with arbitrary user-provided width. */
export interface Distribution_ExplicitBuckets {
  /**
   * 'bound' is a list of strictly increasing boundaries between
   * buckets. Note that a list of length N-1 defines N buckets because
   * of fenceposting. See comments on `bucket_options` for details.
   * 
   * The i'th finite bucket covers the interval
   * [bound[i-1], bound[i])
   * where i ranges from 1 to bound_size() - 1. Note that there are no
   * finite buckets at all if 'bound' only contains a single element; in
   * that special case the single bound defines the boundary between the
   * underflow and overflow buckets.
   * 
   * bucket number                   lower bound    upper bound
   * i == 0 (underflow)              -inf           bound[i]
   * 0 < i < bound_size()            bound[i-1]     bound[i]
   * i == bound_size() (overflow)    bound[i-1]     +inf
   */
  bounds: number[];
}

function createBaseDistribution(): Distribution {
  return {
    count: Long.ZERO,
    mean: 0,
    minimum: 0,
    maximum: 0,
    sumOfSquaredDeviation: 0,
    bucketCounts: [],
    linearBuckets: undefined,
    exponentialBuckets: undefined,
    explicitBuckets: undefined,
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

    if (message.minimum !== 0) {
      writer.uint32(25).double(message.minimum);
    }

    if (message.maximum !== 0) {
      writer.uint32(33).double(message.maximum);
    }

    if (message.sumOfSquaredDeviation !== 0) {
      writer.uint32(41).double(message.sumOfSquaredDeviation);
    }

    writer.uint32(50).fork();

    for (const v of message.bucketCounts) {
      writer.int64(v);
    }

    writer.ldelim();

    if (message.linearBuckets !== undefined) {
      Distribution_LinearBuckets.encode(message.linearBuckets, writer.uint32(58).fork()).ldelim();
    }

    if (message.exponentialBuckets !== undefined) {
      Distribution_ExponentialBuckets.encode(message.exponentialBuckets, writer.uint32(66).fork()).ldelim();
    }

    if (message.explicitBuckets !== undefined) {
      Distribution_ExplicitBuckets.encode(message.explicitBuckets, writer.uint32(74).fork()).ldelim();
    }

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
          message.minimum = reader.double();
          break;

        case 4:
          message.maximum = reader.double();
          break;

        case 5:
          message.sumOfSquaredDeviation = reader.double();
          break;

        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;

            while (reader.pos < end2) {
              message.bucketCounts.push((reader.int64() as Long));
            }
          } else {
            message.bucketCounts.push((reader.int64() as Long));
          }

          break;

        case 7:
          message.linearBuckets = Distribution_LinearBuckets.decode(reader, reader.uint32());
          break;

        case 8:
          message.exponentialBuckets = Distribution_ExponentialBuckets.decode(reader, reader.uint32());
          break;

        case 9:
          message.explicitBuckets = Distribution_ExplicitBuckets.decode(reader, reader.uint32());
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
      minimum: isSet(object.minimum) ? Number(object.minimum) : 0,
      maximum: isSet(object.maximum) ? Number(object.maximum) : 0,
      sumOfSquaredDeviation: isSet(object.sumOfSquaredDeviation) ? Number(object.sumOfSquaredDeviation) : 0,
      bucketCounts: Array.isArray(object?.bucketCounts) ? object.bucketCounts.map((e: any) => Long.fromString(e)) : [],
      linearBuckets: isSet(object.linearBuckets) ? Distribution_LinearBuckets.fromJSON(object.linearBuckets) : undefined,
      exponentialBuckets: isSet(object.exponentialBuckets) ? Distribution_ExponentialBuckets.fromJSON(object.exponentialBuckets) : undefined,
      explicitBuckets: isSet(object.explicitBuckets) ? Distribution_ExplicitBuckets.fromJSON(object.explicitBuckets) : undefined,
      exemplars: Array.isArray(object?.exemplars) ? object.exemplars.map((e: any) => Distribution_Exemplar.fromJSON(e)) : []
    };
  },

  toJSON(message: Distribution): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = (message.count || Long.ZERO).toString());
    message.mean !== undefined && (obj.mean = message.mean);
    message.minimum !== undefined && (obj.minimum = message.minimum);
    message.maximum !== undefined && (obj.maximum = message.maximum);
    message.sumOfSquaredDeviation !== undefined && (obj.sumOfSquaredDeviation = message.sumOfSquaredDeviation);

    if (message.bucketCounts) {
      obj.bucketCounts = message.bucketCounts.map(e => (e || Long.ZERO).toString());
    } else {
      obj.bucketCounts = [];
    }

    message.linearBuckets !== undefined && (obj.linearBuckets = message.linearBuckets ? Distribution_LinearBuckets.toJSON(message.linearBuckets) : undefined);
    message.exponentialBuckets !== undefined && (obj.exponentialBuckets = message.exponentialBuckets ? Distribution_ExponentialBuckets.toJSON(message.exponentialBuckets) : undefined);
    message.explicitBuckets !== undefined && (obj.explicitBuckets = message.explicitBuckets ? Distribution_ExplicitBuckets.toJSON(message.explicitBuckets) : undefined);

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
    message.minimum = object.minimum ?? 0;
    message.maximum = object.maximum ?? 0;
    message.sumOfSquaredDeviation = object.sumOfSquaredDeviation ?? 0;
    message.bucketCounts = object.bucketCounts?.map(e => Long.fromValue(e)) || [];
    message.linearBuckets = object.linearBuckets !== undefined && object.linearBuckets !== null ? Distribution_LinearBuckets.fromPartial(object.linearBuckets) : undefined;
    message.exponentialBuckets = object.exponentialBuckets !== undefined && object.exponentialBuckets !== null ? Distribution_ExponentialBuckets.fromPartial(object.exponentialBuckets) : undefined;
    message.explicitBuckets = object.explicitBuckets !== undefined && object.explicitBuckets !== null ? Distribution_ExplicitBuckets.fromPartial(object.explicitBuckets) : undefined;
    message.exemplars = object.exemplars?.map(e => Distribution_Exemplar.fromPartial(e)) || [];
    return message;
  }

};

function createBaseDistribution_LinearBuckets(): Distribution_LinearBuckets {
  return {
    numFiniteBuckets: 0,
    width: 0,
    offset: 0
  };
}

export const Distribution_LinearBuckets = {
  encode(message: Distribution_LinearBuckets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_LinearBuckets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_LinearBuckets();

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

  fromJSON(object: any): Distribution_LinearBuckets {
    return {
      numFiniteBuckets: isSet(object.numFiniteBuckets) ? Number(object.numFiniteBuckets) : 0,
      width: isSet(object.width) ? Number(object.width) : 0,
      offset: isSet(object.offset) ? Number(object.offset) : 0
    };
  },

  toJSON(message: Distribution_LinearBuckets): unknown {
    const obj: any = {};
    message.numFiniteBuckets !== undefined && (obj.numFiniteBuckets = Math.round(message.numFiniteBuckets));
    message.width !== undefined && (obj.width = message.width);
    message.offset !== undefined && (obj.offset = message.offset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Distribution_LinearBuckets>, I>>(object: I): Distribution_LinearBuckets {
    const message = createBaseDistribution_LinearBuckets();
    message.numFiniteBuckets = object.numFiniteBuckets ?? 0;
    message.width = object.width ?? 0;
    message.offset = object.offset ?? 0;
    return message;
  }

};

function createBaseDistribution_ExponentialBuckets(): Distribution_ExponentialBuckets {
  return {
    numFiniteBuckets: 0,
    growthFactor: 0,
    scale: 0
  };
}

export const Distribution_ExponentialBuckets = {
  encode(message: Distribution_ExponentialBuckets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_ExponentialBuckets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_ExponentialBuckets();

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

  fromJSON(object: any): Distribution_ExponentialBuckets {
    return {
      numFiniteBuckets: isSet(object.numFiniteBuckets) ? Number(object.numFiniteBuckets) : 0,
      growthFactor: isSet(object.growthFactor) ? Number(object.growthFactor) : 0,
      scale: isSet(object.scale) ? Number(object.scale) : 0
    };
  },

  toJSON(message: Distribution_ExponentialBuckets): unknown {
    const obj: any = {};
    message.numFiniteBuckets !== undefined && (obj.numFiniteBuckets = Math.round(message.numFiniteBuckets));
    message.growthFactor !== undefined && (obj.growthFactor = message.growthFactor);
    message.scale !== undefined && (obj.scale = message.scale);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Distribution_ExponentialBuckets>, I>>(object: I): Distribution_ExponentialBuckets {
    const message = createBaseDistribution_ExponentialBuckets();
    message.numFiniteBuckets = object.numFiniteBuckets ?? 0;
    message.growthFactor = object.growthFactor ?? 0;
    message.scale = object.scale ?? 0;
    return message;
  }

};

function createBaseDistribution_ExplicitBuckets(): Distribution_ExplicitBuckets {
  return {
    bounds: []
  };
}

export const Distribution_ExplicitBuckets = {
  encode(message: Distribution_ExplicitBuckets, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();

    for (const v of message.bounds) {
      writer.double(v);
    }

    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_ExplicitBuckets {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDistribution_ExplicitBuckets();

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

  fromJSON(object: any): Distribution_ExplicitBuckets {
    return {
      bounds: Array.isArray(object?.bounds) ? object.bounds.map((e: any) => Number(e)) : []
    };
  },

  toJSON(message: Distribution_ExplicitBuckets): unknown {
    const obj: any = {};

    if (message.bounds) {
      obj.bounds = message.bounds.map(e => e);
    } else {
      obj.bounds = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Distribution_ExplicitBuckets>, I>>(object: I): Distribution_ExplicitBuckets {
    const message = createBaseDistribution_ExplicitBuckets();
    message.bounds = object.bounds?.map(e => e) || [];
    return message;
  }

};