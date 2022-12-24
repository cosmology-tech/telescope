import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.distribution.v1beta1";

/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
  delegatorAddress: string;
  withdrawAddress: string;
}
export interface MsgSetWithdrawAddressProtoType {
  typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
  value: Uint8Array;
}

/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddressAmino {
  delegator_address: string;
  withdraw_address: string;
}
export interface MsgSetWithdrawAddressAminoType {
  type: "cosmos-sdk/MsgModifyWithdrawAddress";
  value: MsgSetWithdrawAddressAmino;
}

/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddressSDKType {
  delegator_address: string;
  withdraw_address: string;
}

/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponse {}
export interface MsgSetWithdrawAddressResponseProtoType {
  typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddressResponse";
  value: Uint8Array;
}

/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponseAmino {}
export interface MsgSetWithdrawAddressResponseAminoType {
  type: "cosmos-sdk/MsgSetWithdrawAddressResponse";
  value: MsgSetWithdrawAddressResponseAmino;
}

/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponseSDKType {}

/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
  delegatorAddress: string;
  validatorAddress: string;
}
export interface MsgWithdrawDelegatorRewardProtoType {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
  value: Uint8Array;
}

/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorRewardAmino {
  delegator_address: string;
  validator_address: string;
}
export interface MsgWithdrawDelegatorRewardAminoType {
  type: "cosmos-sdk/MsgWithdrawDelegationReward";
  value: MsgWithdrawDelegatorRewardAmino;
}

/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorRewardSDKType {
  delegator_address: string;
  validator_address: string;
}

/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponse {
  amount: Coin[];
}
export interface MsgWithdrawDelegatorRewardResponseProtoType {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorRewardResponse";
  value: Uint8Array;
}

/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponseAmino {
  amount: CoinAmino[];
}
export interface MsgWithdrawDelegatorRewardResponseAminoType {
  type: "cosmos-sdk/MsgWithdrawDelegatorRewardResponse";
  value: MsgWithdrawDelegatorRewardResponseAmino;
}

/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponseSDKType {
  amount: CoinSDKType[];
}

/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
  validatorAddress: string;
}
export interface MsgWithdrawValidatorCommissionProtoType {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
  value: Uint8Array;
}

/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommissionAmino {
  validator_address: string;
}
export interface MsgWithdrawValidatorCommissionAminoType {
  type: "cosmos-sdk/MsgWithdrawValidatorCommission";
  value: MsgWithdrawValidatorCommissionAmino;
}

/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommissionSDKType {
  validator_address: string;
}

/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponse {
  amount: Coin[];
}
export interface MsgWithdrawValidatorCommissionResponseProtoType {
  typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommissionResponse";
  value: Uint8Array;
}

/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponseAmino {
  amount: CoinAmino[];
}
export interface MsgWithdrawValidatorCommissionResponseAminoType {
  type: "cosmos-sdk/MsgWithdrawValidatorCommissionResponse";
  value: MsgWithdrawValidatorCommissionResponseAmino;
}

/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponseSDKType {
  amount: CoinSDKType[];
}

/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
  amount: Coin[];
  depositor: string;
}
export interface MsgFundCommunityPoolProtoType {
  typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool";
  value: Uint8Array;
}

/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPoolAmino {
  amount: CoinAmino[];
  depositor: string;
}
export interface MsgFundCommunityPoolAminoType {
  type: "cosmos-sdk/MsgFundCommunityPool";
  value: MsgFundCommunityPoolAmino;
}

/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPoolSDKType {
  amount: CoinSDKType[];
  depositor: string;
}

/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {}
export interface MsgFundCommunityPoolResponseProtoType {
  typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPoolResponse";
  value: Uint8Array;
}

/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseAmino {}
export interface MsgFundCommunityPoolResponseAminoType {
  type: "cosmos-sdk/MsgFundCommunityPoolResponse";
  value: MsgFundCommunityPoolResponseAmino;
}

/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponseSDKType {}

function createBaseMsgSetWithdrawAddress(): MsgSetWithdrawAddress {
  return {
    delegatorAddress: "",
    withdrawAddress: ""
  };
}

export const MsgSetWithdrawAddress = {
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

  fromPartial(object: DeepPartial<MsgSetWithdrawAddress>): MsgSetWithdrawAddress {
    const message = createBaseMsgSetWithdrawAddress();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },

  fromSDK(object: MsgSetWithdrawAddressSDKType): MsgSetWithdrawAddress {
    return {
      delegatorAddress: object?.delegator_address,
      withdrawAddress: object?.withdraw_address
    };
  },

  toSDK(message: MsgSetWithdrawAddress): MsgSetWithdrawAddressSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.withdraw_address = message.withdrawAddress;
    return obj;
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
  }

};

function createBaseMsgSetWithdrawAddressResponse(): MsgSetWithdrawAddressResponse {
  return {};
}

export const MsgSetWithdrawAddressResponse = {
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

  fromPartial(_: DeepPartial<MsgSetWithdrawAddressResponse>): MsgSetWithdrawAddressResponse {
    const message = createBaseMsgSetWithdrawAddressResponse();
    return message;
  },

  fromSDK(_: MsgSetWithdrawAddressResponseSDKType): MsgSetWithdrawAddressResponse {
    return {};
  },

  toSDK(_: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgSetWithdrawAddressResponseAmino): MsgSetWithdrawAddressResponse {
    return {};
  },

  toAmino(_: MsgSetWithdrawAddressResponse): MsgSetWithdrawAddressResponseAmino {
    const obj: any = {};
    return obj;
  }

};

function createBaseMsgWithdrawDelegatorReward(): MsgWithdrawDelegatorReward {
  return {
    delegatorAddress: "",
    validatorAddress: ""
  };
}

export const MsgWithdrawDelegatorReward = {
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

  fromPartial(object: DeepPartial<MsgWithdrawDelegatorReward>): MsgWithdrawDelegatorReward {
    const message = createBaseMsgWithdrawDelegatorReward();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },

  fromSDK(object: MsgWithdrawDelegatorRewardSDKType): MsgWithdrawDelegatorReward {
    return {
      delegatorAddress: object?.delegator_address,
      validatorAddress: object?.validator_address
    };
  },

  toSDK(message: MsgWithdrawDelegatorReward): MsgWithdrawDelegatorRewardSDKType {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    return obj;
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
  }

};

function createBaseMsgWithdrawDelegatorRewardResponse(): MsgWithdrawDelegatorRewardResponse {
  return {
    amount: []
  };
}

export const MsgWithdrawDelegatorRewardResponse = {
  encode(message: MsgWithdrawDelegatorRewardResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawDelegatorRewardResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegatorRewardResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgWithdrawDelegatorRewardResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgWithdrawDelegatorRewardResponse): unknown {
    const obj: any = {};

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawDelegatorRewardResponse>): MsgWithdrawDelegatorRewardResponse {
    const message = createBaseMsgWithdrawDelegatorRewardResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: MsgWithdrawDelegatorRewardResponseSDKType): MsgWithdrawDelegatorRewardResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  toSDK(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseSDKType {
    const obj: any = {};

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromAmino(object: MsgWithdrawDelegatorRewardResponseAmino): MsgWithdrawDelegatorRewardResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: MsgWithdrawDelegatorRewardResponse): MsgWithdrawDelegatorRewardResponseAmino {
    const obj: any = {};

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  }

};

function createBaseMsgWithdrawValidatorCommission(): MsgWithdrawValidatorCommission {
  return {
    validatorAddress: ""
  };
}

export const MsgWithdrawValidatorCommission = {
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

  fromPartial(object: DeepPartial<MsgWithdrawValidatorCommission>): MsgWithdrawValidatorCommission {
    const message = createBaseMsgWithdrawValidatorCommission();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },

  fromSDK(object: MsgWithdrawValidatorCommissionSDKType): MsgWithdrawValidatorCommission {
    return {
      validatorAddress: object?.validator_address
    };
  },

  toSDK(message: MsgWithdrawValidatorCommission): MsgWithdrawValidatorCommissionSDKType {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    return obj;
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
  }

};

function createBaseMsgWithdrawValidatorCommissionResponse(): MsgWithdrawValidatorCommissionResponse {
  return {
    amount: []
  };
}

export const MsgWithdrawValidatorCommissionResponse = {
  encode(message: MsgWithdrawValidatorCommissionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawValidatorCommissionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawValidatorCommissionResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): MsgWithdrawValidatorCommissionResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: MsgWithdrawValidatorCommissionResponse): unknown {
    const obj: any = {};

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdrawValidatorCommissionResponse>): MsgWithdrawValidatorCommissionResponse {
    const message = createBaseMsgWithdrawValidatorCommissionResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },

  fromSDK(object: MsgWithdrawValidatorCommissionResponseSDKType): MsgWithdrawValidatorCommissionResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : []
    };
  },

  toSDK(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseSDKType {
    const obj: any = {};

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromAmino(object: MsgWithdrawValidatorCommissionResponseAmino): MsgWithdrawValidatorCommissionResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },

  toAmino(message: MsgWithdrawValidatorCommissionResponse): MsgWithdrawValidatorCommissionResponseAmino {
    const obj: any = {};

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  }

};

function createBaseMsgFundCommunityPool(): MsgFundCommunityPool {
  return {
    amount: [],
    depositor: ""
  };
}

export const MsgFundCommunityPool = {
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

  fromPartial(object: DeepPartial<MsgFundCommunityPool>): MsgFundCommunityPool {
    const message = createBaseMsgFundCommunityPool();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    message.depositor = object.depositor ?? "";
    return message;
  },

  fromSDK(object: MsgFundCommunityPoolSDKType): MsgFundCommunityPool {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromSDK(e)) : [],
      depositor: object?.depositor
    };
  },

  toSDK(message: MsgFundCommunityPool): MsgFundCommunityPoolSDKType {
    const obj: any = {};

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toSDK(e) : undefined);
    } else {
      obj.amount = [];
    }

    obj.depositor = message.depositor;
    return obj;
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
  }

};

function createBaseMsgFundCommunityPoolResponse(): MsgFundCommunityPoolResponse {
  return {};
}

export const MsgFundCommunityPoolResponse = {
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

  fromPartial(_: DeepPartial<MsgFundCommunityPoolResponse>): MsgFundCommunityPoolResponse {
    const message = createBaseMsgFundCommunityPoolResponse();
    return message;
  },

  fromSDK(_: MsgFundCommunityPoolResponseSDKType): MsgFundCommunityPoolResponse {
    return {};
  },

  toSDK(_: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseSDKType {
    const obj: any = {};
    return obj;
  },

  fromAmino(_: MsgFundCommunityPoolResponseAmino): MsgFundCommunityPoolResponse {
    return {};
  },

  toAmino(_: MsgFundCommunityPoolResponse): MsgFundCommunityPoolResponseAmino {
    const obj: any = {};
    return obj;
  }

};