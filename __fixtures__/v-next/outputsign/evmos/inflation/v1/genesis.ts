import { ExponentialCalculation, ExponentialCalculationSDKType, InflationDistribution, InflationDistributionSDKType } from "./inflation";
import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "evmos.inflation.v1";
/** GenesisState defines the inflation module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  /** amount of past periods, based on the epochs per period param */
  period: bigint;
  /** inflation epoch identifier */
  epochIdentifier: string;
  /** number of epochs after which inflation is recalculated */
  epochsPerPeriod: bigint;
  /** number of epochs that have passed while inflation is disabled */
  skippedEpochs: bigint;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/evmos.inflation.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the inflation module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  period: bigint;
  epoch_identifier: string;
  epochs_per_period: bigint;
  skipped_epochs: bigint;
}
/** Params holds parameters for the inflation module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;
  /** variables to calculate exponential inflation */
  exponentialCalculation: ExponentialCalculation;
  /** inflation distribution of the minted denom */
  inflationDistribution: InflationDistribution;
  /** parameter to enable inflation and halt increasing the skipped_epochs */
  enableInflation: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/evmos.inflation.v1.Params";
  value: Uint8Array;
}
/** Params holds parameters for the inflation module. */
export interface ParamsSDKType {
  mint_denom: string;
  exponential_calculation: ExponentialCalculationSDKType;
  inflation_distribution: InflationDistributionSDKType;
  enable_inflation: boolean;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    period: BigInt(0),
    epochIdentifier: "",
    epochsPerPeriod: BigInt(0),
    skippedEpochs: BigInt(0)
  };
}
export const GenesisState = {
  typeUrl: "/evmos.inflation.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.period !== BigInt(0)) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }
    if (message.epochsPerPeriod !== BigInt(0)) {
      writer.uint32(32).int64(message.epochsPerPeriod);
    }
    if (message.skippedEpochs !== BigInt(0)) {
      writer.uint32(40).uint64(message.skippedEpochs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.period = reader.uint64();
          break;
        case 3:
          message.epochIdentifier = reader.string();
          break;
        case 4:
          message.epochsPerPeriod = reader.int64();
          break;
        case 5:
          message.skippedEpochs = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseParams(): Params {
  return {
    mintDenom: "",
    exponentialCalculation: ExponentialCalculation.fromPartial({}),
    inflationDistribution: InflationDistribution.fromPartial({}),
    enableInflation: false
  };
}
export const Params = {
  typeUrl: "/evmos.inflation.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mintDenom !== "") {
      writer.uint32(10).string(message.mintDenom);
    }
    if (message.exponentialCalculation !== undefined) {
      ExponentialCalculation.encode(message.exponentialCalculation, writer.uint32(18).fork()).ldelim();
    }
    if (message.inflationDistribution !== undefined) {
      InflationDistribution.encode(message.inflationDistribution, writer.uint32(26).fork()).ldelim();
    }
    if (message.enableInflation === true) {
      writer.uint32(32).bool(message.enableInflation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintDenom = reader.string();
          break;
        case 2:
          message.exponentialCalculation = ExponentialCalculation.decode(reader, reader.uint32());
          break;
        case 3:
          message.inflationDistribution = InflationDistribution.decode(reader, reader.uint32());
          break;
        case 4:
          message.enableInflation = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/evmos.inflation.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};