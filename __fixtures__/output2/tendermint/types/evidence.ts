//@ts-nocheck
/* eslint-disable */
import { Vote, LightBlock } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Validator } from "./validator";
import * as _m0 from "protobufjs/minimal";
import { isSet, DeepPartial, Long, fromTimestamp, fromJsonTimestamp } from "../../helpers";
export const protobufPackage = "tendermint.types";
export interface Evidence {
  duplicateVoteEvidence?: DuplicateVoteEvidence;
  lightClientAttackEvidence?: LightClientAttackEvidence;
}

/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
  voteA?: Vote;
  voteB?: Vote;
  totalVotingPower: Long;
  validatorPower: Long;
  timestamp?: Timestamp;
}

/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
  conflictingBlock?: LightBlock;
  commonHeight: Long;
  byzantineValidators: Validator[];
  totalVotingPower: Long;
  timestamp?: Timestamp;
}
export interface EvidenceList {
  evidence: Evidence[];
}

function createBaseEvidence(): Evidence {
  return {
    duplicateVoteEvidence: undefined,
    lightClientAttackEvidence: undefined
  };
}

export const Evidence = {
  encode(message: Evidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.duplicateVoteEvidence !== undefined) {
      DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(10).fork()).ldelim();
    }

    if (message.lightClientAttackEvidence !== undefined) {
      LightClientAttackEvidence.encode(message.lightClientAttackEvidence, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Evidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.duplicateVoteEvidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
          break;

        case 2:
          message.lightClientAttackEvidence = LightClientAttackEvidence.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Evidence {
    return {
      duplicateVoteEvidence: isSet(object.duplicateVoteEvidence) ? DuplicateVoteEvidence.fromJSON(object.duplicateVoteEvidence) : undefined,
      lightClientAttackEvidence: isSet(object.lightClientAttackEvidence) ? LightClientAttackEvidence.fromJSON(object.lightClientAttackEvidence) : undefined
    };
  },

  toJSON(message: Evidence): unknown {
    const obj: any = {};
    message.duplicateVoteEvidence !== undefined && (obj.duplicateVoteEvidence = message.duplicateVoteEvidence ? DuplicateVoteEvidence.toJSON(message.duplicateVoteEvidence) : undefined);
    message.lightClientAttackEvidence !== undefined && (obj.lightClientAttackEvidence = message.lightClientAttackEvidence ? LightClientAttackEvidence.toJSON(message.lightClientAttackEvidence) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Evidence>): Evidence {
    const message = createBaseEvidence();
    message.duplicateVoteEvidence = object.duplicateVoteEvidence !== undefined && object.duplicateVoteEvidence !== null ? DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence) : undefined;
    message.lightClientAttackEvidence = object.lightClientAttackEvidence !== undefined && object.lightClientAttackEvidence !== null ? LightClientAttackEvidence.fromPartial(object.lightClientAttackEvidence) : undefined;
    return message;
  },

  fromSDKJSON(object: any): EvidenceSDKType {
    return {
      duplicate_vote_evidence: isSet(object.duplicate_vote_evidence) ? DuplicateVoteEvidence.fromSDKJSON(object.duplicate_vote_evidence) : undefined,
      light_client_attack_evidence: isSet(object.light_client_attack_evidence) ? LightClientAttackEvidence.fromSDKJSON(object.light_client_attack_evidence) : undefined
    };
  }

};

function createBaseDuplicateVoteEvidence(): DuplicateVoteEvidence {
  return {
    voteA: undefined,
    voteB: undefined,
    totalVotingPower: Long.ZERO,
    validatorPower: Long.ZERO,
    timestamp: undefined
  };
}

export const DuplicateVoteEvidence = {
  encode(message: DuplicateVoteEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.voteA !== undefined) {
      Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
    }

    if (message.voteB !== undefined) {
      Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
    }

    if (!message.totalVotingPower.isZero()) {
      writer.uint32(24).int64(message.totalVotingPower);
    }

    if (!message.validatorPower.isZero()) {
      writer.uint32(32).int64(message.validatorPower);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DuplicateVoteEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDuplicateVoteEvidence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.voteA = Vote.decode(reader, reader.uint32());
          break;

        case 2:
          message.voteB = Vote.decode(reader, reader.uint32());
          break;

        case 3:
          message.totalVotingPower = (reader.int64() as Long);
          break;

        case 4:
          message.validatorPower = (reader.int64() as Long);
          break;

        case 5:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DuplicateVoteEvidence {
    return {
      voteA: isSet(object.voteA) ? Vote.fromJSON(object.voteA) : undefined,
      voteB: isSet(object.voteB) ? Vote.fromJSON(object.voteB) : undefined,
      totalVotingPower: isSet(object.totalVotingPower) ? Long.fromValue(object.totalVotingPower) : Long.ZERO,
      validatorPower: isSet(object.validatorPower) ? Long.fromValue(object.validatorPower) : Long.ZERO,
      timestamp: isSet(object.timestamp) ? fromTimestamp(fromJsonTimestamp(object.timestamp)) : undefined
    };
  },

  toJSON(message: DuplicateVoteEvidence): unknown {
    const obj: any = {};
    message.voteA !== undefined && (obj.voteA = message.voteA ? Vote.toJSON(message.voteA) : undefined);
    message.voteB !== undefined && (obj.voteB = message.voteB ? Vote.toJSON(message.voteB) : undefined);
    message.totalVotingPower !== undefined && (obj.totalVotingPower = (message.totalVotingPower || Long.ZERO).toString());
    message.validatorPower !== undefined && (obj.validatorPower = (message.validatorPower || Long.ZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<DuplicateVoteEvidence>): DuplicateVoteEvidence {
    const message = createBaseDuplicateVoteEvidence();
    message.voteA = object.voteA !== undefined && object.voteA !== null ? Vote.fromPartial(object.voteA) : undefined;
    message.voteB = object.voteB !== undefined && object.voteB !== null ? Vote.fromPartial(object.voteB) : undefined;
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? Long.fromValue(object.totalVotingPower) : Long.ZERO;
    message.validatorPower = object.validatorPower !== undefined && object.validatorPower !== null ? Long.fromValue(object.validatorPower) : Long.ZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  },

  fromSDKJSON(object: any): DuplicateVoteEvidenceSDKType {
    return {
      vote_a: isSet(object.vote_a) ? Vote.fromSDKJSON(object.vote_a) : undefined,
      vote_b: isSet(object.vote_b) ? Vote.fromSDKJSON(object.vote_b) : undefined,
      total_voting_power: isSet(object.total_voting_power) ? Long.fromValue(object.total_voting_power) : Long.ZERO,
      validator_power: isSet(object.validator_power) ? Long.fromValue(object.validator_power) : Long.ZERO,
      timestamp: isSet(object.timestamp) ? fromTimestamp(fromJsonTimestamp(object.timestamp)) : undefined
    };
  }

};

function createBaseLightClientAttackEvidence(): LightClientAttackEvidence {
  return {
    conflictingBlock: undefined,
    commonHeight: Long.ZERO,
    byzantineValidators: [],
    totalVotingPower: Long.ZERO,
    timestamp: undefined
  };
}

export const LightClientAttackEvidence = {
  encode(message: LightClientAttackEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.conflictingBlock !== undefined) {
      LightBlock.encode(message.conflictingBlock, writer.uint32(10).fork()).ldelim();
    }

    if (!message.commonHeight.isZero()) {
      writer.uint32(16).int64(message.commonHeight);
    }

    for (const v of message.byzantineValidators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    if (!message.totalVotingPower.isZero()) {
      writer.uint32(32).int64(message.totalVotingPower);
    }

    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LightClientAttackEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightClientAttackEvidence();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.conflictingBlock = LightBlock.decode(reader, reader.uint32());
          break;

        case 2:
          message.commonHeight = (reader.int64() as Long);
          break;

        case 3:
          message.byzantineValidators.push(Validator.decode(reader, reader.uint32()));
          break;

        case 4:
          message.totalVotingPower = (reader.int64() as Long);
          break;

        case 5:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): LightClientAttackEvidence {
    return {
      conflictingBlock: isSet(object.conflictingBlock) ? LightBlock.fromJSON(object.conflictingBlock) : undefined,
      commonHeight: isSet(object.commonHeight) ? Long.fromValue(object.commonHeight) : Long.ZERO,
      byzantineValidators: Array.isArray(object?.byzantineValidators) ? object.byzantineValidators.map((e: any) => Validator.fromJSON(e)) : [],
      totalVotingPower: isSet(object.totalVotingPower) ? Long.fromValue(object.totalVotingPower) : Long.ZERO,
      timestamp: isSet(object.timestamp) ? fromTimestamp(fromJsonTimestamp(object.timestamp)) : undefined
    };
  },

  toJSON(message: LightClientAttackEvidence): unknown {
    const obj: any = {};
    message.conflictingBlock !== undefined && (obj.conflictingBlock = message.conflictingBlock ? LightBlock.toJSON(message.conflictingBlock) : undefined);
    message.commonHeight !== undefined && (obj.commonHeight = (message.commonHeight || Long.ZERO).toString());

    if (message.byzantineValidators) {
      obj.byzantineValidators = message.byzantineValidators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.byzantineValidators = [];
    }

    message.totalVotingPower !== undefined && (obj.totalVotingPower = (message.totalVotingPower || Long.ZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },

  fromPartial(object: DeepPartial<LightClientAttackEvidence>): LightClientAttackEvidence {
    const message = createBaseLightClientAttackEvidence();
    message.conflictingBlock = object.conflictingBlock !== undefined && object.conflictingBlock !== null ? LightBlock.fromPartial(object.conflictingBlock) : undefined;
    message.commonHeight = object.commonHeight !== undefined && object.commonHeight !== null ? Long.fromValue(object.commonHeight) : Long.ZERO;
    message.byzantineValidators = object.byzantineValidators?.map(e => Validator.fromPartial(e)) || [];
    message.totalVotingPower = object.totalVotingPower !== undefined && object.totalVotingPower !== null ? Long.fromValue(object.totalVotingPower) : Long.ZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Timestamp.fromPartial(object.timestamp) : undefined;
    return message;
  },

  fromSDKJSON(object: any): LightClientAttackEvidenceSDKType {
    return {
      conflicting_block: isSet(object.conflicting_block) ? LightBlock.fromSDKJSON(object.conflicting_block) : undefined,
      common_height: isSet(object.common_height) ? Long.fromValue(object.common_height) : Long.ZERO,
      byzantine_validators: Array.isArray(object?.byzantine_validators) ? object.byzantine_validators.map((e: any) => Validator.fromSDKJSON(e)) : [],
      total_voting_power: isSet(object.total_voting_power) ? Long.fromValue(object.total_voting_power) : Long.ZERO,
      timestamp: isSet(object.timestamp) ? fromTimestamp(fromJsonTimestamp(object.timestamp)) : undefined
    };
  }

};

function createBaseEvidenceList(): EvidenceList {
  return {
    evidence: []
  };
}

export const EvidenceList = {
  encode(message: EvidenceList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.evidence) {
      Evidence.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EvidenceList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceList();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): EvidenceList {
    return {
      evidence: Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Evidence.fromJSON(e)) : []
    };
  },

  toJSON(message: EvidenceList): unknown {
    const obj: any = {};

    if (message.evidence) {
      obj.evidence = message.evidence.map(e => e ? Evidence.toJSON(e) : undefined);
    } else {
      obj.evidence = [];
    }

    return obj;
  },

  fromPartial(object: DeepPartial<EvidenceList>): EvidenceList {
    const message = createBaseEvidenceList();
    message.evidence = object.evidence?.map(e => Evidence.fromPartial(e)) || [];
    return message;
  },

  fromSDKJSON(object: any): EvidenceListSDKType {
    return {
      evidence: Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Evidence.fromSDKJSON(e)) : []
    };
  }

};