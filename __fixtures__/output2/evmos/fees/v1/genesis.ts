//@ts-nocheck
/* eslint-disable */
import { DevFeeInfo } from "./fees";
import { Long, isSet, DeepPartial } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "evmos.fees.v1";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** module parameters */
  params?: Params;
  /** active registered contracts */
  devFeeInfos: DevFeeInfo[];
}
/** Params defines the fees module params */
export interface Params {
  /** parameter to enable fees */
  enableFees: boolean;
  /**
   * developer_shares defines the proportion of the transaction fees to be
   * distributed to the registered contract owner
   */
  developerShares: string;
  /**
   * developer_shares defines the proportion of the transaction fees to be
   * distributed to validators
   */
  validatorShares: string;
  /**
   * addr_derivation_cost_create defines the cost of address derivation for
   * verifying the contract deployer at fee registration
   */
  addrDerivationCostCreate: Long;
  /** min_gas_price defines the minimum gas price value for cosmos and eth transactions */
  minGasPrice: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    devFeeInfos: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.devFeeInfos) {
      DevFeeInfo.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.devFeeInfos.push(DevFeeInfo.decode(reader, reader.uint32()));
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
      devFeeInfos: Array.isArray(object?.devFeeInfos) ? object.devFeeInfos.map((e: any) => DevFeeInfo.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.devFeeInfos) {
      obj.devFeeInfos = message.devFeeInfos.map(e => e ? DevFeeInfo.toJSON(e) : undefined);
    } else {
      obj.devFeeInfos = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.devFeeInfos = object.devFeeInfos?.map(e => DevFeeInfo.fromPartial(e)) || [];
    return message;
  }
};
function createBaseParams(): Params {
  return {
    enableFees: false,
    developerShares: "",
    validatorShares: "",
    addrDerivationCostCreate: Long.UZERO,
    minGasPrice: ""
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.enableFees === true) {
      writer.uint32(8).bool(message.enableFees);
    }
    if (message.developerShares !== "") {
      writer.uint32(18).string(message.developerShares);
    }
    if (message.validatorShares !== "") {
      writer.uint32(26).string(message.validatorShares);
    }
    if (!message.addrDerivationCostCreate.isZero()) {
      writer.uint32(32).uint64(message.addrDerivationCostCreate);
    }
    if (message.minGasPrice !== "") {
      writer.uint32(42).string(message.minGasPrice);
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
          message.enableFees = reader.bool();
          break;
        case 2:
          message.developerShares = reader.string();
          break;
        case 3:
          message.validatorShares = reader.string();
          break;
        case 4:
          message.addrDerivationCostCreate = (reader.uint64() as Long);
          break;
        case 5:
          message.minGasPrice = reader.string();
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
      enableFees: isSet(object.enableFees) ? Boolean(object.enableFees) : false,
      developerShares: isSet(object.developerShares) ? String(object.developerShares) : "",
      validatorShares: isSet(object.validatorShares) ? String(object.validatorShares) : "",
      addrDerivationCostCreate: isSet(object.addrDerivationCostCreate) ? Long.fromValue(object.addrDerivationCostCreate) : Long.UZERO,
      minGasPrice: isSet(object.minGasPrice) ? String(object.minGasPrice) : ""
    };
  },
  toJSON(message: Params): unknown {
    const obj: any = {};
    message.enableFees !== undefined && (obj.enableFees = message.enableFees);
    message.developerShares !== undefined && (obj.developerShares = message.developerShares);
    message.validatorShares !== undefined && (obj.validatorShares = message.validatorShares);
    message.addrDerivationCostCreate !== undefined && (obj.addrDerivationCostCreate = (message.addrDerivationCostCreate || Long.UZERO).toString());
    message.minGasPrice !== undefined && (obj.minGasPrice = message.minGasPrice);
    return obj;
  },
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enableFees = object.enableFees ?? false;
    message.developerShares = object.developerShares ?? "";
    message.validatorShares = object.validatorShares ?? "";
    message.addrDerivationCostCreate = object.addrDerivationCostCreate !== undefined && object.addrDerivationCostCreate !== null ? Long.fromValue(object.addrDerivationCostCreate) : Long.UZERO;
    message.minGasPrice = object.minGasPrice ?? "";
    return message;
  }
};