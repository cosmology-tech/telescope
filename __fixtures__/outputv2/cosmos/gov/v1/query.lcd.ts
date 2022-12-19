import { ProposalStatus, ProposalStatusAmino, ProposalStatusSDKType, Proposal, ProposalAmino, ProposalSDKType, Vote, VoteAmino, VoteSDKType, VotingParams, VotingParamsAmino, VotingParamsSDKType, DepositParams, DepositParamsAmino, DepositParamsSDKType, TallyParams, TallyParamsAmino, TallyParamsSDKType, Deposit, DepositAmino, DepositSDKType, TallyResult, TallyResultAmino, TallyResultSDKType } from "./gov";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../base/query/v1beta1/pagination";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryProposalRequest, QueryProposalRequestAmino, QueryProposalRequestSDKType, QueryProposalResponse, QueryProposalResponseAmino, QueryProposalResponseSDKType, QueryProposalsRequest, QueryProposalsRequestAmino, QueryProposalsRequestSDKType, QueryProposalsResponse, QueryProposalsResponseAmino, QueryProposalsResponseSDKType, QueryVoteRequest, QueryVoteRequestAmino, QueryVoteRequestSDKType, QueryVoteResponse, QueryVoteResponseAmino, QueryVoteResponseSDKType, QueryVotesRequest, QueryVotesRequestAmino, QueryVotesRequestSDKType, QueryVotesResponse, QueryVotesResponseAmino, QueryVotesResponseSDKType, QueryParamsRequest, QueryParamsRequestAmino, QueryParamsRequestSDKType, QueryParamsResponse, QueryParamsResponseAmino, QueryParamsResponseSDKType, QueryDepositRequest, QueryDepositRequestAmino, QueryDepositRequestSDKType, QueryDepositResponse, QueryDepositResponseAmino, QueryDepositResponseSDKType, QueryDepositsRequest, QueryDepositsRequestAmino, QueryDepositsRequestSDKType, QueryDepositsResponse, QueryDepositsResponseAmino, QueryDepositsResponseSDKType, QueryTallyResultRequest, QueryTallyResultRequestAmino, QueryTallyResultRequestSDKType, QueryTallyResultResponse, QueryTallyResultResponseAmino, QueryTallyResultResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;

  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.proposal = this.proposal.bind(this);
    this.proposals = this.proposals.bind(this);
    this.vote = this.vote.bind(this);
    this.votes = this.votes.bind(this);
    this.params = this.params.bind(this);
    this.deposit = this.deposit.bind(this);
    this.deposits = this.deposits.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }

  /* Proposal queries proposal details based on ProposalID. */
  async proposal(params: QueryProposalRequest): Promise<QueryProposalResponseSDKType> {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}`;
    return await this.req.get<QueryProposalResponseSDKType>(endpoint);
  }

  /* Proposals queries all proposals based on given status. */
  async proposals(params: QueryProposalsRequest): Promise<QueryProposalsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.proposalStatus !== "undefined") {
      options.params.proposal_status = params.proposalStatus;
    }

    if (typeof params?.voter !== "undefined") {
      options.params.voter = params.voter;
    }

    if (typeof params?.depositor !== "undefined") {
      options.params.depositor = params.depositor;
    }

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1/proposals`;
    return await this.req.get<QueryProposalsResponseSDKType>(endpoint, options);
  }

  /* Vote queries voted information based on proposalID, voterAddr. */
  async vote(params: QueryVoteRequest): Promise<QueryVoteResponseSDKType> {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/votes/${params.voter}`;
    return await this.req.get<QueryVoteResponseSDKType>(endpoint);
  }

  /* Votes queries votes of a given proposal. */
  async votes(params: QueryVotesRequest): Promise<QueryVotesResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/votes`;
    return await this.req.get<QueryVotesResponseSDKType>(endpoint, options);
  }

  /* Params queries all parameters of the gov module. */
  async params(params: QueryParamsRequest): Promise<QueryParamsResponseSDKType> {
    const endpoint = `cosmos/gov/v1/params/${params.paramsType}`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }

  /* Deposit queries single deposit information based proposalID, depositAddr. */
  async deposit(params: QueryDepositRequest): Promise<QueryDepositResponseSDKType> {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/deposits/${params.depositor}`;
    return await this.req.get<QueryDepositResponseSDKType>(endpoint);
  }

  /* Deposits queries all deposits of a single proposal. */
  async deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponseSDKType> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/deposits`;
    return await this.req.get<QueryDepositsResponseSDKType>(endpoint, options);
  }

  /* TallyResult queries the tally of a proposal vote. */
  async tallyResult(params: QueryTallyResultRequest): Promise<QueryTallyResultResponseSDKType> {
    const endpoint = `cosmos/gov/v1/proposals/${params.proposalId}/tally`;
    return await this.req.get<QueryTallyResultResponseSDKType>(endpoint);
  }

}