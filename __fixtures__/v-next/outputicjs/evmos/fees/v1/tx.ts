import { BinaryReader, BinaryWriter } from "../../../binary";
import { DeepPartial } from "../../../helpers";
/** MsgRegisterFeesContract defines a message that registers a DevFeeInfo */
export interface MsgRegisterDevFeeInfo {
  /** contract hex address */
  contractAddress: string;
  /**
   * bech32 address of message sender, must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployerAddress: string;
  /** bech32 address of account receiving the transaction fees */
  withdrawAddress: string;
  /**
   * array of nonces from the address path, where the last nonce is
   * the nonce that determines the contract's address - it can be an EOA nonce
   * or a factory contract nonce
   */
  nonces: bigint[];
}
export interface MsgRegisterDevFeeInfoProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfo";
  value: Uint8Array;
}
/** MsgRegisterFeesContract defines a message that registers a DevFeeInfo */
export interface MsgRegisterDevFeeInfoAmino {
  /** contract hex address */
  contract_address: string;
  /**
   * bech32 address of message sender, must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployer_address: string;
  /** bech32 address of account receiving the transaction fees */
  withdraw_address: string;
  /**
   * array of nonces from the address path, where the last nonce is
   * the nonce that determines the contract's address - it can be an EOA nonce
   * or a factory contract nonce
   */
  nonces: string[];
}
export interface MsgRegisterDevFeeInfoAminoMsg {
  type: "/evmos.fees.v1.MsgRegisterDevFeeInfo";
  value: MsgRegisterDevFeeInfoAmino;
}
/**
 * MsgRegisterDevFeeInfoResponse defines the MsgRegisterDevFeeInfo response
 * type
 */
export interface MsgRegisterDevFeeInfoResponse {}
export interface MsgRegisterDevFeeInfoResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfoResponse";
  value: Uint8Array;
}
/**
 * MsgRegisterDevFeeInfoResponse defines the MsgRegisterDevFeeInfo response
 * type
 */
export interface MsgRegisterDevFeeInfoResponseAmino {}
export interface MsgRegisterDevFeeInfoResponseAminoMsg {
  type: "/evmos.fees.v1.MsgRegisterDevFeeInfoResponse";
  value: MsgRegisterDevFeeInfoResponseAmino;
}
/**
 * MsgCancelDevFeeInfo defines a message that cancels a registered a
 * DevFeeInfo
 */
export interface MsgCancelDevFeeInfo {
  /** contract hex address */
  contractAddress: string;
  /** deployer bech32 address */
  deployerAddress: string;
}
export interface MsgCancelDevFeeInfoProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfo";
  value: Uint8Array;
}
/**
 * MsgCancelDevFeeInfo defines a message that cancels a registered a
 * DevFeeInfo
 */
export interface MsgCancelDevFeeInfoAmino {
  /** contract hex address */
  contract_address: string;
  /** deployer bech32 address */
  deployer_address: string;
}
export interface MsgCancelDevFeeInfoAminoMsg {
  type: "/evmos.fees.v1.MsgCancelDevFeeInfo";
  value: MsgCancelDevFeeInfoAmino;
}
/** MsgCancelDevFeeInfoResponse defines the MsgCancelDevFeeInfo response type */
export interface MsgCancelDevFeeInfoResponse {}
export interface MsgCancelDevFeeInfoResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfoResponse";
  value: Uint8Array;
}
/** MsgCancelDevFeeInfoResponse defines the MsgCancelDevFeeInfo response type */
export interface MsgCancelDevFeeInfoResponseAmino {}
export interface MsgCancelDevFeeInfoResponseAminoMsg {
  type: "/evmos.fees.v1.MsgCancelDevFeeInfoResponse";
  value: MsgCancelDevFeeInfoResponseAmino;
}
/**
 * MsgUpdateDevFeeInfo defines a message that updates the withdraw address for
 * a registered DevFeeInfo
 */
export interface MsgUpdateDevFeeInfo {
  /** contract hex address */
  contractAddress: string;
  /** deployer bech32 address */
  deployerAddress: string;
  /** new withdraw bech32 address for receiving the transaction fees */
  withdrawAddress: string;
}
export interface MsgUpdateDevFeeInfoProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfo";
  value: Uint8Array;
}
/**
 * MsgUpdateDevFeeInfo defines a message that updates the withdraw address for
 * a registered DevFeeInfo
 */
export interface MsgUpdateDevFeeInfoAmino {
  /** contract hex address */
  contract_address: string;
  /** deployer bech32 address */
  deployer_address: string;
  /** new withdraw bech32 address for receiving the transaction fees */
  withdraw_address: string;
}
export interface MsgUpdateDevFeeInfoAminoMsg {
  type: "/evmos.fees.v1.MsgUpdateDevFeeInfo";
  value: MsgUpdateDevFeeInfoAmino;
}
/** MsgUpdateDevFeeInfoResponse defines the MsgUpdateDevFeeInfo response type */
export interface MsgUpdateDevFeeInfoResponse {}
export interface MsgUpdateDevFeeInfoResponseProtoMsg {
  typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfoResponse";
  value: Uint8Array;
}
/** MsgUpdateDevFeeInfoResponse defines the MsgUpdateDevFeeInfo response type */
export interface MsgUpdateDevFeeInfoResponseAmino {}
export interface MsgUpdateDevFeeInfoResponseAminoMsg {
  type: "/evmos.fees.v1.MsgUpdateDevFeeInfoResponse";
  value: MsgUpdateDevFeeInfoResponseAmino;
}
function createBaseMsgRegisterDevFeeInfo(): MsgRegisterDevFeeInfo {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawAddress: "",
    nonces: []
  };
}
export const MsgRegisterDevFeeInfo = {
  typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfo",
  encode(message: MsgRegisterDevFeeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(26).string(message.withdrawAddress);
    }
    writer.uint32(34).fork();
    for (const v of message.nonces) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterDevFeeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterDevFeeInfo();
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
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.nonces.push(reader.uint64());
            }
          } else {
            message.nonces.push(reader.uint64());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgRegisterDevFeeInfo>): MsgRegisterDevFeeInfo {
    const message = createBaseMsgRegisterDevFeeInfo();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    message.nonces = object.nonces?.map(e => BigInt(e.toString())) || [];
    return message;
  },
  fromAmino(object: MsgRegisterDevFeeInfoAmino): MsgRegisterDevFeeInfo {
    const message = createBaseMsgRegisterDevFeeInfo();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.deployer_address !== undefined && object.deployer_address !== null) {
      message.deployerAddress = object.deployer_address;
    }
    if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    message.nonces = object.nonces?.map(e => BigInt(e)) || [];
    return message;
  },
  toAmino(message: MsgRegisterDevFeeInfo): MsgRegisterDevFeeInfoAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.deployer_address = message.deployerAddress === "" ? undefined : message.deployerAddress;
    obj.withdraw_address = message.withdrawAddress === "" ? undefined : message.withdrawAddress;
    if (message.nonces) {
      obj.nonces = message.nonces.map(e => e.toString());
    } else {
      obj.nonces = message.nonces;
    }
    return obj;
  },
  fromAminoMsg(object: MsgRegisterDevFeeInfoAminoMsg): MsgRegisterDevFeeInfo {
    return MsgRegisterDevFeeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterDevFeeInfoProtoMsg): MsgRegisterDevFeeInfo {
    return MsgRegisterDevFeeInfo.decode(message.value);
  },
  toProto(message: MsgRegisterDevFeeInfo): Uint8Array {
    return MsgRegisterDevFeeInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterDevFeeInfo): MsgRegisterDevFeeInfoProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfo",
      value: MsgRegisterDevFeeInfo.encode(message).finish()
    };
  }
};
function createBaseMsgRegisterDevFeeInfoResponse(): MsgRegisterDevFeeInfoResponse {
  return {};
}
export const MsgRegisterDevFeeInfoResponse = {
  typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfoResponse",
  encode(_: MsgRegisterDevFeeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterDevFeeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterDevFeeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgRegisterDevFeeInfoResponse>): MsgRegisterDevFeeInfoResponse {
    const message = createBaseMsgRegisterDevFeeInfoResponse();
    return message;
  },
  fromAmino(_: MsgRegisterDevFeeInfoResponseAmino): MsgRegisterDevFeeInfoResponse {
    const message = createBaseMsgRegisterDevFeeInfoResponse();
    return message;
  },
  toAmino(_: MsgRegisterDevFeeInfoResponse): MsgRegisterDevFeeInfoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterDevFeeInfoResponseAminoMsg): MsgRegisterDevFeeInfoResponse {
    return MsgRegisterDevFeeInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRegisterDevFeeInfoResponseProtoMsg): MsgRegisterDevFeeInfoResponse {
    return MsgRegisterDevFeeInfoResponse.decode(message.value);
  },
  toProto(message: MsgRegisterDevFeeInfoResponse): Uint8Array {
    return MsgRegisterDevFeeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterDevFeeInfoResponse): MsgRegisterDevFeeInfoResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgRegisterDevFeeInfoResponse",
      value: MsgRegisterDevFeeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseMsgCancelDevFeeInfo(): MsgCancelDevFeeInfo {
  return {
    contractAddress: "",
    deployerAddress: ""
  };
}
export const MsgCancelDevFeeInfo = {
  typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfo",
  encode(message: MsgCancelDevFeeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelDevFeeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelDevFeeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddress = reader.string();
          break;
        case 2:
          message.deployerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgCancelDevFeeInfo>): MsgCancelDevFeeInfo {
    const message = createBaseMsgCancelDevFeeInfo();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    return message;
  },
  fromAmino(object: MsgCancelDevFeeInfoAmino): MsgCancelDevFeeInfo {
    const message = createBaseMsgCancelDevFeeInfo();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.deployer_address !== undefined && object.deployer_address !== null) {
      message.deployerAddress = object.deployer_address;
    }
    return message;
  },
  toAmino(message: MsgCancelDevFeeInfo): MsgCancelDevFeeInfoAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.deployer_address = message.deployerAddress === "" ? undefined : message.deployerAddress;
    return obj;
  },
  fromAminoMsg(object: MsgCancelDevFeeInfoAminoMsg): MsgCancelDevFeeInfo {
    return MsgCancelDevFeeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelDevFeeInfoProtoMsg): MsgCancelDevFeeInfo {
    return MsgCancelDevFeeInfo.decode(message.value);
  },
  toProto(message: MsgCancelDevFeeInfo): Uint8Array {
    return MsgCancelDevFeeInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelDevFeeInfo): MsgCancelDevFeeInfoProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfo",
      value: MsgCancelDevFeeInfo.encode(message).finish()
    };
  }
};
function createBaseMsgCancelDevFeeInfoResponse(): MsgCancelDevFeeInfoResponse {
  return {};
}
export const MsgCancelDevFeeInfoResponse = {
  typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfoResponse",
  encode(_: MsgCancelDevFeeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelDevFeeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelDevFeeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgCancelDevFeeInfoResponse>): MsgCancelDevFeeInfoResponse {
    const message = createBaseMsgCancelDevFeeInfoResponse();
    return message;
  },
  fromAmino(_: MsgCancelDevFeeInfoResponseAmino): MsgCancelDevFeeInfoResponse {
    const message = createBaseMsgCancelDevFeeInfoResponse();
    return message;
  },
  toAmino(_: MsgCancelDevFeeInfoResponse): MsgCancelDevFeeInfoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelDevFeeInfoResponseAminoMsg): MsgCancelDevFeeInfoResponse {
    return MsgCancelDevFeeInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCancelDevFeeInfoResponseProtoMsg): MsgCancelDevFeeInfoResponse {
    return MsgCancelDevFeeInfoResponse.decode(message.value);
  },
  toProto(message: MsgCancelDevFeeInfoResponse): Uint8Array {
    return MsgCancelDevFeeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelDevFeeInfoResponse): MsgCancelDevFeeInfoResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgCancelDevFeeInfoResponse",
      value: MsgCancelDevFeeInfoResponse.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDevFeeInfo(): MsgUpdateDevFeeInfo {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawAddress: ""
  };
}
export const MsgUpdateDevFeeInfo = {
  typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfo",
  encode(message: MsgUpdateDevFeeInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDevFeeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDevFeeInfo();
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
  fromPartial(object: DeepPartial<MsgUpdateDevFeeInfo>): MsgUpdateDevFeeInfo {
    const message = createBaseMsgUpdateDevFeeInfo();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateDevFeeInfoAmino): MsgUpdateDevFeeInfo {
    const message = createBaseMsgUpdateDevFeeInfo();
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contractAddress = object.contract_address;
    }
    if (object.deployer_address !== undefined && object.deployer_address !== null) {
      message.deployerAddress = object.deployer_address;
    }
    if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    return message;
  },
  toAmino(message: MsgUpdateDevFeeInfo): MsgUpdateDevFeeInfoAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress === "" ? undefined : message.contractAddress;
    obj.deployer_address = message.deployerAddress === "" ? undefined : message.deployerAddress;
    obj.withdraw_address = message.withdrawAddress === "" ? undefined : message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDevFeeInfoAminoMsg): MsgUpdateDevFeeInfo {
    return MsgUpdateDevFeeInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDevFeeInfoProtoMsg): MsgUpdateDevFeeInfo {
    return MsgUpdateDevFeeInfo.decode(message.value);
  },
  toProto(message: MsgUpdateDevFeeInfo): Uint8Array {
    return MsgUpdateDevFeeInfo.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDevFeeInfo): MsgUpdateDevFeeInfoProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfo",
      value: MsgUpdateDevFeeInfo.encode(message).finish()
    };
  }
};
function createBaseMsgUpdateDevFeeInfoResponse(): MsgUpdateDevFeeInfoResponse {
  return {};
}
export const MsgUpdateDevFeeInfoResponse = {
  typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfoResponse",
  encode(_: MsgUpdateDevFeeInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDevFeeInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDevFeeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<MsgUpdateDevFeeInfoResponse>): MsgUpdateDevFeeInfoResponse {
    const message = createBaseMsgUpdateDevFeeInfoResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDevFeeInfoResponseAmino): MsgUpdateDevFeeInfoResponse {
    const message = createBaseMsgUpdateDevFeeInfoResponse();
    return message;
  },
  toAmino(_: MsgUpdateDevFeeInfoResponse): MsgUpdateDevFeeInfoResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDevFeeInfoResponseAminoMsg): MsgUpdateDevFeeInfoResponse {
    return MsgUpdateDevFeeInfoResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDevFeeInfoResponseProtoMsg): MsgUpdateDevFeeInfoResponse {
    return MsgUpdateDevFeeInfoResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDevFeeInfoResponse): Uint8Array {
    return MsgUpdateDevFeeInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDevFeeInfoResponse): MsgUpdateDevFeeInfoResponseProtoMsg {
    return {
      typeUrl: "/evmos.fees.v1.MsgUpdateDevFeeInfoResponse",
      value: MsgUpdateDevFeeInfoResponse.encode(message).finish()
    };
  }
};