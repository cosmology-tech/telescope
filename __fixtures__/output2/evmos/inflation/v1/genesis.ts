//@ts-nocheck
/* eslint-disable */
import { ExponentialCalculation, InflationDistribution } from "./inflation";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "evmos.inflation.v1";

/** GenesisState defines the inflation module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params?: Params;

  /** amount of past periods, based on the epochs per period param */
  period: Long;

  /** inflation epoch identifier */
  epochIdentifier: string;

  /** number of epochs after which inflation is recalculated */
  epochsPerPeriod: Long;

  /** number of epochs that have passed while inflation is disabled */
  skippedEpochs: Long;
}

/** Params holds parameters for the inflation module. */
export interface Params {
  /** type of coin to mint */
  mintDenom: string;

  /** variables to calculate exponential inflation */
  exponentialCalculation?: ExponentialCalculation;

  /** inflation distribution of the minted denom */
  inflationDistribution?: InflationDistribution;

  /** parameter to enable inflation and halt increasing the skipped_epochs */
  enableInflation: boolean;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
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
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO,
      epochIdentifier: isSet(object.epochIdentifier) ? String(object.epochIdentifier) : "",
      epochsPerPeriod: isSet(object.epochsPerPeriod) ? Long.fromValue(object.epochsPerPeriod) : Long.ZERO,
      skippedEpochs: isSet(object.skippedEpochs) ? Long.fromValue(object.skippedEpochs) : Long.UZERO
    };
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
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    message.epochIdentifier = object.epochIdentifier ?? "";
    message.epochsPerPeriod = object.epochsPerPeriod !== undefined && object.epochsPerPeriod !== null ? Long.fromValue(object.epochsPerPeriod) : Long.ZERO;
    message.skippedEpochs = object.skippedEpochs !== undefined && object.skippedEpochs !== null ? Long.fromValue(object.skippedEpochs) : Long.UZERO;
    return message;
  },

  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      params: isSet(object.params) ? Params.fromSDKJSON(object.params) : undefined,
      period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO,
      epoch_identifier: isSet(object.epoch_identifier) ? String(object.epoch_identifier) : "",
      epochs_per_period: isSet(object.epochs_per_period) ? Long.fromValue(object.epochs_per_period) : Long.ZERO,
      skipped_epochs: isSet(object.skipped_epochs) ? Long.fromValue(object.skipped_epochs) : Long.UZERO
    };
  }

};

function createBaseParams(): Params {
  return {
    mintDenom: "",
    exponentialCalculation: undefined,
    inflationDistribution: undefined,
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
    return {
      mintDenom: isSet(object.mintDenom) ? String(object.mintDenom) : "",
      exponentialCalculation: isSet(object.exponentialCalculation) ? ExponentialCalculation.fromJSON(object.exponentialCalculation) : undefined,
      inflationDistribution: isSet(object.inflationDistribution) ? InflationDistribution.fromJSON(object.inflationDistribution) : undefined,
      enableInflation: isSet(object.enableInflation) ? Boolean(object.enableInflation) : false
    };
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
    message.exponentialCalculation = object.exponentialCalculation !== undefined && object.exponentialCalculation !== null ? ExponentialCalculation.fromPartial(object.exponentialCalculation) : undefined;
    message.inflationDistribution = object.inflationDistribution !== undefined && object.inflationDistribution !== null ? InflationDistribution.fromPartial(object.inflationDistribution) : undefined;
    message.enableInflation = object.enableInflation ?? false;
    return message;
  },

  fromSDKJSON(object: any): ParamsSDKType {
    return {
      mint_denom: isSet(object.mint_denom) ? String(object.mint_denom) : "",
      exponential_calculation: isSet(object.exponential_calculation) ? ExponentialCalculation.fromSDKJSON(object.exponential_calculation) : undefined,
      inflation_distribution: isSet(object.inflation_distribution) ? InflationDistribution.fromSDKJSON(object.inflation_distribution) : undefined,
      enable_inflation: isSet(object.enable_inflation) ? Boolean(object.enable_inflation) : false
    };
  }

};