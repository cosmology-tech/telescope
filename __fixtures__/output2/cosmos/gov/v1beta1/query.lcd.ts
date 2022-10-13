import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
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


  async proposal(params: QueryProposalRequest): Promise<QueryProposalResponse> {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}`;
    return await this.req.get<QueryProposalResponse>(endpoint);
  }
  /* Proposals queries all proposals based on given status. */


  async proposals(params: QueryProposalsRequest): Promise<QueryProposalsResponse> {
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

    const endpoint = `cosmos/gov/v1beta1/proposals`;
    return await this.req.get<QueryProposalsResponse>(endpoint, options);
  }
  /* Vote queries voted information based on proposalID, voterAddr. */


  async vote(params: QueryVoteRequest): Promise<QueryVoteResponse> {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}votes/${params.voter}`;
    return await this.req.get<QueryVoteResponse>(endpoint);
  }
  /* Votes queries votes of a given proposal. */


  async votes(params: QueryVotesRequest): Promise<QueryVotesResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}/votes`;
    return await this.req.get<QueryVotesResponse>(endpoint, options);
  }
  /* Params queries all parameters of the gov module. */


  async params(params: QueryParamsRequest): Promise<QueryParamsResponse> {
    const endpoint = `cosmos/gov/v1beta1/params/${params.paramsType}`;
    return await this.req.get<QueryParamsResponse>(endpoint);
  }
  /* Deposit queries single deposit information based proposalID, depositAddr. */


  async deposit(params: QueryDepositRequest): Promise<QueryDepositResponse> {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}deposits/${params.depositor}`;
    return await this.req.get<QueryDepositResponse>(endpoint);
  }
  /* Deposits queries all deposits of a single proposal. */


  async deposits(params: QueryDepositsRequest): Promise<QueryDepositsResponse> {
    const options: any = {
      params: {}
    };

    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }

    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}/deposits`;
    return await this.req.get<QueryDepositsResponse>(endpoint, options);
  }
  /* TallyResult queries the tally of a proposal vote. */


  async tallyResult(params: QueryTallyResultRequest): Promise<QueryTallyResultResponse> {
    const endpoint = `cosmos/gov/v1beta1/proposals/${params.proposalId}/tally`;
    return await this.req.get<QueryTallyResultResponse>(endpoint);
  }

}