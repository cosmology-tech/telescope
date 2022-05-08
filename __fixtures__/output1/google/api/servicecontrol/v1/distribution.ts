import * as _m0 from "protobuf/minimal";
import { Long, isSet, Exact, DeepPartial, KeysOfUnion, Builtin } from "@osmonauts/helpers";
export interface Distribution {
  count: Long;
  mean: number;
  minimum: number;
  maximum: number;
  sumOfSquaredDeviation: number;
  bucketCounts: Long[];
  linearBuckets?: LinearBuckets;
  exponentialBuckets?: ExponentialBuckets;
  explicitBuckets?: ExplicitBuckets;
}

function createBaseDistribution(): Distribution {
  return {
    count: Long.UZERO,
    mean: 0,
    minimum: 0,
    maximum: 0,
    sumOfSquaredDeviation: 0,
    bucketCounts: [],
    linearBuckets: undefined,
    exponentialBuckets: undefined,
    explicitBuckets: undefined
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

    if (message.minimum !== 0) {
      writer.uint32(25).double(message.minimum);
    }

    if (message.maximum !== 0) {
      writer.uint32(33).double(message.maximum);
    }

    if (message.sumOfSquaredDeviation !== 0) {
      writer.uint32(41).double(message.sumOfSquaredDeviation);
    }

    writer.uint32(48).fork();

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

        case 7:
          message.linearBuckets = Distribution_LinearBuckets.decode(reader, reader.uint32());
          break;

        case 8:
          message.exponentialBuckets = Distribution_ExponentialBuckets.decode(reader, reader.uint32());
          break;

        case 9:
          message.explicitBuckets = Distribution_ExplicitBuckets.decode(reader, reader.uint32());
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
      explicitBuckets: isSet(object.explicitBuckets) ? Distribution_ExplicitBuckets.fromJSON(object.explicitBuckets) : undefined
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
    message.linearBuckets = object.linearBuckets !== undefined && object.linearBuckets !== null ? LinearBuckets.fromPartial(object.linearBuckets) : undefined;
    message.exponentialBuckets = object.exponentialBuckets !== undefined && object.exponentialBuckets !== null ? ExponentialBuckets.fromPartial(object.exponentialBuckets) : undefined;
    message.explicitBuckets = object.explicitBuckets !== undefined && object.explicitBuckets !== null ? ExplicitBuckets.fromPartial(object.explicitBuckets) : undefined;
    return message;
  }

};
export interface Distribution_LinearBuckets {
  numFiniteBuckets: number;
  width: number;
  offset: number;
}

function createBaseDistribution_LinearBuckets(): Distribution_LinearBuckets {
  return {
    numFiniteBuckets: 0,
    width: 0,
    offset: 0
  };
}

export const Distribution_LinearBuckets = {
  encode(message: Distribution_LinearBuckets, writer = _m0.Writer.create()): _m0.Writer {
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
export interface Distribution_ExponentialBuckets {
  numFiniteBuckets: number;
  growthFactor: number;
  scale: number;
}

function createBaseDistribution_ExponentialBuckets(): Distribution_ExponentialBuckets {
  return {
    numFiniteBuckets: 0,
    growthFactor: 0,
    scale: 0
  };
}

export const Distribution_ExponentialBuckets = {
  encode(message: Distribution_ExponentialBuckets, writer = _m0.Writer.create()): _m0.Writer {
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
export interface Distribution_ExplicitBuckets {
  bounds: number[];
}

function createBaseDistribution_ExplicitBuckets(): Distribution_ExplicitBuckets {
  return {
    bounds: []
  };
}

export const Distribution_ExplicitBuckets = {
  encode(message: Distribution_ExplicitBuckets, writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(9).fork();

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