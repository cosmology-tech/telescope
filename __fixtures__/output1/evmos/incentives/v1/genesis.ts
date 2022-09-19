import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "@osmonauts/helpers";
export const protobufPackage = "evmos.incentives.v1";

/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** module parameters */
  params: Params;

  /** active incentives */
  incentives: Incentive[];

  /** active Gasmeters */
  gasMeters: GasMeter[];
}

/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
  /** module parameters */
  params: ParamsSDKType;

  /** active incentives */
  incentives: IncentiveSDKType[];

  /** active Gasmeters */
  gas_meters: GasMeterSDKType[];
}

/** Params defines the incentives module params */
export interface Params {
  /** parameter to enable incentives */
  enableIncentives: boolean;

  /** maximum percentage an incentive can allocate per denomination */
  allocationLimit: string;

  /** identifier for the epochs module hooks */
  incentivesEpochIdentifier: string;

  /** scaling factor for capping rewards */
  rewardScaler: string;
}

/** Params defines the incentives module params */
export interface ParamsSDKType {
  /** parameter to enable incentives */
  enable_incentives: boolean;

  /** maximum percentage an incentive can allocate per denomination */
  allocation_limit: string;

  /** identifier for the epochs module hooks */
  incentives_epoch_identifier: string;

  /** scaling factor for capping rewards */
  reward_scaler: string;
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    incentives: [],
    gasMeters: []
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }

    for (const v of message.incentives) {
      Incentive.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    for (const v of message.gasMeters) {
      GasMeter.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.incentives.push(Incentive.decode(reader, reader.uint32()));
          break;

        case 3:
          message.gasMeters.push(GasMeter.decode(reader, reader.uint32()));
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
      incentives: Array.isArray(object?.incentives) ? object.incentives.map((e: any) => Incentive.fromJSON(e)) : [],
      gasMeters: Array.isArray(object?.gasMeters) ? object.gasMeters.map((e: any) => GasMeter.fromJSON(e)) : []
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);

    if (message.incentives) {
      obj.incentives = message.incentives.map(e => e ? Incentive.toJSON(e) : undefined);
    } else {
      obj.incentives = [];
    }

    if (message.gasMeters) {
      obj.gasMeters = message.gasMeters.map(e => e ? GasMeter.toJSON(e) : undefined);
    } else {
      obj.gasMeters = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.incentives = object.incentives?.map(e => Incentive.fromPartial(e)) || [];
    message.gasMeters = object.gasMeters?.map(e => GasMeter.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromSDK(object.params) : undefined,
      incentives: Array.isArray(object?.incentives) ? object.incentives.map((e: any) => Incentive.fromSDK(e)) : [],
      gasMeters: Array.isArray(object?.gas_meters) ? object.gas_meters.map((e: any) => GasMeter.fromSDK(e)) : []
    };
  },

  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toSDK(message.params) : undefined);

    if (message.incentives) {
      obj.incentives = message.incentives.map(e => e ? Incentive.toSDK(e) : undefined);
    } else {
      obj.incentives = [];
    }

    if (message.gasMeters) {
      obj.gas_meters = message.gasMeters.map(e => e ? GasMeter.toSDK(e) : undefined);
    } else {
      obj.gas_meters = [];
    }

    return obj;
  }

};

function createBaseParams(): Params {
  return {
    enableIncentives: false,
    allocationLimit: "",
    incentivesEpochIdentifier: "",
    rewardScaler: ""
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableIncentives === true) {
      writer.uint32(8).bool(message.enableIncentives);
    }

    if (message.allocationLimit !== "") {
      writer.uint32(18).string(message.allocationLimit);
    }

    if (message.incentivesEpochIdentifier !== "") {
      writer.uint32(26).string(message.incentivesEpochIdentifier);
    }

    if (message.rewardScaler !== "") {
      writer.uint32(34).string(message.rewardScaler);
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
          message.enableIncentives = reader.bool();
          break;

        case 2:
          message.allocationLimit = reader.string();
          break;

        case 3:
          message.incentivesEpochIdentifier = reader.string();
          break;

        case 4:
          message.rewardScaler = reader.string();
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
      enableIncentives: isSet(object.enableIncentives) ? Boolean(object.enableIncentives) : false,
      allocationLimit: isSet(object.allocationLimit) ? String(object.allocationLimit) : "",
      incentivesEpochIdentifier: isSet(object.incentivesEpochIdentifier) ? String(object.incentivesEpochIdentifier) : "",
      rewardScaler: isSet(object.rewardScaler) ? String(object.rewardScaler) : ""
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enableIncentives !== undefined && (obj.enableIncentives = message.enableIncentives);
    message.allocationLimit !== undefined && (obj.allocationLimit = message.allocationLimit);
    message.incentivesEpochIdentifier !== undefined && (obj.incentivesEpochIdentifier = message.incentivesEpochIdentifier);
    message.rewardScaler !== undefined && (obj.rewardScaler = message.rewardScaler);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enableIncentives = object.enableIncentives ?? false;
    message.allocationLimit = object.allocationLimit ?? "";
    message.incentivesEpochIdentifier = object.incentivesEpochIdentifier ?? "";
    message.rewardScaler = object.rewardScaler ?? "";
    return message;
  },

  fromSDK(object: ParamsSDKType): Params {
    return {
      enableIncentives: isSet(object.enable_incentives) ? object.enable_incentives : undefined,
      allocationLimit: isSet(object.allocation_limit) ? object.allocation_limit : undefined,
      incentivesEpochIdentifier: isSet(object.incentives_epoch_identifier) ? object.incentives_epoch_identifier : undefined,
      rewardScaler: isSet(object.reward_scaler) ? object.reward_scaler : undefined
    };
  },

  toSDK(message: Params): ParamsSDKType {
    const obj: any = {};
    message.enableIncentives !== undefined && (obj.enable_incentives = message.enableIncentives);
    message.allocationLimit !== undefined && (obj.allocation_limit = message.allocationLimit);
    message.incentivesEpochIdentifier !== undefined && (obj.incentives_epoch_identifier = message.incentivesEpochIdentifier);
    message.rewardScaler !== undefined && (obj.reward_scaler = message.rewardScaler);
    return obj;
  }

};