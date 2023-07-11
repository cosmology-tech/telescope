import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "osmosis.valsetpref.v1beta1";
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreference {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */
  preferences: ValidatorPreference[];
}
/** MsgCreateValidatorSetPreference is a list that holds validator-set. */
export interface MsgSetValidatorSetPreferenceSDKType {
  delegator: string;
  preferences: ValidatorPreferenceSDKType[];
}
export interface MsgSetValidatorSetPreferenceResponse {}
export interface MsgSetValidatorSetPreferenceResponseSDKType {}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSet {
  /** delegator is the user who is trying to delegate. */
  delegator: string;
  /**
   * the amount of tokens the user is trying to delegate.
   * For ex: delegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3, ValC
   * -> 0.2} our staking logic would attempt to delegate 5osmo to A , 3osmo to
   * B, 2osmo to C.
   */
  coin: Coin;
}
/**
 * MsgDelegateToValidatorSet allows users to delegate to an existing
 * validator-set
 */
export interface MsgDelegateToValidatorSetSDKType {
  delegator: string;
  coin: CoinSDKType;
}
export interface MsgDelegateToValidatorSetResponse {}
export interface MsgDelegateToValidatorSetResponseSDKType {}
export interface MsgUndelegateFromValidatorSet {
  /** delegator is the user who is trying to undelegate. */
  delegator: string;
  /**
   * the amount the user wants to undelegate
   * For ex: Undelegate 10osmo with validator-set {ValA -> 0.5, ValB -> 0.3,
   * ValC
   * -> 0.2} our undelegate logic would attempt to undelegate 5osmo from A ,
   * 3osmo from B, 2osmo from C
   */
  coin: Coin;
}
export interface MsgUndelegateFromValidatorSetSDKType {
  delegator: string;
  coin: CoinSDKType;
}
export interface MsgUndelegateFromValidatorSetResponse {}
export interface MsgUndelegateFromValidatorSetResponseSDKType {}
export interface MsgRedelegateValidatorSet {
  /** delegator is the user who is trying to create a validator-set. */
  delegator: string;
  /** list of {valAddr, weight} to delegate to */
  preferences: ValidatorPreference[];
}
export interface MsgRedelegateValidatorSetSDKType {
  delegator: string;
  preferences: ValidatorPreferenceSDKType[];
}
export interface MsgRedelegateValidatorSetResponse {}
export interface MsgRedelegateValidatorSetResponseSDKType {}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewards {
  /** delegator is the user who is trying to claim staking rewards. */
  delegator: string;
}
/**
 * MsgWithdrawDelegationRewards allows user to claim staking rewards from the
 * validator set.
 */
export interface MsgWithdrawDelegationRewardsSDKType {
  delegator: string;
}
export interface MsgWithdrawDelegationRewardsResponse {}
export interface MsgWithdrawDelegationRewardsResponseSDKType {}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokens {
  /** delegator is the user who is trying to force unbond osmo and delegate. */
  delegator: string;
  /** lockup id of osmo in the pool */
  lockID: bigint;
}
/**
 * MsgDelegateBondedTokens breaks bonded lockup (by ID) of osmo, of
 * length <= 2 weeks and takes all that osmo and delegates according to
 * delegator's current validator set preference.
 */
export interface MsgDelegateBondedTokensSDKType {
  delegator: string;
  lockID: bigint;
}
export interface MsgDelegateBondedTokensResponse {}
export interface MsgDelegateBondedTokensResponseSDKType {}
function createBaseMsgSetValidatorSetPreference(): MsgSetValidatorSetPreference {
  return {
    delegator: "",
    preferences: []
  };
}
export const MsgSetValidatorSetPreference = {
  encode(message: MsgSetValidatorSetPreference, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreference {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetValidatorSetPreference {
    const obj = createBaseMsgSetValidatorSetPreference();
    if (isSet(object.delegator)) obj.delegator = String(object.delegator);
    if (Array.isArray(object?.preferences)) object.preferences.map((e: any) => ValidatorPreference.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgSetValidatorSetPreference): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toJSON(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgSetValidatorSetPreference>): MsgSetValidatorSetPreference {
    const message = createBaseMsgSetValidatorSetPreference();
    message.delegator = object.delegator ?? "";
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgSetValidatorSetPreferenceSDKType): MsgSetValidatorSetPreference {
    return {
      delegator: object?.delegator,
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgSetValidatorSetPreferenceSDKType {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgSetValidatorSetPreference): MsgSetValidatorSetPreferenceSDKType {
    const obj: any = {};
    obj.delegator = message.delegator;
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toSDK(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  }
};
function createBaseMsgSetValidatorSetPreferenceResponse(): MsgSetValidatorSetPreferenceResponse {
  return {};
}
export const MsgSetValidatorSetPreferenceResponse = {
  encode(_: MsgSetValidatorSetPreferenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSetValidatorSetPreferenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
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
  fromJSON(_: any): MsgSetValidatorSetPreferenceResponse {
    const obj = createBaseMsgSetValidatorSetPreferenceResponse();
    return obj;
  },
  toJSON(_: MsgSetValidatorSetPreferenceResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgSetValidatorSetPreferenceResponse>): MsgSetValidatorSetPreferenceResponse {
    const message = createBaseMsgSetValidatorSetPreferenceResponse();
    return message;
  },
  fromSDK(_: MsgSetValidatorSetPreferenceResponseSDKType): MsgSetValidatorSetPreferenceResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgSetValidatorSetPreferenceResponseSDKType {
    return {};
  },
  toSDK(_: MsgSetValidatorSetPreferenceResponse): MsgSetValidatorSetPreferenceResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgDelegateToValidatorSet(): MsgDelegateToValidatorSet {
  return {
    delegator: "",
    coin: undefined
  };
}
export const MsgDelegateToValidatorSet = {
  encode(message: MsgDelegateToValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelegateToValidatorSet {
    const obj = createBaseMsgDelegateToValidatorSet();
    if (isSet(object.delegator)) obj.delegator = String(object.delegator);
    if (isSet(object.coin)) obj.coin = Coin.fromJSON(object.coin);
    return obj;
  },
  toJSON(message: MsgDelegateToValidatorSet): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDelegateToValidatorSet>): MsgDelegateToValidatorSet {
    const message = createBaseMsgDelegateToValidatorSet();
    message.delegator = object.delegator ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : Coin.fromPartial({});
    return message;
  },
  fromSDK(object: MsgDelegateToValidatorSetSDKType): MsgDelegateToValidatorSet {
    return {
      delegator: object?.delegator,
      coin: object.coin ? Coin.fromSDK(object.coin) : undefined
    };
  },
  fromSDKJSON(object: any): MsgDelegateToValidatorSetSDKType {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      coin: isSet(object.coin) ? Coin.fromSDKJSON(object.coin) : undefined
    };
  },
  toSDK(message: MsgDelegateToValidatorSet): MsgDelegateToValidatorSetSDKType {
    const obj: any = {};
    obj.delegator = message.delegator;
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toSDK(message.coin) : undefined);
    return obj;
  }
};
function createBaseMsgDelegateToValidatorSetResponse(): MsgDelegateToValidatorSetResponse {
  return {};
}
export const MsgDelegateToValidatorSetResponse = {
  encode(_: MsgDelegateToValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateToValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateToValidatorSetResponse();
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
  fromJSON(_: any): MsgDelegateToValidatorSetResponse {
    const obj = createBaseMsgDelegateToValidatorSetResponse();
    return obj;
  },
  toJSON(_: MsgDelegateToValidatorSetResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDelegateToValidatorSetResponse>): MsgDelegateToValidatorSetResponse {
    const message = createBaseMsgDelegateToValidatorSetResponse();
    return message;
  },
  fromSDK(_: MsgDelegateToValidatorSetResponseSDKType): MsgDelegateToValidatorSetResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgDelegateToValidatorSetResponseSDKType {
    return {};
  },
  toSDK(_: MsgDelegateToValidatorSetResponse): MsgDelegateToValidatorSetResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgUndelegateFromValidatorSet(): MsgUndelegateFromValidatorSet {
  return {
    delegator: "",
    coin: undefined
  };
}
export const MsgUndelegateFromValidatorSet = {
  encode(message: MsgUndelegateFromValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUndelegateFromValidatorSet {
    const obj = createBaseMsgUndelegateFromValidatorSet();
    if (isSet(object.delegator)) obj.delegator = String(object.delegator);
    if (isSet(object.coin)) obj.coin = Coin.fromJSON(object.coin);
    return obj;
  },
  toJSON(message: MsgUndelegateFromValidatorSet): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgUndelegateFromValidatorSet>): MsgUndelegateFromValidatorSet {
    const message = createBaseMsgUndelegateFromValidatorSet();
    message.delegator = object.delegator ?? "";
    message.coin = object.coin !== undefined && object.coin !== null ? Coin.fromPartial(object.coin) : Coin.fromPartial({});
    return message;
  },
  fromSDK(object: MsgUndelegateFromValidatorSetSDKType): MsgUndelegateFromValidatorSet {
    return {
      delegator: object?.delegator,
      coin: object.coin ? Coin.fromSDK(object.coin) : undefined
    };
  },
  fromSDKJSON(object: any): MsgUndelegateFromValidatorSetSDKType {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      coin: isSet(object.coin) ? Coin.fromSDKJSON(object.coin) : undefined
    };
  },
  toSDK(message: MsgUndelegateFromValidatorSet): MsgUndelegateFromValidatorSetSDKType {
    const obj: any = {};
    obj.delegator = message.delegator;
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toSDK(message.coin) : undefined);
    return obj;
  }
};
function createBaseMsgUndelegateFromValidatorSetResponse(): MsgUndelegateFromValidatorSetResponse {
  return {};
}
export const MsgUndelegateFromValidatorSetResponse = {
  encode(_: MsgUndelegateFromValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateFromValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
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
  fromJSON(_: any): MsgUndelegateFromValidatorSetResponse {
    const obj = createBaseMsgUndelegateFromValidatorSetResponse();
    return obj;
  },
  toJSON(_: MsgUndelegateFromValidatorSetResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgUndelegateFromValidatorSetResponse>): MsgUndelegateFromValidatorSetResponse {
    const message = createBaseMsgUndelegateFromValidatorSetResponse();
    return message;
  },
  fromSDK(_: MsgUndelegateFromValidatorSetResponseSDKType): MsgUndelegateFromValidatorSetResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgUndelegateFromValidatorSetResponseSDKType {
    return {};
  },
  toSDK(_: MsgUndelegateFromValidatorSetResponse): MsgUndelegateFromValidatorSetResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgRedelegateValidatorSet(): MsgRedelegateValidatorSet {
  return {
    delegator: "",
    preferences: []
  };
}
export const MsgRedelegateValidatorSet = {
  encode(message: MsgRedelegateValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.preferences) {
      ValidatorPreference.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.preferences.push(ValidatorPreference.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRedelegateValidatorSet {
    const obj = createBaseMsgRedelegateValidatorSet();
    if (isSet(object.delegator)) obj.delegator = String(object.delegator);
    if (Array.isArray(object?.preferences)) object.preferences.map((e: any) => ValidatorPreference.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgRedelegateValidatorSet): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toJSON(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<MsgRedelegateValidatorSet>): MsgRedelegateValidatorSet {
    const message = createBaseMsgRedelegateValidatorSet();
    message.delegator = object.delegator ?? "";
    message.preferences = object.preferences?.map(e => ValidatorPreference.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: MsgRedelegateValidatorSetSDKType): MsgRedelegateValidatorSet {
    return {
      delegator: object?.delegator,
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): MsgRedelegateValidatorSetSDKType {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      preferences: Array.isArray(object?.preferences) ? object.preferences.map((e: any) => ValidatorPreference.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: MsgRedelegateValidatorSet): MsgRedelegateValidatorSetSDKType {
    const obj: any = {};
    obj.delegator = message.delegator;
    if (message.preferences) {
      obj.preferences = message.preferences.map(e => e ? ValidatorPreference.toSDK(e) : undefined);
    } else {
      obj.preferences = [];
    }
    return obj;
  }
};
function createBaseMsgRedelegateValidatorSetResponse(): MsgRedelegateValidatorSetResponse {
  return {};
}
export const MsgRedelegateValidatorSetResponse = {
  encode(_: MsgRedelegateValidatorSetResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRedelegateValidatorSetResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateValidatorSetResponse();
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
  fromJSON(_: any): MsgRedelegateValidatorSetResponse {
    const obj = createBaseMsgRedelegateValidatorSetResponse();
    return obj;
  },
  toJSON(_: MsgRedelegateValidatorSetResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgRedelegateValidatorSetResponse>): MsgRedelegateValidatorSetResponse {
    const message = createBaseMsgRedelegateValidatorSetResponse();
    return message;
  },
  fromSDK(_: MsgRedelegateValidatorSetResponseSDKType): MsgRedelegateValidatorSetResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgRedelegateValidatorSetResponseSDKType {
    return {};
  },
  toSDK(_: MsgRedelegateValidatorSetResponse): MsgRedelegateValidatorSetResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgWithdrawDelegationRewards(): MsgWithdrawDelegationRewards {
  return {
    delegator: ""
  };
}
export const MsgWithdrawDelegationRewards = {
  encode(message: MsgWithdrawDelegationRewards, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewards {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgWithdrawDelegationRewards {
    const obj = createBaseMsgWithdrawDelegationRewards();
    if (isSet(object.delegator)) obj.delegator = String(object.delegator);
    return obj;
  },
  toJSON(message: MsgWithdrawDelegationRewards): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    return obj;
  },
  fromPartial(object: DeepPartial<MsgWithdrawDelegationRewards>): MsgWithdrawDelegationRewards {
    const message = createBaseMsgWithdrawDelegationRewards();
    message.delegator = object.delegator ?? "";
    return message;
  },
  fromSDK(object: MsgWithdrawDelegationRewardsSDKType): MsgWithdrawDelegationRewards {
    return {
      delegator: object?.delegator
    };
  },
  fromSDKJSON(object: any): MsgWithdrawDelegationRewardsSDKType {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : ""
    };
  },
  toSDK(message: MsgWithdrawDelegationRewards): MsgWithdrawDelegationRewardsSDKType {
    const obj: any = {};
    obj.delegator = message.delegator;
    return obj;
  }
};
function createBaseMsgWithdrawDelegationRewardsResponse(): MsgWithdrawDelegationRewardsResponse {
  return {};
}
export const MsgWithdrawDelegationRewardsResponse = {
  encode(_: MsgWithdrawDelegationRewardsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgWithdrawDelegationRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
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
  fromJSON(_: any): MsgWithdrawDelegationRewardsResponse {
    const obj = createBaseMsgWithdrawDelegationRewardsResponse();
    return obj;
  },
  toJSON(_: MsgWithdrawDelegationRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgWithdrawDelegationRewardsResponse>): MsgWithdrawDelegationRewardsResponse {
    const message = createBaseMsgWithdrawDelegationRewardsResponse();
    return message;
  },
  fromSDK(_: MsgWithdrawDelegationRewardsResponseSDKType): MsgWithdrawDelegationRewardsResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgWithdrawDelegationRewardsResponseSDKType {
    return {};
  },
  toSDK(_: MsgWithdrawDelegationRewardsResponse): MsgWithdrawDelegationRewardsResponseSDKType {
    const obj: any = {};
    return obj;
  }
};
function createBaseMsgDelegateBondedTokens(): MsgDelegateBondedTokens {
  return {
    delegator: "",
    lockID: BigInt(0)
  };
}
export const MsgDelegateBondedTokens = {
  encode(message: MsgDelegateBondedTokens, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.lockID !== BigInt(0)) {
      writer.uint32(16).uint64(message.lockID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateBondedTokens {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateBondedTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.lockID = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelegateBondedTokens {
    const obj = createBaseMsgDelegateBondedTokens();
    if (isSet(object.delegator)) obj.delegator = String(object.delegator);
    if (isSet(object.lockID)) obj.lockID = BigInt(object.lockID.toString());
    return obj;
  },
  toJSON(message: MsgDelegateBondedTokens): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.lockID !== undefined && (obj.lockID = (message.lockID || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<MsgDelegateBondedTokens>): MsgDelegateBondedTokens {
    const message = createBaseMsgDelegateBondedTokens();
    message.delegator = object.delegator ?? "";
    message.lockID = object.lockID !== undefined && object.lockID !== null ? BigInt(object.lockID.toString()) : BigInt(0);
    return message;
  },
  fromSDK(object: MsgDelegateBondedTokensSDKType): MsgDelegateBondedTokens {
    return {
      delegator: object?.delegator,
      lockID: object?.lockID
    };
  },
  fromSDKJSON(object: any): MsgDelegateBondedTokensSDKType {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      lockID: isSet(object.lockID) ? BigInt(object.lockID.toString()) : BigInt(0)
    };
  },
  toSDK(message: MsgDelegateBondedTokens): MsgDelegateBondedTokensSDKType {
    const obj: any = {};
    obj.delegator = message.delegator;
    obj.lockID = message.lockID;
    return obj;
  }
};
function createBaseMsgDelegateBondedTokensResponse(): MsgDelegateBondedTokensResponse {
  return {};
}
export const MsgDelegateBondedTokensResponse = {
  encode(_: MsgDelegateBondedTokensResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateBondedTokensResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateBondedTokensResponse();
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
  fromJSON(_: any): MsgDelegateBondedTokensResponse {
    const obj = createBaseMsgDelegateBondedTokensResponse();
    return obj;
  },
  toJSON(_: MsgDelegateBondedTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: DeepPartial<MsgDelegateBondedTokensResponse>): MsgDelegateBondedTokensResponse {
    const message = createBaseMsgDelegateBondedTokensResponse();
    return message;
  },
  fromSDK(_: MsgDelegateBondedTokensResponseSDKType): MsgDelegateBondedTokensResponse {
    return {};
  },
  fromSDKJSON(_: any): MsgDelegateBondedTokensResponseSDKType {
    return {};
  },
  toSDK(_: MsgDelegateBondedTokensResponse): MsgDelegateBondedTokensResponseSDKType {
    const obj: any = {};
    return obj;
  }
};