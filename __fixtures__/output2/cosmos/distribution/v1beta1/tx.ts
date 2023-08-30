//@ts-nocheck
/* eslint-disable */
import { Coin } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, Rpc } from "../../../helpers";
export const protobufPackage = "cosmos.distribution.v1beta1";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
  delegatorAddress: string;
  withdrawAddress: string;
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponse {}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
  delegatorAddress: string;
  validatorAddress: string;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponse {}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
  validatorAddress: string;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponse {}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
  amount: Coin[];
  depositor: string;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {}
function createBaseMsgSetWithdrawAddress(): MsgSetWithdrawAddress {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}
export const MsgSetWithdrawAddress = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
  encode(message: MsgSetWithdrawAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.withdrawAddress !== "") {
      writer.uint32(18).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawAddress {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetWithdrawAddress {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      withdrawAddress: isSet(object.withdrawAddress) ? String(object.withdrawAddress) : ""
    };
  },
  toJSON(message: MsgSetWithdrawAddress): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgSetWithdrawAddress>): MsgSetWithdrawAddress {
    const message = createBaseMsgSetWithdrawAddress();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromAmino(object: MsgSetWithdrawAddressAmino): MsgSetWithdrawAddress {
    return {
      delegatorAddress: object.delegator_address,
      withdrawAddress: object.withdraw_address
    };
  },
  toAmino(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: MsgSetWithdrawAddressAminoMsg): MsgSetWithdrawAddress {
    return MsgSetWithdrawAddress.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressAminoMsg {
    return {
      type: "cosmos-sdk/MsgModifyWithdrawAddress",
      value: MsgSetWithdrawAddress.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetWithdrawAddressProtoMsg): MsgSetWithdrawAddress {
    return MsgSetWithdrawAddress.decode(message.value);
  },
  toProto(message: MsgSetWithdrawAddress): Uint8Array {
    return MsgSetWithdrawAddress.encode(message).finish();
  },
  toProtoMsg(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
      value: MsgSetWithdrawAddress.encode(message).finish()
    };
  }
};
function createBaseMsgSetWithdrawAddressResponse(): MsgSetWithdrawAddressResponse {
  return {};
}
export const MsgSetWithdrawAddressResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
  encode(_: MsgSetWithdrawAddressResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetWithdrawAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetWithdrawAddressResponse();
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
  fromJSON(_: any): MsgSetWithdrawAddressResponse {
    return {};
  },
  toJSON(_: MsgSetWithdrawAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSetWithdrawAddressResponse>): MsgSetWithdrawAddressResponse {
    const message = createBaseMsgSetWithdrawAddressResponse();
    return message;
  },
  fromAmino(_: MsgSetWithdrawAddressResponseAmino): MsgSetWithdrawAddressResponse {
    return {};
  },
  toAmino(_: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSetWithdrawAddressResponseAminoMsg): MsgSetWithdrawAddressResponse {
    return MsgSetWithdrawAddressResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSetWithdrawAddressResponse",
      value: MsgSetWithdrawAddressResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgSetWithdrawAddressResponseProtoMsg): MsgSetWithdrawAddressResponse {
    return MsgSetWithdrawAddressResponse.decode(message.value);
  },
  toProto(message: MsgSetWithdrawAddressResponse): Uint8Array {
    return MsgSetWithdrawAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse",
      value: MsgSetWithdrawAddressResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDelegatorReward(): MsgWithdrawDelegatorReward {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}
export const MsgWithdrawDelegatorReward = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
  encode(message: MsgWithdrawDelegatorReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegatorReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawDelegatorReward {
    return {
      delegatorAddress: isSet(object.delegatorAddress) ? String(object.delegatorAddress) : "",
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  toJSON(message: MsgWithdrawDelegatorReward): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawDelegatorReward>): MsgWithdrawDelegatorReward {
    const message = createBaseMsgWithdrawDelegatorReward();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawDelegatorRewardAmino): MsgWithdrawDelegatorReward {
    return {
      delegatorAddress: object.delegator_address,
      validatorAddress: object.validator_address
    };
  },
  toAmino(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDelegatorRewardAminoMsg): MsgWithdrawDelegatorReward {
    return MsgWithdrawDelegatorReward.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawDelegationReward",
      value: MsgWithdrawDelegatorReward.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawDelegatorRewardProtoMsg): MsgWithdrawDelegatorReward {
    return MsgWithdrawDelegatorReward.decode(message.value);
  },
  toProto(message: MsgWithdrawDelegatorReward): Uint8Array {
    return MsgWithdrawDelegatorReward.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
      value: MsgWithdrawDelegatorReward.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawDelegatorRewardResponse(): MsgWithdrawDelegatorRewardResponse {
  return {};
}
export const MsgWithdrawDelegatorRewardResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
  encode(_: MsgWithdrawDelegatorRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegatorRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
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
  fromJSON(_: any): MsgWithdrawDelegatorRewardResponse {
    return {};
  },
  toJSON(_: MsgWithdrawDelegatorRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgWithdrawDelegatorRewardResponse>): MsgWithdrawDelegatorRewardResponse {
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawDelegatorRewardResponseAmino): MsgWithdrawDelegatorRewardResponse {
    return {};
  },
  toAmino(_: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawDelegatorRewardResponseAminoMsg): MsgWithdrawDelegatorRewardResponse {
    return MsgWithdrawDelegatorRewardResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse",
      value: MsgWithdrawDelegatorRewardResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawDelegatorRewardResponseProtoMsg): MsgWithdrawDelegatorRewardResponse {
    return MsgWithdrawDelegatorRewardResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawDelegatorRewardResponse): Uint8Array {
    return MsgWithdrawDelegatorRewardResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse",
      value: MsgWithdrawDelegatorRewardResponse.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawValidatorCommission(): MsgWithdrawValidatorCommission {
  return {
    validatorAddress: ""
  };
}
export const MsgWithdrawValidatorCommission = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
  encode(message: MsgWithdrawValidatorCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawValidatorCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawValidatorCommission {
    return {
      validatorAddress: isSet(object.validatorAddress) ? String(object.validatorAddress) : ""
    };
  },
  toJSON(message: MsgWithdrawValidatorCommission): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgWithdrawValidatorCommission>): MsgWithdrawValidatorCommission {
    const message = createBaseMsgWithdrawValidatorCommission();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgWithdrawValidatorCommissionAmino): MsgWithdrawValidatorCommission {
    return {
      validatorAddress: object.validator_address
    };
  },
  toAmino(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawValidatorCommissionAminoMsg): MsgWithdrawValidatorCommission {
    return MsgWithdrawValidatorCommission.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawValidatorCommission",
      value: MsgWithdrawValidatorCommission.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawValidatorCommissionProtoMsg): MsgWithdrawValidatorCommission {
    return MsgWithdrawValidatorCommission.decode(message.value);
  },
  toProto(message: MsgWithdrawValidatorCommission): Uint8Array {
    return MsgWithdrawValidatorCommission.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
      value: MsgWithdrawValidatorCommission.encode(message).finish()
    };
  }
};
function createBaseMsgWithdrawValidatorCommissionResponse(): MsgWithdrawValidatorCommissionResponse {
  return {};
}
export const MsgWithdrawValidatorCommissionResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
  encode(_: MsgWithdrawValidatorCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawValidatorCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
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
  fromJSON(_: any): MsgWithdrawValidatorCommissionResponse {
    return {};
  },
  toJSON(_: MsgWithdrawValidatorCommissionResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgWithdrawValidatorCommissionResponse>): MsgWithdrawValidatorCommissionResponse {
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    return message;
  },
  fromAmino(_: MsgWithdrawValidatorCommissionResponseAmino): MsgWithdrawValidatorCommissionResponse {
    return {};
  },
  toAmino(_: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgWithdrawValidatorCommissionResponseAminoMsg): MsgWithdrawValidatorCommissionResponse {
    return MsgWithdrawValidatorCommissionResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse",
      value: MsgWithdrawValidatorCommissionResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgWithdrawValidatorCommissionResponseProtoMsg): MsgWithdrawValidatorCommissionResponse {
    return MsgWithdrawValidatorCommissionResponse.decode(message.value);
  },
  toProto(message: MsgWithdrawValidatorCommissionResponse): Uint8Array {
    return MsgWithdrawValidatorCommissionResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse",
      value: MsgWithdrawValidatorCommissionResponse.encode(message).finish()
    };
  }
};
function createBaseMsgFundCommunityPool(): MsgFundCommunityPool {
  return {
    amount: [],
    depositor: ""
  };
}
export const MsgFundCommunityPool = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
  encode(message: MsgFundCommunityPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundCommunityPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFundCommunityPool {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : [],
      depositor: isSet(object.depositor) ? String(object.depositor) : ""
    };
  },
  toJSON(message: MsgFundCommunityPool): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },
  fromPartial(object: Partial<MsgFundCommunityPool>): MsgFundCommunityPool {
    const message = createBaseMsgFundCommunityPool();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromAmino(object: MsgFundCommunityPoolAmino): MsgFundCommunityPool {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : [],
      depositor: object.depositor
    };
  },
  toAmino(message: MsgFundCommunityPool): MsgFundCommunityPoolAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    obj.depositor = message.depositor;
    return obj;
  },
  fromAminoMsg(object: MsgFundCommunityPoolAminoMsg): MsgFundCommunityPool {
    return MsgFundCommunityPool.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolAminoMsg {
    return {
      type: "cosmos-sdk/MsgFundCommunityPool",
      value: MsgFundCommunityPool.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFundCommunityPoolProtoMsg): MsgFundCommunityPool {
    return MsgFundCommunityPool.decode(message.value);
  },
  toProto(message: MsgFundCommunityPool): Uint8Array {
    return MsgFundCommunityPool.encode(message).finish();
  },
  toProtoMsg(message: MsgFundCommunityPool): MsgFundCommunityPoolProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
      value: MsgFundCommunityPool.encode(message).finish()
    };
  }
};
function createBaseMsgFundCommunityPoolResponse(): MsgFundCommunityPoolResponse {
  return {};
}
export const MsgFundCommunityPoolResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
  encode(_: MsgFundCommunityPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundCommunityPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundCommunityPoolResponse();
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
  fromJSON(_: any): MsgFundCommunityPoolResponse {
    return {};
  },
  toJSON(_: MsgFundCommunityPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgFundCommunityPoolResponse>): MsgFundCommunityPoolResponse {
    const message = createBaseMsgFundCommunityPoolResponse();
    return message;
  },
  fromAmino(_: MsgFundCommunityPoolResponseAmino): MsgFundCommunityPoolResponse {
    return {};
  },
  toAmino(_: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgFundCommunityPoolResponseAminoMsg): MsgFundCommunityPoolResponse {
    return MsgFundCommunityPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgFundCommunityPoolResponse",
      value: MsgFundCommunityPoolResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgFundCommunityPoolResponseProtoMsg): MsgFundCommunityPoolResponse {
    return MsgFundCommunityPoolResponse.decode(message.value);
  },
  toProto(message: MsgFundCommunityPoolResponse): Uint8Array {
    return MsgFundCommunityPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse",
      value: MsgFundCommunityPoolResponse.encode(message).finish()
    };
  }
};
/** Msg defines the distribution Msg service. */
export interface Msg {
  /**
   * SetWithdrawAddress defines a method to change the withdraw address
   * for a delegator (or validator self-delegation).
   */
  SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
  /**
   * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   * from a single validator.
   */
  WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
  /**
   * WithdrawValidatorCommission defines a method to withdraw the
   * full commission to the validator address.
   */
  WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
  /**
   * FundCommunityPool defines a method to allow an account to directly
   * fund the community pool.
   */
  FundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SetWithdrawAddress = this.SetWithdrawAddress.bind(this);
    this.WithdrawDelegatorReward = this.WithdrawDelegatorReward.bind(this);
    this.WithdrawValidatorCommission = this.WithdrawValidatorCommission.bind(this);
    this.FundCommunityPool = this.FundCommunityPool.bind(this);
  }
  SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse> {
    const data = MsgSetWithdrawAddress.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "SetWithdrawAddress", data);
    return promise.then(data => MsgSetWithdrawAddressResponse.decode(new _m0.Reader(data)));
  }
  WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse> {
    const data = MsgWithdrawDelegatorReward.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawDelegatorReward", data);
    return promise.then(data => MsgWithdrawDelegatorRewardResponse.decode(new _m0.Reader(data)));
  }
  WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse> {
    const data = MsgWithdrawValidatorCommission.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "WithdrawValidatorCommission", data);
    return promise.then(data => MsgWithdrawValidatorCommissionResponse.decode(new _m0.Reader(data)));
  }
  FundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse> {
    const data = MsgFundCommunityPool.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Msg", "FundCommunityPool", data);
    return promise.then(data => MsgFundCommunityPoolResponse.decode(new _m0.Reader(data)));
  }
}