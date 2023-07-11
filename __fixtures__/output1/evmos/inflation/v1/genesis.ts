import { ExponentialCalculation, ExponentialCalculationSDKType, InflationDistribution, InflationDistributionSDKType } from "./inflation";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "evmos.inflation.v1";
/** GenesisState defines the inflation module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params: Params;
  /** amount of past periods, based on the epochs per period param */
  period: Long;
  /** inflation epoch identifier */
  epochIdentifier: string;
  /** number of epochs after which inflation is recalculated */
  epochsPerPeriod: Long;
  /** number of epochs that have passed while inflation is disabled */
  skippedEpochs: Long;
}
/** GenesisState defines the inflation module's genesis state. */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  period: Long;
  epoch_identifier: string;
  epochs_per_period: Long;
  skipped_epochs: Long;
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
    period: Long.UZERO,
    epochIdentifier: "",
    epochsPerPeriod: Long.ZERO,
    skippedEpochs: Long.UZERO
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (!message.period.isZero()) {
      writer.uint32(16).uint64(message.period);
    }
    if (message.epochIdentifier !== "") {
      writer.uint32(26).string(message.epochIdentifier);
    }
    if (!message.epochsPerPeriod.isZero()) {
      writer.uint32(32).int64(message.epochsPerPeriod);
    }
    if (!message.skippedEpochs.isZero()) {
      writer.uint32(40).uint64(message.skippedEpochs);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.period = (reader.uint64() as Long);
          break;
        case 3:
          message.epochIdentifier = reader.string();
          break;
        case 4:
          message.epochsPerPeriod = (reader.int64() as Long);
          break;
        case 5:
          message.skippedEpochs = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.period)) obj.period = Long.fromValue(object.period);
    if (isSet(object.epochIdentifier)) obj.epochIdentifier = String(object.epochIdentifier);
    if (isSet(object.epochsPerPeriod)) obj.epochsPerPeriod = Long.fromValue(object.epochsPerPeriod);
    if (isSet(object.skippedEpochs)) obj.skippedEpochs = Long.fromValue(object.skippedEpochs);
    return obj;
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.period !== undefined && (obj.period = (message.period || Long.UZERO).toString());
    message.epochIdentifier !== undefined && (obj.epochIdentifier = message.epochIdentifier);
    message.epochsPerPeriod !== undefined && (obj.epochsPerPeriod = (message.epochsPerPeriod || Long.ZERO).toString());
    message.skippedEpochs !== undefined && (obj.skippedEpochs = (message.skippedEpochs || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : Params.fromPartial({});
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.epochsPerPeriod = object.epochsPerPeriod !== undefined && object.epochsPerPeriod !== null ? Long.fromValue(object.epochsPerPeriod) : Long.ZERO;
    message.skippedEpochs = object.skippedEpochs !== undefined && object.skippedEpochs !== null ? Long.fromValue(object.skippedEpochs) : Long.UZERO;
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: object.params ? Params.fromSDK(object.params) : undefined,
      period: object?.period,
      epochIdentifier: object?.epoch_identifier,
      epochsPerPeriod: object?.epochs_per_period,
      skippedEpochs: object?.skipped_epochs
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);
    obj.period = message.period;
    obj.epoch_identifier = message.epochIdentifier;
    obj.epochs_per_period = message.epochsPerPeriod;
    obj.skipped_epochs = message.skippedEpochs;
    return obj;
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
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.mintDenom)) obj.mintDenom = String(object.mintDenom);
    if (isSet(object.exponentialCalculation)) obj.exponentialCalculation = ExponentialCalculation.fromJSON(object.exponentialCalculation);
    if (isSet(object.inflationDistribution)) obj.inflationDistribution = InflationDistribution.fromJSON(object.inflationDistribution);
    if (isSet(object.enableInflation)) obj.enableInflation = Boolean(object.enableInflation);
    return obj;
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.mintDenom !== undefined && (obj.mintDenom = message.mintDenom);
    message.exponentialCalculation !== undefined && (obj.exponentialCalculation = message.exponentialCalculation ? ExponentialCalculation.toJSON(message.exponentialCalculation) : undefined);
    message.inflationDistribution !== undefined && (obj.inflationDistribution = message.inflationDistribution ? InflationDistribution.toJSON(message.inflationDistribution) : undefined);
    message.enableInflation !== undefined && (obj.enableInflation = message.enableInflation);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.mintDenom = object.mintDenom ?? "";
    message.exponentialCalculation = object.exponentialCalculation !== undefined && object.exponentialCalculation !== null ? ExponentialCalculation.fromPartial(object.exponentialCalculation) : ExponentialCalculation.fromPartial({});
    message.inflationDistribution = object.inflationDistribution !== undefined && object.inflationDistribution !== null ? InflationDistribution.fromPartial(object.inflationDistribution) : InflationDistribution.fromPartial({});
    message.enableInflation = object.enableInflation ?? false;
    return message;
  },
  fromSDK(object: ParamsSDKType): Params {
    return {
      mintDenom: object?.mint_denom,
      exponentialCalculation: object.exponential_calculation ? ExponentialCalculation.fromSDK(object.exponential_calculation) : undefined,
      inflationDistribution: object.inflation_distribution ? InflationDistribution.fromSDK(object.inflation_distribution) : undefined,
      enableInflation: object?.enable_inflation
    };
  },
  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    obj.mint_denom = message.mintDenom;
    message.exponentialCalculation !== undefined && (obj.exponential_calculation = message.exponentialCalculation ? ExponentialCalculation.toSDK(message.exponentialCalculation) : undefined);
    message.inflationDistribution !== undefined && (obj.inflation_distribution = message.inflationDistribution ? InflationDistribution.toSDK(message.inflationDistribution) : undefined);
    obj.enable_inflation = message.enableInflation;
    return obj;
  }
};