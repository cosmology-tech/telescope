import { BinaryReader, BinaryWriter } from "../../../binary";
export const protobufPackage = "evmos.fees.v1";
/**
 * DevFeeInfo defines an instance that organizes fee distribution conditions
 * for the owner of a given smart contract
 */
export interface DevFeeInfo {
  /** hex address of registered contract */
  contractAddress: string;
  /** bech32 address of contract deployer */
  deployerAddress: string;
  /**
   * bech32 address of account receiving the transaction fees
   * it defaults to deployer_address
   */
  withdrawAddress: string;
}
export interface DevFeeInfoProtoMsg {
  typeUrl: "/evmos.fees.v1.DevFeeInfo";
  value: Uint8Array;
}
/**
 * DevFeeInfo defines an instance that organizes fee distribution conditions
 * for the owner of a given smart contract
 */
export interface DevFeeInfoSDKType {
  contract_address: string;
  deployer_address: string;
  withdraw_address: string;
}
function createBaseDevFeeInfo(): DevFeeInfo {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawAddress: ""
  };
}
export const DevFeeInfo = {
  typeUrl: "/evmos.fees.v1.DevFeeInfo",
  encode(message: DevFeeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(26).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DevFeeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDevFeeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.deployerAddress = reader.string();
          break;
        case 3:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromProtoMsg(message: DevFeeInfoProtoMsg): DevFeeInfo {
    return DevFeeInfo.decode(message.value);
  },
  toProto(message: DevFeeInfo): Uint8Array {
    return DevFeeInfo.encode(message).finish();
  },
  toProtoMsg(message: DevFeeInfo): DevFeeInfoProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.DevFeeInfo",
      value: DevFeeInfo.encode(message).finish()
    };
  }
};