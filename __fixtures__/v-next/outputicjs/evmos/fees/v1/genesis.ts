import { DevFeeInfo } from "./fees";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** module parameters */
  params: Params;
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
  addrDerivationCostCreate: bigint;
  /** min_gas_price defines the minimum gas price value for cosmos and eth transactions */
  minGasPrice: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    devFeeInfos: []
  };
}
export const GenesisState = {
  typeUrl: "/evmos.fees.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.devFeeInfos) {
      DevFeeInfo.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.devFeeInfos.push(DevFeeInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
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
    addrDerivationCostCreate: BigInt(0),
    minGasPrice: ""
  };
}
export const Params = {
  typeUrl: "/evmos.fees.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.enableFees === true) {
      writer.uint32(8).bool(message.enableFees);
    }
    if (message.developerShares !== "") {
      writer.uint32(18).string(message.developerShares);
    }
    if (message.validatorShares !== "") {
      writer.uint32(26).string(message.validatorShares);
    }
    if (message.addrDerivationCostCreate !== BigInt(0)) {
      writer.uint32(32).uint64(message.addrDerivationCostCreate);
    }
    if (message.minGasPrice !== "") {
      writer.uint32(42).string(message.minGasPrice);
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
          message.enableFees = reader.bool();
          break;
        case 2:
          message.developerShares = reader.string();
          break;
        case 3:
          message.validatorShares = reader.string();
          break;
        case 4:
          message.addrDerivationCostCreate = reader.uint64();
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
  fromPartial(object: DeepPartial<Params>): Params {
    const message = createBaseParams();
    message.enableFees = object.enableFees ?? false;
    message.developerShares = object.developerShares ?? "";
    message.validatorShares = object.validatorShares ?? "";
    message.addrDerivationCostCreate = object.addrDerivationCostCreate !== undefined && object.addrDerivationCostCreate !== null ? BigInt(object.addrDerivationCostCreate.toString()) : BigInt(0);
    message.minGasPrice = object.minGasPrice ?? "";
    return message;
  }
};