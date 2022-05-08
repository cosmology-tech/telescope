import * as _m0 from "protobuf/minimal";
import { isSet, Long, toTimestamp, fromTimestamp, fromJsonTimestamp, toDuration, fromDuration } from "@osmonauts/helpers";
import { Coin } from "../../base/v1beta1/coin";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
export enum VoteOption {
  /*VOTE_OPTION_UNSPECIFIED defines a no-op vote option.*/
  VOTE_OPTION_UNSPECIFIED = 0,

  /*VOTE_OPTION_YES defines a yes vote option.*/
  VOTE_OPTION_YES = 1,

  /*VOTE_OPTION_ABSTAIN defines an abstain vote option.*/
  VOTE_OPTION_ABSTAIN = 2,

  /*VOTE_OPTION_NO defines a no vote option.*/
  VOTE_OPTION_NO = 3,

  /*VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.*/
  VOTE_OPTION_NO_WITH_VETO = 4,
  UNRECOGNIZED = -1,
}
export interface WeightedVoteOption {
  option: VoteOption;
  weight: string;
}

function createBaseWeightedVoteOption(): WeightedVoteOption {
  return {
    option: undefined,
    weight: ""
  };
}

export const WeightedVoteOption = {
  encode(message: WeightedVoteOption, writer = _m0.Writer.create()): _m0.Writer {
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }

    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): WeightedVoteOption {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedVoteOption();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.option = (reader.int32() as any);
          break;

        case 2:
          message.weight = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): WeightedVoteOption {
    return {
      option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
      weight: isSet(object.weight) ? String(object.weight) : ""
    };
  },

  toJSON(message: WeightedVoteOption): unknown {
    const obj: any = {};
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<WeightedVoteOption>, I>>(object: I): WeightedVoteOption {
    const message = createBaseWeightedVoteOption();
    message.option = object.option ?? 0;
    message.weight = object.weight ?? "";
    return message;
  }

};
export interface Deposit {
  proposalId: Long;
  depositor: string;
  amount: Coin[];
}

function createBaseDeposit(): Deposit {
  return {
    proposalId: Long.UZERO,
    depositor: "",
    amount: []
  };
}

export const Deposit = {
  encode(message: Deposit, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): Deposit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.depositor = reader.string();
          break;

        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Deposit {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromString(object.proposalId) : Long.UZERO,
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },

  toJSON(message: Deposit): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);

    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }

    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Deposit>, I>>(object: I): Deposit {
    const message = createBaseDeposit();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }

};
export interface Proposal {
  id: Long;
  messages: Any[];
  status: ProposalStatus;
  finalTallyResult: TallyResult;
  submitTime: Date;
  depositEndTime: Date;
  totalDeposit: Coin[];
  votingStartTime: Date;
  votingEndTime: Date;
  metadata: string;
}

function createBaseProposal(): Proposal {
  return {
    id: Long.UZERO,
    messages: [],
    status: undefined,
    finalTallyResult: undefined,
    submitTime: undefined,
    depositEndTime: undefined,
    totalDeposit: [],
    votingStartTime: undefined,
    votingEndTime: undefined,
    metadata: ""
  };
}

export const Proposal = {
  encode(message: Proposal, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }

    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }

    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }

    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
    }

    if (message.submitTime !== undefined) Timestamp.encode(toTimestamp(message.submitTime), writer.uint32(42).fork()).ldelim();
    if (message.depositEndTime !== undefined) Timestamp.encode(toTimestamp(message.depositEndTime), writer.uint32(50).fork()).ldelim();

    for (const v of message.totalDeposit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }

    if (message.votingStartTime !== undefined) Timestamp.encode(toTimestamp(message.votingStartTime), writer.uint32(66).fork()).ldelim();
    if (message.votingEndTime !== undefined) Timestamp.encode(toTimestamp(message.votingEndTime), writer.uint32(74).fork()).ldelim();

    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;

        case 2:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;

        case 3:
          message.status = (reader.int32() as any);
          break;

        case 4:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;

        case 5:
          message.submitTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 6:
          message.depositEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 7:
          message.totalDeposit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 8:
          message.votingStartTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 9:
          message.votingEndTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;

        case 10:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Proposal {
    return {
      id: isSet(object.id) ? Long.fromString(object.id) : Long.UZERO,
      messages: Array.isArray(object?.messages) ? object.messages.map((e: any) => Any.fromJSON(e)) : [],
      status: isSet(object.status) ? proposalStatusFromJSON(object.status) : 0,
      finalTallyResult: isSet(object.finalTallyResult) ? TallyResult.fromJSON(object.finalTallyResult) : undefined,
      submitTime: isSet(object.submitTime) ? fromJsonTimestamp(object.submitTime) : undefined,
      depositEndTime: isSet(object.depositEndTime) ? fromJsonTimestamp(object.depositEndTime) : undefined,
      totalDeposit: Array.isArray(object?.totalDeposit) ? object.totalDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      votingStartTime: isSet(object.votingStartTime) ? fromJsonTimestamp(object.votingStartTime) : undefined,
      votingEndTime: isSet(object.votingEndTime) ? fromJsonTimestamp(object.votingEndTime) : undefined,
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());

    if (message.messages) {
      obj.messages = message.messages.map(e => e ? Any.toJSON(e) : undefined);
    } else {
      obj.messages = [];
    }

    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.finalTallyResult !== undefined && (obj.finalTallyResult = message.finalTallyResult ? TallyResult.toJSON(message.finalTallyResult) : undefined);
    message.submitTime !== undefined && (obj.submitTime = message.submitTime.toISOString());
    message.depositEndTime !== undefined && (obj.depositEndTime = message.depositEndTime.toISOString());

    if (message.totalDeposit) {
      obj.totalDeposit = message.totalDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.totalDeposit = [];
    }

    message.votingStartTime !== undefined && (obj.votingStartTime = message.votingStartTime.toISOString());
    message.votingEndTime !== undefined && (obj.votingEndTime = message.votingEndTime.toISOString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal {
    const message = createBaseProposal();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.messages = object.messages?.map(e => Any.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    message.finalTallyResult = object.finalTallyResult !== undefined && object.finalTallyResult !== null ? TallyResult.fromPartial(object.finalTallyResult) : undefined;
    message.submitTime = object.submitTime ?? undefined;
    message.depositEndTime = object.depositEndTime ?? undefined;
    message.totalDeposit = object.totalDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.votingStartTime = object.votingStartTime ?? undefined;
    message.votingEndTime = object.votingEndTime ?? undefined;
    message.metadata = object.metadata ?? "";
    return message;
  }

};
export enum ProposalStatus {
  /*PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.*/
  PROPOSAL_STATUS_UNSPECIFIED = 0,

  /*PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
  period.*/
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,

  /*PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
  period.*/
  PROPOSAL_STATUS_VOTING_PERIOD = 2,

  /*PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
  passed.*/
  PROPOSAL_STATUS_PASSED = 3,

  /*PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
  been rejected.*/
  PROPOSAL_STATUS_REJECTED = 4,

  /*PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
  failed.*/
  PROPOSAL_STATUS_FAILED = 5,
  UNRECOGNIZED = -1,
}
export interface TallyResult {
  yesCount: string;
  abstainCount: string;
  noCount: string;
  noWithVetoCount: string;
}

function createBaseTallyResult(): TallyResult {
  return {
    yesCount: "",
    abstainCount: "",
    noCount: "",
    noWithVetoCount: ""
  };
}

export const TallyResult = {
  encode(message: TallyResult, writer = _m0.Writer.create()): _m0.Writer {
    if (message.yesCount !== "") {
      writer.uint32(10).string(message.yesCount);
    }

    if (message.abstainCount !== "") {
      writer.uint32(18).string(message.abstainCount);
    }

    if (message.noCount !== "") {
      writer.uint32(26).string(message.noCount);
    }

    if (message.noWithVetoCount !== "") {
      writer.uint32(34).string(message.noWithVetoCount);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): TallyResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.yesCount = reader.string();
          break;

        case 2:
          message.abstainCount = reader.string();
          break;

        case 3:
          message.noCount = reader.string();
          break;

        case 4:
          message.noWithVetoCount = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TallyResult {
    return {
      yesCount: isSet(object.yesCount) ? String(object.yesCount) : "",
      abstainCount: isSet(object.abstainCount) ? String(object.abstainCount) : "",
      noCount: isSet(object.noCount) ? String(object.noCount) : "",
      noWithVetoCount: isSet(object.noWithVetoCount) ? String(object.noWithVetoCount) : ""
    };
  },

  toJSON(message: TallyResult): unknown {
    const obj: any = {};
    message.yesCount !== undefined && (obj.yesCount = message.yesCount);
    message.abstainCount !== undefined && (obj.abstainCount = message.abstainCount);
    message.noCount !== undefined && (obj.noCount = message.noCount);
    message.noWithVetoCount !== undefined && (obj.noWithVetoCount = message.noWithVetoCount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TallyResult>, I>>(object: I): TallyResult {
    const message = createBaseTallyResult();
    message.yesCount = object.yesCount ?? "";
    message.abstainCount = object.abstainCount ?? "";
    message.noCount = object.noCount ?? "";
    message.noWithVetoCount = object.noWithVetoCount ?? "";
    return message;
  }

};
export interface Vote {
  proposalId: Long;
  voter: string;
  options: WeightedVoteOption[];
  metadata: string;
}

function createBaseVote(): Vote {
  return {
    proposalId: Long.UZERO,
    voter: "",
    options: [],
    metadata: ""
  };
}

export const Vote = {
  encode(message: Vote, writer = _m0.Writer.create()): _m0.Writer {
    if (!message.proposalId.isZero()) {
      writer.uint32(8).uint64(message.proposalId);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }

    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): Vote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = (reader.uint64() as Long);
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 4:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;

        case 5:
          message.metadata = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): Vote {
    return {
      proposalId: isSet(object.proposalId) ? Long.fromString(object.proposalId) : Long.UZERO,
      voter: isSet(object.voter) ? String(object.voter) : "",
      options: Array.isArray(object?.options) ? object.options.map((e: any) => WeightedVoteOption.fromJSON(e)) : [],
      metadata: isSet(object.metadata) ? String(object.metadata) : ""
    };
  },

  toJSON(message: Vote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
    message.voter !== undefined && (obj.voter = message.voter);

    if (message.options) {
      obj.options = message.options.map(e => e ? WeightedVoteOption.toJSON(e) : undefined);
    } else {
      obj.options = [];
    }

    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vote>, I>>(object: I): Vote {
    const message = createBaseVote();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? Long.fromValue(object.proposalId) : Long.UZERO;
    message.voter = object.voter ?? "";
    message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  }

};
export interface DepositParams {
  minDeposit: Coin[];
  maxDepositPeriod: string;
}

function createBaseDepositParams(): DepositParams {
  return {
    minDeposit: [],
    maxDepositPeriod: undefined
  };
}

export const DepositParams = {
  encode(message: DepositParams, writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.maxDepositPeriod !== undefined) Duration.encode(toDuration(message.maxDepositPeriod), writer.uint32(18).fork()).ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): DepositParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.maxDepositPeriod = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): DepositParams {
    return {
      minDeposit: Array.isArray(object?.minDeposit) ? object.minDeposit.map((e: any) => Coin.fromJSON(e)) : [],
      maxDepositPeriod: isSet(object.maxDepositPeriod) ? String(object.maxDepositPeriod) : undefined
    };
  },

  toJSON(message: DepositParams): unknown {
    const obj: any = {};

    if (message.minDeposit) {
      obj.minDeposit = message.minDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minDeposit = [];
    }

    message.maxDepositPeriod !== undefined && (obj.maxDepositPeriod = message.maxDepositPeriod);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DepositParams>, I>>(object: I): DepositParams {
    const message = createBaseDepositParams();
    message.minDeposit = object.minDeposit?.map(e => Coin.fromPartial(e)) || [];
    message.maxDepositPeriod = object.maxDepositPeriod ?? undefined;
    return message;
  }

};
export interface VotingParams {
  votingPeriod: string;
}

function createBaseVotingParams(): VotingParams {
  return {
    votingPeriod: undefined
  };
}

export const VotingParams = {
  encode(message: VotingParams, writer = _m0.Writer.create()): _m0.Writer {
    if (message.votingPeriod !== undefined) Duration.encode(toDuration(message.votingPeriod), writer.uint32(10).fork()).ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): VotingParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotingParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = fromDuration(Duration.decode(reader, reader.uint32()));
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): VotingParams {
    return {
      votingPeriod: isSet(object.votingPeriod) ? String(object.votingPeriod) : undefined
    };
  },

  toJSON(message: VotingParams): unknown {
    const obj: any = {};
    message.votingPeriod !== undefined && (obj.votingPeriod = message.votingPeriod);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VotingParams>, I>>(object: I): VotingParams {
    const message = createBaseVotingParams();
    message.votingPeriod = object.votingPeriod ?? undefined;
    return message;
  }

};
export interface TallyParams {
  quorum: string;
  threshold: string;
  vetoThreshold: string;
}

function createBaseTallyParams(): TallyParams {
  return {
    quorum: "",
    threshold: "",
    vetoThreshold: ""
  };
}

export const TallyParams = {
  encode(message: TallyParams, writer = _m0.Writer.create()): _m0.Writer {
    if (message.quorum !== "") {
      writer.uint32(10).string(message.quorum);
    }

    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }

    if (message.vetoThreshold !== "") {
      writer.uint32(26).string(message.vetoThreshold);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array): TallyParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyParams();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.string();
          break;

        case 2:
          message.threshold = reader.string();
          break;

        case 3:
          message.vetoThreshold = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): TallyParams {
    return {
      quorum: isSet(object.quorum) ? String(object.quorum) : "",
      threshold: isSet(object.threshold) ? String(object.threshold) : "",
      vetoThreshold: isSet(object.vetoThreshold) ? String(object.vetoThreshold) : ""
    };
  },

  toJSON(message: TallyParams): unknown {
    const obj: any = {};
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.vetoThreshold !== undefined && (obj.vetoThreshold = message.vetoThreshold);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TallyParams>, I>>(object: I): TallyParams {
    const message = createBaseTallyParams();
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.vetoThreshold = object.vetoThreshold ?? "";
    return message;
  }

};