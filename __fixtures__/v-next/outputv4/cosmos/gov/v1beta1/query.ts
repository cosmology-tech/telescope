import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, VotingParams, VotingParamsSDKType, DepositParams, DepositParamsSDKType, TallyParams, TallyParamsSDKType, Deposit, DepositSDKType, TallyResult, TallyResultSDKType, proposalStatusFromJSON, proposalStatusToJSON } from "./gov";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { Long, isSet, DeepPartial } from "../../../helpers";
export const protobufPackage = "cosmos.gov.v1beta1";

/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
}

/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequestSDKType {
  proposal_id: bigint;
}

/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
  proposal?: Proposal;
}

/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponseSDKType {
  proposal?: ProposalSDKType;
}

/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
  /** proposal_status defines the status of the proposals. */
  proposalStatus: ProposalStatus;

  /** voter defines the voter address for the proposals. */
  voter: string;

  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;

  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequestSDKType {
  proposal_status: ProposalStatus;
  voter: string;
  depositor: string;
  pagination?: PageRequestSDKType;
}

/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponse {
  proposals: Proposal[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponseSDKType {
  proposals: ProposalSDKType[];
  pagination?: PageResponseSDKType;
}

/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;

  /** voter defines the oter address for the proposals. */
  voter: string;
}

/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequestSDKType {
  proposal_id: bigint;
  voter: string;
}

/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
  /** vote defined the queried vote. */
  vote?: Vote;
}

/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponseSDKType {
  vote?: VoteSDKType;
}

/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;

  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequestSDKType {
  proposal_id: bigint;
  pagination?: PageRequestSDKType;
}

/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponse {
  /** votes defined the queried votes. */
  votes: Vote[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponseSDKType {
  votes: VoteSDKType[];
  pagination?: PageResponseSDKType;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   */
  paramsType: string;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {
  params_type: string;
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** voting_params defines the parameters related to voting. */
  votingParams?: VotingParams;

  /** deposit_params defines the parameters related to deposit. */
  depositParams?: DepositParams;

  /** tally_params defines the parameters related to tally. */
  tallyParams?: TallyParams;
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  voting_params?: VotingParamsSDKType;
  deposit_params?: DepositParamsSDKType;
  tally_params?: TallyParamsSDKType;
}

/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;

  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
}

/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequestSDKType {
  proposal_id: bigint;
  depositor: string;
}

/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
  /** deposit defines the requested deposit. */
  deposit?: Deposit;
}

/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponseSDKType {
  deposit?: DepositSDKType;
}

/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;

  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequestSDKType {
  proposal_id: bigint;
  pagination?: PageRequestSDKType;
}

/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
  deposits: Deposit[];

  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponseSDKType {
  deposits: DepositSDKType[];
  pagination?: PageResponseSDKType;
}

/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
}

/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequestSDKType {
  proposal_id: bigint;
}

/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
  /** tally defines the requested tally. */
  tally?: TallyResult;
}

/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponseSDKType {
  tally?: TallyResultSDKType;
}

function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposalId: BigInt("0")
  };
}

export const QueryProposalRequest = {
  encode(message: QueryProposalRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.proposalId.toString()));
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProposalRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0")
    };
  },

  toJSON(message: QueryProposalRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryProposalRequest>): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    return message;
  },

  fromSDK(object: QueryProposalRequestSDKType): QueryProposalRequest {
    return {
      proposalId: object?.proposal_id
    };
  },

  fromSDKJSON(object: any): QueryProposalRequestSDKType {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt("0")
    };
  },

  toSDK(message: QueryProposalRequest): QueryProposalRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    return obj;
  }

};

function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: undefined
  };
}

export const QueryProposalResponse = {
  encode(message: QueryProposalResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProposalResponse {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromJSON(object.proposal) : undefined
    };
  },

  toJSON(message: QueryProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.proposal = object.proposal !== undefined && object.proposal !== null ? Proposal.fromPartial(object.proposal) : undefined;
    return message;
  },

  fromSDK(object: QueryProposalResponseSDKType): QueryProposalResponse {
    return {
      proposal: object.proposal ? Proposal.fromSDK(object.proposal) : undefined
    };
  },

  fromSDKJSON(object: any): QueryProposalResponseSDKType {
    return {
      proposal: isSet(object.proposal) ? Proposal.fromSDKJSON(object.proposal) : undefined
    };
  },

  toSDK(message: QueryProposalResponse): QueryProposalResponseSDKType {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toSDK(message.proposal) : undefined);
    return obj;
  }

};

function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return {
    proposalStatus: 0,
    voter: "",
    depositor: "",
    pagination: undefined
  };
}

export const QueryProposalsRequest = {
  encode(message: QueryProposalsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalStatus !== 0) {
      writer.uint32(8).int32(message.proposalStatus);
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalStatus = (reader.int32() as any);
          break;

        case 2:
          message.voter = reader.string();
          break;

        case 3:
          message.depositor = reader.string();
          break;

        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProposalsRequest {
    return {
      proposalStatus: isSet(object.proposalStatus) ? proposalStatusFromJSON(object.proposalStatus) : 0,
      voter: isSet(object.voter) ? String(object.voter) : "",
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryProposalsRequest): unknown {
    const obj: any = {};
    message.proposalStatus !== undefined && (obj.proposalStatus = proposalStatusToJSON(message.proposalStatus));
    message.voter !== undefined && (obj.voter = message.voter);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryProposalsRequest>): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.proposalStatus = object.proposalStatus ?? 0;
    message.voter = object.voter ?? "";
    message.depositor = object.depositor ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryProposalsRequestSDKType): QueryProposalsRequest {
    return {
      proposalStatus: isSet(object.proposal_status) ? proposalStatusFromJSON(object.proposal_status) : 0,
      voter: object?.voter,
      depositor: object?.depositor,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  fromSDKJSON(object: any): QueryProposalsRequestSDKType {
    return {
      proposal_status: isSet(object.proposal_status) ? proposalStatusFromJSON(object.proposal_status) : 0,
      voter: isSet(object.voter) ? String(object.voter) : "",
      depositor: isSet(object.depositor) ? String(object.depositor) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },

  toSDK(message: QueryProposalsRequest): QueryProposalsRequestSDKType {
    const obj: any = {};
    message.proposalStatus !== undefined && (obj.proposal_status = proposalStatusToJSON(message.proposalStatus));
    obj.voter = message.voter;
    obj.depositor = message.depositor;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}

export const QueryProposalsResponse = {
  encode(message: QueryProposalsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryProposalsResponse): unknown {
    const obj: any = {};

    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryProposalsResponse>): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryProposalsResponseSDKType): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  fromSDKJSON(object: any): QueryProposalsResponseSDKType {
    return {
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },

  toSDK(message: QueryProposalsResponse): QueryProposalsResponseSDKType {
    const obj: any = {};

    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toSDK(e) : undefined);
    } else {
      obj.proposals = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryVoteRequest(): QueryVoteRequest {
  return {
    proposalId: BigInt("0"),
    voter: ""
  };
}

export const QueryVoteRequest = {
  encode(message: QueryVoteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.proposalId.toString()));
    }

    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;

        case 2:
          message.voter = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryVoteRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0"),
      voter: isSet(object.voter) ? String(object.voter) : ""
    };
  },

  toJSON(message: QueryVoteRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVoteRequest>): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.voter = object.voter ?? "";
    return message;
  },

  fromSDK(object: QueryVoteRequestSDKType): QueryVoteRequest {
    return {
      proposalId: object?.proposal_id,
      voter: object?.voter
    };
  },

  fromSDKJSON(object: any): QueryVoteRequestSDKType {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt("0"),
      voter: isSet(object.voter) ? String(object.voter) : ""
    };
  },

  toSDK(message: QueryVoteRequest): QueryVoteRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.voter = message.voter;
    return obj;
  }

};

function createBaseQueryVoteResponse(): QueryVoteResponse {
  return {
    vote: undefined
  };
}

export const QueryVoteResponse = {
  encode(message: QueryVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryVoteResponse {
    return {
      vote: isSet(object.vote) ? Vote.fromJSON(object.vote) : undefined
    };
  },

  toJSON(message: QueryVoteResponse): unknown {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVoteResponse>): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    message.vote = object.vote !== undefined && object.vote !== null ? Vote.fromPartial(object.vote) : undefined;
    return message;
  },

  fromSDK(object: QueryVoteResponseSDKType): QueryVoteResponse {
    return {
      vote: object.vote ? Vote.fromSDK(object.vote) : undefined
    };
  },

  fromSDKJSON(object: any): QueryVoteResponseSDKType {
    return {
      vote: isSet(object.vote) ? Vote.fromSDKJSON(object.vote) : undefined
    };
  },

  toSDK(message: QueryVoteResponse): QueryVoteResponseSDKType {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toSDK(message.vote) : undefined);
    return obj;
  }

};

function createBaseQueryVotesRequest(): QueryVotesRequest {
  return {
    proposalId: BigInt("0"),
    pagination: undefined
  };
}

export const QueryVotesRequest = {
  encode(message: QueryVotesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.proposalId.toString()));
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryVotesRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0"),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryVotesRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVotesRequest>): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryVotesRequestSDKType): QueryVotesRequest {
    return {
      proposalId: object?.proposal_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  fromSDKJSON(object: any): QueryVotesRequestSDKType {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt("0"),
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },

  toSDK(message: QueryVotesRequest): QueryVotesRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryVotesResponse(): QueryVotesResponse {
  return {
    votes: [],
    pagination: undefined
  };
}

export const QueryVotesResponse = {
  encode(message: QueryVotesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryVotesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryVotesResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryVotesResponse): unknown {
    const obj: any = {};

    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryVotesResponse>): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryVotesResponseSDKType): QueryVotesResponse {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  fromSDKJSON(object: any): QueryVotesResponseSDKType {
    return {
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },

  toSDK(message: QueryVotesResponse): QueryVotesResponseSDKType {
    const obj: any = {};

    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toSDK(e) : undefined);
    } else {
      obj.votes = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {
    paramsType: ""
  };
}

export const QueryParamsRequest = {
  encode(message: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.paramsType !== "") {
      writer.uint32(10).string(message.paramsType);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.paramsType = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsRequest {
    return {
      paramsType: isSet(object.paramsType) ? String(object.paramsType) : ""
    };
  },

  toJSON(message: QueryParamsRequest): unknown {
    const obj: any = {};
    message.paramsType !== undefined && (obj.paramsType = message.paramsType);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.paramsType = object.paramsType ?? "";
    return message;
  },

  fromSDK(object: QueryParamsRequestSDKType): QueryParamsRequest {
    return {
      paramsType: object?.params_type
    };
  },

  fromSDKJSON(object: any): QueryParamsRequestSDKType {
    return {
      params_type: isSet(object.params_type) ? String(object.params_type) : ""
    };
  },

  toSDK(message: QueryParamsRequest): QueryParamsRequestSDKType {
    const obj: any = {};
    obj.params_type = message.paramsType;
    return obj;
  }

};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    votingParams: undefined,
    depositParams: undefined,
    tallyParams: undefined
  };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.votingParams !== undefined) {
      VotingParams.encode(message.votingParams, writer.uint32(10).fork()).ldelim();
    }

    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(18).fork()).ldelim();
    }

    if (message.tallyParams !== undefined) {
      TallyParams.encode(message.tallyParams, writer.uint32(26).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.votingParams = VotingParams.decode(reader, reader.uint32());
          break;

        case 2:
          message.depositParams = DepositParams.decode(reader, reader.uint32());
          break;

        case 3:
          message.tallyParams = TallyParams.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      votingParams: isSet(object.votingParams) ? VotingParams.fromJSON(object.votingParams) : undefined,
      depositParams: isSet(object.depositParams) ? DepositParams.fromJSON(object.depositParams) : undefined,
      tallyParams: isSet(object.tallyParams) ? TallyParams.fromJSON(object.tallyParams) : undefined
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.votingParams !== undefined && (obj.votingParams = message.votingParams ? VotingParams.toJSON(message.votingParams) : undefined);
    message.depositParams !== undefined && (obj.depositParams = message.depositParams ? DepositParams.toJSON(message.depositParams) : undefined);
    message.tallyParams !== undefined && (obj.tallyParams = message.tallyParams ? TallyParams.toJSON(message.tallyParams) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.votingParams = object.votingParams !== undefined && object.votingParams !== null ? VotingParams.fromPartial(object.votingParams) : undefined;
    message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : undefined;
    message.tallyParams = object.tallyParams !== undefined && object.tallyParams !== null ? TallyParams.fromPartial(object.tallyParams) : undefined;
    return message;
  },

  fromSDK(object: QueryParamsResponseSDKType): QueryParamsResponse {
    return {
      votingParams: object.voting_params ? VotingParams.fromSDK(object.voting_params) : undefined,
      depositParams: object.deposit_params ? DepositParams.fromSDK(object.deposit_params) : undefined,
      tallyParams: object.tally_params ? TallyParams.fromSDK(object.tally_params) : undefined
    };
  },

  fromSDKJSON(object: any): QueryParamsResponseSDKType {
    return {
      voting_params: isSet(object.voting_params) ? VotingParams.fromSDKJSON(object.voting_params) : undefined,
      deposit_params: isSet(object.deposit_params) ? DepositParams.fromSDKJSON(object.deposit_params) : undefined,
      tally_params: isSet(object.tally_params) ? TallyParams.fromSDKJSON(object.tally_params) : undefined
    };
  },

  toSDK(message: QueryParamsResponse): QueryParamsResponseSDKType {
    const obj: any = {};
    message.votingParams !== undefined && (obj.voting_params = message.votingParams ? VotingParams.toSDK(message.votingParams) : undefined);
    message.depositParams !== undefined && (obj.deposit_params = message.depositParams ? DepositParams.toSDK(message.depositParams) : undefined);
    message.tallyParams !== undefined && (obj.tally_params = message.tallyParams ? TallyParams.toSDK(message.tallyParams) : undefined);
    return obj;
  }

};

function createBaseQueryDepositRequest(): QueryDepositRequest {
  return {
    proposalId: BigInt("0"),
    depositor: ""
  };
}

export const QueryDepositRequest = {
  encode(message: QueryDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.proposalId.toString()));
    }

    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
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

  fromJSON(object: any): QueryDepositRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0"),
      depositor: isSet(object.depositor) ? String(object.depositor) : ""
    };
  },

  toJSON(message: QueryDepositRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDepositRequest>): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.depositor = object.depositor ?? "";
    return message;
  },

  fromSDK(object: QueryDepositRequestSDKType): QueryDepositRequest {
    return {
      proposalId: object?.proposal_id,
      depositor: object?.depositor
    };
  },

  fromSDKJSON(object: any): QueryDepositRequestSDKType {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt("0"),
      depositor: isSet(object.depositor) ? String(object.depositor) : ""
    };
  },

  toSDK(message: QueryDepositRequest): QueryDepositRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    obj.depositor = message.depositor;
    return obj;
  }

};

function createBaseQueryDepositResponse(): QueryDepositResponse {
  return {
    deposit: undefined
  };
}

export const QueryDepositResponse = {
  encode(message: QueryDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDepositResponse {
    return {
      deposit: isSet(object.deposit) ? Deposit.fromJSON(object.deposit) : undefined
    };
  },

  toJSON(message: QueryDepositResponse): unknown {
    const obj: any = {};
    message.deposit !== undefined && (obj.deposit = message.deposit ? Deposit.toJSON(message.deposit) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDepositResponse>): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Deposit.fromPartial(object.deposit) : undefined;
    return message;
  },

  fromSDK(object: QueryDepositResponseSDKType): QueryDepositResponse {
    return {
      deposit: object.deposit ? Deposit.fromSDK(object.deposit) : undefined
    };
  },

  fromSDKJSON(object: any): QueryDepositResponseSDKType {
    return {
      deposit: isSet(object.deposit) ? Deposit.fromSDKJSON(object.deposit) : undefined
    };
  },

  toSDK(message: QueryDepositResponse): QueryDepositResponseSDKType {
    const obj: any = {};
    message.deposit !== undefined && (obj.deposit = message.deposit ? Deposit.toSDK(message.deposit) : undefined);
    return obj;
  }

};

function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    proposalId: BigInt("0"),
    pagination: undefined
  };
}

export const QueryDepositsRequest = {
  encode(message: QueryDepositsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.proposalId.toString()));
    }

    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;

        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDepositsRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0"),
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDepositsRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryDepositsRequestSDKType): QueryDepositsRequest {
    return {
      proposalId: object?.proposal_id,
      pagination: object.pagination ? PageRequest.fromSDK(object.pagination) : undefined
    };
  },

  fromSDKJSON(object: any): QueryDepositsRequestSDKType {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt("0"),
      pagination: isSet(object.pagination) ? PageRequest.fromSDKJSON(object.pagination) : undefined
    };
  },

  toSDK(message: QueryDepositsRequest): QueryDepositsRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}

export const QueryDepositsResponse = {
  encode(message: QueryDepositsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }

    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDepositsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;

        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },

  toJSON(message: QueryDepositsResponse): unknown {
    const obj: any = {};

    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },

  fromSDK(object: QueryDepositsResponseSDKType): QueryDepositsResponse {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromSDK(e)) : [],
      pagination: object.pagination ? PageResponse.fromSDK(object.pagination) : undefined
    };
  },

  fromSDKJSON(object: any): QueryDepositsResponseSDKType {
    return {
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromSDKJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromSDKJSON(object.pagination) : undefined
    };
  },

  toSDK(message: QueryDepositsResponse): QueryDepositsResponseSDKType {
    const obj: any = {};

    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toSDK(e) : undefined);
    } else {
      obj.deposits = [];
    }

    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toSDK(message.pagination) : undefined);
    return obj;
  }

};

function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
  return {
    proposalId: BigInt("0")
  };
}

export const QueryTallyResultRequest = {
  encode(message: QueryTallyResultRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(Long.fromString(message.proposalId.toString()));
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.proposalId = BigInt(reader.uint64().toString());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTallyResultRequest {
    return {
      proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt("0")
    };
  },

  toJSON(message: QueryTallyResultRequest): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt("0")).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTallyResultRequest>): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt("0");
    return message;
  },

  fromSDK(object: QueryTallyResultRequestSDKType): QueryTallyResultRequest {
    return {
      proposalId: object?.proposal_id
    };
  },

  fromSDKJSON(object: any): QueryTallyResultRequestSDKType {
    return {
      proposal_id: isSet(object.proposal_id) ? BigInt(object.proposal_id.toString()) : BigInt("0")
    };
  },

  toSDK(message: QueryTallyResultRequest): QueryTallyResultRequestSDKType {
    const obj: any = {};
    obj.proposal_id = message.proposalId;
    return obj;
  }

};

function createBaseQueryTallyResultResponse(): QueryTallyResultResponse {
  return {
    tally: undefined
  };
}

export const QueryTallyResultResponse = {
  encode(message: QueryTallyResultResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }

    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTallyResultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();

    while (reader.pos < end) {
      const tag = reader.uint32();

      switch (tag >>> 3) {
        case 1:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  },

  fromJSON(object: any): QueryTallyResultResponse {
    return {
      tally: isSet(object.tally) ? TallyResult.fromJSON(object.tally) : undefined
    };
  },

  toJSON(message: QueryTallyResultResponse): unknown {
    const obj: any = {};
    message.tally !== undefined && (obj.tally = message.tally ? TallyResult.toJSON(message.tally) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTallyResultResponse>): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    message.tally = object.tally !== undefined && object.tally !== null ? TallyResult.fromPartial(object.tally) : undefined;
    return message;
  },

  fromSDK(object: QueryTallyResultResponseSDKType): QueryTallyResultResponse {
    return {
      tally: object.tally ? TallyResult.fromSDK(object.tally) : undefined
    };
  },

  fromSDKJSON(object: any): QueryTallyResultResponseSDKType {
    return {
      tally: isSet(object.tally) ? TallyResult.fromSDKJSON(object.tally) : undefined
    };
  },

  toSDK(message: QueryTallyResultResponse): QueryTallyResultResponseSDKType {
    const obj: any = {};
    message.tally !== undefined && (obj.tally = message.tally ? TallyResult.toSDK(message.tally) : undefined);
    return obj;
  }

};