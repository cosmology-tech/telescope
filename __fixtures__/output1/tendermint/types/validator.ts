import { PublicKey, PublicKeySDKType } from "../crypto/keys";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../helpers";
export const protobufPackage = "tendermint.types";
export interface ValidatorSet {
  validators: Validator[];
  proposer?: Validator;
  totalVotingPower: Long;
}
export interface ValidatorSetSDKType {
  validators: ValidatorSDKType[];
  proposer?: ValidatorSDKType;
  total_voting_power: Long;
}
export interface Validator {
  address: Uint8Array;
  pubKey?: PublicKey;
  votingPower: Long;
  proposerPriority: Long;
}
export interface ValidatorSDKType {
  address: Uint8Array;
  pub_key?: PublicKeySDKType;
  voting_power: Long;
  proposer_priority: Long;
}
export interface SimpleValidator {
  pubKey?: PublicKey;
  votingPower: Long;
}
export interface SimpleValidatorSDKType {
  pub_key?: PublicKeySDKType;
  voting_power: Long;
}

function createBaseValidatorSet(): ValidatorSet {
  return {
    validators: [],
    proposer: undefined,
    totalVotingPower: Long.ZERO
  };
}

export const ValidatorSet = {
  encode(message: ValidatorSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.proposer !== undefined) {
      Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
    }

    if (!message.totalVotingPower.isZero()) {
      writer.uint32(24).int64(message.totalVotingPower);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSet();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 2:
          message.proposer = Validator.decode(reader, reader.uint32());
          break;

        case 3:
          message.totalVotingPower = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): ValidatorSet {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      proposer: isSet(object.proposer) ? Validator.fromJSON(object.proposer) : undefined,
      totalVotingPower: isSet(object.totalVotingPower) ? Long.fromValue(object.totalVotingPower) : Long.ZERO
    };
  },

  toJSON(message: ValidatorSet): unknown {
    const obj: any = {};

    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }

    message.proposer !== undefined && (obj.proposer = message.proposer ? Validator.toJSON(message.proposer) : undefined);
    message.totalVotingPower !== undefined && (obj.totalVotingPower = (message.totalVotingPower || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<ValidatorSet>): ValidatorSet {
    const message = createBaseValidatorSet();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    message.proposer = object.proposer !== undefined && object.proposer !== null ? Validator.fromPartial(object.proposer) : undefined;
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? Long.fromValue(object.totalVotingPower) : Long.ZERO;
    return message;
  },

  fromSDK(object: ValidatorSetSDKType): ValidatorSet {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromSDK(e)) : [],
      proposer: isSet(object.proposer) ? Validator.fromSDK(object.proposer) : undefined,
      totalVotingPower: isSet(object.total_voting_power) ? object.total_voting_power : undefined
    };
  },

  toSDK(message: ValidatorSet): ValidatorSetSDKType {
    const obj: any = {};

    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toSDK(e) : undefined);
    } else {
      obj.validators = [];
    }

    message.proposer !== undefined && (obj.proposer = message.proposer ? Validator.toSDK(message.proposer) : undefined);
    message.totalVotingPower !== undefined && (obj.total_voting_power = message.totalVotingPower);
    return obj;
  },

  fromAmino(object: ValidatorSetSDKType): ValidatorSet {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromAmino(e)) : [],
      proposer: isSet(object.proposer) ? Validator.fromAmino(object.proposer) : undefined,
      totalVotingPower: isSet(object.total_voting_power) ? object.total_voting_power : undefined
    };
  },

  toAmino(message: ValidatorSet): ValidatorSetSDKType {
    const obj: any = {};

    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = [];
    }

    message.proposer !== undefined && (obj.proposer = message.proposer ? Validator.toAmino(message.proposer) : undefined);
    message.totalVotingPower !== undefined && (obj.total_voting_power = message.totalVotingPower);
    return obj;
  }

};

function createBaseValidator(): Validator {
  return {
    address: new Uint8Array(),
    pubKey: undefined,
    votingPower: Long.ZERO,
    proposerPriority: Long.ZERO
  };
}

export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address.length !== 0) {
      writer.uint32(10).bytes(message.address);
    }

    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }

    if (!message.votingPower.isZero()) {
      writer.uint32(24).int64(message.votingPower);
    }

    if (!message.proposerPriority.isZero()) {
      writer.uint32(32).int64(message.proposerPriority);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.address = reader.bytes();
          break;

        case 2:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;

        case 3:
          message.votingPower = (reader.int64() as Long);
          break;

        case 4:
          message.proposerPriority = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Validator {
    return {
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : undefined,
      votingPower: isSet(object.votingPower) ? Long.fromValue(object.votingPower) : Long.ZERO,
      proposerPriority: isSet(object.proposerPriority) ? Long.fromValue(object.proposerPriority) : Long.ZERO
    };
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || Long.ZERO).toString());
    message.proposerPriority !== undefined && (obj.proposerPriority = (message.proposerPriority || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? new Uint8Array();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? Long.fromValue(object.votingPower) : Long.ZERO;
    message.proposerPriority = object.proposerPriority !== undefined && object.proposerPriority !== null ? Long.fromValue(object.proposerPriority) : Long.ZERO;
    return message;
  },

  fromSDK(object: ValidatorSDKType): Validator {
    return {
      address: isSet(object.address) ? object.address : undefined,
      pubKey: isSet(object.pub_key) ? PublicKey.fromSDK(object.pub_key) : undefined,
      votingPower: isSet(object.voting_power) ? object.voting_power : undefined,
      proposerPriority: isSet(object.proposer_priority) ? object.proposer_priority : undefined
    };
  },

  toSDK(message: Validator): ValidatorSDKType {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pub_key = message.pubKey ? PublicKey.toSDK(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.voting_power = message.votingPower);
    message.proposerPriority !== undefined && (obj.proposer_priority = message.proposerPriority);
    return obj;
  },

  fromAmino(object: ValidatorSDKType): Validator {
    return {
      address: isSet(object.address) ? object.address : undefined,
      pubKey: isSet(object.pub_key) ? PublicKey.fromAmino(object.pub_key) : undefined,
      votingPower: isSet(object.voting_power) ? object.voting_power : undefined,
      proposerPriority: isSet(object.proposer_priority) ? object.proposer_priority : undefined
    };
  },

  toAmino(message: Validator): ValidatorSDKType {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.voting_power = message.votingPower);
    message.proposerPriority !== undefined && (obj.proposer_priority = message.proposerPriority);
    return obj;
  }

};

function createBaseSimpleValidator(): SimpleValidator {
  return {
    pubKey: undefined,
    votingPower: Long.ZERO
  };
}

export const SimpleValidator = {
  encode(message: SimpleValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(10).fork()).ldelim();
    }

    if (!message.votingPower.isZero()) {
      writer.uint32(16).int64(message.votingPower);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SimpleValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimpleValidator();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;

        case 2:
          message.votingPower = (reader.int64() as Long);
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): SimpleValidator {
    return {
      pubKey: isSet(object.pubKey) ? PublicKey.fromJSON(object.pubKey) : undefined,
      votingPower: isSet(object.votingPower) ? Long.fromValue(object.votingPower) : Long.ZERO
    };
  },

  toJSON(message: SimpleValidator): unknown {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || Long.ZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<SimpleValidator>): SimpleValidator {
    const message = createBaseSimpleValidator();
    message.pubKey = object.pubKey !== undefined && object.pubKey !== null ? PublicKey.fromPartial(object.pubKey) : undefined;
    message.votingPower = object.votingPower !== undefined && object.votingPower !== null ? Long.fromValue(object.votingPower) : Long.ZERO;
    return message;
  },

  fromSDK(object: SimpleValidatorSDKType): SimpleValidator {
    return {
      pubKey: isSet(object.pub_key) ? PublicKey.fromSDK(object.pub_key) : undefined,
      votingPower: isSet(object.voting_power) ? object.voting_power : undefined
    };
  },

  toSDK(message: SimpleValidator): SimpleValidatorSDKType {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pub_key = message.pubKey ? PublicKey.toSDK(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.voting_power = message.votingPower);
    return obj;
  },

  fromAmino(object: SimpleValidatorSDKType): SimpleValidator {
    return {
      pubKey: isSet(object.pub_key) ? PublicKey.fromAmino(object.pub_key) : undefined,
      votingPower: isSet(object.voting_power) ? object.voting_power : undefined
    };
  },

  toAmino(message: SimpleValidator): SimpleValidatorSDKType {
    const obj: any = {};
    message.pubKey !== undefined && (obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.voting_power = message.votingPower);
    return obj;
  }

};