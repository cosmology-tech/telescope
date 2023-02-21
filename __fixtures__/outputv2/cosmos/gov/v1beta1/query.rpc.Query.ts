import { ProposalStatus, ProposalStatusSDKType, Proposal, ProposalSDKType, Vote, VoteSDKType, VotingParams, VotingParamsSDKType, DepositParams, DepositParamsSDKType, TallyParams, TallyParamsSDKType, Deposit, DepositSDKType, TallyResult, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import * as _m0 from "protobufjs/minimal";
import { grpc } from "@improbable-eng/grpc-web";
import { DeepPartial } from "../../../helpers";
import { QueryProposalRequest, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsRequestSDKType, QueryProposalsResponse, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteRequestSDKType, QueryVoteResponse, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesRequestSDKType, QueryVotesResponse, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositRequestSDKType, QueryDepositResponse, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsRequestSDKType, QueryDepositsResponse, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseSDKType } from "./query";

/** Query defines the gRPC querier service for gov module */
export interface Query {
  /** Proposal queries proposal details based on ProposalID. */
  proposal(request: DeepPartial<QueryProposalRequest>, metadata?: grpc.Metadata): Promise<QueryProposalResponse>;

  /** Proposals queries all proposals based on given status. */
  proposals(request: DeepPartial<QueryProposalsRequest>, metadata?: grpc.Metadata): Promise<QueryProposalsResponse>;

  /** Vote queries voted information based on proposalID, voterAddr. */
  vote(request: DeepPartial<QueryVoteRequest>, metadata?: grpc.Metadata): Promise<QueryVoteResponse>;

  /** Votes queries votes of a given proposal. */
  votes(request: DeepPartial<QueryVotesRequest>, metadata?: grpc.Metadata): Promise<QueryVotesResponse>;

  /** Params queries all parameters of the gov module. */
  params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;

  /** Deposit queries single deposit information based proposalID, depositAddr. */
  deposit(request: DeepPartial<QueryDepositRequest>, metadata?: grpc.Metadata): Promise<QueryDepositResponse>;

  /** Deposits queries all deposits of a single proposal. */
  deposits(request: DeepPartial<QueryDepositsRequest>, metadata?: grpc.Metadata): Promise<QueryDepositsResponse>;

  /** TallyResult queries the tally of a proposal vote. */
  tallyResult(request: DeepPartial<QueryTallyResultRequest>, metadata?: grpc.Metadata): Promise<QueryTallyResultResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.proposal = this.proposal.bind(this);
    this.proposals = this.proposals.bind(this);
    this.vote = this.vote.bind(this);
    this.votes = this.votes.bind(this);
    this.params = this.params.bind(this);
    this.deposit = this.deposit.bind(this);
    this.deposits = this.deposits.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }

  proposal(request: DeepPartial<QueryProposalRequest>, metadata?: grpc.Metadata): Promise<QueryProposalResponse> {
    return this.rpc.unary(QueryProposalDesc, QueryProposalRequest.fromPartial(request), metadata);
  }

  proposals(request: DeepPartial<QueryProposalsRequest>, metadata?: grpc.Metadata): Promise<QueryProposalsResponse> {
    return this.rpc.unary(QueryProposalsDesc, QueryProposalsRequest.fromPartial(request), metadata);
  }

  vote(request: DeepPartial<QueryVoteRequest>, metadata?: grpc.Metadata): Promise<QueryVoteResponse> {
    return this.rpc.unary(QueryVoteDesc, QueryVoteRequest.fromPartial(request), metadata);
  }

  votes(request: DeepPartial<QueryVotesRequest>, metadata?: grpc.Metadata): Promise<QueryVotesResponse> {
    return this.rpc.unary(QueryVotesDesc, QueryVotesRequest.fromPartial(request), metadata);
  }

  params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }

  deposit(request: DeepPartial<QueryDepositRequest>, metadata?: grpc.Metadata): Promise<QueryDepositResponse> {
    return this.rpc.unary(QueryDepositDesc, QueryDepositRequest.fromPartial(request), metadata);
  }

  deposits(request: DeepPartial<QueryDepositsRequest>, metadata?: grpc.Metadata): Promise<QueryDepositsResponse> {
    return this.rpc.unary(QueryDepositsDesc, QueryDepositsRequest.fromPartial(request), metadata);
  }

  tallyResult(request: DeepPartial<QueryTallyResultRequest>, metadata?: grpc.Metadata): Promise<QueryTallyResultResponse> {
    return this.rpc.unary(QueryTallyResultDesc, QueryTallyResultRequest.fromPartial(request), metadata);
  }

}