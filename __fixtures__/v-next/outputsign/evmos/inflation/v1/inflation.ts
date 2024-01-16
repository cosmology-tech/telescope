import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { DeepPartial } from "../../../helpers";
export const protobufPackage = "evmos.inflation.v1";
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistribution {
  /**
   * staking_rewards defines the proportion of the minted minted_denom that is
   * to be allocated as staking rewards
   */
  stakingRewards: string;
  /**
   * usage_incentives defines the proportion of the minted minted_denom that is
   * to be allocated to the incentives module address
   */
  usageIncentives: string;
  /**
   * community_pool defines the proportion of the minted minted_denom that is to
   * be allocated to the community pool
   */
  communityPool: string;
}
export interface InflationDistributionProtoMsg {
  typeUrl: "/evmos.inflation.v1.InflationDistribution";
  value: Uint8Array;
}
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistributionAmino {
  /**
   * staking_rewards defines the proportion of the minted minted_denom that is
   * to be allocated as staking rewards
   */
  staking_rewards?: string;
  /**
   * usage_incentives defines the proportion of the minted minted_denom that is
   * to be allocated to the incentives module address
   */
  usage_incentives?: string;
  /**
   * community_pool defines the proportion of the minted minted_denom that is to
   * be allocated to the community pool
   */
  community_pool?: string;
}
export interface InflationDistributionAminoMsg {
  type: "/evmos.inflation.v1.InflationDistribution";
  value: InflationDistributionAmino;
}
/**
 * InflationDistribution defines the distribution in which inflation is
 * allocated through minting on each epoch (staking, incentives, community). It
 * excludes the team vesting distribution, as this is minted once at genesis.
 * The initial InflationDistribution can be calculated from the Evmos Token
 * Model like this:
 * mintDistribution1 = distribution1 / (1 - teamVestingDistribution)
 * 0.5333333         = 40%           / (1 - 25%)
 */
export interface InflationDistributionSDKType {
  staking_rewards: string;
  usage_incentives: string;
  community_pool: string;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculation {
  /** initial value */
  a: string;
  /** reduction factor */
  r: string;
  /** long term inflation */
  c: string;
  /** bonding target */
  bondingTarget: string;
  /** max variance */
  maxVariance: string;
}
export interface ExponentialCalculationProtoMsg {
  typeUrl: "/evmos.inflation.v1.ExponentialCalculation";
  value: Uint8Array;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculationAmino {
  /** initial value */
  a?: string;
  /** reduction factor */
  r?: string;
  /** long term inflation */
  c?: string;
  /** bonding target */
  bonding_target?: string;
  /** max variance */
  max_variance?: string;
}
export interface ExponentialCalculationAminoMsg {
  type: "/evmos.inflation.v1.ExponentialCalculation";
  value: ExponentialCalculationAmino;
}
/**
 * ExponentialCalculation holds factors to calculate exponential inflation on
 * each period. Calculation reference:
 * periodProvision = exponentialDecay       *  bondingIncentive
 * f(x)            = (a * (1 - r) ^ x + c)  *  (1 + max_variance - bondedRatio *
 * (max_variance / bonding_target))
 */
export interface ExponentialCalculationSDKType {
  a: string;
  r: string;
  c: string;
  bonding_target: string;
  max_variance: string;
}
function createBaseInflationDistribution(): InflationDistribution {
  return {
    stakingRewards: "",
    usageIncentives: "",
    communityPool: ""
  };
}
export const InflationDistribution = {
  typeUrl: "/evmos.inflation.v1.InflationDistribution",
  encode(message: InflationDistribution, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.stakingRewards !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.stakingRewards, 18).atomics);
    }
    if (message.usageIncentives !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.usageIncentives, 18).atomics);
    }
    if (message.communityPool !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.communityPool, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): InflationDistribution {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInflationDistribution();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakingRewards = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.usageIncentives = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.communityPool = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<InflationDistribution>): InflationDistribution {
    const message = createBaseInflationDistribution();
    message.stakingRewards = object.stakingRewards ?? "";
    message.usageIncentives = object.usageIncentives ?? "";
    message.communityPool = object.communityPool ?? "";
    return message;
  },
  fromAmino(object: InflationDistributionAmino): InflationDistribution {
    const message = createBaseInflationDistribution();
    if (object.staking_rewards !== undefined && object.staking_rewards !== null) {
      message.stakingRewards = object.staking_rewards;
    }
    if (object.usage_incentives !== undefined && object.usage_incentives !== null) {
      message.usageIncentives = object.usage_incentives;
    }
    if (object.community_pool !== undefined && object.community_pool !== null) {
      message.communityPool = object.community_pool;
    }
    return message;
  },
  toAmino(message: InflationDistribution): InflationDistributionAmino {
    const obj: any = {};
    obj.staking_rewards = message.stakingRewards === "" ? undefined : message.stakingRewards;
    obj.usage_incentives = message.usageIncentives === "" ? undefined : message.usageIncentives;
    obj.community_pool = message.communityPool === "" ? undefined : message.communityPool;
    return obj;
  },
  fromAminoMsg(object: InflationDistributionAminoMsg): InflationDistribution {
    return InflationDistribution.fromAmino(object.value);
  },
  fromProtoMsg(message: InflationDistributionProtoMsg): InflationDistribution {
    return InflationDistribution.decode(message.value);
  },
  toProto(message: InflationDistribution): Uint8Array {
    return InflationDistribution.encode(message).finish();
  },
  toProtoMsg(message: InflationDistribution): InflationDistributionProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.InflationDistribution",
      value: InflationDistribution.encode(message).finish()
    };
  }
};
function createBaseExponentialCalculation(): ExponentialCalculation {
  return {
    a: "",
    r: "",
    c: "",
    bondingTarget: "",
    maxVariance: ""
  };
}
export const ExponentialCalculation = {
  typeUrl: "/evmos.inflation.v1.ExponentialCalculation",
  encode(message: ExponentialCalculation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.a !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.a, 18).atomics);
    }
    if (message.r !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.r, 18).atomics);
    }
    if (message.c !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.c, 18).atomics);
    }
    if (message.bondingTarget !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.bondingTarget, 18).atomics);
    }
    if (message.maxVariance !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.maxVariance, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ExponentialCalculation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExponentialCalculation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.a = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.r = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.c = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.bondingTarget = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.maxVariance = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExponentialCalculation>): ExponentialCalculation {
    const message = createBaseExponentialCalculation();
    message.a = object.a ?? "";
    message.r = object.r ?? "";
    message.c = object.c ?? "";
    message.bondingTarget = object.bondingTarget ?? "";
    message.maxVariance = object.maxVariance ?? "";
    return message;
  },
  fromAmino(object: ExponentialCalculationAmino): ExponentialCalculation {
    const message = createBaseExponentialCalculation();
    if (object.a !== undefined && object.a !== null) {
      message.a = object.a;
    }
    if (object.r !== undefined && object.r !== null) {
      message.r = object.r;
    }
    if (object.c !== undefined && object.c !== null) {
      message.c = object.c;
    }
    if (object.bonding_target !== undefined && object.bonding_target !== null) {
      message.bondingTarget = object.bonding_target;
    }
    if (object.max_variance !== undefined && object.max_variance !== null) {
      message.maxVariance = object.max_variance;
    }
    return message;
  },
  toAmino(message: ExponentialCalculation): ExponentialCalculationAmino {
    const obj: any = {};
    obj.a = message.a === "" ? undefined : message.a;
    obj.r = message.r === "" ? undefined : message.r;
    obj.c = message.c === "" ? undefined : message.c;
    obj.bonding_target = message.bondingTarget === "" ? undefined : message.bondingTarget;
    obj.max_variance = message.maxVariance === "" ? undefined : message.maxVariance;
    return obj;
  },
  fromAminoMsg(object: ExponentialCalculationAminoMsg): ExponentialCalculation {
    return ExponentialCalculation.fromAmino(object.value);
  },
  fromProtoMsg(message: ExponentialCalculationProtoMsg): ExponentialCalculation {
    return ExponentialCalculation.decode(message.value);
  },
  toProto(message: ExponentialCalculation): Uint8Array {
    return ExponentialCalculation.encode(message).finish();
  },
  toProtoMsg(message: ExponentialCalculation): ExponentialCalculationProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.ExponentialCalculation",
      value: ExponentialCalculation.encode(message).finish()
    };
  }
};