import { Distribution_Exemplar } from "../../distribution";
import * as _m0 from "protobufjs/minimal";
import { Long } from "@osmonauts/helpers";
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
export declare const Distribution: {
    encode(message: Distribution, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Distribution;
    fromJSON(object: any): Distribution;
    toJSON(message: Distribution): unknown;
    fromPartial<I extends {
        count?: any;
        mean?: number;
        minimum?: number;
        maximum?: number;
        sumOfSquaredDeviation?: number;
        bucketCounts?: any[];
        linearBuckets?: {
            numFiniteBuckets?: number;
            width?: number;
            offset?: number;
        };
        exponentialBuckets?: {
            numFiniteBuckets?: number;
            growthFactor?: number;
            scale?: number;
        };
        explicitBuckets?: {
            bounds?: number[];
        };
        exemplars?: {
            value?: number;
            timestamp?: Date;
            attachments?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[];
    } & {
        count?: any;
        mean?: number;
        minimum?: number;
        maximum?: number;
        sumOfSquaredDeviation?: number;
        bucketCounts?: any[] & any[] & Record<Exclude<keyof I["bucketCounts"], keyof any[]>, never>;
        linearBuckets?: {
            numFiniteBuckets?: number;
            width?: number;
            offset?: number;
        } & {
            numFiniteBuckets?: number;
            width?: number;
            offset?: number;
        } & Record<Exclude<keyof I["linearBuckets"], keyof Distribution_LinearBuckets>, never>;
        exponentialBuckets?: {
            numFiniteBuckets?: number;
            growthFactor?: number;
            scale?: number;
        } & {
            numFiniteBuckets?: number;
            growthFactor?: number;
            scale?: number;
        } & Record<Exclude<keyof I["exponentialBuckets"], keyof Distribution_ExponentialBuckets>, never>;
        explicitBuckets?: {
            bounds?: number[];
        } & {
            bounds?: number[] & number[] & Record<Exclude<keyof I["explicitBuckets"]["bounds"], keyof number[]>, never>;
        } & Record<Exclude<keyof I["explicitBuckets"], "bounds">, never>;
        exemplars?: {
            value?: number;
            timestamp?: Date;
            attachments?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[] & ({
            value?: number;
            timestamp?: Date;
            attachments?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        } & {
            value?: number;
            timestamp?: Date;
            attachments?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[] & ({
                typeUrl?: string;
                value?: Uint8Array;
            } & {
                [x: string]: any;
            } & Record<Exclude<keyof I["exemplars"][number]["attachments"][number], keyof import("../../../protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["exemplars"][number]["attachments"], keyof {
                typeUrl?: string;
                value?: Uint8Array;
            }[]>, never>;
        } & Record<Exclude<keyof I["exemplars"][number], keyof Distribution_Exemplar>, never>)[] & Record<Exclude<keyof I["exemplars"], keyof {
            value?: number;
            timestamp?: Date;
            attachments?: {
                typeUrl?: string;
                value?: Uint8Array;
            }[];
        }[]>, never>;
    } & Record<Exclude<keyof I, keyof Distribution>, never>>(object: I): Distribution;
};
export declare const Distribution_LinearBuckets: {
    encode(message: Distribution_LinearBuckets, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_LinearBuckets;
    fromJSON(object: any): Distribution_LinearBuckets;
    toJSON(message: Distribution_LinearBuckets): unknown;
    fromPartial<I extends {
        numFiniteBuckets?: number;
        width?: number;
        offset?: number;
    } & {
        numFiniteBuckets?: number;
        width?: number;
        offset?: number;
    } & Record<Exclude<keyof I, keyof Distribution_LinearBuckets>, never>>(object: I): Distribution_LinearBuckets;
};
export declare const Distribution_ExponentialBuckets: {
    encode(message: Distribution_ExponentialBuckets, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_ExponentialBuckets;
    fromJSON(object: any): Distribution_ExponentialBuckets;
    toJSON(message: Distribution_ExponentialBuckets): unknown;
    fromPartial<I extends {
        numFiniteBuckets?: number;
        growthFactor?: number;
        scale?: number;
    } & {
        numFiniteBuckets?: number;
        growthFactor?: number;
        scale?: number;
    } & Record<Exclude<keyof I, keyof Distribution_ExponentialBuckets>, never>>(object: I): Distribution_ExponentialBuckets;
};
export declare const Distribution_ExplicitBuckets: {
    encode(message: Distribution_ExplicitBuckets, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Distribution_ExplicitBuckets;
    fromJSON(object: any): Distribution_ExplicitBuckets;
    toJSON(message: Distribution_ExplicitBuckets): unknown;
    fromPartial<I extends {
        bounds?: number[];
    } & {
        bounds?: number[] & number[] & Record<Exclude<keyof I["bounds"], keyof number[]>, never>;
    } & Record<Exclude<keyof I, "bounds">, never>>(object: I): Distribution_ExplicitBuckets;
};
